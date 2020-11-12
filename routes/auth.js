const express = require('express');
const router = express.Router();
const User = require('../schemas/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jsonToken = require('jsonwebtoken');
const config = require('config');

// @route  GET api/auth
// @desc   get user login
// @access private
router.get('/', (req, res) => {
  res.send('Get a logged in user')
});

// @route  POST api/auth
// @desc   auth user and get token
// @access public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check ('password', 'Password is require').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json( {message: 'Invalid Credentials'} );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json( {message: 'Invalid Password'} )
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jsonToken.sign(payload, config.get('jsonTokenSecret'), {
      expiresIn: 360000
    }, (err, token) => {
      if (err) throw err;
      res.json({token});
    })
  } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error')

  }
});


module.exports = router;

