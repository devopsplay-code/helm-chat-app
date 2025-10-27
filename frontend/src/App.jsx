import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io(import.meta.env.VITE_API_URL || "http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setUserId(socket.id); // store your unique socket ID
    });

    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", { text: message, sender: socket.id });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>💭 Helm Chat</h1>
      </header>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === userId ? "sent" : "received"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
