import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from 'body-parser'
import { createServer } from "http";


// routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./config/db.js";
import { initializeSocket } from "./socket/socket.server.js";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const httpServer = createServer(app)

const __dirname = path.resolve();

app.use(bodyParser({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));



initializeSocket(httpServer)
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Replace with your frontend URL
      credentials: true, // Allow credentials (cookies, headers)
  })
);
app.options("*", cors()); // Handle preflight

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV !== 'production'){
  app.use(express.static(path.join(__dirname,"/client/dist")));
  app.get("*" , (req, res)=>{
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
  })
}

// Server
httpServer.listen(PORT, () => {
  console.log("Server started at this port:", PORT);
  connectDB();
});
