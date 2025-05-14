
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-nico-blue text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg text-blue-100">
              Besoin d'un devis gratuit ou d'informations sur nos services ? Contactez Nico Rénovation à Châteaubriant
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-nico-blue p-3 rounded-md text-white mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                      <p className="text-gray-600">25 Rue des 27 Otages, 44110 Châteaubriant</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nico-blue p-3 rounded-md text-white mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                      <a href="tel:0788033573" className="text-nico-blue hover:underline">07 88 03 35 73</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nico-blue p-3 rounded-md text-white mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <a href="mailto:nicorenovation44@gmail.com" className="text-nico-blue hover:underline">nicorenovation44@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nico-blue p-3 rounded-md text-white mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Horaires</h4>
                      <p className="text-gray-600">Du lundi au vendredi : 8h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nico-blue p-3 rounded-md text-white mr-4">
                      <Facebook size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Facebook</h4>
                      <a 
                        href="https://www.facebook.com/nico.renovationcouverture" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-nico-blue hover:underline"
                      >
                        @nico.renovationcouverture
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-2">SIRET</h4>
                  <p className="text-gray-600">511 820 763 00023</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              <ContactForm />
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nous trouver</h3>
                <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.9391497451583!2d-1.3848191234687674!3d47.71856857101754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edfa8c0c1c38f%3A0x62bcea91ec5710ed!2s25%20Rue%20des%2027%20Otages%2C%2044110%20Ch%C3%A2teaubriant!5e0!3m2!1sfr!2sfr!4v1716838553870!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte Nico Rénovation"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
