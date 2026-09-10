import Image from "next/image";
import { BrandLogo } from "./BrandLogo";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-text-on-ink"
    >
      <div className="absolute inset-0 hero-animate-image">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(11,61,54,0.92) 0%, rgba(11,61,54,0.72) 50%, rgba(11,61,54,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:justify-center md:px-8 md:pb-28">
        <div className="w-full max-w-xl">
          <div className="hero-animate-brand flex items-center gap-2.5 sm:gap-3">
            <BrandLogo
              variant="icon"
              priority
              className="h-12 w-12 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16"
            />
            <p className="font-display text-[1.75rem] font-extrabold tracking-tight text-accent sm:text-4xl md:text-5xl">
              GRH_PRO
            </p>
          </div>

          <h1 className="hero-animate-headline mt-5 font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight sm:mt-6 sm:text-4xl md:text-5xl">
            Pilotez vos ressources humaines. De bout en bout.
          </h1>

          <p className="hero-animate-support mt-4 text-sm leading-relaxed text-text-on-ink-muted sm:text-base md:text-lg">
            <span className="inline-block">Personnel</span>
            <span className="mx-1.5 text-accent/80" aria-hidden>
              ·
            </span>
            <span className="inline-block">Temps</span>
            <span className="mx-1.5 text-accent/80" aria-hidden>
              ·
            </span>
            <span className="inline-block">Congés</span>
            <span className="mx-1.5 text-accent/80" aria-hidden>
              ·
            </span>
            <span className="inline-block">Paie</span>
            <span className="mx-1.5 text-accent/80" aria-hidden>
              ·
            </span>
            <span className="inline-block">Pilotage</span>
          </p>

          <div className="hero-animate-cta mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <MagneticButton
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(245,166,32,0.25)] hover:bg-accent-deep sm:w-auto"
            >
              Demander une démo
            </MagneticButton>
            <MagneticButton
              href="#fonctionnalites"
              className="inline-flex w-full items-center justify-center rounded-md border border-text-on-ink/25 px-6 py-3.5 text-sm font-semibold text-text-on-ink hover:border-text-on-ink/50 hover:bg-text-on-ink/5 sm:w-auto"
            >
              Découvrir les fonctionnalités
            </MagneticButton>
          </div>
        </div>

        <a
          href="#probleme"
          className="scroll-cue absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-on-ink-muted md:flex"
          aria-label="Défiler vers le bas"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Explorer</span>
          <span className="block h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        </a>
      </div>
    </section>
  );
}
