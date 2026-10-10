import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { SITE, SERVICES, GUIDES } from '@/app/lib/site';
import { VILLES } from '@/app/lib/villes';
import { Container, CtaButton, Logo, PhoneLink } from '@/app/components/ui';

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/80 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const zones = [
    { href: '/', label: "Agence web Val-d'Oise" },
    ...VILLES.map((v) => ({ href: `/${v.slug}`, label: v.nom })),
  ];
  const guides = [...GUIDES.map((g) => ({ href: g.href, label: g.short })), { href: '/guides', label: 'Tous les guides' }];

  return (
    <footer className="bg-navy-deep text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="WebPrestige, accueil">
              <Logo light />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Création de sites internet professionnels pour les artisans, commerçants et TPE du Val-d’Oise et de
              toute la France. Tout commence par une analyse gratuite de votre présence en ligne.
            </p>
            <div className="mt-6 space-y-3 text-white/80">
              <PhoneLink light />
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-[#e8a676]" aria-hidden="true" />
                {SITE.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#e8a676]" aria-hidden="true" />
                Val-d’Oise, Île-de-France et à distance
              </p>
            </div>
            <CtaButton className="mt-8" />
          </div>
          <FooterColumn title="Services" links={SERVICES} />
          <FooterColumn title="Zones" links={zones} />
          <FooterColumn title="Guides" links={guides} />
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-white/50">
          © {new Date().getFullYear()} WebPrestige. Création de site internet professionnel.
        </Container>
      </div>
    </footer>
  );
}
