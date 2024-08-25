// src/components/GlobeVisualization.jsx
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { feature } from 'topojson-client'; // Import feature function
import GlobeData from '../pages/GlobeData.jsx';

const GlobeVisualization = () => {
  const globeEl = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .backgroundColor('#9CDBA6')
      .pointOfView({ lat: 1, lng: 1, altitude: 2 });

    // Fetch and convert TopoJSON data
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((worldData) => {
        // Convert TopoJSON to GeoJSON
        const countries = feature(worldData, worldData.objects.countries).features;

        // Set the polygons data to the globe
        globe.polygonsData(countries)
          .polygonCapColor(() => 'rgba(255, 0, 0, 0.6)')  // Set the fill color
          .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)') // Set the side color
          .polygonStrokeColor(() => '#111')                // Set the stroke color
          .polygonsTransitionDuration(200)                 // Set transition duration
          .onPolygonClick(({ properties: { ISO_A3 } }) => { // Click event for polygons
            // Find the clicked country in GlobeData
            const countryInfo = GlobeData.find((c) => c.code === ISO_A3);
            if (countryInfo) {
              setSelectedCountry(countryInfo);
            } else {
              setSelectedCountry(null);
            }
          });
      })
      .catch((err) => console.error('Failed to load countries polygons:', err));

    // Sample data points on the globe
    const sampleData = [
      { lat: 37.7749, lng: -122.4194, size: 0.5, color: 'yellow' }, // San Francisco
      { lat: 51.5074, lng: -0.1278, size: 0.5, color: 'orange' },  // London
      { lat: -33.8688, lng: 151.2093, size: 0.5, color: 'red' }    // Sydney
    ];

    globe.pointsData(sampleData)
      .pointAltitude('size')
      .pointColor('color')
      .pointRadius(0.15)
      .pointsTransitionDuration(200);

  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div ref={globeEl} className="absolute inset-0" />
      {selectedCountry && (
        <div className="absolute top-10 left-10 bg-black bg-opacity-70 text-white p-4 rounded-md max-w-xs">
          <h2 className="text-lg font-semibold">{selectedCountry.name}</h2>
          <p>{selectedCountry.info}</p>
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
