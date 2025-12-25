import { useState } from "react";
import { Video, Mic, PhoneOff, Users, X } from "lucide-react";

const participants = [
  { id: 1, name: "David" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "John" },
  { id: 4, name: "Amina" },
  { id: 5, name: "James" },
  { id: 6, name: "Liu" },
];

export default function VideoSessionPage() {
  const [showParticipants, setShowParticipants] = useState(false);

  const visibleUsers = participants.slice(0, 4);
  const remainingCount = participants.length - visibleUsers.length;

  return (
    <div className="h-screen bg-black text-white flex flex-col relative">
      {/* ===== TOP BAR ===== */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur">
        <span className="text-sm font-semibold">Live Video Session</span>

        <button
          onClick={() => setShowParticipants(true)}
          className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded hover:bg-white/20"
        >
          <Users size={16} />
          Participants
        </button>
      </div>

      {/* ===== VIDEO AREA ===== */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-full grid place-items-center">
          <div className="text-gray-400 text-sm">
            Video Stream Area (WebRTC goes here)
          </div>
        </div>
      </div>

      {/* ===== ACTIVE USERS (BOTTOM LEFT) ===== */}
      <div className="absolute bottom-24 left-4 flex items-center gap-2 z-20">
        {visibleUsers.map((user) => (
          <div
            key={user.id}
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold"
            title={user.name}
          >
            {user.name[0]}
          </div>
        ))}

        {remainingCount > 0 && (
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-semibold">
            +{remainingCount}
          </div>
        )}
      </div>

      {/* ===== CONTROLS ===== */}
      <div className="p-4 flex justify-center gap-6 bg-gray-900">
        <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
          <Mic />
        </button>

        <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
          <Video />
        </button>

        <button className="p-3 rounded-full bg-red-600 hover:bg-red-700">
          <PhoneOff />
        </button>
      </div>

      {/* ===== PARTICIPANTS PANEL ===== */}
      {showParticipants && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setShowParticipants(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-72 bg-gray-900 z-40 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
              <h2 className="text-sm font-semibold">Participants</h2>
              <button onClick={() => setShowParticipants(false)}>
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {participants.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-2 rounded hover:bg-gray-800"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold">
                    {user.name[0]}
                  </div>
                  <span className="text-sm">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
