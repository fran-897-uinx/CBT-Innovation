import { Search, BookOpen, Video, Users, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const mockResults = {
  courses: [
    { id: 1, title: "JAMB Mathematics", path: "/app/courses/1" },
    { id: 2, title: "WAEC English Language", path: "/app/courses/2" },
  ],
  exams: [{ id: 1, title: "UTME Mock Test", path: "/app/exams/1" }],
  videos: [
    {
      id: "abc",
      title: "JAMB Live Revision",
      status: "live",
      path: "/app/video-sessions/abc",
    },
  ],
  users: [
    { id: 1, name: "Sarah (Tutor)", path: "/app/profile/1" },
    { id: 2, name: "David (Student)", path: "/app/profile/2" },
  ],
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const hasResults =
    mockResults.courses.length ||
    mockResults.exams.length ||
    mockResults.videos.length ||
    mockResults.users.length;

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Search</h1>
        <p className="text-sm text-gray-500">
          Find courses, exams, live classes, and people.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search TestPrep Academy..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {[
          { id: "all", label: "All" },
          { id: "courses", label: "Courses" },
          { id: "exams", label: "Exams" },
          { id: "videos", label: "Video Sessions" },
          { id: "users", label: "People" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`px-3 py-1.5 rounded-full text-sm  ${
              filter === item.id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {!hasResults ? (
        <p className="text-gray-500 text-sm">No results found.</p>
      ) : (
        <div className="space-y-6">
          {/* Courses */}
          {(filter === "all" || filter === "courses") &&
            mockResults.courses.length > 0 && (
              <Section title="Courses" icon={<BookOpen size={16} />}>
                {mockResults.courses.map((item) => (
                  <ResultLink key={item.id} to={item.path}>
                    {item.title}
                  </ResultLink>
                ))}
              </Section>
            )}

          {/* Exams */}
          {(filter === "all" || filter === "exams") &&
            mockResults.exams.length > 0 && (
              <Section title="Exams" icon={<FileText size={16} />}>
                {mockResults.exams.map((item) => (
                  <ResultLink key={item.id} to={item.path}>
                    {item.title}
                  </ResultLink>
                ))}
              </Section>
            )}

          {/* Videos */}
          {(filter === "all" || filter === "videos") &&
            mockResults.videos.length > 0 && (
              <Section title="Video Sessions" icon={<Video size={16} />}>
                {mockResults.videos.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="flex items-center  border-b justify-between p-3   hover:bg-gray-50"
                  >
                    <span className="text-sm">{item.title}</span>
                    {item.status === "live" && (
                      <span className="text-xs text-green-600 font-medium">
                        Live
                      </span>
                    )}
                  </Link>
                ))}
              </Section>
            )}

          {/* Users */}
          {(filter === "all" || filter === "users") &&
            mockResults.users.length > 0 && (
              <Section title="People" icon={<Users size={16} />}>
                {mockResults.users.map((item) => (
                  <ResultLink key={item.id} to={item.path}>
                    {item.name}
                  </ResultLink>
                ))}
              </Section>
            )}
        </div>
      )}
    </div>
  );
}

/* Reusable components */
function Section({ title, icon, children }) {
  return (
    <div className=" p-4 space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        {icon}
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ResultLink({ to, children }) {
  return (
    <Link to={to} className="block p-3 border-b hover:bg-gray-50 text-sm">
      {children}
    </Link>
  );
}
