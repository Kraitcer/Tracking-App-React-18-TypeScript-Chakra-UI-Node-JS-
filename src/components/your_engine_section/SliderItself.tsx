import { Flex, HStack, Radio, RadioGroup, Image } from "@chakra-ui/react";
import { useState } from "react";

interface Icons {
  id: number;
  image: string;
}

interface Props {
  icons: Icons[];
}

const SliderItself = ({ icons }: Props) => {
  const [radioValue, setRadioValue] = useState<string>("0");

  return (
    <Flex alignItems={"center"} gap={3}>
      <RadioGroup defaultValue="0" onChange={(value) => setRadioValue(value)}>
        <HStack>
          <Radio value="0">1</Radio>
          <Radio value="1">2</Radio>
          <Radio value="2">3</Radio>
          <Radio value="3">4</Radio>
          <Radio value="4">5</Radio>
        </HStack>
      </RadioGroup>
      <Image w={"50px"} src={icons[parseInt(radioValue)].image} />
    </Flex>
  );
};

export default SliderItself;
