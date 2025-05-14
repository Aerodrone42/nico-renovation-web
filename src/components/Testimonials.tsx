
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michel D.',
    location: 'Châteaubriant',
    text: "J'ai fait appel à Nico Rénovation pour le démoussage de ma toiture et le nettoyage des gouttières. Travail rapide et soigné, je recommande vivement.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie L.',
    location: 'Erbray',
    text: "Entreprise sérieuse et professionnelle. Nicolas a réparé notre toiture suite à une fuite avec efficacité. Prix très correct et déplacement rapide.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Jean-Pierre M.',
    location: 'Soudan',
    text: "Très satisfait du ramonage de notre cheminée et du nettoyage de la toiture. Artisan ponctuel et travail impeccable. Je recommande.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur nos services de couverture et d'entretien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -right-4 text-nico-blue opacity-20">
                <Quote size={48} />
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
