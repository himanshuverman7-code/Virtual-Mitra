/**
 * Response Handler Utility
 * Standardizes API response handling across all three response formats:
 * 1. Error format: { success: false, message: string, errors: [{ field, message }] }
 * 2. Success format: { success: true, message: string }
 * 3. Success with data: { success: true, data: object }
 */

/**
 * Parse API response and extract data or throw error
 * @param {Object} response - The API response object
 * @returns {Object} Normalized response data
 * @throws {Error} If response is unsuccessful
 */
export const handleApiResponse = (response) => {
  const { success, message, data, errors } = response;

  // Handle error responses
  if (!success) {
    const error = new Error(message || "An error occurred");
    // Attach validation errors if present
    if (errors && Array.isArray(errors) && errors.length > 0) {
      error.validationErrors = errors;
      error.fieldErrors = errors.reduce((acc, err) => {
        acc[err.field] = err.message;
        return acc;
      }, {});
    }
    throw error;
  }

  // Handle success responses
  return {
    success: true,
    message: message || "Operation completed",
    data: data || null,
  };
};

/**
 * Extract field-level errors from validation error array
 * @param {Array} errors - Array of validation errors
 * @returns {Object} Object with field names as keys
 */
export const extractFieldErrors = (errors) => {
  if (!Array.isArray(errors)) return {};
  return errors.reduce((acc, err) => {
    acc[err.field] = err.message;
    return acc;
  }, {});
};

/**
 * Check if error has validation errors
 * @param {Error} error - The error object
 * @returns {boolean}
 */
export const hasValidationErrors = (error) => {
  return (
    error &&
    Array.isArray(error.validationErrors) &&
    error.validationErrors.length > 0
  );
};

/**
 * Get field-specific error message
 * @param {Error} error - The error object
 * @param {string} field - The field name
 * @returns {string|null}
 */
export const getFieldError = (error, field) => {
  return error?.fieldErrors?.[field] || null;
};
