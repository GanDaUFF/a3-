// src/components/Map.js
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import MarkerMap from './MarkerMap';
import { redirect } from 'react-router-dom';

const VITE_GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: '700px',
  height: '500px',
};

const center = {
  lat: -12.9704,
  lng: -38.5124,
};

const locations = [
  { location: { lat: -12.934839, lng: -38.461846 }, label: 'Mata Escura' },
  { location: { lat: -12.915224, lng: -38.349531 }, label: 'São aCritovão' },
  { location: { lat: -12.929542, lng: -38.443561 }, label: 'Sussuarana' },
  { location: { lat: -12.934304, lng: -38.359082 }, label: 'Itapuã' },
  { location: { lat: -12.916423, lng: -38.480379 }, label: 'Lobato' },
];

const Map = () => {
  const [size, setSize] = useState<google.maps.Size | null>(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setSize(new window.google.maps.Size(20, 30));
    }
  }, [window.google]);

  useEffect(() => {
    if (window.localStorage) {
      const userInfos = window.localStorage.getItem('userInfos');
      console.log('userInfosnnnnnnn', userInfos)
      if (!userInfos) window.location.href = '/';
    }
  }, [])

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey={VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {size && locations.map((location, index) => (
          <MarkerMap key={index} location={location.location} label={location.label} map={map} size={size} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
