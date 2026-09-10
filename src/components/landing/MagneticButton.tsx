"use client";

import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
};

export function MagneticButton({
  children,
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduced || coarse) return;

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--x", `${x}%`);
      node.style.setProperty("--y", `${y}%`);

      const dx = (e.clientX - (rect.left + rect.width / 2)) / 10;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / 10;
      node.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
    };

    const onLeave = () => {
      node.style.transform = "";
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a ref={ref} className={`btn-magnetic ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
