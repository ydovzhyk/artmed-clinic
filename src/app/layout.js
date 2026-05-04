import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/providers/languageContext'
import ClientLayout from './client-layout'

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const SITE_URL = 'https://artmed.live'

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'ARTMED — Медицинский центр в Platja d’Aro | Clínica médica en España',

  description:
    'ARTMED — медицинский центр в Platja d’Aro, Испания. Clínica médica en Platja d’Aro para pacientes rusohablantes y locales: ginecología, neurología, urología, medicina estética, fisioterapia, rehabilitación, láser y consultas médicas.',

  keywords: [
    'ARTMED',
    'ARTMED Clinic',
    'ARTMED Platja d’Aro',

    // RU
    'медицинский центр Испания',
    'медицинский центр Platja d’Aro',
    'клиника Platja d’Aro',
    'русскоязычный врач Испания',
    'русскоязычная клиника Испания',
    'врач Platja dAro',
    'гинеколог Испания',
    'уролог Испания',
    'невролог Испания',
    'эстетическая медицина Испания',
    'лазерная эпиляция Испания',
    'реабилитация Испания',

    // ES
    'clínica médica Platja d’Aro',
    'centro médico Platja d’Aro',
    'clínica médica en España',
    'médico en Platja d’Aro',
    'clínica para rusohablantes en España',
    'ginecología Platja d’Aro',
    'urología Platja d’Aro',
    'neurología Platja d’Aro',
    'medicina estética Platja d’Aro',
    'fisioterapia Platja d’Aro',
    'rehabilitación Platja d’Aro',
    'depilación láser Platja d’Aro',
  ],

  alternates: {
    canonical: SITE_URL,
    languages: {
      ru: SITE_URL,
      es: SITE_URL,
      'x-default': SITE_URL,
    },
  },

  openGraph: {
    title: 'ARTMED — Медицинский центр в Platja d’Aro',
    description:
      'Современная клиника в Испании для русскоязычных и местных пациентов. Clínica médica en Platja d’Aro: consultas, estética, fisioterapia, rehabilitación y láser.',
    url: SITE_URL,
    siteName: 'ARTMED',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARTMED medical clinic in Platja d’Aro',
      },
    ],
    locale: 'ru_RU',
    alternateLocale: ['es_ES'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ARTMED — Medical Clinic in Platja d’Aro',
    description:
      'Медицинский центр в Испании. Clínica médica en Platja d’Aro: consultas médicas, estética, fisioterapia y láser.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'ARTMED Clinic',
    description:
      'ARTMED is a medical clinic in Platja d’Aro, Spain, offering consultations, aesthetic medicine, physiotherapy, rehabilitation and laser procedures for Russian-speaking and local patients.',
    alternateName: [
      'ARTMED',
      'ARTMED Medical Center',
      'ARTMED Clínica Médica',
      'Медицинский центр ARTMED',
    ],
    url: SITE_URL,
    telephone: '+34652921177',
    email: 'medesteticasd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Pineda del Mar 27',
      addressLocality: 'Platja d’Aro',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Platja d’Aro',
      },
      {
        '@type': 'Country',
        name: 'Spain',
      },
    ],
    availableLanguage: ['Russian', 'Spanish', 'English', 'Ukrainian'],
    medicalSpecialty: [
      'Gynecology',
      'Neurology',
      'Urology',
      'PhysicalTherapy',
      'Dermatology',
      'CosmeticSurgery',
    ],
    openingHours: 'Mo-Sa 09:00-20:00',
    priceRange: '€€',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.817,
      longitude: 3.067,
    },
  }

  return (
    <html lang="ru">
      <body className={`${nunitoSans.variable} min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
