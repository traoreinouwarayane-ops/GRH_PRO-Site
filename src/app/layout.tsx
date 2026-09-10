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

export const metadata: Metadata = {
  title: "GRH_PRO — Pilotez vos ressources humaines",
  description:
    "Une plateforme unique pour gérer le personnel, le temps, les congés, la paie — et offrir à la direction une vision claire.",
  openGraph: {
    title: "GRH_PRO — Pilotez vos ressources humaines. De bout en bout.",
    description:
      "Une plateforme unique pour gérer le personnel, le temps, les congés, la paie — et offrir à la direction une vision claire.",
    locale: "fr_FR",
    type: "website",
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
