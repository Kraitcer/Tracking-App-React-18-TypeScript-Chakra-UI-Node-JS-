import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: "12px", // change the border radius
    borderColor: "blue.100", // change the border color
    _checked: { color: "white" },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
