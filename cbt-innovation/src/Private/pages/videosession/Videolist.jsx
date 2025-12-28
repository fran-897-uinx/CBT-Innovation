import React, { useState } from "react";
import { Video, Users, Clock, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const initialVideoSessions = [
  {
    id: "abc123",
    title: "JAMB Live Revision – Mathematics",
    status: "live",
    participants: 18,
  },
  {
    id: "def456",
    title: "WAEC Chemistry Q&A",
    status: "scheduled",
    time: "Today, 6:00 PM",
    participants: 0,
  },
];

export default function VideoListPage() {
  const [videoSessions, setVideoSessions] = useState(initialVideoSessions);
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTime, setNewTime] = useState("");
  const [isLive, setIsLive] = useState(true);

  const handleCreateSession = () => {
    if (!newTitle.trim()) return;

    const newSession = {
      id: Date.now().toString(),
      title: newTitle,
      status: isLive ? "live" : "scheduled",
      time: isLive ? undefined : newTime,
      participants: 0,
    };

    setVideoSessions((prev) => [newSession, ...prev]);
    setShowCreate(false);
    setNewTitle("");
    setNewTime("");
    setIsLive(true);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Video Sessions
          </h1>
          <p className="text-sm text-gray-500">
            Join live classes or view upcoming sessions.
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-1 px-3 py-1 rounded-xl bg-gray-900 text-white"
        >
          <Plus size={16} /> New Session
        </button>
      </div>

      {/* Sessions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videoSessions.map((session) => (
          <div
            key={session.id}
            className="bg-white border rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">{session.title}</h2>

              {session.status === "live" ? (
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live now
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={14} />
                  {session.time}
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={14} />
                {session.participants} participants
              </div>
            </div>

            <div className="mt-4">
              {session.status === "live" ? (
                <Link
                  to={`/app/video-sessions/${session.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  <Video size={16} />
                  Join Session
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 bg-gray-100 px-4 py-2 rounded cursor-not-allowed"
                >
                  <Clock size={16} />
                  Scheduled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
            <button
              onClick={() => setShowCreate(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Create Video Session</h2>

            <input
              type="text"
              placeholder="Session Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-3 border rounded-xl mb-4 focus:ring-1 focus:ring-gray-800"
            />

            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={isLive}
                  onChange={() => setIsLive(true)}
                />
                Live Now
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!isLive}
                  onChange={() => setIsLive(false)}
                />
                Schedule
              </label>
            </div>

            {!isLive && (
              <input
                type="datetime-local"
                placeholder="Scheduled Time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full p-3 border rounded-xl mb-4 focus:ring-1 focus:ring-gray-800"
              />
            )}

            <button
              onClick={handleCreateSession}
              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Create Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
