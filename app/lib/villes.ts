// Pages locales "création site internet [ville]".
// Chaque ville a son propre contenu : contexte, publics, recherches, conseils et FAQ.

export type Ville = {
  slug: string;
  nom: string;
  departement: string;
  resume: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  contexteTitre: string;
  contexte: string[];
  publicsTitre: string;
  publics: { titre: string; texte: string }[];
  recherchesTexte: string;
  recherches: string[];
  conseilsTitre: string;
  conseils: { titre: string; texte: string }[];
  voisines: string[];
  zoneTexte: string;
  faq: { q: string; a: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: 'creation-site-internet-eragny',
    nom: 'Éragny',
    departement: "Val-d'Oise (95)",
    resume: 'Commune résidentielle de l’agglomération, entre Cergy, Saint-Ouen-l’Aumône et Conflans.',
    metaTitle: 'Création Site Internet Éragny : Site Vitrine pour Entreprises Locales',
    metaDescription:
      "Création de site internet à Éragny (95) pour artisans, commerces et indépendants. Un site pensé pour Éragny et l'agglomération de Cergy-Pontoise. Analyse gratuite de votre présence en ligne.",
    h1: 'Création de site internet à Éragny',
    intro:
      'Vous êtes artisan, commerçant ou indépendant à Éragny et vous voulez un site qui fasse venir des clients du secteur, pas seulement une jolie vitrine ? Je crée des sites internet pensés pour la façon dont on cherche une entreprise ici : sur son téléphone, avec le nom de la ville, en comparant deux ou trois résultats.',
    contexteTitre: 'Éragny : une commune résidentielle au cœur de l’agglomération',
    contexte: [
      'Éragny (on dit aussi Éragny-sur-Oise) compte environ 17 000 habitants et fait partie de l’agglomération de Cergy-Pontoise. C’est une commune surtout résidentielle, faite de quartiers pavillonnaires et de résidences, entourée de villes plus grandes : Cergy, Saint-Ouen-l’Aumône, Conflans-Sainte-Honorine.',
      'Pour une entreprise d’Éragny, cette position a une conséquence directe sur Google : quand un habitant tape « plombier Éragny » ou « coiffeur près de moi », les résultats mélangent souvent des entreprises de toute l’agglomération. Si votre site ne dit pas clairement que vous êtes à Éragny et que vous intervenez dans les communes voisines, un concurrent de Cergy peut passer devant vous, même s’il est plus loin.',
      'L’enjeu d’un site internet à Éragny, c’est donc d’être la réponse évidente pour les gens du coin : le bon métier, la bonne ville, un numéro facile à trouver.',
    ],
    publicsTitre: 'Les entreprises d’Éragny que j’accompagne',
    publics: [
      {
        titre: 'Artisans de la maison',
        texte:
          'Dans une commune pavillonnaire, les besoins sont constants : plomberie, électricité, toiture, menuiserie, jardin, peinture. Votre site doit présenter chaque prestation sur sa propre page, montrer des chantiers réels et indiquer les communes où vous vous déplacez.',
      },
      {
        titre: 'Commerces et services de proximité',
        texte:
          'Coiffure, restauration, garage, institut, boulangerie : vos clients veulent vos horaires, votre adresse, vos photos et la possibilité de vous appeler en un geste. Le site prolonge votre fiche Google et répond aux questions qu’elle laisse en suspens.',
      },
      {
        titre: 'Indépendants et services à domicile',
        texte:
          'Ménage, cours particuliers, dépannage informatique, coaching : sans local, vous n’avez que votre présence en ligne pour inspirer confiance. Un site clair, qui explique votre méthode et affiche des avis, fait souvent la différence avec une simple annonce.',
      },
    ],
    recherchesTexte:
      'Voici le type de recherches que font les habitants d’Éragny et des alentours. Ce sont des exemples : l’analyse gratuite sert justement à repérer celles qui comptent pour votre activité.',
    recherches: [
      'plombier Éragny',
      'électricien Éragny-sur-Oise',
      'garage Éragny',
      'coiffeur Éragny',
      'artisan près de Conflans',
      'paysagiste Cergy-Pontoise',
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Éragny',
    conseils: [
      {
        titre: 'Nommer Éragny… et les communes voisines',
        texte:
          'Indiquez Éragny sur la page d’accueil et dans vos pages services, puis les communes où vous travaillez réellement. Une zone d’intervention claire aide Google autant que vos clients.',
      },
      {
        titre: 'Une fiche Google cohérente avec le site',
        texte:
          'Même nom, même téléphone, même adresse (ou même zone desservie) sur le site et sur la fiche Google. Les incohérences brouillent le signal local.',
      },
      {
        titre: 'Des preuves locales',
        texte:
          'Des photos de chantiers ou de votre commerce, des avis de clients du secteur, des exemples de réalisations à Éragny ou juste à côté : rien ne rassure plus qu’un travail visible près de chez soi.',
      },
      {
        titre: 'Un site rapide sur mobile',
        texte:
          'La plupart des recherches locales se font sur téléphone. Un site lent ou mal affiché sur mobile perd le client avant même qu’il ait lu votre nom.',
      },
    ],
    voisines: [
      "Saint-Ouen-l'Aumône",
      'Conflans-Sainte-Honorine',
      'Pierrelaye',
      'Cergy',
      'Neuville-sur-Oise',
      'Herblay-sur-Seine',
    ],
    zoneTexte:
      'Un site créé pour une entreprise d’Éragny peut aussi viser les communes autour, à condition de le faire honnêtement : uniquement là où vous intervenez vraiment.',
    faq: [
      {
        q: 'Mon activité est à domicile à Éragny : puis-je quand même apparaître sur Google Maps ?',
        a: 'Oui. Une fiche Google Business Profile peut fonctionner en zone desservie, sans afficher votre adresse personnelle. Le site internet vient alors confirmer votre zone d’intervention : Éragny et les communes que vous couvrez.',
      },
      {
        q: 'Faut-il créer une page par commune autour d’Éragny ?',
        a: 'Pas forcément. Une page par ville n’a d’intérêt que si elle apporte un vrai contenu propre à cette ville (chantiers réalisés, spécificités, accès). Sinon, mieux vaut une page « zone d’intervention » bien faite qu’une dizaine de pages presque identiques, que Google a tendance à ignorer.',
      },
      {
        q: 'Mes clients me trouvent déjà par le bouche-à-oreille, un site sert-il à quelque chose ?',
        a: 'Oui, parce que même un client recommandé vérifie en ligne avant d’appeler. S’il ne trouve rien, ou un résultat peu rassurant, il peut appeler quelqu’un d’autre. L’analyse gratuite montre ce que ce client voit aujourd’hui en tapant votre nom ou votre métier à Éragny.',
      },
    ],
  },
  {
    slug: 'creation-site-internet-pontoise',
    nom: 'Pontoise',
    departement: "Val-d'Oise (95)",
    resume: 'Centre historique, commerces indépendants et professions libérales.',
    metaTitle: 'Création Site Internet Pontoise : Site Vitrine Professionnel',
    metaDescription:
      'Création de site internet à Pontoise pour commerces, artisans et professions libérales. Un site qui vous distingue de Cergy dans les recherches locales. Analyse gratuite de votre présence en ligne.',
    h1: 'Création de site internet à Pontoise',
    intro:
      'Commerce du centre historique, cabinet, artisan du bâti ancien : à Pontoise, vos clients cherchent un professionnel sérieux et proche. Je crée des sites internet qui montrent exactement ça, et qui vous rendent visible quand quelqu’un tape votre métier suivi de « Pontoise ».',
    contexteTitre: 'Pontoise : une ville historique avec ses propres codes',
    contexte: [
      'Avec un peu plus de 30 000 habitants, Pontoise a une identité bien à elle dans l’agglomération : un centre ancien qui domine l’Oise, la cathédrale Saint-Maclou, le souvenir de Camille Pissarro et des peintres impressionnistes, des rues commerçantes et de nombreux professionnels installés en centre-ville.',
      'Sur Google, Pontoise a pourtant une difficulté particulière : on parle souvent de « Cergy-Pontoise », et les résultats des deux villes se mélangent. Un commerce ou un cabinet pontoisien doit donc affirmer clairement sa localisation (rue, quartier, repères) pour ne pas être noyé parmi les entreprises de Cergy.',
      'Autre particularité : à Pontoise, beaucoup de clients choisissent sur la confiance et la réputation. Le site doit inspirer cette confiance au premier regard : photos authentiques, présentation de la personne, avis, informations pratiques complètes.',
    ],
    publicsTitre: 'Les entreprises de Pontoise que j’accompagne',
    publics: [
      {
        titre: 'Commerces et restaurants du centre',
        texte:
          'Horaires à jour, carte ou catalogue, photos du lieu, accès et stationnement : votre site doit répondre aux questions pratiques mieux que n’importe quelle plateforme, et donner envie de pousser la porte.',
      },
      {
        titre: 'Professions libérales et cabinets',
        texte:
          'Avocats, experts-comptables, architectes, thérapeutes : vos clients veulent comprendre votre spécialité et savoir comment se passe un premier rendez-vous. Un site sobre et précis, dans le respect des règles de votre profession, vaut mieux qu’une plaquette.',
      },
      {
        titre: 'Artisans du bâti ancien',
        texte:
          'Maisons de ville, façades en pierre, toitures anciennes : à Pontoise, ces chantiers demandent un savoir-faire spécifique. Un site qui montre des réalisations sur ce type de bâti vous place sur les projets les plus intéressants.',
      },
    ],
    recherchesTexte:
      'Les recherches locales à Pontoise combinent souvent un métier, la ville et parfois un repère précis. Exemples :',
    recherches: [
      'restaurant centre Pontoise',
      'avocat Pontoise',
      'couvreur Pontoise',
      'fleuriste Pontoise',
      "architecte Val-d'Oise",
      'ravalement façade Pontoise',
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Pontoise',
    conseils: [
      {
        titre: 'Se distinguer de Cergy',
        texte:
          'Écrivez « Pontoise » là où ça compte (titre, page d’accueil, contact), donnez des repères concrets du centre-ville et, si vous servez aussi Cergy, dites-le dans une section dédiée plutôt que de tout confondre.',
      },
      {
        titre: 'Mettre en avant les personnes',
        texte:
          'Dans une ville où l’on choisit sur la confiance, une page « qui sommes-nous » avec une vraie photo et un vrai parcours compte plus qu’un slogan.',
      },
      {
        titre: 'Des informations pratiques irréprochables',
        texte:
          'Adresse, accès, stationnement, horaires, jours fériés : une information fausse sur le site ou la fiche Google coûte un client à chaque fois.',
      },
      {
        titre: 'Récolter des avis régulièrement',
        texte:
          'Les avis Google pèsent lourd dans les résultats locaux. Le site peut inviter vos clients satisfaits à en laisser un, simplement, au bon moment.',
      },
    ],
    voisines: ['Cergy', 'Osny', "Saint-Ouen-l'Aumône", 'Éragny', 'Auvers-sur-Oise', 'Ennery'],
    zoneTexte:
      'Les clients de Pontoise viennent aussi des communes voisines, de l’autre côté de l’Oise ou des villages du Vexin. Votre site peut le refléter sans perdre son ancrage pontoisien.',
    faq: [
      {
        q: 'Mon entreprise est à Pontoise mais Google m’associe à Cergy, c’est normal ?',
        a: 'C’est fréquent, à cause de l’appellation Cergy-Pontoise et d’un code postal en partie commun. Il faut vérifier l’adresse de la fiche Google, sa cohérence avec le site et les annuaires, et la façon dont la ville est mentionnée dans vos pages. C’est l’un des points regardés pendant l’analyse gratuite.',
      },
      {
        q: 'Je suis une profession réglementée, mon site peut-il être bien référencé ?',
        a: 'Oui. Les règles de communication de votre profession encadrent certains contenus (promesses, comparaisons, ton trop commercial), mais elles n’empêchent pas d’avoir un site clair, informatif et bien référencé. Le contenu est construit en conséquence.',
      },
      {
        q: 'Faut-il un site si je suis déjà sur des plateformes de réservation ?',
        a: 'Les plateformes sont utiles, mais vous n’y maîtrisez ni la présentation, ni les commissions, ni la relation client. Un site à votre nom vous donne une adresse qui vous appartient, et Google l’affiche souvent à côté de votre fiche.',
      },
    ],
  },
  {
    slug: 'creation-site-internet-saint-ouen-l-aumone',
    nom: "Saint-Ouen-l'Aumône",
    departement: "Val-d'Oise (95)",
    resume: 'Zones d’activités, PME, artisans et commerces de quartier.',
    metaTitle: "Création Site Internet Saint-Ouen-l'Aumône : Site Pro pour PME et Artisans",
    metaDescription:
      "Création de site internet à Saint-Ouen-l'Aumône pour PME, entreprises des zones d'activités, artisans et commerces. Un site qui rassure clients pros et particuliers. Analyse gratuite.",
    h1: 'Création de site internet à Saint-Ouen-l’Aumône',
    intro:
      'Entreprise des zones d’activités, sous-traitant, artisan ou commerce de quartier : à Saint-Ouen-l’Aumône, vos clients sont aussi bien des particuliers que des professionnels. Je crée des sites internet qui parlent à chacun d’eux, avec les preuves qu’ils attendent avant de vous contacter.',
    contexteTitre: 'Saint-Ouen-l’Aumône : une ville d’entreprises autant que de quartiers',
    contexte: [
      'Saint-Ouen-l’Aumône, un peu plus de 20 000 habitants, est connue pour l’abbaye de Maubuisson, mais aussi pour son poids économique : des zones d’activités comme les Béthunes ou le Vert-Galant accueillent des PME industrielles, des entreprises de logistique, de maintenance, de négoce et de nombreux artisans.',
      'Cela crée une situation particulière : une partie des entreprises de la ville travaille surtout pour d’autres entreprises. Or un acheteur, un responsable de site ou un gestionnaire d’immeubles ne cherche pas comme un particulier. Il compare des capacités, des références, des certifications, des délais. Un site qui ne montre que de belles photos ne répond pas à ses questions.',
      'À côté, la ville reste une commune où l’on vit : quartiers résidentiels, commerces, services de proximité, avec les mêmes besoins de visibilité locale que partout dans l’agglomération.',
    ],
    publicsTitre: 'Les entreprises de Saint-Ouen-l’Aumône que j’accompagne',
    publics: [
      {
        titre: 'PME et entreprises qui travaillent en B2B',
        texte:
          'Présentez clairement ce que vous faites, pour qui, avec quels moyens : savoir-faire, équipements, secteurs servis, certifications, références. Une page par activité permet d’être trouvé sur des recherches précises, pas seulement sur votre nom.',
      },
      {
        titre: 'Artisans avec atelier ou dépôt',
        texte:
          'Beaucoup d’artisans du bâtiment sont installés dans les zones d’activités. Votre site doit montrer vos chantiers, votre zone d’intervention et rassurer les particuliers comme les clients professionnels : syndics, entreprises, collectivités.',
      },
      {
        titre: 'Commerces et services de quartier',
        texte:
          'Horaires, accès, photos, avis : l’essentiel d’un site local bien fait, relié à une fiche Google à jour, pour être choisi par les habitants du secteur.',
      },
    ],
    recherchesTexte:
      'À Saint-Ouen-l’Aumône, les recherches mélangent requêtes de particuliers et requêtes professionnelles. Exemples :',
    recherches: [
      "électricien Saint-Ouen-l'Aumône",
      "maintenance industrielle Val-d'Oise",
      'location matériel Cergy-Pontoise',
      'imprimerie 95',
      "garage Saint-Ouen-l'Aumône",
      "transporteur Val-d'Oise",
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Saint-Ouen-l’Aumône',
    conseils: [
      {
        titre: 'Parler aux deux publics',
        texte:
          'Si vous servez particuliers et professionnels, séparez les parcours : une page pour chacun, avec ses arguments et ses preuves. Le visiteur doit se reconnaître en quelques secondes.',
      },
      {
        titre: 'Montrer des preuves concrètes',
        texte:
          'Références clients (avec leur accord), photos de réalisations, certifications, assurances, moyens techniques : pour un acheteur professionnel, ce sont des critères de sélection, pas des détails.',
      },
      {
        titre: 'Faciliter la demande',
        texte:
          'Un formulaire qui permet de joindre un cahier des charges ou des photos, un numéro direct, un délai de réponse annoncé : chaque frein en moins augmente les demandes.',
      },
      {
        titre: 'Être trouvable par activité, pas seulement par nom',
        texte:
          'Les clients qui ne vous connaissent pas encore cherchent un service, pas une entreprise. Chaque activité importante mérite sa page, avec les mots que vos clients utilisent.',
      },
    ],
    voisines: ['Éragny', 'Pontoise', 'Pierrelaye', 'Méry-sur-Oise', 'Cergy', 'Conflans-Sainte-Honorine'],
    zoneTexte:
      'Les entreprises de Saint-Ouen-l’Aumône travaillent souvent bien au-delà de la ville : agglomération, Val-d’Oise, parfois toute l’Île-de-France. Le site doit refléter votre vraie zone commerciale.',
    faq: [
      {
        q: 'Mon entreprise travaille surtout en B2B : un site est-il vraiment utile ?',
        a: 'Oui, souvent plus qu’en B2C. Un acheteur qui découvre votre nom (salon, consultation, recommandation) va presque toujours consulter votre site avant de vous contacter. Un site daté ou incomplet peut vous éliminer d’une consultation sans que vous le sachiez.',
      },
      {
        q: 'Peut-on présenter plusieurs activités sur un même site ?',
        a: 'Oui, et c’est même recommandé : une page par activité, chacune avec son contenu et ses exemples. C’est plus efficace pour Google qu’une page unique qui liste tout, et plus clair pour vos clients.',
      },
      {
        q: 'Notre site existe déjà mais n’apporte aucune demande, que faire ?',
        a: 'Commencer par comprendre pourquoi : il peut ne pas être trouvé, ne pas convaincre, ou rendre le contact difficile. L’analyse gratuite identifie lequel de ces problèmes est en cause avant de parler de refonte.',
      },
    ],
  },
  {
    slug: 'creation-site-internet-cergy',
    nom: 'Cergy',
    departement: "Val-d'Oise (95)",
    resume: 'La plus grande ville de l’agglomération, et la plus concurrentielle en ligne.',
    metaTitle: 'Création Site Internet Cergy : Site Vitrine pour Entreprises Locales',
    metaDescription:
      "Création de site internet à Cergy pour artisans, commerces, restaurants et indépendants. Se démarquer dans la ville la plus concurrentielle de l'agglomération. Analyse gratuite de votre présence en ligne.",
    h1: 'Création de site internet à Cergy',
    intro:
      'À Cergy, la concurrence en ligne est la plus forte de l’agglomération : pour chaque métier, de nombreuses entreprises se disputent les mêmes recherches. Je crée des sites internet qui vous font sortir du lot, en visant précisément vos clients, vos quartiers et vos services.',
    contexteTitre: 'Cergy : une grande ville jeune, connectée et très concurrentielle',
    contexte: [
      'Avec plus de 60 000 habitants, Cergy est la plus grande ville de l’agglomération de Cergy-Pontoise. Ville nouvelle organisée en grands quartiers (Grand Centre et Préfecture, Saint-Christophe, Cergy-le-Haut…), elle accueille aussi CY Cergy Paris Université et une population particulièrement jeune.',
      'Ce profil a des conséquences très concrètes : on cherche presque tout sur son téléphone, on lit les avis, on compare vite. Et comme Cergy concentre beaucoup d’entreprises, se contenter de « métier + Cergy » sur son site ne suffit plus : il faut être plus précis que les autres.',
      'La bonne stratégie consiste souvent à viser plus fin : un quartier, une prestation, un type de client. Une page dédiée à une prestation précise a plus de chances de se positionner qu’une page générique qui veut tout couvrir.',
    ],
    publicsTitre: 'Les entreprises de Cergy que j’accompagne',
    publics: [
      {
        titre: 'Restaurants, commerces et loisirs',
        texte:
          'Menus, horaires, réservation, photos, avis : à Cergy, vos clients vous comparent sur leur téléphone en quelques secondes. Le site doit être aussi rapide et clair que les meilleurs, et renvoyer vers votre fiche Google.',
      },
      {
        titre: 'Artisans et entreprises de services',
        texte:
          'Dans une ville où chaque métier compte de nombreux concurrents, une page par prestation et par type de besoin (urgence, rénovation, entretien) vous rend visible sur des recherches que les autres négligent.',
      },
      {
        titre: 'Indépendants, formateurs, services aux étudiants',
        texte:
          'Cours particuliers, coaching, services numériques : une population jeune et mobile cherche en ligne et décide vite. Le site doit inspirer confiance immédiatement et permettre de vous contacter en un clic.',
      },
    ],
    recherchesTexte: 'À Cergy, beaucoup de recherches mentionnent un quartier ou une prestation précise. Exemples :',
    recherches: [
      'restaurant Cergy Préfecture',
      'plombier Cergy',
      'salle de sport Cergy-le-Haut',
      'cours particuliers Cergy',
      'garage Cergy Saint-Christophe',
      'traiteur Cergy-Pontoise',
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Cergy',
    conseils: [
      {
        titre: 'Viser précis plutôt que large',
        texte:
          'Une page par prestation, avec des détails concrets, vaut mieux qu’une page générique. Les recherches précises sont moins disputées et amènent des clients plus décidés.',
      },
      {
        titre: 'Soigner les avis',
        texte:
          'Dans un marché concurrentiel, le nombre et la qualité des avis Google font souvent la différence entre deux entreprises comparables. Le site doit faciliter leur collecte et les mettre en valeur.',
      },
      {
        titre: 'Être irréprochable sur mobile',
        texte:
          'Temps de chargement, bouton d’appel visible, itinéraire en un clic : à Cergy, la plupart des visites arrivent depuis un téléphone.',
      },
      {
        titre: 'Mentionner les quartiers que vous servez',
        texte:
          'Si votre clientèle vient surtout d’un ou deux quartiers, dites-le. C’est utile pour vos clients et cohérent avec la façon dont ils cherchent.',
      },
    ],
    voisines: [
      'Pontoise',
      'Osny',
      'Vauréal',
      'Jouy-le-Moutier',
      'Courdimanche',
      'Éragny',
      "Saint-Ouen-l'Aumône",
      'Neuville-sur-Oise',
    ],
    zoneTexte:
      'Une entreprise de Cergy travaille rarement que pour Cergy. Votre site peut couvrir l’agglomération, en restant précis sur les communes que vous servez vraiment.',
    faq: [
      {
        q: 'Il y a déjà beaucoup d’entreprises de mon métier à Cergy, est-il encore possible de se positionner ?',
        a: 'Oui, mais rarement en attaquant directement la recherche la plus générale. On commence par les recherches précises (prestations, quartiers, besoins particuliers), on renforce la fiche Google et les avis, puis on élargit. L’analyse gratuite montre où se situent vos concurrents et où il reste de la place.',
      },
      {
        q: 'Mon site doit-il parler de Cergy ou de Cergy-Pontoise ?',
        a: 'Vos clients utilisent les deux. Le plus naturel est de mentionner Cergy là où vous êtes installé, et l’agglomération de Cergy-Pontoise pour votre zone d’intervention, sans répétition artificielle.',
      },
      {
        q: 'Combien de temps faut-il pour apparaître sur Google à Cergy ?',
        a: 'Cela dépend de la concurrence sur votre métier et de l’état de votre présence actuelle. Les améliorations de la fiche Google peuvent produire des effets en quelques semaines ; pour le site, il faut généralement compter plusieurs mois sur les recherches les plus disputées.',
      },
    ],
  },
  {
    slug: 'creation-site-internet-conflans-sainte-honorine',
    nom: 'Conflans-Sainte-Honorine',
    departement: 'Yvelines (78)',
    resume: 'Dans les Yvelines, au contact direct du Val-d’Oise et d’Éragny.',
    metaTitle: 'Création Site Internet Conflans-Sainte-Honorine : Site Vitrine Pro',
    metaDescription:
      "Création de site internet à Conflans-Sainte-Honorine pour artisans, commerces et indépendants. Un site visible côté Yvelines comme côté Val-d'Oise. Analyse gratuite de votre présence en ligne.",
    h1: 'Création de site internet à Conflans-Sainte-Honorine',
    intro:
      'Conflans-Sainte-Honorine est dans les Yvelines, mais une bonne partie de sa vie se joue avec le Val-d’Oise voisin. Pour une entreprise conflanaise, le site internet doit refléter cette réalité : des clients des deux côtés, des recherches qui mélangent les communes et une concurrence venue de tout le secteur.',
    contexteTitre: 'Conflans : la ville du confluent, entre Yvelines et Val-d’Oise',
    contexte: [
      'Environ 35 000 habitants, une situation unique au confluent de la Seine et de l’Oise, une identité forte de « capitale de la batellerie » avec son musée et son grand rassemblement annuel de mariniers : Conflans-Sainte-Honorine n’est pas une ville comme les autres.',
      'Administrativement, la ville est dans les Yvelines. Mais elle touche Éragny et Herblay-sur-Seine, et beaucoup d’habitants travaillent, consomment ou cherchent des prestataires dans l’agglomération de Cergy-Pontoise. Résultat : sur Google, une entreprise de Conflans se retrouve en concurrence avec des entreprises des deux départements.',
      'Un site bien construit tire parti de cette position au lieu de la subir : il affirme son ancrage à Conflans et indique clairement les communes desservies des deux côtés.',
    ],
    publicsTitre: 'Les entreprises de Conflans que j’accompagne',
    publics: [
      {
        titre: 'Commerces du centre-ville et des quartiers',
        texte:
          'Horaires, photos, spécialités, accès : le site doit donner envie de venir et compléter votre fiche Google, que vous soyez en centre-ville, près des quais ou dans les quartiers résidentiels.',
      },
      {
        titre: 'Artisans du bâtiment',
        texte:
          'Maisons de ville, pavillons, copropriétés : les besoins sont nombreux. Votre site doit montrer vos réalisations et votre zone exacte, Conflans, Andrésy, Herblay, Éragny ou plus loin.',
      },
      {
        titre: 'Activités liées à la rivière et au tourisme',
        texte:
          'Restauration au bord de l’eau, hébergement, activités nautiques, visites : les visiteurs préparent leur sortie en ligne. Un site soigné, avec des photos qui donnent envie et des informations pratiques, capte cette clientèle.',
      },
    ],
    recherchesTexte:
      'Les habitants écrivent « Conflans », « Conflans-Sainte-Honorine » ou associent une commune voisine. Exemples :',
    recherches: [
      'électricien Conflans-Sainte-Honorine',
      'restaurant bord de Seine Conflans',
      'plombier Conflans Andrésy',
      'coiffeur Conflans',
      'menuisier Yvelines',
      'artisan Conflans Herblay',
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Conflans-Sainte-Honorine',
    conseils: [
      {
        titre: 'Utiliser les deux formes du nom',
        texte:
          'Vos clients écrivent « Conflans » ou « Conflans-Sainte-Honorine ». Le site doit employer naturellement les deux, sans répétition forcée.',
      },
      {
        titre: 'Afficher une zone à cheval sur deux départements',
        texte:
          'Si vous servez aussi le Val-d’Oise, dites-le clairement : Éragny, Herblay-sur-Seine, Saint-Ouen-l’Aumône… Un client du 95 ne doit pas penser que vous êtes hors de sa zone.',
      },
      {
        titre: 'Valoriser l’identité locale',
        texte:
          'Photos de la ville, mention des quartiers, attachement local : à Conflans, l’appartenance compte. Un site qui sent l’entreprise d’ici inspire plus confiance qu’un modèle générique.',
      },
      {
        titre: 'Une fiche Google complète',
        texte:
          'Catégories exactes, zone desservie, photos récentes, avis : la fiche Google et le site doivent raconter la même histoire.',
      },
    ],
    voisines: ['Éragny', 'Herblay-sur-Seine', 'Andrésy', 'Maurecourt', 'Achères', 'Neuville-sur-Oise'],
    zoneTexte:
      'Depuis Conflans, beaucoup d’entreprises couvrent à la fois les Yvelines et le Val-d’Oise. Le site doit le dire simplement, commune par commune si besoin.',
    faq: [
      {
        q: 'Conflans est dans les Yvelines : travaillez-vous aussi hors du Val-d’Oise ?',
        a: 'Oui. Conflans-Sainte-Honorine fait partie du même bassin de vie que l’agglomération de Cergy-Pontoise, et je travaille aussi à distance partout en France. La localisation compte surtout pour comprendre comment vos clients cherchent.',
      },
      {
        q: 'Dois-je écrire « Conflans » ou « Conflans-Sainte-Honorine » sur mon site ?',
        a: 'Les deux. Le nom complet est utile pour l’adresse, les titres et la fiche Google ; la forme courte est celle que beaucoup de gens tapent. Un texte naturel qui emploie les deux suffit.',
      },
      {
        q: 'Je travaille dans les Yvelines et dans le Val-d’Oise, comment le montrer ?',
        a: 'Avec une page « zone d’intervention » qui liste les communes réellement couvertes dans chaque département, et des exemples de réalisations si vous en avez. Inutile de créer une page par commune si vous n’avez rien de spécifique à y dire.',
      },
    ],
  },
  {
    slug: 'creation-site-internet-viarmes',
    nom: 'Viarmes',
    departement: "Val-d'Oise (95)",
    resume: 'Nord du Val-d’Oise, entre Pays de France et abbaye de Royaumont.',
    metaTitle: 'Création Site Internet Viarmes : Site Vitrine pour Artisans et Commerces',
    metaDescription:
      'Création de site internet à Viarmes et dans le Pays de France pour artisans, commerces et activités touristiques. Un site qui couvre tout votre secteur. Analyse gratuite de votre présence en ligne.',
    h1: 'Création de site internet à Viarmes',
    intro:
      'À Viarmes et dans les communes voisines, les entreprises vivent d’un secteur plus que d’une ville. Je crée des sites internet qui vous rendent visible sur tout ce territoire, de Viarmes à Luzarches et Asnières-sur-Oise, là où vos clients vous cherchent vraiment.',
    contexteTitre: 'Viarmes : une petite ville au cœur d’un grand secteur rural',
    contexte: [
      'Viarmes compte environ 5 000 habitants, dans le nord du Val-d’Oise, à deux pas de l’abbaye de Royaumont et entourée de forêts et de terres agricoles. C’est une petite ville, mais aussi un centre de vie pour les villages alentour.',
      'Pour une entreprise locale, cela change la stratégie en ligne : peu de gens cherchent uniquement « Viarmes ». Ils cherchent leur village, la ville voisine, ou un métier sans préciser de lieu en laissant Google utiliser leur position. Un site efficace doit donc couvrir un secteur cohérent, pas une seule commune.',
      'Bonne nouvelle : dans ce secteur, beaucoup d’entreprises ont encore une présence en ligne réduite. Un site complet, bien relié à une fiche Google soignée, peut vous démarquer plus vite qu’en ville.',
    ],
    publicsTitre: 'Les entreprises du secteur de Viarmes que j’accompagne',
    publics: [
      {
        titre: 'Artisans qui couvrent tout le secteur',
        texte:
          'Plombiers, électriciens, maçons, couvreurs, paysagistes : vous parcourez les villages du Pays de France. Votre site doit lister vos communes d’intervention, présenter vos prestations et montrer vos chantiers, maisons anciennes comprises.',
      },
      {
        titre: 'Commerces et services du centre',
        texte:
          'Pour les commerces de Viarmes, le site sert surtout à confirmer l’essentiel : ce que vous proposez, vos horaires, comment venir. C’est aussi un moyen d’être trouvé par les nouveaux habitants.',
      },
      {
        titre: 'Hébergement, restauration et tourisme',
        texte:
          'L’abbaye de Royaumont et la campagne alentour attirent des visiteurs qui préparent leur séjour en ligne. Gîtes, chambres d’hôtes, restaurants et activités ont tout intérêt à avoir un site à eux, en plus des plateformes de réservation.',
      },
    ],
    recherchesTexte:
      'Dans le secteur de Viarmes, les recherches visent souvent une commune voisine ou le secteur entier. Exemples :',
    recherches: [
      'plombier Viarmes',
      'maçon Luzarches',
      'électricien Pays de France',
      "paysagiste Val-d'Oise nord",
      'chambre d’hôtes Royaumont',
      'restaurant Viarmes',
    ],
    conseilsTitre: 'Ce qui fait la différence pour un site à Viarmes',
    conseils: [
      {
        titre: 'Couvrir un secteur, pas une ville',
        texte:
          'Une page claire sur votre zone d’intervention, avec les communes réellement couvertes, aide vos clients à savoir que vous venez chez eux et aide Google à vous associer à ce territoire.',
      },
      {
        titre: 'Prendre soin de la fiche Google',
        texte:
          'En zone rurale, la fiche Google est souvent le premier contact. Catégories, horaires, photos et avis doivent être complets, et renvoyer vers votre site.',
      },
      {
        titre: 'Montrer le travail réel',
        texte:
          'Maisons anciennes, corps de ferme, bâtiments rénovés : des photos de vos vrais chantiers rassurent bien plus qu’une image de banque d’images.',
      },
      {
        titre: 'Rester simple et rapide',
        texte:
          'Le réseau mobile n’est pas toujours excellent à la campagne : un site léger, qui s’affiche vite même avec une connexion moyenne, ne perd pas ses visiteurs.',
      },
    ],
    voisines: ['Luzarches', 'Asnières-sur-Oise', 'Seugy', 'Belloy-en-France', 'Saint-Martin-du-Tertre', 'Noisy-sur-Oise'],
    zoneTexte:
      'Autour de Viarmes, la clientèle s’étend souvent sur une quinzaine de kilomètres. Le site doit décrire précisément cette zone.',
    faq: [
      {
        q: 'Dans une petite commune, un site internet est-il vraiment utile ?',
        a: 'Oui, parce que vos clients ne sont pas seulement à Viarmes : ils sont dans tout le secteur, et beaucoup vous découvrent en ligne. Là où peu d’entreprises ont un site complet, être bien présent est un avantage net.',
      },
      {
        q: 'Mes clients sont dans plusieurs villages, comment être visible dans chacun ?',
        a: 'Avec une fiche Google configurée sur votre zone desservie, et une page du site qui présente votre secteur commune par commune. Si vous avez des réalisations dans certains villages, les montrer renforce encore la pertinence.',
      },
      {
        q: 'Je n’ai pas le temps de m’occuper d’un site, est-ce un problème ?',
        a: 'Non. Un site vitrine bien conçu demande peu d’entretien : quelques photos de temps en temps, des horaires à jour. Vous pouvez aussi me confier ces mises à jour.',
      },
    ],
  },
];

export function getVille(slug: string) {
  return VILLES.find((v) => v.slug === slug) ?? null;
}
