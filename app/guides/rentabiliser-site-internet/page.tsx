import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/app/lib/site';
import { ArticleLayout, GuideCallout, GuideTable } from '@/app/components/article';
import { Faq } from '@/app/components/ui';

const PATH = '/guides/rentabiliser-site-internet';
const TITLE = 'Comment rentabiliser son site internet';
const DESCRIPTION =
  "Rentabiliser son site internet quand on est artisan ou TPE : calculer ce qu'il rapporte, mesurer les demandes, et actionner les leviers qui amènent plus de clients et de meilleurs chantiers.";

export const metadata: Metadata = pageMetadata({
  title: 'Rentabiliser son Site Internet : Méthode pour Artisans et TPE',
  description: DESCRIPTION,
  path: PATH,
  absoluteTitle: true,
});

const TOC = [
  { id: 'calculer', label: 'Calculer la rentabilité' },
  { id: 'mesurer', label: 'Mesurer ce que le site rapporte' },
  { id: 'plus-de-demandes', label: 'Obtenir plus de demandes' },
  { id: 'meilleures-demandes', label: 'Obtenir de meilleures demandes' },
  { id: 'ne-rapporte-pas', label: 'Ce qui ne rapporte presque jamais' },
  { id: 'faq', label: 'Questions fréquentes' },
];

export default function RentabiliserPage() {
  return (
    <ArticleLayout
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      crumbLabel="Rentabiliser son site"
      readingTime={7}
      toc={TOC}
      lead={
        <p>
          Un site rentable, c’est un site qui rapporte plus qu’il ne coûte. Pour un artisan ou une petite entreprise, la
          question est simple : combien de clients le site amène-t-il, et combien valent-ils ? Voici comment le calculer,
          le mesurer et l’améliorer.
        </p>
      }
    >
      <h2 id="calculer">Calculer la rentabilité de votre site internet</h2>
      <p>La formule tient en une ligne :</p>
      <p>
        <strong>
          Demandes reçues grâce au site × taux de transformation × marge moyenne par client − coût du site
        </strong>
      </p>
      <p>Prenons un exemple fictif, pour un plombier :</p>
      <GuideTable>
        <table>
          <tbody>
            <tr>
              <td>Demandes reçues via le site chaque mois</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Demandes transformées en chantiers</td>
              <td>3 sur 8</td>
            </tr>
            <tr>
              <td>Marge moyenne par chantier</td>
              <td>250 €</td>
            </tr>
            <tr>
              <td>
                <strong>Marge générée par mois</strong>
              </td>
              <td>
                <strong>750 €</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </GuideTable>
      <p>
        Avec ces chiffres, chaque mois de fonctionnement rapporte bien plus que ce que coûte l’entretien d’un site
        vitrine. Mais l’exemple montre surtout une chose : sans connaître vos propres chiffres, impossible de savoir si
        votre site est rentable. D’où l’importance de mesurer.
      </p>

      <h2 id="mesurer">Mesurer ce que votre site rapporte</h2>
      <ul>
        <li>
          <strong>Google Search Console</strong> (gratuit) : sur quelles recherches votre site apparaît, combien de fois,
          et combien de personnes cliquent.
        </li>
        <li>
          <strong>Le suivi des contacts</strong> : nombre de clics sur votre numéro de téléphone et de formulaires
          envoyés, mesurés avec un outil de statistiques.
        </li>
        <li>
          <strong>La fiche Google</strong> : ses statistiques indiquent les appels, demandes d’itinéraire et visites du
          site générés.
        </li>
        <li>
          <strong>La question simple</strong> : « Comment nous avez-vous connus ? », posée à chaque nouveau client et
          notée quelque part.
        </li>
      </ul>

      <h2 id="plus-de-demandes">Les leviers qui augmentent le nombre de demandes</h2>
      <h3>Être trouvé sur les bonnes recherches</h3>
      <p>
        Une page par prestation et par zone d’intervention, une fiche Google complète et cohérente avec le site : c’est
        la base pour apparaître quand un client cherche ce que vous faites, là où vous le faites. Voir notre page sur le{' '}
        <Link href="/referencement-local">référencement local</Link>.
      </p>
      <h3>Convaincre en quelques secondes</h3>
      <p>
        Photos de vrais chantiers, avis clients, explications claires, présentation de l’équipe : le visiteur doit
        sentir qu’il est au bon endroit avant d’avoir fait défiler la page.
      </p>
      <h3>Rendre le contact évident</h3>
      <p>
        Un numéro cliquable visible sur mobile, un formulaire court, une réponse rapide. Chaque étape inutile fait
        perdre des demandes.
      </p>
      <h3>Être rapide</h3>
      <p>
        Un site qui met plusieurs secondes à s’afficher sur un téléphone perd une partie de ses visiteurs avant même
        qu’ils voient votre nom. Voir{' '}
        <Link href="/optimisation-vitesse-site-internet">comment optimiser la vitesse d’un site</Link>.
      </p>

      <GuideCallout>
        <p>
          <strong>Votre site actuel vous rapporte-t-il des clients ?</strong> L’
          <Link href="/analyse-gratuite">analyse gratuite de votre présence en ligne</Link> montre où il perd des demandes
          : visibilité, contenu, contact ou fiche Google.
        </p>
      </GuideCallout>

      <h2 id="meilleures-demandes">Les leviers qui augmentent la valeur des demandes</h2>
      <p>Plus de demandes, c’est bien. De meilleures demandes, c’est souvent mieux :</p>
      <ul>
        <li>
          <strong>Mettre en avant les prestations les plus rentables</strong>, avec des pages dédiées et détaillées,
          plutôt que de tout présenter au même niveau.
        </li>
        <li>
          <strong>Filtrer en amont</strong> : zone d’intervention, types de chantiers, délais. Les demandes hors cible
          diminuent, et vous gagnez du temps.
        </li>
        <li>
          <strong>Développer la récurrence</strong> : contrats d’entretien, visites annuelles, abonnements. Un client
          fidèle vaut bien plus qu’un client ponctuel.
        </li>
      </ul>

      <h2 id="ne-rapporte-pas">Ce qui ne rapporte presque jamais</h2>
      <ul>
        <li>Un site mis en ligne puis oublié, avec des informations qui deviennent fausses.</li>
        <li>Un blog alimenté au hasard, sans lien avec les recherches de vos clients.</li>
        <li>De la publicité payante sans suivi des appels ni des demandes.</li>
        <li>Des animations et effets visuels qui ralentissent le site sans aider à convaincre.</li>
      </ul>

      <h2 id="faq">Questions fréquentes sur la rentabilité d’un site</h2>
      <Faq
        items={[
          {
            q: 'En combien de temps un site internet est-il rentabilisé ?',
            a: 'Cela dépend de la valeur de vos clients, de la concurrence et de l’état de votre présence en ligne de départ. Pour une activité où un seul client représente plusieurs centaines d’euros de marge, quelques demandes suffisent à couvrir le coût d’un site vitrine.',
          },
          {
            q: 'Mon site a du trafic mais aucune demande, pourquoi ?',
            a: 'Soit les visiteurs ne sont pas les bons (le site apparaît sur des recherches sans rapport avec votre activité), soit le site ne convainc pas ou rend le contact difficile. La Search Console et un test sur mobile permettent souvent de trancher rapidement.',
          },
          {
            q: 'Faut-il faire de la publicité pour rentabiliser un site ?',
            a: 'Pas forcément. Pour beaucoup d’entreprises locales, un bon référencement naturel et une fiche Google soignée suffisent. La publicité peut accélérer les choses, à condition de suivre précisément ce qu’elle rapporte.',
          },
        ]}
      />
    </ArticleLayout>
  );
}
