import React, { useState, useRef, useEffect } from "react";
import { Mic, Video, Phone, Send } from "lucide-react";

export default function PersonalChatRoom({ recipient = "Alice" }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: recipient,
      text: "Hey, are you ready for UTME?",
      self: false,
    },
    { id: 2, sender: "You", text: "Yes! Let’s revise together.", self: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: "You", text: newMessage, self: true },
    ]);
    setNewMessage("");
  };

  // Scroll to bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-background sticky top-0 z-10">
        <div>
          <p className="font-semibold">{recipient}</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-background-100 rounded-full hover:bg-muted">
            <Video size={18} />
          </button>
          <button className="p-2 bg-background rounded-full hover:bg-muted">
            <Phone size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-xl break-words ${
                msg.self ? "bg-gray-900 text-white" : "bg-green-700"
              }`}
            >
              {!msg.self && (
                <div className="text-xs font-medium mb-1">{msg.sender}</div>
              )}
              <div>{msg.text}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center p-3 border-t bg-background gap-2 mb-18">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-xl px-3 py-2 focus:ring-1 focus:ring-gray-800"
        />
        <button
          onClick={handleSend}
          className="bg-gray-900 text-white p-3 rounded-xl"
        >
          <Send size={18} />
        </button>
        <button className="p-3 bg-background rounded-xl hover:bg-muted">
          <Mic size={18} />
        </button>
      </div>
    </div>
  );
}
