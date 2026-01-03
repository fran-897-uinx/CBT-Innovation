import React from "react";
import {
  Mail,
  Globe,
  Shield,
  Linkedin,
  Facebook,
  Twitter,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = [
  { id: 1, name: "Restaurant Website", link: "#" },
  { id: 2, name: "Portfolio Website", link: "#" },
  { id: 3, name: "AI Analytics", link: "#" },
];

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 mb-16">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
        <p className="text-sm text-gray-500">Public learning identity</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
            DF
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                David Francis
              </h2>
              <p className="text-sm text-gray-500">
                @LearningSpin • Student • Nigeria
              </p>
            </div>

            <p className="text-sm text-gray-600 max-w-xl">
              Aspiring software engineer preparing for JAMB, WAEC, and
              international exams with TestPrep Academy.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact */}
        <div className="bg-white border rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-gray-800">Contact</h3>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail size={16} /> david@example.com
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Globe size={16} /> Nigeria, Imo State (GMT+1)
          </div>
        </div>

        {/* Account Status */}
        <div className="bg-white border rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-gray-800">Account Status</h3>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield size={16} /> Verified account
          </div>

          <p className="text-sm">
            <span className="text-green-600 font-medium">Online</span> •
            Available for chat & video
          </p>
        </div>

        {/* Experience & Projects */}
        <div className="bg-white border rounded-xl p-5 space-y-4 md:col-span-2">
          <h3 className="font-semibold text-gray-800">Experience</h3>

          <p className="text-sm text-gray-700">
            Learning-focused student with hands-on experience building web
            applications and analytics projects.
          </p>

          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-2">Projects</h4>

            <div className="flex flex-wrap gap-2">
              {Projects.map((p) => (
                <Link
                  key={p.id}
                  to={p.link}
                  className="px-3 py-1 text-xs border rounded-full text-gray-700 hover:bg-gray-100"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
