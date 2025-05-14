
interface CityData {
  name: string;
  neighbors: string[];
  content: string;
  slug: string;
}

// Generate unique content for each city
const generateCityContent = (city: string, neighbors: string[]): string => {
  const contentVariations = [
    `À ${city} et dans les communes environnantes comme ${neighbors[0]} et ${neighbors[1]}, Nico Rénovation est votre artisan couvreur de confiance. Notre équipe intervient pour tous vos travaux de toiture, ramonage et entretien extérieur, avec un savoir-faire reconnu dans toute la région.`,
    
    `Nico Rénovation propose ses services de couvreur professionnel à ${city} et ses environs. Spécialiste en réparation de toiture, nettoyage de façade et ramonage, nous intervenons rapidement pour tous vos besoins d'entretien et de rénovation.`,
    
    `Besoin d'un artisan qualifié pour l'entretien de votre extérieur à ${city} ? Nico Rénovation assure des prestations complètes incluant taille de haie, élagage, traitement de toiture et travaux de peinture, avec une qualité irréprochable.`,
    
    `Pour vos travaux de couverture, d'isolation ou de ramonage à ${city}, faites confiance à Nico Rénovation. Notre équipe intervient également pour le nettoyage de toiture et l'entretien de vos espaces verts dans toutes les communes voisines.`,
    
    `À ${city} comme à ${neighbors[2]}, Nico Rénovation est votre partenaire pour tous vos travaux d'extérieur. Du nettoyage de gouttières à la taille de haie, en passant par l'élagage et le démoussage de toiture, nous vous garantissons un travail soigné.`,
    
    `Nico Rénovation est l'artisan multi-services de référence à ${city}. Spécialistes en rénovation de toiture, ramonage de cheminée et entretien d'espaces verts, nous intervenons dans toute la région avec un même niveau d'exigence.`
  ];
  
  // Select a random content variation to ensure uniqueness
  const randomIndex = Math.floor(Math.random() * contentVariations.length);
  return contentVariations[randomIndex];
};

// Function to create slug from city name
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[-\s]+/g, '-').replace(/[^\w-]/g, '');
};

// Define city data with relationships
export const citiesData: CityData[] = [
  {
    name: "Châteaubriant",
    neighbors: ["Erbray", "Rougé", "Saint-Aubin-des-Châteaux", "Soudan", "Moisdon-la-Rivière", "Louisfert"],
    content: "",
    slug: "chateaubriant"
  },
  {
    name: "Erbray",
    neighbors: ["Châteaubriant", "Petit-Auverné", "Grand-Auverné", "Saint-Julien-de-Vouvantes", "Soudan", "La Chapelle-Glain"],
    content: "",
    slug: "erbray"
  },
  {
    name: "Soudan",
    neighbors: ["Châteaubriant", "Erbray", "Juigné-des-Moutiers", "Saint-Julien-de-Vouvantes", "Rougé", "Noyal-sur-Brutz"],
    content: "",
    slug: "soudan"
  },
  {
    name: "Saint-Aubin-des-Châteaux",
    neighbors: ["Châteaubriant", "Ruffigné", "Derval", "Jans", "Sion-les-Mines", "Louisfert"],
    content: "",
    slug: "saint-aubin-des-chateaux"
  },
  {
    name: "Rougé",
    neighbors: ["Châteaubriant", "Soudan", "Erbray", "Noyal-sur-Brutz", "Fercé", "Saint-Julien-de-Vouvantes"],
    content: "",
    slug: "rouge"
  },
  {
    name: "Sion-les-Mines",
    neighbors: ["Derval", "Saint-Aubin-des-Châteaux", "Ruffigné", "Jans", "Nozay", "Treffieux"],
    content: "",
    slug: "sion-les-mines"
  },
  {
    name: "Lusanger",
    neighbors: ["Derval", "Moisdon-la-Rivière", "Sion-les-Mines", "Saint-Vincent-des-Landes", "Issé", "Jans"],
    content: "",
    slug: "lusanger"
  },
  {
    name: "Derval",
    neighbors: ["Lusanger", "Sion-les-Mines", "Saint-Vincent-des-Landes", "Ruffigné", "Saint-Aubin-des-Châteaux", "Issé"],
    content: "",
    slug: "derval"
  },
  {
    name: "Issé",
    neighbors: ["Derval", "Lusanger", "Moisdon-la-Rivière", "Grand-Auverné", "Petit-Auverné", "Châteaubriant"],
    content: "",
    slug: "isse"
  },
  {
    name: "Moisdon-la-Rivière",
    neighbors: ["Issé", "Châteaubriant", "Grand-Auverné", "Petit-Auverné", "Louisfert", "Lusanger"],
    content: "",
    slug: "moisdon-la-riviere"
  },
  {
    name: "Grand-Auverné",
    neighbors: ["Petit-Auverné", "Moisdon-la-Rivière", "Issé", "Erbray", "La Chapelle-Glain", "Saint-Julien-de-Vouvantes"],
    content: "",
    slug: "grand-auverne"
  },
  {
    name: "Petit-Auverné",
    neighbors: ["Grand-Auverné", "Moisdon-la-Rivière", "Erbray", "Issé", "La Chapelle-Glain", "Saint-Julien-de-Vouvantes"],
    content: "",
    slug: "petit-auverne"
  },
  {
    name: "Saint-Julien-de-Vouvantes",
    neighbors: ["Petit-Auverné", "Grand-Auverné", "Erbray", "Soudan", "Rougé", "La Chapelle-Glain"],
    content: "",
    slug: "saint-julien-de-vouvantes"
  },
  {
    name: "Juigné-des-Moutiers",
    neighbors: ["La Meilleraye-de-Bretagne", "Soudan", "Saint-Julien-de-Vouvantes", "Abbaretz", "Petit-Auverné", "Noyal-sur-Brutz"],
    content: "",
    slug: "juigne-des-moutiers"
  },
  {
    name: "La Meilleraye-de-Bretagne",
    neighbors: ["Juigné-des-Moutiers", "Abbaretz", "Petit-Auverné", "Issé", "Grand-Auverné", "Moisdon-la-Rivière"],
    content: "",
    slug: "la-meilleraye-de-bretagne"
  },
  {
    name: "Louisfert",
    neighbors: ["Châteaubriant", "Moisdon-la-Rivière", "Saint-Aubin-des-Châteaux", "Ruffigné", "Jans", "Treffieux"],
    content: "",
    slug: "louisfert"
  },
  {
    name: "Noyal-sur-Brutz",
    neighbors: ["Soudan", "Rougé", "Fercé", "Juigné-des-Moutiers", "Châteaubriant", "Saint-Julien-de-Vouvantes"],
    content: "",
    slug: "noyal-sur-brutz"
  },
  {
    name: "Fercé",
    neighbors: ["Rougé", "Noyal-sur-Brutz", "Abbaretz", "Puceul", "Saint-Vincent-des-Landes", "Marsac-sur-Don"],
    content: "",
    slug: "ferce"
  },
  {
    name: "Ruffigné",
    neighbors: ["Saint-Aubin-des-Châteaux", "Sion-les-Mines", "Derval", "Saint-Vincent-des-Landes", "Louisfert", "Jans"],
    content: "",
    slug: "ruffigne"
  },
  {
    name: "Saint-Vincent-des-Landes",
    neighbors: ["Derval", "Marsac-sur-Don", "Ruffigné", "Jans", "Nozay", "Fercé"],
    content: "",
    slug: "saint-vincent-des-landes"
  },
  {
    name: "Marsac-sur-Don",
    neighbors: ["Saint-Vincent-des-Landes", "Nozay", "Abbaretz", "Puceul", "Fercé", "Treffieux"],
    content: "",
    slug: "marsac-sur-don"
  },
  {
    name: "Treffieux",
    neighbors: ["Jans", "Louisfert", "Marsac-sur-Don", "Nozay", "Puceul", "Saint-Vincent-des-Landes"],
    content: "",
    slug: "treffieux"
  },
  {
    name: "Jans",
    neighbors: ["Treffieux", "Nozay", "Saint-Aubin-des-Châteaux", "Sion-les-Mines", "Louisfert", "Ruffigné"],
    content: "",
    slug: "jans"
  },
  {
    name: "Nozay",
    neighbors: ["Marsac-sur-Don", "Jans", "Puceul", "Treffieux", "Saint-Vincent-des-Landes", "Abbaretz"],
    content: "",
    slug: "nozay"
  },
  {
    name: "Vay",
    neighbors: ["Nozay", "Puceul", "Jans", "Treffieux", "Abbaretz", "La Meilleraye-de-Bretagne"],
    content: "",
    slug: "vay"
  },
  {
    name: "Puceul",
    neighbors: ["Nozay", "Marsac-sur-Don", "Vay", "Abbaretz", "Fercé", "Jans"],
    content: "",
    slug: "puceul"
  },
  {
    name: "Abbaretz",
    neighbors: ["Nozay", "Puceul", "Marsac-sur-Don", "Juigné-des-Moutiers", "Fercé", "Vay"],
    content: "",
    slug: "abbaretz"
  },
  {
    name: "La Chapelle-Glain",
    neighbors: ["Erbray", "Grand-Auverné", "Saint-Julien-de-Vouvantes", "Petit-Auverné", "Juigné-des-Moutiers", "Moisdon-la-Rivière"],
    content: "",
    slug: "la-chapelle-glain"
  }
];

// Update each city with unique content
export const cities = citiesData.map(city => ({
  ...city,
  content: generateCityContent(city.name, city.neighbors)
}));

// Function to get city data by slug
export const getCityBySlug = (slug: string) => {
  return cities.find(city => city.slug === slug);
};
