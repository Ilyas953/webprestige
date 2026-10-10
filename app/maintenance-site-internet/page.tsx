import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, ArchiveRestore, Globe, PencilLine, SearchCheck, ShieldCheck } from 'lucide-react';
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

const PATH = '/maintenance-site-internet';

export const metadata: Metadata = pageMetadata({
  title: 'Maintenance Site Internet et Site Vitrine : Entretien, Tarif et Suivi',
  description:
    "Maintenance de site internet et de site vitrine : sécurité, sauvegardes, hébergement, modifications et suivi du référencement. Ce qui est inclus et ce qui fait varier le tarif d'un entretien de site web.",
  path: PATH,
  absoluteTitle: true,
});

const INCLUS = [
  {
    icon: ShieldCheck,
    titre: 'Sécurité et mises à jour',
    texte: 'Mises à jour techniques et correctifs de sécurité appliqués avant qu’un problème n’apparaisse.',
  },
  {
    icon: ArchiveRestore,
    titre: 'Sauvegardes',
    texte: 'Des sauvegardes régulières et automatiques, pour pouvoir revenir en arrière en cas de souci.',
  },
  {
    icon: Globe,
    titre: 'Hébergement, domaine et HTTPS',
    texte: 'Renouvellements suivis, certificat de sécurité actif, site toujours accessible à la bonne adresse.',
  },
  {
    icon: PencilLine,
    titre: 'Modifications de contenu',
    texte: 'Horaires, photos, prestations, actualités : vous envoyez, je mets à jour, généralement sous 24 à 48 h.',
  },
  {
    icon: Activity,
    titre: 'Surveillance et performance',
    texte: 'Disponibilité, vitesse d’affichage, formulaire qui fonctionne : je vérifie que tout tourne comme prévu.',
  },
  {
    icon: SearchCheck,
    titre: 'Suivi du référencement',
    texte: 'Suivi dans Google Search Console : pages indexées, erreurs, recherches qui vous amènent des visiteurs.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'La maintenance d’un site vitrine est-elle obligatoire ?',
    a: 'Non. Mais un site laissé sans suivi finit toujours par poser problème : nom de domaine expiré, formulaire qui ne fonctionne plus, informations fausses, failles de sécurité sur les sites qui utilisent des extensions. La question est plutôt de savoir qui s’en occupe.',
  },
  {
    q: 'Pouvez-vous reprendre la maintenance d’un site fait par quelqu’un d’autre ?',
    a: 'Cela dépend de la technologie utilisée et de l’état du site. L’analyse gratuite permet de voir s’il peut être maintenu tel quel ou s’il vaut mieux le refaire sur une base plus saine.',
  },
  {
    q: 'Quelle est la différence entre hébergement et maintenance ?',
    a: 'L’hébergement, c’est l’endroit où votre site est stocké et servi aux visiteurs. La maintenance, c’est le travail humain autour : mises à jour, sauvegardes, modifications, vérifications, suivi. On peut payer l’un sans l’autre, mais un site sans maintenance se dégrade.',
    link: { href: '/guides/cout-hebergement-site-internet', label: 'Guide : le coût de l’hébergement' },
  },
  {
    q: 'Puis-je modifier mon site moi-même ?',
    a: 'Selon la façon dont le site est construit, certaines modifications simples peuvent être faites par vous. Beaucoup d’entreprises préfèrent cependant tout confier, pour ne pas perdre de temps ni risquer de casser la mise en page.',
  },
];

export default function MaintenancePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Maintenance de site internet',
          serviceType: 'Maintenance de site web',
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'France' },
          url: `${SITE.url}${PATH}`,
        }}
      />

      <PageHero
        crumbs={[
          { name: 'Accueil', href: '/' },
          { name: 'Maintenance de site internet', href: PATH },
        ]}
        eyebrow="Maintenance site vitrine"
        title="Maintenance de site internet"
        lead="Un site vitrine n’est pas terminé le jour de sa mise en ligne. Pour continuer à vous apporter des clients, il doit rester sûr, rapide, à jour et visible sur Google. La maintenance, c’est tout ce travail discret qui garde votre site en état de marche."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Ce qui est couvert"
          title="Ce que couvre la maintenance d’un site vitrine"
          intro="Une maintenance utile ne se limite pas aux mises à jour techniques : elle garde le site fidèle à votre activité."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INCLUS.map((item) => (
            <div key={item.titre} className="rounded-2xl border border-line bg-paper p-7">
              <item.icon className="h-6 w-6 text-copper" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.titre}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Tarif" title="Maintenance de site internet : ce qui fait varier le tarif" />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Sur le marché, une maintenance de site vitrine va de quelques dizaines d’euros par mois pour un simple
                suivi technique à plusieurs centaines d’euros pour un accompagnement complet avec contenu et
                référencement. L’écart s’explique par quelques facteurs concrets.
              </p>
              <p>
                Le bon niveau de maintenance dépend de votre site et de votre usage : c’est l’un des points que je
                définis avec vous après l’analyse gratuite.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="font-semibold text-ink">Les facteurs qui comptent</h3>
            <div className="mt-5">
              <CheckList
                items={[
                  <>
                    <strong className="text-ink">La technologie du site.</strong> Un site WordPress avec de nombreuses
                    extensions demande beaucoup plus de mises à jour qu’un site moderne et léger.
                  </>,
                  <>
                    <strong className="text-ink">La fréquence des modifications.</strong> Changer une photo par an ou
                    publier chaque mois, ce n’est pas le même travail.
                  </>,
                  <>
                    <strong className="text-ink">Ce qui est inclus.</strong> Hébergement, nom de domaine, emails,
                    sauvegardes : certaines offres les comprennent, d’autres non.
                  </>,
                  <>
                    <strong className="text-ink">Le suivi du référencement.</strong> Simple surveillance ou vrai travail
                    d’amélioration des positions.
                  </>,
                  <>
                    <strong className="text-ink">La réactivité attendue.</strong> Un délai d’intervention garanti a une
                    valeur.
                  </>,
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Entretien d’un site web"
            title="Ce que vous pouvez vérifier vous-même chaque mois"
            intro="Même avec une maintenance, quelques vérifications rapides de votre côté évitent de mauvaises surprises."
          />
          <CheckList
            items={[
              'Envoyer un message test avec votre formulaire de contact et vérifier sa réception.',
              'Ouvrir le site sur votre téléphone : s’affiche-t-il vite et correctement ?',
              'Relire vos horaires, votre adresse et votre numéro, sur le site et sur la fiche Google.',
              'Ajouter une ou deux photos de réalisations récentes.',
              'Répondre aux nouveaux avis Google, positifs comme négatifs.',
              'Noter la date de renouvellement de votre nom de domaine.',
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="Maintenance de site : vos questions" />
          <Faq items={FAQ} />
          <p className="mt-8 text-muted">
            À lire aussi :{' '}
            <Link href="/optimisation-vitesse-site-internet" className="font-semibold text-copper hover:text-copper-dark">
              optimiser la vitesse de votre site internet
            </Link>
            .
          </p>
        </div>
      </Section>

      <CtaBand
        title="Votre site actuel est-il en bon état ?"
        text="L’analyse gratuite vérifie votre site (vitesse, mobile, sécurité, référencement) et votre présence sur Google. Vous saurez s’il suffit de l’entretenir ou s’il faut le refaire."
      />
    </>
  );
}
