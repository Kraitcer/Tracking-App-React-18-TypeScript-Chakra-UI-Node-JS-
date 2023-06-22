import {
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import SectionButton from "./UI Components/SectionButton";
import CustomCheckbox from "./UI Components/CustomCheckBox";

interface CheckboxData {
  specific: boolean;
  measureble: boolean;
  actionable: boolean;
  reasonable: boolean;
  timeBound: boolean;
  goalTime: string;
  goalName: string;
}

interface Props {
  onClose: () => void;
}

const ChooseGoals = ({ onClose }: Props) => {
  const checkboxDataObject = {
    specific: false,
    measureble: false,
    actionable: false,
    reasonable: false,
    timeBound: false,
    goalTime: "",
    goalName: "",
  };
  const toast = useToast();
  // const statuses = ["success", "error", "warning", "info"];
  const [checkboxData, setCheckboxData] =
    useState<CheckboxData>(checkboxDataObject);
  const [refreshKey, setRefreshKey] = useState(0);
  const [goalsName, setGoalsName] = useState("");
  const handleCheckboxChange = (checkboxName: keyof CheckboxData) => {
    setCheckboxData((prevData) => ({
      ...prevData,
      [checkboxName]: !prevData[checkboxName] as boolean | number | string,
    }));
  };

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
  function stepFour() {
    onClose(),
      toast({
        title: "Well Done with Goals",
        description: "good luck doing it",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
  }
  function stepThree() {
    setCheckboxData(checkboxDataObject);
    if (goalRef.current && timeRef.current) {
      goalRef.current.value = "";
      timeRef.current.value = "";
    }
    setActiveStep(3);
    setGoalsName("");
    toast({
      title: "Second Goal is chosen",
      description: "Choose Third One",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  function stepTwo() {
    setCheckboxData(checkboxDataObject);
    setActiveStep(2);
    if (goalRef.current && timeRef.current) {
      goalRef.current.value = "";
      timeRef.current.value = "";
    }
    setGoalsName("");
    toast({
      title: "First Goal is chosen",
      description: "Choose Second One",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  const handleSubmit = () => {
    const {
      specific,
      measureble,
      actionable,
      reasonable,
      timeBound,
      goalName,
      goalTime,
    } = checkboxData;
    if (
      specific &&
      measureble &&
      actionable &&
      reasonable &&
      timeBound &&
      goalTime &&
      goalName
    ) {
      // All checkboxes are checked, perform your desired action here
      setRefreshKey((prevKey) => prevKey + 1);
      activeStep == 1
        ? stepTwo()
        : activeStep == 2
        ? stepThree()
        : activeStep === 3
        ? stepFour()
        : null;
      // console.log("Submitting data:", checkboxData);
    } else {
      toast({
        title: "SMART Checkboxes are requared",
        description: "Please check all checkboxes",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      // console.log("Please check all checkboxes");
    }
  };
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (goalRef.current && timeRef.current) {
              setGoalsName(goalRef.current.value);
            }
            handleCheckboxChange("goalName");
            handleCheckboxChange("goalTime");
          }}
        >
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={30} marginTop={3}>
              AT
            </Text>
            <Input
              ref={timeRef}
              type="time"
              w={"150px"}
              padding={1}
              fontSize={20}
            />
            <Input ref={goalRef} placeholder="I WILL" />
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
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  textAlign={"center"}
                >
                  s
                </Td>
                <Td
                  bg={"blue.400"}
                  color={"white"}
                  borderTop={"1px solid"}
                  borderTopColor={"blue.400"}
                >
                  specific
                </Td>
                <Td
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  paddingTop={2}
                  paddingBottom={2}
                >
                  <CustomCheckbox
                    key={refreshKey}
                    checked={checkboxData.specific}
                    onChange={() => handleCheckboxChange("specific")}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  textAlign={"center"}
                >
                  m
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  measureble
                </Td>
                <Td
                  paddingTop={2}
                  paddingBottom={2}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  <CustomCheckbox
                    key={refreshKey}
                    checked={checkboxData.measureble}
                    onChange={() => handleCheckboxChange("measureble")}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  textAlign={"center"}
                >
                  a
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  actionable
                </Td>
                <Td
                  paddingTop={2}
                  paddingBottom={2}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  <CustomCheckbox
                    key={refreshKey}
                    checked={checkboxData.actionable}
                    onChange={() => handleCheckboxChange("actionable")}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  textAlign={"center"}
                >
                  r
                </Td>
                <Td bg={"blue.400"} color={"white"}>
                  reasonable
                </Td>
                <Td
                  paddingTop={2}
                  paddingBottom={2}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  <CustomCheckbox
                    key={refreshKey}
                    checked={checkboxData.reasonable}
                    onChange={() => handleCheckboxChange("reasonable")}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td
                  width={"1px"}
                  bg={"white"}
                  color={"blue.400"}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                  textAlign={"center"}
                >
                  t
                </Td>
                <Td
                  bg={"blue.400"}
                  color={"white"}
                  borderBottom={"1px solid"}
                  borderBottomColor={"blue.400"}
                >
                  time-bound
                </Td>
                <Td
                  paddingTop={2}
                  paddingBottom={2}
                  border={"1px solid"}
                  borderColor={"blue.400"}
                >
                  <CustomCheckbox
                    key={refreshKey}
                    checked={checkboxData.timeBound}
                    onChange={() => handleCheckboxChange("timeBound")}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

      <SectionButton
        buttonName={activeStep == 3 ? "Done With Goals" : "Next Goal"}
        onClick={handleSubmit}
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
