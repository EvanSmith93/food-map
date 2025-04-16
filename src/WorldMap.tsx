import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Grid,
  Paper,
  Stack,
  Checkbox,
  Title,
  Text,
  Button,
} from "@mantine/core";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { pinData } from "./data";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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
  content: string;
}

const SelectedList = ({
  selected,
  pins,
}: {
  selected: string[];
  pins: Pin[];
}) => (
  <Paper
    p="md"
    shadow="sm"
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Title order={3} mb="md">
      Recipes to Combine
    </Title>
    <Stack gap="sm" style={{ flexGrow: 1, overflowY: "auto" }}>
      {pins
        .filter((pin) => selected.includes(pin.id))
        .map((pin) => (
          <Paper key={pin.id} p="sm" withBorder>
            {pin.title}
          </Paper>
        ))}
    </Stack>
    <Button mt="md" variant="filled" fullWidth disabled={selected.length < 2}>
      Combine
    </Button>
  </Paper>
);

const WorldMap = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [pins] = useState<Pin[]>(pinData);

  const handleSelect = (id: string) => (checked: boolean) => {
    setSelectedIds((current) =>
      checked ? [...current, id] : current.filter((item) => item !== id)
    );
  };

  return (
    <Grid gutter="md">
      <Grid.Col span={3}>
        <SelectedList selected={selectedIds} pins={pins} />
      </Grid.Col>

      <Grid.Col span={9}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "750px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="© OpenStreetMap contributors © CartoDB"
          />

          {pins.map((pin) => (
            <Marker key={pin.id} position={pin.position}>
              <Popup>
                <Stack gap="xs">
                  <Title order={4}>{pin.title}</Title>
                  <Text size="sm">{pin.content}</Text>
                  <Checkbox
                    label="Add to List"
                    checked={selectedIds.includes(pin.id)}
                    onChange={(e) =>
                      handleSelect(pin.id)(e.currentTarget.checked)
                    }
                  />
                </Stack>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Grid.Col>
    </Grid>
  );
};

export default WorldMap;
