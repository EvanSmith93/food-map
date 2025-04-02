import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
  title: string;
  content: string;
}

const WorldMap: React.FC = () => {
  const [pins] = useState<Pin[]>([
    {
      id: "1",
      position: [41.9028, 12.4964], // Rome, Italy
      title: "Italy - Pasta",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "2",
      position: [35.6895, 139.6917], // Tokyo, Japan
      title: "Japan - Rice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "3",
      position: [20.5937, 78.9629], // India
      title: "India - Rice and Roti",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "4",
      position: [23.6345, -102.5528], // Mexico
      title: "Mexico - Corn",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "5",
      position: [48.8566, 2.3522], // Paris, France
      title: "France - Bread",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "6",
      position: [37.5665, 126.978], // Seoul, South Korea
      title: "South Korea - Kimchi and Rice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "7",
      position: [-14.235, -51.9253], // Brazil
      title: "Brazil - Rice and Beans",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "8",
      position: [15.87, 100.9925], // Thailand
      title: "Thailand - Rice and Noodles",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
    {
      id: "9",
      position: [31.7917, -7.0926], // Morocco
      title: "Morocco - Couscous",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    },
  ]);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="© OpenStreetMap contributors © CartoDB"
      />
      {pins.map((pin) => (
        <Marker key={pin.id} position={pin.position}>
          <Popup>
            <h3>{pin.title}</h3>
            <p>{pin.content}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
