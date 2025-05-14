
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const TravauxInterieur = () => {
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
      <h2>Travaux d'intérieur à Châteaubriant et environs</h2>
      <p>
        Nico Rénovation intervient pour tous vos petits et moyens travaux d'aménagement et de rénovation intérieure. Notre expertise polyvalente nous permet de répondre à vos besoins pour améliorer votre confort et valoriser votre habitat.
      </p>
      
      <h3>Nos prestations de travaux intérieurs</h3>
      <ul>
        <li><strong>Rénovation de pièces :</strong> Remise à neuf complète</li>
        <li><strong>Pose de revêtements muraux :</strong> Papier peint, toile de verre, lambris</li>
        <li><strong>Pose de revêtements de sols :</strong> Stratifié, vinyle, moquette</li>
        <li><strong>Installation de cloisons et doublages :</strong> Placo, ossature bois</li>
        <li><strong>Montage de meubles :</strong> Assemblage et fixation sécurisée</li>
        <li><strong>Petites menuiseries :</strong> Étagères, placards, aménagements</li>
        <li><strong>Petite plomberie :</strong> Remplacement de robinetterie, installation d'évier</li>
        <li><strong>Petite électricité :</strong> Installation de luminaires, prises supplémentaires</li>
      </ul>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
          alt="Travaux intérieur" 
          className="rounded-lg shadow-md w-full"
        />
      </div>
      
      <h3>Aménagement et optimisation d'espace</h3>
      <p>
        Nous vous aidons à optimiser vos espaces intérieurs avec des solutions adaptées :
      </p>
      <ul>
        <li>Création de rangements sur mesure</li>
        <li>Installation d'étagères et de dressings</li>
        <li>Aménagement de combles ou sous-escaliers</li>
        <li>Solutions pour petites surfaces</li>
        <li>Conseils d'agencement et d'optimisation</li>
      </ul>
      
      <h3>Réparations et dépannages</h3>
      <p>
        Pour tous les petits problèmes du quotidien, nous intervenons rapidement :
      </p>
      <ul>
        <li>Réparation de portes et fenêtres</li>
        <li>Fixation d'objets lourds (TV, étagères)</li>
        <li>Rebouchage de trous et fissures</li>
        <li>Remplacement d'éléments défectueux</li>
        <li>Réparation de meubles</li>
      </ul>
      
      <h3>Notre méthode de travail</h3>
      <ol>
        <li>
          <strong>Évaluation de vos besoins :</strong> Visite et prise de mesures
        </li>
        <li>
          <strong>Conseils personnalisés :</strong> Proposition de solutions adaptées
        </li>
        <li>
          <strong>Devis détaillé :</strong> Présentation claire des travaux et des coûts
        </li>
        <li>
          <strong>Planification :</strong> Organisation des interventions selon vos disponibilités
        </li>
        <li>
          <strong>Réalisation soignée :</strong> Travaux effectués avec précision
        </li>
        <li>
          <strong>Nettoyage :</strong> Chantier propre après intervention
        </li>
      </ol>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Travaux intérieurs"
      description="Services de rénovation et aménagement intérieur pour améliorer votre confort et valoriser votre habitat."
      imagePath="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default TravauxInterieur;
