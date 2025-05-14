
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const TravauxExterieur = () => {
  const benefits = [
    'Artisan polyvalent et expérimenté',
    'Finitions soignées et durables',
    'Respect des délais d\'intervention',
    'Matériaux de qualité',
    'Solutions adaptées à votre budget',
    'Devis détaillé gratuit'
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
