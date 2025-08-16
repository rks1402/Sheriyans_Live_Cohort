document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");
  const chatHistory = document.getElementById("chat-history");
  const newChatBtn = document.getElementById("new-chat-btn");

  let currentChat = [];
  let historyList = [];

  // Add message to chat
  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Handle form submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage, "user");
    currentChat.push({ sender: "user", text: userMessage });
    chatInput.value = "";

    // Simulate bot reply
    setTimeout(() => {
      const botReply = "This is a sample bot response.";
      addMessage(botReply, "bot");
      currentChat.push({ sender: "bot", text: botReply });
    }, 500);
  });

  // New chat
  newChatBtn.addEventListener("click", () => {
    if (currentChat.length > 0) {
      historyList.push(currentChat);
      const chatItem = document.createElement("li");
      chatItem.textContent = `Chat ${historyList.length}`;
      chatHistory.appendChild(chatItem);

      chatItem.addEventListener("click", () => {
        chatMessages.innerHTML = "";
        currentChat.forEach(msg => addMessage(msg.text, msg.sender));
      });
    }
    currentChat = [];
    chatMessages.innerHTML = "";
  });
});
