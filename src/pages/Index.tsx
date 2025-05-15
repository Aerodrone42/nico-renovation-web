
import React from 'react';
import Hero from '@/components/Hero';
import ServicesList from '@/components/ServicesList';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';
import { ArrowRight, CheckCircle2, Shield, Clock, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Services Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-nico-blue font-semibold mb-2 block">Nos prestations</span>
              <h2 className="text-3xl font-bold text-gray-800">Services de qualité pour votre toiture</h2>
              <p className="text-gray-600 mt-2">Découvrez nos services professionnels</p>
            </div>
            <Link 
              to="/services" 
              className="inline-flex items-center text-nico-blue font-medium hover:text-nico-red mt-4 md:mt-0"
            >
              Voir tous nos services
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <ServicesList limit={6} />
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-nico-blue font-semibold mb-2 block">À propos de nous</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nico Rénovation, votre spécialiste toiture à Châteaubriant</h2>
              
              <p className="text-gray-600 mb-6">
                Entreprise artisanale spécialisée dans la rénovation et l'entretien de toiture, Nico Rénovation vous propose des services de qualité à Châteaubriant et dans les communes environnantes. 
              </p>
              
              <p className="text-gray-600 mb-6">
                Notre expertise nous permet d'intervenir sur tous types de toitures, de réaliser des travaux d'isolation, de ramonage, et d'offrir des services complets d'entretien extérieur pour votre habitation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-nico-blue p-2 rounded-full text-white mr-3">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Expertise</h3>
                    <p className="text-sm text-gray-600">Artisan qualifié et expérimenté</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nico-blue p-2 rounded-full text-white mr-3">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qualité</h3>
                    <p className="text-sm text-gray-600">Travail soigné et matériaux de qualité</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nico-blue p-2 rounded-full text-white mr-3">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Réactivité</h3>
                    <p className="text-sm text-gray-600">Intervention rapide et ponctuelle</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nico-blue p-2 rounded-full text-white mr-3">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Disponibilité</h3>
                    <p className="text-sm text-gray-600">À votre écoute pour tous vos besoins</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="bg-nico-red hover:bg-red-700 text-white">
                  Contactez-nous
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/b7d1e6e9-80bb-4a40-8ae7-b76657dcaa88.png" 
                  alt="Toiture ardoise" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img 
                  src="/lovable-uploads/457ff303-a5fc-44b8-a3c9-b55e3e17769f.png" 
                  alt="Avant-après toiture" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
                  alt="Façade nettoyée" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/84f200ee-1108-442f-a7dd-34a976aba89f.png" 
                  alt="Maison avec toiture rénovée" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Free Quote Banner */}
      <div className="py-12 bg-nico-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vérification de toiture <span className="text-nico-red">GRATUITE</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Profitez d'un diagnostic complet et d'un devis détaillé sans engagement pour tous vos travaux de toiture
          </p>
          <div className="inline-flex space-x-2 items-center bg-white/10 px-6 py-3 rounded-full text-lg font-semibold">
            <span>Devis et déplacement</span>
            <span className="text-nico-green font-bold">GRATUITS</span>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Index;
