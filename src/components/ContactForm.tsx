
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    
    // The form will be submitted to FormSubmit.org
    // We'll show the success message after the form submission is complete
    setTimeout(() => {
      // This timeout is just to show the loading state briefly
      // The actual submission is handled by the form action
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Demandez un devis gratuit</h3>
      
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-green-600 mb-2">Demande envoyée !</h3>
          <p className="text-center text-gray-600">
            Merci pour votre message. Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>
      ) : (
        <form 
          action="https://formsubmit.co/nicorenovation44@gmail.com" 
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* FormSubmit configuration */}
          <input type="hidden" name="_subject" value="Nouvelle demande depuis le site web" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.href} />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Votre numéro de téléphone"
                className="w-full border-gray-300"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full border-gray-300"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service concerné
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3"
            >
              <option value="">Sélectionnez un service</option>
              <option value="reparation-toiture">Réparation toiture</option>
              <option value="gouttieres">Gouttières</option>
              <option value="ramonage">Ramonage</option>
              <option value="isolation">Isolation</option>
              <option value="demoussage">Démoussage de toiture</option>
              <option value="nettoyage">Nettoyage</option>
              <option value="espaces-verts">Entretien espaces verts</option>
              <option value="travaux-interieur">Travaux intérieur</option>
              <option value="peinture">Peinture</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Sujet
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet de votre message"
              className="w-full border-gray-300"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Décrivez votre projet ou besoin"
              className="w-full min-h-[120px] border-gray-300"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-nico-red hover:bg-red-700 text-white font-medium py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma demande"
            )}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Champs obligatoires
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
