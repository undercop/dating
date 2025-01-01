import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from 'body-parser'

// routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log("CLIENT_URL:", process.env.CLIENT_URL); // Debugging CLIENT_URL

app.use(bodyParser({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
      origin: "http://localhost:5173", // Replace with your frontend URL
      credentials: true, // Allow credentials (cookies, headers)
  })
);
app.options("*", cors()); // Handle preflight

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);

// Server
app.listen(PORT, () => {
  console.log("Server started at this port:", PORT);
  connectDB();
});
