import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/app/lib/site';
import { ArticleLayout, GuideCallout, GuideTable } from '@/app/components/article';
import { Faq } from '@/app/components/ui';

const PATH = '/guides/prix-site-vitrine';
const TITLE = "Prix d'un site vitrine : combien coûte un site internet professionnel ?";
const DESCRIPTION =
  "Prix d'un site vitrine en 2026 : ordres de grandeur du marché (site fait soi-même, abonnement, freelance, agence), tarif d'un développeur web, coûts cachés et méthode pour comparer les devis.";

export const metadata: Metadata = pageMetadata({
  title: "Prix d'un Site Vitrine en 2026 : Combien Coûte un Site Internet Pro ?",
  description: DESCRIPTION,
  path: PATH,
  absoluteTitle: true,
});

const TOC = [
  { id: 'ordres-de-grandeur', label: 'Les ordres de grandeur du marché' },
  { id: 'facteurs', label: 'Ce qui fait varier le prix' },
  { id: 'tarif-developpeur', label: 'Le tarif d’un développeur web' },
  { id: 'couts-recurrents', label: 'Les coûts après la création' },
  { id: 'comparer-devis', label: 'Comparer deux devis' },
  { id: 'pieges', label: 'Les pièges à éviter' },
  { id: 'pas-de-prix', label: 'Pourquoi je n’affiche pas de prix' },
  { id: 'faq', label: 'Questions fréquentes' },
];

export default function PrixSiteVitrinePage() {
  return (
    <ArticleLayout
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      crumbLabel="Prix d'un site vitrine"
      readingTime={8}
      toc={TOC}
      lead={
        <p>
          Le prix d’un site vitrine va de quelques dizaines d’euros par mois pour un site que vous construisez
          vous-même à plusieurs milliers d’euros pour un site sur mesure réalisé par une agence. L’écart ne vient pas du
          nombre de pages, mais de ce que le site est capable de faire pour votre activité. Voici comment s’y retrouver.
        </p>
      }
    >
      <h2 id="ordres-de-grandeur">Les ordres de grandeur du marché</h2>
      <p>
        Il existe quatre grandes façons d’obtenir un site vitrine. Les fourchettes ci-dessous sont des ordres de
        grandeur couramment observés en France : elles varient selon la région, les contenus et les fonctionnalités, et
        ne constituent pas une grille officielle.
      </p>
      <GuideTable>
        <table>
          <thead>
            <tr>
              <th>Solution</th>
              <th>Ordre de grandeur</th>
              <th>Pour qui ?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Site fait soi-même (Wix, Squarespace, etc.)</td>
              <td>Environ 10 à 40 € par mois d’abonnement, plus votre temps</td>
              <td>Ceux qui ont du temps et l’envie d’apprendre</td>
            </tr>
            <tr>
              <td>Plateforme « clé en main » par abonnement</td>
              <td>Environ 50 à 200 € par mois, souvent avec un engagement de durée</td>
              <td>Ceux qui veulent un site sans investissement de départ</td>
            </tr>
            <tr>
              <td>Développeur web indépendant</td>
              <td>Environ 800 à 3 500 € pour un site vitrine</td>
              <td>Les TPE et artisans qui veulent un site sur mesure et un interlocuteur unique</td>
            </tr>
            <tr>
              <td>Agence web</td>
              <td>Environ 2 500 à 10 000 € et plus</td>
              <td>Les projets plus larges : identité de marque, nombreuses pages, équipe dédiée</td>
            </tr>
          </tbody>
        </table>
      </GuideTable>
      <p>
        Le coût d’un site internet professionnel ne se résume pas à ce chiffre de départ : un abonnement à 100 € par
        mois revient à 3 600 € sur trois ans, et un site bon marché qui n’apporte aucun client coûte, lui, le prix de
        toutes les demandes perdues.
      </p>

      <h2 id="facteurs">Coût d’un site internet professionnel : ce qui fait varier le prix</h2>
      <h3>Le nombre de pages… et surtout leur utilité</h3>
      <p>
        Un site de cinq pages génériques et un site avec une page par prestation et par zone n’ont ni le même coût, ni
        le même potentiel sur Google. Ce n’est pas la quantité qui compte, mais le fait que chaque page réponde à une
        recherche réelle de vos clients.
      </p>
      <h3>Les contenus</h3>
      <p>
        Qui écrit les textes ? Qui fournit les photos ? La rédaction de contenus pensés pour le référencement prend du
        temps et pèse dans le prix. Fournir vous-même vos photos de chantiers ou de réalisations est souvent le meilleur
        choix, en qualité comme en coût.
      </p>
      <h3>Le design : sur mesure ou modèle</h3>
      <p>
        Un modèle adapté coûte moins cher qu’un design créé pour vous, mais vous ressemblerez à d’autres sites. Pour une
        entreprise qui veut se démarquer de ses concurrents locaux, le sur-mesure fait souvent la différence.
      </p>
      <h3>Les fonctionnalités</h3>
      <p>
        Prise de rendez-vous en ligne, paiement, espace client, plusieurs langues : chaque fonctionnalité ajoute du
        travail de développement, de test et de maintenance.
      </p>
      <h3>Le référencement</h3>
      <p>
        Entre un site simplement « indexable » et un site construit pour se positionner sur les recherches locales
        (structure, pages de zones, données structurées, lien avec la fiche Google), l’écart de travail est important.
        C’est aussi là que se joue la rentabilité du site.
      </p>

      <h2 id="tarif-developpeur">Tarif d’un développeur web : comment il est calculé</h2>
      <p>Un développeur web facture généralement de deux façons :</p>
      <ul>
        <li>
          <strong>Au forfait</strong>, pour un projet défini à l’avance (un site vitrine, une refonte). C’est le mode le
          plus courant pour les petites entreprises : vous connaissez le coût total dès le départ.
        </li>
        <li>
          <strong>Au temps passé</strong>, avec un taux journalier (TJM). Chez les développeurs web indépendants en
          France, il se situe le plus souvent entre 300 et 600 € par jour selon l’expérience et la spécialité.
        </li>
      </ul>
      <p>
        Un taux journalier élevé n’est pas forcément un projet plus cher : un développeur expérimenté va plus vite et
        évite des erreurs coûteuses à corriger ensuite.
      </p>

      <h2 id="couts-recurrents">Les coûts qui s’ajoutent après la création</h2>
      <p>Un site internet a aussi des frais récurrents, à prévoir dès le départ :</p>
      <ul>
        <li>le nom de domaine, renouvelé chaque année ;</li>
        <li>l’hébergement ;</li>
        <li>les adresses email professionnelles, si elles ne sont pas incluses ;</li>
        <li>la maintenance : mises à jour, sauvegardes, modifications.</li>
      </ul>
      <p>
        Ces frais sont détaillés dans notre{' '}
        <Link href="/guides/cout-hebergement-site-internet">guide sur le coût de l’hébergement d’un site internet</Link>.
      </p>

      <h2 id="comparer-devis">Comment comparer deux devis de création de site internet</h2>
      <p>Avant de signer, vérifiez au minimum ces points :</p>
      <ul>
        <li>
          <strong>Le nom de domaine est-il à votre nom ?</strong> S’il appartient au prestataire, partir devient
          compliqué.
        </li>
        <li>
          <strong>Le site vous appartient-il à la fin ?</strong> Avec certains abonnements, vous louez le site : il
          disparaît si vous arrêtez.
        </li>
        <li>
          <strong>Qu’est-ce qui est inclus ?</strong> Rédaction, photos, référencement, formulaire, mise en ligne,
          formation.
        </li>
        <li>
          <strong>Quels sont les frais récurrents ?</strong> Et y a-t-il un engagement de durée ?
        </li>
        <li>
          <strong>Le prestataire a-t-il des réalisations visibles ?</strong> Des sites en ligne que vous pouvez visiter,
          idéalement dans votre secteur.
        </li>
        <li>
          <strong>Le devis part-il de votre situation ?</strong> Ou est-ce un forfait identique pour tout le monde ?
        </li>
      </ul>

      <GuideCallout>
        <p>
          <strong>Le bon réflexe :</strong> avant de comparer des devis, faites le point sur ce qui vous manque vraiment.
          C’est le but de l’<Link href="/analyse-gratuite">analyse gratuite de votre présence en ligne</Link> : savoir si
          vous avez besoin d’un site complet, d’une refonte ou simplement d’une fiche Google mieux remplie.
        </p>
      </GuideCallout>

      <h2 id="pieges">Les pièges des offres « site à 0 € »</h2>
      <p>
        Certaines offres annoncent un site gratuit ou presque, compensé par un abonnement mensuel. Ce modèle peut
        convenir, mais lisez attentivement :
      </p>
      <ul>
        <li>la durée d’engagement, parfois de plusieurs années ;</li>
        <li>ce qu’il advient du site, des contenus et du nom de domaine si vous arrêtez ;</li>
        <li>le coût total sur la durée, à comparer avec un site acheté une fois.</li>
      </ul>

      <h2 id="pas-de-prix">Pourquoi WebPrestige n’affiche pas de prix</h2>
      <p>
        Parce qu’un prix affiché pousse à acheter un « pack » avant de savoir ce dont on a besoin. Deux artisans du même
        métier peuvent avoir des besoins opposés : l’un a déjà une bonne fiche Google et un site à moderniser, l’autre
        part de zéro dans une ville très concurrentielle.
      </p>
      <p>
        Je commence donc toujours par une analyse gratuite de votre présence en ligne. Elle débouche sur une proposition
        qui correspond à votre situation, et seulement si un site est vraiment utile.
      </p>

      <h2 id="faq">Questions fréquentes sur le prix d’un site vitrine</h2>
      <Faq
        items={[
          {
            q: 'Un site vitrine à 500 €, est-ce sérieux ?',
            a: 'Cela peut l’être pour un besoin très simple, avec un modèle existant et des contenus fournis. Vérifiez ce qui est inclus, à qui appartient le site et ce qu’il coûtera chaque année. Un site très bon marché qui n’est pas trouvé sur Google ne rapporte rien.',
          },
          {
            q: 'Faut-il obligatoirement payer chaque mois pour un site internet ?',
            a: 'Il y a toujours quelques frais récurrents (nom de domaine, hébergement), mais ils peuvent être modestes. L’abonnement mensuel n’est qu’un modèle parmi d’autres : vous pouvez aussi payer la création une fois, puis seulement l’hébergement et la maintenance choisie.',
          },
          {
            q: 'Combien coûte la refonte d’un site existant ?',
            a: 'Cela dépend de ce qui peut être conservé : contenus, structure, pages déjà bien positionnées sur Google. Une refonte bien menée garde ce qui fonctionne et corrige le reste, ce qui la rend parfois moins coûteuse qu’une création.',
          },
        ]}
      />
    </ArticleLayout>
  );
}
