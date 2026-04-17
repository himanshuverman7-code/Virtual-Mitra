import { errorResponse } from "../utils/responseHandler.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || null;

  errorResponse(res, statusCode, message, errors);
};

export default errorHandler;
