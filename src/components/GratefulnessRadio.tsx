import {
  Box,
  HStack,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

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
        // borderRadius="md"
        // boxShadow="md"
        _checked={{
          bg: "orange.400",
          color: "white",
          //   borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        // px={2}
        padding={2}
        w="100%"
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function GratefulnessRadio() {
  const options = ["Person", "Event", "Simplicity"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
export default GratefulnessRadio;
