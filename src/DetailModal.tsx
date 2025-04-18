import {
  Badge,
  Blockquote,
  Button,
  Divider,
  Flex,
  Grid,
  Modal,
  Stack,
  TagsInput,
  Text,
  Title,
} from "@mantine/core";
import { Pin } from "./WorldMap";
import { useState } from "react";
import { Calendar, Map, Sparkles } from "lucide-react";

const DetailModal = ({
  openedPin,
  setOpenedPin,
}: {
  openedPin: Pin | null;
  setOpenedPin: (pin: Pin | null) => void;
}) => {
  const [customIngredients, setCustomIngredients] = useState<string[]>([]);

  const onClose = () => {
    setOpenedPin(null);
  };

  return (
    <Modal
      opened={openedPin !== null}
      onClose={onClose}
      title={<Title order={2}>{openedPin?.data.title}</Title>}
      size="xl"
      centered
    >
      <Stack>
        <Flex gap={8}>
          <Badge leftSection={<Map size={14} />}>
            {openedPin?.data.location}
          </Badge>
          <Badge leftSection={<Calendar size={14} />}>
            {openedPin?.data.year}
          </Badge>
        </Flex>
        <Flex gap={4} wrap='wrap'>
          {openedPin?.data.ingredients.map((ingredient) => (
            <Badge size="sm" color="green">{ingredient}</Badge>
          ))}
        </Flex>

        <Blockquote>{openedPin?.data.content.recipe}</Blockquote>
        <Text size="sm">{openedPin?.data.content.description}</Text>

        <Divider />

        <Title order={3}>Create Variation</Title>
        <Text>
          Throughout globalization, people have been taken recipes from other
          cultures and adapted them to the foods they have access to or are used
          to. Globalization is still happening today, and you can participate.
          Enter a list of ingredients below and we'll generate a variation of
          the above recipe that includes your ingredients. The generated recipe
          will not be a real historical recipe, however, this process of
          combining food from various cultures is not new.
        </Text>
        <Grid>
          <Grid.Col span={9}>
            <TagsInput
              placeholder="Pineapple, Black beans, Soy sauce, etc."
              value={customIngredients}
              onChange={setCustomIngredients}
              splitChars={[",", "\n"]}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              onClick={() => null}
              leftSection={<Sparkles size={14} />}
              disabled={customIngredients.length === 0}
              fullWidth
            >
              Create
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </Modal>
  );
};

export default DetailModal;
