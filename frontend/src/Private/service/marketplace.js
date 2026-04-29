/* ======================================================
   Marketplace Service
   - Centralized API aggregation
   - API.json driven
   - Safe failure isolation
   - Normalized output
====================================================== */

/* -----------------------------
   Helpers
------------------------------ */

const safeFetch = async (url, options = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
};

const normalizeCourse = (item, source) => ({
  id: `${source}-course-${item.id || crypto.randomUUID()}`,
  type: "course",
  title: item.title || item.name || "Untitled Course",
  institution: source,
  country: item.country || "Online",
  level: item.level || "General",
  mode: item.mode || "Self-paced",
  desc: item.description || item.summary || "No description available",
  price: item.price ?? 0,
});

const normalizeBook = (item, source) => ({
  id: `${source}-book-${item.id || crypto.randomUUID()}`,
  type: "book",
  name:
    item.volumeInfo?.title ||
    item.title ||
    "Untitled Book",
  writer:
    item.volumeInfo?.authors?.join(", ") ||
    item.author ||
    "Unknown",
  img:
    item.volumeInfo?.imageLinks?.thumbnail ||
    item.cover ||
    "/undraw_certification_i2m0.svg",
  study: item.subject || "General",
  price: item.price ?? null,
});

/* -----------------------------
   Core Service
------------------------------ */

export async function loadMarketplace() {
  const config = await safeFetch("/config/api.json");

  const courses = [];
  const books = [];

  /* -------- COURSES -------- */
  if (Array.isArray(config.courses)) {
    for (const api of config.courses) {
      try {
        const headers = api.authRequired
          ? { Authorization: `Bearer ${api.token}` }
          : {};

        const data = await safeFetch(
          `${api.baseUrl}${api.query || ""}`,
          { headers }
        );

        const items = data.items || data.results || [];
        items.forEach((item) =>
          courses.push(normalizeCourse(item, api.name))
        );
      } catch (err) {
        console.warn(`Courses API failed: ${api.name}`, err);
      }
    }
  }

  /* -------- BOOKS -------- */
  if (Array.isArray(config.books)) {
    for (const api of config.books) {
      try {
        const data = await safeFetch(
          `${api.baseUrl}${api.query || ""}`
        );

        const items = data.items || data.results || [];
        items.forEach((item) =>
          books.push(normalizeBook(item, api.name))
        );
      } catch (err) {
        console.warn(`Books API failed: ${api.name}`, err);
      }
    }
  }

  return { courses, books };
}
