import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'structuration-equipe-tech-2026',
    slug: 'structuration-equipe-tech-2026',
    title: 'De collectif étudiant à entreprise technologique structurée : les enseignements de notre réorganisation',
    category: 'Company',
    date: 'Février 2026',
    readTime: '6 min de lecture',
    excerpt: 'Comment nous sommes passés d’une équipe informelle organisée autour de projets ponctuels à une organisation de 11 collaborateurs avec gouvernance, fiches de poste et processus explicites.',
    author: 'FOLARIN Mourchid',
    authorRole: 'Directeur Général & Co-fondateur',
    content: [
      'Dans les premières phases d’une aventure technologique, l’enthousiasme et la spontanéité suffisent à lancer des prototypes. Mais dès lors que l’on s’engage sur des systèmes critiques et des contrats d’entreprise, l’absence de structure devient le premier goulot d’étranglement.',
      'Notre réorganisation 2026 a clarifié trois principes fondamentaux : la distinction entre gouvernance stratégique (les six cofondateurs) et exécution quotidienne ; la mise en place de fiches de fonction avec des livrables mesurables ; et l’intégration ciblée de compétences complémentaires.',
      'Le résultat n’est pas une bureaucratie pesante, mais un cadre sécurisant : chacun sait exactement à qui il rend compte, avec qui il collabore et comment les décisions sont arbitrées. La rigueur organisationnelle est le premier facteur d’accélération technique.'
    ]
  },
  {
    id: 'architecture-ast-vectorisation-codetovecto',
    slug: 'architecture-ast-vectorisation-codetovecto',
    title: 'Analyse statique et vectorisation de code source : les coulisses techniques de Codetovecto',
    category: 'Engineering',
    date: 'Janvier 2026',
    readTime: '8 min de lecture',
    excerpt: 'Plongée dans la conception de notre moteur de transformation de code source en représentations graphiques vectorielles SVG via Abstract Syntax Trees (AST).',
    author: 'BAHOUN Octave',
    authorRole: 'Directeur Technique & Co-fondateur',
    content: [
      'Documenter une architecture logicielle est souvent une corvée que les équipes délaissent au fil des sprints. Avec Codetovecto, notre objectif était de supprimer l’écart entre le code exécuté et le schéma théorique.',
      'Nous avons combiné un parseur statique d’AST multi-langages avec un algorithme de disposition géométrique calculant les forces d’attraction entre modules et dépendances. L’enjeu majeur était la latence : produire un SVG vectoriel interactif en moins de 150 millisecondes directement dans le navigateur.',
      'L’utilisation de modules compilés en WebAssembly nous a permis d’atteindre ces performances sans saturer les ressources du navigateur client.'
    ]
  },
  {
    id: 'cybersecurite-audits-autorises-afrique',
    slug: 'cybersecurite-audits-autorises-afrique',
    title: 'Audits de sécurité et pentesting autorisé : pourquoi la sécurité doit être pensée dès l’architecture',
    category: 'Cybersecurity',
    date: 'Décembre 2025',
    readTime: '7 min de lecture',
    excerpt: 'Retour d’expérience sur les vulnérabilités les plus fréquentes observées lors de nos audits applicatifs et les règles de base pour durcir une plateforme web.',
    author: 'MISSIPKODE Cosme',
    authorRole: 'Directeur Administratif & Co-fondateur',
    content: [
      'La transformation digitale accélérée des organisations africaines s’accompagne d’une hausse exponentielle des tentatives d’intrusion ciblées. Trop souvent, la sécurité est envisagée comme un pansement appliqué la veille de la mise en ligne.',
      'Lors de nos évaluations de sécurité autorisées, plus de 80% des failles critiques résultent d’erreurs de conception fondamentales : contrôles d’accès incomplets (Broken Access Control), exposition involontaire de secrets dans les bundles front-end et absence de validation stricte des entrées sur les APIs.',
      'Adopter une approche DevSecOps dès la première phase d’exploration technique permet de corriger ces vulnérabilités à un coût dix fois inférieur à une remédiation en urgence après incident.'
    ]
  },
  {
    id: 'videogen-v2-pipeline-ffmpeg-cloud',
    slug: 'videogen-v2-pipeline-ffmpeg-cloud',
    title: 'Pipeline vidéo automatisé à grande échelle : comment VideoGen v2 compose et restitue des scènes dynamiques',
    category: 'AI & Data',
    date: 'Novembre 2025',
    readTime: '5 min de lecture',
    excerpt: 'Comment orchestrer FFmpeg, des voix neuronales et des calques graphiques pour générer des dizaines de variations vidéo prêtes pour le mobile en quelques minutes.',
    author: 'VIGNONFODO Jean-Baptiste',
    authorRole: 'Directeur Projets & Opérations & Co-fondateur',
    content: [
      'La génération vidéo dynamique pose deux défis : la consommation CPU lors du rendu et la synchronisation millimétrée entre audio, sous-titres et éléments animés.',
      'Avec VideoGen v2, nous avons découpé le flux en micro-tâches indépendantes orchestrées dans des conteneurs Docker éphémères. Chaque scène est composée en mémoire avant d’être assemblée dans le conteneur final, permettant un parallélisme complet.',
      'Ce retour d’expérience confirme la force d’une architecture découplée pour traiter des charges multimédias lourdes avec des coûts d’infrastructure maîtrisés.'
    ]
  }
];
