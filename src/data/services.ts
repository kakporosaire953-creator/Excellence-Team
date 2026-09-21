import { ServicePillar } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'digital-products',
    number: '01',
    title: 'Produits Numériques',
    englishTitle: 'DIGITAL PRODUCTS',
    shortSummary: 'Conception et développement de plateformes web, mobiles et SaaS conçues pour durer et monter en charge.',
    description: 'Nous ne livrons pas de simples pages vitrines. Nous construisons des systèmes numériques complets : applications web métier, architectures SaaS robustes, applications mobiles réactives et solutions sur-mesure répondant à des problématiques opérationnelles réelles.',
    icon: 'Layers',
    capabilities: [
      {
        title: 'Plateformes Web & Applications Métier',
        description: 'Interfaces rapides, accessibles et résilientes pour gérer des opérations d’entreprise complexes.',
        items: ['Portails B2B / B2C', 'Tableaux de bord analytiques', 'Systèmes de gestion internes (ERP/CRM légers)', 'Single Page Applications (SPA/PWA)']
      },
      {
        title: 'Produits SaaS & Architectures Multi-tenant',
        description: 'Solutions logicielles en abonnement pensées dès le premier commit pour la scalabilité et l’isolation des données.',
        items: ['Gestion des abonnements et facturation', 'Isolation des tenants et sécurité RBAC', 'Bases de données modulaires', 'APIs d’intégration tierces']
      },
      {
        title: 'Applications Mobiles Hybrides & Natives',
        description: 'Expériences mobiles fluides à 60 FPS garantissant un fonctionnement optimal même en conditions réseau dégradées.',
        items: ['Applications iOS et Android', 'Fonctionnement offline-first', 'Intégration Mobile Money & paiements locaux', 'Notifications push ciblées']
      },
      {
        title: 'Solutions Numériques Sur-Mesure',
        description: 'Développement de fonctionnalités uniques lorsque les progiciels du marché ne répondent pas aux besoins spécifiques.',
        items: ['Moteurs de calcul spécifiques', 'Outils d’automatisation métier', 'Intégration de flux existants', 'Refonte et modernisation de legacy']
      }
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: [
      'Code source audité et documenté',
      'Documentation technique et fonctionnelle',
      'Pipeline de déploiement continu automatisé',
      'Session de formation des équipes opérationnelles'
    ],
    businessValue: 'Accélération de la mise sur le marché, adoption utilisateur immédiate et zéro dette technique cachée.'
  },
  {
    id: 'ai-data',
    number: '02',
    title: 'IA & Ingénierie Data',
    englishTitle: 'AI & DATA',
    shortSummary: 'Exploitation pragmatique des données et intégration de modèles d’IA pour automatiser et éclairer vos décisions.',
    description: 'Loin du bruit marketing autour de l’intelligence artificielle, nous intégrons l’IA là où elle apporte un retour sur investissement mesurable : automatisation de tâches répétitives, classification intelligente de documents, analyse prédictive et assistants contextuels connectés à vos bases documentaires.',
    icon: 'BrainCircuit',
    capabilities: [
      {
        title: 'Data Analysis & Visualisation Décisionnelle',
        description: 'Transformation de données éparses en tableaux de bord exploitables par les dirigeants.',
        items: ['Agrégation multi-sources', 'Modélisation et nettoyage de données', 'Indicateurs clés en temps réel', 'Rapports automatisés périodiques']
      },
      {
        title: 'Intégration de Modèles IA & LLMs',
        description: 'Déploiement de grands modèles de langage et modèles de vision adaptés à vos cas d’usage propriétaires.',
        items: ['Systèmes RAG (Retrieval-Augmented Generation)', 'Assistants internes connectés à votre base de connaissances', 'Agents de traitement de tickets et emails', 'Fine-tuning & prompting structuré']
      },
      {
        title: 'Automatisation Intelligente de Processus',
        description: 'Remplacement des tâches manuelles à faible valeur ajoutée par des flux d’exécution automatisés fiables.',
        items: ['Extraction automatique de données (factures, reçus, contrats)', 'Pipelines de traitement de médias (audio, vidéo, images)', 'Routage automatique d’informations']
      },
      {
        title: 'Outils Data Internes',
        description: 'Conception de banques de données sécurisées et d’outils d’interrogation en langage naturel.',
        items: ['Bases vectorielles sécurisées', 'Contrôles d’accès aux données sensibles', 'Audit de qualité des données']
      }
    ],
    technologies: ['Python', 'LangChain', 'OpenAI / Gemini SDKs', 'PostgreSQL pgvector', 'FastAPI', 'Pandas'],
    deliverables: [
      'Pipelines de données automatisés et testés',
      'APIs de service IA documentées',
      'Rapport d’évaluation de précision des modèles',
      'Guide de gouvernance des données et de confidentialité'
    ],
    businessValue: 'Réduction de 60% du temps passé sur les tâches cognitives répétitives et décisions stratégiques guidées par la donnée.'
  },
  {
    id: 'cybersecurity',
    number: '03',
    title: 'Cybersécurité & Audits',
    englishTitle: 'CYBERSECURITY',
    shortSummary: 'Évaluations sécuritaires autorisées, tests d’intrusion et durcissement pour protéger vos actifs numériques.',
    description: 'La sécurité n’est pas une option ajoutée à la fin d’un projet. Avec plusieurs cofondateurs et membres spécialisés en sécurité offensive et défensive, nous identifions vos failles avant les attaquants et garantissons la résilience de vos systèmes critiques.',
    icon: 'ShieldCheck',
    capabilities: [
      {
        title: 'Audits de Sécurité Autorisés',
        description: 'Évaluation méthodique de votre posture de sécurité et de vos architectures existantes.',
        items: ['Revue de conformité et bonnes pratiques', 'Audit d’architecture réseau et cloud', 'Évaluation de la gestion des identités et privilèges', 'Contrôle des politiques de mots de passe et MFA']
      },
      {
        title: 'Pentesting & Tests d’Intrusion Autorisés',
        description: 'Simulation d’attaques réelles dans un cadre contractuel strict pour éprouver vos défenses.',
        items: ['Tests d’intrusion Web (OWASP Top 10)', 'Pentesting d’APIs et endpoints mobiles', 'Évaluation des vulnérabilités de logique métier', 'Rapports d’exploitation avec preuve de concept (PoC)']
      },
      {
        title: 'Analyse & Remédiation de Vulnérabilités',
        description: 'Diagnostic approfondi des failles et accompagnement pas-à-pas des équipes de développement.',
        items: ['Scan continu de dépendances logicielles', 'Revue de code statique sécuritaire (SAST)', 'Priorisation par criticité (score CVSS)', 'Plans de remédiation et contre-tests de validation']
      },
      {
        title: 'Sécurisation & Durcissement d’Applications',
        description: 'Mise en œuvre des protections nécessaires pour rendre vos applications impénétrables.',
        items: ['Chiffrement des données au repos et en transit', 'Configuration WAF et limitation de requêtes (Rate Limiting)', 'Protection contre les injections et attaques par force brute', 'Traçabilité et journalisation des événements suspects']
      }
    ],
    technologies: ['Burp Suite', 'OWASP Standards', 'Kali / Linux Tooling', 'Nmap', 'SAST / DAST', 'Chiffrement TLS 1.3 / AES-256'],
    deliverables: [
      'Rapport d’audit exécutif pour la direction',
      'Rapport technique détaillé avec reproduction des failles',
      'Matrice de remédiation priorisée par criticité',
      'Attestation de contre-audit après correction'
    ],
    businessValue: 'Protection de la réputation de marque, conformité réglementaire et prévention de pertes financières critiques.'
  },
  {
    id: 'cloud-engineering',
    number: '04',
    title: 'Cloud & Architecture Logicielle',
    englishTitle: 'CLOUD & ENGINEERING',
    shortSummary: 'Infrastructures résilientes, APIs haute performance et pipelines CI/CD pour une disponibilité sans compromis.',
    description: 'Nous concevons des architectures systèmes capables d’encaisser des montées de charge soudaines sans flancher. De la conception d’APIs normalisées au déploiement en conteneurs orchestrés, nous automatisons vos livraisons pour un fonctionnement sans interruption.',
    icon: 'CloudCog',
    capabilities: [
      {
        title: 'Architecture Système Haute Disponibilité',
        description: 'Conception de systèmes modulaires tolérants aux pannes et extensibles.',
        items: ['Architecture microservices & découpage modulaire', 'Mise en cache mémoire distribuée (Redis)', 'Bases de données répliquées avec failover', 'Équilibrage de charge (Load Balancing)']
      },
      {
        title: 'APIs REST & GraphQL Robustes',
        description: 'Interfaces de programmation normalisées, documentées et ultra-véloces.',
        items: ['Spécifications OpenAPI / Swagger', 'Validation de schémas stricts', 'Gestion fine de la pagination et des erreurs', 'Authentification JWT & clés API sécurisées']
      },
      {
        title: 'Déploiement Automatisé CI/CD',
        description: 'Suppression des déploiements manuels à risque grâce à l’automatisation continue.',
        items: ['Pipelines GitHub Actions / GitLab CI', 'Exécution systématique des tests automatisés', 'Déploiement sans interruption de service (Zero-downtime)', 'Gestion des variables d’environnement et secrets']
      },
      {
        title: 'Conteneurisation & Infrastructure as Code',
        description: 'Reproductibilité parfaite entre les environnements de développement et de production.',
        items: ['Conteneurs Docker allégés et durcis', 'Orchestration avec Kubernetes / Cloud Run', 'Supervision des ressources et autoscaling', 'Sauvegardes et plans de reprise d’activité (PRA)']
      }
    ],
    technologies: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'AWS', 'PostgreSQL', 'Redis', 'GitHub Actions', 'Nginx'],
    deliverables: [
      'Schéma d’architecture système détaillé',
      'Scripts de déploiement et configuration des pipelines',
      'Tableau de bord de monitoring et métriques de santé',
      'Procédure documentée de reprise après sinistre'
    ],
    businessValue: 'Disponibilité maximale de vos services, réduction des coûts d’infrastructure et déploiements sereins en quelques minutes.'
  },
  {
    id: 'automation-operations',
    number: '05',
    title: 'Automatisation & Opérations',
    englishTitle: 'AUTOMATION & DIGITAL OPERATIONS',
    shortSummary: 'Maintenance continue, support technique dédié et évolution agile de vos actifs numériques.',
    description: 'Le lancement d’un produit n’est que la première étape. Nous accompagnons les organisations sur la durée avec des contrats de maintenance préventive, corrective et évolutive, des garanties de temps de réaction (SLA) et l’automatisation des flux opérationnels récurrents.',
    icon: 'Cpu',
    capabilities: [
      {
        title: 'Maintenance Corrective & Préventive',
        description: 'Surveillance proactive pour corriger les anomalies avant qu’elles n’impactent vos utilisateurs.',
        items: ['Mise à jour régulière des dépendances et correctifs de sécurité', 'Surveillance des journaux d’erreurs (Error tracking)', 'Optimisation continue des requêtes lentes', 'Sauvegardes automatisées quotidiennes']
      },
      {
        title: 'Support Technique Réactif & SLA',
        description: 'Une équipe dédiée engagée sur des délais de réponse et de rétablissement précis.',
        items: ['Canal d’astreinte prioritaire pour incidents majeurs', 'Garantie de prise en charge sous engagement de niveau de service (SLA)', 'Rapports d’incident post-mortem transparents']
      },
      {
        title: 'Automatisation des Opérations Numériques',
        description: 'Connexion de vos outils d’entreprise pour éliminer la ressaisie manuelle.',
        items: ['Synchronisation ERP, comptabilité et CRM', 'Génération automatique de factures et bons de commande', 'Notifications et alertes d’équipe automatisées']
      },
      {
        title: 'Évolution Continue & Nouvelles Fonctionnalités',
        description: 'Intégration régulière d’améliorations guidées par les retours de vos utilisateurs finaux.',
        items: ['Itérations de sprints bimensuels', 'Amélioration continue de l’UX', 'Adaptation aux évolutions réglementaires et techniques']
      }
    ],
    technologies: ['Monitoring (Sentry, Prometheus)', 'Cron & Webhooks', 'Automations (Zapier, n8n, Custom APIs)', 'Grafana'],
    deliverables: [
      'Rapport mensuel d’activité et de performance',
      'Tableau de suivi des incidents et tickets résolus',
      'Journal des mises à jour applicatives et sécuritaires',
      'Recommandations trimestrielles d’optimisation'
    ],
    businessValue: 'Sérénité opérationnelle absolue, prolongation de la durée de vie de vos systèmes et évolution continue sans surcoût imprévu.'
  }
];

export const ECONOMIC_MODEL = {
  pillars: [
    {
      type: 'SERVICES',
      title: 'Services d’Ingénierie Sur-Mesure',
      subtitle: 'Conception, développement, audits et intégration technique',
      description: 'Missions d’ingénierie logicielle, d’audits de sécurité autorisés, de conception de plateformes web/mobiles et d’intégration IA pour entreprises et institutions.',
      characteristics: ['Cahier des charges rigoureux', 'Jalons précis et livrables clairs', 'Qualité garantie et code audité']
    },
    {
      type: 'PRODUITS',
      title: 'Produits Numériques Propriétaires',
      subtitle: 'Solutions SaaS et outils internes valorisés',
      description: 'Développement et exploitation de nos propres plateformes logicielles (SaaS, outils pour développeurs, plateformes sectorielles) créées pour résoudre des problèmes concrets.',
      characteristics: ['Propriété intellectuelle maîtrisée', 'Modèle scalable sans friction', 'Amélioration continue par l’usage']
    },
    {
      type: 'REVENUS RÉCURRENTS',
      title: 'Revenus Récurrents & Accompagnement',
      subtitle: 'Abonnements, maintenance continue et support SLA',
      description: 'Génération de flux récurrents garantissant la stabilité financière et la pérennité de notre modèle à travers des contrats de maintenance, d’infogérance et d’abonnements SaaS.',
      characteristics: ['Garantie de disponibilité et support réactif', 'Mises à jour sécuritaires proactives', 'Partenariat long terme à forte valeur']
    }
  ]
};
