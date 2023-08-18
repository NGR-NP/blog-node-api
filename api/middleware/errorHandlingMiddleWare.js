const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  const stack = err.stack;

  res.status(status).json({
    status,
    message,
    stack,
  });
};
export default errorHandler;
