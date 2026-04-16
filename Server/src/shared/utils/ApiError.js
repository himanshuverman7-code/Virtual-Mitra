/**
 * Custom error class for API errors.
 * @class ApiError
 * @extends Error
 * @param {number} statusCode - The HTTP status code associated with the error (e.g., 400, 401, 404, 500).
 * @param {string} message - A descriptive message explaining the error.
 */
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ApiError;