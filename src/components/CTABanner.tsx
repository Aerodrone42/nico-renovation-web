
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PhoneCall, Calendar, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <div className="bg-nico-blue py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Besoin d'un devis gratuit ?
            </h2>
            <p className="text-blue-100">
              Contactez-nous pour un diagnostic et un devis sans engagement
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-nico-red hover:bg-red-700 text-white">
                <Calendar className="mr-2" size={18} />
                Demander un devis
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            
            <a href="tel:0788033573">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <PhoneCall className="mr-2" size={18} />
                07 88 03 35 73
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
