import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-white w-full py-20 px-4 text-center border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Trusted by 10,000+ Students
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
          Ready to Ace Your{" "}
          <span className="relative inline-block">
            Exams?
            <svg
              className="absolute -bottom-2 left-0 w-full text-blue-500"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 Q25,0 50,5 T100,5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of students who have successfully prepared for their
          exams with our comprehensive platform. Achieve your academic goals
          with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/auth"
            className="
                        bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg
                        border border-gray-900
                        hover:bg-gray-800 hover:border-gray-800
                        active:bg-gray-700 active:scale-95
                        transition-all duration-200
                        cursor-pointer
                        flex items-center gap-3
                        group
                    "
          >
            <span>Start Test Now</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <button
            className="
                        text-gray-900 font-semibold py-4 px-8 rounded-lg
                        border-2 border-gray-300
                        hover:border-gray-400 hover:bg-gray-50
                        active:bg-gray-100 active:scale-95
                        transition-all duration-200
                        cursor-pointer
                        flex items-center gap-3
                    "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            {/* Rating Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-gray-700">4.9/5 rating</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white rounded-full flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-blue-600">
                    {["JS", "TS", "RT"][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="font-medium text-gray-700">
              Join 10k+ students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
