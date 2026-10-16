import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

export default function OurStory() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {}
      <section className="relative bg-cream pt-10 pb-16 md:pt-16 md:pb-24 border-b border-espresso/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 rounded-full bg-caramel/10">
                Our Story
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight tracking-tight">
                Rooted in patience, warmth, and daily ritual.
              </h1>
              <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Every pour-over, every warm croissant, and every quiet corner is
                crafted to welcome you home. Slow down and savor the moment.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button to="/menu" variant="primary" size="lg">
                  Explore Our Offerings
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Visit the Café
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                    alt="Barista pouring artisanal specialty coffee at Aster Coffee"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-espresso/10 bg-espresso/5">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Cozy café interior and atmosphere at Aster Coffee"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso leading-tight">
              An intentional pause in an accelerating world.
            </h2>
            <p className="text-base text-espresso/80 leading-relaxed font-medium">
              We designed Aster Coffee as an extension of your living room—where
              the rich aroma of specialty beans blends with gentle conversation
              and soft morning light.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-espresso/5 p-4 rounded-xl border border-espresso/10">
                <h3 className="font-serif font-bold text-espresso mb-1">
                  ☕ Slow Mornings
                </h3>
                <p className="text-sm text-espresso/75">
                  Settle in with a book or catch up over a velvety spiced latte.
                </p>
              </div>
              <div className="bg-espresso/5 p-4 rounded-xl border border-espresso/10">
                <h3 className="font-serif font-bold text-espresso mb-1">
                  🥐 Daily Rituals
                </h3>
                <p className="text-sm text-espresso/75">
                  Grab a warm butter croissant on your rush to work and elevate
                  your day.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex items-center gap-4 border-l-2 border-caramel pl-4 italic text-sm text-espresso/75">
                "We don't just serve coffee and pastries; we curate comforting
                moments to anchor your day."
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-espresso/5 py-16 sm:py-24 border-y border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Guiding Principles"
            title="The Values That Shape Every Cup"
            subtitle="From bean selection to morning baking, guided by care and community."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                  ☕
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Care in Every Cup
                </h3>
                <p className="text-sm text-espresso/75 leading-relaxed">
                  Small-batch roasting preserves the rich, complex flavors of
                  our specialty Arabica beans. Precision defines our extraction.
                </p>
              </div>
              <div className="pt-4 border-t border-espresso/5 text-xs text-caramel font-semibold uppercase tracking-wider">
                Craftsmanship
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                  🥐
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Freshly Baked Daily
                </h3>
                <p className="text-sm text-espresso/75 leading-relaxed">
                  Golden butter croissants, cardamom rolls, and artisanal tarts
                  baked fresh every morning with pure, high-quality ingredients.
                </p>
              </div>
              <div className="pt-4 border-t border-espresso/5 text-xs text-caramel font-semibold uppercase tracking-wider">
                Morning Baking
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-caramel/20 text-caramel flex items-center justify-center font-serif text-xl font-bold">
                  🌿
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  A Sanctuary to Connect
                </h3>
                <p className="text-sm text-espresso/75 leading-relaxed">
                  Warm lighting, comfortable seating, and friendly hospitality
                  invite you to unwind and share meaningful conversations.
                </p>
              </div>
              <div className="pt-4 border-t border-espresso/5 text-xs text-caramel font-semibold uppercase tracking-wider">
                Hospitality
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream border border-espresso/10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
              alt="Freshly baked pastries and specialty coffee at Aster Coffee"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
              Our Menu Offerings
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso">
              From Rich Espressos to Warm Pastries
            </h2>
            <p className="text-base text-espresso/80 leading-relaxed">
              Specialty coffees, aromatic teas, buttery French pastries, layered
              honey cakes, and light savory sourdough meals designed to elevate
              your day.
            </p>
            <div className="pt-2">
              <Button to="/menu" variant="primary" size="lg">
                Explore Full Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso text-cream rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto border border-caramel/20 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
            Join Us Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
            Ready to experience Aster Coffee in person?
          </h2>
          <p className="text-base text-cream/80 leading-relaxed max-w-2xl mx-auto">
            Stop by our cozy neighborhood cafe for your morning espresso,
            afternoon tea, or fresh pastry. We look forward to welcoming you.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/menu" variant="secondary" size="lg">
              Browse Menu & Prices
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
