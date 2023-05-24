import { Box, Button, Center, Divider, Flex } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import ProgressSlider from "./ProgressSlider";
import CheckBoxList from "./CheckBoxList";
import SectionButton from "./SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";

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
      <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
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
      <Box w="280px" h={727} flexDirection={"column"}>
        <SectionHeader HeadingName={HeadingNames.votesCast} />
        <VotesCastHabits submitBtnName={"1"} />
        <VotesCastHabits submitBtnName={"2"} />
        <VotesCastHabits submitBtnName={"3"} />
        <SectionButton buttonName="Tracking Habits on Master Plan" />
        <SectionHeader HeadingName={HeadingNames.yourEngine} />
        <SectionHeader HeadingName={HeadingNames.doodles} />
      </Box>
    </Flex>
  );
};

export default EveningMain;
