
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';

const ReparationsExterieur = () => {
  const benefits = [
    'Intervention rapide sur tous types de réparations',
    'Diagnostic précis de l\'origine du problème',
    'Devis gratuit et sans engagement',
    'Expertise dans tous les domaines de réparation extérieure',
    'Matériaux de qualité et durables',
    'Service de proximité à Châteaubriant et ses environs'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/3b939988-a7e6-4d48-a10c-6d5819fc4d2d.png',
      title: 'Réparation de toiture',
      description: 'Remplacement de tuiles cassées et étanchéité'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/9d2da56d-c39d-4487-ae22-67df0dd0b56d.png',
      title: 'Réparation de gouttière',
      description: 'Fixation et étanchéité d\'une gouttière défectueuse'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/7ed390df-f465-4f2f-81f9-d67ad40041cc.png',
      title: 'Réparation de volet',
      description: 'Remise en état d\'un volet endommagé'
    },
    {
      id: '4',
      imagePath: '/lovable-uploads/097266f9-8807-4791-93b5-098ac9ec7a46.png',
      title: 'Réparation de dallage',
      description: 'Reprise d\'un dallage extérieur affaissé'
    }
  ];
  
  const content = (
    <>
      <h2>Service de réparations extérieures à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose un service complet de réparations extérieures pour votre habitation. 
        Que ce soit une fuite de toiture, des tuiles cassées, un volet endommagé ou un problème de dallage, 
        notre équipe intervient rapidement pour diagnostiquer et réparer tout type de désordre extérieur.
      </p>
      
      <h3>Nos prestations de réparations extérieures</h3>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-nico-blue mb-2">Réparations de toiture</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Remplacement de tuiles ou ardoises cassées</li>
            <li>Réparation de fuites et infiltrations</li>
            <li>Traitement des problèmes d'étanchéité</li>
            <li>Reprise de faîtage et arêtiers</li>
            <li>Réparation de solins et noues</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-nico-blue mb-2">Réparations de menuiseries extérieures</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Réparation de volets roulants ou battants</li>
            <li>Remise en état de portes et portails</li>
            <li>Réparation de fenêtres et châssis</li>
            <li>Remplacement de vitrage cassé</li>
            <li>Traitement et entretien du bois extérieur</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-nico-blue mb-2">Réparations de maçonnerie extérieure</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reprise de dallage et carrelage extérieur</li>
            <li>Réparation de terrasse et balcon</li>
            <li>Reprise de fissures sur façade</li>
            <li>Réfection de joints de pierre ou brique</li>
            <li>Reprise d'escaliers extérieurs</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-nico-blue mb-2">Réparations d'évacuations</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Débouchage et réparation de gouttières</li>
            <li>Remplacement de descentes d'eau pluviale</li>
            <li>Reprise de collecteurs et canalisations</li>
            <li>Réparation de regards et drainage</li>
          </ul>
        </div>
      </div>
      
      <h3 className="mt-8">Notre méthode d'intervention</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Diagnostic précis :</strong> Identification de l'origine du problème et pas uniquement des symptômes visibles
        </li>
        <li>
          <strong>Solution adaptée :</strong> Proposition de solutions durables adaptées à votre budget
        </li>
        <li>
          <strong>Devis détaillé :</strong> Etablissement d'un devis transparent sans mauvaise surprise
        </li>
        <li>
          <strong>Intervention planifiée :</strong> Organisation de l'intervention selon vos disponibilités
        </li>
        <li>
          <strong>Réalisation soignée :</strong> Travaux exécutés avec soin et dans le respect des normes
        </li>
        <li>
          <strong>Contrôle qualité :</strong> Vérification complète après intervention
        </li>
      </ol>
      
      <h3 className="mt-8">Pourquoi faire appel à nos services ?</h3>
      <p>
        Les réparations extérieures nécessitent souvent une intervention rapide pour éviter que les dégâts ne s'aggravent.
        En nous confiant vos travaux de réparation, vous bénéficiez :
      </p>
      <ul className="list-disc pl-5 space-y-1 mb-6">
        <li>D'une réactivité à toute épreuve pour les urgences</li>
        <li>D'un diagnostic précis de l'origine des problèmes</li>
        <li>De solutions durables et pas uniquement de réparations temporaires</li>
        <li>D'un artisan qualifié maîtrisant tous les corps de métier</li>
        <li>D'un interlocuteur unique pour tous vos besoins de réparation</li>
      </ul>
    </>
  );
  
  return (
    <>
      <ServiceTemplate
        title="Réparations extérieur"
        description="Services de réparation pour tous types de problèmes extérieurs : fuites de toiture, tuiles cassées, volets, dallage, carrelage et plus encore."
        imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
        benefits={benefits}
        content={content}
      />
      <Portfolio 
        title="Nos réparations extérieures" 
        description="Découvrez quelques exemples de nos interventions de réparation" 
        items={portfolioItems} 
      />
    </>
  );
};

export default ReparationsExterieur;
