const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Make sure this file exists

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Update this line with your correct MongoDB Atlas connection string
mongoose.connect('mongodb+srv://shreyashisekhar:shreya0904@cluster0.ggpebhs.mongodb.net/plyboardDB?retryWrites=true&w=majority')
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ All your auth routes (like /login, /register, etc.)
app.use('/api', authRoutes);

// ✅ Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Server running on all interfaces (0.0.0.0): http://191.191.5.136:3000');
});

