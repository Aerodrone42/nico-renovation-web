
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: "url('/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png')",
        }}
      ></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-block bg-nico-red text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Artisan couvreur à Châteaubriant (44)
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Expert en rénovation et <span className="text-nico-green">entretien de toiture</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Vérification de toiture, réparations, nettoyage et travaux d'entretien par un professionnel qualifié
          </p>
          
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center">
              <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0" />
              <span>Déplacement gratuit</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0" />
              <span>Intervention rapide</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0" />
              <span>Artisan qualifié</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-nico-red hover:bg-red-700 text-white px-8 py-6 text-lg">
                Demander un devis gratuit
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="tel:0788033573">
              <Button variant="outline" className="bg-transparent hover:bg-white/10 border-white text-white px-8 py-6 text-lg">
                Appeler maintenant
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
