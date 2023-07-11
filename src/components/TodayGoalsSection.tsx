import { useState } from "react";
import SelectProjects from "./SelectProjects";
import { Flex, VStack } from "@chakra-ui/layout";
import { projectsArray } from "./Projects";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues, useForm } from "react-hook-form";
import TodayGoalPad from "./UI Components/TodayGoalPad";
import InnerButton from "./UI Components/InnerButton";
import AllModal from "./UI Components/AllModal";
import SmartServey from "./UI Components/SmartServey";

interface Props {
  onClick: (data: string) => void;
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

export type FormData = z.infer<typeof schema>;

export const TodayGoalsSection = ({
  onClick,
}: // goalOneClick
Props) => {
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

  const [refreshKey, setRefreshKey] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const [dispalyOne, setDispalyOne] = useState("flex");
  const [dispalyTwo, setDispalyTwo] = useState("flex");
  const [dispalyThree, setDispalyThree] = useState("flex");

  const [goalOneValue, setGoalOneValue] = useState("");
  const [goalTwoValue, setGoalTwoValue] = useState("");
  const [goalThreeValue, setGoalThreeValue] = useState("");

  //   const [innerButton, setInnerButton] = useState(true);

  const [isOpen1, setIsOpen1] = useState(false);
  const closeModal1 = () => setIsOpen1(false);
  const openModal1 = () => setIsOpen1(true);

  const [goals, setGoals] = useState("");

  const onSubmit = (data: FieldValues) => {
    setDisabled(true);

    if (data.goalOne_IWill_Smart) {
      onClick(`${data.goalOne_IWill_Smart}`);
      setGoalOneValue(
        `at ${data.goalOne_att_time_} i will ${data.goalOne_IWill_Smart}`
      );
      openModal1();
      setDispalyOne("none");
      setGoals(data.goalOne_IWill_Smart);
    }
    if (data.goalTwo_IWill_Smart) {
      onClick(`${data.goalTwo_IWill_Smart}`);
      setGoalTwoValue(
        `at ${data.goalTwo_att_time_} i will ${data.goalTwo_IWill_Smart}`
      );
      openModal1();
      setDispalyTwo("none");
      setGoals(data.goalTwo_IWill_Smart);
    }
    if (data.goalThree_IWill_Smart) {
      onClick(`${data.goalThree_IWill_Smart}`);
      setGoalThreeValue(
        `at ${data.goalThree_att_time_} i will ${data.goalThree_IWill_Smart}`
      );
      openModal1();
      setDispalyThree("none");
      setGoals(data.goalThree_IWill_Smart);
    }
    console.log(data);
  };

  return (
    <>
      <AllModal
        title={`DOES YOUR GOAL ${goals} MATCH THE "SMART" PARAMETRS ?`}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={
          <>
            <SmartServey
              innerBtnDisplay={"flex"}
              onClick={closeModal1}
              onChange={() => {
                setValue("smart", true);
                // setInnerButton(false);
              }}
            />
          </>
        }
      />
      <Flex justifyContent={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap={2} alignItems={"center"}>
            <Flex gap={2}>
              <SelectProjects register={register} disabled={disabled} />
              <InnerButton
                disabled={false}
                buttonName="reset"
                onClick={() => {
                  setDisabled(false), setDisabled(true);
                }}
              />
            </Flex>
            <TodayGoalPad
              register={register}
              goalsData={["goalOne_att_time_", "goalOne_IWill_Smart"]}
              children={goalOneValue}
              display={dispalyOne}
              //   disabled={() => setDisabled(true)}
              onClick={() => {}}
              onDelete={() => {
                setDispalyOne("flex"), setDisabled(false);
                reset({
                  goalOne_att_time_: "",
                  goalOne_IWill_Smart: "",
                });
              }}
            />
            <TodayGoalPad
              register={register}
              goalsData={["goalTwo_att_time_", "goalTwo_IWill_Smart"]}
              children={goalTwoValue}
              display={dispalyTwo}
              onClick={() => {}}
              //   disabled={() => setDisabled(true)}
              onDelete={() => {
                setDispalyTwo("flex"),
                  setDisabled(false),
                  reset({
                    goalTwo_att_time_: "",
                    goalTwo_IWill_Smart: "",
                  });
              }}
            />
            <TodayGoalPad
              register={register}
              goalsData={["goalThree_att_time_", "goalThree_IWill_Smart"]}
              children={goalThreeValue}
              display={dispalyThree}
              onClick={() => {}}
              //   disabled={() => setDisabled(true)}
              onDelete={() => {
                setDispalyThree("flex"),
                  setDisabled(false),
                  reset({
                    goalThree_att_time_: "",
                    goalThree_IWill_Smart: "",
                  });
              }}
            />
          </VStack>
        </form>
      </Flex>
    </>
  );
};

export default TodayGoalsSection;
