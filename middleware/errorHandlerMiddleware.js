function errorHandlerMiddleware(err, req, res, next) {
  res.status(500).send("some error happend.");
}

export default errorHandlerMiddleware;
