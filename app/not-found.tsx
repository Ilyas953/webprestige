import Link from 'next/link';
import { Container, CtaButton } from '@/app/components/ui';

export default function NotFound() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <p className="font-display text-6xl font-semibold text-copper">404</p>
        <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">Cette page n’existe pas</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Elle a peut-être été déplacée lors de la refonte du site. Vous pouvez revenir à l’accueil ou demander
          directement votre analyse gratuite.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton />
          <Link href="/" className="font-semibold text-ink hover:text-copper">
            Retour à l’accueil
          </Link>
        </div>
      </Container>
    </section>
  );
}
