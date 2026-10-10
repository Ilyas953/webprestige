import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED, GUIDES, SITE } from './lib/site';
import { VILLES } from './lib/villes';

const PAGES = [
  '/',
  '/analyse-gratuite',
  '/creation-site-internet-artisan',
  '/referencement-local',
  '/maintenance-site-internet',
  '/optimisation-vitesse-site-internet',
  '/guides',
  ...GUIDES.map((g) => g.href),
  ...VILLES.map((v) => `/${v.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  return PAGES.map((path) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified,
  }));
}
