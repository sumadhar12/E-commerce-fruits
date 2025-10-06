const dotenv = require("dotenv");
// Load environment variables
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS setup for both local + production
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ✅ Basic health check route
app.get("/", (req, res) => {
  res.send("OrganicFruit backend is running successfully! 🚀");
});

// ✅ Load routes
app.use("/api/auth", require("./routes/authRoutes"));
// You can add others: app.use('/api/products', require('./routes/productRoutes'));

// ✅ Database connection helper
const connectToDatabase = async () => {
  return mongoose.connect(process.env.MONGO_URI);
};

// ✅ Start server
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectToDatabase();
    console.log("db connected successfully");
    if (!process.env.VERCEL) {
      app.listen(port, () => console.log(`server is running on port ${port}`));
    }
  } catch (error) {
    console.log(error);
  }
};

start();
