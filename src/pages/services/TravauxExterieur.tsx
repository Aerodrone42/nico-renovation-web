
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';

const TravauxExterieur = () => {
  const benefits = [
    'Artisan polyvalent et expérimenté',
    'Finitions soignées et durables',
    'Respect des délais d\'intervention',
    'Matériaux de qualité',
    'Solutions adaptées à votre budget',
    'Devis détaillé gratuit'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/d82882bd-9b5f-4bcd-a032-98b8b1d2c05e.png',
      title: 'Escalier en pierre naturelle',
      description: 'Création d\'un escalier extérieur en dalles de pierre naturelle'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/b516ec7d-5973-4c17-b647-c24b543974f8.png',
      title: 'Escalier en béton ciré',
      description: 'Réalisation d\'un escalier extérieur en béton ciré avec rampe'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/ec5cad45-90ef-4267-a220-2b9ce91e207c.png',
      title: 'Rénovation de toiture',
      description: 'Réparation et rénovation d\'une toiture en ardoises'
    },
    {
      id: '4',
      imagePath: '/lovable-uploads/29a501ba-9d50-4fbf-bd76-78c05f8e27b8.png',
      title: 'Création de souche de cheminée',
      description: 'Installation et habillage d\'une souche de cheminée'
    },
    {
      id: '5',
      imagePath: '/lovable-uploads/097266f9-8807-4791-93b5-098ac9ec7a46.png',
      title: 'Charpente de toit',
      description: 'Construction d\'une charpente de toit pour annexe en pierre'
    },
    {
      id: '6',
      imagePath: '/lovable-uploads/e5603e5c-78a6-4085-a8f4-0f652dc08ce2.png',
      title: 'Couverture en ardoise',
      description: 'Pose d\'ardoises naturelles sur une toiture d\'annexe'
    },
    {
      id: '7',
      imagePath: '/lovable-uploads/9d2da56d-c39d-4487-ae22-67df0dd0b56d.png',
      title: 'Gouttière et descente',
      description: 'Installation d\'une gouttière et descente d\'eau pluviale'
    },
    {
      id: '8',
      imagePath: '/lovable-uploads/c393cb4f-08b1-4cfe-aa28-e061648a9ab1.png',
      title: 'Façade rénovée',
      description: 'Rénovation complète de façade avec enduit et toiture'
    }
  ];
  
  const content = (
    <>
      <h2>Travaux d'extérieur à Châteaubriant et environs</h2>
      <p>
        Nico Rénovation intervient pour tous vos travaux d'aménagement et de rénovation extérieure. Notre expertise polyvalente nous permet de répondre à vos besoins pour améliorer et valoriser votre habitat.
      </p>
      
      <h3>Nos prestations de travaux extérieurs</h3>
      <ul>
        <li><strong>Menuiserie extérieure :</strong> Installation et rénovation de portes, fenêtres, volets</li>
        <li><strong>Dallage :</strong> Pose de dalles, pavés pour terrasses et allées</li>
        <li><strong>Carrelage extérieur :</strong> Terrasses, plages de piscine, escaliers</li>
        <li><strong>Façade :</strong> Rénovation, nettoyage et peinture de façades</li>
        <li><strong>Terrasses :</strong> Création et rénovation en bois, composite ou pierre</li>
        <li><strong>Clôtures et portails :</strong> Installation et réparation</li>
        <li><strong>Petite maçonnerie :</strong> Murets, piliers, bordures</li>
      </ul>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
          alt="Travaux extérieur" 
          className="rounded-lg shadow-md w-full"
        />
      </div>
      
      <h3>Menuiserie extérieure</h3>
      <p>
        Nous prenons en charge tous vos projets de menuiserie extérieure :
      </p>
      <ul>
        <li>Pose et remplacement de fenêtres et portes-fenêtres</li>
        <li>Installation et motorisation de volets roulants</li>
        <li>Réparation et rénovation de portes d'entrée</li>
        <li>Pose de pergolas et abris de jardin</li>
        <li>Installation de portails et clôtures</li>
      </ul>
      
      <h3>Dallage et carrelage extérieur</h3>
      <p>
        Pour des espaces extérieurs durables et esthétiques :
      </p>
      <ul>
        <li>Pose de dalles sur plots ou maçonnées</li>
        <li>Création d'allées en pavés</li>
        <li>Carrelage antidérapant pour terrasses et plages de piscine</li>
        <li>Rénovation de sols extérieurs existants</li>
        <li>Bordures et finitions soignées</li>
      </ul>
      
      <h3>Rénovation de façades</h3>
      <ol>
        <li>
          <strong>Diagnostic complet :</strong> État des lieux et identification des travaux nécessaires
        </li>
        <li>
          <strong>Nettoyage professionnel :</strong> Élimination des salissures, mousses et pollutions
        </li>
        <li>
          <strong>Réparations :</strong> Traitement des fissures et parties endommagées
        </li>
        <li>
          <strong>Application d'enduit :</strong> Protection et esthétique
        </li>
        <li>
          <strong>Peinture de façade :</strong> Mise en valeur durable de votre habitation
        </li>
        <li>
          <strong>Finitions :</strong> Détails soignés pour un résultat impeccable
        </li>
      </ol>
      
      <h3>Nos réalisations en travaux extérieurs</h3>
      <Portfolio 
        title="Notre portfolio de travaux extérieurs" 
        description="Découvrez quelques exemples de nos réalisations en travaux extérieurs"
        items={portfolioItems}
      />
    </>
  );
  
  return (
    <ServiceTemplate
      title="Travaux extérieurs"
      description="Services de menuiserie, dallage, carrelage et rénovation de façade pour valoriser l'extérieur de votre habitat."
      imagePath="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default TravauxExterieur;
