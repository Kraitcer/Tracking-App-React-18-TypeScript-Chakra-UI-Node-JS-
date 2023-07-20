import React, { useEffect } from "react";
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
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import { v4 as uuidv4 } from "uuid";
import { IoTrashBinSharp } from "react-icons/io5";

interface Props {
  projectsProgressData: any;
}

const schema = z.object({
  projectOneFun: z.number().optional(),
  projectOneEffect: z.number().optional(),
  projectOneTime: z.number().optional(),
  projectOneUrgency: z.number().optional(),
  projectOneStrategy: z.number().optional(),
  projectOneBonus: z.number().optional(),
  projectTwoFun: z.number().optional(),
  projectTwoEffect: z.number().optional(),
  projectTwoTime: z.number().optional(),
  projectTwoUrgency: z.number().optional(),
  projectTwoStrategy: z.number().optional(),
  projectTwoBonus: z.number().optional(),
  projectThreeFun: z.number().optional(),
  projectThreeEffect: z.number().optional(),
  projectThreeTime: z.number().optional(),
  projectThreeUrgency: z.number().optional(),
  projectThreeStrategy: z.number().optional(),
  projectThreeBonus: z.number().optional(),
  projectFourFun: z.number().optional(),
  projectFourEffect: z.number().optional(),
  projectFourTime: z.number().optional(),
  projectFourUrgency: z.number().optional(),
  projectFourStrategy: z.number().optional(),
  projectFourBonus: z.number().optional(),
  projectFiveFun: z.number().optional(),
  projectFiveEffect: z.number().optional(),
  projectFiveTime: z.number().optional(),
  projectFiveUrgency: z.number().optional(),
  projectFiveStrategy: z.number().optional(),
  projectFiveBonus: z.number().optional(),
});

type FormData = z.infer<typeof schema>;

const FetusIndex = ({ projectsProgressData }: Props) => {
  const { handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const fitusArray = [
    {
      id: 0,
      projectIndex: "projectOneProgress",
      projectName: "",
      projectProgress: 0,
      fun: 0,
      effect: 0,
      time: 0,
      urgency: 0,
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 1,
      projectIndex: "projectTwoProgress",
      projectName: "",
      projectProgress: 0,
      fun: 0,
      effect: 0,
      time: 0,
      urgency: 0,
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 2,
      projectIndex: "projectThreeProgress",
      projectName: "",
      projectProgress: 0,
      fun: 0,
      effect: 0,
      time: 0,
      urgency: 0,
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 3,
      projectIndex: "projectFourProgress",
      projectName: "",
      projectProgress: 0,
      fun: 0,
      effect: 0,
      time: 0,
      urgency: 0,
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
    {
      id: 4,
      projectIndex: "projectFiveProgress",
      projectName: "",
      projectProgress: 0,
      fun: 0,
      effect: 0,
      time: 0,
      urgency: 0,
      strategy: 0,
      fitusBonus: 0,
      total: 0,
    },
  ];

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <Flex justifyContent={"center"} mb={3}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr bg={"blue.400"} color={"white"}>
              <Th color={"white"}>Projects</Th>
              <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
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
              <Th color={"white"} textAlign={"center"} pl={1} pr={1}>
                Delete
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {fitusArray.map((project, index) => (
              <Tr key={index} fontSize={16}>
                <Td
                  textAlign={"center"}
                  w={"400px"}
                  bg={"blue.400"}
                  color={"white"}
                  p={0}
                >
                  <Text m={0}>{projectsArray[index]}</Text>
                </Td>
                <Td textAlign={"left"} bg={"blue.100"} pl={2} pr={1}>
                  <Text m={0}>
                    <Badge
                      w={10}
                      h={10}
                      p={0}
                      pt={2}
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
                  bg={"blue.100"}
                  color={"white"}
                  textAlign={"center"}
                  pl={1}
                  pr={1}
                >
                  {projectsProgressData[project.projectIndex] && (
                    <Text m={0} fontSize={"1.5rem"} color={"black"}>
                      {projectsProgressData[project.projectIndex] >= 15
                        ? "+3"
                        : "+5"}
                    </Text>
                  )}
                </Td>
                <Td
                  bg={"blue.100"}
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
                  bg={"blue.100"}
                  textAlign={"center"}
                  pl={3}
                  pr={0}
                  bgColor={"orange"}
                  color={"white"}
                  _hover={{ bg: "orange.400" }}
                >
                  <IoTrashBinSharp size={"30px"} onClick={() => {}} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default FetusIndex;
