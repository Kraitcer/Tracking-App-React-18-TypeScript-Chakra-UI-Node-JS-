import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Tr,
  VStack,
  Text,
  Thead,
  Th,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Badge,
} from "@chakra-ui/react";
import { projectsArray } from "../components/Projects";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import { v4 as uuidv4 } from "uuid";
import { IoTrashBinSharp } from "react-icons/io5";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

interface Props {
  projectsProgressData: any;
}

const schema = z.object({
  projectOneFun: z.number().optional(),
  //   projectOneEffect: z.number().optional(),
  //   projectOneTime: z.number().optional(),
  //   projectOneUrgency: z.number().optional(),
  //   projectOneStrategy: z.number().optional(),
  //   projectOneBonus: z.number().optional(),
  projectTwoFun: z.number().optional(),
  //   projectTwoEffect: z.number().optional(),
  //   projectTwoTime: z.number().optional(),
  //   projectTwoUrgency: z.number().optional(),
  //   projectTwoStrategy: z.number().optional(),
  //   projectTwoBonus: z.number().optional(),
  projectThreeFun: z.number().optional(),
  //   projectThreeEffect: z.number().optional(),
  //   projectThreeTime: z.number().optional(),
  //   projectThreeUrgency: z.number().optional(),
  //   projectThreeStrategy: z.number().optional(),
  //   projectThreeBonus: z.number().optional(),
  projectFourFun: z.number().optional(),
  //   projectFourEffect: z.number().optional(),
  //   projectFourTime: z.number().optional(),
  //   projectFourUrgency: z.number().optional(),
  //   projectFourStrategy: z.number().optional(),
  //   projectFourBonus: z.number().optional(),
  projectFiveFun: z.number().optional(),
  //   projectFiveEffect: z.number().optional(),
  //   projectFiveTime: z.number().optional(),
  //   projectFiveUrgency: z.number().optional(),
  //   projectFiveStrategy: z.number().optional(),
  //   projectFiveBonus: z.number().optional(),
});

type FormData = z.infer<typeof schema>;

const FetusIndex = ({ projectsProgressData }: Props) => {
  const { handleSubmit, setValue, control, register } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const fitusArray = [
    {
      id: 0,
      projectIndex: "projectOneProgress",
      projectName: "",
      projectProgress: 0,
      funIndex: "projectOneFun",
      fun: 2,
      effectIndex: "projectOneEffect",
      effect: 4,
      timeIndex: "projectOneTime",
      time: 0,
      urgencyIndex: "projectOneUrgency",
      urgency: 0,
      strategyIndex: "projectOneStrategy",
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 1,
      projectIndex: "projectTwoProgress",
      projectName: "",
      projectProgress: 0,
      funIndex: "projectTwoFun",
      fun: 2,
      effectIndex: "projectTwoEffect",
      effect: 4,
      timeIndex: "projectTwoTime",
      time: 0,
      urgencyIndex: "projectTwoUrgency",
      urgency: 0,
      strategyIndex: "projectTwoStrategy",
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 2,
      projectIndex: "projectThreeProgress",
      projectName: "",
      projectProgress: 0,
      funIndex: "projectThreeFun",
      fun: 2,
      effectIndex: "projectThreeEffect",
      effect: 4,
      timeIndex: "projectThreeTime",
      time: 0,
      urgencyIndex: "projectThreeUrgency",
      urgency: 0,
      strategyIndex: "projectThreeStrategy",
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 3,
      projectIndex: "projectFourProgress",
      projectName: "",
      projectProgress: 0,
      funIndex: "projectFourFun",
      fun: 2,
      effectIndex: "projectFourEffect",
      effect: 4,
      timeIndex: "projectFourTime",
      time: 0,
      urgencyIndex: "projectFourUrgency",
      urgency: 0,
      strategyIndex: "projectFourStrategy",
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 4,
      projectIndex: "projectFiveProgress",
      projectName: "",
      projectProgress: 0,
      funIndex: "projectFiveFun",
      fun: 2,
      effectIndex: "projectFiveEffect",
      effect: 4,
      timeIndex: "projectFiveTime",
      time: 0,
      urgencyIndex: "projectFiveUrgency",
      urgency: 0,
      strategyIndex: "projectFiveStrategy",
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
  ];
  //   const fitusDatas = [
  //     {
  //       funIndex: "projectOneFun",
  //       effectIndex: "projectOneEffect",
  //       timeIndex: "projectOneTime",
  //       urgencyIndex: "projectOneUrgency",
  //       strategyIndex: "projectOneStrategy",
  //     },
  //     {
  //       funIndex: "projectTwoFun",
  //       effectIndex: "projectTwoEffect",
  //       timeIndex: "projectTwoTime",
  //       urgencyIndex: "projectTwoUrgency",
  //       strategyIndex: "projectTwoStrategy",
  //     },
  //     {
  //       funIndex: "projectThreeFun",
  //       effectIndex: "projectThreeEffect",
  //       timeIndex: "projectThreeTime",
  //       urgencyIndex: "projectThreeUrgency",
  //       strategyIndex: "projectThreeStrategy",
  //     },
  //     {
  //       funIndex: "projectFourFun",
  //       effectIndex: "projectFourEffect",
  //       timeIndex: "projectFourTime",
  //       urgencyIndex: "projectFourUrgency",
  //       strategyIndex: "projectFourStrategy",
  //     },
  //     {
  //       funIndex: "projectFiveFun",
  //       effectIndex: "projectFiveEffect",
  //       timeIndex: "projectFiveTime",
  //       urgencyIndex: "projectFiveUrgency",
  //       strategyIndex: "projectFiveStrategy",
  //     },
  //   ];

  const [fitusData, setFitusData] = useState(fitusArray);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <Flex justifyContent={"center"} mb={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr bg={"blue.400"} color={"white"}>
                <Th color={"white"} textAlign={"center"}>
                  Projects
                </Th>
                <Th
                  //   borderRight={"1px"}
                  borderColor={"white"}
                  color={"white"}
                  textAlign={"center"}
                  pl={1}
                  pr={1}
                >
                  Pro
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Fun
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Effe{" "}
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Time
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Urge{" "}
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Stra
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Bonu{" "}
                </Th>
                <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                  Total
                </Th>
                <Th color={"white"} textAlign={"center"} pl={2} pr={2}>
                  Delete
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fitusData.map((project, index) => (
                <Tr key={index} fontSize={16}>
                  <Td
                    borderTopLeftRadius={30}
                    textAlign={"center"}
                    w={"400px"}
                    bg={"blue.400"}
                    color={"white"}
                    p={0}
                  >
                    <Text m={0}>{projectsArray[index]}</Text>
                  </Td>
                  <Td
                    textAlign={"left"}
                    bg={"blue.400"}
                    pl={2}
                    pr={3}
                    pt={1}
                    pb={"1px"}
                  >
                    <Text m={0}>
                      <Badge
                        w={12}
                        h={12}
                        p={0}
                        pt={"12px"}
                        textAlign={"center"}
                        borderRadius={50}
                        fontSize={"1.5rem"}
                        colorScheme="purple"
                      >
                        {/* {project.projectProgress} */}
                        {projectsProgressData[project.projectIndex]}
                      </Badge>
                    </Text>
                  </Td>
                  <Td bg={"blue.100"} color={"white"} pl={1} pr={1}>
                    <NumberInput
                      // {...register(project.funIndex)}
                      size="md"
                      // maxW={0}
                      defaultValue={0}
                      min={0}
                      max={10}
                      //   onChange={(data) =>
                      //     setValue(project.funIndex, parseInt(data))
                      //   }
                    >
                      <NumberInputField
                        m={0}
                        p={0}
                        pl={2}
                        fontSize={"1.5rem"}
                        color={"black"}
                        w={"40px"}
                      />
                    </NumberInput>
                    {/* <Controller
                      name={project.funIndex && project.funIndex}
                      control={control}
                      render={({ field }) => (
                        <NumberInput
                          {...field}
                          size="md"
                          // maxW={0}
                          defaultValue={0}
                          min={0}
                          max={10}
                        >
                          <NumberInputField
                            m={0}
                            p={0}
                            pl={2}
                            fontSize={"1.5rem"}
                            color={"black"}
                            w={"40px"}
                          />
                        </NumberInput>
                      )}
                    /> */}
                  </Td>
                  <Td bg={"blue.200"} color={"white"} pl={1} pr={1}>
                    <NumberInput
                      // color={"black"}
                      // m={0}
                      size="md"
                      // maxW={0}
                      defaultValue={0}
                      min={0}
                      max={10}
                    >
                      <NumberInputField
                        m={0}
                        p={0}
                        pl={2}
                        fontSize={"1.5rem"}
                        color={"black"}
                        w={"40px"}
                      />
                    </NumberInput>
                  </Td>
                  <Td bg={"blue.100"} color={"white"} pl={1} pr={1}>
                    <NumberInput
                      // color={"black"}
                      // m={0}
                      size="md"
                      // maxW={0}
                      defaultValue={0}
                      min={0}
                      max={10}
                    >
                      <NumberInputField
                        m={0}
                        p={0}
                        pl={2}
                        fontSize={"1.5rem"}
                        color={"black"}
                        w={"40px"}
                      />
                    </NumberInput>
                  </Td>
                  <Td bg={"blue.100"} color={"white"} pl={1} pr={1}>
                    <NumberInput
                      // color={"black"}
                      // m={0}
                      size="md"
                      // maxW={0}
                      defaultValue={0}
                      min={0}
                      max={10}
                    >
                      <NumberInputField
                        m={0}
                        p={0}
                        pl={2}
                        fontSize={"1.5rem"}
                        color={"black"}
                        w={"40px"}
                      />
                    </NumberInput>
                  </Td>
                  <Td
                    bg={"blue.200"}
                    color={"white"}
                    textAlign={"center"}
                    pl={1}
                    pr={1}
                  >
                    <NumberInput
                      // color={"black"}
                      // m={0}
                      size="md"
                      // maxW={0}
                      defaultValue={0}
                      min={0}
                      max={10}
                    >
                      <NumberInputField
                        m={0}
                        p={0}
                        pl={2}
                        fontSize={"1.5rem"}
                        color={"black"}
                        w={"40px"}
                      />
                    </NumberInput>
                  </Td>
                  <Td
                    bg={"purple.100"}
                    color={"white"}
                    textAlign={"center"}
                    pl={1}
                    pr={1}
                  >
                    {projectsProgressData[project.projectIndex] ? (
                      <Text m={0} fontSize={"1.5rem"} color={"black"}>
                        {projectsProgressData[project.projectIndex] >= 15
                          ? "+3"
                          : "+5"}
                      </Text>
                    ) : (
                      <Text m={0} fontSize={"1.5rem"} color={"black"}>
                        0
                      </Text>
                    )}
                  </Td>
                  <Td
                    bg={"blue.400"}
                    color={"white"}
                    textAlign={"center"}
                    pl={1}
                    pr={1}
                  >
                    <Text m={0} fontSize={"1.5rem"} color={"white"}>
                      {project.fun +
                        project.effect * 2 +
                        project.time +
                        project.urgency +
                        project.strategy * 2 +
                        project.fitusBonus}
                    </Text>
                  </Td>
                  <Td
                    bg={"blue.100"}
                    textAlign={"center"}
                    pl={4}
                    pr={0}
                    bgColor={
                      projectsProgressData[project.projectIndex] === 100
                        ? "blue.400"
                        : "orange"
                    }
                    color={"white"}
                    // _hover={{ bg: "orange.400" }}
                    _hover={
                      projectsProgressData[project.projectIndex] === 100
                        ? { bg: "blue.600" }
                        : { bg: "orange.400" }
                    }
                  >
                    {projectsProgressData[project.projectIndex] < 100 ? (
                      <IoTrashBinSharp size={"30px"} onClick={() => {}} />
                    ) : (
                      <BsFillBookmarkCheckFill
                        size={"28px"}
                        onClick={() => {}}
                      />
                      //   <FaTrashRestoreAlt size={"28px"} onClick={() => {}} />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </form>
    </Flex>
  );
};

export default FetusIndex;
