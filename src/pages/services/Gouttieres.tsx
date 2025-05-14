
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const Gouttieres = () => {
  const benefits = [
    'Installation de gouttières neuves',
    'Réparation de gouttières endommagées',
    'Nettoyage et entretien régulier',
    'Résistance et durabilité garanties',
    'Intervention rapide et professionnelle',
    'Devis gratuit et sans engagement'
  ];
  
  const content = (
    <>
      <h2>Installation et entretien de gouttières à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose des services complets pour l'installation, la réparation et l'entretien de vos gouttières. Des gouttières en bon état sont essentielles pour protéger votre habitation des dégâts causés par l'eau de pluie.
      </p>
      
      <h3>Nos prestations pour les gouttières</h3>
      <ul>
        <li>Installation de gouttières en zinc, PVC ou aluminium</li>
        <li>Réparation des gouttières endommagées</li>
        <li>Remplacement des descentes pluviales</li>
        <li>Nettoyage et débouchage de gouttières</li>
        <li>Étanchéité des raccords et joints</li>
        <li>Installation de protège-gouttières</li>
      </ul>
      
      <h3>Pourquoi entretenir vos gouttières ?</h3>
      <p>
        Des gouttières en bon état permettent d'évacuer efficacement les eaux de pluie loin des fondations de votre maison. Un système de gouttières défectueux peut entraîner :
      </p>
      <ul>
        <li>Des infiltrations d'eau dans les murs et les fondations</li>
        <li>Des dégâts sur la façade et les soubassements</li>
        <li>L'apparition d'humidité et de moisissures</li>
        <li>Une dégradation prématurée de votre toiture</li>
      </ul>
      
      <h3>Notre méthode d'intervention</h3>
      <ol>
        <li>
          <strong>Diagnostic complet :</strong> Évaluation de l'état de vos gouttières et identification des problèmes
        </li>
        <li>
          <strong>Proposition de solutions :</strong> Recommandations adaptées à votre situation et à votre budget
        </li>
        <li>
          <strong>Intervention professionnelle :</strong> Travaux réalisés par des artisans qualifiés
        </li>
        <li>
          <strong>Contrôle qualité :</strong> Vérification du bon fonctionnement après intervention
        </li>
      </ol>
      
      <h3>Les types de gouttières proposés</h3>
      <p>
        Nous travaillons avec différents matériaux pour s'adapter à vos besoins et à l'esthétique de votre habitation :
      </p>
      <ul>
        <li><strong>Gouttières en zinc :</strong> Durables et résistantes aux intempéries</li>
        <li><strong>Gouttières en PVC :</strong> Économiques et faciles à entretenir</li>
        <li><strong>Gouttières en aluminium :</strong> Légères et résistantes à la corrosion</li>
      </ul>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Installation et entretien de gouttières"
      description="Service professionnel d'installation, réparation et entretien de gouttières pour protéger efficacement votre habitation."
      imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Gouttieres;
