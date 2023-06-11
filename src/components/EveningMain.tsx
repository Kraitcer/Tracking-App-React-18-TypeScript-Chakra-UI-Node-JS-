import { Box, Flex, Textarea, useDisclosure } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import ProgressSlider from "./ProgressSlider";
import CheckBoxList from "./CheckBoxList";
import SectionButton from "./SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";
import IconSlider from "./your_engine_section/IconSlider";
import AllModal from "./AllModal";
import ChooseGoals from "./ChooseGoals";
import TrackHabitsOnMasterPlan from "./TrackHabitsOnMasterPlan";
import { useState } from "react";
import NoteBadTimeAndSubmitAll from "./NoteBadTimeAndSubmitAll";
import vateOne from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-1.svg";
import vateTwo from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-2-2.svg";
import vateThree from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-3-3.svg";

const EveningMain = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const openModal2 = () => setIsOpen2(true);
  const openModal3 = () => setIsOpen3(true);

  const closeModal1 = () => setIsOpen1(false);
  const closeModal2 = () => setIsOpen2(false);
  const closeModal3 = () => setIsOpen3(false);

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
      <AllModal
        title="chose goals for tommorow"
        onOpen={isOpen1}
        onClose={closeModal1}
        children={<ChooseGoals onClose={closeModal1} />}
      />
      <AllModal
        title="track habits on master plan"
        onOpen={isOpen2}
        onClose={closeModal2}
        children={<TrackHabitsOnMasterPlan />}
      />
      <AllModal
        title="Note Bad Time & Submit"
        onOpen={isOpen3}
        onClose={closeModal3}
        children={<NoteBadTimeAndSubmitAll />}
      />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <SectionHeader HeadingName={HeadingNames.goals} />
          <ProgressSlider sliderName={"Goals One: complited "} />
          <ProgressSlider sliderName={"Goals Two: complited "} />
          <ProgressSlider sliderName={"Goals Three: complited "} />
          <SectionButton
            buttonName="Choose Goals For Tommorow"
            onClick={openModal1}
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
        <Box w="280px" flexDirection={"column"} padding={0}>
          <SectionHeader HeadingName={HeadingNames.votesCast} />
          <VotesCastHabits icon={vateOne} />
          <VotesCastHabits icon={vateTwo} />
          <VotesCastHabits icon={vateThree} />
          <SectionButton
            buttonName="Tracking Habits on Master Plan"
            onClick={openModal2}
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
          <SectionButton buttonName="Note Bad Time" onClick={openModal3} />
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
