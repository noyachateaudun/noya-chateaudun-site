import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
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
    "Noya — Restaurant levantin au 8 rue de Châteaudun, Paris 9e. 5/5 Google (110+ avis). Houmous, pitas & shakshuka faits maison. Réservez, commandez en click & collect ou faites-vous livrer !",
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
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: 'LD99WO56NPn7faud3BBkFTzMDR6rn2p8Y8cYrJ1vFUI',
  },
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
      <body className="font-body antialiased bg-warm-white text-dark pb-[56px] md:pb-0">
        <AnnouncementBar />
        <Header />
        <main className="pt-[54px]">{children}</main>
        <Footer />
        <FloatingButtons />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0NJYLX2PMB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0NJYLX2PMB');`}
        </Script>
      </body>
    </html>
  );
}
