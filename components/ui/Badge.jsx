import { cn } from "@/lib/utils";

const TONES = {
  blue: "bg-electric/10 text-electric-glow border-electric/20",
  emerald: "bg-growth/10 text-growth-glow border-growth/20",
  neutral: "bg-white/5 text-zinc-300 border-white/10",
};

/** Small pill used for tech-stack tags, eyebrows, and status labels. */
export default function Badge({ children, tone = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
