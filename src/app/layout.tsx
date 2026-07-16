import type { Metadata } from "next";
import {
  DM_Sans,
  DM_Serif_Display,
  Manrope,
  Sora,
  Plus_Jakarta_Sans,
} from "next/font/google";
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
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://limpidos.com"),
  title: {
    template: "%s | Limpidos",
    default:
      "Limpidos — Outsourcing de Limpieza Empresarial en Republica Dominicana",
  },
  // Acortada a ~155 caracteres para que no se trunque en el snippet de Google
  description:
    "Outsourcing de limpieza empresarial en República Dominicana. Reducimos costos operativos y gestionamos el personal por usted. Oficinas, industrias y comercios.",

  authors: [{ name: "Limpidos" }],
  creator: "Limpidos",
  themeColor: "#1E3A8A",
  icons: {
    icon: [{ url: "/icon.svg", sizes: "any" }],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  // TODO: reemplaza este valor con el código real que te da Google Search Console
  // verification: { google: "TU_CODIGO_DE_VERIFICACION_AQUI" },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://limpidos.com",
    siteName: "Limpidos",
    title: "Limpidos — Outsourcing de Limpieza Empresarial",
    description:
      "Reducimos sus costos operativos con limpieza profesional para empresas. Oficinas, industrias y comercios en República Dominicana.",
    images: [
      {
        // ⚠️ IMPORTANTE: esto debe ser una foto real de 1200x630px
        // (equipo trabajando, oficina limpia, etc.) — NO el logo.
        // El logo se ve mal recortado/pixelado en previews de WhatsApp/Facebook.
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Limpidos — Limpieza Empresarial Profesional en República Dominicana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Limpidos — Outsourcing de Limpieza Empresarial",
    description:
      "Reducimos sus costos operativos con limpieza profesional para empresas.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Limpidos — Limpieza Empresarial Profesional en República Dominicana",
      },
    ],
    // Solución opcional para vincular cuenta corporativa (image_5539c2.png)
    site: "@limpidos_rd",
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
        "@type": "LocalBusiness",
        "@id": "https://limpidos.com/#business",
        name: COMPANY.name,
        description: COMPANY.description,
        url: "https://limpidos.com",
        telephone: "+18493419890",
        email: COMPANY.email,
        priceRange: "$$",
        image: "https://limpidos.com/imagenREDE_OG.jpg",
        logo: "https://limpidos.com/logo200x200.png",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Sarasota esquina Av. Enrique Jimenez Moya",
          addressLocality: "Santo Domingo",
          addressRegion: "Distrito Nacional",
          postalCode: "10100",
          addressCountry: "DO",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.4587025,
          longitude: -69.9327212,
        },

        areaServed: { "@type": "Country", name: "Dominican Republic" },

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
              itemOffered: { "@type": "Service", name: "Limpieza de oficinas" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Limpieza de hogar" },
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
        publisher: { "@id": "https://limpidos.com/#business" },
      },
    ],
  };
  return (
    // <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
    // <html lang="es" className={`${dmSans.variable} ${manrope.variable} `}>
    // <html lang="es" className={`${dmSans.variable}  ${sora.variable}`}>

    <html
      lang="es"
      className={`${dmSans.variable} ${plus_jakarta_sans.variable}`}
    >
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
