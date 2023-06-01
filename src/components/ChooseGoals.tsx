import {
  Button,
  Checkbox,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Thead,
  TableCaption,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import CheckboxComponent from "./CheckBoxCounter";
import SectionButton from "./SectionButton";

const ChooseGoals = () => {
  const [goalsName, setGoalsName] = useState("");
  const goalRef = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<HTMLInputElement | null>(null);
  const steps = [
    { title: "First Goal", description: "Contact Info" },
    { title: "Second Goal", description: "Date & Time" },
    { title: "Third Goal", description: "Select Rooms" },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <>
      <Flex flexDirection={"column"}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (goalRef.current && timeRef.current) {
              setGoalsName(goalRef.current.value);
            }
          }}
        >
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={30} marginTop={3}>
              AT
            </Text>
            <Input ref={timeRef} type="time" w={"150px"} />
            <Input ref={goalRef} placeholder="I WILL" w={"90%"} />
          </Flex>
          <Flex>
            <Text textTransform={"uppercase"}>
              DOES YOUR GOAL "{goalsName}" MATCH THE "SMART" PARAMETRS ?
            </Text>
          </Flex>
        </form>
        <TableContainer marginBottom={3}>
          <Table>
            <Tbody fontSize={26} textTransform={"uppercase"}>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  alignItems="center"
                >
                  s
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  specific
                </Td>
                <Td>
                  <Checkbox size={"lg"}></Checkbox>
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  m
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  measureble
                </Td>
                <Td>
                  <Checkbox size={"lg"}></Checkbox>
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  a
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  actionable
                </Td>
                <Td>
                  <Checkbox size={"lg"}></Checkbox>
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  r
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  reasonable
                </Td>
                <Td>
                  <Checkbox size={"lg"}></Checkbox>
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  t
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  time-bound
                </Td>
                <Td>
                  <Checkbox size={"lg"}></Checkbox>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <SectionButton
        buttonName="Next Goal"
        onClick={() => console.log("fuck")}
      />
      <Box marginTop={2} marginBottom={2}>
        <Stepper index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default ChooseGoals;
