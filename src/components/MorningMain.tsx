import { SleeepSection } from "./SleeepSection";
import SectionHeader from "./UI Components/SectionHeader";
import { Box, Flex } from "@chakra-ui/layout";
import SectionButton from "./UI Components/SectionButton";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TodayGoalsSection from "./TodayGoalsSection";
import AllModal from "./UI Components/AllModal";
import SmartServey from "./UI Components/SmartServey";

const schema = z.object({
  wakeUpTime: z.string(),
  wokeUpEnergized: z.boolean().optional(),
  hungryForActions: z.boolean().optional(),
  sleeprRating: z.number(),
});

export type FormData = z.infer<typeof schema>;

const MorningMain = () => {
  const { handleSubmit, setValue, register, control } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => setIsOpen1(true);

  const closeModal1 = () => setIsOpen1(false);

  const [goals, setGoals] = useState("");

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <AllModal
        title={`DOES YOUR GOAL ${goals} MATCH THE "SMART" PARAMETRS ?`}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={<SmartServey onChange={() => console.log("Smart")} />}
      />
      <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="sleep" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <SleeepSection
              sleeprRating={(data) => setValue("sleeprRating", data + 1)}
              register={register}
              control={control}
            />
          </form>
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="today's goals" />
          <TodayGoalsSection
            onClick={(data) => {
              openModal1(), setGoals(data);
            }}
          />
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="todo list" />
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SectionButton
              buttonName="submit all and start the day"
              onClick={() => onSubmit}
            />
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default MorningMain;
