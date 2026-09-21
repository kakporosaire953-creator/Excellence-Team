import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    subtitle: 'Compréhension Approfondie du Besoin',
    description: 'Tout commence par l’écoute active et la clarification des objectifs métier. Nous analysons vos contraintes opérationnelles, vos utilisateurs finaux et vos critères de succès mesurables.',
    deliverables: ['Cadrage d’opportunité', 'Expression formelle des besoins', 'Définition des critères de succès']
  },
  {
    number: '02',
    title: 'EXPLORE',
    subtitle: 'Analyse Fonctionnelle & Technique',
    description: 'Nos directeurs technique et de projets évaluent les choix d’architecture, modélisent les flux de données et identifient en amont les risques technologiques ou sécuritaires.',
    deliverables: ['Dossier d’architecture préliminaire', 'Matrice d’évaluation des risques', 'Recommandations technologiques']
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Conception de la Solution & Spécifications',
    description: 'Création des spécifications détaillées, du modèle de données, des interfaces ergonomiques (UX/UI) et des protocoles d’échange d’APIs avant d’écrire la moindre ligne de code.',
    deliverables: ['Maquettes interactives et flux utilisateurs', 'Spécifications d’API et schémas de données', 'Plan de validation et découpage en jalons']
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Développement Structuré & Intégration Continue',
    description: 'Développement modulaire en sprints cadencés avec revues de code systématiques (peer reviews), typage strict en TypeScript et respect scrupuleux des conventions d’architecture.',
    deliverables: ['Code source propre, modulaire et versionné', 'Environnements de staging dédiés', 'Points d’avancement réguliers']
  },
  {
    number: '05',
    title: 'TEST & SECURE',
    subtitle: 'Contrôle Qualité & Audits de Sécurité',
    description: 'Avant toute mise en production, nos spécialistes en cybersécurité et nos contrôleurs de projet éprouvent la robustesse de la solution face aux vulnérabilités et aux anomalies.',
    deliverables: ['Tests fonctionnels et de montée en charge', 'Audit de sécurité applicatif', 'Validation formelle des critères d’acceptation']
  },
  {
    number: '06',
    title: 'DELIVER',
    subtitle: 'Livraison, Déploiement & Transition',
    description: 'Déploiement automatisé sur infrastructure de production avec bascule sans coupure, remise de la documentation complète et formation des équipes administratives ou techniques.',
    deliverables: ['Mise en production sécurisée', 'Documentation d’exploitation et d’utilisation', 'Sessions de transfert de compétences']
  },
  {
    number: '07',
    title: 'SUPPORT',
    subtitle: 'Maintenance, Monitoring & Évolution',
    description: 'Veille continue des performances, surveillance proactive des erreurs, mises à jour régulières de sécurité et accompagnement dans l’évolution progressive du produit.',
    deliverables: ['Contrat d’assistance et engagement SLA', 'Supervision et alertes 24/7', 'Feuille de route des évolutions futures']
  }
];
