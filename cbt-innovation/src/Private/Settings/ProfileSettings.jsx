import { useState } from "react";
import {
  Camera,
  Chrome,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  FaChrome,
  FaChromecast,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
  FaStackOverflow,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function ProfileSettings() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Profile Settings
        </h1>
        <p className="text-sm text-gray-500">
          Manage how your profile appears to others
        </p>
      </div>

      {/* Visibility */}
      <section className="bg-white border rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium">Profile Visibility</h2>
            <p className="text-sm text-gray-500">
              Control who can see your profile
            </p>
          </div>

          <button
            onClick={() => setIsPublic(!isPublic)}
            className={`w-12 h-6 rounded-full relative transition ${
              isPublic ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                isPublic ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </section>

      {/* Avatar */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">Profile Photo</h2>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <Camera className="text-gray-500" />
          </div>
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
            Upload Avatar
          </button>
        </div>
      </section>

      {/* Basic Info */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">Basic Information</h2>

        <div>
          <label className="text-sm text-gray-600">Username</label>
          <input className="w-full border rounded-lg p-3 text-sm" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Full name</label>
          <input className="w-full border rounded-lg p-3 text-sm" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            disabled
            className="w-full border rounded-lg p-3 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>
      </section>

      {/* About */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">About You</h2>

        <textarea
          rows={3}
          placeholder="Short public bio"
          className="w-full border rounded-lg p-3 text-sm resize-none"
        />

        <textarea
          rows={3}
          placeholder="Case of study / learning focus"
          className="w-full border rounded-lg p-3 text-sm resize-none"
        />
      </section>

      {/* Location */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Country"
            className="border rounded-lg p-3 text-sm"
          />
          <input
            placeholder="State"
            className="border rounded-lg p-3 text-sm"
          />
        </div>
      </section>

      {/* Links */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">Social Links</h2>

        {[
          {
            icon: <FaTwitter className="text-blue-700" size={23} />,
            label: "Twitter",
          },
          {
            icon: <FaFacebookF className="text-blue-800" size={23} />,
            label: "Facebook",
          },
          {
            icon: <FaGithub className="text-gray-900" size={20} />,
            label: "GitHub",
          },
          {
            icon: <FaLinkedinIn className="text-blue-700" size={20} />,
            label: "LinkedIn",
          },
          {
            icon: <FaStackOverflow size={23} className="text-orange-600" />,
            label: "StackOverflow",
          },
          { icon: <FaTiktok size={23} />, label: "TikTok" },
          { icon: <FaChrome className="text-green-600" />, label: "Website" },
          {
            icon: <FaInstagramSquare className="text-red-600" />,
            label: "Instagram",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className="w-12 h-12 border rounded-l-lg flex items-center justify-center bg-gray-50">
              {item.icon}
            </div>
            <input
              placeholder={item.label}
              className="w-full border-t border-b border-r rounded-r-lg p-3 text-sm outline-none"
            />
          </div>
        ))}
      </section>

      {/* Security */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-medium">Security</h2>
        <input
          type="password"
          placeholder="Confirm password to save changes"
          className="w-full border rounded-lg p-3 text-sm"
        />
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm hover:bg-gray-800">
          Save Changes
        </button>
      </div>
    </div>
  );
}
