const logger = require('../utils/logger');

const errorHandler = (err, req, res, _next) => {
  let error = { ...err };
  error.message = err.message;

  logger.error(`${err.message}`, { stack: err.stack, url: req.originalUrl, method: req.method });

  if (err.name === 'CastError') {
    error.message = 'Resource not found';
    error.statusCode = 404;
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error.message = `Duplicate value for ${field}. Please use another value.`;
    error.statusCode = 400;
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    error.message = messages.join('. ');
    error.statusCode = 400;
  }

  if (err.name === 'JsonWebTokenError') {
    error.message = 'Invalid token. Please log in again.';
    error.statusCode = 401;
  }

  if (err.name === 'TokenExpiredError') {
    error.message = 'Token expired. Please log in again.';
    error.statusCode = 401;
  }

  if (err.code === 'LIMIT_FILE_SIZE') {
    error.message = 'CV must be 5 MB or smaller.';
    error.statusCode = 400;
  }

  if (err.name === 'MulterError' && err.code === 'LIMIT_UNEXPECTED_FILE') {
    error.message = 'Invalid upload. Please attach one CV file only.';
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
