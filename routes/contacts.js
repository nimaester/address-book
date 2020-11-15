const express = require('express');
const router = express.Router();
const User = require('../schemas/Users');
const Contact = require('../schemas/Contact');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
// const bcrypt = require('bcryptjs');
// const jsonToken = require('jsonwebtoken');
// const config = require('config');


// GET api/contacts (get a specific users contacts)

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({user: req.user.id}).sort({date: -1})
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// POST api/contacts (add new contact)

router.post('/', [ auth, [
  check("name", "Name is required").not().isEmpty()
]],(req, res) => {
  res.send('add a contact')
});

// PUT api/contacts/:id (update a contact)
router.put('/:id', (req, res) => {
  res.send('update a contact')
});

// DELETE api/contacts/:id (delete a contact)

router.delete('/:id', (req, res) => {
  res.send('delete a contact')
});

module.exports = router;

