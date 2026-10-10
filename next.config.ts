import type { NextConfig } from "next";

// Anciennes pages "site-[métier]-[ville]" (avant la refonte d'octobre 2026) :
// redirigées en 301 vers la page locale ou thématique la plus proche.
const OLD_METIERS = ['electricien', 'plombier', 'menuisier', 'couvreur', 'elagueur'];
const OLD_VILLES: Record<string, string> = {
  cergy: '/creation-site-internet-cergy',
  pontoise: '/creation-site-internet-pontoise',
  viarmes: '/creation-site-internet-viarmes',
  pierrelaye: '/creation-site-internet-val-d-oise',
  fosses: '/creation-site-internet-val-d-oise',
  argenteuil: '/creation-site-internet-val-d-oise',
  taverny: '/creation-site-internet-val-d-oise',
  paris: '/creation-site-internet-artisan',
  lyon: '/creation-site-internet-artisan',
  bordeaux: '/creation-site-internet-artisan',
  marseille: '/creation-site-internet-artisan',
  toulouse: '/creation-site-internet-artisan',
};

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return OLD_METIERS.flatMap((metier) =>
      Object.entries(OLD_VILLES).map(([ville, destination]) => ({
        source: `/site-${metier}-${ville}`,
        destination,
        permanent: true,
      }))
    );
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
