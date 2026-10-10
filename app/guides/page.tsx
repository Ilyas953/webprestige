import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GUIDES, pageMetadata } from '@/app/lib/site';
import { CtaBand, PageHero, Section } from '@/app/components/ui';

export const metadata: Metadata = pageMetadata({
  title: 'Guides : Prix, Hébergement et Rentabilité d’un Site Internet',
  description:
    "Guides pratiques pour les artisans et TPE : prix d'un site vitrine, coût de l'hébergement et des frais récurrents, rentabilité d'un site internet.",
  path: '/guides',
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: 'Guides', href: '/guides' },
        ]}
        eyebrow="Guides"
        title="Bien préparer son site internet"
        lead="Combien coûte un site, ce qu’il faut payer chaque année, comment savoir s’il est rentable : des réponses franches, sans jargon, pour décider en connaissance de cause."
      />
      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-line bg-paper p-7 hover:border-copper/40"
            >
              <h2 className="font-display text-xl font-semibold leading-snug text-ink group-hover:text-copper">
                {g.title}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{g.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-copper">
                Lire le guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
