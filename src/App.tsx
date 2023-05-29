import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import EveningMain from "./components/EveningMain";

function App() {
  return (
    <Grid
      templateAreas={`
                    "nav nav"
                  "header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={"2rem 4rem 1fr 60px"}
      gridTemplateColumns={"1fr 1fr"}
      h="100vh"
      w="100vw"
      // gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area="nav">
        Nav
      </GridItem>
      <GridItem pl="2" bg="white" area="header">
        <VStack spacing={0}>
          <Text height={4} fontSize="30px">
            EVENING PAGE
          </Text>
          <Text fontSize="20px">
            "those who give the most, receive the most"
          </Text>
        </VStack>
      </GridItem>
      <GridItem pl="0" bg="white" area="main">
        <EveningMain />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
