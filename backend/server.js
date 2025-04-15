const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// MongoDB connection
//const mongoURI = 'mongodb+srv://nmnsxna:shreyashi@cluster0.eh7qyxs.mongodb.net/'; // Secure this later
const mongoURI = 'mongodb+srv://nmnsxna:shreyashi@cluster0.eh7qyxs.mongodb.net/login_app?retryWrites=true&w=majority&appName=Cluster0';


async function connectDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

connectDB();

// Server start
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

//for checking it is working in chrome or not
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});
