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

function stripExportedFunctions(code) {
  const marker = 'export function ';
  let result = code;
  while (result.includes(marker)) {
    const start = result.indexOf(marker);
    const braceStart = result.indexOf('{', start);
    if (braceStart === -1) break;

    let depth = 0;
    let end = braceStart;
    for (let i = braceStart; i < result.length; i += 1) {
      if (result[i] === '{') depth += 1;
      if (result[i] === '}') {
        depth -= 1;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    result = result.slice(0, start) + result.slice(end);
  }
  return result;
}

function toCommonJS(code) {
  return stripExportedFunctions(code)
    .replace(/export default /g, 'module.exports = ')
    .replace(/export const /g, 'exports.');
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
