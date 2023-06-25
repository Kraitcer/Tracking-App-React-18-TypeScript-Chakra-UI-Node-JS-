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

interface Props {
  onClose: () => void;
  changeTitle: () => void;
}
export interface FormData {
  projects: string;
  att_time_: string;
  IWill_Smart: string;
  // smartServey: boolean;
}

const schema = z.object({
  projects: z.enum(projectsArray, {
    errorMap: () => ({ message: "Choose Project" }),
  }),
  att_time_: z.string().optional(),
  IWill_Smart: z.string().optional(),
  //   .min(3, {
  //     message:
  //       "Today's gratefulness is required and must be at least 3 characters",
  //   })
  //   .max(120),
  // smartServey: z.boolean(),
});

const ChooseGoals = ({ onClose, changeTitle }: Props) => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [display, setDisplay] = useState("");

  const [goalsDataArrey, setGoalsDataArrey] = useState<any[]>([]);

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
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setActiveStep(2);
    setDisplay("none");
    changeTitle();
  };

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl display={display}>
            <Select
              {...register("projects")}
              placeholder="Select project"
              w={466}
              mb={2}
            >
              {projectsArray.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box display={display === "none" ? "" : "none"}>
            {/* <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
              <Text fontSize={30} marginTop={3}>
                AT
              </Text>
              <Input
                {...register("att_time_")}
                type="time"
                w={"150px"}
                padding={1}
                fontSize={20}
              />
              <Input {...register("IWill_Smart")} placeholder="I WILL" />
            </Flex> */}
            <Att_time_IWill_Smart register={register} />
            <Flex>
              <Text textTransform={"uppercase"}>
                DOES YOUR GOAL "{}" MATCH THE "SMART" PARAMETRS ?
              </Text>
            </Flex>
            {/* <Controller
              name="smartServey"
              control={control}
              render={({ field }) => <SmartServey field={field} />}
            /> */}
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
