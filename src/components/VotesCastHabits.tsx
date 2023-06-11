import {
  Box,
  Button,
  HStack,
  Input,
  baseTheme,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  icon: string;
}

const VotesCastHabits = ({ icon }: Props) => {
  const habitRef = useRef<HTMLInputElement>(null);
  return (
    <HStack marginTop={2}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (habitRef.current !== null) console.log(habitRef.current.value);
        }}
      >
        <Flex gap={2}>
          <Image boxSize="50px" src={icon} />
          <Input
            // onSubmit={}
            ref={habitRef}
            w={"auto"}
            variant={"baseStyle"}
            fontSize={20}
            marginTop={3}
          ></Input>
        </Flex>
      </form>
    </HStack>
  );
};

export default VotesCastHabits;
