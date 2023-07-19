import { Box, Flex, HStack, Input, Textarea, VStack } from "@chakra-ui/react";
import SectionHeader from "./UI Components/SectionHeader";
import SectionButton from "./UI Components/SectionButton";
import AllModal from "./UI Components/AllModal";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProjectsOfTheWeek } from "./ProjectsOfTheWeek";
import Habitbuilder from "./habitbuilder";
import ProjectsOfTheWeekSection from "./ProjectsOfTheWeekSection";
import DoMoreLessSection from "./DoMoreLessSection";

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

  const [habitsDataArrey, setHabitsDataArrey] = useState<any[]>([]);

  const [grateDataArrey, setGrateDataArrey] = useState<any[]>([]);

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

          <SectionHeader HeadingName={"tracking"} />
          <Textarea
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            placeholder="Record an improvement"
            resize={"none"}
            marginBottom={2}
            _hover={{
              bg: "blue.400",
              // placeholder: "",
            }}
          />
          <SectionButton
            onClick={() => {}}
            buttonName="Refined projects & Target Life"
          />
        </Box>
        <Box w="280px" flexDirection={"column"}>
          <SectionHeader HeadingName={"habits"} />
          <Habitbuilder
            getData={habitsDataArrey}
            setData={(data) => {
              setHabitsDataArrey(data);
            }}
          />
          {/* <habitbuilder /> */}
          <SectionHeader HeadingName={"do more/less"} />
          <DoMoreLessSection
            getData={grateDataArrey}
            setData={setGrateDataArrey}
          />
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
