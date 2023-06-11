import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
  HStack,
  Badge,
  Button,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  sliderName: String;
}

const ProgressSlider = ({ sliderName }: Props) => {
  const [sliderValue, setSliderValue] = useState(70);
  return (
    <Flex flexDirection={"column"} marginBottom={2}>
      <Text fontSize={18} marginBottom={1}>
        {sliderName}
      </Text>
      <HStack>
        <Slider onChange={(val) => setSliderValue(val)}>
          <SliderTrack h={8} bg={"orange.200"} borderRadius={0}>
            <SliderFilledTrack bg={"blue.200"} />
          </SliderTrack>
          <SliderThumb bg={"orange"} boxSize={8} rounded={"none"} w={1} />
        </Slider>
        <Box
          h={8}
          w="60px"
          bg="blue.400"
          borderRadius={0}
          border={"none"}
          color={"white"}
          fontSize={22}
          paddingLeft={2}
          paddingRight={2}
          alignItems={"left"}
          display={"Flex"}
          flexDirection={"row-reverse"}
          paddingBottom={0}
        >
          {sliderValue}
        </Box>
      </HStack>
    </Flex>
  );
};

export default ProgressSlider;
