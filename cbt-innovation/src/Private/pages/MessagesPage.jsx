import { Link } from "react-router-dom";

const chats = [
  { id: 1, name: "John Doe", last: "Are you ready?" },
  { id: 2, name: "UTME Group", last: "Exam starts tomorrow" },
];

export default function Messages() {
  return (
    <div className="pb-20">
      <h1 className="p-4 text-lg font-semibold">Messages</h1>

      {chats.map(chat => (
        <Link
          key={chat.id}
          to={`/app/messages/${chat.id}`}
          className="flex items-center gap-3 p-4 border-b"
        >
          <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center">
            {chat.name[0]}
          </div>

          <div>
            <p className="font-medium">{chat.name}</p>
            <p className="text-sm text-gray-500">{chat.last}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

