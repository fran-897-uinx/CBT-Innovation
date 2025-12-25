import React from "react";
import { BookOpen, FileText, MessageCircle, Video, Users } from "lucide-react";

const Blog = [
  {
    title: "Mark Scholarship Upcoming",
    startime: "19-1-2026",
    endtime: "20-3-2026",
    from: "Udemy",
    img: "/undraw_certification_i2m0.svg",
    link: "https://www.com",
  },
  {
    title: "Chrismaxs Study platform Upcoming",
    from: "Cursor",
    img: "/undraw_fill-the-blank_n29z.svg",
    link: "https://www.com",
  },
];

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg md:p-1 p-4 flex items-center justify-around cursor-pointer border-b border-blue-800 hover:border-b-2">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
    <div className="text-blue-600">{icon}</div>
  </div>
);

const Upcomming = ({ title, startime, endtime, from, img, link }) => (
  <a href={link} target="blank">
    <div className="bg-gray-200 rounded-lg md:p-1 p-4 flex items-center justify-around cursor-pointer border-b border-blue-800 hover:border-b-2 md:px-2">
      <div>
        <p className="text-md font-extrabold text-gray-500 italic">{title}</p>
        <h6 className="text-sm font-bold capitalize text-gray-900">{from} </h6>
        <h6 className="text-sm font-semibold text-blue-900">
          {startime}
        </h6>
        <h6 className="text-sm font-semibold text-red-900">
          {endtime}
        </h6>
        <h6 className="text-sm font-semibold text-blue-600"></h6>
      </div>
      <div className="text-gray-700 border-x rounded-2xl p-1.5 hover:border-l-4 w-22 h-22">
        <img src={img} alt={title} className="w-full h-full" />
      </div>
    </div>
  </a>
);
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Welcome back 👋</h1>
        <p className="text-sm text-gray-500">
          Here’s what’s happening with your learning today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <StatCard title="Courses" value="6" icon={<BookOpen />} />
        <StatCard title="Exams" value="3" icon={<FileText />} />
        <StatCard title="Messages" value="12" icon={<MessageCircle />} />
        <StatCard title="Video Sessions" value="2" icon={<Video />} />
        <StatCard title="Study Groups" value="4" icon={<Users />} />
      </div>
      <h4 className="font-extrabold text-2xl font-mono text-gray-800 mb-4">
        Updates
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Blog.map((s, i) => {
          return (
            <div key={i}>
              <Upcomming
                title={s.title}
                startime={s.startime}
                endtime={s.endtime}
                from={s.from}
                img={s.img}
                link={s.link}
              />
            </div>
          );
        })}
      </div>
      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Exams */}
        <div className="lg:col-span-2 bg-white border-r-2 border-gray-900 hover:border-r-4 rounded-lg p-5">
          <h2 className="font-semibold text-gray-800 mb-4">
            Active Exam Preparations
          </h2>

          <div className="space-y-3">
            {["JAMB 2025", "WAEC SSCE", "UTME Mock"].map((exam) => (
              <div
                key={exam}
                className="flex items-center justify-between p-3 rounded border-t border-gray-800 hover:border-t-2 cursor-pointer"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gray-900 transition-colors duration-500"></div>
                <div>
                  <p className="font-medium text-gray-700">{exam}</p>
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
        <div className="bg-white border rounded-lg p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>

          <div className="space-y-3">
            <button className="w-full border rounded-md p-3 text-left hover:bg-gray-50">
              Join Video Session
            </button>
            <button className="w-full border rounded-md p-3 text-left hover:bg-gray-50">
              Start Practice Test
            </button>
            <button className="w-full border rounded-md p-3 text-left hover:bg-gray-50">
              Message a Tutor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
