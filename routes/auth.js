const express = require('express');
const router = express.Router();

// @route  GET api/auth
// @desc   get user login
// @access private
router.get('/', (req, res) => {
  res.send('Get a logged in user')
});

// @route  POST api/auth
// @desc   auth user and get token
// @access public
router.get('/', (req, res) => {
  res.send('Login User')
});


module.exports = router;

