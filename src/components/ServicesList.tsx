
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Droplets, 
  Flame, 
  Thermometer, 
  Sprout, 
  PaintBucket, 
  Construction, 
  Waves,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'reparation-toiture',
    title: 'Réparation toiture',
    description: 'Réparation de tous types de toiture, remplacement de tuiles et ardoises, traitement de charpente.',
    icon: Home,
    path: '/services/reparation-toiture',
    image: '/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png'
  },
  {
    id: 'gouttieres',
    title: 'Gouttières',
    description: 'Installation, réparation et nettoyage de gouttières pour une évacuation optimale des eaux.',
    icon: Droplets,
    path: '/services/gouttieres',
    image: '/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png'
  },
  {
    id: 'ramonage',
    title: 'Ramonage',
    description: 'Ramonage de cheminée et conduits pour assurer votre sécurité et le bon fonctionnement de votre installation.',
    icon: Flame,
    path: '/services/ramonage',
    image: '/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png'
  },
  {
    id: 'isolation',
    title: 'Isolation',
    description: 'Solutions d\'isolation pour toiture et combles pour améliorer l\'efficacité énergétique de votre habitat.',
    icon: Thermometer,
    path: '/services/isolation',
    image: '/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png'
  },
  {
    id: 'demoussage',
    title: 'Démoussage de toiture',
    description: 'Traitement et nettoyage des mousses, lichens et végétaux sur votre toiture pour prolonger sa durée de vie.',
    icon: Waves,
    path: '/services/demoussage',
    image: '/lovable-uploads/58635cf1-45b9-4635-9395-f2d2f6bba8c8.png'
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage',
    description: 'Services de nettoyage pour gouttières, façades, dallages, murets, piscines et bardages.',
    icon: Droplets,
    path: '/services/nettoyage',
    image: '/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png'
  },
  {
    id: 'espaces-verts',
    title: 'Entretien espaces verts',
    description: 'Entretien complet de vos espaces verts, taille de haies et aménagement extérieur.',
    icon: Sprout,
    path: '/services/espaces-verts',
    image: '/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png'
  },
  {
    id: 'travaux-exterieur',
    title: 'Travaux extérieur',
    description: 'Menuiserie, dallage, carrelage et rénovation de façade pour l\'extérieur de votre maison.',
    icon: Construction,
    path: '/services/travaux-exterieur',
    image: '/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png'
  },
  {
    id: 'peinture',
    title: 'Peinture',
    description: 'Travaux de peinture intérieure et extérieure pour rafraîchir et embellir votre habitation.',
    icon: PaintBucket,
    path: '/services/peinture',
    image: '/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png'
  }
];

interface ServicesListProps {
  limit?: number;
  showAll?: boolean;
}

const ServicesList: React.FC<ServicesListProps> = ({ limit = 6, showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, limit);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedServices.map((service) => (
        <div key={service.id} className="service-card group">
          <div className="flex items-start mb-4">
            <div className="bg-nico-blue p-3 rounded-lg text-white mr-4">
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          </div>
          
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <Link 
            to={service.path}
            className="inline-flex items-center text-nico-blue font-medium hover:text-nico-red transition-colors"
          >
            En savoir plus
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
