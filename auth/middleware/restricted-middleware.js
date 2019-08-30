const jwt = require('jsonwebtoken');
const Users = require('../../users/users-model');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const jwtSecret = require('../secret.js').jwtSecret;

  if (token) {
    jwt.verify(token, jwtSecret, async (err, user) => {
      if (err) {
        res.status(402).json({ you: 'err' });
      } else {
        try {
          const foundUser = await Users.findById(user.subject);

          if (foundUser) {
            req.user = foundUser;
            next();
          } else {
            throw new Error('not auth');
          }
        } catch (err) {
          return res.status(401);
        }
      }
    });
  } else {
    res.status(401).json({ you: 'you shall not pass' });
  }
};