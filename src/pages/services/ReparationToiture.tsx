
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';

const ReparationToiture = () => {
  const benefits = [
    'Diagnostic complet de votre toiture',
    'Intervention rapide et de qualité',
    'Devis et déplacement gratuits',
    'Matériaux de qualité',
    'Artisan expérimenté',
    'Tarifs compétitifs'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/6e6ba2d8-bb5e-44f1-b663-a5d84c15cb6a.png',
      title: 'Toiture ardoise avec faîtage',
      description: 'Rénovation complète de toiture en ardoise avec faîtage en tuiles'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/784035dd-5238-4d4c-b3f6-7e612528fe8b.png',
      title: 'Rénovation complète',
      description: 'Rénovation de toiture en ardoise avec cheminée'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/3b939988-a7e6-4d48-a10c-6d5819fc4d2d.png',
      title: 'Installation charpente neuve',
      description: 'Pose complète d\'une nouvelle charpente traditionnelle en bois'
    },
    {
      id: '4',
      imagePath: '/lovable-uploads/97bd76ad-18aa-4c34-90f6-a388b55c33d3.png',
      title: 'Réfection toiture ardoise',
      description: 'Réfection complète d\'une toiture en ardoise naturelle'
    },
    {
      id: '5',
      imagePath: '/lovable-uploads/d0740f07-031f-4994-b666-ff4b2a7c6574.png',
      title: 'Couverture en ardoise',
      description: 'Finition soignée d\'une couverture en ardoise avec faîtage'
    }
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
    <>
      <ServiceTemplate
        title="Réparation de toiture"
        description="Service professionnel de réparation et entretien de toiture pour tous types de couvertures : tuiles, ardoises, zinc."
        imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
        benefits={benefits}
        content={content}
      />
      <Portfolio 
        title="Nos réalisations de toiture" 
        description="Découvrez quelques exemples de nos travaux de réparation et rénovation de toiture dans la région de Châteaubriant" 
        items={portfolioItems} 
      />
    </>
  );
};

export default ReparationToiture;
