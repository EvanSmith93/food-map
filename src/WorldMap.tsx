import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


interface Pin {
  id: string;
  position: [number, number];
  content: string;
}

const WorldMap: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>([
    { id: "1", position: [40.7128, -74.006], content: "New York City" },
    { id: "2", position: [35.6895, 139.6917], content: "Tokyo" },
  ]);

  const addPin = (latlng: [number, number]) => {
    const newPin: Pin = {
      id: Date.now().toString(),
      position: latlng,
      content: "New Pin",
    };
    setPins((prevPins) => [...prevPins, newPin]);
  };

  // Component to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        addPin([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
      className="rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="© OpenStreetMap contributors © CartoDB"
      />
      <MapClickHandler />
      {pins.map((pin) => (
        <Marker key={pin.id} position={pin.position}>
          <Popup>
            <div>
              <h4>{pin.content}</h4>
              <button
                onClick={(e) => {
                  setPins((prevPins) =>
                    prevPins.filter((p) => p.id !== pin.id)
                  );
                  e.stopPropagation();
                }}
                className="text-red-500 hover:text-red-700"
              >
                Delete Pin
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
