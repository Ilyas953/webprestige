'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SITE } from '@/app/lib/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FIELD =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-copper focus:ring-2 focus:ring-copper/20';
const LABEL = 'mb-1.5 block text-sm font-semibold text-ink';

export function AnalyseForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus('success');
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage-soft p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-sage" aria-hidden="true" />
        <p className="mt-4 font-display text-2xl font-semibold text-ink">Demande bien reçue</p>
        <p className="mt-3 leading-relaxed text-ink/80">
          Je commence l’analyse de votre présence en ligne et je vous recontacte sous 24 h pour fixer un échange. Un
          email de confirmation vient de vous être envoyé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Champ piège anti-spam, invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="site_web_confirmation" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={LABEL}>
            Votre nom *
          </label>
          <input id="nom" name="nom" required autoComplete="name" className={FIELD} placeholder="Jean Martin" />
        </div>
        <div>
          <label htmlFor="entreprise" className={LABEL}>
            Entreprise et activité *
          </label>
          <input
            id="entreprise"
            name="entreprise"
            required
            autoComplete="organization"
            className={FIELD}
            placeholder="Martin Plomberie, plombier"
          />
        </div>
        <div>
          <label htmlFor="ville" className={LABEL}>
            Ville *
          </label>
          <input id="ville" name="ville" required className={FIELD} placeholder="Éragny" />
        </div>
        <div>
          <label htmlFor="telephone" className={LABEL}>
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            className={FIELD}
            placeholder="06 12 34 56 78"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={LABEL}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
            placeholder="jean@martin-plomberie.fr"
          />
        </div>
        <div>
          <label htmlFor="site" className={LABEL}>
            Votre site actuel
          </label>
          <input id="site" name="site" className={FIELD} placeholder="www.monentreprise.fr ou « aucun »" />
        </div>
        <div>
          <label htmlFor="ficheGoogle" className={LABEL}>
            Avez-vous une fiche Google ?
          </label>
          <select id="ficheGoogle" name="ficheGoogle" defaultValue="" className={FIELD}>
            <option value="">Choisir…</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            <option value="Je ne sais pas">Je ne sais pas</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>
            Votre objectif ou votre question
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${FIELD} resize-y`}
            placeholder="Ex. : je veux plus de demandes de chantiers à Cergy et alentours."
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-copper-soft px-4 py-3 text-sm text-copper-dark" role="alert">
          L’envoi n’a pas fonctionné. Réessayez dans un instant, ou appelez-moi directement au{' '}
          <a href={`tel:${SITE.phone}`} className="font-semibold underline">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-4 font-semibold text-white transition-colors hover:bg-copper-dark disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          'Recevoir mon analyse gratuite'
        )}
      </button>
      <p className="text-center text-xs leading-relaxed text-muted">
        * Champs obligatoires. Vos informations servent uniquement à réaliser l’analyse et à vous recontacter.
      </p>
    </form>
  );
}
