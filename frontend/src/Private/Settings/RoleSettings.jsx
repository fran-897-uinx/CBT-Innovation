import { Shield, User, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function RoleSettings() {
  const [role, setRole] = useState("student");

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold">Account Role</h1>

      <div className="space-y-3">
        <button
          onClick={() => setRole("student")}
          className={`w-full flex items-center gap-3 p-4 border rounded-xl ${
            role === "student" ? "border-blue-600 bg-blue-50" : ""
          }`}
        >
          <User /> Student
        </button>

        <button
          onClick={() => setRole("tutor")}
          className={`w-full flex items-center gap-3 p-4 border rounded-xl ${
            role === "tutor" ? "border-blue-600 bg-blue-50" : ""
          }`}
        >
          <GraduationCap /> Tutor
        </button>

        <button
          onClick={() => setRole("admin")}
          className={`w-full flex items-center gap-3 p-4 border rounded-xl ${
            role === "admin" ? "border-blue-600 bg-blue-50" : ""
          }`}
        >
          <Shield /> Admin
        </button>
      </div>
    </div>
  );
}
