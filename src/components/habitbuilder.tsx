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
import { BadhabitCategories } from "./badHabitCategories";

const schema = z.object({
  habitSimplification: z
    .string()
    .min(3, {
      message: "improvement required and must be at least 3 characters",
    })
    .max(180),
  habitTrigger: z
    .string()
    .min(3, {
      message: "improvement details required and must be at least 3 characters",
    })
    .max(180),
  BadhabitComplication: z
    .string()
    .min(3, {
      message: "improvement details required and must be at least 3 characters",
    })
    .max(180),
  habits: z.enum(habitCategories, {
    errorMap: () => ({ message: "choose habit is required" }),
  }),
  badHabits: z.enum(BadhabitCategories, {
    errorMap: () => ({ message: "choose habit is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setData: (data: any) => void;
  getData: any[];
}

const habitbuilder = ({ setData, getData }: Props) => {
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

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (getData.length === 2)
      localStorage.setItem("Good & Bad Habits array", JSON.stringify(getData));
  }, [getData]);
  // useEffect(() => {
  //   if (habitsDataArrey.length === 6)
  //     localStorage.setItem("Habits array", JSON.stringify(habitsDataArrey));
  // }, [habitsDataArrey]);

  const voteIcons = [vateOne, vateTwo, vateThree, vateFour, vateFive, vateSix];

  function nextHabit() {
    console.log(getData);
    if (errors.habits)
      toast({
        title: "Vote Cast: Chose habis",
        description: `${errors.habits.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitSimplification)
      toast({
        title: "Vote Cast: improvement",
        description: `${errors.habitSimplification.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitTrigger)
      toast({
        title: "Vote Cast: improvement details",
        description: `${errors.habitTrigger.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (getData.length === 2) {
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
        <Text m={0} fontSize={22}>
          Simplify good habits:
        </Text>
        <form name="voteCast" onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={2} flexDirection={"column"} w={"17.5rem"}>
            <HStack alignItems={"center"}>
              <Image boxSize="50px" src={voteIcons[currentIcon]} />
              <select
                {...register("habits")}
                id="category"
                className="form-select form-select-lg w-100"
                aria-label=".form-select-lg example"
                placeholder="Choose habit"
              >
                <option value={""}>Good habit...</option>
                {habitCategories.map((habit) => (
                  <option key={habit} value={habit}>
                    {habit}
                  </option>
                ))}
              </select>
            </HStack>
            <Input
              {...register("habitSimplification")}
              id="habitSimplification"
              border={"none"}
              variant="filled"
              type="text"
              placeholder="Write down simplification"
            />
            <Input
              {...register("habitTrigger")}
              id="habitTrigger"
              border={"none"}
              variant="filled"
              type="text"
              placeholder="trigger"
            />
            <Text m={0} fontSize={22}>
              Complicate bad habits:
            </Text>
            <HStack alignItems={"center"}>
              {/* <Image boxSize="50px" src={voteIcons[currentIcon]} /> */}
              <select
                {...register("badHabits")}
                id="category"
                className="form-select form-select-lg w-100"
                aria-label=".form-select-lg example"
                placeholder="Choose habit"
              >
                <option value={""}>Bad habit...</option>
                {BadhabitCategories.map((habit) => (
                  <option key={habit} value={habit}>
                    {habit}
                  </option>
                ))}
              </select>
            </HStack>
            <Input
              {...register("BadhabitComplication")}
              id="BadhabitComplication"
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
      {/* <Flex h={"380px"} display={display === "none" ? "" : "none"} bg={""}> */}
      <Flex
        h={"380px"}
        pt={2}
        display={display === "none" ? "" : "none"}
        bg={""}
      >
        <Text m={0} fontSize={22}>
          Good habits Simplifyed:
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {getData.map((habitsElement, index) => (
                <Tr key={index} fontSize={16}>
                  <Td ps={0} pb={3.5} pt={3.5} textAlign={"left"}>
                    <Text m={0} w={"50px"}>
                      {habitsElement.habits}
                    </Text>
                  </Td>
                  <Td pb={3.5} pt={3.5} pe={0}>
                    <Text
                      w={"180px"}
                      m={0}
                      textAlign={"left"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {`${habitsElement.habitSimplification}(${habitsElement.habitTrigger})`}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Text m={0} fontSize={22}>
          Bad habits Complicated:
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {getData.map((habitsElement, index) => (
                <Tr key={index} fontSize={16}>
                  <Td ps={0} pb={3.5} pt={3.5} textAlign={"left"}>
                    <Text m={0} w={"80px"}>
                      {habitsElement.badHabits}
                    </Text>
                  </Td>
                  <Td pb={3.5} pt={3.5} pe={0}>
                    <Text
                      w={"120px"}
                      m={0}
                      textAlign={"left"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {habitsElement.BadhabitComplication}
                      {/* {`${habitsElement.badHabits}(${habitsElement.BadhabitComplication})`} */}
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

export default habitbuilder;
