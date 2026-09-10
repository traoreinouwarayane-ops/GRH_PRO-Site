import Image from "next/image";
import { Reveal } from "./Reveal";

export function ProblemSolution() {
  return (
    <section id="probleme" className="relative py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Fini la dispersion. Une seule plateforme.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={1} variant="left">
            <figure className="visual-panel group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Documents et tableurs éparpillés"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-xs">
                  Avant
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold text-white sm:mt-2 sm:text-2xl md:text-3xl">
                  Excel · WhatsApp · Papier
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={2} variant="right">
            <figure className="visual-panel group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe alignée autour d’une plateforme unique"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs">
                  Avec GRH_PRO
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold text-white sm:mt-2 sm:text-2xl md:text-3xl">
                  Centralisé · Traçable · Clair
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
