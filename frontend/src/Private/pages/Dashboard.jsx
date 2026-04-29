import {
  BookOpen,
  FileText,
  MessageCircle,
  Video,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { title: "Courses", value: 6, Icon: BookOpen },
  { title: "Exams", value: 3, Icon: FileText },
  { title: "Messages", value: 12, Icon: MessageCircle },
  { title: "Video Sessions", value: 2, Icon: Video },
  { title: "Study Groups", value: 4, Icon: Users },
];

const updates = [
  {
    title: "Mark Scholarship Upcoming",
    startTime: "19 Jan 2026",
    endTime: "20 Mar 2026",
    from: "Udemy",
    img: "/undraw_certification_i2m0.svg",
    link: "#",
  },
  {
    title: "Christmas Study Platform",
    from: "Cursor",
    img: "/undraw_fill-the-blank_n29z.svg",
    link: "#",
  },
];
const exams = [
  { title: "JAMB 2025", to: "" },
  { title: "WAEC SSCE", to: "" },
  { title: "UTME Mock", to: "" },
];
const actions = [
  { title: "Join Video Session", to: "/app/video-sessions" },
  { title: "Start Practice Test", to: "/app/exams" },
  { title: "Message a Tutor", to: "/app/messages" },
];
const StatCard = ({ title, value, Icon }) => {
  return (
    <div className="rounded-xl border bg-card p-4 flex items-center gap-4 hover:shadow-sm transition">
      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        {Icon && <Icon size={22} />}
      </div>

      <div>
        <p className="text-sm text-foreground">{title}</p>
        <p className="text-xl font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
};

const UpdateCard = ({ title, startTime, endTime, from, img, link }) => (
  <a
    href={link}
    className="group rounded-xl border bg-gray-50 p-4 flex justify-between items-center hover:border-blue-600 transition"
  >
    <div className="space-y-1">
      <p className="font-medium text-gray-900 group-hover:text-blue-700">
        {title}
      </p>
      <p className="text-xs text-gray-500">{from}</p>
      {startTime && (
        <p className="text-xs text-blue-600">Starts: {startTime}</p>
      )}
      {endTime && <p className="text-xs text-red-600">Ends: {endTime}</p>}
    </div>

    <img
      src={img}
      alt={title}
      className="w-14 h-14 object-contain"
      loading="lazy"
    />
  </a>
);
export default function DashboardPage() {
  return (
    <section
      className="space-y-8 p-4 sm:p-6 max-w-7xl mx-auto
      bg-background
      text-foreground
    "
    >
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Welcome back 👋</h1>
        <p className="text-sm text-foreground">
          Track your progress and continue learning.
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      {/* Updates */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((u) => (
            <UpdateCard key={u.title} {...u} />
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Exams */}
        <div
          className="
          lg:col-span-2
          rounded-xl border
          bg-background
          border-gray-200 dark:border-slate-800
          p-5 space-y-4
        "
        >
          <h3 className="font-semibold">Active Exam Preparation</h3>

          {exams.map((exam) => (
            <div
              key={exam.title}
              className="
                flex items-center justify-between
                rounded-lg border
                border-gray-200 dark:border-slate-800
                p-3
                hover:bg-muted cursor-pointer
                transition
              "
            >
              <div>
                <p className="font-medium">{exam.title}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  In progress
                </p>
              </div>
              <button
                className="
                gap-1
                text-sm font-medium
                text-blue-600 dark:text-blue-400
              "
              >
                <Link to={exams.to} className=" flex items-center">
                  Continue <ArrowRight size={16} />
                </Link>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div
          className="
          rounded-xl border
          bg-background
          border-gray-200 dark:border-slate-800
          p-5 space-y-4
        "
        >
          <h3 className="font-semibold">Quick Actions</h3>

          {actions.map((action) => (
            <button
              className="
                w-full rounded-lg border
                border-gray-200 dark:border-slate-800
                px-4 py-3
                text-left text-sm
                hover:bg-muted
                transition
              "
            >
              <Link key={action.title} to={action.to}>
                {action.title}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
