
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';

const Isolation = () => {
  const benefits = [
    'Réduction significative des factures énergétiques',
    'Amélioration du confort thermique',
    'Valorisation de votre patrimoine immobilier',
    'Isolation phonique renforcée',
    'Solutions adaptées à votre budget',
    'Éligibilité aux aides financières'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/defca239-af33-4969-8d62-98b417d50e57.png',
      title: 'Isolation sous toiture',
      description: 'Pose de matériaux isolants sous les tuiles pour une isolation optimale'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/11238821-f70a-489b-b67f-886521d897f8.png',
      title: 'Isolation de fenêtre de toit',
      description: 'Traitement spécifique des contours de fenêtre pour éviter les ponts thermiques'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/e1e1108e-6b42-4b17-8e4f-e511d8cd032e.png',
      title: 'Aménagement de combles',
      description: 'Isolation de combles aménageables avec traitement des structures apparentes'
    }
  ];
  
  const content = (
    <>
      <h2>Isolation de toiture et combles à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose des services professionnels d'isolation pour améliorer la performance énergétique de votre habitation. Nos solutions d'isolation de toiture et de combles vous permettent de réaliser d'importantes économies d'énergie tout en améliorant votre confort au quotidien.
      </p>
      
      <h3>Pourquoi isoler votre toiture ?</h3>
      <p>
        La toiture est responsable de 25 à 30% des déperditions thermiques d'une maison. Une bonne isolation vous permet de :
      </p>
      <ul>
        <li>Réduire considérablement vos factures de chauffage</li>
        <li>Maintenir une température agréable été comme hiver</li>
        <li>Limiter les ponts thermiques et l'humidité</li>
        <li>Protéger l'environnement en réduisant votre consommation énergétique</li>
        <li>Bénéficier d'aides financières pour la rénovation énergétique</li>
      </ul>
      
      <h3>Nos solutions d'isolation</h3>
      <ul>
        <li><strong>Isolation des combles perdus :</strong> Soufflage de laine minérale, pose de rouleaux</li>
        <li><strong>Isolation des combles aménagés :</strong> Isolation sous rampants, solutions multicouches</li>
        <li><strong>Isolation de toiture par l'extérieur :</strong> Sarking</li>
        <li><strong>Traitement des points singuliers :</strong> Trappes d'accès, conduits, spots encastrés</li>
        <li><strong>Installation de pare-vapeur :</strong> Protection contre l'humidité</li>
      </ul>
      
      <h3>Les matériaux isolants proposés</h3>
      <p>
        Nous utilisons différents types d'isolants selon vos besoins et votre budget :
      </p>
      <ul>
        <li><strong>Laine de verre :</strong> Excellent rapport qualité-prix</li>
        <li><strong>Laine de roche :</strong> Performance thermique et acoustique</li>
        <li><strong>Ouate de cellulose :</strong> Solution écologique et performante</li>
        <li><strong>Laine de bois :</strong> Isolant naturel à haute performance</li>
        <li><strong>Panneaux polyuréthane :</strong> Forte résistance thermique avec faible épaisseur</li>
      </ul>
      
      <h3>Notre méthode d'intervention</h3>
      <ol>
        <li>
          <strong>Diagnostic thermique :</strong> Évaluation des déperditions et des besoins
        </li>
        <li>
          <strong>Étude personnalisée :</strong> Proposition de solutions adaptées à votre habitation
        </li>
        <li>
          <strong>Devis détaillé :</strong> Présentation des options et des coûts
        </li>
        <li>
          <strong>Mise en œuvre :</strong> Travaux réalisés par nos équipes qualifiées
        </li>
        <li>
          <strong>Contrôle qualité :</strong> Vérification des performances après travaux
        </li>
      </ol>
      
      <h3>Aides financières disponibles</h3>
      <p>
        Nos solutions d'isolation peuvent être éligibles à différentes aides :
      </p>
      <ul>
        <li>MaPrimeRénov'</li>
        <li>Certificats d'Économie d'Énergie (CEE)</li>
        <li>TVA à taux réduit (5,5%)</li>
        <li>Éco-prêt à taux zéro</li>
        <li>Aides locales</li>
      </ul>
      
      <h3>Nos réalisations</h3>
      <Portfolio 
        title="Nos travaux d'isolation" 
        description="Découvrez quelques exemples de nos projets d'isolation de toiture et aménagement de combles"
        items={portfolioItems}
      />
    </>
  );
  
  return (
    <ServiceTemplate
      title="Isolation toiture et combles"
      description="Solutions professionnelles d'isolation thermique pour réduire vos factures énergétiques et améliorer votre confort."
      imagePath="/lovable-uploads/4d02d39b-c9c8-4bb7-9e12-8f0c901fd78b.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default Isolation;
