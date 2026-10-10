import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, ClipboardList, Home, Images, MapPin, Phone, Star, UserRound } from 'lucide-react';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import {
  AnalyseSteps,
  CheckList,
  CtaBand,
  Faq,
  JsonLd,
  PageHero,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';
import { Realisations, Temoignages } from '@/app/components/realisations';

const PATH = '/creation-site-internet-artisan';

export const metadata: Metadata = pageMetadata({
  title: 'Création Site Internet Artisan : Site Vitrine pour Artisan du Bâtiment',
  description:
    "Création de site internet pour artisan : site vitrine avec prestations, zones d'intervention, photos de chantiers, avis et appel en un clic. Commencez par une analyse gratuite de votre présence en ligne.",
  path: PATH,
  absoluteTitle: true,
});

const PAGES_INDISPENSABLES = [
  {
    icon: Home,
    titre: 'Une page d’accueil qui répond en 5 secondes',
    texte: 'Votre métier, votre zone, votre numéro. Le visiteur doit comprendre immédiatement qu’il est au bon endroit.',
  },
  {
    icon: ClipboardList,
    titre: 'Une page par prestation',
    texte:
      'Dépannage, rénovation de salle de bain, mise aux normes, réfection de toiture… Chaque prestation importante mérite sa page : c’est ainsi que Google vous associe aux bonnes recherches.',
  },
  {
    icon: MapPin,
    titre: 'Votre zone d’intervention',
    texte: 'Les communes où vous vous déplacez réellement, présentées clairement. Le client sait que vous venez chez lui.',
  },
  {
    icon: Images,
    titre: 'Vos réalisations en photos',
    texte: 'Avant / après, chantiers terminés, détails de finition. Des photos réelles valent mieux que n’importe quelle image de banque d’images.',
  },
  {
    icon: UserRound,
    titre: 'Qui vous êtes',
    texte:
      'Votre parcours, votre équipe, vos qualifications (RGE, Qualibat, assurance décennale…) si vous en avez : ce sont des critères de choix pour vos clients.',
  },
  {
    icon: Phone,
    titre: 'Un contact sans effort',
    texte: 'Numéro cliquable sur chaque page, formulaire court, possibilité d’envoyer une photo du problème.',
  },
];

const METIERS = [
  {
    metier: 'Plombier et chauffagiste',
    texte:
      'Deux clientèles : l’urgence (fuite, panne de chauffe-eau) qui veut un numéro tout de suite, et le projet (salle de bain, chaudière) qui compare. Le site doit servir les deux : un accès direct au téléphone et des pages projets bien illustrées.',
  },
  {
    metier: 'Électricien',
    texte:
      'Mise aux normes, rénovation, dépannage, bornes de recharge, domotique : chaque prestation a ses propres recherches. Les qualifications (IRVE pour les bornes, RGE…) doivent être visibles, car elles rassurent et conditionnent certaines aides.',
  },
  {
    metier: 'Couvreur',
    texte:
      'Les chantiers sont importants et le client prend son temps. Photos de toitures, explications claires sur les interventions, garanties et assurances font la différence au moment de choisir.',
  },
  {
    metier: 'Menuisier',
    texte:
      'Fenêtres, portes, cuisines, agencement sur mesure : votre savoir-faire se voit. Une galerie bien organisée par type de réalisation est votre meilleur argument.',
  },
  {
    metier: 'Élagueur et paysagiste',
    texte:
      'Activité saisonnière, chantiers très visuels, questions de sécurité et d’évacuation des déchets verts : le site doit montrer l’avant / après et répondre aux questions pratiques.',
  },
  {
    metier: 'Maçon, peintre, plaquiste',
    texte:
      'Des projets planifiés, souvent comparés sur plusieurs devis. Un site qui explique votre façon de travailler et montre des chantiers comparables rassure avant même le premier rendez-vous.',
  },
];

const ERREURS = [
  'Le numéro de téléphone est introuvable sur mobile, ou n’est pas cliquable.',
  'Le site ne mentionne ni la ville ni la zone d’intervention : Google ne sait pas où vous placer.',
  'Toutes les prestations tiennent sur une seule page, donc aucune ne ressort sur Google.',
  'Les photos viennent de banques d’images : le client ne voit pas votre travail.',
  'Le formulaire demande dix informations avant de pouvoir envoyer une demande.',
  'Le site met plusieurs secondes à s’afficher sur un téléphone.',
  'La fiche Google et le site affichent des informations différentes.',
  'Le site n’a pas bougé depuis des années : horaires faux, réalisations anciennes.',
];

const FAQ: FaqItem[] = [
  {
    q: 'Combien coûte un site internet pour un artisan ?',
    a: 'Le prix dépend du nombre de prestations à présenter, des contenus à produire (textes, photos), de votre zone et du travail de référencement nécessaire. Plutôt qu’un tarif standard, je commence par une analyse gratuite pour définir ce dont vous avez vraiment besoin. Pour des repères, le guide ci-dessous détaille les ordres de grandeur du marché.',
    link: { href: '/guides/prix-site-vitrine', label: 'Prix d’un site vitrine : les repères' },
  },
  {
    q: 'J’ai déjà une fiche Google, ai-je besoin d’un site internet ?',
    a: 'La fiche Google vous rend visible sur Maps, mais elle montre peu de choses. Le site permet de détailler chaque prestation, de montrer vos chantiers et de rassurer. Google s’appuie aussi sur votre site pour décider sur quelles recherches afficher votre fiche : les deux se renforcent.',
  },
  {
    q: 'Je n’ai pas de photos de mes chantiers, est-ce un problème ?',
    a: 'Non, on commence avec ce que vous avez. Je vous explique quelles photos prendre sur vos prochains chantiers (avant, pendant, après) et on les ajoute au fil de l’eau. Quelques photos réelles valent mieux qu’une galerie d’images génériques.',
  },
  {
    q: 'Combien de temps avant d’apparaître sur Google ?',
    a: 'Le site est indexé en quelques jours. Se positionner sur les recherches qui comptent prend plus de temps : quelques semaines pour les recherches précises et peu disputées, plusieurs mois pour les plus concurrentielles. La fiche Google, bien optimisée, produit souvent les premiers effets.',
  },
  {
    q: 'Pourrai-je modifier mon site ?',
    a: 'Vous pouvez m’envoyer vos changements (nouvelles photos, horaires, prestations) et je m’en occupe, sans que vous ayez à toucher à quoi que ce soit de technique.',
    link: { href: '/maintenance-site-internet', label: 'La maintenance de site internet' },
  },
  {
    q: 'Je passe déjà par des plateformes de mise en relation, pourquoi un site ?',
    a: 'Les plateformes vous apportent des contacts, mais souvent en les facturant et parfois en les partageant avec d’autres artisans. Un site à votre nom vous amène des clients qui vous ont choisi, vous, sans intermédiaire.',
  },
];

export default function ArtisanPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Création de site internet pour artisan',
          serviceType: 'Création de site internet',
          audience: { '@type': 'BusinessAudience', name: 'Artisans du bâtiment' },
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'France' },
          url: `${SITE.url}${PATH}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: 'Site internet pour artisan', href: PATH },
        ]}
        eyebrow="Site internet artisan"
        title="Création de site internet pour artisan"
        lead="Plombier, électricien, couvreur, menuisier, élagueur… Vos clients vous cherchent sur Google avant de vous appeler. Un site vitrine d’artisan bien construit leur donne les trois réponses qu’ils attendent : faites-vous ce dont j’ai besoin, intervenez-vous chez moi, puis-je vous faire confiance ?"
      />

      {/* POURQUOI */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="Pourquoi un site" title="Pourquoi un site internet quand on est artisan ?" />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Le bouche-à-oreille reste votre meilleur commercial. Mais il a changé : un client à qui l’on vous a
                recommandé tape votre nom sur Google avant d’appeler. S’il ne trouve rien, ou un résultat peu rassurant,
                la recommandation perd de sa force.
              </p>
              <p>
                Et pour tous les clients qui ne vous connaissent pas encore, la recherche commence par « mon besoin + ma
                ville ». Ceux qui tapent « couvreur Pontoise » ou « dépannage électricité Cergy » ont un projet et sont
                prêts à appeler. Ils choisissent parmi les quelques entreprises que Google leur montre.
              </p>
              <p>
                Un site internet d’artisan sert à être dans ce choix, puis à le remporter : en montrant votre travail, en
                expliquant clairement ce que vous faites et en rendant l’appel évident.
              </p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-8 text-white">
            <Camera className="h-7 w-7 text-[#e8a676]" aria-hidden="true" />
            <p className="mt-5 font-display text-2xl font-semibold leading-snug">
              Le site d’un artisan se juge sur une chose : est-ce qu’il fait sonner le téléphone ?
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              C’est pour ça que je commence par analyser votre présence en ligne. On part de ce que vos clients voient
              aujourd’hui, pas d’un modèle tout fait.
            </p>
          </aside>
        </div>
      </Section>

      {/* PAGES INDISPENSABLES */}
      <Section>
        <SectionHeading
          eyebrow="Site vitrine artisan"
          title="Site vitrine artisan : les pages qui comptent"
          intro="Un site d’artisan efficace n’a pas besoin d’être grand. Il a besoin des bonnes pages, bien remplies."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PAGES_INDISPENSABLES.map((p) => (
            <div key={p.titre} className="rounded-2xl border border-line bg-white p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-copper-soft text-copper">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.titre}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MÉTIERS DU BÂTIMENT */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Artisans du bâtiment"
          title="Site web pour artisan du bâtiment : ce qui change selon votre métier"
          intro="Tous les artisans n’ont pas les mêmes clients ni les mêmes recherches. Le site doit coller à la réalité de votre métier."
        />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {METIERS.map((m) => (
            <div key={m.metier} className="border-l-2 border-copper/60 pl-6">
              <h3 className="text-lg font-semibold text-ink">{m.metier}</h3>
              <p className="mt-2 leading-relaxed text-muted">{m.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ERREURS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="À éviter"
            title="Les erreurs les plus fréquentes sur les sites d’artisans"
            intro="Ce sont les problèmes que je retrouve le plus souvent pendant les analyses. Chacun coûte des appels, souvent sans que l’artisan s’en rende compte."
          />
          <CheckList items={ERREURS} />
        </div>
      </Section>

      {/* FICHE GOOGLE */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Site + fiche Google"
            title="Site internet et fiche Google : les deux vont ensemble"
            intro="Sur une recherche locale, Google affiche d’abord une carte avec trois entreprises, puis les sites. Votre fiche Google vous fait entrer dans la carte ; votre site aide Google à comprendre ce que vous faites et convainc le client de vous appeler."
          />
          <div className="rounded-2xl border border-line bg-paper p-8">
            <Star className="h-6 w-6 text-copper" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Pendant l’analyse gratuite, je vérifie les deux : la fiche (catégories, informations, photos, avis) et le
              site (contenu, vitesse, cohérence). C’est souvent leur combinaison qui débloque la situation.
            </p>
            <Link href="/referencement-local" className="mt-5 inline-block font-semibold text-copper hover:text-copper-dark">
              En savoir plus sur le référencement local →
            </Link>
          </div>
        </div>
      </Section>

      {/* MÉTHODE */}
      <Section tone="navy">
        <SectionHeading
          light
          eyebrow="Analyse gratuite"
          title="Votre site d’artisan commence par une analyse gratuite"
          intro="Je regarde ce que vos clients voient quand ils cherchent votre métier dans votre secteur, puis je vous propose ce qui vous fera gagner des chantiers."
        />
        <AnalyseSteps light />
      </Section>

      {/* RÉALISATIONS */}
      <Section tone="white">
        <SectionHeading eyebrow="Réalisations" title="Des sites créés pour des artisans" />
        <Realisations />
      </Section>

      <Section>
        <SectionHeading eyebrow="Témoignages" title="Ils ont confié leur site à WebPrestige" />
        <Temoignages />
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Site internet artisan : vos questions" />
          <Faq items={FAQ} />
        </div>
      </Section>

      <CtaBand title="Artisan : que voient vos clients quand ils vous cherchent ?" />
    </>
  );
}
