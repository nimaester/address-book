const express = require('express');
const router = express.Router();
const User = require('../schemas/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


// POST api/users (register)

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 5 or more chars').isLength({min: 5})
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json( {msg: "User exists alreay."} )
    }
    user = new User({
      name,
      email,
      password
    })

    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send('User saved')
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error!')
  }

});

module.exports = router;

