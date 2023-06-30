import { Box, Flex, Stack, Textarea, useDisclosure } from "@chakra-ui/react";
import SectionHeader from "./UI Components/SectionHeader";
import ProgressSlider from "./UI Components/ProgressSlider";
import CheckBoxList from "./UI Components/CheckBoxList";
import SectionButton from "./UI Components/SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";
import IconSlider from "./UI Components/IconSlider";
import AllModal from "./UI Components/AllModal";
import ChooseGoals from "./ChooseGoals";
import { useState } from "react";
import NoteBadTimeAndSubmitAll from "./NoteBadTimeAndSubmitAll";

const EveningMain = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const openModal2 = () => setIsOpen2(true);

  const closeModal1 = () => setIsOpen1(false);
  const closeModal2 = () => setIsOpen2(false);

  const [chooseGolsTitle, setChooseGolsTitle] = useState(
    "chose project for tommorow"
  );

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
        title={chooseGolsTitle}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={
          <ChooseGoals
            onClose={closeModal1}
            changeTitle={() => setChooseGolsTitle("chose goals for tommorow")}
          />
        }
      />
      <AllModal
        title="Note Bad Time & Submit"
        onOpen={isOpen2}
        onClose={closeModal2}
        children={<NoteBadTimeAndSubmitAll />}
      />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <Stack marginBottom={2}>
            <SectionHeader HeadingName={HeadingNames.goals} />
            <ProgressSlider sliderName={"Goal One: complited "} />
            <ProgressSlider sliderName={"Goal Two: complited "} />
            <ProgressSlider sliderName={"Goal Three: complited "} />
            <SectionButton
              buttonName="Choose Goals For Tommorow"
              onClick={openModal1}
            />
          </Stack>
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
          <VotesCastHabits />
          <Box marginBottom={2}>
            <SectionHeader HeadingName={HeadingNames.yourEngine} />
            <IconSlider />
          </Box>
          <SectionHeader HeadingName={HeadingNames.doodles} />
          <Textarea
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            placeholder="Write down some doodles"
            resize={"none"}
            marginBottom={2}
            _hover={{
              bg: "blue.400",
              // placeholder: "",
            }}
          />
          <SectionButton buttonName="Note Bad Time" onClick={openModal2} />
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
