"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  variant?: "up" | "left" | "right" | "scale" | "blur";
};

export function Reveal({
  children,
  className = "",
  delay,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const variantClass = `reveal-${variant}`;

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
