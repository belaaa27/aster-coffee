import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";

function PlaceholderPage({ title, eyebrow, description }) {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={description} />
      <div className="p-8 bg-cream/60 border border-espresso/10 rounded-sm w-full max-w-md shadow-xs space-y-4">
        <p className="text-sm text-espresso/70 italic">
          Placeholder route set up cleanly for future milestone development.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
}

const MenuPlaceholder = () => (
  <PlaceholderPage
    eyebrow="Our Offerings"
    title="Explore Our Menu"
    description="Discover our rich espressos, aromatic teas, fresh pastries, and light savory dishes."
  />
);

const StoryPlaceholder = () => (
  <PlaceholderPage
    eyebrow="Our Heritage"
    title="The Aster Coffee Story"
    description="Learn about our passion for local specialty roasts and time-honored baking."
  />
);

const GalleryPlaceholder = () => (
  <PlaceholderPage
    eyebrow="Atmosphere"
    title="Cafe & Bakery Gallery"
    description="A glimpse into our warm space, freshly baked items, and barista creations."
  />
);

const ContactPlaceholder = () => (
  <PlaceholderPage
    eyebrow="Get in Touch"
    title="Contact Aster Coffee"
    description="Reach out via Telegram or telephone, or visit our cozy cafe."
  />
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuPlaceholder />} />
          <Route path="our-story" element={<StoryPlaceholder />} />
          <Route path="gallery" element={<GalleryPlaceholder />} />
          <Route path="contact" element={<ContactPlaceholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
