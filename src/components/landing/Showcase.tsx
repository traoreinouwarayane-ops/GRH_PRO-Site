import { ProductPreview } from "./ProductPreview";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";

export function Showcase() {
  return (
    <section
      className="relative -mt-6 px-0 pb-6 sm:-mt-10 sm:pb-8 md:-mt-16 md:pb-12"
      aria-label="Aperçu plateforme"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-5 md:px-8">
        <Reveal variant="scale">
          <Tilt className="float-soft">
            <ProductPreview />
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
