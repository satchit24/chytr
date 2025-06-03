import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Welcome to Chytr</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Track and share your top picks in movies, TV shows, anime, games, songs, and books.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            to="/profile"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Go to Profile
          </Link>
          <Link
            to="/category/movies"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
