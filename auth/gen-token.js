const jwt = require('jsonwebtoken')

module.exports = function generateToken(user) {
    const jwtPayload = {
      subject: user.id,
      username: user.username,
      img: user.img
    }
    const jwtSecret = require('./secret.js').jwtSecret
    console.log(jwtSecret)
    const jwtOptions = {
      expiresIn: "1h"
    }
    return jwt.sign(jwtPayload, jwtSecret, jwtOptions)
  }