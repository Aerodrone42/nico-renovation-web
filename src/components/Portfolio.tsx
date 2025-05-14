
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

interface PortfolioItem {
  id: string;
  imagePath: string;
  title: string;
  description: string;
}

interface PortfolioProps {
  title?: string;
  description?: string;
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ 
  title = "Nos réalisations", 
  description = "Découvrez quelques exemples de nos travaux récents", 
  items 
}) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={item.imagePath} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute top-2 right-2 bg-nico-blue text-white p-1.5 rounded-full">
                  <ImageIcon size={16} />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
