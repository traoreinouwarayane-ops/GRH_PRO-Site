import { Reveal } from "./Reveal";
import {
  IconBoard,
  IconChart,
  IconClock,
  IconKey,
  IconShield,
  IconUsers,
} from "./icons";

const proofs = [
  { title: "Source unique", Icon: IconUsers },
  { title: "Rôles séparés", Icon: IconShield },
  { title: "Processus clairs", Icon: IconClock },
  { title: "Reporting", Icon: IconChart },
  { title: "Traçabilité", Icon: IconBoard },
  { title: "Sécurité", Icon: IconKey },
];

export function Trust() {
  return (
    <section id="pourquoi" className="relative py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Pourquoi GRH_PRO
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:mt-14 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {proofs.map((proof, index) => (
            <Reveal
              key={proof.title}
              delay={Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5}
              variant="scale"
            >
              <div className="trust-chip flex cursor-default flex-col items-center gap-2.5 rounded-xl border border-line bg-surface-elevated px-2 py-6 text-center sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-8">
                <proof.Icon className="h-6 w-6 text-teal sm:h-7 sm:w-7" />
                <p className="font-display text-xs font-semibold text-ink sm:text-sm md:text-base">
                  {proof.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
