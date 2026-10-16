/* STREAMING_CHUNK:Importing React hooks and components... */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, categories } from "../data/menuItems";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

/* STREAMING_CHUNK:Defining Menu page component... */
export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* STREAMING_CHUNK:Filtering menu items based on active category... */
  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* STREAMING_CHUNK:Rendering menu hero section... */}
      <section className="relative bg-cream pt-10 pb-12 md:pt-16 md:pb-20 border-b border-espresso/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 rounded-full bg-caramel/10">
                Our Menu
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight tracking-tight">
                Crafted Coffee, Fresh Pastries & Daily Favorites.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Each cup of specialty coffee and every flaky pastry is crafted
                with patience and care. Explore our selection of rich espressos,
                aromatic teas, baked goods, and light savory dishes.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="text-xs text-espresso/70 italic bg-espresso/5 px-3 py-1.5 rounded-sm border border-espresso/10">
                  * Prices displayed in Ethiopian Birr (ETB). Sample menu
                  pricing.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                    alt="Assorted specialty coffee and pastries at Aster Coffee"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STREAMING_CHUNK:Rendering category filter navigation... */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-2 gap-2 sm:gap-3 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-espresso text-cream shadow-md scale-105"
                    : "bg-white text-espresso/80 border border-espresso/15 hover:bg-espresso/5 hover:text-espresso"
                }`}
                aria-pressed={isActive}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* STREAMING_CHUNK:Rendering menu item grid section... */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-espresso/10 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso capitalize">
              {selectedCategory === "all"
                ? "All Menu Offerings"
                : categories.find((c) => c.id === selectedCategory)?.name ||
                  "Items"}
            </h2>
            <p className="text-sm text-espresso/70 mt-1">
              Showing {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "items"} available
            </p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-espresso/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-4/3 overflow-hidden relative bg-espresso/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-espresso/90 text-cream text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs shadow-xs">
                    {item.price} ETB
                  </div>
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-caramel text-cream text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                      Customer Favorite
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-semibold text-caramel tracking-wider">
                      {item.category.replace("-", " ")}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-espresso/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-espresso/5 flex items-center justify-between text-xs text-espresso/60">
                    <span>Freshly prepared</span>
                    <span className="italic">Aster Coffee Standard</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-espresso/10 p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
              ☕
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso">
              No items found
            </h3>
            <p className="text-sm text-espresso/75">
              We couldn't find any menu items matching this category at the
              moment.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="primary"
                size="sm"
              >
                View All Items
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* STREAMING_CHUNK:Rendering closing CTA section... */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso text-cream rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto border border-caramel/20 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
            Visit Our Cafe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
            Ready to experience Aster Coffee in person?
          </h2>
          <p className="text-base text-cream/80 leading-relaxed max-w-2xl mx-auto">
            Drop by our cozy cafe to enjoy fresh specialty brews, warm pastries,
            and friendly conversation. Check our location and hours or read our
            story.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg">
              Contact & Location
            </Button>
            <Button
              to="/our-story"
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream hover:text-espresso"
            >
              Our Heritage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
