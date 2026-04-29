import React, { useState } from "react";
import { Play } from "lucide-react";

const newsItems = [
  {
    id: 1,
    type: "video",
    title: "Breaking: UTME Registration Opens",
    url: "/videos/utme.mp4",
    author: "Admin",
    time: "2h ago",
    link: "https://affiliate-site.com/utme",
  },
  {
    id: 5,
    type: "video",
    title: "Scholarship Update",
    url: "/videos/utme.mp4",
    author: "Admin",
    time: "2h ago",
    link: "https://affiliate-site.com/scholarship",
  },
  {
    id: 2,
    type: "article",
    title: "WAEC Math Paper Analysis",
    desc: "A detailed breakdown of the recent WAEC Math exam...",
    image: "/images/waec-math.jpg",
    author: "Editor",
    time: "4h ago",
    link: "https://affiliate-site.com/waec-math",
  },
  {
    id: 3,
    type: "video",
    title: "Scholarship Tips Short Clip",
    url: "/videos/scholarship.mp4",
    author: "Admin",
    time: "6h ago",
  },
  {
    id: 6,
    type: "video",
    title: "Scholarship Tips Short Clip",
    url: "/videos/scholarship.mp4",
    author: "Admin",
    time: "6h ago",
  },
  {
    id: 4,
    type: "article",
    title: "Python Programming Trends 2025",
    desc: "Learn why Python remains one of the most popular languages...",
    image: "/images/python-trends.jpg",
    author: "Editor",
    time: "1d ago",
  },
];

export default function DailyNews() {
  const videos = newsItems.filter((item) => item.type === "video");
  const articles = newsItems.filter((item) => item.type === "article");

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background backdrop-blur-sm p-4 flex justify-center shadow-md max-w-xl">
        <h1 className="text-xl font-bold">Daily News</h1>
      </header>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search articles..."
          className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Videos Section */}
      <section className="p-4">
        <h2 className="font-semibold text-lg mb-3">Videos</h2>
        <div className="flex gap-4 overflow-x-auto p-5 ">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-300"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative h-40">
                <img
                  src="/images/video-thumbnail.jpg"
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-forground text-3xl" />
              </div>
              <div className="p-3 text-gray-950">
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-xs ">
                  {video.author} • {video.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="p-4 flex-1 mb-20">
        <h2 className="font-semibold text-lg mb-3">Articles</h2>
        <div className="flex flex-col gap-4">
          {filteredArticles.slice(0, visibleCount).map((article) => (
            <div
              key={article.id}
              className="bg-background rounded-xl shadow-md overflow-hidden cursor-pointer border"
              onClick={() =>
                article.link && window.open(article.link, "_blank")
              }
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-base">{article.title}</h3>
                <p className="text-sm text-foregound mt-1">{article.desc}</p>
                <p className="text-xs text-foreground mt-2">
                  {article.author} • {article.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredArticles.length && (
          <button
            onClick={loadMore}
            className="mt-4 w-full py-3 text-center bg-blue-600 text-foreground font-semibold rounded-xl"
          >
            Load More
          </button>
        )}
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-background p-4 rounded-xl w-11/12 max-w-md">
            <video
              src={selectedVideo.url}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-3 w-full py-2 text-center bg-red-500 text-white font-semibold rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
