import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import { VILLES, getVille } from '@/app/lib/villes';
import {
  AnalyseSteps,
  CtaBand,
  Faq,
  InfoCard,
  JsonLd,
  PageHero,
  Section,
  SectionHeading,
} from '@/app/components/ui';
import { Realisations } from '@/app/components/realisations';

// Seules les villes de villes.ts existent : toute autre URL renvoie une vraie 404
export const dynamicParams = false;

export function generateStaticParams() {
  return VILLES.map((v) => ({ slug: v.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ville = getVille(slug);
  if (!ville) return {};
  return pageMetadata({ title: ville.metaTitle, description: ville.metaDescription, path: `/${slug}`, absoluteTitle: true });
}

export default async function VillePage({ params }: Props) {
  const { slug } = await params;
  const ville = getVille(slug);
  if (!ville) notFound();

  const autresVilles = VILLES.filter((v) => v.slug !== slug);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Création de site internet à ${ville.nom}`,
          serviceType: 'Création de site internet',
          description: ville.metaDescription,
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'City', name: ville.nom },
          url: `${SITE.url}/${slug}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: "Val-d'Oise", href: '/creation-site-internet-val-d-oise' },
          { name: ville.nom, href: `/${slug}` },
        ]}
        eyebrow={`Création de site internet · ${ville.departement}`}
        title={ville.h1}
        lead={ville.intro}
      />

      {/* Contexte local */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow={`Le web à ${ville.nom}`} title={ville.contexteTitre} />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-ink/85">
              {ville.contexte.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-line bg-paper p-7">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-copper" aria-hidden="true" />
              <h2 className="font-semibold text-ink">Ce que vos clients tapent sur Google</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{ville.recherchesTexte}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ville.recherches.map((r) => (
                <li key={r} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink/85">
                  {r}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Publics */}
      <Section>
        <SectionHeading eyebrow="Pour qui" title={ville.publicsTitre} />
        <div className="grid gap-6 md:grid-cols-3">
          {ville.publics.map((p) => (
            <InfoCard key={p.titre} title={p.titre}>
              {p.texte}
            </InfoCard>
          ))}
        </div>
      </Section>

      {/* Conseils */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Méthode"
          title={ville.conseilsTitre}
          intro="Ce sont les points que je regarde en priorité pendant l’analyse gratuite, et ceux sur lesquels je construis votre site."
        />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {ville.conseils.map((c, idx) => (
            <div key={c.titre} className="flex gap-5">
              <span className="font-display text-2xl font-semibold text-copper">0{idx + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{c.titre}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Analyse gratuite */}
      <Section tone="navy">
        <SectionHeading
          light
          eyebrow="Analyse gratuite"
          title={`Avant de créer votre site à ${ville.nom}, on regarde où vous en êtes`}
          intro="Pas de devis à l’aveugle : je commence par analyser gratuitement votre présence en ligne, puis je vous dis ce qu’il faut faire et dans quel ordre."
        />
        <AnalyseSteps light />
      </Section>

      {/* Zone */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Zone" title={`Autour de ${ville.nom}`} intro={ville.zoneTexte} />
            <ul className="-mt-4 flex flex-wrap gap-2">
              {ville.voisines.map((v) => (
                <li
                  key={v}
                  className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-1.5 text-sm text-ink/85"
                >
                  <MapPin className="h-3.5 w-3.5 text-copper" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-7">
            <h2 className="font-semibold text-ink">Création de site internet dans les villes voisines</h2>
            <ul className="mt-4 divide-y divide-line">
              {autresVilles.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/${v.slug}`}
                    className="group flex items-center justify-between gap-4 py-3 text-ink hover:text-copper"
                  >
                    <span>
                      <span className="font-semibold">{v.nom}</span>
                      <span className="block text-sm text-muted">{v.resume}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/creation-site-internet-val-d-oise"
                  className="group flex items-center justify-between gap-4 py-3 font-semibold text-ink hover:text-copper"
                >
                  Tout le Val-d’Oise
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Réalisations */}
      <Section>
        <SectionHeading eyebrow="Réalisations" title="Des sites conçus pour des entreprises locales" />
        <Realisations />
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title={`Créer son site internet à ${ville.nom} : vos questions`} />
          <Faq items={ville.faq} />
        </div>
      </Section>

      <CtaBand title={`Entreprise à ${ville.nom} : où en est votre présence en ligne ?`} />
    </>
  );
}
