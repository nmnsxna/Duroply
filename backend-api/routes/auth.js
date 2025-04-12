const express = require('express');
const router = express.Router();
const User = require('../models/User');
// ✅ Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Error during registration:", err);
    res.status(500).json({ message: "Error registering user" });
  }
});


// Login route

router.post('/login', async (req, res) => {
  console.log("Received login data:", req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
