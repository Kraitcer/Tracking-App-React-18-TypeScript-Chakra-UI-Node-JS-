import {
  Text,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Icons {
  id: number;
  image: string;
}

interface Props {
  icons: Icons[];
  radioSetName: string;
}

const SliderItself = ({ icons, radioSetName }: Props) => {
  const [radioValue, setRadioValue] = useState<string>("0");

  return (
    <Flex alignItems={"center"} gap={3}>
      <RadioGroup defaultValue="0" onChange={(value) => setRadioValue(value)}>
        <Flex
          flexDirection={"column"}
          bg={"blue.100"}
          color={"white"}
          padding={3}
          paddingTop={1}
          borderRadius={10}
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
        // border={"4px solid"}
        borderRadius={0}
        // borderColor={"blue.100"}
        // padding={1}
      />
    </Flex>
  );
};

export default SliderItself;
