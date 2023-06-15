import {
  Box,
  HStack,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import SectionButton from "./SectionButton";
import { useState } from "react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        bg={"blue.200"}
        color={"white"}
        _checked={{
          bg: "orange.400",
          color: "white",
        }}
        padding={2}
        w="100%"
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function GratefulnessRadio() {
  const options = ["Person", "Event", "Simplicity"];
  const [gratefulnes, setGratefulnes] = useState("1");

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "gratefulness",
    // defaultValue: "Event",
    // onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <HStack {...group} gap={1}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
        <SectionButton
          buttonName={gratefulnes}
          // onClick={() => console.log(value)}
          onClick={() => setGratefulnes("2")}
        />
      </HStack>
    </>
  );
}
export default GratefulnessRadio;
