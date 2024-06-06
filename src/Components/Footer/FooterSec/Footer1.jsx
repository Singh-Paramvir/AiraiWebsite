import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const FooterMap = () => {
  const position = [30.709330, 76.689280]; // Fixed position
  const [isInteractive, setIsInteractive] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsInteractive(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: '50vh' }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%' }}
        attributionControl={false}
        zoomControl={false} // Disable default zoom control
        dragging={isInteractive}
        touchZoom={isInteractive}
        doubleClickZoom={isInteractive}
        scrollWheelZoom={isInteractive}
        boxZoom={isInteractive}
        keyboard={isInteractive}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>
            Company Location
          </Popup>
        </Marker>
        {isInteractive && <ZoomControl position="bottomright" />}
      </MapContainer>
    </div>
  );
};

export default FooterMap;
