import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { SITE } from '@/app/lib/site';

// ==========================================
// Mise en page
// ==========================================

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

const SECTION_TONES = {
  paper: 'bg-paper',
  white: 'bg-white',
  navy: 'bg-navy text-white',
} as const;

export function Section({
  id,
  tone = 'paper',
  className = '',
  children,
}: {
  id?: string;
  tone?: keyof typeof SECTION_TONES;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${SECTION_TONES[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${light ? 'text-[#e8a676]' : 'text-copper'}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-muted'}`}>{intro}</p>
      )}
    </div>
  );
}

// ==========================================
// Logo
// ==========================================

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl font-display text-lg font-semibold ${
          light ? 'bg-white text-navy' : 'bg-navy text-white'
        }`}
        aria-hidden="true"
      >
        <span>
          W<span className={light ? 'text-copper' : 'text-[#e8a676]'}>P</span>
        </span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-xl font-semibold ${light ? 'text-white' : 'text-ink'}`}>
          WebPrestige
        </span>
        <span className={`block text-xs ${light ? 'text-white/60' : 'text-muted'}`}>Création de sites internet</span>
      </span>
    </span>
  );
}

// ==========================================
// Boutons et liens d'action
// ==========================================

const BUTTON_VARIANTS = {
  primary: 'bg-copper text-white shadow-sm hover:bg-copper-dark',
  secondary: 'border border-ink/15 bg-white text-ink hover:border-ink/35',
  light: 'bg-white text-navy hover:bg-paper',
  outlineLight: 'border border-white/30 text-white hover:bg-white/10',
} as const;

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${BUTTON_VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = 'primary',
  label = SITE.ctaLabel,
  href = SITE.ctaHref,
  className = '',
}: {
  variant?: keyof typeof BUTTON_VARIANTS;
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <ButtonLink href={href} variant={variant} className={className}>
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </ButtonLink>
  );
}

export function PhoneLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href={`tel:${SITE.phone}`}
      className={`inline-flex items-center gap-2 font-semibold ${
        light ? 'text-white hover:text-white/80' : 'text-ink hover:text-copper'
      }`}
    >
      <Phone className={`h-4 w-4 ${light ? 'text-[#e8a676]' : 'text-copper'}`} aria-hidden="true" />
      {SITE.phoneDisplay}
    </a>
  );
}

export function Reassurance({ light = false }: { light?: boolean }) {
  return (
    <ul className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm ${light ? 'text-white/70' : 'text-muted'}`}>
      {['Gratuit et sans engagement', 'Réponse sous 24 h', 'Par téléphone ou en visio'].map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check className={`h-4 w-4 ${light ? 'text-[#e8a676]' : 'text-sage'}`} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HeroActions() {
  return (
    <>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
        <CtaButton />
        <PhoneLink />
      </div>
      <Reassurance />
    </>
  );
}

// ==========================================
// Données structurées
// ==========================================

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ==========================================
// Fil d'Ariane
// ==========================================

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Fil d'Ariane">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {items.map((item, idx) => {
            const last = idx === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-copper">
                      {item.name}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-muted/60" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: `${SITE.url}${item.href === '/' ? '' : item.href}`,
          })),
        }}
      />
    </>
  );
}

// ==========================================
// En-tête des pages intérieures
// ==========================================

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  aside,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper pb-16 pt-8 sm:pb-20">
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className={`mt-10 grid gap-12 ${aside ? 'lg:grid-cols-[1.2fr_1fr] lg:items-start' : ''}`}>
          <div className="max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
            {children ?? <HeroActions />}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
}

// ==========================================
// Listes et cartes
// ==========================================

export function CheckList({ items, light = false }: { items: ReactNode[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className={`flex gap-3 leading-relaxed ${light ? 'text-white/85' : 'text-ink/85'}`}>
          <Check className={`mt-1 h-5 w-5 shrink-0 ${light ? 'text-[#e8a676]' : 'text-sage'}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({ title, children, icon }: { title: string; children: ReactNode; icon?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
      {icon && (
        <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-copper-soft text-copper">{icon}</div>
      )}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-3 leading-relaxed text-muted">{children}</div>
    </div>
  );
}

// ==========================================
// FAQ (réponses toujours présentes dans le HTML)
// ==========================================

export type FaqItem = { q: string; a: string; link?: { href: string; label: string } };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-5 text-left font-semibold text-ink hover:bg-paper/60 sm:px-7 [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <ChevronDown
                className="mt-0.5 h-5 w-5 shrink-0 text-copper transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pb-6 leading-relaxed text-muted sm:px-7">
              <p>{item.a}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-copper hover:text-copper-dark"
                >
                  {item.link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
    </>
  );
}

// ==========================================
// Déroulé de l'analyse gratuite
// ==========================================

const ANALYSE_STEPS = [
  {
    title: 'Vous décrivez votre activité',
    text: 'Quelques informations via le formulaire : votre métier, votre ville, votre site actuel s’il existe.',
  },
  {
    title: 'J’analyse votre présence en ligne',
    text: 'Recherches Google sur vos services, fiche Google, avis, site actuel, concurrents directs.',
  },
  {
    title: 'On en parle ensemble',
    text: 'Un échange d’environ 30 minutes, par téléphone ou en visio, avec des recommandations claires et classées par priorité.',
  },
  {
    title: 'Vous décidez',
    text: 'Si un nouveau site est la bonne réponse, vous recevez une proposition détaillée. Sinon, vous repartez avec un plan d’actions.',
  },
];

export function AnalyseSteps({ light = false }: { light?: boolean }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ANALYSE_STEPS.map((step, idx) => (
        <li
          key={step.title}
          className={`rounded-2xl p-6 ${light ? 'border border-white/15 bg-white/5' : 'border border-line bg-white'}`}
        >
          <span className={`font-display text-3xl font-semibold ${light ? 'text-[#e8a676]' : 'text-copper'}`}>
            0{idx + 1}
          </span>
          <h3 className={`mt-4 text-lg font-semibold ${light ? 'text-white' : 'text-ink'}`}>{step.title}</h3>
          <p className={`mt-2 leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

// ==========================================
// Bandeau d'appel à l'action
// ==========================================

export function CtaBand({
  title = 'Où en est votre présence en ligne ?',
  text = 'Une analyse gratuite vous dit ce que vos clients voient quand ils vous cherchent sur Google, et ce qu’il faut améliorer en premier. Sans engagement.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:justify-end">
            <CtaButton />
            <PhoneLink light />
          </div>
        </div>
      </Container>
    </section>
  );
}
