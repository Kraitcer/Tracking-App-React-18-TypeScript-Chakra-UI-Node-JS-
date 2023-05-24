import {
  Text,
  RadioGroup,
  Stack,
  Radio,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import GratefulnessRadio from "./GratefulnessRadio";

const GrateFulnessSection = () => {
  return (
    <Flex gap={2} flexDirection={"column"}>
      <Text marginBottom={0} fontSize={"xl"}>
        Today, i'm grateful for
      </Text>
      <GratefulnessRadio />
      <Textarea
        variant="brandPrimary"
        bg={"blue.400"}
        color={"white"}
        // border={"1px solid blue.400"}
        placeholder="Here is a sample placeholder"
        h="23%"
        resize={"none"}
      />
    </Flex>
  );
};

export default GrateFulnessSection;
