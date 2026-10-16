import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Our Story", path: "/our-story" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-espresso/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-espresso group-hover:text-caramel transition-colors">
            Aster Coffee
          </span>
          <span className="w-2 h-2 rounded-full bg-caramel group-hover:bg-sage transition-colors"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-caramel ${
                  isActive
                    ? "text-caramel underline underline-offset-8 decoration-2"
                    : "text-espresso/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Link */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xs bg-espresso text-cream text-sm font-medium hover:bg-caramel transition-colors shadow-xs"
          >
            Visit Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-espresso hover:text-caramel focus:outline-none focus:ring-2 focus:ring-caramel"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-espresso/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-1 transition-colors hover:text-caramel ${
                    isActive ? "text-caramel font-semibold" : "text-espresso/90"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-2 border-t border-espresso/10">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-espresso text-cream text-sm py-2.5 rounded-xs hover:bg-caramel transition-colors font-medium"
            >
              Visit Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
