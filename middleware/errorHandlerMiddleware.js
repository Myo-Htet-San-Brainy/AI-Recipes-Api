function errorHandlerMiddleware(err, req, res, next) {
  console.log(err);
  res.status(500).send("some error happend.");
}

export default errorHandlerMiddleware;
