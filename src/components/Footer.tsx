
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Contact</h3>
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
          
          {/* Liens rapides Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <Link to="/" className="block mb-2 hover:text-nico-green">Accueil</Link>
                <Link to="/zone-intervention" className="block mb-2 hover:text-nico-green">Zone d'intervention</Link>
                <Link to="/contact" className="block mb-2 hover:text-nico-green">Contact</Link>
                <Link to="/mentions-legales" className="block mb-2 hover:text-nico-green">Mentions légales</Link>
                <Link to="/politique-confidentialite" className="block mb-2 hover:text-nico-green">Politique de confidentialité</Link>
              </div>
              <div>
                <p className="font-medium mb-2">Services</p>
                <Link to="/services/reparation-toiture" className="block mb-2 hover:text-nico-green">Réparation toiture</Link>
                <Link to="/services/demoussage" className="block mb-2 hover:text-nico-green">Démoussage</Link>
                <Link to="/services/gouttieres" className="block mb-2 hover:text-nico-green">Gouttières</Link>
                <Link to="/services/nettoyage" className="block mb-2 hover:text-nico-green">Nettoyage</Link>
                <Link to="/services/ramonage" className="block mb-2 hover:text-nico-green">Ramonage</Link>
                <Link to="/services/isolation" className="block mb-2 hover:text-nico-green">Isolation</Link>
                <Link to="/services/travaux-exterieur" className="block mb-2 hover:text-nico-green">Travaux extérieur</Link>
                <Link to="/services/peinture" className="block mb-2 hover:text-nico-green">Peinture</Link>
              </div>
            </div>
          </div>
          
          {/* Suivez-nous Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Suivez-nous</h3>
            <div className="flex mb-6">
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
            
            <div className="mt-4">
              <img 
                src="/lovable-uploads/28266287-7f07-4321-b5ca-a517dbcdcc45.png" 
                alt="Nico Rénovation Logo" 
                className="h-20 w-auto bg-white rounded-full p-1" 
              />
              <div className="flex flex-wrap items-center space-x-2 mt-3 text-nico-green">
                <span className="px-2 py-1 border border-nico-green rounded-md text-xs font-medium">Artisan qualifié</span>
                <span className="px-2 py-1 border border-nico-green rounded-md text-xs font-medium">SIRET : 511 820 763 00023</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800 text-sm text-gray-400">
          <p className="flex items-center justify-center flex-wrap gap-1">
            © {currentYear} Nico Rénovation - Tous droits réservés
            <span className="mx-1">|</span>
            <a 
              href="https://www.site-internet-sans-abonnement.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-nico-green inline-flex items-center"
            >
              Créé par Aerodrone multiservices
              <ExternalLink size={14} className="ml-1" />
            </a>
          </p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <Link to="/mentions-legales" className="hover:text-nico-green">Mentions légales</Link>
            <span>|</span>
            <Link to="/politique-confidentialite" className="hover:text-nico-green">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
