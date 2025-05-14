
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const services = [
    { title: 'Réparation toiture', path: '/services/reparation-toiture' },
    { title: 'Gouttières', path: '/services/gouttieres' },
    { title: 'Ramonage', path: '/services/ramonage' },
    { title: 'Isolation', path: '/services/isolation' },
    { title: 'Démoussage de toiture', path: '/services/demoussage' },
    { title: 'Nettoyage', path: '/services/nettoyage' },
    { title: 'Entretien espaces verts', path: '/services/espaces-verts' },
    { title: 'Travaux intérieur', path: '/services/travaux-interieur' },
    { title: 'Peinture', path: '/services/peinture' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-nico-blue text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:0788033573" className="flex items-center space-x-1 hover:text-gray-200">
              <Phone size={16} />
              <span>07 88 03 35 73</span>
            </a>
            <a href="mailto:nicorenovation44@gmail.com" className="flex items-center space-x-1 hover:text-gray-200">
              <Mail size={16} />
              <span className="hidden sm:inline">nicorenovation44@gmail.com</span>
            </a>
          </div>
          <a 
            href="https://www.facebook.com/nico.renovationcouverture" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/28266287-7f07-4321-b5ca-a517dbcdcc45.png" 
              alt="Nico Rénovation Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-nico-blue transition-colors">
              Accueil
            </Link>
            
            {/* Services Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium hover:text-nico-blue transition-colors">
                    Nos services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/zone-intervention" className="font-medium hover:text-nico-blue transition-colors">
              Zone d'intervention
            </Link>
            
            <Link to="/contact" className="font-medium hover:text-nico-blue transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-nico-red hover:bg-red-700 text-white">
              Demandez votre devis gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            
            {/* Services Dropdown (Mobile) */}
            <div>
              <button 
                className="flex items-center justify-between w-full font-medium py-2"
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              >
                Nos services
                {servicesMenuOpen ? (
                  <X size={16} />
                ) : (
                  <Menu size={16} />
                )}
              </button>
              
              {servicesMenuOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path}
                      className="block py-1 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/zone-intervention" 
              className="font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zone d'intervention
            </Link>
            
            <Link 
              to="/contact" 
              className="font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button 
              className="bg-nico-red hover:bg-red-700 text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demandez votre devis gratuit
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
