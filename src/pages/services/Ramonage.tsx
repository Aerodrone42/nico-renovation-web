
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const Ramonage = () => {
  const benefits = [
    'Prévention des risques d\'incendie',
    'Conformité avec les obligations légales',
    'Amélioration du rendement de chauffage',
    'Réduction de la consommation d\'énergie',
    'Élimination des suies et dépôts',
    'Certificat de ramonage fourni'
  ];
  
  const content = (
    <>
      <h2>Ramonage professionnel à Châteaubriant et environs</h2>
      <p>
        Nico Rénovation vous propose un service de ramonage professionnel pour l'entretien et la sécurisation de vos conduits de cheminée, poêles et inserts. Le ramonage régulier est essentiel pour assurer votre sécurité et optimiser le fonctionnement de vos appareils de chauffage.
      </p>
      
      <h3>Pourquoi faire ramoner sa cheminée ?</h3>
      <p>
        Le ramonage de votre cheminée est non seulement obligatoire (une à deux fois par an selon la réglementation), mais aussi indispensable pour :
      </p>
      <ul>
        <li>Prévenir les risques d'incendie par l'élimination des dépôts inflammables</li>
        <li>Éviter les intoxications au monoxyde de carbone</li>
        <li>Améliorer l'efficacité de votre chauffage et réduire votre consommation</li>
        <li>Préserver la durée de vie de votre installation</li>
        <li>Respecter les conditions de votre assurance habitation</li>
      </ul>
      
      <h3>Nos prestations de ramonage</h3>
      <ul>
        <li>Ramonage de cheminées à foyer ouvert</li>
        <li>Ramonage d'inserts et poêles à bois</li>
        <li>Ramonage de poêles à granulés</li>
        <li>Ramonage de conduits de chaudières fioul et gaz</li>
        <li>Contrôle de l'état général de l'installation</li>
        <li>Délivrance d'un certificat de ramonage</li>
      </ul>
      
      <h3>Notre méthode de ramonage</h3>
      <ol>
        <li>
          <strong>Préparation et protection :</strong> Mise en place de protections pour préserver votre intérieur
        </li>
        <li>
          <strong>Inspection visuelle :</strong> Vérification de l'état général du conduit et de l'appareil
        </li>
        <li>
          <strong>Ramonage mécanique :</strong> Nettoyage complet à l'aide d'outils adaptés (hérisson, brosses)
        </li>
        <li>
          <strong>Aspiration des résidus :</strong> Élimination complète des suies et dépôts
        </li>
        <li>
          <strong>Contrôle final :</strong> Vérification du bon tirage et de l'absence d'obstruction
        </li>
        <li>
          <strong>Certificat de ramonage :</strong> Remise d'un document attestant de la réalisation du ramonage
        </li>
      </ol>
      
      <h3>Quand faire ramoner ?</h3>
      <p>
        La réglementation impose au minimum :
      </p>
      <ul>
        <li>Une fois par an pour les appareils à combustibles gazeux</li>
        <li>Deux fois par an pour les appareils à combustibles solides (bois, charbon, pellets)</li>
        <li>Idéalement avant la saison de chauffe (fin d'été) et pendant la saison pour les utilisations intensives</li>
      </ul>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Ramonage professionnel"
      description="Service de ramonage de cheminées, poêles et conduits pour assurer votre sécurité et optimiser votre chauffage."
      imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Ramonage;
