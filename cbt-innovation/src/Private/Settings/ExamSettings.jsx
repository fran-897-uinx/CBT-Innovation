
export default function ExamSettings() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-semibold">Exam Settings</h1>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Daily practice reminders
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Show countdown to exam
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Auto-save answers
      </label>
    </div>
  );
}

