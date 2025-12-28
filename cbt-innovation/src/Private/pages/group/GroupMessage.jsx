export default function GroupMessages({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs p-3 rounded-xl ${
              msg.self ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
          >
            {!msg.self && (
              <div className="text-xs font-medium mb-1">{msg.sender}</div>
            )}
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
