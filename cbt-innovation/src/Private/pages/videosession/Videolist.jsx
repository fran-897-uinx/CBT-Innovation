import { Video, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const videoSessions = [
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
  {
    id: "ghi789",
    title: "UTME Mock Review",
    status: "live",
    participants: 9,
  },
  {
    id: "jkl012",
    title: "SAT Prep – Algebra",
    status: "scheduled",
    time: "Tomorrow, 4:00 PM",
    participants: 0,
  },
];

export default function VideoListPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Video Sessions</h1>
        <p className="text-sm text-gray-500">
          Join live classes or view upcoming sessions.
        </p>
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

              {/* Status */}
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

              {/* Participants */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={14} />
                {session.participants} participants
              </div>
            </div>

            {/* Action */}
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
    </div>
  );
}
