import { useState } from "react";
import { Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import EveningMain from "./components/EveningMain";
import SectionButton from "./components/UI Components/SectionButton";
import MorningMain from "./components/MorningMain";

function App() {
  const [main, setMain] = useState<any>();
  const [mainTitle, setMainTitle] = useState<any>([
    "EVENING PAGE",
    "those who give the most, receive the most",
  ]);
  return (
    <Grid
      templateAreas={`
                    "nav nav"
                  "header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={"3.2rem 4rem 1fr 30px"}
      gridTemplateColumns={"1fr 1fr"}
      h="100vh"
      w="100vw"
      // gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="blue.300" area="nav">
        <Flex gap={2} mt={1.5} mr={2}>
          <SectionButton
            buttonName="survey"
            onClick={() => console.log("week in rewiev")}
          />
          <SectionButton
            buttonName="last week"
            onClick={() => console.log("week in rewiev")}
          />
          <SectionButton
            buttonName="next week"
            onClick={() => console.log("week in rewiev")}
          />
          <SectionButton
            buttonName="evening"
            onClick={() => {
              setMain(<EveningMain />),
                setMainTitle([
                  "EVENING PAGE",
                  "those who give the most, receive the most",
                ]);
            }}
          />
          <SectionButton
            buttonName="morning"
            onClick={() => {
              setMain(<MorningMain />),
                setMainTitle([
                  "MORNING PAGE",
                  "be the bullet, not the ping pong ball",
                ]);
            }}
          />
          <SectionButton
            buttonName="master"
            onClick={() => console.log("master")}
          />
        </Flex>
      </GridItem>
      <GridItem pl="2" bg="white" area="header">
        <VStack spacing={0}>
          <Text height={4} fontSize="30px">
            {mainTitle[0]}
          </Text>
          <Text fontSize="20px">"{mainTitle[1]}"</Text>
        </VStack>
      </GridItem>
      <GridItem pl="0" bg="white" area="main">
        {main}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
