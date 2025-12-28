import React, { useState } from "react";
import { Search, Filter, Heart, Check } from "lucide-react";

const courses = [
  {
    id: "c1",
    type: "course",
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: "Nearly every command installed on the system.",
    price: 17,
  },
  {
    id: "c2",
    type: "course",
    title: "Computer Science",
    institution: "University of Lagos",
    country: "Nigeria",
    level: "Degree",
    mode: "Exam",
    desc: "Documentation more closely aligned to packages.",
    price: 27,
  },
];

const books = [
  {
    id: "b1",
    type: "book",
    img: "/undraw_certification_i2m0.svg",
    writer: "Markel Benson",
    name: "Wise Man Taught",
    study: "Python",
    price: null,
  },
  {
    id: "b2",
    type: "book",
    img: "/undraw_certification_i2m0.svg",
    writer: "Markel Benson",
    name: "Wise Man Taught",
    study: "Python",
    price: 21,
  },
];

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]); // purchased
  const [wishlist, setWishlist] = useState([]);

  const filterFn = (item) =>
    JSON.stringify(item).toLowerCase().includes(query.toLowerCase());

  const isPurchased = (id) => selected.some((i) => i.id === id);
  const isWishlisted = (id) => wishlist.some((i) => i.id === id);

  const buyItem = (item) => {
    if (isPurchased(item.id)) return;
    setSelected((prev) => [...prev, item]);
    setWishlist((prev) => prev.filter((i) => i.id !== item.id));
  };

  const toggleWishlist = (item) => {
    if (isPurchased(item.id)) return;
    setWishlist((prev) =>
      isWishlisted(item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <div className="pb-20">
      {/* Search */}
      <div className="sticky top-14 bg-white z-30 p-3 flex gap-2 border-b">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, books, institutions"
            className="w-full pl-10 pr-4 py-2 border rounded-xl"
          />
        </div>
        <button className="p-2 border rounded-xl">
          <Filter size={18} />
        </button>
      </div>

      {/* Purchased */}
      <h2 className="px-4 mt-4 font-bold">Purchased</h2>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {selected.length === 0 && (
          <p className="text-sm text-gray-500">No purchases yet</p>
        )}
        {selected.map((item) => (
          <div key={item.id} className="border p-3 rounded-xl bg-gray-50">
            <p className="font-medium">{item.title || item.name}</p>
            <span className="text-xs text-green-700 flex items-center gap-1">
              <Check size={14} /> Purchased
            </span>
          </div>
        ))}
      </div>

      {/* Wishlist */}
      <h2 className="px-4 mt-4 font-bold">Wishlist</h2>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {wishlist.length === 0 && (
          <p className="text-sm text-gray-500">Nothing saved yet</p>
        )}
        {wishlist.map((item) => (
          <div key={item.id} className="border p-3 rounded-xl">
            <p className="font-medium">{item.title || item.name}</p>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 w-full bg-gray-900 text-white py-2 rounded-xl text-sm"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Courses */}
      <h2 className="px-4 mt-4 font-bold">Courses</h2>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.filter(filterFn).map((course) => (
          <div key={course.id} className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-500">
              {course.institution}. {course.country}
            </p>
            <p className="text-sm text-gray-500 mt-4">{course.desc}</p>
            <p className="text-sm text-gray-500 mt-4">
              {course.level ? ` Level: ${course.level}` : ""}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {course.mode ? ` mode: ${course.mode}` : ""}
            </p>
            <div className="flex gap-2 mt-4">
              {isPurchased(course.id) ? (
                <span className="text-green-700 flex items-center gap-1">
                  <Check size={16} /> Purchased
                </span>
              ) : (
                <>
                  <button
                    onClick={() => buyItem(course)}
                    className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm cursor-pointer"
                  >
                    Buy £{course.price}
                  </button>
                  <button
                    onClick={() => toggleWishlist(course)}
                    className={`p-2 rounded-xl border cursor-pointer ${
                      isWishlisted(course.id) && "bg-red-500"
                    }`}
                  >
                    <Heart size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Books */}
      <h2 className="px-4 mt-6 font-bold">Books</h2>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.filter(filterFn).map((book) => (
          <div key={book.id} className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">{book.name}</h3>

            <img
              src={book.img}
              alt={book.name}
              className="h-32 w-full object-contain my-3"
            />

            <div className="flex gap-2">
              {isPurchased(book.id) ? (
                <span className="text-green-700 flex items-center gap-1">
                  <Check size={16} /> Purchased
                </span>
              ) : (
                <>
                  <button
                    onClick={() => buyItem(book)}
                    className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm cursor-pointer"
                  >
                    {book.price ? `Buy £${book.price}` : "Free"}
                  </button>
                  <button
                    onClick={() => toggleWishlist(book)}
                    className={`p-2 rounded-xl border cursor-pointer ${
                      isWishlisted(book.id) && "bg-red-500"
                    }`}
                  >
                    <Heart size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
