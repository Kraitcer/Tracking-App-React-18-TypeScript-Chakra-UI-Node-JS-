import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import ChooseGoals from "./ChooseGoals";
import { useState } from "react";
interface Props {
  onClose: () => void;
  isOpen: boolean;
}
export default function AllModal({ isOpen, onClose }: Props) {
  const [headerName, setHeaderName] = useState(0);
  const goalname = "";
  const headers = [
    "CHOSE GOALS FOR TOMORROW",
    "DOES YOUR GOAL :",
    `DOES YOUR GOAL : "${goalname}"`,
  ];
  return (
    <>
      <Modal
        // colorScheme="blue"
        size={"lg"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headers[headerName]}</ModalHeader>
          <ModalCloseButton onClick={() => setHeaderName(0)} />
          <ModalBody>
            <ChooseGoals
              setHeaderName={() => {
                setHeaderName(1);
              }}
              specificHeaderName={goalname}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
