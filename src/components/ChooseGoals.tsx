import {
  Flex,
  Text,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  useToast,
  Select,
  FormControl,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import Att_time_IWill_Smart from "./UI Components/Att_time_IWill_Smart";
import SmartServey from "./UI Components/SmartServey";
import { projectsArray } from "./Projects";

interface GoalProps {
  goal: () => string;
}

interface Props {
  onClose: () => void;
  changeTitle: () => void;
}
type FormInputs = {
  smartData: string;
};
export interface FormData {
  projects: string;
  goalOne_att_time_: string;
  goalTwo_att_time_: string;
  goalThree_att_time_: string;
  goalOne_IWill_Smart: string;
  goalTwo_IWill_Smart: string;
  goalThree_IWill_Smart: string;
  value: string;
  smart: boolean;
}

const schema = z.object({
  projects: z.enum(projectsArray, {
    errorMap: () => ({ message: "Choose Project" }),
  }),
  goalOne_att_time_: z.string().optional(),
  goalTwo_att_time_: z.string().optional(),
  goalThree_att_time_: z.string().optional(),
  goalOne_IWill_Smart: z.string().optional(),
  goalTwo_IWill_Smart: z.string().optional(),
  goalThree_IWill_Smart: z.string().optional(),
  smart: z.boolean().optional(),
});

const ChooseGoals = ({ onClose, changeTitle }: Props) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const [goalsDatas, setGoalsDatas] = useState<
    FormData | string[] | number | any
  >(["goalOne_att_time_", "goalOne_IWill_Smart"]);

  const {
    setValue,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      goalOne_att_time_: "",
      goalTwo_att_time_: "",
      goalThree_att_time_: "",
      goalOne_IWill_Smart: "",
      goalTwo_IWill_Smart: "",
      goalThree_IWill_Smart: "",
      smart: false,
    },
  });

  const [display, setDisplay] = useState("");

  const toast = useToast();

  const steps = [
    { title: "Project", description: "Contact Info" },
    { title: "Goal 1", description: "Contact Info" },
    { title: "Goal 2", description: "Date & Time" },
    { title: "Goal 3", description: "Select Rooms" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  function stepFour(data: any) {
    if (
      !data["smart"] ||
      !data["goalOne_att_time_"] ||
      !data["goalOne_IWill_Smart"]
    )
      return;
    onClose();
    reset(
      {
        goalThree_att_time_: "",
        goalThree_IWill_Smart: "",
        // smart: false,
      },
      { keepValues: true }
    );
  }

  function stepTwoThree({ data, goalArray, step, resetObj }: any) {
    if (!data["smart"] && !data[goalArray[0]] && !data[goalArray[1]]) return;
    console.log("TwoThree");
    setGoalsDatas(goalArray);
    setActiveStep(step);
    reset(resetObj, { keepValues: true });
  }
  function stepOne() {
    setDisplay("none");
    setActiveStep(2);
  }

  const onSubmit = (data: FieldValues) => {
    activeStep == 1
      ? stepOne()
      : activeStep == 2
      ? stepTwoThree({
          data: data,
          goalArray: ["goalTwo_att_time_", "goalTwo_IWill_Smart"],
          step: 3,
          resetObj: {
            goalOne_att_time_: "",
            goalOne_IWill_Smart: "",
          },
        })
      : activeStep == 3
      ? stepTwoThree({
          data: data,
          goalArray: ["goalThree_att_time_", "goalThree_IWill_Smart"],
          step: 4,
          resetObj: {
            goalTwo_att_time_: "",
            goalTwo_IWill_Smart: "",
          },
        })
      : stepFour(data);
    setRefreshKey((prevKey) => prevKey + 1);
    setValue("smart", false);
    console.log(data);
    changeTitle();
  };

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl display={display}>
            <Select
              {...register("projects")}
              name="projects"
              placeholder="Select project"
              w={466}
              mb={2}
            >
              {projectsArray.map((project, index) => (
                <option key={index + 1} value={project}>
                  {project}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box display={display === "none" ? "" : "none"}>
            <Att_time_IWill_Smart register={register} goalsData={goalsDatas} />
            <Flex>
              <Text textTransform={"uppercase"}>
                DOES YOUR GOAL "{}" MATCH THE "SMART" PARAMETRS ?
              </Text>
            </Flex>
            <SmartServey
              // register={register}
              key={refreshKey}
              onChange={() => {
                console.log("SmartServey ONLINE");
                setValue("smart", true);
              }}
            />
          </Box>
          <SectionButton
            buttonName={
              activeStep == 4
                ? "Done"
                : activeStep == 1
                ? "Continue With Goals"
                : "Next Goal"
            }
            onClick={() => onSubmit}
          />
        </form>
      </Flex>

      <Box marginTop={2} marginBottom={2}>
        <Stepper index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default ChooseGoals;
