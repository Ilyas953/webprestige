import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://webprestige.fr'),
  title: 'WebPrestige - Sites Web Premium pour Artisans | +50% d\'Appels Clients',
  description: 'Développeur web spécialisé dans la création de sites premium pour artisans. Augmentez vos demandes de devis de 50% avec un site optimisé SEO et conversion. Plombiers, électriciens, menuisiers : boostez votre visibilité en ligne.',
  authors: [{ name: 'WebPrestige' }],
  creator: 'WebPrestige',
  publisher: 'WebPrestige',
  alternates: {
    canonical: 'https://webprestige.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://webprestige.fr',
    siteName: 'WebPrestige',
    title: 'WebPrestige - Sites Web Premium pour Artisans',
    description: 'Créez un site web qui génère des appels clients. Sites premium pour plombiers, électriciens, menuisiers et tous artisans.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebPrestige - Sites Premium pour Artisans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebPrestige - Sites Web Premium pour Artisans',
    description: 'Sites web optimisés qui génèrent +50% d\'appels clients pour artisans',
    images: ['/og-image.jpg'],
  },
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'WebPrestige',
  url: 'https://webprestige.fr',
  logo: 'https://webprestige.fr/og-image.jpg',
  description: 'Développeur web spécialisé création de sites premium pour artisans. Plombiers, électriciens, menuisiers, couvreurs.',
  telephone: '+33783585792',
  email: 'contact@webprestige.fr',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: 'FR',
  priceRange: '€€',
  sameAs: [],
  knowsAbout: [
    'Création site web artisan',
    'SEO local artisan',
    'Site web plombier',
    'Site web électricien',
    'Site web menuisier',
    'Site web couvreur',
    'Next.js',
    'Tailwind CSS',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
