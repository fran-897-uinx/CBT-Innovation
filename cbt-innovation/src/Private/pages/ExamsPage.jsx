export default function ExamPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">UTME</h1>
        <p className="text-sm text-gray-500 mt-1">
          Unified Tertiary Matriculation Examination
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-gray-900 text-white py-2 rounded-xl">
            Practice
          </button>
          <button className="flex-1 border py-2 rounded-xl">
            Register
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-4 mt-4 border-b text-sm">
        <button className="pb-2 border-b-2 border-gray-900">
          Overview
        </button>
        <button className="pb-2 text-gray-500">Subjects</button>
        <button className="pb-2 text-gray-500">Past Questions</button>
        <button className="pb-2 text-gray-500">Mock Exams</button>
      </div>

      {/* Content */}
      <div className="p-4 text-sm text-gray-700 leading-relaxed">
        UTME is a Nigerian entrance examination for universities,
        polytechnics, and colleges of education.
      </div>
    </div>
  );
}
