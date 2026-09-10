import { BrandLogo } from "./BrandLogo";

const footerLinks = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:gap-8 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo variant="icon" className="h-9 w-9 sm:h-10 sm:w-10" />
          <div>
            <p className="font-display text-base font-bold text-ink sm:text-lg">
              GRH_PRO
            </p>
            <p className="text-xs text-text-muted">
              Gérer · Faire travailler · Piloter
            </p>
          </div>
        </div>
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-text-muted">© {year} GRH_PRO</p>
      </div>
    </footer>
  );
}
