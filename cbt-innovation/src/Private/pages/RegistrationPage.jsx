import React from "react";

const registrations = [
  {
    name: "UTME (JAMB)",
    country: "Nigeria",
    status: "open",
  },
  {
    name: "WAEC",
    country: "West Africa",
    status: "Closed",
  },
  {
    name: "IELTS",
    country: "GLObal",
    status: "open",
  },
  {
    name: "TPA Internal Exam",
    country: "Online",
    status: "Always Open",
    internal: true,
  },
];

const RegistrationPage = () => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-lg font-semibold mb-4">Exam Registration</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {registrations.map((reg, index) => (
          <div key={index} className="border rounded-2xl p-4 bg-white/70">
            <h3 className="font-semibold">{reg.name}</h3>
            <p className="text-sm text-gray-500">{reg.country}</p>

            <span
              className={`inline-flex gap-1 mt-2 text-sm px-2 py-0.5 rounded-full font-bold capitalize items-center ${
                reg.status === "open"
                  ? "bg-green-200 text-green-800"
                  : "bg-gray-400 text-gray-800"
              }`}
            >
              <span
                className={`rounded-full w-2 p-1 transition-all inset-x-0 h-2 relative ${
                  reg.status.toLowerCase() === "open"
                    ? "bg-green-800 bg-gradient-to-r from-transparent via-green-900 to-transparent"
                    : "bg-gray-700 bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                }`}
              />
              {reg.status}
            </span>
            <button
              className={`mt-4 w-full py-2 rounded-xl text-sm cursor-pointer ${
                reg.internal
                  ? "bg-blue-600 text-white/80"
                  : "bg-gray-900 text-white"
              }`}
            >
              {reg.internal ? "Register Now" : "View Guide"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationPage;
