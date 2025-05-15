
import React from 'react';
import { Helmet } from 'react-helmet';

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Nico Rénovation</title>
        <meta name="description" content="Mentions légales de Nico Rénovation, artisan couvreur à Châteaubriant." />
      </Helmet>
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p className="mb-2"><strong>Nico Rénovation</strong></p>
            <p className="mb-2">25 Rue des 27 Otages</p>
            <p className="mb-2">44110 Châteaubriant</p>
            <p className="mb-2">SIRET : 511 820 763 00023</p>
            <p className="mb-2">Téléphone : 07 88 03 35 73</p>
            <p className="mb-2">Email : nicorenovation44@gmail.com</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Directeur de la publication</h2>
            <p className="mb-2">Nicolas Hamon, gérant de Nico Rénovation</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="mb-2">Ce site est hébergé par Lovable</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="mb-2">L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par les lois sur la propriété intellectuelle et appartient à Nico Rénovation ou à des tiers ayant autorisé Nico Rénovation à les utiliser.</p>
            <p className="mb-2">Toute reproduction, représentation, diffusion ou redistribution, totale ou partielle du contenu de ce site par quelque procédé que ce soit sans l'autorisation expresse et préalable de Nico Rénovation est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
            <p className="mb-2">Nico Rénovation s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur son site, dont elle se réserve le droit de modifier, à tout moment et sans préavis, le contenu. Toutefois, Nico Rénovation ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur son site.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
            <p className="mb-2">Ce site peut contenir des liens vers d'autres sites internet. Nico Rénovation ne peut être tenue responsable du contenu de ces sites et de l'usage qui pourrait en être fait par les utilisateurs.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Crédits</h2>
            <p className="mb-2">Conception du site : <a href="https://www.site-internet-sans-abonnement.fr/" target="_blank" rel="noopener noreferrer" className="text-nico-blue hover:underline">Aerodrone multiservices</a></p>
          </section>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
