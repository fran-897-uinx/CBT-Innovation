import React, { useEffect, useState } from "react";
import { Search, Filter, Heart, Check } from "lucide-react";
import { loadMarketplace } from "../service/marketplace";

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [courses, setCourses] = useState([]);
  const [books, setBooks] = useState([]);

  // Load marketplace
  useEffect(() => {
    loadMarketplace().then(({ courses, books }) => {
      setCourses(courses);
      setBooks(books);
    });
  }, []);

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
      <div className="sticky top-14 bg-background z-30 p-3 flex gap-2 border-b">
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
      <Section title="Purchased">
        {selected.length === 0 && <Empty text="No purchases yet" />}
        {selected.map((item) => (
          <PurchasedCard key={item.id} item={item} />
        ))}
      </Section>

      {/* Wishlist */}
      <Section title="Wishlist">
        {wishlist.length === 0 && <Empty text="Nothing saved yet" />}
        {wishlist.map((item) => (
          <WishlistCard key={item.id} item={item} buyItem={buyItem} />
        ))}
      </Section>

      {/* Courses */}
      <Section title="Courses">
        {courses.filter(filterFn).map((course) => (
          <ItemCard
            key={course.id}
            item={course}
            isPurchased={isPurchased}
            isWishlisted={isWishlisted}
            buyItem={buyItem}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </Section>

      {/* Books */}
      <Section title="Books">
        {books.filter(filterFn).map((book) => (
          <ItemCard
            key={book.id}
            item={book}
            isPurchased={isPurchased}
            isWishlisted={isWishlisted}
            buyItem={buyItem}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </Section>
    </div>
  );
}

/* ---------------- UI Helpers ---------------- */

const Section = ({ title, children }) => (
  <>
    <h2 className="px-4 mt-6 font-bold">{title}</h2>
    <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </div>
  </>
);

const PurchasedCard = ({ item }) => (
  <div className="border p-3 rounded-xl bg-gray-50">
    <p className="font-medium">{item.title || item.name}</p>
    <span className="text-xs text-green-700 flex items-center gap-1">
      <Check size={14} /> Purchased
    </span>
  </div>
);

const WishlistCard = ({ item, buyItem }) => (
  <div className="border p-3 rounded-xl">
    <p className="font-medium">{item.title || item.name}</p>
    <button
      onClick={() => buyItem(item)}
      className="mt-2 w-full bg-gray-900 text-white py-2 rounded-xl text-sm"
    >
      Buy Now
    </button>
  </div>
);

const ItemCard = ({
  item,
  isPurchased,
  isWishlisted,
  buyItem,
  toggleWishlist,
}) => (
  <div className="border rounded-2xl p-4 bg-white">
    <h3 className="font-semibold">{item.title || item.name}</h3>
    {item.desc && <p className="text-sm mt-3">{item.desc}</p>}
    <div className="flex gap-2 mt-4">
      {isPurchased(item.id) ? (
        <span className="text-green-700 flex items-center gap-1">
          <Check size={16} /> Purchased
        </span>
      ) : (
        <>
          <button
            onClick={() => buyItem(item)}
            className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm"
          >
            {item.price ? `Buy £${item.price}` : "Free"}
          </button>
          <button
            onClick={() => toggleWishlist(item)}
            className={`p-2 rounded-xl border ${
              isWishlisted(item.id) && "bg-red-500 text-white"
            }`}
          >
            <Heart size={16} />
          </button>
        </>
      )}
    </div>
  </div>
);

const Empty = ({ text }) => <p className="text-sm text-gray-500">{text}</p>;
