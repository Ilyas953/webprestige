import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { CONTENT_UPDATED, ORG_ID, SITE } from '@/app/lib/site';
import { Breadcrumbs, Container, CtaBand, Eyebrow, JsonLd } from '@/app/components/ui';

export type TocItem = { id: string; label: string };

const UPDATED_LABEL = new Date(CONTENT_UPDATED).toLocaleDateString('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function ArticleLayout({
  path,
  title,
  description,
  lead,
  crumbLabel,
  readingTime,
  toc,
  children,
}: {
  path: string;
  title: string;
  description: string;
  lead: ReactNode;
  crumbLabel: string;
  readingTime: number;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          datePublished: CONTENT_UPDATED,
          dateModified: CONTENT_UPDATED,
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: `${SITE.url}${path}`,
          inLanguage: 'fr-FR',
        }}
      />

      <section className="border-b border-line bg-paper pb-12 pt-8 sm:pb-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Accueil', href: '/' },
              { name: 'Guides', href: '/guides' },
              { name: crumbLabel, href: path },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <Eyebrow>Guide</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            <div className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{lead}</div>
            <p className="mt-6 text-sm text-muted">
              Mis à jour le {UPDATED_LABEL} · {readingTime} min de lecture
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="prose-wp min-w-0 max-w-3xl">{children}</article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <nav aria-label="Sommaire" className="rounded-2xl border border-line bg-white p-6">
                <p className="font-semibold text-ink">Sommaire</p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-muted hover:text-copper">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <AnalyseAside />
            </div>
          </aside>
        </div>
      </Container>

      <CtaBand />
    </>
  );
}

function AnalyseAside() {
  return (
    <div className="rounded-2xl bg-navy p-6 text-white">
      <ClipboardCheck className="h-6 w-6 text-[#e8a676]" aria-hidden="true" />
      <p className="mt-4 font-display text-xl font-semibold leading-snug">
        Avant de comparer des devis, faites analyser votre présence en ligne
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/70">Gratuit, sans engagement, réponse sous 24 h.</p>
      <Link
        href={SITE.ctaHref}
        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white hover:bg-copper-dark"
      >
        Analyse gratuite
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

// Encadré à placer au milieu d'un guide
export function GuideCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-copper/25 bg-copper-soft/60 p-6 text-[1rem] leading-relaxed text-ink">
      {children}
    </div>
  );
}

// Tableau responsive (défilement horizontal sur mobile)
export function GuideTable({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-xl border border-line bg-white">{children}</div>;
}
