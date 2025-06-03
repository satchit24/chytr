import React from "react";
import "./Hamburger.css";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      onClick={toggle}
      className="relative w-6 h-6 flex flex-col justify-between items-center md:hidden z-50"
      aria-label="Toggle menu"
    >
      <span className={`line ${isOpen ? "top-open" : ""}`}></span>
      <span className={`line ${isOpen ? "middle-open" : ""}`}></span>
      <span className={`line ${isOpen ? "bottom-open" : ""}`}></span>
    </button>
  );
}
