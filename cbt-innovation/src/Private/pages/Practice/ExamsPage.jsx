import { useState } from "react";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "subjects", label: "Subjects" },
  { key: "past", label: "Past Questions" },
  { key: "mock", label: "Mock Exams" },
];

export default function ExamPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stModal, setStModal] = useState(false);


  return (
    <section className="pb-20">
      {/* Header */}
      <header className="p-4 border-b bg-white sticky top-14 z-20">
        <h1 className="text-xl font-semibold">UTME</h1>
        <p className="text-sm text-gray-500 mt-1">
          Unified Tertiary Matriculation Examination
        </p>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm hover:bg-gray-600 cursor-pointer"
            aria-label="Practice exam"
          >
            Practice
          </button>
          <button
            className="flex-1 border py-2 rounded-xl text-sm hover:bg-gray-600 cursor-pointer"
            aria-label="Register for exam"
            onClick={() => setStModal(true)}
          >
            Register
          </button>
        </div>
      </header>

      {/* Tabs */}
      <nav
        className="flex gap-4 px-4 mt-4 border-b text-sm overflow-x-auto"
        aria-label="Exam navigation tabs"
      >
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 whitespace-nowrap border-b-2 transition
              ${
                activeTab === tab.key
                  ? "border-gray-900 text-gray-900 font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="p-4 text-sm text-gray-700 leading-relaxed">
        {activeTab === "overview" && (
          <p>
            UTME is a Nigerian entrance examination for universities,
            polytechnics, and colleges of education. It assesses candidates in
            selected subjects required for admission.
          </p>
        )}

        {activeTab === "subjects" && (
          <ul className="list-disc pl-5 space-y-1">
            <li>English Language (Compulsory)</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
          </ul>
        )}

        {activeTab === "past" && (
          <p>
            Access previous UTME past questions with detailed explanations and
            timed practice modes.
          </p>
        )}

        {activeTab === "mock" && (
          <p>
            Take full-length mock exams that simulate real UTME conditions,
            including timing and grading.
          </p>
        )}
      </main>

       {/* Modal */}
      {stModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
            <button
              onClick={() => setStModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Chat</h2>
            <input
              type="text"
              placeholder="User or Group Name"
              className="w-full p-3 border rounded-xl mb-4 focus:ring-1 focus:ring-gray-800"
            />
            <button
              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
