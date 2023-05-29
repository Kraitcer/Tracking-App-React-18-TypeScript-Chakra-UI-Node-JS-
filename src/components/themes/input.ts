import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    borderBottom: "1px solid",
    borderColor: "blue.100",
    background: "white",
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
