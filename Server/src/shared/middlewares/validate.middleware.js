import ApiError from "../utils/ApiError.js";

const validate = (schema) => {
  return (req, res, next) => {
    const data = "GET" === req.method ? req.query : req.body;
    const { error, value } = schema.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return next(new ApiError(400, "Validation failed", errors));
    }

    if ("GET" === req.method) {
      req.query = value;
    } else {
      req.body = value;
    }

    next();
  };
};

export default validate;
