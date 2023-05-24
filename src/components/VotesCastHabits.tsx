import { Button, HStack, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  submitBtnName: string;
}

const VotesCastHabits = ({ submitBtnName }: Props) => {
  const habitRef = useRef<HTMLInputElement>(null);
  return (
    <HStack>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (habitRef.current !== null) console.log(habitRef.current.value);
        }}
      >
        <Button
          type="submit"
          colorScheme="orange"
          rounded={"none"}
          paddingBottom={1}
          color={"white"}
          marginBottom={1.5}
          marginRight={2}
          fontSize={20}
          w={2}
        >
          {submitBtnName}
        </Button>
        <Input ref={habitRef} width="auto"></Input>
      </form>
    </HStack>
  );
};

export default VotesCastHabits;
