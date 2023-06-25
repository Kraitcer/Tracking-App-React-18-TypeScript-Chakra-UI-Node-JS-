import { Flex, Input, Text } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../ChooseGoals";

interface ChildComponentProps {
  register: UseFormRegister<FormData>; // Assuming FormData is the same type used in the parent component
}

const Att_time_IWill_Smart = ({ register }: ChildComponentProps) => {
  return (
    <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={30} marginTop={3}>
        AT
      </Text>
      <Input
        {...register("att_time_")}
        type="time"
        w={"150px"}
        padding={1}
        fontSize={20}
      />
      <Input {...register("IWill_Smart")} placeholder="I WILL" />
    </Flex>
  );
};

export default Att_time_IWill_Smart;
