import type { Metadata } from 'next';

export const SITE = {
  name: 'WebPrestige',
  url: 'https://webprestige.fr',
  phone: '+33783585792',
  phoneDisplay: '07 83 58 57 92',
  email: 'contact@webprestige.fr',
  ctaHref: '/analyse-gratuite',
  ctaLabel: 'Demander mon analyse gratuite',
};

export const ORG_ID = `${SITE.url}/#organization`;

// Date de dernière mise à jour éditoriale (guides, sitemap)
export const CONTENT_UPDATED = '2026-10-10';

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'fr_FR',
      siteName: SITE.name,
      // Image par défaut ; les fichiers opengraph-image (accueil, villes) restent prioritaires
      images: ['/opengraph-image'],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  };
}

export const SERVICES = [
  { href: '/', label: 'Création de site internet' },
  { href: '/creation-site-internet-artisan', label: 'Site internet pour artisan' },
  { href: '/referencement-local', label: 'Référencement local' },
  { href: '/maintenance-site-internet', label: 'Maintenance de site' },
  { href: '/optimisation-vitesse-site-internet', label: 'Vitesse et performance' },
  { href: '/analyse-gratuite', label: 'Analyse gratuite' },
];

export const GUIDES = [
  {
    href: '/guides/prix-site-vitrine',
    title: "Prix d'un site vitrine : combien coûte un site internet professionnel ?",
    short: "Prix d'un site vitrine",
    excerpt: "Les ordres de grandeur du marché, ce qui fait varier le prix et comment comparer deux devis.",
  },
  {
    href: '/guides/cout-hebergement-site-internet',
    title: 'Hébergement de site internet : quel prix prévoir chaque année ?',
    short: "Coût de l'hébergement",
    excerpt: "Nom de domaine, hébergement, HTTPS, emails, maintenance : tous les frais récurrents d'un site.",
  },
  {
    href: '/guides/rentabiliser-site-internet',
    title: 'Comment rentabiliser son site internet',
    short: 'Rentabiliser son site',
    excerpt: 'Calculer ce que rapporte votre site, le mesurer et actionner les bons leviers.',
  },
];
