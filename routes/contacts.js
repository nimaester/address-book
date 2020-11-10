const express = require('express');
const router = express.Router();

// GET api/contacts (get a specific users contacts)

router.get('/', (req, res) => {
  res.send('Get all contacts')
});

// POST api/contacts (add new contact)

router.post('/', (req, res) => {
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

