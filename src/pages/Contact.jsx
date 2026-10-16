import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {}
      <section className="bg-cream pt-10 pb-12 md:pt-16 md:pb-20 border-b border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 rounded-full bg-caramel/10">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso tracking-tight">
            Contact Aster Coffee
          </h1>
          <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto">
            We would love to hear from you. Reach out via Telegram or phone,
            visit our café, or drop us a message below.
          </p>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Telegram Card */}
          <div className="bg-white p-8 rounded-2xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-caramel/10 text-caramel flex items-center justify-center font-bold text-xl">
                💬
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">
                Telegram
              </h3>
              <p className="text-sm text-espresso/75">
                Reach us directly for quick inquiries and daily updates.
              </p>
            </div>
            <div className="pt-4 border-t border-espresso/5">
              <a
                href="https://t.me/AsterCoffeeDemo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-caramel hover:text-espresso transition-colors flex items-center gap-2"
              >
                @AsterCoffeeDemo
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-caramel/10 text-caramel flex items-center justify-center font-bold text-xl">
                📞
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">
                Telephone
              </h3>
              <p className="text-sm text-espresso/75">
                Call us during café hours for reservations or inquiries.
              </p>
            </div>
            <div className="pt-4 border-t border-espresso/5">
              <a
                href="tel:+251900000000"
                className="text-sm font-semibold text-caramel hover:text-espresso transition-colors"
              >
                +251 900 000 000
              </a>
            </div>
          </div>

          {/* Visit Information */}
          <div className="bg-white p-8 rounded-2xl border border-espresso/10 shadow-xs space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-caramel/10 text-caramel flex items-center justify-center font-bold text-xl">
                📍
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">
                Visit Us
              </h3>
              <div className="text-sm text-espresso/75 space-y-2">
                <p>
                  <strong className="text-espresso font-medium">
                    Location:
                  </strong>{" "}
                  Addis Ababa, Ethiopia
                </p>
                <p>
                  <strong className="text-espresso font-medium">
                    Mon – Fri:
                  </strong>{" "}
                  7:30 AM – 8:00 PM
                </p>
                <p>
                  <strong className="text-espresso font-medium">
                    Sat – Sun:
                  </strong>{" "}
                  8:30 AM – 9:00 PM
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-espresso/5 text-xs text-espresso/60 italic">
              * Schedule & address details
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-espresso/10 p-8 sm:p-12 shadow-xs space-y-8">
          <SectionTitle
            eyebrow="Send a Message"
            title="Leave Us a Note"
            subtitle="Have a question or feedback? Fill out the form below."
            align="left"
            className="mb-6"
          />

          {formSubmitted ? (
            <div className="p-6 bg-cream border border-caramel/30 rounded-xl space-y-3 text-espresso">
              <h4 className="font-serif font-bold text-lg text-caramel">
                Form Submission Notice
              </h4>
              <p className="text-sm text-espresso/80 leading-relaxed">
                Thank you for your message, <strong>{formData.name}</strong>!
                Please note that form submissions are not connected to an
                automated backend server yet. To ensure your message reaches us
                immediately, please connect via Telegram or telephone.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="text-xs font-semibold text-espresso hover:text-caramel underline transition-colors"
                >
                  Send another note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso"
                  >
                    Full Name <span className="text-caramel">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xs border text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-caramel transition-colors ${
                      errors.name
                        ? "border-red-500 bg-red-50/50"
                        : "border-espresso/20 bg-cream/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso"
                  >
                    Email Address <span className="text-caramel">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xs border text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-caramel transition-colors ${
                      errors.email
                        ? "border-red-500 bg-red-50/50"
                        : "border-espresso/20 bg-cream/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-espresso"
                >
                  Your Message <span className="text-caramel">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`w-full px-4 py-3 rounded-xs border text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-caramel transition-colors ${
                    errors.message
                      ? "border-red-500 bg-red-50/50"
                      : "border-espresso/20 bg-cream/30"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Submit Message
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso text-cream rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-caramel/20 space-y-6">
          <span className="text-xs font-semibold tracking-widest text-caramel uppercase">
            Explore Our Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
            Ready to sample our coffees and fresh pastries?
          </h2>
          <p className="text-base text-cream/80 leading-relaxed max-w-2xl mx-auto">
            Browse our menu to see our specialty coffee selections, teas, fresh
            morning bakes, and light sourdough meals.
          </p>
          <div className="pt-2">
            <Button to="/menu" variant="secondary" size="lg">
              View Full Menu & Prices
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
