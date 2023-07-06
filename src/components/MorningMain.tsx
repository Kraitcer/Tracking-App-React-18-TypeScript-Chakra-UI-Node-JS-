import SectionHeader from "./UI Components/SectionHeader";
import SleeepSection from "./SleeepSection";
import { Box, Flex } from "@chakra-ui/layout";
import SectionButton from "./UI Components/SectionButton";
import { FieldValues, useForm, useController } from "react-hook-form";
import { ChangeEvent } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TodayGoalsSection from "./TodayGoalsSection";

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
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
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
        <TodayGoalsSection />
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
  );
};

export default MorningMain;
