const { io } = require("socket.io-client");

// Connect to your backend server
const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("🟢 Connected to backend with ID:", socket.id);

  // Send a test message
  socket.emit("chat message", "Hello from test client 🧑‍💻");
});

socket.on("chat message", (msg) => {
  console.log("💬 Message received:", msg);
});

socket.on("disconnect", () => {
  console.log("🔴 Disconnected from server");
});
