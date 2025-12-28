import { Link } from "react-router-dom";
import { Plus, X } from "lucide-react";

// Example chats
const initialPractice = [
  {
    id: 1,
    class: "Jamb",
  },
  { id: 2, class: "Waec",},
  { id: 2, class: "utme",},
];

export default function ExamListPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-20">
        <h1 className="text-lg font-semibold"> Exam Practices</h1>
      </div>

      {/* Chats List */}
      <div className="space-y-2 p-2">
        {initialPractice.map((exam) => (
          <Link
            key={exam.id}
            to={`/app/exams/${exam.id}`}
            className="flex items-center gap-3 py-2 border-b border-gray-300 hover:bg-gray-50 transition"
          >
            <div className="flex-1  gap-4  min-w-0">
              <p className="font-medium truncate uppercase">{exam.class}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
