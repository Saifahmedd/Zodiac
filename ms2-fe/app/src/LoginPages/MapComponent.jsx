import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapComponent() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBV7JOXLYy7wwGKsvd3MvnfeTU7jJwAKtw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, can be added here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
