import { Badge, Button, Flex, Input, Modal, Stack } from "@mantine/core";
import { Pin } from "./WorldMap";
import { useState } from "react";
import { Calendar, Map } from "lucide-react";

const DetailModal = ({
  openedPin,
  setOpenedPin,
}: {
  openedPin: Pin | null;
  setOpenedPin: (pin: Pin | null) => void;
}) => {
  const [aiModal, setAiModal] = useState(false);

  const onClose = () => {
    setOpenedPin(null);
    setAiModal(false);
  };

  return (
    <>
      <Modal
        opened={openedPin !== null && !aiModal}
        onClose={onClose}
        title={openedPin?.data.title}
        size="lg"
        centered
      >
        <Stack>
          <Flex gap={8}>
            <Badge leftSection={<Map size={14} />}>{openedPin?.data.location}</Badge>
            <Badge leftSection={<Calendar size={14} />}>{openedPin?.data.year}</Badge>
          </Flex>
          {openedPin?.data.content}
          <Button onClick={() => setAiModal(true)}>Remix</Button>
        </Stack>
      </Modal>
      <Modal
        opened={aiModal}
        onClose={onClose}
        title={`Remix ${openedPin?.data.title}`}
        size="lg"
        centered
      >
        {openedPin && (
          <Stack>
            <Input placeholder="Enter ingredients to combine with this recipe" />
            <Button onClick={() => null}>Combine</Button>
          </Stack>
        )}
      </Modal>
    </>
  );
};

export default DetailModal;
