
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/28266287-7f07-4321-b5ca-a517dbcdcc45.png" 
                alt="Nico Rénovation Logo" 
                className="h-24 w-auto bg-white rounded-full p-1 mb-4" 
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Votre spécialiste en couverture et entretien à Châteaubriant et ses environs.
            </p>
            <div className="flex items-center space-x-2 text-nico-green">
              <span className="px-2 py-1 border border-nico-green rounded-md text-xs font-medium">Artisan qualifié</span>
              <span className="px-2 py-1 border border-nico-green rounded-md text-xs font-medium">SIRET : 511 820 763 00023</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-nico-red flex-shrink-0 mt-1" size={18} />
                <span>25 Rue des 27 Otages, 44110 Châteaubriant</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-nico-red flex-shrink-0" size={18} />
                <a href="tel:0788033573" className="hover:text-nico-green">07 88 03 35 73</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-nico-red flex-shrink-0" size={18} />
                <a href="mailto:nicorenovation44@gmail.com" className="hover:text-nico-green">nicorenovation44@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 text-nico-red flex-shrink-0" size={18} />
                <span>Du lundi au vendredi : 8h-18h</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links - Restructured into columns */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="hover:text-nico-green">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/services/reparation-toiture" className="hover:text-nico-green">Réparation toiture</Link>
                  </li>
                  <li>
                    <Link to="/services/gouttieres" className="hover:text-nico-green">Gouttières</Link>
                  </li>
                  <li>
                    <Link to="/services/ramonage" className="hover:text-nico-green">Ramonage</Link>
                  </li>
                  <li>
                    <Link to="/services/isolation" className="hover:text-nico-green">Isolation</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services/demoussage" className="hover:text-nico-green">Démoussage</Link>
                  </li>
                  <li>
                    <Link to="/services/nettoyage" className="hover:text-nico-green">Nettoyage</Link>
                  </li>
                  <li>
                    <Link to="/services/espaces-verts" className="hover:text-nico-green">Espaces verts</Link>
                  </li>
                  <li>
                    <Link to="/services/travaux-exterieur" className="hover:text-nico-green">Travaux extérieur</Link>
                  </li>
                  <li>
                    <Link to="/services/peinture" className="hover:text-nico-green">Peinture</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <ul className="space-y-2">
                <li>
                  <Link to="/zone-intervention" className="hover:text-nico-green">Zone d'intervention</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-nico-green">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Social & CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/nico.renovationcouverture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
            <Link 
              to="/contact" 
              className="bg-nico-red hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium inline-flex items-center"
            >
              Demander un devis gratuit
              <ExternalLink size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800 text-sm text-gray-400">
          <p>© {currentYear} Nico Rénovation - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
