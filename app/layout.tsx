import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebPrestige - Sites Web Premium pour Artisans | +50% d\'Appels Clients',
  description: 'Développeur web spécialisé dans la création de sites premium pour artisans. Augmentez vos demandes de devis de 50% avec un site optimisé SEO et conversion. Plombiers, électriciens, menuisiers : boostez votre visibilité en ligne.',
  keywords: 'site web artisan, développeur web artisans, site vitrine plombier, site internet électricien, création site artisan, site web menuisier, SEO artisan, site premium artisan',
  authors: [{ name: 'WebPrestige' }],
  creator: 'WebPrestige',
  publisher: 'WebPrestige',
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
    google: 'votre-code-google-search-console',
  },
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
