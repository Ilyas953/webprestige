'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/app/lib/site';
import { Logo } from '@/app/components/ui';

const NAV = [
  { href: '/creation-site-internet-artisan', label: 'Sites pour artisans' },
  { href: '/creation-site-internet-val-d-oise', label: "Val-d'Oise" },
  { href: '/referencement-local', label: 'Référencement local' },
  { href: '/maintenance-site-internet', label: 'Maintenance' },
  { href: '/guides', label: 'Guides' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="WebPrestige, accueil" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={active ? 'text-copper' : 'text-ink/80 hover:text-ink'}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={SITE.ctaHref}
            className="hidden rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark sm:inline-flex"
          >
            Analyse gratuite
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-paper-deep lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-paper-deep">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                href={SITE.ctaHref}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-copper px-5 py-3.5 text-center font-semibold text-white"
              >
                {SITE.ctaLabel}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
