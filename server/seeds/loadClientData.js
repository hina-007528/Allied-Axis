const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CLIENT_DATA = path.join(__dirname, '../../client/src/data');

function stripImports(code) {
  return code.replace(/^import[\s\S]*?;\s*/gm, '');
}

/** Turn react-icons identifiers into string keys for JSON-safe DB storage. */
function iconNamesToStrings(code) {
  return code.replace(/\b(Fa[A-Z][a-zA-Z0-9]*)\b/g, "'$1'");
}

function toCommonJS(code) {
  return code
    .replace(/export default /g, 'module.exports = ')
    .replace(/export const /g, 'exports.')
    .replace(/export function \w+\([^)]*\)\s*\{[^}]*\}\s*/g, '');
}

/** Load a client/src/data/*.js file (strips imports, serializes react-icons). */
function loadDataFile(filename) {
  const filePath = path.join(CLIENT_DATA, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing data file: ${filename}`);
  }
  let code = fs.readFileSync(filePath, 'utf8');
  code = stripImports(iconNamesToStrings(code));
  code = toCommonJS(code);
  const sandbox = { exports: {}, module: { exports: {} } };
  vm.runInNewContext(code, sandbox, { filename: filePath });
  return sandbox.module.exports;
}

/** Load file with named exports merged into one object. */
function loadNamedModule(filename) {
  const filePath = path.join(CLIENT_DATA, filename);
  let code = fs.readFileSync(filePath, 'utf8');
  code = stripImports(iconNamesToStrings(code));
  code = toCommonJS(code);
  const sandbox = { exports: {}, module: { exports: {} } };
  vm.runInNewContext(code, sandbox, { filename: filePath });
  return { ...sandbox.exports, ...(typeof sandbox.module.exports === 'object' ? sandbox.module.exports : {}) };
}

function loadArrayExport(filename) {
  const data = loadDataFile(filename);
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.default)) return data.default;
  const arr = Object.values(data).find(
    (v) => Array.isArray(v) && v.length > 0 && typeof v[0] === 'object' && v[0] !== null
  );
  return arr || [];
}

module.exports = { loadDataFile, loadNamedModule, loadArrayExport, CLIENT_DATA };
