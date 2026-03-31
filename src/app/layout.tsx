import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getRestaurantSchema } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eatnoya.com"),
  title: {
    default: "Noya — Restaurant Levantin & Méditerranéen | Paris 9e",
    template: "%s | Noya Restaurant Paris 9e",
  },
  description:
    "Cuisine levantine authentique au cœur de Paris 9e. Houmous, pitas, shakshuka & plats levantins faits maison. Déjeuner, dîner & traiteur. Réservez !",
  keywords: [
    "restaurant levantin Paris",
    "cuisine levantine Paris 9",
    "restaurant méditerranéen Châteaudun",
    "houmous Paris",
    "pita falafel Paris",
    "shakshuka Paris",
    "traiteur levantin Paris",
  ],
  authors: [{ name: "Noya Châteaudun" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.eatnoya.com",
    siteName: "Noya Châteaudun",
    title: "Noya — Restaurant Levantin & Méditerranéen | Paris 9e",
    description:
      "Cuisine levantine authentique au cœur de Paris 9e. Houmous, pitas, shakshuka & plats levantins faits maison.",
    images: [
      {
        url: "/og/accueil.jpg",
        width: 1200,
        height: 630,
        alt: "Noya Châteaudun — Restaurant levantin et méditerranéen, Paris 9e",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noya — Restaurant Levantin & Méditerranéen | Paris 9e",
    description:
      "Cuisine levantine authentique au cœur de Paris 9e. Houmous, pitas, shakshuka & plats levantins faits maison.",
    images: ["/og/accueil.jpg"],
  },
  alternates: {
    canonical: "https://www.eatnoya.com",
    languages: {
      "fr-FR": "https://www.eatnoya.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = getRestaurantSchema();

  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-warm-white text-dark">
        <Header />
        <main className="pt-[54px]">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
