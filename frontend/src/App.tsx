import React from "react";
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
        <WorldMap />
      </div>
    </MantineProvider>
  );
}

export default App;
