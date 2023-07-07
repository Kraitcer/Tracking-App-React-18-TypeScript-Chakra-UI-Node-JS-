import { useState } from "react";
import SelectProjects from "./SelectProjects";
import { Flex, VStack } from "@chakra-ui/layout";
import { projectsArray } from "./Projects";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues, useForm } from "react-hook-form";
import TodayGoalPad from "./UI Components/TodayGoalPad";

interface Props {
  onClick: (data: string) => void;
  //   goalOneClick: () => void;
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

  const [dispalyOne, setDispalyOne] = useState("flex");
  const [dispalyTwo, setDispalyTwo] = useState("flex");
  const [dispalyThree, setDispalyThree] = useState("flex");

  const [goalOneValue, setGoalOneValue] = useState("");
  const [goalTwoValue, setGoalTwoValue] = useState("");
  const [goalThreeValue, setGoalThreeValue] = useState("");

  const onSubmit = (data: FieldValues) => {
    if (data.goalOne_IWill_Smart) {
      onClick(`${data.goalOne_IWill_Smart}`);
      setGoalOneValue(
        `at ${data.goalOne_att_time_} i will ${data.goalOne_IWill_Smart}`
      );
      setDispalyOne("none");
    }
    if (data.goalTwo_IWill_Smart) {
      onClick(`${data.goalTwo_IWill_Smart}`);
      setGoalTwoValue(
        `at ${data.goalTwo_att_time_} i will ${data.goalTwo_IWill_Smart}`
      );
      setDispalyTwo("none");
    }
    if (data.goalThree_IWill_Smart) {
      onClick(`${data.goalThree_IWill_Smart}`);
      setGoalThreeValue(
        `at ${data.goalThree_att_time_} i will ${data.goalThree_IWill_Smart}`
      );
      setDispalyThree("none");
    }
    // if (
    //   !data.goalOne_IWill_Smart &&
    //   !data.goalOne_att_time_ &&
    //   !data.goalThree_IWill_Smart &&
    //   !data.goalThree_att_time_ &&
    //   !data.goalTwo_IWill_Smart &&
    //   !data.goalTwo_att_time_
    // ) {
    //   console.log("Fucking ASS", data);
    // } else {
    //   onClick();
    //   console.log("ASS No Fuck", data);
    // }
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap={2} alignItems={"center"}>
            <Flex>
              <SelectProjects register={register} />
            </Flex>
            <TodayGoalPad
              register={register}
              goalsData={["goalOne_att_time_", "goalOne_IWill_Smart"]}
              children={goalOneValue}
              display={dispalyOne}
            />
            <TodayGoalPad
              register={register}
              goalsData={["goalTwo_att_time_", "goalTwo_IWill_Smart"]}
              children={goalTwoValue}
              display={dispalyTwo}
            />
            <TodayGoalPad
              register={register}
              goalsData={["goalThree_att_time_", "goalThree_IWill_Smart"]}
              children={goalThreeValue}
              display={dispalyThree}
            />
            {/* <HStack>
              <Att_time_IWill_Smart
                register={register}
                goalsData={["goalThree_att_time_", "goalThree_IWill_Smart"]}
              />
              <Flex>
                <SectionButton buttonName="S.M.A.R.T. ?" onClick={() => {}} />
              </Flex>
            </HStack> */}
          </VStack>
        </form>
      </Flex>
    </>
  );
};

export default TodayGoalsSection;
