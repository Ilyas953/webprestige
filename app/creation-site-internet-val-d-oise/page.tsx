import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, MessagesSquare, UserRound, Zap } from 'lucide-react';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import { VILLES } from '@/app/lib/villes';
import {
  AnalyseSteps,
  CtaBand,
  Faq,
  InfoCard,
  JsonLd,
  PageHero,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';
import { Realisations } from '@/app/components/realisations';

const PATH = '/creation-site-internet-val-d-oise';

export const metadata: Metadata = pageMetadata({
  title: "Création Site Internet Val-d'Oise (95) : Développeur Web Local",
  description:
    "Développeur web dans le Val-d'Oise : création de sites internet pour artisans, commerçants et TPE du 95, de Cergy-Pontoise au Pays de France. Analyse gratuite de votre présence en ligne.",
  path: PATH,
  absoluteTitle: true,
});

const SECTEURS = [
  {
    titre: 'L’agglomération de Cergy-Pontoise',
    texte:
      'Cergy, Pontoise, Saint-Ouen-l’Aumône, Éragny, Osny, Vauréal… Un territoire dense, où les entreprises sont nombreuses et où les résultats de recherche mélangent les communes. Il faut être précis pour sortir du lot.',
  },
  {
    titre: 'Le sud et l’est du département',
    texte:
      'Argenteuil, la vallée de Montmorency, Herblay-sur-Seine : des villes très peuplées, proches de Paris, où la concurrence en ligne est forte et où les clients comparent beaucoup.',
  },
  {
    titre: 'Le nord et l’ouest rural',
    texte:
      'Pays de France, Vexin français, vallée de l’Oise : de petites communes, des clients répartis sur un large secteur et une concurrence en ligne souvent plus faible. Une présence bien construite y fait vite la différence.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'Agence web ou développeur indépendant dans le Val-d’Oise : quelle différence ?',
    a: 'Une agence répartit votre projet entre plusieurs personnes (commercial, chef de projet, graphiste, développeur). Avec un développeur indépendant, vous avez un seul interlocuteur du premier échange à la mise en ligne, et après. C’est souvent plus simple et plus réactif pour un site vitrine.',
  },
  {
    q: 'Travaillez-vous uniquement avec des entreprises du Val-d’Oise ?',
    a: 'Non. Je travaille beaucoup avec des entreprises du 95 et des départements voisins, mais aussi à distance avec des entreprises de toute la France. Tout se fait facilement par téléphone et en visio.',
  },
  {
    q: 'Faut-il être dans le Val-d’Oise pour bénéficier de l’analyse gratuite ?',
    a: 'Non, l’analyse est ouverte à toutes les entreprises. Pour une entreprise du 95, la connaissance du territoire aide simplement à repérer plus vite les recherches locales qui comptent.',
  },
  {
    q: 'Combien de temps faut-il pour créer un site internet ?',
    a: 'Une fois les contenus réunis, un site vitrine est généralement en ligne en une à deux semaines. L’analyse de départ permet de savoir dès le début quelles pages créer et quelles recherches viser.',
  },
];

export default function ValDOisePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: "Création de site internet dans le Val-d'Oise",
          serviceType: 'Création de site internet',
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'AdministrativeArea', name: "Val-d'Oise" },
          url: `${SITE.url}${PATH}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: "Val-d'Oise", href: PATH },
        ]}
        eyebrow="Développeur web Val-d’Oise"
        title="Création de site internet dans le Val-d’Oise (95)"
        lead="Artisans, commerçants, TPE du 95 : je crée des sites internet pensés pour la façon dont vos clients cherchent ici, commune par commune. Et tout commence par une analyse gratuite de votre présence en ligne."
      />

      {/* INDÉPENDANT VS AGENCE */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Agence web ou développeur"
          title="Un développeur web du Val-d’Oise, pas une agence lointaine"
          intro="Vous cherchez une agence web dans le Val-d’Oise ? Pour un site vitrine, un développeur indépendant qui connaît le territoire est souvent la solution la plus simple et la plus efficace."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Un seul interlocuteur" icon={<UserRound className="h-5 w-5" aria-hidden="true" />}>
            La personne qui analyse votre présence en ligne est celle qui conçoit, développe et suit votre site. Rien ne
            se perd entre deux services.
          </InfoCard>
          <InfoCard title="La connaissance du terrain" icon={<MapPin className="h-5 w-5" aria-hidden="true" />}>
            Les recherches ne se font pas de la même façon à Cergy, à Pontoise ou à Viarmes. Savoir comment vos clients
            cherchent dans votre secteur change la construction du site.
          </InfoCard>
          <InfoCard title="De la réactivité" icon={<Zap className="h-5 w-5" aria-hidden="true" />}>
            Une question, une modification, un souci : vous appelez directement la personne qui connaît votre site, sans
            ticket ni file d’attente.
          </InfoCard>
        </div>
      </Section>

      {/* TERRITOIRE */}
      <Section>
        <SectionHeading
          eyebrow="Le 95"
          title="Le Val-d’Oise, un département aux recherches très locales"
          intro="Entre grandes agglomérations et villages, le Val-d’Oise réunit des situations très différentes. Un site efficace tient compte du secteur où vous travaillez."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {SECTEURS.map((s) => (
            <InfoCard key={s.titre} title={s.titre}>
              {s.texte}
            </InfoCard>
          ))}
        </div>
      </Section>

      {/* VILLES */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Villes"
          title="Création de site internet dans les villes du secteur"
          intro="Chaque page détaille le contexte local, les recherches des habitants et ce qui fait la différence pour un site dans cette ville."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VILLES.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/${v.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 hover:border-copper/40"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  <MapPin className="h-3.5 w-3.5 text-copper" aria-hidden="true" />
                  {v.departement}
                </span>
                <span className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-copper">
                  Site internet à {v.nom}
                </span>
                <span className="mt-2 flex-1 leading-relaxed text-muted">{v.resume}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-copper">
                  Voir la page
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-muted">
          Je travaille aussi avec des entreprises d’Osny, Vauréal, Jouy-le-Moutier, Pierrelaye, Herblay-sur-Seine,
          Argenteuil, Taverny, Luzarches et de tout le Val-d’Oise. Votre commune n’apparaît pas ? L’analyse gratuite
          fonctionne partout.
        </p>
      </Section>

      {/* MÉTHODE */}
      <Section tone="navy">
        <SectionHeading
          light
          eyebrow="Analyse gratuite"
          title="Avant de créer votre site, une analyse gratuite de votre présence en ligne"
          intro="Recherches Google sur votre métier dans votre commune, fiche Google, avis, site actuel, concurrents du secteur : vous savez où vous en êtes avant de décider quoi que ce soit."
        />
        <AnalyseSteps light />
      </Section>

      {/* RÉALISATIONS */}
      <Section>
        <SectionHeading
          eyebrow="Réalisations"
          title="Des sites créés pour des artisans du Val-d’Oise et d’ailleurs"
        />
        <Realisations />
      </Section>

      {/* ÉCHANGE */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MessagesSquare className="h-8 w-8 text-copper" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Création de site web dans le 95 : vos questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Les questions qui reviennent le plus souvent chez les entreprises du Val-d’Oise.
            </p>
          </div>
          <Faq items={FAQ} />
        </div>
      </Section>

      <CtaBand title="Entreprise du Val-d’Oise : où en est votre présence en ligne ?" />
    </>
  );
}
