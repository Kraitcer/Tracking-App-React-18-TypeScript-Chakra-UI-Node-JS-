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
    <Flex
      gap={1}
      flexDirection={"column"}
      // alignItems={"center"}
      // justifyItems={"center"}
    >
      <Text marginBottom={0} fontSize={"xl"}>
        Today, i'm grateful for
      </Text>

      <Textarea
        variant="brandPrimary"
        bg={"blue.100"}
        color={"white"}
        // border={"1px solid blue.400"}
        placeholder="Write down thing you have been grateful for today. Choose it type & submit"
        h="6.2rem"
        resize={"none"}
      />
      <GratefulnessRadio />
    </Flex>
  );
};

export default GrateFulnessSection;
