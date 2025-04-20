import {
  createTheme,
  MantineProvider,
  Title,
  Container,
  Group,
  Image,
  Notification,
  AppShell,
} from "@mantine/core";
import "./App.css";
import WorldMap from "./WorldMap";
import logo from "../public/logo.png";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Group align="center" gap="sm" className="h-full pl-4">
            <Image src={logo} alt="Logo" className="w-8 h-8" />
            <Title order={3}>Food Globalization Map</Title>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Container size="xl" pt="md" className="relative">
            <div className="absolute top-8 right-8">
              <Notification
                variant="light"
                color="blue"
                title="About"
                withCloseButton={false}
                className="z-1 w-96"
              >
                This website contains a collection of recipes from around the
                world, with a focus on plant-based recipes. Click on each pin to
                view the recipe and a bit of context about that food.
              </Notification>
            </div>
            <WorldMap />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
