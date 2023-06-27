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
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { useRef, useState, useEffect } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import Att_time_IWill_Smart from "./UI Components/Att_time_IWill_Smart";
import SmartServey from "./UI Components/SmartServey";
import { projectsArray } from "./Projects";

// interface CheckboxData {
//   specific: boolean;
//   measureble: boolean;
//   actionable: boolean;
//   reasonable: boolean;
//   timeBound: boolean;
//   goalTime: string;
//   goalName: string;
// }

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
  // smart: z.boolean().optional(),
});

const ChooseGoals = ({ onClose, changeTitle }: Props) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const [checkBoxData, setCheckBoxData] = useState(false);

  const [goalsDatas, setGoalsDatas] = useState<
    FormData | string[] | number | any
  >(["goalOne_att_time_", "goalOne_IWill_Smart"]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { onChange, ref } = register("smart");
  // include type check against field path with the name you have supplied.

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

  function stepFour() {
    onClose();
  }
  function stepThree() {
    setGoalsDatas(["goalThree_att_time_", "goalThree_IWill_Smart"]);
    setActiveStep(4);
  }
  function stepTwo() {
    setGoalsDatas(["goalTwo_att_time_", "goalTwo_IWill_Smart"]);
    setActiveStep(3);
    // reset();
  }
  function stepOne() {
    setDisplay("none");
    setActiveStep(2);
  }

  const onSubmit = (data: FieldValues) => {
    activeStep === 1
      ? stepOne()
      : activeStep === 2
      ? stepTwo()
      : activeStep === 3
      ? stepThree()
      : stepFour();

    if (checkBoxData) {
      setRefreshKey((prevKey) => prevKey + 1), setCheckBoxData(false), reset();
    }

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
            <Att_time_IWill_Smart
              register={register}
              goalsData={goalsDatas}
              // goal={goalsData}
            />
            <Flex>
              <Text textTransform={"uppercase"}>
                DOES YOUR GOAL "{}" MATCH THE "SMART" PARAMETRS ?
              </Text>
            </Flex>
            <SmartServey
              key={refreshKey}
              onChange={() => {
                setCheckBoxData(true);
                console.log("Is Smart!!!");
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
