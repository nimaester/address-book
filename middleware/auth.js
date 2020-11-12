const jsonToken = require('jsonwebtoken');
const config = require('config');


module.exports = ((req,res, next) => {
  // get token
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({message: 'No token, denied access'})
  }

  try {
    const decoded = jsonToken.verify(token, config.get('jsonTokenSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({message: 'Token is not valid'});
  }
})