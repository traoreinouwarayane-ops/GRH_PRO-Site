"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { MagneticButton } from "./MagneticButton";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités", id: "fonctionnalites" },
  { href: "#pour-qui", label: "Pour qui", id: "pour-qui" },
  { href: "#parcours", label: "Parcours", id: "parcours" },
  { href: "#pourquoi", label: "Pourquoi", id: "pourquoi" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const overHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color,transform] duration-500 ${
        scrolled || open
          ? "border-b border-line/70 bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-5 md:h-[4.25rem] md:px-8">
        <a
          href="#accueil"
          className="flex min-w-0 items-center gap-2 sm:gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="GRH_PRO — Accueil"
        >
          <BrandLogo
            variant="icon"
            className="h-8 w-8 shrink-0 transition-transform duration-500 hover:rotate-[-6deg] sm:h-9 sm:w-9 md:h-10 md:w-10"
            priority
          />
          <span className="font-display truncate text-sm font-bold tracking-wide sm:text-base md:text-lg">
            <span className={overHero ? "text-text-on-ink" : "text-ink"}>
              GRH_PRO
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navigation principale"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                overHero
                  ? "text-text-on-ink-muted hover:text-text-on-ink"
                  : "text-text-muted hover:text-ink"
              } ${active === link.id ? "is-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton
            href="mailto:traoreinouwarayane@gmail.com?subject=Demande%20de%20d%C3%A9mo%20GRH_PRO"
            className={`inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold ${
              overHero
                ? "bg-accent text-ink hover:bg-accent-deep"
                : "bg-ink text-text-on-ink hover:bg-ink-mid"
            }`}
          >
            Demander une démo
          </MagneticButton>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition-transform duration-300 hover:scale-105 lg:hidden ${
            overHero
              ? "border-text-on-ink/30 text-text-on-ink"
              : "border-line text-ink"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 transition-transform duration-300 ${overHero && !open ? "bg-text-on-ink" : "bg-ink"} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-opacity duration-300 ${overHero && !open ? "bg-text-on-ink" : "bg-ink"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-transform duration-300 ${overHero && !open ? "bg-text-on-ink" : "bg-ink"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line/70 bg-surface/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
          aria-label="Navigation mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-text transition-colors hover:bg-mist/60"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:traoreinouwarayane@gmail.com?subject=Demande%20de%20d%C3%A9mo%20GRH_PRO"
            className="mt-2 rounded-md bg-ink px-3 py-3 text-center text-sm font-semibold text-text-on-ink transition-transform hover:scale-[1.01]"
            onClick={() => setOpen(false)}
          >
            Demander une démo
          </a>
        </nav>
      </div>
    </header>
  );
}
