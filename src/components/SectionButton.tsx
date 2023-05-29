import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  buttonName: string;
}

const SectionButton = ({ buttonName }: Props) => {
  return (
    <Button
      colorScheme="orange"
      bg={"orange"}
      w="100%"
      borderRadius={0}
      color={"white"}
      fontSize={16}
      marginBottom={3}
      marginTop={1}
      paddingBottom={1}
      border={"none"}
    >
      {buttonName}
    </Button>
  );
};

export default SectionButton;
