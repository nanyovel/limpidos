import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { COMPANY } from '@/lib/data'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://limpidos.com'),
  title: {
    template: '%s | Limpidos — Limpieza Empresarial Profesional',
    default: 'Limpidos — Outsourcing de Limpieza Empresarial | Servicios B2B',
  },
  description:
    'Limpidos es su aliado estratégico en outsourcing de limpieza empresarial. Reducimos sus costos operativos, eliminamos la gestión de personal y garantizamos estándares profesionales para oficinas, industrias y comercios.',
  keywords: [
    'limpieza empresarial',
    'servicios de limpieza para empresas',
    'outsourcing de limpieza',
    'limpieza de oficinas',
    'limpieza industrial',
    'servicios de limpieza corporativa',
    'tercerización de limpieza',
    'limpieza profesional B2B',
  ],
  authors: [{ name: 'Limpidos' }],
  creator: 'Limpidos',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://limpidos.com',
    siteName: 'Limpidos',
    title: 'Limpidos — Outsourcing de Limpieza Empresarial',
    description:
      'Reducimos sus costos operativos con limpieza profesional para empresas. Oficinas, industrias, clínicas y comercios.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Limpidos — Limpieza Empresarial Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpidos — Outsourcing de Limpieza Empresarial',
    description: 'Reducimos sus costos operativos con limpieza profesional para empresas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://limpidos.com',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  url: 'https://limpidos.com',
  description: COMPANY.description,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
  },
  sameAs: [COMPANY.social.linkedin, COMPANY.social.facebook],
  knowsAbout: [
    'Limpieza empresarial',
    'Outsourcing de limpieza',
    'Limpieza industrial',
    'Limpieza corporativa',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
