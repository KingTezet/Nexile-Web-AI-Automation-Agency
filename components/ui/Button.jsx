import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-electric text-white hover:bg-electric-dim shadow-[0_0_0_1px_rgba(59,130,246,0.4)] hover:shadow-glow",
  secondary:
    "bg-white/5 text-zinc-100 border border-white/10 hover:bg-white/10 hover:border-white/20",
  growth:
    "bg-growth text-white hover:bg-growth-dim shadow-[0_0_0_1px_rgba(16,185,129,0.4)] hover:shadow-glow-emerald",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Shared Button — anchor or button element depending on `href`.
 * Uses transform/opacity-only hover transitions to avoid layout shift.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  icon: Icon,
  onClick,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
    "transition-[transform,box-shadow,background-color,border-color,color] duration-200",
    "active:scale-[0.97] will-change-transform",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https://wa.me");
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classes} onClick={onClick} {...props}>
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
