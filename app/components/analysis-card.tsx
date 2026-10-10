import { ClipboardCheck } from 'lucide-react';

const TONES = {
  amber: 'bg-amber-soft text-amber',
  copper: 'bg-copper-soft text-copper-dark',
  sage: 'bg-sage-soft text-sage',
  navy: 'bg-navy/10 text-navy',
} as const;

const POINTS: { label: string; status: string; tone: keyof typeof TONES }[] = [
  { label: 'Fiche Google Business Profile', status: 'À compléter', tone: 'amber' },
  { label: 'Visibilité sur « métier + ville »', status: 'À améliorer', tone: 'amber' },
  { label: 'Site sur mobile et vitesse', status: 'Prioritaire', tone: 'copper' },
  { label: 'Avis clients', status: 'Correct', tone: 'sage' },
  { label: 'Nom, adresse, téléphone cohérents', status: 'Correct', tone: 'sage' },
  { label: 'Concurrents locaux', status: 'Analysés', tone: 'navy' },
];

// Illustration de ce que contient l'analyse gratuite (exemple, pas des données réelles)
export function AnalysisCard() {
  return (
    <figure className="relative">
      <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-copper-soft/70" aria-hidden="true" />
      <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_-25px_rgba(19,40,74,0.35)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-ink">Analyse de présence en ligne</p>
            <p className="text-sm text-muted">Exemple de compte rendu</p>
          </div>
        </div>
        <ul className="mt-6 divide-y divide-line">
          {POINTS.map((point) => (
            <li key={point.label} className="flex items-center justify-between gap-4 py-3.5">
              <span className="text-[15px] text-ink/85">{point.label}</span>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${TONES[point.tone]}`}>
                {point.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink/80">
          <span className="font-semibold text-ink">Résultat :</span> un état des lieux clair et les actions à mener en
          premier, classées par impact.
        </div>
      </div>
      <figcaption className="sr-only">Exemple des points vérifiés lors de l’analyse gratuite</figcaption>
    </figure>
  );
}
