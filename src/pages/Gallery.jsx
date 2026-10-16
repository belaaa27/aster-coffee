import React, { useState } from "react";
import Button from "../components/Button";

const galleryImages = [
  {
    id: 1,
    title: "Precision Pour-Over",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-3/4",
    alt: "Barista pouring artisanal specialty coffee at Aster Coffee",
  },
  {
    id: 2,
    title: "Fresh Morning Croissants",
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-4/3",
    alt: "Warm buttery croissants fresh out of the oven",
  },
  {
    id: 3,
    title: "Sunlit Reading Nook",
    category: "Atmosphere",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-square",
    alt: "Cozy café interior corner with warm ambient light",
  },
  {
    id: 4,
    title: "Aster Signature Latte Art",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-square",
    alt: "Specialty latte with delicate milk foam art",
  },
  {
    id: 5,
    title: "Artisanal Layered Honey Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-4/3",
    alt: "Slice of layered honey cake topped with honey drizzle",
  },
  {
    id: 6,
    title: "Espresso Bar Craft",
    category: "Atmosphere",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-3/4",
    alt: "Warm coffee shop counter with active espresso setup",
  },
  {
    id: 7,
    title: "Flaky Pain au Chocolat",
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-square",
    alt: "Golden pain au chocolat filled with dark belgian chocolate",
  },
  {
    id: 8,
    title: "Iced Specialty Drinks",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-3/4",
    alt: "Refreshing iced coffee served in modern glassware",
  },
  {
    id: 9,
    title: "Sourdough & Poached Egg",
    category: "Savory",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-4/3",
    alt: "Avocado and poached egg sourdough toast",
  },
  {
    id: 10,
    title: "Dark Chocolate Ganache Tart",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-square",
    alt: "Decadent dark chocolate tart with cocoa dusting",
  },
];

export default function Gallery() {
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {}
      <section className="bg-cream pt-10 pb-12 md:pt-16 md:pb-20 border-b border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 rounded-full bg-caramel/10">
            Atmosphere & Creations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso tracking-tight">
            A Glimpse into Aster Coffee
          </h1>
          <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto">
            Savor the visual warmth of our daily roasts, fresh morning bakes,
            and peaceful café corners.
          </p>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group bg-white rounded-2xl overflow-hidden border border-espresso/10 shadow-xs hover:shadow-lg transition-all duration-300 relative flex flex-col"
            >
              <div
                className={`w-full overflow-hidden relative bg-espresso/5 ${item.aspectRatio}`}
              >
                {!failedImages[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-espresso/5 text-espresso/60 space-y-2">
                    <span className="text-2xl">☕</span>
                    <span className="text-xs font-medium">{item.title}</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-caramel">
                    {item.category}
                  </span>
                  <p className="font-serif text-lg font-bold text-cream">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso text-cream rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto border border-caramel/20 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
            Experience it in Person
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
            Ready to sample our menu?
          </h2>
          <p className="text-base text-cream/80 leading-relaxed max-w-2xl mx-auto">
            Stop by our cozy café for your morning cup, fresh pastry, or a quiet
            moment to un-wind.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/menu" variant="secondary" size="lg">
              View Menu & Prices
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream hover:text-espresso"
            >
              Contact & Location
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
