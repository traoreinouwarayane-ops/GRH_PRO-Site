import Image from "next/image";
import { Reveal } from "./Reveal";

const personas = [
  {
    role: "Admin RH",
    title: "Fluidifier le quotidien",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80",
  },
  {
    role: "Employé",
    title: "Agir en autonomie",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1100&q=80",
  },
  {
    role: "Directeur Général",
    title: "Voir et décider",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=80",
  },
];

export function Personas() {
  return (
    <section id="pour-qui" className="relative py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Pour qui
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-3">
          {personas.map((persona, index) => (
            <Reveal
              key={persona.role}
              delay={(index + 1) as 1 | 2 | 3}
              variant="scale"
            >
              <figure className="visual-panel group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl md:aspect-[4/5]">
                <Image
                  src={persona.image}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs">
                    {persona.role}
                  </p>
                  <p className="mt-1.5 font-display text-xl font-semibold text-white sm:mt-2 sm:text-2xl">
                    {persona.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
