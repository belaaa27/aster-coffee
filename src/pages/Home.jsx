import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import { menuItems } from "../data/menuItems";

export default function Home() {
  const featuredProducts = menuItems
    .filter((item) => item.featured)
    .slice(0, 6);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {}
      <section className="relative bg-cream pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 rounded-full bg-caramel/10">
                Welcome to Aster Coffee
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight tracking-tight">
                Crafted for quiet mornings & cozy conversations.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience locally roasted specialty coffee, warm flaky pastries
                baked fresh daily, and a welcoming space designed to slow down
                your day.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/menu"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Menu
                </Button>
                <Button
                  to="/our-story"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Our Heritage
                </Button>
              </div>

              {/* Small Highlights Row */}
              <div className="pt-8 border-t border-espresso/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl font-bold text-espresso">
                    100%
                  </p>
                  <p className="text-xs text-espresso/70 font-medium">
                    Specialty Arabica
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-espresso">
                    Daily
                  </p>
                  <p className="text-xs text-espresso/70 font-medium">
                    Fresh Baked Pastries
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-espresso">
                    Warm
                  </p>
                  <p className="text-xs text-espresso/70 font-medium">
                    Cozy Atmosphere
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                    alt="Aster Coffee warm atmosphere and freshly poured specialty coffee"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-espresso text-cream p-5 rounded-xl shadow-lg hidden sm:block max-w-xs border border-caramel/20">
                  <p className="font-serif text-sm font-semibold text-caramel">
                    Signature Brew
                  </p>
                  <p className="text-xs text-cream/80 mt-1">
                    Aster Spiced Latte with honey and cardamom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso/5 rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto border border-espresso/10 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
            The Aster Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            Where rich coffee traditions meet heartfelt hospitality.
          </h2>
          <p className="text-base text-espresso/80 leading-relaxed max-w-2xl mx-auto">
            At Aster Coffee, every cup is brewed with patience and care. From
            our early morning espresso extractions to our freshly pulled butter
            croissants, we take pride in offering an authentic local retreat for
            coffee lovers and food enthusiasts alike.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-espresso transition-colors"
            >
              <span>Find our opening hours & location</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Handcrafted Selection"
          title="Featured Menu Highlights"
          subtitle="A glimpse into our customer favorites, from specialty espresso creations to rich layered pastries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-espresso/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden relative bg-espresso/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-espresso/90 text-cream text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                  {item.price} ETB
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-semibold text-caramel tracking-wider">
                    {item.category.replace("-", " ")}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-espresso/75 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-espresso/5 flex items-center justify-between">
                  <span className="text-xs text-espresso/60 italic">
                    * Sample menu price
                  </span>
                  <Link
                    to="/menu"
                    className="text-xs font-semibold text-espresso hover:text-caramel transition-colors flex items-center gap-1"
                  >
                    View Menu
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <Button to="/menu" variant="primary" size="lg">
            Explore Full Menu & Prices
          </Button>
        </div>
      </section>

      {}
      <section className="bg-espresso text-cream py-16 sm:py-20 border-y border-caramel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
              Why Visit Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mt-2">
              The Art of Fine Hospitality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Highlight 1 */}
            <div className="p-6 rounded-xl bg-cream/5 border border-cream/10 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                ☕
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream">
                Specialty Roasts
              </h3>
              <p className="text-sm text-cream/75 leading-relaxed">
                Expertly balanced dark and medium roast coffees prepared with
                precision by passionate baristas.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="p-6 rounded-xl bg-cream/5 border border-cream/10 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                🥐
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream">
                Artisanal Bakery
              </h3>
              <p className="text-sm text-cream/75 leading-relaxed">
                Flaky croissants, honey-drizzled rolls, and dark chocolate tarts
                baked fresh every morning.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="p-6 rounded-xl bg-cream/5 border border-cream/10 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                🌿
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream">
                Inviting Atmosphere
              </h3>
              <p className="text-sm text-cream/75 leading-relaxed">
                Warm lighting, cozy seating, and gentle background music ideal
                for study, work, or casual meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-cream border border-espresso/10 p-8 sm:p-12 lg:p-16 text-center space-y-6 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Plan Your Visit to Aster Coffee Today
            </h2>
            <p className="text-base text-espresso/80 leading-relaxed">
              We look forward to serving you our signature brews and fresh
              pastries. Check our full menu or get in touch for details.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/menu" variant="primary" size="md">
                Browse Menu
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Contact & Location
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
