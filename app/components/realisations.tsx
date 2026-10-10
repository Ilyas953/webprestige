import Image from 'next/image';
import { ArrowUpRight, Quote } from 'lucide-react';

const REALISATIONS = [
  {
    nom: 'Maytec Électricité',
    activite: 'Électricien du bâtiment · Normandie',
    image: '/frame1.png',
    url: 'https://may-tec.net/electricien-agricole-normandie',
    description:
      'Site d’un électricien qui intervient sur des bâtiments résidentiels, professionnels et agricoles : prestations détaillées, appel direct et demande de devis visibles dès l’accueil.',
  },
  {
    nom: 'DG Élagage',
    activite: 'Élagueur et paysagiste · Val-d’Oise',
    image: '/herodgelagage.png',
    url: 'https://dgelagage95.fr',
    description:
      'Site vitrine d’un élagueur-paysagiste du Val-d’Oise, construit autour de ses prestations et de sa zone d’intervention pour le référencement local.',
  },
  {
    nom: 'Élagage Pierre',
    activite: 'Élagueur · Île-de-France',
    image: '/elagagepierrehero.png',
    url: 'https://elagagepierre.fr',
    description:
      'Site léger et rapide pour un élagueur d’Île-de-France, pensé d’abord pour le mobile et pour faciliter la prise de contact.',
  },
];

const TEMOIGNAGES = [
  {
    texte:
      'Lancement clair et rapide, suivi régulier. WebPrestige a mis en ligne mon site complet en seulement 5 jours et continue à optimiser le SEO.',
    nom: 'Abdou Daim',
    entreprise: 'Maytec Électricité, Normandie',
  },
  {
    texte: 'Je recommande WebPrestige, site internet de qualité.',
    nom: 'Pinto Adi',
    entreprise: 'DG Élagage, Val-d’Oise',
  },
  {
    texte:
      'Très satisfait du travail réalisé pour la création de mon site internet. Bonne communication du début à la fin. Je recommande sans hésitation !',
    nom: 'Pierre Rudy',
    entreprise: 'Élagage Pierre, Île-de-France',
  },
];

export function Realisations() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {REALISATIONS.map((projet) => (
        <article key={projet.nom} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-paper-deep">
            <Image
              src={projet.image}
              alt={`Page d’accueil du site ${projet.nom}, ${projet.activite}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-copper">{projet.activite}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink">{projet.nom}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{projet.description}</p>
            <a
              href={projet.url}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-ink hover:text-copper"
            >
              Voir le site
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Temoignages() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TEMOIGNAGES.map((t) => (
        <figure key={t.nom} className="flex flex-col rounded-2xl border border-line bg-white p-7">
          <Quote className="h-7 w-7 text-copper/40" aria-hidden="true" />
          <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/90">« {t.texte} »</blockquote>
          <figcaption className="mt-6 border-t border-line pt-4">
            <p className="font-semibold text-ink">{t.nom}</p>
            <p className="text-sm text-muted">{t.entreprise}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
