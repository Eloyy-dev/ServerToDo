function handleError(error, req, res, next) {
  const { status, errorContent } = error;
  res.status(status).json({
    message: "ups, algo va bien",
    error: errorContent.message,
  });
}


module.exports = handleError;