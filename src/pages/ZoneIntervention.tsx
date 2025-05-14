
import React from 'react';
import { MapPin } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

const ZoneIntervention = () => {
  const communes = [
    'Châteaubriant', 'Erbray', 'Soudan', 'Saint-Aubin-des-Châteaux', 'Rougé',
    'Sion-les-Mines', 'Lusanger', 'Derval', 'Issé', 'Moisdon-la-Rivière',
    'Grand-Auverné', 'Petit-Auverné', 'Saint-Julien-de-Vouvantes', 'Juigné-des-Moutiers',
    'La Meilleraye-de-Bretagne', 'Louisfert', 'Noyal-sur-Brutz', 'Fercé',
    'Ruffigné', 'Saint-Vincent-des-Landes', 'Marsac-sur-Don', 'Treffieux',
    'Jans', 'Nozay', 'Vay', 'Puceul', 'Abbaretz', 'La Chapelle-Glain'
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-nico-blue text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Notre zone d'intervention</h1>
            <p className="text-lg text-blue-100">
              Nico Rénovation intervient à Châteaubriant et dans un rayon de 30km
            </p>
          </div>
        </div>
      </div>
      
      {/* Zone Content */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Châteaubriant et communes environnantes</h2>
              <p className="text-gray-600 mb-6">
                Nico Rénovation intervient principalement à Châteaubriant et dans toutes les communes environnantes dans un rayon d'environ 30 kilomètres. Notre entreprise est mobile et réactive pour répondre à vos besoins en matière de couverture, travaux d'entretien et rénovation.
              </p>
              
              <p className="text-gray-600 mb-8">
                Pour toute demande en dehors de cette zone, n'hésitez pas à nous contacter pour étudier la faisabilité de votre projet.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <MapPin className="mr-2 text-nico-red" />
                  Communes d'intervention
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {communes.map((commune, index) => (
                    <div key={index} className="px-3 py-1.5 bg-white rounded border border-gray-200 text-sm">
                      {commune}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85038.76990254626!2d-1.4552708372106878!3d47.71856846991922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edfa37b463f75%3A0x40ca5cd36e4ab70!2s44110%20Ch%C3%A2teaubriant!5e0!3m2!1sfr!2sfr!4v1716838693135!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Nico Rénovation"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">Besoin d'une intervention ?</h3>
            <p className="text-gray-700 mb-4">
              Que vous soyez à Châteaubriant ou dans une commune environnante, contactez Nico Rénovation pour tous vos travaux de toiture, ramonage, démoussage ou entretien.
            </p>
            <div className="flex items-center text-nico-blue bg-white px-4 py-3 rounded-md border border-blue-200">
              <MapPin className="mr-2 text-nico-red" size={18} />
              <span className="font-medium">Déplacement GRATUIT pour établir un devis détaillé</span>
            </div>
          </div>
        </div>
      </div>
      
      <CTABanner />
    </div>
  );
};

export default ZoneIntervention;
