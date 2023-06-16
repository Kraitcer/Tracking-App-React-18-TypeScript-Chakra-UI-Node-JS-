import {
  Text,
  Textarea,
  Flex,
  Box,
  useRadio,
  useRadioGroup,
  HStack,
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

export default RadioCard;
