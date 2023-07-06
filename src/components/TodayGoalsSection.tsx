import React, { useState } from "react";
import SelectProjects from "./SelectProjects";
import { Flex, HStack, VStack } from "@chakra-ui/layout";
import Att_time_IWill_Smart from "./UI Components/Att_time_IWill_Smart";
import { projectsArray } from "./Projects";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues, useForm } from "react-hook-form";
import SectionButton from "./UI Components/SectionButton";

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

const TodayGoalsSection = () => {
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

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap={2} alignItems={"center"}>
            <Flex>
              <SelectProjects register={register} />
            </Flex>
            <HStack>
              <Att_time_IWill_Smart
                register={register}
                goalsData={["goalOne_att_time_", "goalOne_IWill_Smart"]}
              />
              <Flex>
                <SectionButton
                  buttonName="S.M.A.R.T. ?"
                  onClick={() => console.log("fuck")}
                />
              </Flex>
            </HStack>
            <HStack>
              <Att_time_IWill_Smart
                register={register}
                goalsData={["goalTwo_att_time_", "goalTwo_IWill_Smart"]}
              />
              <Flex>
                <SectionButton
                  buttonName="S.M.A.R.T. ?"
                  onClick={() => console.log("fuck")}
                />
              </Flex>
            </HStack>
            <HStack>
              <Att_time_IWill_Smart
                register={register}
                goalsData={["goalThree_att_time_", "goalThree_IWill_Smart"]}
              />
              <Flex>
                <SectionButton
                  buttonName="S.M.A.R.T. ?"
                  onClick={() => console.log("fuck")}
                />
              </Flex>
            </HStack>
          </VStack>
        </form>
      </Flex>
    </>
  );
};

export default TodayGoalsSection;
