const dotenv = require('dotenv');
// Load environment variables
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS setup for both local + production
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:3000'
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Basic health check route
app.get('/', (req, res) => {
  res.send('OrganicFruit backend is running successfully! 🚀');
});

// ✅ Load routes
app.use('/api/auth', require('./routes/authRoutes'));
// You can add others: app.use('/api/products', require('./routes/productRoutes'));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ DB connection error:', err.message));

// ✅ Serve frontend build when in production
if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '../client/build');
  app.use(express.static(clientPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

// ✅ Export for serverless (e.g., Vercel) and run locally otherwise
if (process.env.VERCEL) {
  // On Vercel, export the app without listening
  module.exports = app;
} else {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
