const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: process.env.please_login });
  }
  jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: process.env.please_log_in_again });
    }
    req.user = decodedToken;
    next();
  });
};
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Yetersiz Yetki' });
  }
  next();
};
module.exports = { checkAuth, isAdmin };
