import { ValueItem } from '../types';

export const BRAND = {
  name: 'EXCELLENCE TEAM',
  tagline: 'TECHNOLOGY BUILT WITH DISCIPLINE.',
  motto: 'Transformer les compétences en solutions, les solutions en valeur.',
  description: 'Excellence Team conçoit, développe, sécurise et déploie des solutions numériques répondant à des besoins réels.',
  vision: 'Devenir une entreprise technologique de référence au Bénin et progressivement en Afrique francophone, reconnue pour la qualité de ses solutions numériques, son professionnalisme et sa capacité d’innovation.',
  mission: [
    'Concevoir des solutions numériques répondant à des besoins réels',
    'Accompagner les entreprises et organisations dans leur transformation numérique',
    'Proposer des services professionnels en développement logiciel, cybersécurité, data et technologies connexes',
    'Développer progressivement des produits numériques et des revenus récurrents',
    'Créer un environnement permettant aux talents de progresser et de produire une valeur économique durable'
  ],
  stats: [
    { value: '11', label: 'Talents Dédiés', detail: '6 cofondateurs & 5 spécialistes' },
    { value: '12+', label: 'Systèmes & Produits', detail: 'Conçus, développés et maintenus' },
    { value: '05', label: 'Pôles d’Ingénierie', detail: 'Du développement web à la cybersécurité' },
    { value: '100%', label: 'Discipline d’Exécution', detail: 'Processus rigoureux en 7 étapes' }
  ],
  colors: {
    orange: '#FF4A16',
    black: '#0A0A0A',
    warmWhite: '#FAF8F6',
    lightGrey: '#F2F2F2',
    textGrey: '#656565'
  },
  contact: {
    email: 'contact@excellenceteam.site',
    phone: '+229 01 23 45 67 89',
    location: 'Cotonou, République du Bénin',
    workingHours: 'Lundi — Vendredi : 08h30 – 18h30 (GMT+1)',
    slaResponse: 'Réponse sous 24h ouvrées garantie',
    website: 'https://welcome.excellenceteam.site/'
  }
};

export const VALUES: ValueItem[] = [
  {
    name: 'Excellence',
    tagline: 'L’exigence de la précision',
    description: 'Chaque ligne de code, chaque schéma d’architecture et chaque interaction fait l’objet d’une attention méticuleuse. Nous refusons les raccourcis approximatifs.',
    iconName: 'Sparkles'
  },
  {
    name: 'Responsabilité',
    tagline: 'L’engagement de la parole tenue',
    description: 'Nous assumons l’entière responsabilité de nos engagements techniques et de nos livrables. Si un défi survient, nous le résolvons avec transparence.',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Innovation',
    tagline: 'L’audace technologique pragmatique',
    description: 'Innover pour nous ne consiste pas à suivre les modes, mais à concevoir des architectures élégantes et efficientes qui répondent à des problématiques concrètes.',
    iconName: 'TrendingUp'
  },
  {
    name: 'Esprit d’équipe',
    tagline: 'La force d’un collectif structuré',
    description: 'Onze talents complémentaires collaborant dans la confiance, l’entraide et le respect réciproque pour accomplir ensemble ce qu’aucun individu ne pourrait bâtir seul.',
    iconName: 'Users'
  },
  {
    name: 'Intégrité',
    tagline: 'L’éthique et la confidentialité absolue',
    description: 'Protection rigoureuse des données clients, transparence tarifaire totale et respect scrupuleux des règles déontologiques de l’ingénierie et de la cybersécurité.',
    iconName: 'Lock'
  },
  {
    name: 'Professionnalisme',
    tagline: 'La discipline comme standard d’action',
    description: 'Ponctualité, documentation méthodique, communication claire et respect des processus : le professionnalisme est la signature de chaque collaborateur.',
    iconName: 'Award'
  }
];

export const EVOLUTION_MILESTONES = [
  {
    year: '2024',
    phase: '01 / ORIGIN',
    title: 'La Genèse du Collectif',
    description: 'À Cotonou, des étudiants ingénieurs et développeurs passionnés se regroupent autour d’une obsession commune : élever le niveau d’exigence technique et concevoir des logiciels capables de rivaliser avec les standards internationaux.'
  },
  {
    year: '2024',
    phase: '02 / HACKATHONS & PROTO',
    title: 'Épreuve du Feu & Premiers Produits',
    description: 'Participation à des hackathons technologiques, nuits de développement intensif et conception de premiers projets pionniers (Codetovecto, To_fitune, NowStudy) validant la cohésion technique et l’esprit d’ingénierie du groupe.'
  },
  {
    year: '2025',
    phase: '03 / EXPANSION TECH',
    title: 'Cybersécurité, IA & Écosystème',
    description: 'Élargissement des compétences vers la sécurité offensive autorisée (pentesting), la conteneurisation cloud et l’ingénierie data. Développement d’outils SaaS propriétaires (VideoGen v2, ExcellenceLink) et de missions pour des organisations partenaires.'
  },
  {
    year: '2026',
    phase: '04 / STRUCTURATION',
    title: 'Le Tournant Institutionnel',
    description: 'Adoption formelle du Plan d’Organisation et de Gouvernance 2026. L’équipe s’organise en 11 membres (6 cofondateurs aux directions stratégiques et 5 spécialistes recrutés), dotée de processus opérationnels clairs et d’une nouvelle identité de marque validée.'
  },
  {
    year: '2026+',
    phase: '05 / HORIZON',
    title: 'Technology Company de Référence',
    description: 'Déploiement à grande échelle de services d’ingénierie logicielle, de cybersécurité et de solutions numériques à forte valeur ajoutée au Bénin puis à travers toute l’Afrique francophone.'
  }
];
