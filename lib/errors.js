/**
 * Validation Error check when there is an error is catched while validating
 * @param {string} message - Error message detailing why validation failed
 */

class ValidationError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
  }
}

module.exports = {
  ValidationError,
  NotFoundError,
};
