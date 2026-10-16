import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  to,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xs transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-caramel focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-espresso text-cream hover:bg-caramel shadow-xs",
    secondary: "bg-caramel text-cream hover:bg-espresso shadow-xs",
    outline:
      "border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream",
    ghost: "text-espresso hover:bg-espresso/10 hover:text-espresso",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
