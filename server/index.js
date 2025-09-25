import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // if you have it
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// normal auth routes
app.use("/api/auth", authRoutes);

// admin routes
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
