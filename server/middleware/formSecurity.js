const AppError = require('../utils/AppError');
const { runFormSecurityChecks } = require('../utils/formSecurity');

/** Honeypot + minimum fill time — run after body is parsed (JSON or multipart fields). */
function formSecurity(req, _res, next) {
  try {
    runFormSecurityChecks(req.body || {});
    next();
  } catch (err) {
    next(err instanceof AppError ? err : new AppError('Invalid submission.', 400));
  }
}

module.exports = formSecurity;
