// routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt with:', email, password);

  try {
    const user = await User.findOne({ email });
    const allUsers = await User.find();
    console.log('All users in DB:', allUsers);
    if (!user) return res.status(401).json({ message: 'User not found' });

    if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


// router.get('/ping', (req, res) => {
//     res.send('pong');
//   });
  