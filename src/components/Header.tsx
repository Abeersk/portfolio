"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-gray-100/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Muhammad Abeer
          </Link>
        </h1>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {["hero", "projects", "skills", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="text-2xl transition-transform duration-300">
            {isOpen ? "✖" : "☰"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-gray-100/95 border-t border-gray-200 text-sm font-medium animate-[slideDown_0.3s_ease-in-out]">
          {["hero", "projects", "skills", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={toggleMenu}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}