
import React from 'react';
import ServiceTemplate from '../ServiceTemplate';
import Portfolio from '@/components/Portfolio';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const EspacesVerts = () => {
  const benefits = [
    'Entretien régulier ou ponctuel',
    'Équipe professionnelle et qualifiée',
    'Matériel adapté et performant',
    'Respect de la saisonnalité des végétaux',
    'Conseils personnalisés pour votre jardin',
    'Devis gratuit et sans engagement'
  ];
  
  const portfolioItems = [
    {
      id: '1',
      imagePath: '/lovable-uploads/33a163e3-3930-46e9-b9c0-0182e90a45e1.png',
      title: 'Aménagement de jardin avec gazon',
      description: 'Aménagement paysager avec gazon, massifs de pierres et olivier'
    },
    {
      id: '2',
      imagePath: '/lovable-uploads/6c5cb0ce-62d2-414c-b4ab-639123e06803.png',
      title: 'Entretien de haie',
      description: 'Haie de lauriers parfaitement entretenue'
    },
    {
      id: '3',
      imagePath: '/lovable-uploads/3e6dd1e2-5666-46a7-adb9-c22b6bcf79e2.png',
      title: 'Taille de haie de thuyas',
      description: 'Haie de thuyas taillée avec précision'
    },
    {
      id: '4',
      imagePath: '/lovable-uploads/adc770fb-633c-4edf-a23c-88bed5635bb7.png',
      title: 'Entretien de haie de conifères',
      description: 'Haie de conifères parfaitement maintenue'
    }
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
        <AspectRatio ratio={16/9} className="rounded-lg shadow-md overflow-hidden">
          <img 
            src="/lovable-uploads/33a163e3-3930-46e9-b9c0-0182e90a45e1.png" 
            alt="Aménagement de jardin" 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
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
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src="/lovable-uploads/3e6dd1e2-5666-46a7-adb9-c22b6bcf79e2.png" 
              alt="Taille de haie de thuyas" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src="/lovable-uploads/6c5cb0ce-62d2-414c-b4ab-639123e06803.png" 
              alt="Entretien de haie de lauriers" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      
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
      
      <h3>Nos dernières réalisations</h3>
      <Portfolio 
        title="Galerie de nos travaux d'espaces verts" 
        description="Découvrez quelques exemples de nos réalisations récentes en aménagement et entretien d'espaces verts" 
        items={portfolioItems} 
      />
    </>
  );
  
  return (
    <ServiceTemplate
      title="Entretien d'espaces verts"
      description="Services professionnels d'entretien de jardin, tonte de pelouse et taille de haies pour des extérieurs soignés."
      imagePath="/lovable-uploads/33a163e3-3930-46e9-b9c0-0182e90a45e1.png"
      benefits={benefits}
      content={content}
    />
  );
};

export default EspacesVerts;
