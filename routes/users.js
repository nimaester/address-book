const express = require('express');
const router = express.Router();
const User = require('../schemas/Users');
const { check, validationResult } = require('express-validator');


// POST api/users (register)

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 5 or more chars').isLength({min: 5})
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  } else {
    res.send('passed')
  }

});

module.exports = router;

