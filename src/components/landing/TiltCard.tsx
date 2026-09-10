"use client";

import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -maxTilt;
    const ry = (px - 0.5) * maxTilt;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          "--rx": "0deg",
          "--ry": "0deg",
          "--gx": "50%",
          "--gy": "50%",
        } as CSSProperties
      }
    >
      <div className="tilt-card-inner">{children}</div>
    </div>
  );
}
