
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABanner from '@/components/CTABanner';

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
      
      <CTABanner />
    </div>
  );
};

export default CityTemplate;
