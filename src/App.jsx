import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
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
          <Route path="menu" element={<Menu />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPlaceholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
