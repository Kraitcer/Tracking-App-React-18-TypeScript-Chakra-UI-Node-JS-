import React from "react";
import SectionHeader from "./UI Components/SectionHeader";
import SleeepSection from "./SleeepSection";
import { Box, Flex } from "@chakra-ui/layout";
import SectionButton from "./UI Components/SectionButton";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  wakeUpTime: z.number().optional(),
  wokeUpEnergized: z.boolean().optional(),
  hungryForActions: z.boolean().optional(),
  sleeprRating: z.number().optional(),
});

type FormData = z.infer<typeof schema>;

const onSubmit = (data: FieldValues) => {
  // console.log(data);
  //   setGoalsAndEngineDataObj(data);
  // console.log(goalsAndEngineDataObj);
};

const MorningMain = () => {
  const { handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
      <Box w="560px" flexDirection={"column"}>
        <SectionHeader HeadingName="sleep" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <SleeepSection />
        </form>
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
          onClick={() => {
            onSubmit;
            console.log("Morning Submit");
          }}
        />
      </Box>
    </Flex>
  );
};

export default MorningMain;
