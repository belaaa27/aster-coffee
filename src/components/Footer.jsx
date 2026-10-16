import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/90 pt-16 pb-12 border-t border-caramel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-cream tracking-tight">
              Aster Coffee
            </h3>
            <p className="text-sm text-cream/75 leading-relaxed">
              Crafted coffee, fresh morning pastries, and light savory bites in
              a cozy, welcoming atmosphere.
            </p>
            <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold">
              Sample Business Project
            </span>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-caramel uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-caramel transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-caramel transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="hover:text-caramel transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-caramel transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-caramel transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours Placeholder */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-caramel uppercase">
              Opening Hours
            </h4>
            <div className="text-sm text-cream/80 space-y-1.5">
              <p>
                <strong className="text-cream font-medium">Mon – Fri:</strong>{" "}
                7:30 AM – 8:00 PM
              </p>
              <p>
                <strong className="text-cream font-medium">Sat – Sun:</strong>{" "}
                8:30 AM – 9:00 PM
              </p>
              <p className="text-xs text-cream/60 pt-2 italic">
                * Schedule placeholder subject to confirmation.
              </p>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-caramel uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href="https://t.me/AsterCoffeeDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-caramel transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                  Telegram: @AsterCoffeeDemo
                </a>
              </li>
              <li>
                <a
                  href="tel:+251900000000"
                  className="hover:text-caramel transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel"></span>
                  Phone: +251 900 000 000
                </a>
              </li>
              <li className="text-xs text-cream/60 pt-2">
                Location placeholder: Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>
            © {new Date().getFullYear()} Aster Coffee. Demo website for
            portfolio display.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-cream transition-colors">
              Inquiries
            </Link>
            <Link
              to="/our-story"
              className="hover:text-cream transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
