import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  // 6 COFONDATEURS / DIRECTION
  {
    id: 'mourchid-folarin',
    name: 'FOLARIN Mourchid',
    role: 'Directeur Général & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Direction',
    competencies: ['Backend Development', 'Cybersécurité', 'Architecture Système', 'Stratégie Technologique'],
    mainMission: 'Porter la vision, coordonner les directions, assurer l’exécution de la stratégie et représenter l’entreprise auprès des partenaires stratégiques.',
    responsibilities: [
      'Définir les priorités stratégiques avec les cofondateurs',
      'Coordonner les différentes directions fonctionnelles',
      'Arbitrer les arbitrages opérationnels majeurs',
      'Superviser la croissance, la viabilité et les partenariats stratégiques',
      'Veiller au respect des processus et à la qualité globale de l’exécution'
    ],
    decisionScope: 'Décide dans le périmètre exécutif quotidien. Les décisions stratégiques réservées aux six cofondateurs restent collégiales.',
    expectedDeliverables: [
      'Tableau de bord stratégique global',
      'Croissance du chiffre d’affaires et viabilité',
      'Suivi du volume des projets livrés',
      'Indicateurs de satisfaction client',
      'Partenariats et opportunités technologiques'
    ],
    bio: 'Architecte backend et spécialiste en cybersécurité, Mourchid guide le développement d’Excellence Team vers une institution technologique de référence pour l’Afrique francophone.',
    reportingTo: 'Les six cofondateurs collégialement'
  },
  {
    id: 'octave-bahoun',
    name: 'BAHOUN Octave',
    role: 'Directeur Technique & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Technique',
    competencies: ['Data Analysis', 'Front-end Development', 'Architecture Logicielle', 'Code Standards'],
    mainMission: 'Piloter la qualité, la cohérence technique et l’évolution logicielle continue de l’ensemble des solutions développées par Excellence Team.',
    responsibilities: [
      'Définir et valider les architectures techniques des projets',
      'Superviser les standards et pratiques de développement',
      'Définir les règles de code, de revue (code reviews) et de qualité',
      'Participer au choix des technologies et frameworks',
      'Coordonner les développeurs sur les décisions architecturales',
      'Assurer une veille technologique active et proposer des modernisations'
    ],
    decisionScope: 'Décide des choix techniques courants dans son périmètre en coordination avec le responsable projet.',
    expectedDeliverables: [
      'Qualité technique et standards de code',
      'Contrôle et réduction des bugs critiques',
      'Respect des délais techniques de développement',
      'Revues de code rigoureuses et documentation'
    ],
    bio: 'Expert en analyse de données et développement front-end moderne, Octave garantit la rigueur d’ingénierie, la fluidité des interfaces et la cohérence de la stack technologique.',
    reportingTo: 'Directeur Général'
  },
  {
    id: 'cosme-missipkode',
    name: 'MISSIPKODE Cosme',
    role: 'Directeur Administratif & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Administration',
    competencies: ['Backend Development', 'Pentesting', 'Gouvernance Documentaire', 'Sécurité des Systèmes'],
    mainMission: 'Structurer l’administration interne, garantir la traçabilité documentaire et contribuer aux missions techniques de pentesting et sécurité.',
    responsibilities: [
      'Organiser et sécuriser les documents administratifs et contractuels',
      'Suivre les contrats, dépenses, justificatifs et documents internes',
      'Préparer les synthèses administratives et de gestion',
      'Participer à la mise en place et au respect des procédures internes',
      'Contribuer aux sujets techniques de pentesting lorsque mobilisé sur un projet'
    ],
    decisionScope: 'Valide les opérations administratives de son périmètre, dans le cadre des règles et budgets approuvés.',
    expectedDeliverables: [
      'Base documentaire et contrats à jour',
      'Suivi rigoureux des dépenses et engagements',
      'Archivage sécurisé des livrables contractuels',
      'Rapports d’audit pentesting sur missions dédiées'
    ],
    bio: 'Alliant maîtrise backend, audit d’intrusion (pentesting) et rigueur administrative, Cosme veille à la solidité organisationnelle et à l’intégrité contractuelle d’Excellence Team.',
    reportingTo: 'Directeur Général & Cofondateurs'
  },
  {
    id: 'jean-baptiste-vignonfodo',
    name: 'VIGNONFODO Jean-Baptiste',
    role: 'Directeur Projets & Opérations & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Projets & Opérations',
    competencies: ['Backend Development', 'Cybersécurité', 'Gestion Agile', 'Gestion des Risques'],
    mainMission: 'Transformer les contrats et besoins validés en projets précisément planifiés, rigoureusement suivis et livrés dans le respect des délais et spécifications.',
    responsibilities: [
      'Planifier les projets et définir les jalons clés',
      'Affecter les ressources opérationnelles adéquates',
      'Coordonner les équipes projets multidisciplinaires',
      'Identifier proactivement les risques, dérives et blocages',
      'Suivre les délais et l’exigence de qualité d’exécution',
      'Faire remonter les alertes critiques à la Direction Générale'
    ],
    decisionScope: 'Décide de l’organisation opérationnelle des projets dans le cadre du budget et du cahier des charges validés.',
    expectedDeliverables: [
      'Taux de livraison des projets dans les délais',
      'Suivi en temps réel du taux d’avancement des jalons',
      'Résolution rapide des blocages opérationnels',
      'Respect scrupuleux du périmètre fonctionnel'
    ],
    bio: 'Ingénieur backend passionné de cybersécurité opérationnelle, Jean-Baptiste orchestre le delivery technique avec une discipline militaire garantissant fiabilité et respect des engagements.',
    reportingTo: 'Directeur Général'
  },
  {
    id: 'wasfade-tonoukoin',
    name: 'TONOUKOIN Wasfade',
    role: 'Directeur Commercial & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Commercial',
    competencies: ['Full-stack Web', 'Mobile Development', 'Prospection B2B', 'Négociation Technique'],
    mainMission: 'Développer le portefeuille clients d’Excellence Team et transformer les opportunités d’affaires en contrats à forte valeur ajoutée.',
    responsibilities: [
      'Organiser la prospection auprès d’entreprises et institutions',
      'Qualifier les prospects et comprendre leurs enjeux business réels',
      'Élaborer des propositions commerciales avec les fonctions techniques',
      'Conduire les négociations dans les limites approuvées',
      'Assurer le suivi relationnel et la fidélisation des partenaires'
    ],
    decisionScope: 'Pilote la relation commerciale dans les limites des offres et politiques approuvées.',
    expectedDeliverables: [
      'Pipeline de prospects qualifiés',
      'Propositions commerciales et devis formalisés',
      'Taux de conversion et volume d’affaires contractualisé',
      'Indicateurs de satisfaction et récurrence client'
    ],
    bio: 'Développeur full-stack et mobile doublé d’une fibre commerciale stratégique, Wasfade sait traduire des problématiques métiers complexes en solutions technologiques rentables.',
    reportingTo: 'Directeur Général'
  },
  {
    id: 'ezechiel-tadagbe',
    name: 'TADAGBE Ezéchiel',
    role: 'Directeur Marketing & Co-fondateur',
    isFounder: true,
    status: 'Cofondateur',
    department: 'Marketing',
    competencies: ['Motion Design', 'Front-end Development', 'Brand Identity', 'Création de Contenu'],
    mainMission: 'Développer la visibilité, l’image de marque de premier plan et l’acquisition marketing d’Excellence Team à travers une identité distinctive.',
    responsibilities: [
      'Définir le calendrier éditorial et marketing',
      'Superviser l’identité et la cohérence visuelle de la marque',
      'Coordonner la création de contenus interactifs et motion design',
      'Développer la présence et l’influence digitale de l’entreprise',
      'Appuyer la Direction Commerciale dans la génération de leads qualifiés',
      'Mesurer l’impact et les performances des canaux de communication'
    ],
    decisionScope: 'Décide de l’exécution marketing courante dans les budgets et orientations approuvés.',
    expectedDeliverables: [
      'Portée et notoriété de la marque Excellence Team',
      'Cohérence visuelle irréprochable sur tous les supports',
      'Production de supports motion et interactifs haut de gamme',
      'Volume et qualification des leads entrants'
    ],
    bio: 'Créatif visuel et développeur front-end, Ezéchiel façonne l’univers esthétique d’Excellence Team, mêlant précision d’ingénierie, motion design et énergie africaine contemporaine.',
    reportingTo: 'Directeur Général'
  },

  // 5 MEMBRES RECRUTÉS
  {
    id: 'merveille-gandji',
    name: 'GANDJI Merveille',
    role: 'Cybersecurity Specialist & Client Relations Support',
    isFounder: false,
    status: 'Membre recruté',
    department: 'Technique',
    competencies: ['Cybersécurité', 'Communication Technique Client', 'Analyse de Vulnérabilités', 'Sécurité Réseau'],
    mainMission: 'Apporter une expertise en cybersécurité et participer aux échanges clients lorsque des compétences de vulgarisation ou d’évaluation sécuritaire sont requises.',
    responsibilities: [
      'Participer aux audits et évaluations de sécurité autorisés',
      'Analyser les vulnérabilités applicatives et systèmes',
      'Contribuer à la rédaction des rapports techniques sécuritaires',
      'Participer aux réunions clients techniques pour vulgariser les enjeux de sécurité',
      'Veiller au respect rigoureux des procédures d’accès'
    ],
    decisionScope: 'Apporte son expertise technique ; ne prend pas seule d’engagement contractuel ou commercial au nom de l’entreprise.',
    expectedDeliverables: [
      'Qualité et clarté des livrables de sécurité',
      'Rapports d’audit remis dans les délais impartis',
      'Sensibilisation et support technique auprès des clients'
    ],
    bio: 'Spécialiste en sécurité offensive et défensive, Merveille excelle dans la détection des failles critiques et l’accompagnement pédagogique des équipes clientes.',
    reportingTo: 'Direction Technique & Direction Projets'
  },
  {
    id: 'yannick-prince',
    name: 'Yannick Prince',
    role: 'Community Manager',
    isFounder: false,
    status: 'Membre recruté',
    department: 'Marketing',
    competencies: ['Community Management', 'Veille Réseaux Sociaux', 'Modération', 'Storytelling Digital'],
    mainMission: 'Développer, animer et engager les communautés numériques d’Excellence Team sur l’ensemble des plateformes professionnelles.',
    responsibilities: [
      'Planifier les calendriers de publication sur les réseaux sociaux',
      'Rédiger, publier et modérer les contenus de marque',
      'Répondre avec réactivité et professionnalisme aux interactions',
      'Effectuer une veille constante des plateformes et tendances tech',
      'Collaborer étroitement avec le Directeur Marketing sur les campagnes'
    ],
    decisionScope: 'Décide de l’exécution quotidienne des publications dans le cadre de la stratégie validée.',
    expectedDeliverables: [
      'Régularité des publications et calendrier éditorial',
      'Taux d’engagement et croissance des communautés',
      'Leads et contacts générés via les réseaux sociaux'
    ],
    bio: 'Passionné d’écosystèmes tech et de storytelling numérique, Yannick fait rayonner la culture d’ingénierie et les accomplissements d’Excellence Team auprès des décideurs.',
    reportingTo: 'Direction Marketing'
  },
  {
    id: 'rosaire-kakpo',
    name: 'KAKPO Rosaire',
    role: 'Full-stack Developer & Business Development Support',
    isFounder: false,
    status: 'Membre recruté',
    department: 'Technique',
    competencies: ['Full-stack Web', 'Architecture API', 'Prospection Technique', 'Démonstrations Produit'],
    mainMission: 'Développer des solutions web robustes et apporter un soutien actif à la prospection commerciale lorsqu’une expertise technique pointue est nécessaire.',
    responsibilities: [
      'Développer le frontend et le backend des solutions logicielles',
      'Concevoir et intégrer des APIs sécurisées et performantes',
      'Corriger les anomalies et maintenir les applications en production',
      'Participer aux démonstrations techniques auprès des prospects',
      'Identifier et remonter les opportunités commerciales détectées'
    ],
    decisionScope: 'Décide des aspects techniques de ses tâches assignées selon les standards de la Direction Technique.',
    expectedDeliverables: [
      'Modules et fonctionnalités livrés dans les délais',
      'Qualité du code respectant les standards de l’entreprise',
      'Opportunités commerciales transmises à la Direction Commerciale'
    ],
    bio: 'Développeur polyvalent et pragmatique, Rosaire allie rigueur de développement Full-stack et capacité à dialoguer avec des interlocuteurs métiers pour transformer des besoins en code propre.',
    reportingTo: 'Direction Technique (production) & Commerciale (prospection)'
  },
  {
    id: 'prince',
    name: 'Prince',
    role: 'Full-stack Developer & Project Control Officer',
    isFounder: false,
    status: 'Membre recruté',
    department: 'Projets & Opérations',
    competencies: ['Full-stack Web', 'Contrôle de Projets', 'Suivi des Jalons', 'Assurance Qualité'],
    mainMission: 'Produire des modules web performants et contrôler méthodiquement l’avancement et la conformité des projets en cours.',
    responsibilities: [
      'Développer les composantes frontend et backend assignées',
      'Suivre quotidiennement l’état des tâches et le respect des jalons',
      'Comparer l’avancement réel avec le planning prévisionnel',
      'Détecter immédiatement les retards potentiels et blocages techniques',
      'Préparer les remontées de contrôle et participer à la vérification des livrables'
    ],
    decisionScope: 'Rôle de contrôle opérationnel et d’alerte ; ne remplace pas le Directeur Projets dans les arbitrages.',
    expectedDeliverables: [
      'Rapports d’avancement hebdomadaires et détection des écarts',
      'Contrôle qualité des livrables avant validation',
      'Code propre et respect des conventions'
    ],
    bio: 'À la croisée du développement full-stack et du project controlling, Prince assure le suivi millimétré des sprints et la livraison fidèle des spécifications.',
    reportingTo: 'Direction Projets (contrôle) & Direction Technique (code)'
  },
  {
    id: 'ahmad-ouorou',
    name: 'OUOROU Ahmad',
    role: 'Full-stack Developer',
    isFounder: false,
    status: 'Membre recruté',
    department: 'Technique',
    competencies: ['Full-stack Web', 'TypeScript & Node.js', 'Bases de Données', 'Tests & Documentation'],
    mainMission: 'Développer, maintenir et optimiser continuellement les solutions numériques et plateformes d’Excellence Team.',
    responsibilities: [
      'Développer les fonctionnalités frontend et backend selon les spécifications',
      'Participer aux revues de code entre pairs et aux suites de tests',
      'Corriger les anomalies et optimiser les temps de réponse',
      'Documenter minutieusement les APIs et composants développés',
      'Collaborer étroitement avec les autres ingénieurs et le responsable projet'
    ],
    decisionScope: 'Décide des détails d’implémentation de ses tâches selon les standards de la Direction Technique.',
    expectedDeliverables: [
      'Fonctionnalités livrées conformes aux spécifications',
      'Respect strict des délais et standards de code',
      'Documentation technique claire et pérenne'
    ],
    bio: 'Ingénieur full-stack focalisé sur la fiabilité logicielle, Ahmad conçoit des architectures logiques modulaires prêtes pour le passage à l’échelle.',
    reportingTo: 'Direction Technique (standards) & Direction Projets (planification)'
  }
];
