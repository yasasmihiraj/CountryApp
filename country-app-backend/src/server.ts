import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import protectedRoutes from "./routes/protectedRoutes";
import cors from "cors";

dotenv.config();
connectDB();

// Initialize Express App FIRST before using it anywhere
const app = express();

// Middleware Setup
app.use(cors()); // Moved after `app` is initialized
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

// Basic Route to check server status
app.get("/", (_req, res) => {
  res.send("API is running...");
});

// Start Server AFTER all configurations are done
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});