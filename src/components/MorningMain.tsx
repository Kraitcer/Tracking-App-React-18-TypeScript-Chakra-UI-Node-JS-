import SectionHeader from "./UI Components/SectionHeader";
import SleeepSection from "./SleeepSection";
import { Box, Flex } from "@chakra-ui/layout";
import SectionButton from "./UI Components/SectionButton";
import { FieldValues, useForm, useController } from "react-hook-form";
import { ChangeEvent } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const { field } = useController({ name: "wokeUpEnergized", control });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // reset();
    //   setGoalsAndEngineDataObj(data);
    // console.log(goalsAndEngineDataObj);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="sleep" />
          <SleeepSection
            sleeprRating={(data) => setValue("sleeprRating", data + 1)}
            register={register}
            control={control}
            // wokeUpEnergized={(data) => {
            //   console.log(data);
            //   //   setValue("wokeUpEnergized", data);
            // }}
          />
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="today's goals" />
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <SectionHeader HeadingName="todo list" />
        </Box>
        <Box w="560px" flexDirection={"column"}>
          <SectionButton
            buttonName="submit all and start the day"
            onClick={() => onSubmit}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default MorningMain;
