
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/CTABanner';

interface ServiceTemplateProps {
  title: string;
  description: string;
  imagePath: string;
  benefits: string[];
  content: React.ReactNode;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  imagePath,
  benefits,
  content,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-16 md:py-20">
        {/* Background image avec overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-100 mb-8">{description}</p>
            <Link to="/contact">
              <Button className="bg-nico-red hover:bg-red-700 text-white">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Service Content */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-nico-red hover:bg-red-700 text-white">
                    Contactez-nous pour ce service
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Nos avantages</h3>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-nico-green mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-nico-blue/10 rounded-md">
                  <h4 className="font-semibold text-nico-blue mb-2">Devis gratuit</h4>
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

export default ServiceTemplate;
