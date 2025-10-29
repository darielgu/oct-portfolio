import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-250 text-sm"
          >
            ← back to home
          </Link>
        </div>

        {/* Main Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Life & stuff from books
        </h1>

        {/* Content Section */}
        {/* Content Section */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <span className="font-semibold">
                Comparison is the thief of joy
              </span>{" "}
              <br /> There will always be someone richer, with a better paying
              job, in a better position. Be happy with your life and all you
              have accomplished
            </li>
            <li>
              <span className="font-semibold">Be nice</span> <br /> You never
              know what people are going through, try to spread kindness and be
              a positive impact on others
            </li>
            <li>
              <span className="font-semibold">You can just do things</span>{" "}
              <br /> Whatever it is you can do it. Do not wait for the perfect
              circumstance seize what is in front of you & prove your work by
              action
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default page;
