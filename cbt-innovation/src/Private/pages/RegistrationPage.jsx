import React from "react";
import { Link } from "react-router-dom";

const registrations = [
  {
    name: "UTME (JAMB)",
    country: "Nigeria",
    status: "open",
    internal: true,
    link: "/app/registration/utme",
  },
  {
    name: "WAEC",
    country: "West Africa",
    status: "closed",
    internal: false,
    link: "#",
  },
  {
    name: "IELTS",
    country: "Global",
    status: "open",
    internal: true,
    link: "/app/registration/ielts",
  },
  {
    name: "TPA Internal Exam",
    country: "Online",
    status: "always open",
    internal: true,
    link: "/app/registration/tpa",
  },
];

const RegistrationPage = () => {
  return (
    <div className="p-4 pb-20 bg-background min-h-screen">
      {/* Registered Exams Section */}
      <h1 className="text-xl font-semibold mb-4">Registered Exams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <p className="text-sm text-gray-500 col-span-full">
          No registered exams yet.
        </p>
      </div>

      {/* Exam Registration Section */}
      <h1 className="text-xl font-semibold mb-4">Exam Registration</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {registrations.map((reg, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-gray-900">{reg.name}</h3>
              <p className="text-sm text-gray-500">{reg.country}</p>

              {/* Status Badge */}
              <span
                className={`inline-flex gap-2 mt-3 text-sm px-3 py-1 rounded-full font-semibold capitalize items-center ${
                  reg.status.toLowerCase() === "open" ||
                  reg.status.toLowerCase() === "always open"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {reg.status}
              </span>
            </div>

            {/* Action Button */}
            {reg.internal ? (
              <Link
                to={reg.link}
                className="mt-4 w-full py-2 text-sm rounded-xl bg-blue-600 text-white text-center hover:bg-blue-700 transition"
              >
                Register Now
              </Link>
            ) : (
              <a
                href={reg.link}
                className="mt-4 w-full py-2 text-sm rounded-xl bg-gray-900 text-white text-center hover:bg-gray-800 transition"
              >
                View Guide
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationPage;
