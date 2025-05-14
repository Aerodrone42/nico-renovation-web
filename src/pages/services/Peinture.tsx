
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';

const Peinture = () => {
  const benefits = [
    'Travail soigné et professionnel',
    'Conseils sur les couleurs et finitions',
    'Préparation minutieuse des supports',
    'Peintures de qualité professionnelle',
    'Protection des zones non traitées',
    'Devis détaillé et gratuit'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/9ec75a99-9060-4d16-b218-105c642b7170.png',
      title: 'Travaux de lasure sur bois',
      description: 'Application de lasure sur terrasse en bois'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/706b54ed-4250-4772-8cb4-19424d03c4bc.png',
      title: 'Finition mur et boiseries',
      description: 'Peinture et habillage bois pour intérieur'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/02a354d0-b1e6-49e8-a9c0-e50a73f1516c.png',
      title: 'Travaux de façade',
      description: 'Application d\'enduit décoratif sur façade extérieure'
    },
    {
      id: '4',
      imagePath: '/lovable-uploads/a43f8539-1e38-441f-bdf3-9f6e87dbbe37.png',
      title: 'Rénovation façade complète',
      description: 'Avant: façade à rénover'
    },
    {
      id: '5',
      imagePath: '/lovable-uploads/66d3596e-e27a-4e93-b81a-ff28f0523e64.png',
      title: 'Façade rénovée',
      description: 'Après: façade rénovée avec enduit neuf'
    }
  ];
  
  const content = (
    <>
      <h2>Services de peinture à Châteaubriant et environs</h2>
      <p>
        Nico Rénovation réalise tous vos travaux de peinture intérieure et extérieure pour rafraîchir et embellir votre habitat. Nos prestations de qualité vous garantissent un résultat durable et esthétique.
      </p>
      
      <h3>Nos prestations de peinture intérieure</h3>
      <ul>
        <li><strong>Peinture de murs et plafonds :</strong> Toutes pièces et surfaces</li>
        <li><strong>Peinture de menuiseries :</strong> Portes, fenêtres, plinthes</li>
        <li><strong>Travaux préparatoires :</strong> Rebouchage, enduit, ponçage</li>
        <li><strong>Pose de toile de verre :</strong> Préparation et mise en peinture</li>
        <li><strong>Effets décoratifs :</strong> Patines, enduits décoratifs</li>
        <li><strong>Traitement de boiseries :</strong> Lasures, vernis, huiles</li>
      </ul>
      
      <h3>Nos prestations de peinture extérieure</h3>
      <ul>
        <li><strong>Peinture de façades :</strong> Ravalement et embellissement</li>
        <li><strong>Peinture de menuiseries extérieures :</strong> Volets, portes, fenêtres</li>
        <li><strong>Traitement des boiseries extérieures :</strong> Protection et décoration</li>
        <li><strong>Peinture de ferronneries :</strong> Portails, garde-corps, grilles</li>
        <li><strong>Traitement imperméabilisant :</strong> Protection contre les intempéries</li>
      </ul>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
          alt="Travaux de peinture" 
          className="rounded-lg shadow-md w-full"
        />
      </div>
      
      <h3>Pourquoi choisir notre service de peinture ?</h3>
      <ul>
        <li>Expérience et savoir-faire artisanal</li>
        <li>Utilisation de matériaux et peintures de qualité professionnelle</li>
        <li>Respect des délais et des engagements</li>
        <li>Travail soigné avec une attention particulière aux finitions</li>
        <li>Conseil personnalisé pour le choix des teintes et des finitions</li>
      </ul>
      
      <h3>Notre méthode de travail</h3>
      <ol>
        <li>
          <strong>Visite et diagnostic :</strong> Évaluation des surfaces à traiter et conseils
        </li>
        <li>
          <strong>Préparation des supports :</strong> Nettoyage, rebouchage, ponçage, sous-couche
        </li>
        <li>
          <strong>Protection des zones non traitées :</strong> Bâches, adhésifs de masquage
        </li>
        <li>
          <strong>Application :</strong> Techniques adaptées selon le support et la finition souhaitée
        </li>
        <li>
          <strong>Finitions :</strong> Soin particulier apporté aux détails
        </li>
        <li>
          <strong>Nettoyage :</strong> Remise en état du chantier après travaux
        </li>
      </ol>
      
      <h3>Les types de peintures proposés</h3>
      <p>
        Nous utilisons des peintures de qualité professionnelle adaptées à vos besoins :
      </p>
      <ul>
        <li><strong>Peintures acryliques :</strong> Séchage rapide, faible odeur</li>
        <li><strong>Peintures glycéro :</strong> Haute résistance pour pièces humides et menuiseries</li>
        <li><strong>Peintures écologiques :</strong> Faible teneur en COV, respectueuses de l'environnement</li>
        <li><strong>Peintures spéciales :</strong> Anti-humidité, anti-moisissures, thermiques</li>
        <li><strong>Lasures et vernis :</strong> Protection et décoration des boiseries</li>
      </ul>
      
      <h3>Nos réalisations en peinture</h3>
      <Portfolio 
        title="Exemples de nos travaux de peinture" 
        description="Découvrez quelques-unes de nos réalisations récentes en peinture intérieure et extérieure" 
        items={portfolioItems} 
      />
    </>
  );
  
  return (
    <ServiceTemplate
      title="Peinture intérieure et extérieure"
      description="Services professionnels de peinture pour rafraîchir et embellir votre habitat avec des finitions soignées."
      imagePath="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Peinture;
