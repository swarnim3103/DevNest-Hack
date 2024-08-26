import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { feature } from 'topojson-client'; 
import GlobeData from '../pages/GlobeData.jsx';

const GlobeVisualization = () => {
  const globeEl = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .backgroundColor('#9CDBA6')
      .pointOfView({ lat: 1, lng: 1, altitude: 2 });
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((worldData) => {
        const countries = feature(worldData, worldData.objects.countries).features;
        console.log('GeoJSON Countries Loaded:', countries);
        globe.polygonsData(countries)
          .polygonCapColor(() => '#0D7C66')  
          .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)') 
          .polygonStrokeColor(() => '#111')               
          .polygonsTransitionDuration(200)        
          .onPolygonClick((polygon) => {
            if (polygon && polygon.properties) {
              const { properties } = polygon;
              console.log('Country clicked:', properties); 
              const countryName = properties.name;
              console.log('Country Name:', countryName);
              const countryInfo = GlobeData.find((c) => c.name === countryName);
              if (countryInfo) {
                console.log('Country info found:', countryInfo);
                setSelectedCountry(countryInfo);
              } else {
                console.log('No country info found for:', countryName);
                setSelectedCountry(null);
              }
            }
          });
      })
      .catch((err) => console.error('Failed to load countries polygons:', err));
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div ref={globeEl} className="absolute inset-0" />
      {selectedCountry && (
        <div className="absolute top-10 left-10 bg-black bg-opacity-70 text-white p-4 rounded-md max-w-xs">
          <h2 className="text-lg font-semibold">{selectedCountry.name}</h2>
          <p>{selectedCountry.info}</p>
          <p>{selectedCountry.img}</p>
          <button
            className="mt-2 text-sm text-gray-300 hover:text-white"
            onClick={() => setSelectedCountry(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GlobeVisualization;
