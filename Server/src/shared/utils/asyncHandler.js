/**
 * A middleware to handle asynchronous route handlers and catch errors.
 * @param {Function} fn - The asynchronous route handler function to be wrapped.
 * @returns {Function} A new function that wraps the original route handler and catches any errors.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res))
  .catch((err) => next(err));
};

export default asyncHandler;
