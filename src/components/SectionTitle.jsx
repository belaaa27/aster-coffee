import React from "react";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center", // 'left' | 'center' | 'right'
  className = "",
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={`flex flex-col max-w-2xl mb-12 ${alignment[align] || alignment.center} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-caramel uppercase mb-2">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base text-espresso/80 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-0.5 bg-caramel/60 mt-4"></div>
    </div>
  );
}
