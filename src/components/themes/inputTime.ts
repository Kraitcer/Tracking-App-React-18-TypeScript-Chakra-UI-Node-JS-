import { numberInputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontWeight: "semibold",
    color: "white",
  },
});

export const numberInputTheme = defineMultiStyleConfig({ baseStyle });
