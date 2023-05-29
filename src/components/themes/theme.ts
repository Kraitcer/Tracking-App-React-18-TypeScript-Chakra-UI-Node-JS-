import { extendTheme } from "@chakra-ui/react";
import { radioTheme } from "./radio";
import { inputTheme } from "./input";

export const theme = extendTheme({
  components: { Radio: radioTheme, Input: inputTheme },
});
