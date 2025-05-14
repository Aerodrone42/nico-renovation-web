
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const ReparationToiture = () => {
  const benefits = [
    'Diagnostic complet de votre toiture',
    'Intervention rapide et de qualité',
    'Devis et déplacement gratuits',
    'Matériaux de qualité',
    'Artisan expérimenté',
    'Tarifs compétitifs'
  ];
  
  const content = (
    <>
      <h2>Réparation et entretien de toiture à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose des services professionnels de réparation de toiture pour tous types de couvertures. Notre expertise nous permet d'intervenir efficacement sur les problèmes courants comme les fuites, les tuiles cassées ou les ardoises déplacées.
      </p>
      
      <h3>Nos prestations de réparation de toiture</h3>
      <ul>
        <li>Remplacement de tuiles ou d'ardoises</li>
        <li>Réparation de fuites et infiltrations</li>
        <li>Reprise d'étanchéité</li>
        <li>Réfection partielle de toiture</li>
        <li>Traitement de charpente</li>
        <li>Remplacement de faîtage</li>
      </ul>
      
      <h3>Pourquoi entretenir sa toiture ?</h3>
      <p>
        Une toiture bien entretenue permet d'éviter des problèmes plus graves et coûteux à long terme. Les dégâts sur une toiture peuvent rapidement s'aggraver et causer des dommages à la structure de votre maison, comme des infiltrations d'eau, des problèmes d'isolation ou le développement de moisissures.
      </p>
      <p>
        Grâce à un entretien régulier et des réparations rapides des problèmes détectés, vous prolongez la durée de vie de votre toiture et maintenez la valeur de votre propriété.
      </p>
      
      <h3>Notre méthode d'intervention</h3>
      <ol>
        <li>Inspection complète de votre toiture</li>
        <li>Diagnostic précis des problèmes</li>
        <li>Établissement d'un devis détaillé gratuit</li>
        <li>Planification de l'intervention</li>
        <li>Réalisation des travaux dans les règles de l'art</li>
        <li>Contrôle qualité après intervention</li>
      </ol>
      
      <h3>Types de toitures prises en charge</h3>
      <p>
        Nous intervenons sur tous types de toitures :
      </p>
      <ul>
        <li>Toiture en ardoise</li>
        <li>Toiture en tuiles (plates, mécaniques, romanes)</li>
        <li>Toiture en zinc</li>
        <li>Toiture terrasse</li>
      </ul>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Réparation de toiture"
      description="Service professionnel de réparation et entretien de toiture pour tous types de couvertures : tuiles, ardoises, zinc."
      imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default ReparationToiture;
