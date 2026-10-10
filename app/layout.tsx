import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { ORG_ID, SITE } from '@/app/lib/site';
import { SiteHeader } from '@/app/components/site-header';
import { SiteFooter } from '@/app/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Agence Web Val-d'Oise (95) : Création de Site Internet | WebPrestige",
    template: '%s | WebPrestige',
  },
  description:
    'Création de site internet professionnel et de site vitrine pour artisans, commerçants et TPE. Commencez par une analyse gratuite de votre présence en ligne.',
  authors: [{ name: 'WebPrestige' }],
  creator: 'WebPrestige',
  publisher: 'WebPrestige',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '1TN-ya8tURkRhnlXkU8ZjSn57b503m3WUibQIoYW7V0',
  },
};

export const viewport: Viewport = {
  themeColor: '#13284a',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/opengraph-image`,
  description:
    'Création de sites internet professionnels et de sites vitrines pour artisans, commerçants et TPE, avec analyse gratuite de la présence en ligne.',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: "Val-d'Oise" },
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    { '@type': 'Country', name: 'France' },
  ],
  knowsAbout: [
    'Création de site internet',
    'Site vitrine',
    'Site internet pour artisan',
    'Référencement local',
    'Maintenance de site internet',
    'Optimisation de la vitesse des sites web',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'fr-FR',
  publisher: { '@id': ORG_ID },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
