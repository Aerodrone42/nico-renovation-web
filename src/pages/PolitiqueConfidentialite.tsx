
import React from 'react';
import { Helmet } from 'react-helmet';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Nico Rénovation</title>
        <meta name="description" content="Politique de confidentialité de Nico Rénovation, artisan couvreur à Châteaubriant." />
      </Helmet>
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-2">Chez Nico Rénovation, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
            <p className="mb-2">Nous pouvons collecter les informations suivantes lorsque vous utilisez notre site :</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Informations personnelles que vous nous fournissez volontairement lors de l'utilisation du formulaire de contact (nom, prénom, adresse e-mail, numéro de téléphone, etc.)</li>
              <li>Informations de navigation collectées automatiquement (adresse IP, type de navigateur, pages visitées, durée de la visite, etc.)</li>
              <li>Cookies et technologies similaires</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
            <p className="mb-2">Nous utilisons les données collectées pour :</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Répondre à vos demandes de renseignements ou de devis</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Analyser l'utilisation de notre site web</li>
              <li>Vous contacter concernant votre demande</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-2">Notre site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte stocké sur votre appareil qui nous permet de reconnaître et de mémoriser votre navigateur.</p>
            <p className="mb-2">Vous pouvez configurer votre navigateur pour refuser les cookies ou vous alerter lorsque des cookies sont envoyés. Toutefois, certaines parties du site peuvent ne pas fonctionner correctement si vous désactivez les cookies.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Partage des données</h2>
            <p className="mb-2">Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, sauf si nous en avons l'obligation légale.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Protection des données</h2>
            <p className="mb-2">Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p className="mb-2">Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mb-2">Pour exercer ces droits, veuillez nous contacter à l'adresse email : nicorenovation44@gmail.com</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications de la politique de confidentialité</h2>
            <p className="mb-2">Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.</p>
            <p className="mb-2">Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-2">Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :</p>
            <p className="mb-2">Email : nicorenovation44@gmail.com</p>
            <p className="mb-2">Téléphone : 07 88 03 35 73</p>
            <p className="mb-2">Adresse : 25 Rue des 27 Otages, 44110 Châteaubriant</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
