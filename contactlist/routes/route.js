const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts', (req, res, next) => {
  Contact.find((err, contacts) => {
    res.json(contacts);
  });
});

//add contact
router.post('/contact', (req, res, next) => {
  let newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });
  newContact.save((err, contact) => {
    if (err) res.json({ msg: 'Failed to add contact' });
    else res.json({ msg: 'Contact added sucessfully' });
  });
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
  Contact.remove({ _id: req.params.id }, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

module.exports = router;
