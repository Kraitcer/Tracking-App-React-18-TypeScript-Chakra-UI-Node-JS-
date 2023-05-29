import { Box, Button, Center, Divider, Flex, Textarea } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import ProgressSlider from "./ProgressSlider";
import CheckBoxList from "./CheckBoxList";
import SectionButton from "./SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";
import IconSlider from "./your_engine_section/IconSlider";

const EveningMain = () => {
  const HeadingNames = {
    goals: "goals",
    doneList: "done list",
    gratefulness: "gratefulness",
    votesCast: "votes cast",
    yourEngine: "your engine",
    doodles: "doodles",
  };
  return (
    <Flex justifyContent={"center"} gap={3}>
      <Box w="280px" bg="white" flexDirection={"column"} gap={0}>
        <SectionHeader HeadingName={HeadingNames.goals} />
        <ProgressSlider sliderName={"Goals One: complited "} />
        <ProgressSlider sliderName={"Goals Two: complited "} />
        <ProgressSlider sliderName={"Goals Three: complited "} />
        <SectionButton buttonName="Choose Goals For Tommorow" />
        <SectionHeader HeadingName={HeadingNames.doneList} />
        <CheckBoxList checkboxName={"fuck"} />
        <SectionHeader HeadingName={HeadingNames.gratefulness} />
        <GrateFulnessSection />
      </Box>
      {/* <Divider orientation={"vertical"} size="20px" colorScheme="pink" /> */}
      <Box w="280px" flexDirection={"column"}>
        <SectionHeader HeadingName={HeadingNames.votesCast} />
        <VotesCastHabits submitBtnName={"1"} />
        <VotesCastHabits submitBtnName={"2"} />
        <VotesCastHabits submitBtnName={"3"} />
        <SectionButton buttonName="Tracking Habits on Master Plan" />
        <Box marginBottom={2}>
          <SectionHeader HeadingName={HeadingNames.yourEngine} />
          <IconSlider />
        </Box>
        <SectionHeader HeadingName={HeadingNames.doodles} />
        <Textarea
          variant="brandPrimary"
          bg={"blue.200"}
          color={"white"}
          // border={"1px solid blue.400"}
          placeholder="Write down some doodles"
          //   h="23%"
          resize={"none"}
          marginBottom={1}
        />
        <SectionButton buttonName="Note Bad Time" />
      </Box>
    </Flex>
  );
};

export default EveningMain;
