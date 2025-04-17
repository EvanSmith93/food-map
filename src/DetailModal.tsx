import { Button, Input, Modal, Stack } from "@mantine/core";
import { Pin } from "./WorldMap";
import { useState } from "react";

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
        title={openedPin?.title}
        size="lg"
        centered
      >
        {openedPin && (
          <Stack>
            {openedPin.content}
            <Button onClick={() => setAiModal(true)}>Remix</Button>
          </Stack>
        )}
      </Modal>
      <Modal
        opened={aiModal}
        onClose={onClose}
        title={`Remix ${openedPin?.title}`}
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
