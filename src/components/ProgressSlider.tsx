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
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  sliderName: String;
}

const ProgressSlider = ({ sliderName }: Props) => {
  const [sliderValue, setSliderValue] = useState(70);
  return (
    <Flex flexDirection={"column"} marginBottom={2}>
      <Text marginBottom={1}>{sliderName}</Text>
      <HStack>
        <Slider
          //   aria-label="slider-ex-1"
          onChange={(val) => setSliderValue(val)}
        >
          <SliderTrack h={8} bg={"orange.200"} borderRadius={0}>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bg={"orange"} boxSize={8} rounded={"none"} w={1} />
        </Slider>
        <Button
          h={8}
          w="52px"
          colorScheme="blue"
          borderRadius={0}
          color={"white"}
          fontSize={26}
          paddingBottom={1}
        >
          {sliderValue}
        </Button>
      </HStack>
    </Flex>
  );
};

export default ProgressSlider;
