import ApiError from "../utils/ApiError.js";

const validate = (schema) => {
  return (req, res, next) => {
    const data = "GET" === req.method ? req.query: req.body;
    const { error, value } = schema.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });
    if (error) {
      return next(
        new ApiError(
          400,
          `An error occured during validating: ${error.details[0].message}`,
        ),
      );
    }
    req.body = value;
    next();
  };
};

export default validate;
