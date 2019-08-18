const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const jwtSecret = require('../secret.js').jwtSecret

  if (token) {
    jwt.verify(token, jwtSecret, async (err, user) => {
      if(err) {
        res.status(402).json({you: 'you shall not pass'})
      } else {
        try {
          const foundUser = await Users.findById(user.id)

          if (foundUser) {
            req.user = foundUser
            console.log('nexy')
            next()
          } else {
            throw new Error('not auth')
          }
        } catch (err) {
          return res.status(401)
        }
      }
    })
  } else {
    res.status(401).json({you: 'you shall not pass'})
  }
};
