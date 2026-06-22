import { clsx } from "clsx";

/**
 * Merge conditional className strings.
 * Usage: cn("base-class", isActive && "active-class", className)
 */
export function cn(...inputs) {
  return clsx(inputs);
}
