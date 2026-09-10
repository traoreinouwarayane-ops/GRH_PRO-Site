"use client";

import type { ComponentType, MouseEvent } from "react";
import { Reveal } from "./Reveal";
import {
  IconBoard,
  IconCalendar,
  IconChart,
  IconClock,
  IconDevice,
  IconKey,
  IconPay,
  IconShield,
  IconUsers,
} from "./icons";

type Feature = {
  id: string;
  title: string;
  line: string;
  Icon: ComponentType<{ className?: string }>;
  span?: string;
};

const features: Feature[] = [
  {
    id: "organisation",
    title: "Organisation & personnel",
    line: "Départements, fiches, statut",
    Icon: IconUsers,
    span: "lg:col-span-2",
  },
  {
    id: "onboarding",
    title: "Onboarding",
    line: "Compte auto · e-mail · renvoi",
    Icon: IconKey,
  },
  {
    id: "temps",
    title: "Temps & présence",
    line: "Pointage · HS · validation RH",
    Icon: IconClock,
  },
  {
    id: "conges",
    title: "Congés",
    line: "Demande → décision → suivi",
    Icon: IconCalendar,
  },
  {
    id: "paie",
    title: "Paie",
    line: "Calcul · Effectué · Validé",
    Icon: IconPay,
    span: "lg:col-span-2",
  },
  {
    id: "pilotage",
    title: "Pilotage DG",
    line: "Dashboard · PDF · audit",
    Icon: IconBoard,
  },
  {
    id: "tableaux",
    title: "Tableaux de bord",
    line: "Indicateurs Admin & DG",
    Icon: IconChart,
  },
  {
    id: "securite",
    title: "Sécurité",
    line: "Rôles · isolation · traçabilité",
    Icon: IconShield,
  },
  {
    id: "experience",
    title: "Expérience",
    line: "Web moderne · responsive",
    Icon: IconDevice,
  },
];

function onTileMove(e: MouseEvent<HTMLElement>) {
  if (window.matchMedia("(hover: none)").matches) return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function Features() {
  return (
    <section
      id="fonctionnalites"
      className="relative bg-ink py-12 text-text-on-ink sm:py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 0%, rgba(245,166,32,0.18), transparent 50%), radial-gradient(ellipse 40% 50% at 90% 100%, rgba(42,154,136,0.25), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Le cycle RH, module par module.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-10 md:mt-14 md:gap-4 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              key={feature.id}
              delay={(Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5)}
              variant={index % 2 === 0 ? "up" : "scale"}
            >
              <article
                id={feature.id}
                onMouseMove={onTileMove}
                className={`feature-tile flex min-h-[8.5rem] cursor-default flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:min-h-[9.5rem] sm:rounded-2xl sm:p-5 md:min-h-[11rem] md:p-6 ${feature.span ?? ""}`}
              >
                <feature.Icon className="feature-icon h-6 w-6 text-accent sm:h-7 sm:w-7" />
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-on-ink-muted sm:mt-1.5 sm:text-sm">
                    {feature.line}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
