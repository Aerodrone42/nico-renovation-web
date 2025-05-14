
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const Nettoyage = () => {
  const benefits = [
    'Amélioration de l\'aspect esthétique',
    'Prolongation de la durée de vie des surfaces',
    'Élimination des pollutions et salissures',
    'Techniques adaptées à chaque support',
    'Produits respectueux de l\'environnement',
    'Devis gratuit et sans engagement'
  ];
  
  const content = (
    <>
      <h2>Services de nettoyage professionnel à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose des prestations de nettoyage extérieur pour redonner éclat et propreté à votre propriété. Nos services s'adressent aux particuliers comme aux professionnels souhaitant entretenir et valoriser leur bien immobilier.
      </p>
      
      <h3>Nos prestations de nettoyage</h3>
      <ul>
        <li><strong>Nettoyage de façades :</strong> Élimination des salissures, pollutions, traces de ruissellement</li>
        <li><strong>Nettoyage de toitures :</strong> Suppression des mousses et lichens</li>
        <li><strong>Nettoyage de gouttières :</strong> Débouchage et évacuation des débris</li>
        <li><strong>Nettoyage de terrasses et dallages :</strong> Élimination des taches, mousses et verdissures</li>
        <li><strong>Nettoyage de murets et murs d'enceinte :</strong> Ravalement et propreté</li>
        <li><strong>Nettoyage de piscines :</strong> Entretien du bassin et des abords</li>
        <li><strong>Nettoyage de bardages :</strong> Traitement adapté au matériau (bois, PVC, métal)</li>
      </ul>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img 
          src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
          alt="Nettoyage de façade" 
          className="rounded-lg shadow-md"
        />
        <img 
          src="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png" 
          alt="Nettoyage de terrasse" 
          className="rounded-lg shadow-md"
        />
      </div>
      
      <h3>Nos techniques de nettoyage</h3>
      <p>
        Nous utilisons différentes méthodes selon la surface à traiter :
      </p>
      <ul>
        <li><strong>Nettoyage haute pression :</strong> Puissance adaptée au support</li>
        <li><strong>Nettoyage basse pression :</strong> Pour les surfaces fragiles</li>
        <li><strong>Traitement hydrofuge :</strong> Protection durable contre l'humidité</li>
        <li><strong>Traitement anti-mousse :</strong> Prévention contre les végétaux</li>
        <li><strong>Brossage mécanique :</strong> Pour les salissures tenaces</li>
      </ul>
      
      <h3>Pourquoi faire appel à nos services ?</h3>
      <ul>
        <li>Expertise et connaissance des matériaux</li>
        <li>Équipement professionnel adapté à chaque type de surface</li>
        <li>Produits de qualité respectueux de l'environnement</li>
        <li>Résultats durables et garantis</li>
        <li>Intervention sans dégradation de vos surfaces</li>
      </ul>
      
      <h3>Notre méthode d'intervention</h3>
      <ol>
        <li>
          <strong>Diagnostic initial :</strong> Évaluation de l'état des surfaces et identification des traitements nécessaires
        </li>
        <li>
          <strong>Préparation du chantier :</strong> Protection des abords et des plantations
        </li>
        <li>
          <strong>Nettoyage adapté :</strong> Utilisation des techniques appropriées selon le support
        </li>
        <li>
          <strong>Traitement préventif :</strong> Application de produits protecteurs si nécessaire
        </li>
        <li>
          <strong>Contrôle qualité :</strong> Vérification du résultat final
        </li>
      </ol>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Nettoyage professionnel"
      description="Services de nettoyage de façades, terrasses, gouttières, murets et bardages pour redonner éclat à votre propriété."
      imagePath="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Nettoyage;
