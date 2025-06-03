import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-600 dark:border-indigo-400"
          />
        </div>

        {/* Username */}
        <h2 className="text-3xl font-bold mb-2">@your_username</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Film buff | Bookworm | Gamer</p>

        {/* Follow Stats + Edit */}
        <div className="flex justify-center gap-6 mb-6">
          <div>
            <p className="text-xl font-bold">120</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold">98</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Following</p>
          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition mb-10">
          Edit Profile
        </button>

        {/* Top Picks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {["Movies", "Anime", "Games", "Songs", "Books", "TV Shows"].map((category) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Top 5 {category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
