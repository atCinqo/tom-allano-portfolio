export interface Project {
  slug: string;
  title: string;
  category: 'Community' | 'Vidéo' | 'Design';
  client: string;
  year: string;
  cover: string;
  description: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    slug: 'campagne-ete-2024',
    title: 'Campagne Été 2024',
    category: 'Community',
    client: 'Club Sportif',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-c01/1200/800',
    description:
      "Stratégie de contenu complète sur 3 mois pour la campagne estivale d'un club sportif. Conception des visuels, calendrier éditorial et animation quotidienne des réseaux. Résultat : +40 % d'engagement, +800 abonnés.",
    tools: ['Instagram', 'Photoshop', 'Canva', 'Meta Ads'],
  },
  {
    slug: 'recap-tournoi',
    title: 'Récap Tournoi',
    category: 'Vidéo',
    client: 'Association Sportive',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-v01/1200/800',
    description:
      "Captation et montage du récapitulatif d'un tournoi régional. Tournage sur 2 jours, montage et diffusion en moins de 24h. Format optimisé pour Instagram Réels et TikTok.",
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
  },
  {
    slug: 'identite-visuelle',
    title: 'Identité Visuelle',
    category: 'Design',
    client: 'Marque Sportive',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-d01/1200/800',
    description:
      "Création d'une identité visuelle complète pour une marque sportive émergente : logo, charte graphique, templates réseaux sociaux et supports print. Déclinaison sur tous les formats.",
    tools: ['Illustrator', 'Photoshop', 'Figma'],
  },
  {
    slug: 'reels-evenement',
    title: 'Réels Événement',
    category: 'Vidéo',
    client: 'Gala Sportif',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-v02/1200/800',
    description:
      "Production de 8 Réels pour couvrir un gala sportif annuel. Format vertical, musique licenciée, sous-titres animés. 120 K vues cumulées en 72h.",
    tools: ['Premiere Pro', 'CapCut', 'After Effects'],
  },
  {
    slug: 'portraits-joueurs',
    title: 'Portraits Joueurs',
    category: 'Design',
    client: 'Club Football',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-d02/1200/800',
    description:
      "Série de 22 portraits graphiques pour valoriser les joueurs d'un club de football professionnel. Retraitement photo cohérent avec la charte graphique du club.",
    tools: ['Photoshop', 'Lightroom'],
  },
  {
    slug: 'growth-digital',
    title: 'Growth Digital',
    category: 'Community',
    client: 'Club Basket',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-c02/1200/800',
    description:
      "Stratégie de croissance digitale sur 6 mois : de 800 à 4 200 abonnés. Analyse data, optimisation des horaires de publication, création de formats viraux récurrents.",
    tools: ['Meta Business', 'Canva', 'Later', 'Notion'],
  },
  {
    slug: 'affiches-match',
    title: 'Affiches Match',
    category: 'Design',
    client: 'Club Rugby',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-d03/1200/800',
    description:
      "Suite de 15 affiches pour les matchs à domicile d'une saison complète. Design impactant décliné en format print A2/A3 et digital 1080×1080.",
    tools: ['Photoshop', 'Illustrator'],
  },
  {
    slug: 'film-saison',
    title: 'Film de Saison',
    category: 'Vidéo',
    client: 'Club Handball',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-v03/1200/800',
    description:
      "Film récapitulatif de la saison 2022-2023. 4 minutes de montage cinématique avec étalonnage couleur soigné et musique orchestrale licenciée.",
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
  },
  {
    slug: 'strategie-tiktok',
    title: 'Stratégie TikTok',
    category: 'Community',
    client: 'Club Volley',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-c03/1200/800',
    description:
      "Lancement et gestion du compte TikTok d'un club de volley. Création de formats originaux adaptés aux tendances. Résultat : 0 à 12 K abonnés en 4 mois.",
    tools: ['TikTok', 'CapCut', 'Canva'],
  },
];
