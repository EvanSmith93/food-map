import { ReactNode, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Grid } from "@mantine/core";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { pinData } from "./data.tsx";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import DetailModal from "./DetailModal.tsx";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export interface Pin {
  id: string;
  position: [number, number];
  title: string;
  content: ReactNode;
}

const WorldMap = () => {
  const [pins] = useState<Pin[]>(pinData);
  const [openedPin, setOpenedPin] = useState<Pin | null>(null);

  return (
    <>
      <Grid gutter="md">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "750px", width: "100%", zIndex: 0, margin: "12px" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="© OpenStreetMap contributors © CartoDB"
          />

          {pins.map((pin) => (
            <Marker
              key={pin.id}
              position={pin.position}
              eventHandlers={{
                click: () => setOpenedPin(pin),
              }}
            />
          ))}
        </MapContainer>
      </Grid>
      <DetailModal openedPin={openedPin} setOpenedPin={setOpenedPin} />
    </>
  );
};

export default WorldMap;
