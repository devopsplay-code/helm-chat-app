// Importing required packages
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Create an Express app
const app = express();
app.use(cors());

// Create an HTTP server and attach Socket.IO to it
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins for now (frontend will connect here)
  },
});

// Handle client connections
io.on("connection", (socket) => {
  console.log("🟢 A user connected:", socket.id);

  // Listen for chat messages
  socket.on("chat message", (msg) => {
    console.log("💬 Message:", msg);
    io.emit("chat message", msg); // send to everyone
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("🔴 A user disconnected:", socket.id);
  });
});

// Basic API route
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
