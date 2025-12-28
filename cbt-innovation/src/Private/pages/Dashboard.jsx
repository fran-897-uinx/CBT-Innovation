import { BookOpen, FileText, MessageCircle, Video, Users } from "lucide-react";

const stats = [
  { title: "Courses", value: 6, icon: BookOpen },
  { title: "Exams", value: 3, icon: FileText },
  { title: "Messages", value: 12, icon: MessageCircle },
  { title: "Video Sessions", value: 2, icon: Video },
  { title: "Study Groups", value: 4, icon: Users },
];

const updates = [
  {
    title: "Mark Scholarship Upcoming",
    startTime: "19-01-2026",
    endTime: "20-03-2026",
    from: "Udemy",
    img: "/undraw_certification_i2m0.svg",
    link: "https://www.com",
  },
  {
    title: "Christmas Study Platform",
    from: "Cursor",
    img: "/undraw_fill-the-blank_n29z.svg",
    link: "https://www.com",
  },
];

const StatCard = ({ title, value, Icon }) => (
  <div className="bg-white rounded-lg p-4 flex items-center justify-between border hover:shadow-sm transition">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
    {Icon && <Icon className="text-blue-600" size={24} />}{" "}
  </div>
);

const UpcomingCard = ({ title, startTime, endTime, from, img, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-100 rounded-lg p-4 border hover:border-blue-700 transition"
  >
    <div className="flex justify-between items-center gap-4">
      <div className="space-y-1">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{from}</p>
        {startTime && (
          <p className="text-xs text-blue-700">Starts: {startTime}</p>
        )}
        {endTime && <p className="text-xs text-red-700">Ends: {endTime}</p>}
      </div>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-16 h-16 object-contain"
      />
    </div>
  </a>
);

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <header>
        <h1 className="text-xl font-semibold text-gray-900">Welcome back</h1>
        <p className="text-sm text-gray-500">
          Here’s your learning overview today.
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <StatCard
            key={s.title}
            title={s.title}
            value={s.value}
            Icon={s.icon}
          />
        ))}
      </div>

      {/* Updates */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Updates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {updates.map((u) => (
            <UpcomingCard key={u.title} {...u} />
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Exams */}
        <div className="lg:col-span-2 bg-white rounded-lg border p-5">
          <h3 className="font-semibold mb-4">Active Exam Preparations</h3>

          <div className="space-y-3">
            {["JAMB 2025", "WAEC SSCE", "UTME Mock"].map((exam) => (
              <div
                key={exam}
                className="flex justify-between items-center p-3 border rounded hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-800">{exam}</p>
                  <p className="text-xs text-gray-500">Progress: In progress</p>
                </div>
                <button className="text-sm text-blue-600 font-medium">
                  Continue
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border p-5">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              "Join Video Session",
              "Start Practice Test",
              "Message a Tutor",
            ].map((action) => (
              <button
                key={action}
                className="w-full border rounded-md p-3 text-left hover:bg-gray-50 transition"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
