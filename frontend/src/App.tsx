import {
  createTheme,
  MantineProvider,
  Title,
  Text,
  Container,
  Group,
  Image,
  Box,
} from "@mantine/core";
import "./App.css";
import WorldMap from "./WorldMap";
import logo from "../public/logo.png";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Box
        bg="gray.1"
        px="md"
        py="sm"
        style={{ borderBottom: "1px solid #ccc" }}
      >
        <Group align="center" gap="sm">
          <Image src={logo} alt="Logo" className="w-8 h-8" />
          <Title order={3}>Food Globalization Map</Title>
        </Group>
      </Box>

      <Container size="xl" pt="md">
        <WorldMap />
        <Title order={2} className="pt-6">About</Title>
        <Text mb="sm">
          This website contains a collection of a collection of recipes from
          around the world, with a focus on plant-based recipes. Click on each
          pin to view the recipe and a bit of history about that food.
        </Text>
        <Text mb="sm">
          Over the past several hundred years, the world has become increasingly
          globalized. More communication and travel between areas of the world
          means cultures mix. In globalization, people take the food they know
          and combine it with foods they discover from other places to make new
          foods or cuisines. This website allows you to do the same. Select one
          or more recipes and combine them with other ingredients you choose to
          create a whole new recipe with AI. Note: the generated recipes
          themselves are not historically accurate. However, the process of
          combining ingredients to create something new is common practice
          during globalization.
        </Text>
      </Container>
    </MantineProvider>
  );
}

export default App;
