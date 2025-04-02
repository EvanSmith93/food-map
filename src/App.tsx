import { createTheme, MantineProvider, Text, Title } from "@mantine/core";
import "./App.css";
import WorldMap from "./WorldMap";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <div style={{ padding: "24px" }}>
        <Title order={2} mb="md">
          Food Globalization Map
        </Title>
        <Text mb="sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </Text>
        <Text mb="sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </Text>
        <WorldMap />
      </div>
    </MantineProvider>
  );
}

export default App;
