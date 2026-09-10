"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import {
  IconBoard,
  IconCalendar,
  IconClock,
  IconKey,
  IconPay,
} from "./icons";

const steps = [
  { number: "01", title: "Onboarding", Icon: IconKey },
  { number: "02", title: "Pointage", Icon: IconClock },
  { number: "03", title: "Congés", Icon: IconCalendar },
  { number: "04", title: "Paie", Icon: IconPay },
  { number: "05", title: "Reporting", Icon: IconBoard },
];

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const connectors = list.querySelectorAll<HTMLElement>(".step-connector");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          connectors.forEach((el, i) => {
            el.style.animationDelay = `${200 + i * 120}ms`;
            el.classList.add("is-on");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="parcours"
      className="relative overflow-hidden bg-surface-elevated py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Comment ça marche
          </h2>
        </Reveal>

        <ol
          ref={listRef}
          className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-12 sm:gap-4 md:mt-16 lg:grid-cols-5 lg:gap-3"
        >
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5}
              variant="up"
            >
              <li className="step-card relative flex flex-row items-center gap-4 rounded-xl bg-wash p-4 min-[480px]:flex-col min-[480px]:items-start sm:rounded-2xl sm:p-5 lg:min-h-[11rem] lg:p-6">
                <div className="flex items-center gap-3 min-[480px]:block">
                  <span className="font-display text-sm font-bold text-accent">
                    {step.number}
                  </span>
                  <step.Icon className="h-7 w-7 text-ink min-[480px]:mt-5 sm:mt-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink sm:mt-4 sm:text-lg">
                  {step.title}
                </h3>
                {index < steps.length - 1 && (
                  <span
                    className="step-connector absolute -right-1.5 top-1/2 hidden h-0.5 w-3 bg-accent lg:block"
                    aria-hidden
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
