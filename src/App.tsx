import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import WorldMap from "./WorldMap";

function App() {
  const theme = createTheme({});

  return (
    <div style={{ padding: "24px" }}>
      <MantineProvider theme={theme}>
        <WorldMap />
      </MantineProvider>
    </div>
  );
}

export default App;
