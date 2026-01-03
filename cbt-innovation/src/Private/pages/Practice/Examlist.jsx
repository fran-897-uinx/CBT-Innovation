import { Link } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";

const initialPractice = [
  { id: 1, examName: "Jamb" },
  { id: 2, examName: "Waec" },
  { id: 3, examName: "UTME" },
];

export default function ExamListPage() {
  const [activatedExams, setActivatedExams] = useState([]);

  const handleActivate = (exam) => {
    // Avoid duplicates
    if (!activatedExams.find((e) => e.id === exam.id)) {
      setActivatedExams((prev) => [...prev, exam]);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-20 shadow-sm">
        <h1 className="text-lg font-semibold">Exam Practices</h1>
      </header>

      {/* Activated Exams */}
      <section className="p-4">
        <h2 className="font-bold text-md mb-2">Activated Exams</h2>
        {activatedExams.length === 0 ? (
          <p className="text-sm text-gray-500">No active exam yet</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activatedExams.map((exam) => (
              <div
                key={exam.id}
                className="border p-3 rounded-xl bg-white shadow-sm flex flex-col gap-1"
              >
                <p className="font-medium truncate">{exam.examName}</p>
                <span className="text-xs text-green-700 flex items-center gap-1">
                  <Check size={14} /> Purchased
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Available Exams List */}
      <section className="p-2 space-y-2">
        {initialPractice.map((exam) => (
          <Link
            key={exam.id}
            to={`/app/exams/${exam.id}`}
            onClick={() => handleActivate(exam)}
            className="flex items-center gap-3 py-3 px-4 border-b border-gray-300 hover:bg-gray-100 transition rounded-lg"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate uppercase">{exam.examName}</p>
            </div>
            {activatedExams.find((e) => e.id === exam.id) && (
              <span className="text-green-600 font-semibold text-sm">
                Active
              </span>
            )}
          </Link>
        ))}
      </section>
    </div>
  );
}
