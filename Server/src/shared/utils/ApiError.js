/**
 * Custom error class for API errors.
 * @class ApiError
 * @extends Error
 * @param {number} statusCode - The HTTP status code associated with the error (e.g., 400, 401, 404, 500).
 * @param {string} message - A descriptive message explaining the error.
 * @param {array} errors - Optional array of detailed error information for validation errors.
 */
class ApiError extends Error {
  constructor(statusCode, message, errors = null) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiError;
