/**
 * Global Unified Response Handler
 * Single function for all API responses - success, error, and messages
 * Every response includes a message
 */

export const sendResponse = (
  res,
  statusCode = 200,
  message = "Operation completed successfully",
  data = null,
  errors = null,
) => {
  const success = statusCode < 400;

  const response = {
    success,
    message,
  };

  if (data) {
    response.data = data;
  }

  if (errors) {
    response.errors = errors;
  }

  res.status(statusCode).json(response);
};

// Alias functions for backward compatibility
export const successResponse = (
  res,
  statusCode = 200,
  data = {},
  message = "Operation completed successfully",
) => {
  sendResponse(res, statusCode, message, data);
};

export const errorResponse = (
  res,
  statusCode = 500,
  message = "Internal Server Error",
  errors = null,
) => {
  sendResponse(res, statusCode, message, null, errors);
};
