const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  res
    .status(statusCode || 500)
    .json({
      error: {
        success: false,
        message: message || "Internal server error"
      }
    });
};

export default errorHandler;
