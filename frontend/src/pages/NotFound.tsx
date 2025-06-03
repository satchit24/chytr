import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/404-not-found-lottie.json";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-4 py-16 transition-colors duration-300">
      
      <h2 className="text-2xl font-semibold">Lost in Chytrverse?</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
        The page you’re looking for is out of bounds. Maybe a top pick warped it out of reality?
      </p>
      {/* Lottie Animation */}
      <div className="w-66">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
            {/* Home Link */}
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
