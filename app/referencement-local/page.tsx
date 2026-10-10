import type { Metadata } from 'next';
import { Globe, MapPinned, Star } from 'lucide-react';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import {
  CheckList,
  CtaBand,
  Faq,
  InfoCard,
  JsonLd,
  PageHero,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';

const PATH = '/referencement-local';

export const metadata: Metadata = pageMetadata({
  title: 'Référencement Local pour Entreprise : Google Maps et SEO Local',
  description:
    "Référencement local pour entreprise : fiche Google Business Profile, site internet, avis et cohérence des informations. Comment apparaître sur Google Maps et dans les recherches de votre ville.",
  path: PATH,
  absoluteTitle: true,
});

const ACTIONS = [
  'Optimisation de la fiche Google Business Profile : catégories, services, zone desservie, description, photos.',
  'Pages du site construites autour de vos prestations et de vos zones d’intervention.',
  'Données structurées pour aider Google à comprendre votre activité et votre localisation.',
  'Harmonisation de votre nom, adresse et téléphone sur les annuaires et plateformes utiles.',
  'Méthode simple pour obtenir des avis réguliers de vos clients satisfaits, et y répondre.',
  'Suivi des résultats dans Google Search Console et sur la fiche Google.',
];

const ERREURS = [
  'Une fiche Google non revendiquée, ou créée deux fois.',
  'Une catégorie principale mal choisie : c’est l’un des critères les plus importants.',
  'Des mots-clés ajoutés dans le nom de la fiche, contraire aux règles de Google et risqué.',
  'Une adresse ou un téléphone différents selon les sites et annuaires.',
  'Un site qui ne mentionne nulle part la ville ou la zone d’intervention.',
  'Des avis laissés sans réponse, ou plus aucun avis depuis des mois.',
];

const FAQ: FaqItem[] = [
  {
    q: 'Combien de temps faut-il pour voir des résultats en référencement local ?',
    a: 'Les corrections sur la fiche Google peuvent produire des effets en quelques semaines. Le travail sur le site et la réputation prend généralement plusieurs mois, surtout dans les secteurs concurrentiels. Le référencement local s’inscrit dans la durée, mais ses effets aussi.',
  },
  {
    q: 'Puis-je apparaître sur Google Maps sans local ouvert au public ?',
    a: 'Oui. Les entreprises qui se déplacent chez leurs clients peuvent configurer leur fiche en zone desservie, sans afficher leur adresse. Il faut en revanche une adresse réelle pour la vérification : une simple domiciliation ou une fausse adresse expose à une suspension.',
  },
  {
    q: 'Le référencement local remplace-t-il la publicité Google ?',
    a: 'Ce sont deux leviers différents. La publicité apporte des visites tant que vous payez ; le référencement local construit une visibilité durable. Pour beaucoup d’artisans et de commerces, un bon référencement local suffit à générer l’essentiel des demandes.',
  },
  {
    q: 'Faut-il beaucoup d’avis pour bien se positionner ?',
    a: 'Le nombre compte, mais aussi la régularité, la note et vos réponses. Quelques avis récents et détaillés valent souvent mieux qu’une longue liste ancienne. L’important est d’en demander à chaque client satisfait.',
  },
];

export default function ReferencementLocalPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Référencement local pour entreprise',
          serviceType: 'Référencement local (SEO local)',
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'France' },
          url: `${SITE.url}${PATH}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: 'Référencement local', href: PATH },
        ]}
        eyebrow="SEO local"
        title="Référencement local pour entreprise"
        lead="Quand un client cherche votre métier dans votre ville, Google affiche une carte avec trois entreprises, puis une liste de sites. Le référencement local consiste à faire en sorte que vous soyez dans ces résultats, et qu’on vous choisisse."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Définition"
          title="Le référencement local, c’est quoi ?"
          intro="C’est l’ensemble des actions qui rendent votre entreprise visible sur les recherches géolocalisées : « plombier Cergy », « restaurant près de moi », « avocat Pontoise ». Google s’appuie sur trois grands critères : la pertinence de votre activité pour la recherche, la distance avec la personne qui cherche, et votre notoriété en ligne."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="1. La fiche Google Business Profile" icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}>
            C’est elle qui vous fait apparaître sur Google Maps et dans la carte des résultats. Catégories, services,
            horaires, photos et publications doivent être complets et justes.
          </InfoCard>
          <InfoCard title="2. Votre site internet" icon={<Globe className="h-5 w-5" aria-hidden="true" />}>
            Google s’appuie sur votre site pour comprendre ce que vous faites et où. Une page par prestation, des zones
            clairement indiquées et des informations cohérentes renforcent votre fiche.
          </InfoCard>
          <InfoCard title="3. Votre réputation" icon={<Star className="h-5 w-5" aria-hidden="true" />}>
            Avis clients, mentions de votre entreprise sur d’autres sites, présence dans les annuaires sérieux : autant
            de signaux qui montrent à Google que vous êtes une entreprise réelle et appréciée.
          </InfoCard>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Ce que je mets en place"
            title="Un référencement local construit sur des bases solides"
            intro="Pas de recette miracle ni de promesse de première place : un travail méthodique sur les éléments que Google prend réellement en compte."
          />
          <CheckList items={ACTIONS} />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="À éviter"
            title="Les erreurs qui bloquent le référencement local"
            intro="Je les rencontre régulièrement pendant les analyses. Certaines suffisent à faire disparaître une entreprise des résultats."
          />
          <CheckList items={ERREURS} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Référencement local : vos questions" />
          <Faq items={FAQ} />
        </div>
      </Section>

      <CtaBand
        title="Où en est votre référencement local ?"
        text="C’est exactement ce que mesure l’analyse gratuite : votre fiche Google, vos avis, votre site et vos concurrents sur les recherches de votre ville."
      />
    </>
  );
}
