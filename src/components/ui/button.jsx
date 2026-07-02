import Link from "next/link";

const variantClasses = {
  primary: "bg-primary flex gap-4  text-white hover:opacity-90 border border-transparent",
  secondary: "bg-white  flex gap-4 text-foreground hover:opacity-90 border border-transparent",
  ghost: "bg-transparent flex gap-4  text-foreground hover:bg-gray-100 border border-transparent",
};

export default function Button({ children, href, variant = "primary", className = "" }) {
  // Base classes for all variants
  const baseClasses = "px-6 py-3 font-semibold transition-colors duration-200 inline-flex items-center justify-center cursor-pointer rounded";
  
  // Combine classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  // If href is provided, render a Link (anchor tag) that looks like a button
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a standard button
  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
}