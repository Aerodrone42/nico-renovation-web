
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const EspacesVerts = () => {
  const benefits = [
    'Entretien régulier ou ponctuel',
    'Équipe professionnelle et qualifiée',
    'Matériel adapté et performant',
    'Respect de la saisonnalité des végétaux',
    'Conseils personnalisés pour votre jardin',
    'Devis gratuit et sans engagement'
  ];
  
  const content = (
    <>
      <h2>Entretien d'espaces verts à Châteaubriant</h2>
      <p>
        Nico Rénovation vous propose des services complets d'entretien d'espaces verts pour particuliers et professionnels. Notre équipe s'occupe de l'entretien régulier ou ponctuel de vos extérieurs pour vous offrir un jardin soigné et agréable tout au long de l'année.
      </p>
      
      <h3>Nos prestations d'entretien d'espaces verts</h3>
      <ul>
        <li><strong>Tonte de pelouse :</strong> Entretien régulier adapté à la saison</li>
        <li><strong>Taille de haies :</strong> Entretien, mise en forme et réduction</li>
        <li><strong>Débroussaillage :</strong> Nettoyage des zones difficiles d'accès</li>
        <li><strong>Désherbage :</strong> Manuel ou thermique selon vos préférences</li>
        <li><strong>Évacuation des déchets verts :</strong> Service complet jusqu'à l'évacuation</li>
        <li><strong>Plantation :</strong> Mise en place de nouveaux végétaux</li>
        <li><strong>Aménagement paysager :</strong> Conseils et réalisation</li>
      </ul>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png" 
          alt="Entretien espaces verts" 
          className="rounded-lg shadow-md w-full"
        />
      </div>
      
      <h3>Taille de haies professionnelle</h3>
      <p>
        La taille de haies est l'une de nos spécialités. Nous intervenons sur tous types de haies :
      </p>
      <ul>
        <li>Haies de thuyas</li>
        <li>Haies de lauriers</li>
        <li>Haies de troènes</li>
        <li>Haies de charmes</li>
        <li>Haies mixtes et ornementales</li>
      </ul>
      
      <p>
        Notre équipe maîtrise les techniques de taille pour favoriser la densification de vos haies tout en respectant leur santé et leur croissance naturelle. Nous apportons un soin particulier à la régularité et à l'esthétique de la coupe.
      </p>
      
      <h3>Les avantages d'un entretien régulier</h3>
      <ul>
        <li>Maintien de l'esthétique de votre jardin</li>
        <li>Prévention des maladies et parasites</li>
        <li>Stimulation de la croissance des végétaux</li>
        <li>Valorisation de votre propriété</li>
        <li>Gain de temps et tranquillité d'esprit</li>
      </ul>
      
      <h3>Notre méthode d'intervention</h3>
      <ol>
        <li>
          <strong>Évaluation de vos besoins :</strong> Visite sur place pour établir un diagnostic
        </li>
        <li>
          <strong>Planification des interventions :</strong> Établissement d'un calendrier adapté aux saisons
        </li>
        <li>
          <strong>Réalisation des travaux :</strong> Intervention soignée avec équipement professionnel
        </li>
        <li>
          <strong>Nettoyage :</strong> Ramassage et évacuation des déchets verts
        </li>
        <li>
          <strong>Suivi :</strong> Conseils d'entretien entre nos interventions
        </li>
      </ol>
    </>
  );
  
  return (
    <ServiceTemplate
      title="Entretien d'espaces verts"
      description="Services professionnels d'entretien de jardin, tonte de pelouse et taille de haies pour des extérieurs soignés."
      imagePath="/lovable-uploads/ae909c66-a968-4fc7-92b8-b88d8a3fbb12.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default EspacesVerts;
