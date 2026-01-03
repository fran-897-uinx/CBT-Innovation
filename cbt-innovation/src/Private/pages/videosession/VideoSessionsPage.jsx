import { useState } from "react";
import { Video, Mic, PhoneOff, Users, X, ScreenShare } from "lucide-react";

const initialParticipants = [
  { id: 1, name: "Avid", phone: "090342403-293" },
  { id: 2, name: "Sarah", phone: "090342403-293" },
  { id: 3, name: "John", phone: "090342403-293" },
  { id: 4, name: "Amina", phone: "090342403-293" },
  { id: 5, name: "James", phone: "090342403-293" },
  { id: 6, name: "Liu", phone: "090342403-293" },
];

export default function VideoSessionPage() {
  // Core states
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [callActive, setCallActive] = useState(true);
  const [participants, setParticipants] = useState(initialParticipants);

  // Role: 'host' | 'participant'
  const [role] = useState("host");

  // Derived values
  const visibleUsers = participants.slice(0, 4);
  const remainingCount = participants.length - visibleUsers.length;

  // Handlers
  const toggleMic = () => setMicOn(!micOn);
  const toggleVideo = () => setVideoOn(!videoOn);
  const toggleScreenShare = () => setScreenSharing(!screenSharing);

  const endCall = () => {
    setMicOn(false);
    setVideoOn(false);
    setScreenSharing(false);
    setCallActive(false);
    setParticipants([]);
    console.log("Call ended");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col relative">
      {/* ===== TOP BAR ===== */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur caption-bottom">
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
        {callActive ? (
          <div className="w-full h-full grid place-items-center bg-gray-900/50">
            {videoOn ? (
              <div className="text-gray-400 text-sm">
                Video Stream Area (WebRTC goes here)
              </div>
            ) : (
              <div className="text-gray-700 text-sm">Camera Off</div>
            )}
          </div>
        ) : (
          <div className="w-full h-full grid place-items-center text-red-500">
            Call Ended
          </div>
        )}
      </div>

      {/* ===== ACTIVE USERS (BOTTOM LEFT) ===== */}
      {callActive && (
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
            <div
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-semibold"
              title={`${remainingCount} more`}
            >
              +{remainingCount}
            </div>
          )}
        </div>
      )}

      {/* ===== CONTROLS ===== */}
      {callActive && (
        <div className="p-2 flex justify-end gap-4 bg-gray-900">
          <button
            onClick={toggleMic}
            className={`p-2 rounded-full ${
              micOn ? "bg-gray-800" : "bg-gray-600"
            } hover:bg-gray-700`}
            aria-label="Toggle Microphone"
          >
            <Mic size={20} />
          </button>

          <button
            onClick={toggleVideo}
            className={`p-2 rounded-full ${
              videoOn ? "bg-gray-800" : "bg-gray-600"
            } hover:bg-gray-700`}
            aria-label="Toggle Video"
          >
            <Video size={20} />
          </button>

          <button
            onClick={endCall}
            className="p-2 rounded-full bg-red-600 hover:bg-red-700"
            aria-label="End Call"
          >
            <PhoneOff size={20} />
          </button>

          {role === "host" && (
            <button
              onClick={toggleScreenShare}
              className={`p-2 rounded-full ${
                screenSharing ? "bg-green-600" : "bg-gray-800"
              } hover:bg-gray-700`}
              aria-label="Toggle Screen Share"
            >
              <ScreenShare size={20} />
            </button>
          )}
        </div>
      )}

      {/* ===== PARTICIPANTS PANEL ===== */}
      {showParticipants && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setShowParticipants(false)}
          />

          {/* Panel */}
          <div
            className={`fixed right-0 top-0 h-full w-72 bg-gray-900 z-40 flex flex-col transition-transform duration-300 ${
              showParticipants ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
                  <div className="flex flex-col">
                    <span className="text-sm">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
