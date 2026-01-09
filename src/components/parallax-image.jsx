import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
  return useMemo(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
}

/**
 * Subtle scroll-parallax for images/SVGs.
 * - No external deps
 * - Passive scroll listener + requestAnimationFrame
 * - Disabled when prefers-reduced-motion is set
 */
export function ParallaxImage({
  src,
  alt,
  className,
  wrapperClassName,
  strength = 18, // px total-ish travel
  ...imgProps
}) {
  const imgRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = imgRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;

      // Progress around viewport center: ~[-1..1]
      const center = rect.top + rect.height / 2;
      const t = (center - viewportH / 2) / (viewportH / 2);

      // Clamp and invert (scrolling down moves it up a bit)
      const clamped = Math.max(-1, Math.min(1, t));
      const y = -clamped * strength;

      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion, strength]);

  return (
    <div className={cn("will-change-transform", wrapperClassName)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full h-auto transition-transform duration-200 ease-out will-change-transform",
          className
        )}
        {...imgProps}
      />
    </div>
  );
}


