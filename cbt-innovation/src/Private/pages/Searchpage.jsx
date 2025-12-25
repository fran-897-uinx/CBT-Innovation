import React from "react";
import { Search,Filter } from "lucide-react";
export const Searchpage = () => {
  return (
    <>
      <div className="sticky top-14 bg-white z-30 p-3 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Courses, institution, countries"
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-1 focus:ring-gray-800"
          />
        </div>
        <button className="p-2 border-b rounded-xl">
          <Filter size={18} />
        </button>
      </div>
    </>
  );
};
