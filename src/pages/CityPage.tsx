
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CityTemplate from './CityTemplate';
import { getCityBySlug } from '@/data/citiesData';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const cityData = citySlug ? getCityBySlug(citySlug) : null;
  
  if (!cityData) {
    // If city not found, redirect to zone intervention page
    return <Navigate to="/zone-intervention" />;
  }
  
  return (
    <CityTemplate 
      city={cityData.name}
      neighboringCities={cityData.neighbors}
      content={cityData.content}
    />
  );
};

export default CityPage;
