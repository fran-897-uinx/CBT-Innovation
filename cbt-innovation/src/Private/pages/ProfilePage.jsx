import React from "react";
import { Camera, Mail, Globe, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl space-y-6 mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">My Profile</h1>
        <p className="text-sm text-gray-500">
          Manage your public information and learning identity.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="relative w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
            U
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full">
              <Camera size={16} />
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                David Francis
              </h2>
              <p className="text-sm text-gray-500">
                Student • Nigeria
              </p>
            </div>

            <p className="text-sm text-gray-600 max-w-xl">
              Aspiring software engineer preparing for JAMB, WAEC, and
              international exams with TestPrep Academy.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                JAMB
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                WAEC
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                UTME
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact */}
        <div className="bg-white border rounded-lg p-5 space-y-3">
          <h3 className="font-semibold text-gray-800">Contact</h3>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail size={16} /> david@example.com
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Globe size={16} /> Nigeria (GMT+1)
          </div>
        </div>

        {/* Security / Status */}
        <div className="bg-white border rounded-lg p-5 space-y-3">
          <h3 className="font-semibold text-gray-800">Account Status</h3>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield size={16} /> Verified account
          </div>

          <div className="text-sm">
            <span className="text-green-600 font-medium">Online</span> •
            Available for chat & video
          </div>
        </div>
      </div>
    </div>
  );
}
