import { Box, Flex, Textarea, useDisclosure } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import ProgressSlider from "./ProgressSlider";
import CheckBoxList from "./CheckBoxList";
import SectionButton from "./SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";
import IconSlider from "./your_engine_section/IconSlider";
import AllModal from "./AllModal";

const EveningMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const HeadingNames = {
    goals: "goals",
    doneList: "done list",
    gratefulness: "gratefulness",
    votesCast: "votes cast",
    yourEngine: "your engine",
    doodles: "doodles",
  };
  return (
    <>
      <AllModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <SectionHeader HeadingName={HeadingNames.goals} />
          <ProgressSlider sliderName={"Goals One: complited "} />
          <ProgressSlider sliderName={"Goals Two: complited "} />
          <ProgressSlider sliderName={"Goals Three: complited "} />
          <SectionButton
            buttonName="Choose Goals For Tommorow"
            onClick={onOpen}
          />
          <SectionHeader HeadingName={HeadingNames.doneList} />
          <Box
            w={"100%"}
            h={"17%"}
            border={"2px solid"}
            borderColor={"blue.100"}
            overflowY={"scroll"}
            marginBottom={2}
            padding={2}
          >
            <CheckBoxList checkboxName={"fuck"} />
            <CheckBoxList checkboxName={"fuck"} />
            <CheckBoxList checkboxName={"fuck"} />
            <CheckBoxList checkboxName={"fuck"} />
            <CheckBoxList checkboxName={"fuck"} />
            <CheckBoxList checkboxName={"fuck"} />
          </Box>
          <SectionHeader HeadingName={HeadingNames.gratefulness} />
          <GrateFulnessSection />
        </Box>
        <Box w="280px" flexDirection={"column"}>
          <SectionHeader HeadingName={HeadingNames.votesCast} />
          <VotesCastHabits submitBtnName={"1"} />
          <VotesCastHabits submitBtnName={"2"} />
          <VotesCastHabits submitBtnName={"3"} />
          <SectionButton
            buttonName="Tracking Habits on Master Plan"
            onClick={onOpen}
          />
          <Box marginBottom={2}>
            <SectionHeader HeadingName={HeadingNames.yourEngine} />
            <IconSlider />
          </Box>
          <SectionHeader HeadingName={HeadingNames.doodles} />
          <Textarea
            variant="brandPrimary"
            bg={"blue.200"}
            color={"white"}
            placeholder="Write down some doodles"
            resize={"none"}
            marginBottom={1}
          />
          <SectionButton buttonName="Note Bad Time" onClick={onOpen} />
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
