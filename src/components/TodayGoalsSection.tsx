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
import TodayGoalInput from "./UI Components/TodayGoalInput";

interface todayGoalsArray {
  id: number;
  project: string;
  goalName: string;
  goalTime: string;
  goal: string;
  isEditing: boolean;
}

interface Props {
  onClick: (data: string) => void;
}

const schema = z.object({
  // projects: z.enum(projectsArray, {
  //   errorMap: () => ({ message: "Choose Project" }),
  // }),
  projects: z.enum(projectsArray).optional(),
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

  // const [refreshKey, setRefreshKey] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const todayGoalsArray = [
    {
      id: 0,
      project: "",
      goalName: "goalOne",
      goalTime: "",
      goal: "",
      isEditing: true,
      goalDataTime: "goalOne_att_time_",
      goalDataName: "goalOne_IWill_Smart",
      reset: {
        goalOne_att_time_: "",
        goalOne_IWill_Smart: "",
      },
    },
    {
      id: 1,
      project: "",
      goalName: "goalTwo",
      goalTime: "",
      goal: "",
      isEditing: true,
      goalDataTime: "goalTwo_att_time_",
      goalDataName: "goalTwo_IWill_Smart",
      reset: {
        goalTwo_att_time_: "",
        goalTwo_IWill_Smart: "",
      },
    },
    {
      id: 2,
      project: "",
      goalName: "goalThree",
      goalTime: "",
      goal: "",
      isEditing: true,
      goalDataTime: "goalThree_att_time_",
      goalDataName: "goalThree_IWill_Smart",
      reset: {
        goalThree_att_time_: "",
        goalThree_IWill_Smart: "",
      },
    },
  ];

  const [todayGoals, setTodayGoals] = useState(todayGoalsArray);

  //   const [innerButton, setInnerButton] = useState(true);

  const [isOpen1, setIsOpen1] = useState(false);
  const closeModal1 = () => setIsOpen1(false);
  const openModal1 = () => setIsOpen1(true);

  const [goals, setGoals] = useState("");
  // const
  const onSubmit = (data: FieldValues) => {
    setDisabled(true);
    // if (
    //   todayGoals[0].isEditing &&
    //   todayGoals[1].isEditing &&
    //   todayGoals[2].isEditing
    // ) {
    //   setDisabled(false);
    // }
    // ============================================================GOAL_ONE=================================
    if (data.goalOne_IWill_Smart) {
      console.log("onSubmit goalArray", todayGoals);
      onClick(`${data.goalOne_IWill_Smart}`);
      setTodayGoals(
        todayGoals.map((tudayGoal) =>
          tudayGoal.goalName === "goalOne"
            ? {
                ...tudayGoal,
                // project: data.projects,
                goal: data.goalOne_IWill_Smart,
                goalTime: data.goalOne_att_time_,
                // display: "none",
                isEditing: false,
              }
            : tudayGoal
        )
      );
      openModal1();
      setGoals(data.goalOne_IWill_Smart);
    }
    // ============================================================GOAL_TWO=================================
    if (data.goalTwo_IWill_Smart) {
      onClick(`${data.goalTwo_IWill_Smart}`);
      setTodayGoals(
        todayGoals.map((tudayGoal) =>
          tudayGoal.goalName === "goalTwo"
            ? {
                ...tudayGoal,
                // project: data.projects,
                goal: data.goalTwo_IWill_Smart,
                goalTime: data.goalTwo_att_time_,
                // display: "none",
                isEditing: false,
              }
            : tudayGoal
        )
      );
      openModal1();
      setGoals(data.goalTwo_IWill_Smart);
    }

    // ============================================================GOAL_THREE=================================
    if (data.goalThree_IWill_Smart) {
      onClick(`${data.goalThree_IWill_Smart}`);
      setTodayGoals(
        todayGoals.map((tudayGoal) =>
          tudayGoal.goalName === "goalThree"
            ? {
                ...tudayGoal,
                // project: data.projects,
                goal: data.goalThree_IWill_Smart,
                goalTime: data.goalThree_att_time_,
                // display: "none",
                isEditing: false,
              }
            : tudayGoal
        )
      );
      openModal1();
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
                console.log("modal", todayGoals);
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
                  setDisabled(false);
                }}
              />
            </Flex>
            {todayGoals.map((goal, index) =>
              !goal.isEditing ? (
                <TodayGoalPad
                  key={index}
                  children={[`${goal.goalTime}`, `${goal.goal}`]}
                  onDelete={() => {
                    setTodayGoals(
                      todayGoals.map((tadayGoal) =>
                        tadayGoal.id == goal.id
                          ? {
                              ...tadayGoal,
                              goalTime: "",
                              goal: "",
                              isEditing: true,
                            }
                          : tadayGoal
                      )
                    );
                    reset(goal.reset);
                  }}
                />
              ) : (
                <TodayGoalInput
                  key={index}
                  register={register}
                  goalsData={[`${goal.goalDataTime}`, `${goal.goalDataName}`]}
                  onClick={() => {
                    console.log("TodayGoalPad_OnCLick", todayGoals);
                    onSubmit;
                  }}
                />
              )
            )}
          </VStack>
        </form>
      </Flex>
    </>
  );
};

export default TodayGoalsSection;
