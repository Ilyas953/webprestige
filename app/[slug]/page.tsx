'use client';

import { useParams } from 'next/navigation';
import { getPageData, getFaqData } from '@/app/lib/seo-data';
import { DevHeader, DevFooter, ContactForm } from "@/app/all-components";
import Link from 'next/link';
import { CheckCircle2, ArrowRight, TrendingUp, Zap, Target, Users, Clock, Award, BarChart3, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ServiceVillePage() {
  const params = useParams();
  const slug = params.slug as string;

  const pageData = getPageData(slug);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white">
        <DevHeader />
        <main className="px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
            <p className="text-gray-600 mb-8">Nous ne trouvons pas cette page.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
              Retour à l'accueil
            </Link>
          </div>
        </main>
        <DevFooter />
      </div>
    );
  }

  const pageUrl = `https://webprestige.fr/${slug}`;

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageData.h1,
    description: pageData.description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'WebPrestige',
      url: 'https://webprestige.fr',
      telephone: '+33783585792',
      email: 'contact@webprestige.fr',
      areaServed: pageData.ville,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
    },
    serviceType: `Création site web ${pageData.service}`,
    areaServed: {
      '@type': 'City',
      name: pageData.ville,
    },
    offers: {
      '@type': 'Offer',
      price: '590',
      priceCurrency: 'EUR',
      description: `Site web professionnel pour ${pageData.service} à ${pageData.ville}`,
    },
    url: pageUrl,
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://webprestige.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Site web ${pageData.service} ${pageData.ville}`,
        item: pageUrl,
      },
    ],
  };

  const faqs = getFaqData(pageData.service, pageData.ville);

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const benefits = [
    { icon: TrendingUp, text: "+300% d'appels clients en 3 mois" },
    { icon: Zap, text: "1ère page Google = client régulier" },
    { icon: Target, text: "Ciblage local dès le 1er jour" },
    { icon: Clock, text: "Livraison en 5-7 jours" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <DevHeader />
      <nav aria-label="Fil d'Ariane" className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-600 transition-colors" itemProp="item">
                <span itemProp="name">Accueil</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-900 font-medium" itemProp="name">
                Site web {pageData.service} {pageData.ville}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>
      <main>
        {/* HERO AGRESSIF */}
        <section className="pt-32 pb-20 bg-linear-to-br from-red-50 via-orange-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                C'EST URGENT - Votre Concurrent a Peut-Être Déjà un Site
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {pageData.h1}
              </h1>

              <h2 className="text-2xl md:text-3xl text-red-600 font-bold mb-8">
                {pageData.h2}
              </h2>

              <p className="text-xl text-gray-700 mb-10 leading-relaxed font-semibold">
                {pageData.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-all inline-flex items-center gap-2">
                  Audit Gratuit Immédiat
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-bold transition-all">
                  Voir mes projets
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <benefit.icon className="w-6 h-6 text-red-600 mb-2" />
                    <p className="text-sm font-semibold text-gray-900">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DESCRIPTION LONGUE + CONTEXTE LOCAL */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Site web {pageData.service} à {pageData.ville} : ce que vous devez savoir
              </h2>
              <div className="space-y-4 mb-12">
                {pageData.longDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    Vos clients {pageData.service} à {pageData.ville}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{pageData.clientTypes}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    Votre opportunité SEO locale
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{pageData.localSeoContext}</p>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8">
                <p className="text-sm font-bold text-blue-200 uppercase tracking-wide mb-4">
                  Le marché {pageData.service} à {pageData.ville}
                </p>
                <p className="text-white/90 leading-relaxed mb-4">{pageData.marketContext}</p>
                <p className="text-white/80 leading-relaxed">
                  <strong className="text-white">Votre défi :</strong> {pageData.localChallenge}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LA RÉALITÉ BRUTALE */}
        <section className="py-20 bg-white border-t-4 border-red-600">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                Les Statistiques Qui Vont Vous Déranger :
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="border-l-4 border-red-600 pl-6">
                  <div className="text-5xl font-bold text-red-600 mb-2">75%</div>
                  <p className="text-gray-700">des {pageData.service}s sans site web perdent leurs clients à Google</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <div className="text-5xl font-bold text-orange-600 mb-2">80%</div>
                  <p className="text-gray-700">des clients visitent d'abord le site d'un artisan avant d'appeler</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <div className="text-5xl font-bold text-yellow-600 mb-2">3X</div>
                  <p className="text-gray-700">plus d'appels par mois avec un site optimisé SEO</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
                <p className="text-lg text-gray-800 font-semibold mb-4">
                  <strong>Résultat :</strong> Un {pageData.service} sans site web à {pageData.ville} reçoit 5-8 appels par mois.
                  Un {pageData.service} avec un site optimisé en reçoit 20-30.
                </p>
                <p className="text-gray-700">
                  C'est la différence entre survivre et grandir. Entre rester petit et devenir le {pageData.service} référence de {pageData.ville}.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* POURQUOI UN SITE WEB MAINTENANT ? */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                Pourquoi un Site Web pour {pageData.service} à {pageData.ville} ?
              </h3>

              <div className="space-y-6 mb-12">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex gap-4">
                    <Users className="w-8 h-8 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Vos Clients Cherchent en Ligne</h4>
                      <p className="text-gray-700">90% des demandes commencent par une recherche Google. Si vous n'êtes pas là, c'est vos concurrents qui reçoivent ces appels.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                  <div className="flex gap-4">
                    <Target className="w-8 h-8 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ciblage Local Hyper Précis</h4>
                      <p className="text-gray-700">Un bon site SEO vous place sur les recherches "{pageData.service} {pageData.ville}" et génère uniquement des appels locaux qualifiés.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                  <div className="flex gap-4">
                    <Award className="w-8 h-8 text-purple-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Légitimité & Confiance</h4>
                      <p className="text-gray-700">Un site web professionnel = entreprise sérieuse. Sans site, les clients pensent que vous êtes "petit" ou "vraiment local".</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-600">
                  <div className="flex gap-4">
                    <BarChart3 className="w-8 h-8 text-pink-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Retour sur Investissement Garanti</h4>
                      <p className="text-gray-700">Avec 15-20 appels supplémentaires par mois = 3-5 chantiers = 500€ à 2000€ supplémentaires par mois. Votre site se rentabilise en 1-2 mois.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                <p className="text-lg font-semibold">
                  En 3 mois, un site bien optimisé transforme un {pageData.service} local en chef de file de sa région.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CE QUE VOUS OBTENEZ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                Voici Exactement Ce Que Vous Obtenez :
              </h3>

              <div className="space-y-4">
                {[
                  "Site web professionnel & moderne (Next.js + Tailwind)",
                  "Optimisation SEO poussée pour '{pageData.service} {pageData.ville}' ",
                  "Formulaire de demande de devis optimisé conversion",
                  "Système de prise de rendez-vous en ligne automatisé",
                  "Galerie photos avant/après de vos réalisations",
                  "Intégration Google Maps & Google Business",
                  "Mobile-first design (60% des clients cherchent sur mobile)",
                  "Hébergement haute performance inclus",
                  "Emails professionnels @votreentreprise.com",
                  "Support illimité le 1er mois",
                  "Mises à jour de sécurité & maintenance",
                  "Score Google PageSpeed 100/100 garanti"
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item.replace('{pageData.service}', pageData.service).replace('{pageData.ville}', pageData.ville)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TÉMOIGNAGE */}
        <section className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-xl text-gray-800 italic font-semibold mb-6">
                "{pageData.testimonial}"
              </p>
              <div className="border-t pt-4">
                <p className="text-gray-700">Un vrai client {pageData.service} qui a lancé son site il y a 3 mois</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TARIF */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Le Tarif d'un Site Web Professionnel
              </h3>

              <div className="bg-linear-to-br from-blue-50 to-purple-50 border-4 border-blue-600 p-12 rounded-xl mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-4">590€</div>
                <p className="text-xl text-gray-700 mb-4">Site Premium Complet</p>
                <p className="text-gray-600 mb-6">Investissement unique. Paiement en 3x sans frais disponible.</p>
                <p className="text-sm text-gray-600 mb-8">
                  Rentabilisé dès le 2ème chantier décroché — un seul appel qualifié couvre déjà la moitié de l'investissement.
                </p>
                <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg inline-flex items-center gap-2">
                  Obtenir un Devis Personnalisé
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-8 rounded-xl">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Zap className="w-4 h-4" />
                  OFFRE LIMITÉE - AVRIL 2026
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">-20% + 2 mois de Support GRATUITS</h4>
                <p className="text-gray-700 mb-4">
                  Les 3 premiers {pageData.service}s de {pageData.ville} à me contacter ce mois bénéficient de cette offre.
                </p>
                <p className="text-sm text-gray-600">Vous économisez {Math.round(590 * 0.2)}€ + 2 mois de support offerts</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} service={pageData.service} ville={pageData.ville} />

        {/* CALL-TO-ACTION FINAL */}
        <section className="py-20 bg-linear-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold mb-6">
                Votre Concurrent a Peut-Être Déjà un Site Web...
              </h3>
              <p className="text-xl mb-8 opacity-95">
                Chaque jour sans site web = perte de 5-10 appels clients = perte de 500€ à 2000€ de chiffre d'affaires.
              </p>
              <p className="text-2xl font-bold mb-12">
                Appelez maintenant pour votre audit gratuit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+33783585792" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2">
                  ☎️ Appeler: 07 83 58 57 92
                </a>
                <button className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all">
                  Prendre RDV en Ligne
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION CONTACT */}
        <ContactForm
          title={`Prêt à Transformer Votre Présence EN Ligne ?`}
          subtitle={`Obtenez un audit gratuit et découvrez comment augmenter vos appels clients`}
        />
      </main>
      <DevFooter />
    </div>
  );
}

// ==========================================
// FAQ ACCORDÉON COMPONENT
// ==========================================

function FaqSection({
  faqs,
  service,
  ville,
}: {
  faqs: { question: string; answer: string }[];
  service: string;
  ville: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              Questions fréquentes
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Vos Questions sur la Création de Site Web {service} à {ville}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
