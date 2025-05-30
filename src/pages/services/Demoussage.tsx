
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Demoussage = () => {
  const benefits = [
    'Prolongation de la durée de vie de votre toiture',
    'Amélioration de l\'esthétique de votre habitation',
    'Traitement préventif contre les mousses et lichens',
    'Intervention respectueuse de l\'environnement',
    'Protection contre les infiltrations',
    'Devis et déplacement gratuits'
  ];

  const portfolioItems = [
    {
      id: 'demo-1',
      imagePath: '/lovable-uploads/6a51b4a3-6a10-4716-8320-4de5ca5c6aed.png',
      title: 'Démoussage d\'une toiture résidentielle',
      description: 'Traitement complet - Avant et après'
    },
    {
      id: 'demo-2',
      imagePath: '/lovable-uploads/e6fd405c-9bb2-48e8-a01b-b86b463d7e16.png',
      title: 'Toiture nettoyée',
      description: 'Construction neuve, toiture entièrement traitée'
    }
  ];
  
  const content = (
    <>
      <h2>Démoussage de toiture à Châteaubriant et environs</h2>
      <p>
        Nico Rénovation vous propose un service professionnel de démoussage de toiture pour éliminer efficacement les mousses, lichens et autres végétaux qui s'accumulent sur votre couverture au fil du temps.
      </p>
      
      <h3>Pourquoi démousser votre toiture ?</h3>
      <p>
        La présence de mousse sur une toiture peut entraîner de nombreux problèmes :
      </p>
      <ul>
        <li>Rétention d'humidité pouvant causer des infiltrations</li>
        <li>Dégradation accélérée des matériaux de couverture</li>
        <li>Obstruction des gouttières et évacuations d'eau</li>
        <li>Apparence négligée de votre habitation</li>
        <li>Risque de glissance lors d'interventions sur le toit</li>
      </ul>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src="/lovable-uploads/6a51b4a3-6a10-4716-8320-4de5ca5c6aed.png" 
              alt="Toiture avant démoussage" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src="/lovable-uploads/e6fd405c-9bb2-48e8-a01b-b86b463d7e16.png" 
              alt="Toiture après démoussage" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      
      <h3>Notre procédé de démoussage</h3>
      <ol>
        <li>
          <strong>Examen de la toiture :</strong> Analyse de l'état de la toiture et évaluation du niveau d'envahissement
        </li>
        <li>
          <strong>Nettoyage mécanique :</strong> Élimination des mousses et lichens par brossage ou grattage adapté au type de couverture
        </li>
        <li>
          <strong>Nettoyage haute pression :</strong> Si nécessaire, utilisation d'un nettoyeur haute pression avec réglages adaptés au type de toiture
        </li>
        <li>
          <strong>Application d'un traitement :</strong> Pulvérisation d'un produit anti-mousse préventif respectueux de l'environnement
        </li>
        <li>
          <strong>Nettoyage des gouttières :</strong> Évacuation des résidus pour assurer un bon écoulement des eaux pluviales
        </li>
      </ol>
      
      <h3>Types de toitures traitées</h3>
      <p>
        Notre expertise nous permet d'intervenir sur tous types de toitures :
      </p>
      <ul>
        <li>Toiture en ardoises</li>
        <li>Toiture en tuiles</li>
        <li>Toiture en fibrociment</li>
        <li>Toiture en béton</li>
        <li>Autres surfaces extérieures (terrasses, murs, etc.)</li>
      </ul>
      
      <h3>Un traitement préventif efficace</h3>
      <p>
        En complément du démoussage, nous recommandons un traitement préventif qui ralentit considérablement la réapparition des mousses et lichens. Cette protection durable vous permet de préserver l'aspect et l'intégrité de votre toiture plus longtemps.
      </p>

      <h3>Nos réalisations</h3>
      <Portfolio 
        title="Nos réalisations de démoussage"
        description="Découvrez nos travaux récents de démoussage de toitures"
        items={portfolioItems}
      />
    </>
  );
  
  return (
    <ServiceTemplate
      title="Démoussage de toiture"
      description="Élimination efficace des mousses et lichens sur votre toiture pour prolonger sa durée de vie et préserver son esthétique."
      imagePath="/lovable-uploads/58635cf1-45b9-4635-9395-f2d2f6bba8c8.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Demoussage;
