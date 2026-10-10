import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/app/lib/site';
import { ArticleLayout, GuideCallout, GuideTable } from '@/app/components/article';
import { Faq } from '@/app/components/ui';

const PATH = '/guides/cout-hebergement-site-internet';
const TITLE = 'Hébergement de site internet : quel prix prévoir chaque année ?';
const DESCRIPTION =
  "Prix de l'hébergement d'un site internet, du nom de domaine, du HTTPS, des emails et de la maintenance : tous les frais récurrents d'un site vitrine, avec un exemple de budget annuel.";

export const metadata: Metadata = pageMetadata({
  title: 'Hébergement Site Internet : Prix, Nom de Domaine et Frais Récurrents',
  description: DESCRIPTION,
  path: PATH,
  absoluteTitle: true,
});

const TOC = [
  { id: 'nom-de-domaine', label: 'Le nom de domaine' },
  { id: 'types-hebergement', label: 'Les types d’hébergement et leurs prix' },
  { id: 'https', label: 'Le certificat HTTPS' },
  { id: 'emails', label: 'Les emails professionnels' },
  { id: 'maintenance', label: 'Maintenance et entretien' },
  { id: 'budget', label: 'Exemple de budget annuel' },
  { id: 'erreurs', label: 'Les erreurs qui coûtent cher' },
  { id: 'faq', label: 'Questions fréquentes' },
];

export default function CoutHebergementPage() {
  return (
    <ArticleLayout
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      crumbLabel="Coût de l'hébergement"
      readingTime={7}
      toc={TOC}
      lead={
        <p>
          Pour un site vitrine, l’hébergement coûte le plus souvent entre 0 et 20 € par mois, et le nom de domaine
          environ 10 à 20 € par an. S’y ajoutent éventuellement les emails professionnels et la maintenance, le poste le
          plus variable. Voici le détail de chaque frais, pour savoir ce que vous payez et pourquoi.
        </p>
      }
    >
      <h2 id="nom-de-domaine">Le nom de domaine</h2>
      <p>
        C’est l’adresse de votre site (par exemple <em>monentreprise.fr</em>). Il se loue à l’année auprès d’un
        registraire. Un <strong>.fr</strong> ou un <strong>.com</strong> coûte généralement entre 7 et 20 € par an.
      </p>
      <p>Deux points d’attention :</p>
      <ul>
        <li>
          <strong>Le prix de renouvellement</strong> est souvent plus élevé que le prix promotionnel de la première année.
        </li>
        <li>
          <strong>Le domaine doit être à votre nom</strong>, même si c’est votre prestataire qui le gère. C’est votre
          adresse sur internet : vous devez pouvoir la récupérer à tout moment.
        </li>
      </ul>

      <h2 id="types-hebergement">Hébergement de site internet : les types et leurs prix</h2>
      <p>
        L’hébergement, c’est le serveur qui stocke votre site et l’envoie à chaque visiteur. Le bon choix dépend de la
        technologie de votre site, pas du prix le plus bas.
      </p>
      <GuideTable>
        <table>
          <thead>
            <tr>
              <th>Type d’hébergement</th>
              <th>Ordre de grandeur</th>
              <th>Adapté à</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hébergement mutualisé</td>
              <td>Environ 3 à 15 € par mois</td>
              <td>Petits sites WordPress ou classiques, trafic modeste</td>
            </tr>
            <tr>
              <td>Hébergement WordPress infogéré</td>
              <td>Environ 10 à 40 € par mois</td>
              <td>Sites WordPress qui veulent sauvegardes, sécurité et mises à jour gérées</td>
            </tr>
            <tr>
              <td>Serveur privé (VPS) ou dédié</td>
              <td>De 5 à plus de 50 € par mois</td>
              <td>Projets spécifiques, avec quelqu’un pour administrer le serveur</td>
            </tr>
            <tr>
              <td>Plateformes pour sites modernes (Vercel, Netlify, Cloudflare Pages…)</td>
              <td>Offres gratuites limitées, puis une vingtaine d’euros par mois environ</td>
              <td>Sites légers et rapides construits avec des technologies récentes</td>
            </tr>
          </tbody>
        </table>
      </GuideTable>
      <p>
        Attention aux offres gratuites : certaines sont réservées à un usage personnel ou non commercial. Pour le site
        d’une entreprise, vérifiez les conditions d’utilisation.
      </p>

      <h2 id="https">Le certificat HTTPS</h2>
      <p>
        Le petit cadenas dans la barre d’adresse est indispensable : sans lui, les navigateurs affichent un message
        « non sécurisé » qui fait fuir les visiteurs. Bonne nouvelle, un certificat standard est aujourd’hui gratuit
        (Let’s Encrypt) et inclus par la plupart des hébergeurs. Pour un site vitrine, il n’y a pas de raison de payer
        un certificat à part.
      </p>

      <h2 id="emails">Les adresses email professionnelles</h2>
      <p>
        Une adresse du type <em>contact@monentreprise.fr</em> inspire plus confiance qu’une adresse gratuite. Certains
        hébergeurs incluent des boîtes mail simples. Pour une messagerie complète (agenda, stockage, applications
        mobiles), les grandes solutions professionnelles coûtent environ 5 à 10 € par utilisateur et par mois.
      </p>

      <h2 id="maintenance">Maintenance et entretien : le poste le plus variable</h2>
      <p>
        La maintenance regroupe le travail humain autour du site : mises à jour, sauvegardes, corrections, modifications
        de contenu, suivi du référencement. Son prix dépend surtout de la technologie du site et du niveau de suivi
        souhaité : de quelques dizaines à quelques centaines d’euros par mois sur le marché.
      </p>
      <p>
        Un site WordPress chargé d’extensions demande des mises à jour fréquentes ; un site moderne et léger beaucoup
        moins. C’est un critère à prendre en compte dès la création. Plus de détails sur la page{' '}
        <Link href="/maintenance-site-internet">maintenance de site internet</Link>.
      </p>

      <h2 id="budget">Exemple de budget annuel pour un site vitrine</h2>
      <p>
        À titre indicatif, voici à quoi peuvent ressembler les frais récurrents d’un site vitrine selon deux
        configurations. Ce sont des exemples, pas des devis.
      </p>
      <GuideTable>
        <table>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Configuration légère</th>
              <th>Configuration complète</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom de domaine</td>
              <td>Environ 10 à 15 € / an</td>
              <td>Environ 10 à 15 € / an</td>
            </tr>
            <tr>
              <td>Hébergement</td>
              <td>0 à 60 € / an</td>
              <td>120 à 480 € / an</td>
            </tr>
            <tr>
              <td>Emails professionnels</td>
              <td>Inclus chez l’hébergeur</td>
              <td>60 à 120 € / an par utilisateur</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>Ponctuelle, à la demande</td>
              <td>Contrat mensuel</td>
            </tr>
          </tbody>
        </table>
      </GuideTable>

      <GuideCallout>
        <p>
          <strong>Vous payez déjà un site et vous ne savez pas exactement pour quoi ?</strong> L’
          <Link href="/analyse-gratuite">analyse gratuite de votre présence en ligne</Link> fait aussi le point sur votre
          site actuel : hébergement, vitesse, sécurité, et ce qu’il vous rapporte vraiment.
        </p>
      </GuideCallout>

      <h2 id="erreurs">Les erreurs qui coûtent cher</h2>
      <ul>
        <li>
          <strong>Un domaine au nom du prestataire</strong> : impossible de changer de prestataire sans perdre son
          adresse.
        </li>
        <li>
          <strong>Choisir sur le prix de la première année</strong> sans regarder le renouvellement.
        </li>
        <li>
          <strong>Un hébergement inadapté</strong> : trop faible, le site est lent ; trop puissant, vous payez pour rien.
        </li>
        <li>
          <strong>Aucune sauvegarde</strong> : une panne ou un piratage peut faire perdre tout le site.
        </li>
        <li>
          <strong>Oublier la date de renouvellement</strong> : un domaine expiré, c’est un site et des emails qui
          s’arrêtent du jour au lendemain.
        </li>
      </ul>

      <h2 id="faq">Questions fréquentes sur l’hébergement</h2>
      <Faq
        items={[
          {
            q: 'Peut-on héberger un site professionnel gratuitement ?',
            a: 'Techniquement oui, sur certaines plateformes, mais les offres gratuites sont souvent limitées ou réservées à un usage non commercial. Pour un site d’entreprise, mieux vaut une offre payante, même modeste, avec des conditions claires.',
          },
          {
            q: 'Puis-je changer d’hébergeur sans perdre mon site ?',
            a: 'Oui, si vous avez accès à votre nom de domaine et aux fichiers du site. C’est pour cela qu’il est essentiel que le domaine soit à votre nom et que vous puissiez récupérer votre site à tout moment.',
          },
          {
            q: 'L’hébergement influence-t-il le référencement ?',
            a: 'Indirectement : un hébergement lent ou souvent indisponible dégrade l’expérience des visiteurs, que Google prend en compte. Un hébergement correct et un site léger suffisent largement pour un site vitrine.',
          },
        ]}
      />
    </ArticleLayout>
  );
}
