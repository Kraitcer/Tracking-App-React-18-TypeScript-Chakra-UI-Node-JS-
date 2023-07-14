import {
  HStack,
  Input,
  Image,
  Flex,
  useToast,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import vateOne from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-1.svg";
import vateTwo from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-2-2.svg";
import vateThree from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-3-3.svg";
import vateFour from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-4.svg";
import vateFive from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-5.svg";
import vateSix from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-6.svg";
import { habitCategories } from "./habitCategories";

const schema = z.object({
  habitImprovement: z
    .string()
    .min(3, {
      message: "improvement required and must be at least 3 characters",
    })
    .max(18),
  habitImprovementDetails: z
    .string()
    .min(3, {
      message: "improvement details required and must be at least 3 characters",
    })
    .max(120),
  category: z.enum(habitCategories, {
    errorMap: () => ({ message: "choose habit is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setData: (data: any) => void;
  getData: any[];
}

const VotesCastHabits = ({ setData, getData }: Props) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [currentIcon, setCurrentIcon] = useState(0);

  const [habitsDataArrey, setHabitsDataArrey] = useState<any[]>([]);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (getData.length === 6)
      localStorage.setItem("Habits array", JSON.stringify(getData));
  }, [getData]);
  // useEffect(() => {
  //   if (habitsDataArrey.length === 6)
  //     localStorage.setItem("Habits array", JSON.stringify(habitsDataArrey));
  // }, [habitsDataArrey]);

  const voteIcons = [vateOne, vateTwo, vateThree, vateFour, vateFive, vateSix];

  function nextHabit() {
    if (errors.category)
      toast({
        title: "Vote Cast: Chose habis",
        description: `${errors.category.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitImprovement)
      toast({
        title: "Vote Cast: improvement",
        description: `${errors.habitImprovement.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitImprovementDetails)
      toast({
        title: "Vote Cast: improvement details",
        description: `${errors.habitImprovementDetails.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (getData.length === 5) {
      setDisplay("none");
    }
  }

  const onSubmit = (data: FieldValues) => {
    setData([...getData, data]);
    reset();
    const iconExpressoin = currentIcon < 5 ? currentIcon + 1 : 0;
    setCurrentIcon(iconExpressoin);
    toast({
      title: `Well done with ${data.category}`,
      description: "Try Next one",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <HStack marginTop={2} marginBottom={2} display={display}>
        <form name="voteCast" onSubmit={handleSubmit(onSubmit)}>
          <Flex h={"194px"} gap={2} flexDirection={"column"} w={"17.5rem"}>
            <HStack alignItems={"center"}>
              <Image boxSize="50px" src={voteIcons[currentIcon]} />
              <select
                {...register("category")}
                id="category"
                className="form-select form-select-lg w-100"
                aria-label=".form-select-lg example"
                placeholder="Choose habit"
              >
                <option value={""}>Choose a habit...</option>
                {habitCategories.map((habit) => (
                  <option key={habit} value={habit}>
                    {habit}
                  </option>
                ))}
              </select>
            </HStack>
            <Input
              {...register("habitImprovement")}
              id="habitImprovement"
              border={"none"}
              variant="filled"
              type="text"
              placeholder="improvement"
            />
            <Input
              {...register("habitImprovementDetails")}
              id="habitImprovementDetails"
              border={"none"}
              variant="filled"
              type="text"
              placeholder="details"
            />
            <SectionButton
              buttonName={"Next Habit"}
              onClick={() => nextHabit()}
            />
          </Flex>
        </form>
      </HStack>
      <Flex h={"204px"} display={display === "none" ? "" : "none"} bg={""}>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {getData.map((habitsElement, index) => (
                <Tr key={index} fontSize={16}>
                  <Td ps={0} pb={1.5} pt={1.5} textAlign={"left"}>
                    <Text m={0} w={"50px"}>
                      {habitsElement.category}
                    </Text>
                  </Td>
                  <Td pb={1.5} pt={1.5} pe={0}>
                    <Text
                      w={"180px"}
                      m={0}
                      textAlign={"left"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {`${habitsElement.habitImprovement}(${habitsElement.habitImprovementDetails})`}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default VotesCastHabits;
