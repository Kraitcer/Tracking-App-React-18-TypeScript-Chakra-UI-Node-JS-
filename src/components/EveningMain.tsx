import { Box, Flex, Textarea } from "@chakra-ui/react";
import SectionHeader from "./UI Components/SectionHeader";
import CheckBoxList from "./UI Components/CheckBoxList";
import SectionButton from "./UI Components/SectionButton";
import GrateFulnessSection from "./GrateFulnessSection";
import VotesCastHabits from "./VotesCastHabits";
import IconSlider from "./UI Components/IconSlider";
import AllModal from "./UI Components/AllModal";
import ChooseGoals from "./ChooseGoals";
import { useEffect, useState } from "react";
import NoteBadTimeAndSubmitAll from "./NoteBadTimeAndSubmitAll";
import GoalsSection from "./GoalsSection";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToDayGoals } from "./ToDayGoals";

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

  const schema = z.object({
    goalOneProgress: z.number().optional(),
    goalTwoProgress: z.number().optional(),
    goalThreeProgress: z.number().optional(),
    health: z.number().optional(),
    emotions: z.number().optional(),
    intellect: z.number().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const { handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [goalsDataOgj, setGoalsDataOgj] = useState<FieldValues>({
    projects: undefined,
    goalOne_att_time_: "",
    goalTwo_att_time_: "",
    goalThree_att_time_: "",
    goalOne_IWill_Smart: "",
    goalTwo_IWill_Smart: "",
    goalThree_IWill_Smart: "",
    smart: false,
  });

  const [grateDataArrey, setGrateDataArrey] = useState<any[]>([]);

  const [habitsDataArrey, setHabitsDataArrey] = useState<any[]>([]);

  const [goalsAndEngineDataObj, setGoalsAndEngineDataObj] = useState<FormData>({
    emotions: 0,
    goalOneProgress: 70,
    goalThreeProgress: 70,
    goalTwoProgress: 70,
    health: 0,
    intellect: 0,
  });

  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    setGoalsAndEngineDataObj(data);
    // console.log(goalsAndEngineDataObj);
  };

  useEffect(() => {
    if (goalsAndEngineDataObj)
      localStorage.setItem(
        "goalsAndEngineDataObj",
        JSON.stringify(goalsAndEngineDataObj)
      );
  }, [goalsAndEngineDataObj]);

  return (
    <>
      <AllModal
        title={chooseGolsTitle}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={
          <ChooseGoals
            getData={goalsDataOgj}
            setData={setGoalsDataOgj}
            onClose={closeModal1}
            changeTitle={() => setChooseGolsTitle("chose goals for tommorow")}
          />
        }
      />
      <AllModal
        title="Note Bad Time & Submit"
        onOpen={isOpen2}
        onClose={closeModal2}
        children={
          <NoteBadTimeAndSubmitAll
            getTommorowData={goalsDataOgj}
            getGrateData={grateDataArrey}
            getTodayData={goalsAndEngineDataObj}
            getHabitsData={habitsDataArrey}
          />
        }
      />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <SectionHeader HeadingName={HeadingNames.goals} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <GoalsSection
              sliderOneName={ToDayGoals[0]}
              sliderTwoName={ToDayGoals[1]}
              sliderThreeName={ToDayGoals[2]}
              sliderOneValue={(data: number) => {
                setValue("goalOneProgress", data);
              }}
              sliderTwoValue={(date: number) => {
                setValue("goalTwoProgress", date);
              }}
              sliderThreeValue={(date: number) => {
                setValue("goalThreeProgress", date);
              }}
              children={
                <SectionButton
                  buttonName="Choose Goals For Tommorow"
                  onClick={() => {
                    openModal1();
                  }}
                />
              }
            />
          </form>

          <SectionHeader HeadingName={HeadingNames.doneList} />
          <Box
            w={"100%"}
            h={"19%"}
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
          <GrateFulnessSection
            getData={grateDataArrey}
            setData={setGrateDataArrey}
          />
        </Box>
        <Box w="280px" flexDirection={"column"}>
          <SectionHeader HeadingName={HeadingNames.votesCast} />
          <VotesCastHabits
            setData={(data) => {
              setHabitsDataArrey(data);
            }}
            getData={habitsDataArrey}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={2}>
              <SectionHeader HeadingName={HeadingNames.yourEngine} />
              <IconSlider
                healthValue={(data) => setValue("health", data)}
                emotionsValue={(data) => setValue("emotions", data)}
                intellectValue={(data) => setValue("intellect", data)}
              />
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
            <SectionButton
              buttonName="Note Bad Time"
              onClick={() => {
                openModal2(), onSubmit;
              }}
            />
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
