import {
  Text,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Image,
  VStack,
  background,
} from "@chakra-ui/react";
import { useState } from "react";
import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

interface Icons {
  id: number;
  image: string;
}

interface Props {
  icons: Icons[];
  radioSetName: string;
}
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const outline = definePartsStyle({
  control: {
    border: "4px solid",
    borderColor: "gray.300",

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: "gray.600",
    },
  },
});

const radioTheme = defineMultiStyleConfig({
  variants: { outline },
});

const SliderItself = ({ icons, radioSetName }: Props) => {
  const [radioValue, setRadioValue] = useState<string>("0");

  return (
    <Flex alignItems={"center"} gap={2}>
      <RadioGroup defaultValue="0" onChange={(value) => setRadioValue(value)}>
        <Flex
          flexDirection={"column"}
          padding={3}
          paddingTop={1}
          borderRadius={2}
          borderTop={"1px solid"}
          borderRight={"1px solid"}
          borderBottom={"3px solid"}
          borderLeft={"3px solid"}
          borderColor={"blue.100"}
          color={"blue.400"}
        >
          <Text marginBottom={1}>{radioSetName}</Text>
          <HStack>
            <Radio value="0">1</Radio>
            <Radio value="1">2</Radio>
            <Radio value="2">3</Radio>
            <Radio value="3">4</Radio>
            <Radio value="4">5</Radio>
          </HStack>
        </Flex>
      </RadioGroup>
      <Image
        w={"50px"}
        h={"50px"}
        src={icons[parseInt(radioValue)].image}
        borderRadius={0}
      />
    </Flex>
  );
};

export default SliderItself;
