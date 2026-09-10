import Image from "next/image";
import { Reveal } from "./Reveal";

const spaces = [
  {
    title: "Opérationnel RH",
    label: "Admin",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Espace collaborateur",
    label: "Employé",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Vision direction",
    label: "DG",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
];

export function PromiseSection() {
  return (
    <section id="promesse" className="relative py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="blur">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Une plateforme. Trois espaces.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-3">
          {spaces.map((space, index) => (
            <Reveal
              key={space.title}
              delay={(index + 1) as 1 | 2 | 3}
              variant="up"
            >
              <figure className="visual-panel group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-2xl md:aspect-[3/4]">
                <Image
                  src={space.image}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs">
                    {space.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-white sm:mt-2 sm:text-xl md:text-2xl">
                    {space.title}
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
