const variants = {
  primary:
    "bg-[var(--vite-purple)] text-white hover:bg-[var(--vite-purple-dark)]",
  secondary:
    "bg-[var(--graphite-light)] text-[var(--vite-purple)] border border-[var(--vite-purple)] hover:bg-[var(--vite-purple-dark)] hover:text-white",
  success:
    "bg-sky-500 text-white hover:bg-sky-700",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
  ghost:
    "bg-transparent text-[var(--vite-purple)] hover:bg-[var(--graphite-light)]"
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`text-lg font-semibold px-4 py-2 rounded-xl transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
