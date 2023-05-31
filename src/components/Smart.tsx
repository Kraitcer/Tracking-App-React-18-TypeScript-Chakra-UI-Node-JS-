import { Text, Button, Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onClick: () => void;
  setGoalsName: (goalsName: string) => void;
}

const Smart = ({ onClick, setGoalsName }: Props) => {
  const goalRef = useRef<HTMLInputElement | null>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (goalRef.current) setGoalsName(goalRef.current.value);
      }}
    >
      <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={30} marginTop={2}>
          AT
        </Text>
        <Input type="time" />
        <Input ref={goalRef} placeholder="I WILL" />
        <Button w={60} onClick={onClick} type="submit">
          SMART?
        </Button>
      </Flex>
    </form>
  );
};

export default Smart;
