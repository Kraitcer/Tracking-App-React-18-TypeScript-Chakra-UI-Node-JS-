import { Text, Textarea, Flex } from "@chakra-ui/react";
import GratefulnessRadio from "./GratefulnessRadio";

const GrateFulnessSection = () => {
  return (
    <Flex gap={1} flexDirection={"column"}>
      <Text marginBottom={0} fontSize={"xl"}>
        Today, i'm grateful for:
      </Text>

      <Textarea
        variant="brandPrimary"
        bg={"blue.100"}
        color={"white"}
        placeholder="Write down thing you have been grateful for today. Choose it type and submit"
        h="6.2rem"
        resize={"none"}
      />
      <GratefulnessRadio />
    </Flex>
  );
};

export default GrateFulnessSection;
