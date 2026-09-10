import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="relative pb-12 sm:pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-xl bg-ink px-5 py-12 text-center text-text-on-ink sm:rounded-2xl sm:px-8 sm:py-16 md:px-14 md:py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(245,166,32,0.22), transparent 55%), radial-gradient(ellipse 50% 60% at 80% 100%, rgba(22,117,104,0.35), transparent 50%)",
              }}
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
                Voyez GRH_PRO en action.
              </h2>
              <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center">
                <MagneticButton
                  href="mailto:traoreinouwarayane@gmail.com?subject=Demande%20de%20d%C3%A9mo%20GRH_PRO"
                  className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(245,166,32,0.25)] hover:bg-accent-deep sm:w-auto"
                >
                  Planifier une démo
                </MagneticButton>
                <MagneticButton
                  href="mailto:traoreinouwarayane@gmail.com?subject=Contact%20GRH_PRO"
                  className="inline-flex w-full items-center justify-center rounded-md border border-text-on-ink/25 px-6 py-3.5 text-sm font-semibold text-text-on-ink hover:border-text-on-ink/50 hover:bg-text-on-ink/5 sm:w-auto"
                >
                  Nous écrire
                </MagneticButton>
              </div>
              <p className="mt-5 text-sm text-text-on-ink-muted">
                Réponse sous 48 h — sans engagement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
