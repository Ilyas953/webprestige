import type { Metadata } from 'next';
import { FileText, Gauge, MapPinned, MessageSquareText, Search, Star, Target, Users } from 'lucide-react';
import { ORG_ID, SITE, pageMetadata } from '@/app/lib/site';
import {
  Breadcrumbs,
  CheckList,
  Container,
  Eyebrow,
  Faq,
  JsonLd,
  PhoneLink,
  Section,
  SectionHeading,
  type FaqItem,
} from '@/app/components/ui';
import { AnalyseForm } from '@/app/components/analyse-form';

const PATH = '/analyse-gratuite';

export const metadata: Metadata = pageMetadata({
  title: 'Devis Création Site Internet et Site Vitrine : Analyse Gratuite',
  description:
    "Besoin d'un devis de création de site internet ou de site vitrine ? Commencez par une analyse gratuite de votre présence en ligne : Google, fiche, avis, site, concurrents. Sans engagement.",
  path: PATH,
  absoluteTitle: true,
});

const POINTS = [
  {
    icon: Search,
    titre: 'Votre visibilité sur Google',
    texte: 'Où apparaissez-vous quand un client cherche votre métier dans votre ville, ou décrit son besoin ?',
  },
  {
    icon: MapPinned,
    titre: 'Votre fiche Google Business Profile',
    texte: 'Catégories, informations, photos, horaires, publications : ce qui manque et ce qui vous pénalise.',
  },
  {
    icon: Star,
    titre: 'Vos avis clients',
    texte: 'Nombre, note, régularité, réponses : comment votre réputation se compare à celle de vos concurrents.',
  },
  {
    icon: Gauge,
    titre: 'Votre site actuel',
    texte: 'Affichage sur mobile, vitesse, clarté du message, facilité de contact. Si vous n’avez pas de site, ce qu’il devrait contenir.',
  },
  {
    icon: FileText,
    titre: 'La cohérence de vos informations',
    texte: 'Nom, adresse, téléphone identiques partout : site, fiche Google, annuaires, réseaux sociaux.',
  },
  {
    icon: Users,
    titre: 'Vos concurrents directs',
    texte: 'Qui apparaît devant vous, et pourquoi. Souvent, l’écart tient à quelques points précis.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'L’analyse est-elle vraiment gratuite ?',
    a: 'Oui, entièrement. Elle ne vous engage à rien : vous repartez avec un état des lieux et des recommandations, que vous pouvez appliquer vous-même ou avec la personne de votre choix.',
  },
  {
    q: 'Pourquoi ne pas me faire un devis directement ?',
    a: 'Parce qu’un devis fait sans analyse repose sur des suppositions. Selon votre situation, la priorité peut être un nouveau site, une refonte, quelques pages en plus, ou simplement une fiche Google mieux remplie. L’analyse permet de chiffrer ce qui est vraiment utile, et rien d’autre.',
  },
  {
    q: 'Je n’ai pas encore de site internet, l’analyse sert-elle à quelque chose ?',
    a: 'Oui. On regarde ce que vos clients trouvent aujourd’hui en vous cherchant (fiche Google, annuaires, concurrents) et on définit ce que votre futur site doit contenir pour être trouvé dans votre secteur.',
  },
  {
    q: 'Combien de temps faut-il pour recevoir l’analyse ?',
    a: 'Je vous recontacte sous 24 h pour fixer un échange d’environ 30 minutes, par téléphone ou en visio, au moment qui vous convient. C’est pendant cet échange que je vous présente l’analyse.',
  },
  {
    q: 'Que se passe-t-il après l’analyse ?',
    a: 'Si un site, une refonte ou un accompagnement est pertinent, je vous envoie une proposition détaillée. Vous prenez le temps de décider. Si ce n’est pas utile, je vous le dis aussi.',
  },
];

export default function AnalyseGratuitePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Analyse gratuite de la présence en ligne',
          serviceType: 'Audit de présence en ligne',
          description:
            'Analyse gratuite de la visibilité Google, de la fiche Google Business Profile, des avis et du site internet d’une entreprise, avant toute création de site.',
          provider: { '@id': ORG_ID },
          url: `${SITE.url}${PATH}`,
        }}
      />

      {/* HERO + FORMULAIRE */}
      <section className="border-b border-line bg-paper pb-16 pt-8 sm:pb-24">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Accueil', href: '/' },
              { name: 'Analyse gratuite', href: PATH },
            ]}
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Devis création site internet</Eyebrow>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Analyse gratuite de votre présence en ligne
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Vous cherchez un devis pour un site internet ou un site vitrine ? Je ne chiffre pas un projet à
                l’aveugle. J’analyse d’abord, gratuitement, ce que vos clients trouvent quand ils vous cherchent, puis je
                vous dis ce qui manque et dans quel ordre le traiter.
              </p>
              <div className="mt-8">
                <CheckList
                  items={[
                    'Gratuit et sans engagement',
                    'Je vous recontacte sous 24 h',
                    'Un échange d’environ 30 minutes, par téléphone ou en visio',
                    'Des recommandations claires, classées par priorité',
                  ]}
                />
              </div>
              <p className="mt-8 text-muted">
                Vous préférez appeler ? <PhoneLink />
              </p>
            </div>

            <div id="formulaire" className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_-30px_rgba(19,40,74,0.35)] sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-ink">Demander mon analyse gratuite</h2>
              <p className="mt-2 mb-7 text-muted">
                Quelques informations suffisent pour que je prépare l’analyse avant notre échange.
              </p>
              <AnalyseForm />
            </div>
          </div>
        </Container>
      </section>

      {/* CE QUE J'ANALYSE */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Le contenu de l’analyse"
          title="Ce que j’analyse, point par point"
          intro="Je regarde votre entreprise comme le ferait un client qui ne vous connaît pas encore."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.titre} className="rounded-2xl border border-line bg-paper p-7">
              <p.icon className="h-6 w-6 text-copper" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.titre}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POURQUOI PAS UN DEVIS DIRECT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Analyse ou devis" title="Pourquoi une analyse plutôt qu’un devis direct ?" />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Quand on demande un devis de création de site web, on reçoit des prix pour des pages. Mais personne n’a
                vérifié ce qui vous fait perdre des clients aujourd’hui : une fiche Google incomplète, des avis trop
                rares, un site invisible, un numéro introuvable sur mobile…
              </p>
              <p>
                Comparer trois devis sans ce diagnostic, c’est comparer des prix, pas des résultats. L’analyse inverse
                l’ordre : on identifie le problème, puis on chiffre uniquement ce qui le résout.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            {[
              {
                icon: Target,
                titre: 'Vous savez quoi faire',
                texte: 'Un état des lieux clair, sans jargon, et les actions qui auront le plus d’impact.',
              },
              {
                icon: MessageSquareText,
                titre: 'Vous décidez sereinement',
                texte: 'Si un site est utile, vous recevez une proposition qui découle de l’analyse, pas un forfait standard.',
              },
              {
                icon: FileText,
                titre: 'Vous gardez les conclusions',
                texte: 'Même si vous ne travaillez pas avec moi, les recommandations restent les vôtres.',
              },
            ].map((item) => (
              <div key={item.titre} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                <item.icon className="mt-1 h-6 w-6 shrink-0 text-copper" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink">{item.titre}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions fréquentes" title="L’analyse gratuite en questions" />
          <Faq items={FAQ} />
        </div>
      </Section>
    </>
  );
}
