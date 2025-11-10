const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Admin-only route
router.get('/all-users', auth(['admin']), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User dashboard
router.get('/dashboard', auth(['user', 'admin']), (req, res) => {
  res.json({ message: `Welcome ${req.user.role}` });
});

module.exports = router;
