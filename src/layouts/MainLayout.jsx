import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-espresso selection:bg-caramel selection:text-cream">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
