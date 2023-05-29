import { extendTheme } from "@chakra-ui/react";
import { radioTheme } from "./radio";

export const theme = extendTheme({
  components: { Radio: radioTheme },
});
