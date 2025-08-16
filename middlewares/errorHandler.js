function errorHandler(err, req, res, next) {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({
      errorsMessages: err.errors.map((el) => ({ message: el.message })),
    });
  } else if (err.status) {
    res.status(err.status).json({ message: err.msg });
  } else if (err.name === "SequelizeDatabaseError") {
    res.status(400).json({
        message: err.message
    })
  } else {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { errorHandler };
