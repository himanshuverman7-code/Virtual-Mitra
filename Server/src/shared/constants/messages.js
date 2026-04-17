/**
 * Global Messages and Status Codes
 * Centralized messages for consistent API responses
 */

export const HTTP_STATUS = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,

  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

export const AUTH_MESSAGES = {
  // Success
  LOGIN_SUCCESS: "Login successful",
  REGISTER_SUCCESS: "Registration successful",
  LOGOUT_SUCCESS: "Logged out successfully",
  OTP_SENT: "OTP sent successfully",
  OTP_VERIFIED: "OTP verified successfully",
  TOKEN_REFRESHED: "Token refreshed successfully",

  // Errors
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists with this email",
  INVALID_CREDENTIALS: "Invalid email or password",
  OTP_EXPIRED: "OTP has expired",
  OTP_INVALID: "Invalid OTP",
  INVALID_TOKEN: "Invalid or expired token",
  REFRESH_TOKEN_NOT_FOUND: "Refresh token not found",
  INVALID_REFRESH_TOKEN: "Invalid refresh token",
  UNAUTHORIZED_ACCESS: "Unauthorized access",
  SESSION_EXPIRED: "Your session has expired, please login again",
};

export const PRODUCT_MESSAGES = {
  // Success
  PRODUCT_CREATED: "Product created successfully",
  PRODUCT_UPDATED: "Product updated successfully",
  PRODUCT_DELETED: "Product deleted successfully",
  PRODUCTS_FETCHED: "Products fetched successfully",
  PRODUCT_FETCHED: "Product fetched successfully",

  // Errors
  PRODUCT_NOT_FOUND: "Product not found",
  INVALID_PRODUCT_DATA: "Invalid product data",
  PRODUCT_ALREADY_EXISTS: "Product already exists",
  INSUFFICIENT_PERMISSIONS: "You do not have permission to perform this action",
};

export const USER_MESSAGES = {
  // Success
  USER_FETCHED: "User fetched successfully",
  USER_UPDATED: "User updated successfully",
  PROFILE_FETCHED: "Profile fetched successfully",

  // Errors
  USER_NOT_FOUND: "User not found",
  INVALID_USER_DATA: "Invalid user data",
  EMAIL_ALREADY_EXISTS: "Email already exists",
};

export const VALIDATION_MESSAGES = {
  VALIDATION_FAILED: "Validation failed",
  REQUIRED_FIELD: "This field is required",
  INVALID_EMAIL: "Invalid email address",
  INVALID_PASSWORD: "Password must be at least 6 characters",
  INVALID_PHONE: "Invalid phone number",
};

export const COMMON_MESSAGES = {
  SUCCESS: "Operation completed successfully",
  ERROR: "An error occurred",
  INTERNAL_ERROR: "Internal server error",
  NOT_FOUND: "Resource not found",
  BAD_REQUEST: "Bad request",
  TIMEOUT: "Request timeout",
};
