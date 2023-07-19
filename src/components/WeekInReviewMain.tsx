import { Box, Flex, Input, Textarea } from "@chakra-ui/react";
import SectionHeader from "./UI Components/SectionHeader";
import SectionButton from "./UI Components/SectionButton";
import AllModal from "./UI Components/AllModal";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProjectsOfTheWeek } from "./ProjectsOfTheWeek";
import GoalsSection from "./GoalsSection";
import ProjectsOfTheWeekSection from "./ProjectsOfTheWeekSection";

const EveningMain = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const openModal2 = () => setIsOpen2(true);

  const closeModal1 = () => setIsOpen1(false);
  const closeModal2 = () => setIsOpen2(false);

  const [chooseGolsTitle, setChooseGolsTitle] = useState(
    "chose project for tommorow"
  );

  const schema = z.object({
    projectOneProgress: z.number().optional(),
    projectTwoProgress: z.number().optional(),
    projectThreeProgress: z.number().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const { handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {};

  useEffect(() => {}, []);

  return (
    <>
      <AllModal
        title={chooseGolsTitle}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={<p>fuck</p>}
      />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <SectionHeader HeadingName={"projects"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProjectsOfTheWeekSection
              sliderOneName={ProjectsOfTheWeek[0]}
              sliderTwoName={ProjectsOfTheWeek[1]}
              sliderThreeName={ProjectsOfTheWeek[2]}
              sliderOneValue={(data: number) => {
                setValue("projectOneProgress", data);
              }}
              sliderTwoValue={(date: number) => {
                setValue("projectTwoProgress", date);
              }}
              sliderThreeValue={(date: number) => {
                setValue("projectThreeProgress", date);
              }}
            />
          </form>

          <SectionHeader HeadingName={"habits"} />
          <Textarea
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            placeholder="Write down some doodles"
            resize={"none"}
            marginBottom={2}
            _hover={{
              bg: "blue.400",
              // placeholder: "",
            }}
          />
        </Box>
        <Box w="280px" flexDirection={"column"}>
          <SectionHeader HeadingName={"habits"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <SectionHeader HeadingName={"tracking"} />
            <SectionButton
              buttonName="Note Bad Time"
              onClick={() => {
                openModal2(), onSubmit;
              }}
            />
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
