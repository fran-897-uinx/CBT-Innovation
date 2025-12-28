// import React, { useState } from "react";
// import { Plus, X, User } from "lucide-react";

// const initialMessages = [
//   { id: 1, sender: "Alice", text: "Hello everyone", self: false },
//   { id: 2, sender: "You", text: "Hi 👋", self: true },
// ];

// const initialMembers = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "David" },
//   { id: 5, name: "Eve" },
// ];

// export default function ChatRoom() {
//   const [messages, setMessages] = useState(initialMessages);
//   const [newMessage, setNewMessage] = useState("");
//   const [members, setMembers] = useState(initialMembers);
//   const [showModal, setShowModal] = useState(false);
//   const [newMemberName, setNewMemberName] = useState("");

//   const handleSend = () => {
//     if (!newMessage.trim()) return;
//     setMessages([
//       ...messages,
//       { id: messages.length + 1, sender: "You", text: newMessage, self: true },
//     ]);
//     setNewMessage("");
//   };

//   const handleAddMember = () => {
//     if (!newMemberName.trim()) return;
//     setMembers([...members, { id: members.length + 1, name: newMemberName }]);
//     setNewMemberName("");
//     setShowModal(false);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div className="p-4 border-b flex justify-between items-center font-semibold bg-white sticky top-0 z-20">
//         <div>UTME Group</div>
//         <button
//           className="flex items-center gap-1 px-2 py-1 bg-gray-900 text-white rounded-xl text-sm"
//           onClick={() => setShowModal(true)}
//         >
//           <Plus size={16} /> Add Member
//         </button>
//       </div>

//       {/* Members Section */}
//       <div className="flex gap-2 overflow-x-auto p-2 bg-gray-100 border-b">
//         {members.slice(0, 4).map((m) => (
//           <div key={m.id} className="flex flex-col items-center">
//             <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center">
//               {m.name[0]}
//             </div>
//             <span className="text-xs">{m.name}</span>
//           </div>
//         ))}
//         {members.length > 4 && (
//           <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
//             +{members.length - 4}
//           </div>
//         )}
//       </div>

//       {/* Messages */}
//       <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`p-3 rounded-xl w-fit max-w-xs ${
//               msg.self
//                 ? "self-end bg-gray-900 text-white"
//                 : "self-start bg-gray-100"
//             }`}
//           >
//             {!msg.self && (
//               <div className="text-xs font-semibold">{msg.sender}</div>
//             )}
//             <div>{msg.text}</div>
//           </div>
//         ))}
//       </div>

//       {/* Input */}
//       <div className="p-3 border-t flex gap-2 bg-white">
//         <input
//           className="flex-1 border rounded-xl px-3 py-3"
//           placeholder="Type a message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-gray-900 text-white px-4 rounded-xl"
//         >
//           Send
//         </button>
//       </div>

//       {/* Add Member Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//           <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//             >
//               <X size={20} />
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Add New Member</h2>
//             <input
//               type="text"
//               placeholder="Member Name"
//               value={newMemberName}
//               onChange={(e) => setNewMemberName(e.target.value)}
//               className="w-full p-3 border rounded-xl mb-4 focus:ring-1 focus:ring-gray-800"
//             />
//             <button
//               onClick={handleAddMember}
//               className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
//             >
//               Add Member
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
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
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-10">
        <div>
          <p className="font-semibold">{recipient}</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Video size={18} />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
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
                msg.self ? "bg-gray-900 text-white" : "bg-gray-100"
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
      <div className="flex items-center p-3 border-t bg-white gap-2">
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
        <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
          <Mic size={18} />
        </button>
      </div>
    </div>
  );
}
