import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Hamburger from "./Hamburger";
import { getNavLinkClass } from "../../utils/classnames";

const navLinks = [
  { label: "Profile", path: "/profile" },
  { label: "Movies", path: "/category/movies" },
  { label: "TV Shows", path: "/category/tvshows" },
  { label: "Anime", path: "/category/anime" },
  { label: "Games", path: "/category/games" },
  { label: "Songs", path: "/category/songs" },
  { label: "Books", path: "/category/books" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Chytr
        </Link>

        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={getNavLinkClass(currentPath, link.path)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <Hamburger isOpen={isOpen} toggle={toggleMenu} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="text-xl font-bold text-gray-500 hover:text-red-500 transition"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col p-6 gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={getNavLinkClass(currentPath, link.path)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
