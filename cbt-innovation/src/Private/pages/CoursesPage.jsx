import React from "react";
import { Search, Filter } from "lucide-react";

const Courses = [
  {
    id: 1,
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: " nearly every command installed on the system. Man pages also document devices, file formats, system, developer info, and many other components of a Linux system. Documentation more closely aligned to whole software packages is",
    price: "£17.00",
  },
  {
    id: 2,
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: " nearly every command installed on the system. Man pages also document devices, file formats, system, developer info, and many other components of a Linux system. Documentation more closely aligned to whole software packages is",
    price: "£27.00",
  },
  {
    id: 3,
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: " nearly every command installed on the system. Man pages also document devices, file formats, system, developer info, and many other components of a Linux system. Documentation more closely aligned to whole software packages is",
    price: "£29.00",
  },
  {
    id: 4,
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: " nearly every command installed on the system. Man pages also document devices, file formats, system, developer info, and many other components of a Linux system. Documentation more closely aligned to whole software packages is",
    price: "",
  },
];
const Books = [
  {
    id: 1,
    img: "/undraw_certification_i2m0.svg",
    writer: "Markel benson",
    Name: "Wise Man toauth",
    study: "Python",
    price: "",
  },
  {
    id: 2,
    img: "/undraw_certification_i2m0.svg",
    writer: "Markel benson",
    Name: "Wise Man toauth",
    study: "Python",
    price: "£21.00",
  },
];
// const priceCheck = () => (
//   if (price === null) {

//   }
// )
export default function CoursesPage() {
  return (
    <div className="pb-20">
      {/* Search */}
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
      {/* Courses Grid */}
      <h2 className="text-base font-bold text-gray-800">Courses</h2>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
        {Courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-2xl p-4 bg-white hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-gray-900">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {course.institution} . {course.country}
            </p>
            <div className="border-x p-3 mt-2 ">
              <p className="text-sm text-gray-600 italic text-balance">
                {course.desc}
              </p>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                {course.level}
              </span>
              <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                {course.mode}
              </span>
            </div>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-xl text-sm cursor-pointer gap-1 px-1">
              {/* View Course {" "} */}
              <span
                className={`px-2 py-0.5 text-sm font-mono w-full rounded-xl end-0`}
              >
                {course.price === "" ? "View Course" : "Buy course"}{" "}
                {course.price}
              </span>
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-base font-bold text-gray-800">Books</h2>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
        {Books.map((book) => (
          <div
            key={book.id}
            className="border rounded-2xl p-4 bg-white hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-gray-900">{book.Name}</h3>
            <div className="border-x p-3 mt-2 ">
              <img
                src={book.img}
                className="text-sm text-gray-600 italic text-balance"
              ></img>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                {book.writer}
              </span>
              <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                {book.study}
              </span>
            </div>
            {/* <div className="gap-2 flex-wrap"></div> */}
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-xl text-sm cursor-pointer">
              {book.price === "" ? "View Book" : "Buy Book"}{" "}
              {book.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
