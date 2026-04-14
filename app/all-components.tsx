'use client';


// ==========================================
// 🎨 UTILITIES
// ==========================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==========================================
// 🖼️ IMAGE WITH FALLBACK (use client)
// ==========================================



import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Code2, Menu, X, ArrowRight, TrendingUp, Zap, Award,
  Search, Rocket, Smartphone, BarChart3, Palette, Target,
  Clock, HeadphonesIcon, CheckCircle2, Check, Star,
  ExternalLink, Quote, Phone, Mail, Calendar, MapPin
} from "lucide-react";

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  width = 1080,
  height = 720,
  fill = false,
  priority = false
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={src} />
      </div>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

// ==========================================
// 🎨 UI COMPONENTS - BUTTON
// ==========================================

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// ==========================================
// 🎨 UI COMPONENTS - CARD
// ==========================================

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

// ==========================================
// 🎨 UI COMPONENTS - BADGE
// ==========================================

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-white",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

// ==========================================
// 📱 HEADER COMPONENT
// ==========================================

export function DevHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">WebPrestige</div>
              <div className="text-xs text-gray-600">Sites Premium pour Artisans</div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#pourquoi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pourquoi nous
            </a>
            <a href="#offres" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Offres
            </a>
            <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Réalisations
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
              <a href="#contact">
            <Button className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Audit Gratuit
            </Button>
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </a>
              <a href="#pourquoi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pourquoi nous
              </a>
              <a href="#offres" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Offres
              </a>
              <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Réalisations
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
              <a href="#contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                Audit Gratuit
              </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// ==========================================
// 🎯 HERO COMPONENT
// ==========================================

export function DevHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Spécialiste Sites Web pour Artisans
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Création de site internet pour artisans
              
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Développeur web expert Next.js & Tailwind CSS, je crée des sites premium ultra-optimisés 
              qui génèrent plus d'appels clients pour les artisans. 
              Référencement naturel garanti, performance maximale, conversion optimisée.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 mb-10">
             <a href="#contact"> <Button size="lg"  className="transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 shadow-lg shadow-blue-500/30">
                Audit SEO Gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              <a href="#offres">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 bg-blue-50 hover:bg-blue-500 hover:text-white">
                Voir nos Offres
              </Button>
              </a>
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              {[{ icon: TrendingUp, value: "+200%", label: "Appels clients" }, { icon: Zap, value: "100/100", label: "Score SEO" }, { icon: Award, value: "1+", label: "Artisans satisfaits" }].map((stat, idx) => (
                <motion.div key={idx} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 5 }} transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }} viewport={{ once: true }} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <stat.icon className={`w-5 h-5 ${idx === 0 ? 'text-green-600' : idx === 1 ? 'text-yellow-600' : 'text-blue-600'}`} />
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 5 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white relative">
              <ImageWithFallback
                src="/photo1.jpg"
                alt="Développement web spécialisé artisans avec Next.js et Tailwind CSS"
                className="w-full h-full object-cover"
                fill
                priority
              />
            </div>
            
            <motion.div initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Next.js 15</div>
                  <div className="text-sm text-gray-600">+ Tailwind CSS</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 💼 SERVICES COMPONENT
// ==========================================

export function DevServices() {
  const services = [
    {
      icon: Code2,
      title: "Développement Next.js Premium",
      description: "Sites web ultra-rapides développés avec Next.js 15. Architecture moderne, performance maximale, pour une expérience utilisateur exceptionnelle."
    },
    {
      icon: Search,
      title: "Optimisation SEO Avancée",
      description: "Référencement naturel poussé : balises optimisées, schema markup, sitemap XML, robots.txt, temps de chargement <1s. Positionnement Google garanti en première page sur vos mots-clés métier."
    },
    {
      icon: Smartphone,
      title: "Responsive Design Mobile-First",
      description: "Interface adaptative parfaite sur tous écrans. 60% de vos clients visitent depuis mobile : design pensé mobile d'abord, puis optimisé pour tablettes et desktop."
    },
    {
      icon: Rocket,
      title: "Performance & Vitesse",
      description: "Score 100/100 Google PageSpeed garanti. Images optimisées WebP, lazy loading, cache intelligent, CDN. Sites jusqu'à 10x plus rapides que la concurrence pour réduire le taux de rebond."
    },
    {
      icon: BarChart3,
      title: "Tracking & Analytics",
      description: "Suivi complet des conversions : Google Analytics 4, heatmaps, enregistrements sessions, suivi appels téléphoniques. Mesurez précisément le ROI de votre site web."
    },
    {
      icon: Palette,
      title: "Design Professionnel sur Mesure",
      description: "Interface moderne avec Tailwind CSS : design unique qui reflète votre identité, ergonomie optimisée, boutons d'appel à l'action stratégiques pour maximiser les conversions."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Code2 className="w-4 h-4" />
            Technologies de Pointe
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technologies Avancées pour Votre Site Artisan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertise complète en développement web moderne. Je maîtrise toutes les technologies 
            nécessaires pour créer le site parfait qui transforme vos visiteurs en clients et 
            propulse votre activité d'artisan vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className="border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group h-full"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// ⭐ WHY US COMPONENT
// ==========================================

export function DevWhy() {
  const benefits = [
    {
      icon: Target,
      title: "Spécialisé Artisans Uniquement",
      description: "Je connais VOS besoins : plombiers, électriciens, menuisiers, maçons... Stratégie adaptée à votre secteur pour capter les bons clients."
    },
    {
      icon: TrendingUp,
      title: "+300% d'Appels Clients Potentiels",
      description: "Mes clients artisans peuvent recevoir 3x plus d'appels après 3 mois. Boutons d'appel stratégiques, formulaires optimisés, confiance renforcée."
    },
    {
      icon: Clock,
      title: "Livraison Rapide 1 Semaine",
      description: "Processus optimisé et maîtrisé. Brief initial → Maquette → Développement → Mise en ligne. Vous êtes opérationnel rapidement."
    },
    {
      icon: HeadphonesIcon,
      title: "Support & Maintenance Inclus",
      description: "Modifications illimitées le premier mois. Support réactif par téléphone et email. Mises à jour de sécurité et correctifs inclus."
    }
  ];

  const features = [
    "Hébergement haute performance inclus",
    "Système de demande de devis automatique",
    "Certificat SSL (HTTPS) sécurisé",
    "Emails professionnels @votreentreprise.fr",
    "Intégration Google My Business",
    "Formation complète pour le nom de domaine",
    "Sauvegarde quotidienne automatique",
    "Optimisation continue du référencement"
  ];

  return (
    <section id="pourquoi" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Votre Avantage Concurrentiel
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir WebPrestige ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contrairement aux agences généralistes ou aux templates WordPress bas de gamme, 
            je suis 100% spécialisé dans la création de sites web pour artisans. Je comprends 
            votre métier, vos clients, et ce qui les pousse à vous appeler plutôt qu'un concurrent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <ImageWithFallback
                src="/photo2.jpg"
                alt="Augmentation chiffre affaires et appels clients artisan grâce site web optimisé"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Ce qui Est Inclus dans Votre Site Web
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 💰 PRICING COMPONENT
// ==========================================

export function DevPricing() {
  const plans = [
    {
      name: "Site Vitrine Essentiel",
      price: "499€",
      description: "Parfait pour démarrer votre présence en ligne",
      popular: false,
      features: [
        "5 sections optimisées (Accueil, Services, À propos, Réalisations, Contact)",
        "Design responsive mobile/tablette/desktop",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Intégration Google Maps",
        "Hébergement gratuit",
        "SSL sécurisé (HTTPS)",
        "Support 1 mois"
      ]
    },
    {
      name: "Site Premium Pro",
      price: "990€",
      description: "Le plus choisi par les artisans ambitieux",
      popular: true,
      features: [
        "Tout du plan Essentiel +",
        "8 pages locales et personnalisées",
        "Optimisation SEO avancée (schema markup, rich snippets)",
        "Galerie photos réalisations illimitée",
        "Système de témoignages clients",
        "Intégration réseaux sociaux",
        "Google Analytics & suivi conversions",
        "Click-to-call optimisé mobile",
        "Modifications illimitées 1er mois",
        "Support prioritaire 3 mois",


      ]
    },
    {
      name: "Site Ultra Performance",
      price: "2490€",
      description: "Pour dominer votre marché local",
      popular: false,
      features: [
        "Tout du plan Premium +",
        "Pages illimitées",
        "Stratégie SEO locale complète",
        "Rédaction 20 articles SEO optimisés",
        "Système de réservation en ligne",
        "Espace client personnalisé",
        "Génération devis automatique",
        "Chatbot IA pour questions 24/7",
        "A/B testing conversion",
        "Support illimité 6 mois",
        "Audit & optimisation mensuelle"
      ]
    }
  ];

  return (
    <section id="offres" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Offres & Tarifs Transparents
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tarifs Simples pour Votre Site Artisan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Investissement unique, bénéfices sur le long terme. Avec en moyenne 15-20 appels clients supplémentaires 
            possible par mois, votre site est rentabilisé dès les premiers chantiers décrochés. Paiement en 3x sans frais disponible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className={`relative ${
                  plan.popular 
                    ? 'border-4 border-blue-600 shadow-2xl scale-105' 
                    : 'border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Zap className="w-4 h-4" />
                    LE PLUS POPULAIRE
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2 text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-6">{plan.description}</CardDescription>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-600">Paiement unique</div>
                  <div className="text-sm text-blue-600 font-semibold mt-2">
                    ou 3x sans frais
                  </div>
                </div>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.popular ? 'Commencer maintenant' : 'Choisir cette offre'}
                </Button>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            🎁 Offre de Lancement : -20% jusqu'au 28 Avril 2026
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Les 10 premiers artisans à me contacter bénéficient d'une réduction exceptionnelle. 
            Plus que <strong className="text-blue-600">3 places disponibles</strong> ce mois-ci.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
            Réserver ma Place Maintenant
          </Button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 🖼️ PORTFOLIO COMPONENT
// ==========================================

export function DevPortfolio() {
  const projects = [
    {
      title: "Maytec electricité",
      category: "Électricien",
      results: "+250% d'appels en 2 mois",
      image: "/frame1.png",
      tags: ["Next.js", "SEO Local", "TailwindCss"],
      url: "https://may-tec.net/electricien-agricole-normandie"
    },
    
  ];

  return (
    <section id="realisations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Résultats Concrets
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mes Dernières Réalisations pour Artisans
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des sites web qui ne sont pas juste beaux, mais qui génèrent des résultats mesurables. 
            Découvrez comment j'ai aidé ces artisans à multiplier leurs demandes clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl group">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={`Site web ${project.title} - ${project.category}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    fill
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-green-600 font-semibold">{project.results}</span>
                  </div>
                  <div className=" text-black flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className=" black text-black text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  </CardContent>
                  <CardContent className="p-6">
                  <Link href={project.url} target="_blank">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                    Voir le site
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Confidentialité client oblige, certains projets ne peuvent être affichés publiquement
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 💬 TESTIMONIALS COMPONENT
// ==========================================

export function DevTestimonials() {
  const testimonials = [
    {
      name: "Abdou Daim",
      business: "Électricité agricole normandie",
      rating: 5,
      text: "lancement clair et rapide, suivi régulier, webprestige a mis en ligne mon site complet en seulement 5 jours et continue a optimiser le seo",
      result: "1ère page Google"
    },
  
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Témoignages Vérifiés
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce Que Disent les Artisans avec Qui Je Travaille
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pas de bla-bla marketing. Des vrais avis d'artisans qui ont vu leur activité décoller 
            grâce à un site web performant et bien référencé.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 relative">
                <CardContent className="pt-8">
                  <Quote className="w-12 h-12 text-blue-200 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="mb-4 inline-block">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.result}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg">
            ⭐⭐⭐⭐⭐ Note moyenne 5/5 sur Google Business (1 avis)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 📞 CTA COMPONENT
// ==========================================

export function DevCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à Multiplier Vos Appels Clients par 3 ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            Réservez votre <strong>audit SEO gratuit</strong> de 30 minutes. Je vais analyser votre présence 
            en ligne actuelle (ou celle de vos concurrents) et vous montrer précisément comment attirer 
            plus de clients qualifiés. Aucun engagement, juste des conseils concrets et actionnables.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Phone, label: "Appelez-moi", value: "07 83 58 57 92", time: "Lun-Ven 17h30-20h" },
              { icon: Mail, label: "Écrivez-moi", value: "contact@webprestige.fr", time: "Réponse sous 2h" },
              { icon: Calendar, label: "Prenez RDV", value: "Visio ou Téléphone", time: "Créneaux disponibles" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-4" />
                <div className="font-bold text-lg mb-2">{item.label}</div>
                <a href={idx === 0 ? "tel:+33783585792" : idx === 1 ? "mailto:contact@webprestige.fr" : "#"} className={`${idx === 0 ? "text-xl" : "text-lg"} font-semibold hover:underline ${idx === 2 ? "cursor-default" : ""}`}>
                  {item.value}
                </a>
                <p className="text-sm text-white/80 mt-2">{item.time}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
          
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl text-lg px-8" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Audit Gratuit Immédiat
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8" asChild>
              <a href="#offres" className="flex items-center gap-2">
                Voir mes Offres
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Offre Spéciale Avril 2026
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Les <strong>3 premiers artisans</strong> à me contacter ce mois-ci bénéficient de
              <strong> -20% sur toutes les offres</strong> + <strong>2 mois de support supplémentaires offerts</strong>.
              Ne laissez pas vos concurrents vous devancer !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto w-full"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Contactez-moi Maintenant
            </h3>
            <ContactFormInline />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 📧 CONTACT FORM INLINE (for DevCTA integration)
// ==========================================

function ContactFormInline() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          message: `[Service: ${formData.service}]\n${formData.message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur serveur (${res.status})`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert(`Erreur lors de l'envoi : ${error instanceof Error ? error.message : "réessayez plus tard"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="bg-green-500/20 border-2 border-green-400 text-white p-4 rounded-lg mb-6 text-center backdrop-blur-sm"
        >
          <p className="font-semibold">✅ Merci ! Votre message a été envoyé avec succès.</p>
          <p className="text-sm">Je vous recontacterai dans les 24h.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Votre Nom *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
              placeholder="Jean Martin"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
              placeholder="jean@exemple.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
              placeholder="07 83 58 57 92"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Métier / Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
            >
              <option value="" className="bg-gray-900">Sélectionnez votre métier</option>
              <option value="electricien" className="bg-gray-900">Électricien</option>
              <option value="plombier" className="bg-gray-900">Plombier</option>
              <option value="menuisier" className="bg-gray-900">Menuisier</option>
              <option value="couvreur" className="bg-gray-900">Couvreur</option>
              <option value="chauffagiste" className="bg-gray-900">Chauffagiste</option>
              <option value="facade" className="bg-gray-900">Façade</option>
              <option value="autre" className="bg-gray-900">Autre</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-white mb-2">
            Votre Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition resize-none"
            placeholder="Parlez-moi de votre projet, vos besoins, vos questions..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin">⏳</span> Envoi en cours...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Envoyer mon Message
            </>
          )}
        </motion.button>

        <p className="text-xs text-white/60 mt-4 text-center">
          * Champs obligatoires. Nous traitons vos données avec respect.
        </p>
      </form>
    </>
  );
}

// ==========================================
// 📧 CONTACT FORM COMPONENT (standalone section)
// ==========================================

export function ContactForm({ title = "Prenez Contact", subtitle = "Remplissez le formulaire et je vous recontacterai dans les 24h" }: { title?: string; subtitle?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          message: `[Service: ${formData.service}]\n${formData.message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur serveur (${res.status})`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert(`Erreur lors de l'envoi : ${error instanceof Error ? error.message : "réessayez plus tard"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-600">{subtitle}</p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg mb-6 text-center"
            >
              <p className="font-semibold">✅ Merci ! Votre message a été envoyé avec succès.</p>
              <p className="text-sm">Je vous recontacterai dans les 24h.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Jean Martin"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="jean@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="07 83 58 57 92"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Métier / Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Sélectionnez votre métier</option>
                  <option value="electricien">Électricien</option>
                  <option value="plombier">Plombier</option>
                  <option value="menuisier">Menuisier</option>
                  <option value="couvreur">Couvreur</option>
                  <option value="chauffagiste">Chauffagiste</option>
                  <option value="facade">Façade</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Votre Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Parlez-moi de votre projet, vos besoins, vos questions..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⏳</span> Envoi en cours...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Envoyer mon Message
                </>
              )}
            </motion.button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Champs obligatoires. Nous traitons vos données avec respect.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 🦶 FOOTER COMPONENT
// ==========================================

export function DevFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">WebArtisan Pro</div>
                <div className="text-sm text-gray-400">Développeur Web Spécialisé Artisans</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Expert en création de sites web premium pour artisans. Next.js, Tailwind CSS, 
              optimisation SEO avancée. Je transforme votre site en véritable machine à clients 
              avec des résultats mesurables et garantis.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+33783585792" className="hover:text-white transition-colors">
                  0783585792
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contact@webprestige.fr" className="hover:text-white transition-colors">
                  contact@webprestige.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Île-de-France & National (remote)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Développement Next.js
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Optimisation SEO
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Design Tailwind CSS
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Audit & Conversion
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <a href="#pourquoi" className="text-gray-400 hover:text-white transition-colors">
                  Pourquoi moi
                </a>
              </li>
              <li>
                <a href="#offres" className="text-gray-400 hover:text-white transition-colors">
                  Offres & Tarifs
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Audit Gratuit
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} WebArtisan Pro - Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
}
