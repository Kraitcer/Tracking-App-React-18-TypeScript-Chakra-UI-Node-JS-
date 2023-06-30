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
import { keys } from "lodash";

interface Props {
  onClose: () => void;
  changeTitle: () => void;
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

type FormData = z.infer<typeof schema>;

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
      projects: undefined,
      goalOne_att_time_: "",
      goalTwo_att_time_: "",
      goalThree_att_time_: "",
      goalOne_IWill_Smart: "",
      goalTwo_IWill_Smart: "",
      goalThree_IWill_Smart: "",
      smart: false,
    },
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

  function stepFour({ data, resetObj }: any) {
    if (
      !data["smart"] ||
      !data["goalOne_att_time_"] ||
      !data["goalOne_IWill_Smart"]
    )
      return;
    onClose();
    reset(resetObj, { keepValues: true });
  }

  function stepTwoThree({
    data,
    goalArray,
    step,
    resetObj,
    currentGoal,
    nextGoal,
  }: any) {
    if (!data["smart"] && !data[goalArray[0]] && !data[goalArray[1]])
      return toast({
        title: "SMART Checkboxes are requared",
        description: "Please check all checkboxes",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    // return;
    console.log("TwoThree");
    setGoalsDatas(goalArray);
    setActiveStep(step);
    reset(resetObj, { keepValues: true });
    toast({
      title: `${currentGoal} Goal is chosen`,
      description: `Choose ${nextGoal} One`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  function stepOne() {
    setDisplay("none");
    setActiveStep(2);
  }
  function addSubmit() {
    if (errors.projects)
      return toast({
        title: `${errors.projects.message}`,
        description: "Please choose the project",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
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
          nextGoal: "Second",
          currentGoal: "First",
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
          nextGoal: "Third",
          currentGoal: "Second",
        })
      : stepFour({
          data: data,
          resetObj: {
            goalThree_att_time_: "",
            goalThree_IWill_Smart: "",
          },
        });
    setRefreshKey((prevKey) => prevKey + 1);
    setGoalsDataOgj(data);
    setValue("smart", false);
    console.log(data);
    changeTitle();
  };
  useEffect(() => {
    if (goalsDataOgj)
      localStorage.setItem(
        "Tommorow Project & Goals",
        JSON.stringify(goalsDataOgj)
      );
  }, [goalsDataOgj]);

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl display={display}>
            <Select
              {...register(
                "projects"
                // , { required: true }
              )}
              name="projects"
              placeholder="Select project"
              defaultValue={"Select project"}
              w={466}
              mb={2}
            >
              {projectsArray.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </Select>
            {/* {errors.projects &&
              toast({
                title: `${"errors.projects.message"}`,
                description: "Please choose the project",
                status: "warning",
                duration: 9000,
                isClosable: true,
              })} */}
          </FormControl>
          <Box display={display === "none" ? "" : "none"}>
            <Att_time_IWill_Smart register={register} goalsData={goalsDatas} />
            <Flex>
              <Text textTransform={"uppercase"}>
                DOES YOUR GOAL "{}" MATCH THE "SMART" PARAMETRS ?
              </Text>
            </Flex>
            <SmartServey
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
            onClick={() => {
              addSubmit(), onSubmit;
            }}
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
