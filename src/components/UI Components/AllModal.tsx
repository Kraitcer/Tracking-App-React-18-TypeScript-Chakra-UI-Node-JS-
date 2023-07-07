import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
interface CustomModalProps {
  title: string;
  children: React.ReactNode;
  onOpen: boolean;
  onClose: () => void;
}
export default function AllModal({
  title,
  children,
  onOpen,
  onClose,
}: CustomModalProps) {
  return (
    <>
      <Modal size={"lg"} isOpen={onOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform={"uppercase"} fontSize={22} pr={"55px"}>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
