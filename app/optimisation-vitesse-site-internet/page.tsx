import type { Metadata } from 'next';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import {
  CheckList,
  CtaBand,
  Faq,
  JsonLd,
  PageHero,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';

const PATH = '/optimisation-vitesse-site-internet';

export const metadata: Metadata = pageMetadata({
  title: 'Optimiser la Vitesse de son Site Web : Améliorer ses Performances',
  description:
    "Optimiser la vitesse d'un site web et améliorer ses performances : Core Web Vitals, images, scripts, hébergement. Les causes de lenteur les plus fréquentes et comment les corriger.",
  path: PATH,
  absoluteTitle: true,
});

const INDICATEURS = [
  {
    sigle: 'LCP',
    nom: 'Affichage du contenu principal',
    seuil: 'Bon : 2,5 s ou moins',
    texte: 'Le temps nécessaire pour afficher l’élément principal de la page, souvent une grande image ou le titre.',
  },
  {
    sigle: 'INP',
    nom: 'Réactivité aux interactions',
    seuil: 'Bon : 200 ms ou moins',
    texte: 'Le délai entre un clic ou un appui et la réaction visible de la page.',
  },
  {
    sigle: 'CLS',
    nom: 'Stabilité de la mise en page',
    seuil: 'Bon : 0,1 ou moins',
    texte: 'Les éléments qui bougent pendant le chargement et font cliquer au mauvais endroit.',
  },
];

const CAUSES = [
  <>
    <strong className="text-ink">Des images trop lourdes.</strong> Une photo de plusieurs mégaoctets, affichée en
    petit, est la cause de lenteur la plus fréquente sur les sites vitrines.
  </>,
  <>
    <strong className="text-ink">Un thème ou un constructeur de pages trop chargé.</strong> Beaucoup de code est
    chargé pour rien sur chaque page.
  </>,
  <>
    <strong className="text-ink">Trop d’extensions.</strong> Sur WordPress, chaque extension ajoute ses fichiers et
    ses requêtes.
  </>,
  <>
    <strong className="text-ink">Des scripts tiers.</strong> Chat en ligne, pixels publicitaires, widgets : chacun
    ralentit l’affichage.
  </>,
  <>
    <strong className="text-ink">Un hébergement sous-dimensionné</strong> ou éloigné de vos visiteurs.
  </>,
  <>
    <strong className="text-ink">Des polices de caractères mal chargées</strong>, qui retardent l’affichage du texte.
  </>,
];

const METHODE = [
  'Mesure avec PageSpeed Insights et, quand elles existent, les données réelles de vos visiteurs.',
  'Compression et redimensionnement des images, formats modernes (WebP, AVIF), chargement différé.',
  'Suppression des scripts, extensions et polices inutiles.',
  'Mise en cache et diffusion du site au plus près des visiteurs.',
  'Correction des éléments qui font bouger la mise en page.',
  'Si la base technique est trop lourde : reconstruction du site sur une technologie légère, en conservant ses contenus et son référencement.',
];

const FAQ: FaqItem[] = [
  {
    q: 'La vitesse d’un site influence-t-elle le référencement ?',
    a: 'Oui, Google prend en compte l’expérience sur la page, dont les Core Web Vitals. Ce n’est pas le critère le plus important : un site rapide mais sans contenu pertinent ne sera pas bien classé. Mais à pertinence égale, un site lent est désavantagé, et surtout, il perd des visiteurs.',
  },
  {
    q: 'Comment tester la vitesse de mon site ?',
    a: 'Rendez-vous sur PageSpeed Insights, l’outil gratuit de Google, et entrez l’adresse de votre site. Regardez surtout les résultats « mobile » : c’est là que se trouvent la majorité de vos visiteurs, et là que les lenteurs se voient le plus.',
  },
  {
    q: 'Faut-il refaire tout le site pour qu’il soit rapide ?',
    a: 'Pas toujours. Les images et quelques réglages suffisent souvent à beaucoup améliorer les choses. Une refonte n’est utile que si la base technique elle-même est trop lourde. L’analyse gratuite permet de trancher.',
  },
  {
    q: 'Un score de 100 sur PageSpeed est-il nécessaire ?',
    a: 'Non. Le score est un indicateur utile, pas un objectif en soi. Ce qui compte, c’est que vos vrais visiteurs, sur leur téléphone, voient votre page s’afficher vite et puissent agir sans attendre.',
  },
];

export default function VitessePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Optimisation de la vitesse de site internet',
          serviceType: 'Optimisation des performances web',
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'France' },
          url: `${SITE.url}${PATH}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: 'Vitesse et performance', href: PATH },
        ]}
        eyebrow="Performance web"
        title="Optimiser la vitesse de votre site internet"
        lead="Un site lent perd des visiteurs avant même qu’ils aient lu votre nom, surtout sur mobile. Améliorer la performance d’un site internet, c’est lui permettre de s’afficher vite, de réagir immédiatement et de rester stable pendant le chargement."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Les indicateurs de Google"
          title="Les 3 indicateurs qui mesurent la vitesse d’un site"
          intro="Google mesure l’expérience de vos visiteurs avec trois indicateurs, les Core Web Vitals. Ce sont aussi ceux que je regarde en premier."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {INDICATEURS.map((i) => (
            <div key={i.sigle} className="rounded-2xl border border-line bg-paper p-7">
              <p className="font-display text-3xl font-semibold text-copper">{i.sigle}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{i.nom}</h3>
              <p className="mt-2 leading-relaxed text-muted">{i.texte}</p>
              <p className="mt-4 inline-block rounded-full bg-sage-soft px-3 py-1 text-sm font-semibold text-sage">
                {i.seuil}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Diagnostic"
            title="Ce qui ralentit le plus souvent un site vitrine"
            intro="Dans la grande majorité des cas, la lenteur vient de quelques causes bien identifiées, faciles à corriger une fois repérées."
          />
          <CheckList items={CAUSES} />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Méthode"
            title="Comment j’améliore la performance d’un site internet"
            intro="On mesure d’abord, on corrige ensuite, en commençant par ce qui a le plus d’impact sur vos visiteurs."
          />
          <CheckList items={METHODE} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Vitesse de site web : vos questions" />
          <Faq items={FAQ} />
        </div>
      </Section>

      <CtaBand
        title="Votre site est-il assez rapide ?"
        text="L’analyse gratuite inclut un contrôle de la vitesse de votre site sur mobile, avec les causes de lenteur et les corrections prioritaires."
      />
    </>
  );
}
