const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;