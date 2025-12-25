export default function ChatRoom() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b font-semibold">
        UTME Group
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        <div className="self-start bg-gray-100 p-3 rounded-xl w-fit">
          Hello everyone
        </div>

        <div className="self-end bg-gray-900 text-white p-3 rounded-xl w-fit">
          Hi 👋
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          className="flex-1 border rounded-xl px-3 py-3"
          placeholder="Type a message"
        />
        <button className="bg-gray-900 text-white px-4 rounded-xl">
          Send
        </button>
      </div>
    </div>
  );
}
