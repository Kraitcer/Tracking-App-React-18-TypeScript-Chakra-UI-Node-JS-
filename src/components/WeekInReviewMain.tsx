import { Box, Flex, HStack, Input, Textarea, VStack } from "@chakra-ui/react";
import SectionHeader from "./UI Components/SectionHeader";
import SectionButton from "./UI Components/SectionButton";
import AllModal from "./UI Components/AllModal";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectsArray } from "../components/Projects";
import Habitbuilder from "./habitbuilder";
import ProjectsOfTheWeekSection from "./ProjectsOfTheWeekSection";
import DoMoreLessSection from "./DoMoreLessSection";
import FetusIndex from "./FetusIndex";

const EveningMain = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const openModal2 = () => setIsOpen2(true);

  const closeModal1 = () => setIsOpen1(false);
  const closeModal2 = () => setIsOpen2(false);

  const schema = z.object({
    projectOneProgress: z.number().optional(),
    projectTwoProgress: z.number().optional(),
    projectThreeProgress: z.number().optional(),
    projectFourProgress: z.number().optional(),
    projectFiveProgress: z.number().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const { handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [projectsData, setProjectsData] = useState<any>();

  const [habitsDataArrey, setHabitsDataArrey] = useState<any[]>([]);

  const [doMoreLessDataArrey, setDoMoreLessDataArrey] = useState<any[]>([]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setProjectsData(data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <AllModal
        title={"FETUS Index"}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={<FetusIndex projectsProgressData={projectsData} />}
      />
      <Flex justifyContent={"center"} gap={3}>
        <Box w="280px" h={727} bg="white" flexDirection={"column"} gap={0}>
          <SectionHeader HeadingName={"projects"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProjectsOfTheWeekSection
              onOpen={() => openModal1()}
              sliderOneName={projectsArray[0]}
              sliderTwoName={projectsArray[1]}
              sliderThreeName={projectsArray[2]}
              sliderFourName={projectsArray[3]}
              sliderFiveName={projectsArray[4]}
              sliderOneValue={(data: number) => {
                setValue("projectOneProgress", data);
              }}
              sliderTwoValue={(date: number) => {
                setValue("projectTwoProgress", date);
              }}
              sliderThreeValue={(date: number) => {
                setValue("projectThreeProgress", date);
              }}
              sliderFourValue={(date: number) => {
                setValue("projectFourProgress", date);
              }}
              sliderFiveValue={(date: number) => {
                setValue("projectFiveProgress", date);
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
            getData={doMoreLessDataArrey}
            setData={setDoMoreLessDataArrey}
          />
        </Box>
      </Flex>
    </>
  );
};

export default EveningMain;
