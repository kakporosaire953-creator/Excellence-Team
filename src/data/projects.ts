import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'codetovecto',
    slug: 'codetovecto',
    title: 'Codetovecto',
    category: 'Developer Tooling',
    year: '2024',
    shortDescription: 'Moteur de conversion et de visualisation de structures de code source en diagrammes vectoriels SVG et schémas d’architecture.',
    problem: 'Les développeurs et architectes perdent un temps considérable à maintenir manuellement des schémas d’architecture logicielle désynchronisés du code source réel.',
    approach: 'Conception d’un parseur AST (Abstract Syntax Tree) capable d’analyser statiquement la base de code et de projeter automatiquement les relations et flux de dépendances en géométries vectorielles interactives.',
    build: 'Pipeline d’analyse syntaxique en Rust/TypeScript avec rendu vectoriel instantané en SVG haute fidélité, prise en charge de multiples langages et export haute résolution.',
    technology: ['TypeScript', 'Rust / WASM', 'SVG Engine', 'AST Parser', 'Tailwind CSS'],
    result: 'Génération instantanée de diagrammes d’architecture précis, réduisant de 70% le temps d’onboarding technique et de documentation.',
    status: 'Active',
    featured: true,
    metrics: [
      { label: 'Temps de rendu', value: '< 120ms' },
      { label: 'Précision d’analyse', value: '100% AST' },
      { label: 'Formats supportés', value: 'SVG / PNG / JSON' }
    ],
    liveUrl: 'https://codetovecto.excellenceteam.site'
  },
  {
    id: 'videogen-v2',
    slug: 'videogen-v2',
    title: 'VideoGen v2',
    category: 'AI & Data',
    year: '2024–2025',
    shortDescription: 'Pipeline de génération et d’automatisation vidéo programmatique alimenté par modèles génératifs et orchestration cloud.',
    problem: 'La production manuelle de déclinaisons vidéo pour le contenu éducatif et marketing demande des heures de montage répétitif pour chaque variation de format ou de langue.',
    approach: 'Création d’un moteur de composition vidéo piloté par API unifiant synthèse vocale neuronale, calques dynamiques synchronisés et rendu distribué en conteneurs.',
    build: 'Architecture modulaire basée sur Node.js, FFmpeg sous Docker orchestré pour le traitement parallèle de scènes, et interface de prévisualisation en temps réel avec calques paramétriques.',
    technology: ['Node.js', 'FFmpeg', 'Docker', 'AI Speech APIs', 'React Canvas'],
    result: 'Automatisation complète de la chaîne de rendu, permettant de générer des dizaines de vidéos adaptées aux différents ratios en quelques minutes.',
    status: 'V2',
    featured: true,
    metrics: [
      { label: 'Gain de temps montage', value: '85%' },
      { label: 'Temps d’encodage', value: 'x4 plus rapide' },
      { label: 'Ratios dynamiques', value: '16:9 / 9:16 / 1:1' }
    ],
    liveUrl: 'https://videogen.excellenceteam.site'
  },
  {
    id: 'excellencelink',
    slug: 'excellencelink',
    title: 'ExcellenceLink',
    category: 'SaaS & Web',
    year: '2024',
    shortDescription: 'Plateforme haute performance de redirection intelligente d’URLs, traçabilité analytique et gestion de liens sécurisés.',
    problem: 'Nécessité pour les organisations et créateurs de centraliser le routage de liens avec une latence ultra-faible, sans fuite de métadonnées et avec des contrôles de sécurité avancés.',
    approach: 'Conception d’un micro-service de redirection distribué sur des nœuds de périphérie (Edge/CDN) avec mise en cache mémoire et journalisation analytique non-bloquante.',
    build: 'Base de données relationnelle optimisée avec indexation B-Tree, couche de cache Redis pour des temps de redirection inférieurs à 20ms, et tableau de bord de métriques en temps réel.',
    technology: ['TypeScript', 'Redis', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    result: 'Plateforme robuste gérant des dizaines de milliers de redirections fiables sans dégradation de performance.',
    status: 'Production',
    featured: true,
    metrics: [
      { label: 'Latence redirection', value: '< 18ms' },
      { label: 'Disponibilité', value: '99.98%' },
      { label: 'Analytique', value: 'Temps réel' }
    ],
    liveUrl: 'https://link.excellenceteam.site'
  },
  {
    id: 'nowstudy',
    slug: 'nowstudy',
    title: 'NowStudy',
    category: 'EdTech & Education',
    year: '2024',
    shortDescription: 'Espace de révision collaborative en temps réel connectant étudiants et apprenants autour de sessions de travail focalisées.',
    problem: 'L’isolement des étudiants lors des sessions de révision autonome diminue la motivation et freine l’entraide technique sur des concepts complexes.',
    approach: 'Développement d’un environnement de travail virtuel combinant minuteurs de travail synchronisés (Pomodoro collaboratif), salles d’étude audio/texte et partage de notes.',
    build: 'Architecture WebSocket pour la synchronisation instantanée d’état entre participants, système de réputation et interface minimale sans distraction.',
    technology: ['WebSockets', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    result: 'Adopté par plusieurs communautés d’étudiants universitaires pour structurer leurs cycles de révision d’examens.',
    status: 'Active',
    metrics: [
      { label: 'Sessions complétées', value: '+1,200' },
      { label: 'Temps d’étude moyen', value: '95 min' }
    ]
  },
  {
    id: 'renderx',
    slug: 'renderx',
    title: 'RenderX',
    category: 'Developer Tooling',
    year: '2024',
    shortDescription: 'Outil de transformation et de prévisualisation graphique haute vitesse pour concepteurs d’interfaces et développeurs front-end.',
    problem: 'La conversion et l’optimisation d’assets graphiques pour le web nécessite souvent plusieurs outils déconnectés générant des artefacts incohérents.',
    approach: 'Unification d’un pipeline de traitement côté client via WebAssembly pour compresser, retailler et convertir des assets sans envoyer de données vers un serveur tiers.',
    build: 'Utilisation de Canvas API et modules Rust compilés en WebAssembly pour une exécution ultra-sécurisée et hors-ligne dans le navigateur.',
    technology: ['WebAssembly', 'Rust', 'HTML5 Canvas', 'React', 'TypeScript'],
    result: 'Compression sans perte jusqu’à 65% de réduction de poids de fichiers en une fraction de seconde directement dans le navigateur.',
    status: 'Active',
    metrics: [
      { label: 'Traitement local', value: '100% privé' },
      { label: 'Compression moyenne', value: '62%' }
    ]
  },
  {
    id: 'to-fitune',
    slug: 'to-fitune',
    title: 'To_fitune',
    category: 'AI & Data',
    year: '2024',
    shortDescription: 'Application d’analyse acoustique et d’assistance à l’accordage audio numérique avec précision fréquentielle avancée.',
    problem: 'Les outils d’accordage standards manquent de finesse pour les instruments à spectre harmonique complexe ou dans des environnements bruités.',
    approach: 'Application de transformations de Fourier rapides (FFT) combinées à un algorithme d’autocorrélation harmonique pour isoler la fondamentale même en présence de bruit ambiant.',
    build: 'Interface Web Audio API avec spectrogramme temps réel à 60 FPS et jauge d’accordage gyroscopique intuitive.',
    technology: ['Web Audio API', 'FFT Algorithms', 'TypeScript', 'Tailwind CSS'],
    result: 'Précision de détection à ±0.5 centième de demi-ton, utilisable sur mobile comme sur desktop sans installation.',
    status: 'Active',
    metrics: [
      { label: 'Précision fréquentielle', value: '±0.5 cent' },
      { label: 'Taux de rafraîchissement', value: '60 FPS' }
    ]
  },
  {
    id: 'write',
    slug: 'write',
    title: 'Write',
    category: 'SaaS & Web',
    year: '2024',
    shortDescription: 'Éditeur de texte Markdown épuré avec synchronisation locale sécurisée et typographie optimisée pour la rédaction longue.',
    problem: 'Les traitements de texte modernes sont saturés d’options superflues qui détruisent la concentration de l’auteur lors des phases d’écriture créative ou technique.',
    approach: 'Design minimaliste inspiré des machines à écrire mécaniques, support complet de la syntaxe CommonMark et persistance locale inviolable.',
    build: 'Moteur de parsing Markdown en temps réel sans latence de frappe, export multi-formats (HTML, Markdown, PDF stylisé) et mode zen.',
    technology: ['React', 'TypeScript', 'IndexedDB', 'Tailwind CSS', 'CSS Typography'],
    result: 'Utilisé par les rédacteurs techniques pour concevoir des spécifications et des documentations exhaustives sans friction.',
    status: 'Active',
    metrics: [
      { label: 'Latence de saisie', value: '0 ms' },
      { label: 'Stockage', value: 'Offline-First' }
    ]
  },
  {
    id: 'academix',
    slug: 'academix',
    title: 'Academix',
    category: 'EdTech & Education',
    year: '2024–2025',
    shortDescription: 'Système modulaire de gestion académique pour le suivi des cursus, des évaluations continues et de la scolarité.',
    problem: 'Les établissements d’enseignement supérieur peinent à consolider les relevés de notes et la validation des crédits avec des outils de tableur disparates.',
    approach: 'Création d’un progiciel métier intégrant calculs pondérés automatiques, gestion multi-semestres et génération de relevés certifiés.',
    build: 'Backend d’API RESTful strict avec validation de schémas, gestion des accès par rôles (administrateurs, professeurs, délégués) et interface d’administration ergonomique.',
    technology: ['Node.js', 'Express', 'PostgreSQL', 'React', 'RBAC Security'],
    result: 'Déploiement prototype permettant de calculer et publier les résultats d’examens en quelques clics en éliminant les erreurs manuelles de saisie.',
    status: 'Production',
    metrics: [
      { label: 'Élimination des erreurs', value: '100%' },
      { label: 'Génération de relevés', value: 'Instantanée' }
    ]
  },
  {
    id: 'wine-by-excellence',
    slug: 'wine-by-excellence',
    title: 'Wine by Excellence',
    category: 'SaaS & Web',
    year: '2024',
    shortDescription: 'Plateforme digitale de dégustation, de référencement œnologique et de gestion d’inventaire premium pour sommeliers et cavistes.',
    problem: 'Les maisons de dégustation et distributeurs de crus ont besoin d’un support digital raffiné pour présenter leurs sélections sans perdre le caractère luxueux de leur métier.',
    approach: 'Direction artistique soignée mariant fiches de dégustation sensorielles interactives, accords mets-vins guidés et gestion de stock en temps réel.',
    build: 'Interface interactive à défilement fluide, filtrage par cépages, terroirs et millésimes avec mode de commande directe.',
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'Headless CMS', 'Framer Motion'],
    result: 'Démonstrateur de vitrine haut de gamme démontrant notre capacité à répondre aux exigences d’esthétique et de fluidité du secteur premium.',
    status: 'Active',
    metrics: [
      { label: 'Temps de chargement', value: '< 0.8s' },
      { label: 'Note UX', value: '98/100' }
    ]
  },
  {
    id: 'le-twin',
    slug: 'le-twin',
    title: 'Le TWIN',
    category: 'Research & 3D',
    year: '2024–2025',
    shortDescription: 'Prototype expérimental de jumeau numérique 3D et simulation spatiale interactive pour la modélisation de flux et infrastructures.',
    problem: 'La visualisation de données architecturales et de capteurs IoT dans l’espace urbain nécessite des représentations tridimensionnelles légères navigables dans un navigateur web standard.',
    approach: 'Exploitation de WebGL et de modèles polygonaux optimisés pour rendre des environnements complexes sans exiger une carte graphique dédiée.',
    build: 'Moteur Three.js intégré avec couche de projection de coordonnées géographiques et affichage conditionnel d’indicateurs métriques superposés.',
    technology: ['Three.js', 'WebGL', 'GLSL Shaders', 'TypeScript', 'IoT Protocols'],
    result: 'Validation de principe démontrant la viabilité du jumeau numérique dans des contextes de connexion réseau modérée.',
    status: 'Research',
    metrics: [
      { label: 'Taille du bundle 3D', value: '< 2.4 MB' },
      { label: 'Fluidité', value: 'Stable 60 FPS' }
    ]
  },
  {
    id: 'nuit-du-coeur',
    slug: 'nuit-du-coeur',
    title: 'Nuit du Cœur',
    category: 'Impact & Civic',
    year: '2024',
    shortDescription: 'Plateforme solidaire civique pour la coordination des dons, la sensibilisation médicale et la mobilisation citoyenne.',
    problem: 'Les campagnes d’urgence sanitaire souffrent d’un déficit de visibilité et d’outils de centralisation transparente des contributions citoyennes.',
    approach: 'Développement bénévole et déploiement express d’un portail d’engagement citoyen sécurisé garantissant la traçabilité des dons et la cartographie des points de collecte.',
    build: 'Architecture résiliente capable d’absorber des pics de trafic importants lors des relais médiatiques, avec paiement mobile money sécurisé.',
    technology: ['Mobile Money APIs', 'React', 'Cloud Functions', 'Tailwind CSS'],
    result: 'Facilitation de la collecte et de la coordination de centaines d’actes de solidarité lors de l’événement caritatif.',
    status: 'Production',
    metrics: [
      { label: 'Disponibilité pic', value: '100%' },
      { label: 'Sécurité transactions', value: 'Chiffrement TLS' }
    ]
  },
  {
    id: 'fieri-research',
    slug: 'fieri-research',
    title: 'Fieri Research',
    category: 'Research & 3D',
    year: '2024–2025',
    shortDescription: 'Portail de recherche scientifique et d’exploration de corpus bibliographiques universitaires avec moteur de découverte sémantique.',
    problem: 'Les chercheurs et universitaires africains manquent d’outils unifiés pour archiver, indexer et croiser les publications régionales méconnues.',
    approach: 'Indexation sémantique des documents académiques par métadonnées riches et graphe de citations croisées pour découvrir les liens interdisciplinaires.',
    build: 'Moteur d’indexation plein texte, moteur de recherche à facettes et visualisateur de graphes relationnels entre thématiques de recherche.',
    technology: ['TypeScript', 'Full-text Search', 'Graph Visualization', 'React', 'REST API'],
    result: 'Base de connaissances structurée valorisant les travaux académiques locaux et favorisant les collaborations inter-universitaires.',
    status: 'Open Source',
    metrics: [
      { label: 'Indexation', value: 'Plein texte' },
      { label: 'Graphe relationnel', value: 'Interconnecté' }
    ]
  }
];
