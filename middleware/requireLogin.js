module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'You must logged in!',
    });
  }

  next();
};
