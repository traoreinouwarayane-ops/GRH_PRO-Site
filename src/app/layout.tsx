import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://grh-pro-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GRH_PRO — Pilotez vos ressources humaines",
  description:
    "Une plateforme unique pour gérer le personnel, le temps, les congés, la paie — et offrir à la direction une vision claire.",
  applicationName: "GRH_PRO",
  keywords: [
    "GRH",
    "RH",
    "ressources humaines",
    "paie",
    "pointage",
    "congés",
    "PME",
    "Afrique",
    "SaaS",
  ],
  authors: [{ name: "GRH_PRO" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GRH_PRO — Pilotez vos ressources humaines. De bout en bout.",
    description:
      "Personnel, temps, congés, paie et pilotage — une seule plateforme pour PME et organisations.",
    url: siteUrl,
    siteName: "GRH_PRO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GRH_PRO — Plateforme de pilotage des ressources humaines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRH_PRO — Pilotez vos ressources humaines",
    description:
      "Personnel, temps, congés, paie et pilotage — une seule plateforme.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo-grh-pro-icon.png",
    apple: "/logo-grh-pro-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b3d36",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans text-text">
        {children}
      </body>
    </html>
  );
}
