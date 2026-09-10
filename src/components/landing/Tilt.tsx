"use client";

import { useRef, type ReactNode } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export function Tilt({ children, className = "", max = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -max * 2;
    const ry = (px - 0.5) * max * 2;

    node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    node.style.setProperty("--gx", `${px * 100}%`);
    node.style.setProperty("--gy", `${py * 100}%`);
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-root relative ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      <div className="tilt-glare" />
    </div>
  );
}
