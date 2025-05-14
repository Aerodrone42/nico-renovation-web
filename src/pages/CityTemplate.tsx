
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABanner from '@/components/CTABanner';
import Portfolio from '@/components/Portfolio';

interface CityTemplateProps {
  city: string;
  neighboringCities: string[];
  content: string;
}

const CityTemplate: React.FC<CityTemplateProps> = ({ city, neighboringCities, content }) => {
  const services = [
    'Réparation toiture et gouttières',
    'Ramonage / Isolation',
    'Traitement toiture',
    'Nettoyage (gouttières, façade, dallage, bardage, murets, piscine)',
    'Entretien espaces verts',
    'Élagage / Débroussaillage',
    'Taille de haie',
    'Peinture intérieure et extérieure'
  ];

  // Portfolio items to display for each city
  const portfolioItems = [
    {
      id: 'roof-repair-1',
      imagePath: '/lovable-uploads/a4df8109-215e-4e31-b349-bd49dd06c510.png',
      title: 'Rénovation toiture ardoise',
      description: 'Réfection complète de toiture avec pose de fenêtres de toit'
    },
    {
      id: 'roof-repair-2',
      imagePath: '/lovable-uploads/dcf5c540-1674-4bc6-8404-dc17ff7f4ec6.png',
      title: 'Installation de charpente',
      description: 'Pose de structure en bois pour nouvelle toiture'
    },
    {
      id: 'masonry-1',
      imagePath: '/lovable-uploads/7ad3308f-4679-44b3-aa3d-541a08b1b7cb.png',
      title: 'Rénovation escalier',
      description: 'Création d\'un escalier en béton désactivé avec rampe'
    },
    {
      id: 'roofing-1',
      imagePath: '/lovable-uploads/7bfc0cf3-beba-4be7-ab14-00d7dfec5018.png',
      title: 'Couverture traditionnelle',
      description: 'Pose de liteaux bois et préparation de toiture traditionnelle'
    },
    {
      id: 'roofing-2',
      imagePath: '/lovable-uploads/0e56a828-32fb-4d31-8868-23973461781c.png',
      title: 'Ardoises naturelles',
      description: 'Finition de toiture en ardoises sur longère ancienne'
    },
    {
      id: 'chimney-1',
      imagePath: '/lovable-uploads/2fc0d9c6-f0f6-466a-a3fd-26622894e000.png',
      title: 'Conduit de cheminée',
      description: 'Entretien et nettoyage de conduit pour ramonage'
    },
    {
      id: 'chimney-2',
      imagePath: '/lovable-uploads/d5bf19c8-2947-4b05-a287-54f6d53b9fb3.png',
      title: 'Rénovation de souche',
      description: 'Réparation et enduit de souche de cheminée'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-nico-blue text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nico Rénovation à {city}</h1>
            <p className="text-lg text-blue-100">
              Votre artisan local pour tous vos travaux d'entretien et rénovation
            </p>
          </div>
        </div>
      </div>
      
      {/* City Content */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="section-title">Services à {city} et communes environnantes</h2>
                <div className="prose prose-lg max-w-none">
                  {/* Custom content for each city */}
                  <p>{content}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nos services à {city}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Zone d'intervention autour de {city}</h3>
                <p className="text-gray-600 mb-4">
                  Nous intervenons à {city} et dans toutes les communes aux alentours dans un rayon de 10 km :
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {neighboringCities.map((neighborCity, index) => (
                    <div key={index} className="px-3 py-1.5 bg-white rounded border border-gray-200 text-sm flex items-center">
                      <MapPin className="mr-2 text-nico-red" size={14} />
                      <Link to={`/zone-intervention/${neighborCity.toLowerCase().replace(/[-\s]+/g, '-').replace(/[^\w-]/g, '')}`} className="hover:text-nico-red">
                        {neighborCity}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-nico-red hover:bg-red-700 text-white">
                    Demander un devis gratuit à {city}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Pourquoi choisir Nico Rénovation à {city} ?</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Artisan local et de confiance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Intervention rapide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Devis gratuit et détaillé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Travail soigné et de qualité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Matériaux de qualité professionnelle</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-nico-blue/10 rounded-md">
                  <h4 className="font-semibold text-nico-blue mb-2">Besoin d'un service à {city} ?</h4>
                  <p className="text-gray-600 mb-4">
                    Contactez-nous pour bénéficier d'un devis détaillé gratuit et sans engagement.
                  </p>
                  <Link to="/contact" className="inline-flex items-center text-nico-blue font-medium hover:text-nico-red">
                    Demander un devis
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Section */}
      <Portfolio 
        title={`Nos réalisations à ${city} et alentours`}
        description={`Découvrez quelques exemples de nos travaux récents de toiture, ramonage et entretien extérieur à ${city} et dans les communes voisines.`}
        items={portfolioItems}
      />
      
      <CTABanner />
    </div>
  );
};

export default CityTemplate;
