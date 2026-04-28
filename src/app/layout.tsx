import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { COMPANY } from "@/lib/data";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://limpidos.com"),
  title: {
    template: "%s | Limpidos — Limpieza Empresarial Profesional",
    default: "Limpidos — Outsourcing de Limpieza Empresarial | Servicios B2B",
  },
  description:
    "Limpidos es su aliado estratégico en outsourcing de limpieza empresarial. Reducimos sus costos operativos, eliminamos la gestión de personal y garantizamos estándares profesionales para oficinas, industrias y comercios.",
  keywords: [
    "limpieza empresarial",
    "servicios de limpieza para empresas",
    "outsourcing de limpieza",
    "limpieza de oficinas",
    "limpieza industrial",
    "servicios de limpieza corporativa",
    "tercerización de limpieza",
    "limpieza profesional B2B",
  ],
  authors: [{ name: "Limpidos" }],
  creator: "Limpidos",
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://limpidos.com",
    siteName: "Limpidos",
    title: "Limpidos — Outsourcing de Limpieza Empresarial",
    description:
      "Reducimos sus costos operativos con limpieza profesional para empresas. Oficinas, industrias, clínicas y comercios.",
    images: [
      {
        url: "https://limpidos.com/img/logo200x200.png",
        width: 1200,
        height: 630,
        alt: "Limpidos — Limpieza Empresarial Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpidos — Outsourcing de Limpieza Empresarial",
    description:
      "Reducimos sus costos operativos con limpieza profesional para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://limpidos.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CleaningService",
        "@id": "https://limpidos.com/#business",
        name: COMPANY.name,
        description: COMPANY.description,
        url: "https://limpidos.com",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        priceRange: "$$",
        image: "https://limpidos.com/og-image.jpg",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Sarasota esquina Av. Enrique Jimenez Moya",
          addressLocality: "Santo Domingo",
          addressRegion: "Distrito Nacional",
          addressCountry: "DO",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.4587025,
          longitude: -69.9327212,
        },

        areaServed: "Dominican Republic",

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Limpieza",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza residencial",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza de oficinas",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza profunda",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpieza post construcción",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desinfección de espacios",
              },
            },
          ],
        },

        sameAs: [
          COMPANY.social.instagram,
          COMPANY.social.facebook,
          COMPANY.social.linkedin,
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://limpidos.com/#website",
        url: "https://limpidos.com",
        name: "Limpidos",
        inLanguage: "es",
      },
    ],
  };
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2EEV99J6T0"
          strategy="afterInteractive"
        />

        {/* Configuración */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2EEV99J6T0');
        `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
