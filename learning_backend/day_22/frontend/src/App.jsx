import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3500"); // Replace with your backend URL

function App() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleBotReply = (botReply) => {
      setChatHistory((prev) => [...prev, { sender: "bot", text: botReply }]);
    };

    socket.on("ai-message-response", handleBotReply);

    return () => {
      socket.off("ai-message-response", handleBotReply);
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    // Emit message to server
    socket.emit("ai-message", message);

    // Add user message to history
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);

    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="app">
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.sender === "user" ? "user" : "bot"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
