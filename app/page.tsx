import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Gauge,
  Hammer,
  Link2,
  MapPin,
  MousePointerClick,
  PenTool,
  Search,
  ShieldCheck,
  Smartphone,
  Store,
  Wrench,
} from 'lucide-react';
import { GUIDES, ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import { VILLES } from '@/app/lib/villes';
import {
  AnalyseSteps,
  Container,
  CtaBand,
  Eyebrow,
  Faq,
  HeroActions,
  InfoCard,
  JsonLd,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';
import { AnalysisCard } from '@/app/components/analysis-card';
import { Realisations, Temoignages } from '@/app/components/realisations';

export const metadata: Metadata = pageMetadata({
  title: 'Création de Site Internet Professionnel et Site Vitrine | WebPrestige',
  description:
    'Création de site internet professionnel et de site vitrine pour artisans, commerçants et TPE. Commencez par une analyse gratuite de votre présence en ligne : Google, fiche, avis, site.',
  path: '/',
  absoluteTitle: true,
});

const INCLUS = [
  {
    icon: PenTool,
    title: 'Un design sur mesure',
    text: 'Pas un modèle générique : une présentation construite autour de votre métier, de vos clients et de ce qui vous différencie.',
  },
  {
    icon: Smartphone,
    title: 'Pensé pour le mobile',
    text: 'La majorité de vos visiteurs arrivent depuis un téléphone. Tout est conçu d’abord pour eux : lecture, boutons, formulaire.',
  },
  {
    icon: Gauge,
    title: 'Rapide à charger',
    text: 'Des pages légères, des images optimisées et une technologie moderne pour un affichage quasi immédiat.',
  },
  {
    icon: Search,
    title: 'Référencement local intégré',
    text: 'Structure des pages, titres, contenus, données structurées, zones d’intervention : le site est construit pour Google dès le départ.',
  },
  {
    icon: MousePointerClick,
    title: 'Contact en un geste',
    text: 'Numéro cliquable, formulaire court, itinéraire : chaque page facilite la prise de contact.',
  },
  {
    icon: Link2,
    title: 'Relié à votre fiche Google',
    text: 'Site et fiche Google Business Profile racontent la même histoire, avec les mêmes informations.',
  },
  {
    icon: ShieldCheck,
    title: 'Mise en ligne complète',
    text: 'Nom de domaine, hébergement, HTTPS, configuration : vous n’avez rien de technique à gérer.',
  },
  {
    icon: Wrench,
    title: 'Suivi après la mise en ligne',
    text: 'Modifications, mises à jour et suivi du référencement si vous le souhaitez.',
  },
];

const HOME_FAQ: FaqItem[] = [
  {
    q: 'Pourquoi commencer par une analyse gratuite plutôt que par un devis ?',
    a: 'Parce qu’un devis sans analyse compare des prix, pas des résultats. En regardant d’abord ce que vos clients voient quand ils vous cherchent (Google, fiche, avis, site actuel), on sait ce qu’il faut vraiment faire. Parfois la priorité n’est même pas un nouveau site.',
    link: { href: '/analyse-gratuite', label: 'Comment se passe l’analyse' },
  },
  {
    q: 'Combien coûte un site internet professionnel ?',
    a: 'Cela dépend du nombre de pages, des contenus à produire, des fonctionnalités et du travail de référencement. C’est justement ce que l’analyse gratuite permet de définir avant toute proposition. Pour avoir des repères, j’ai détaillé les ordres de grandeur du marché dans un guide.',
    link: { href: '/guides/prix-site-vitrine', label: 'Lire le guide sur le prix d’un site vitrine' },
  },
  {
    q: 'Combien de temps faut-il pour créer un site vitrine ?',
    a: 'Une fois les contenus réunis (textes, photos, informations), un site vitrine est généralement mis en ligne en une à deux semaines. L’analyse de départ permet d’aller vite, car on sait déjà quelles pages créer.',
  },
  {
    q: 'J’ai déjà une fiche Google, ai-je besoin d’un site ?',
    a: 'La fiche Google est indispensable, mais elle est limitée : peu de place pour expliquer vos prestations, montrer vos réalisations ou rassurer. Le site complète la fiche, et Google s’appuie sur lui pour comprendre ce que vous faites et où vous intervenez.',
  },
  {
    q: 'Pouvez-vous refaire un site existant ?',
    a: 'Oui. L’analyse gratuite permet de voir si votre site actuel peut être amélioré ou s’il vaut mieux le refaire, en conservant ce qui fonctionne déjà, notamment les pages qui apparaissent sur Google.',
  },
  {
    q: 'Où intervenez-vous ?',
    a: 'Principalement dans le Val-d’Oise et l’ouest de l’Île-de-France, et à distance partout en France : tout peut se faire par téléphone et en visio.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Création de site internet professionnel',
          serviceType: 'Création de site internet',
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'France' },
          url: SITE.url,
        }}
      />

      {/* HERO */}
      <section className="overflow-hidden border-b border-line bg-paper">
        <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-24">
          <div>
            <Eyebrow>Développeur web · Val-d’Oise et toute la France</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
              Création de site internet professionnel,{' '}
              <span className="text-copper">pensé pour être trouvé</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              WebPrestige conçoit des sites vitrines rapides, clairs et bien référencés pour les artisans, commerçants
              et TPE. Avant de parler de site, je commence par une analyse gratuite de votre présence en ligne : ce que
              vos clients voient vraiment quand ils vous cherchent.
            </p>
            <HeroActions />
          </div>
          <AnalysisCard />
        </Container>
      </section>

      {/* MÉTHODE */}
      <Section tone="white">
        <SectionHeading
          eyebrow="La méthode"
          title="Pas de devis à l’aveugle : on regarde d’abord où vous en êtes"
          intro="La plupart des entreprises demandent un devis de site internet sans savoir ce qui leur manque vraiment. Je fais l’inverse : un diagnostic d’abord, une solution ensuite."
        />
        <AnalyseSteps />
      </Section>

      {/* À QUOI SERT UN SITE */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Site vitrine professionnel"
              title="Un site vitrine professionnel, à quoi ça sert vraiment ?"
            />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Créer le site internet de votre entreprise, ce n’est pas cocher une case. C’est construire l’endroit où
                un inconnu décide, en moins d’une minute, s’il vous appelle ou s’il passe au résultat suivant.
              </p>
              <p>
                Un bon site vitrine fait trois choses : il vous rend visible sur les recherches de vos futurs clients, il
                les rassure, et il rend le contact évident. Tout le reste est secondaire.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                n: '01',
                t: 'Être trouvé',
                d: 'Sur Google et Google Maps, quand quelqu’un cherche votre métier dans votre ville ou décrit son besoin.',
              },
              {
                n: '02',
                t: 'Rassurer',
                d: 'Photos réelles, prestations détaillées, avis clients, informations claires : la preuve que vous êtes la bonne entreprise.',
              },
              {
                n: '03',
                t: 'Être contacté',
                d: 'Un numéro cliquable, un formulaire simple, une réponse rapide : le moins de friction possible entre l’intérêt et l’appel.',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-2xl font-semibold text-copper">{item.n}</span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.t}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CE QUI EST INCLUS */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Ce que comprend un site WebPrestige"
          title="Un site internet professionnel, prêt à travailler pour vous"
          intro="Chaque site est conçu à partir de l’analyse de départ, mais certains fondamentaux ne se négocient pas."
        />
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUS.map((item) => (
            <div key={item.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-copper-soft text-copper">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POUR QUI */}
      <Section>
        <SectionHeading eyebrow="Pour qui" title="Des sites pour les entreprises qui vivent de leurs clients locaux" />
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Artisans du bâtiment" icon={<Hammer className="h-5 w-5" aria-hidden="true" />}>
            <p>
              Plombiers, électriciens, couvreurs, menuisiers, élagueurs : un site qui montre vos chantiers, vos
              prestations et votre zone d’intervention.
            </p>
            <Link
              href="/creation-site-internet-artisan"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-copper hover:text-copper-dark"
            >
              Site internet pour artisan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </InfoCard>
          <InfoCard title="Commerçants et indépendants" icon={<Store className="h-5 w-5" aria-hidden="true" />}>
            <p>
              Commerces, restaurants, services à domicile : horaires, photos, avis et contact en un geste, pour être
              choisi face aux enseignes et aux plateformes.
            </p>
            <Link
              href="/referencement-local"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-copper hover:text-copper-dark"
            >
              Référencement local
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </InfoCard>
          <InfoCard title="TPE et professions libérales" icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}>
            <p>
              Cabinets, PME, entreprises B2B : un site sobre et précis qui présente vos expertises, vos références et
              donne confiance aux clients qui comparent.
            </p>
            <Link
              href="/analyse-gratuite"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-copper hover:text-copper-dark"
            >
              Faire analyser ma présence en ligne
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </InfoCard>
        </div>
      </Section>

      {/* PRESTIGE */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading light eyebrow="Pourquoi « WebPrestige »" title="Un site internet de prestige, sans le jargon" />
          <div className="space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Le nom vient d’une idée simple : une petite entreprise mérite un site aussi soigné que celui d’une grande
              marque. Prestige ne veut pas dire luxe ni complication. Ça veut dire un site où chaque détail a été pensé :
              la clarté du message, la qualité des photos, la vitesse d’affichage, la facilité à vous joindre.
            </p>
            <p>
              Un site de prestige, c’est celui qui donne l’impression, en quelques secondes, que vous êtes l’entreprise
              sérieuse du secteur. Parce que c’est le cas.
            </p>
          </div>
        </div>
      </Section>

      {/* RÉALISATIONS */}
      <Section id="realisations" tone="white">
        <SectionHeading
          eyebrow="Réalisations"
          title="Quelques sites créés pour des artisans"
          intro="Des sites en ligne, que vous pouvez visiter. D’autres projets ne sont pas présentés ici, à la demande des clients."
        />
        <Realisations />
      </Section>

      {/* TÉMOIGNAGES */}
      <Section>
        <SectionHeading eyebrow="Témoignages" title="Ce qu’en disent les clients" />
        <Temoignages />
      </Section>

      {/* ZONES */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Zones"
            title="Création de site internet dans le Val-d’Oise et alentours"
            intro="Basé dans le Val-d’Oise, je connais la façon dont les clients cherchent ici, de l’agglomération de Cergy-Pontoise au Pays de France. Et je travaille à distance avec des entreprises de toute la France."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {VILLES.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/${v.slug}`}
                  className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 hover:border-copper/40"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-ink group-hover:text-copper">Site internet à {v.nom}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{v.resume}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Link
                href="/creation-site-internet-val-d-oise"
                className="flex items-center justify-between rounded-2xl bg-navy p-5 font-semibold text-white hover:bg-navy-soft"
              >
                Création de site internet dans tout le Val-d’Oise (95)
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      {/* GUIDES */}
      <Section>
        <SectionHeading
          eyebrow="Guides"
          title="Avant de vous lancer, les bonnes questions"
          intro="Prix, frais récurrents, rentabilité : des guides francs pour décider en connaissance de cause."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 hover:border-copper/40"
            >
              <h3 className="font-display text-xl font-semibold leading-snug text-ink group-hover:text-copper">
                {g.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{g.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-copper">
                Lire le guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Création de site internet : vos questions" />
          <Faq items={HOME_FAQ} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
