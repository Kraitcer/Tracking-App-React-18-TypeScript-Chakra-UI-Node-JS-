import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useEffect, useState } from "react";
import { ToDayGoals } from "./ToDayGoals";
import SectionButton from "./UI Components/SectionButton";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/react";
import { FieldValues } from "react-hook-form";

interface Props {
  getGrateData: any[];
  getTommorowData: any;
  getTodayData: any;
  getHabitsData: any[];
}

const NoteBadTimeAndSubmitAll = ({
  getGrateData,
  getTommorowData,
  getTodayData,
  getHabitsData,
}: Props) => {
  // const [projectsGoals, setProjectsGoals] = useState<any>();
  // const [habits, setHabits] = useState<any[]>();
  // const [gratefulnessArray, setGratefulnessArray] = useState<any[]>([]);
  // const [goalsAndEngineDataObj, setGoalsAndEngineDataObj] = useState<any[]>([]);

  const tommorowGoals = [
    { name: "goalOne", at: "goalOne_att_time_", iWill: "goalOne_IWill_Smart" },
    { name: "goalTwo", at: "goalTwo_att_time_", iWill: "goalTwo_IWill_Smart" },
    {
      name: "goalThree",
      at: "goalThree_att_time_",
      iWill: "goalThree_IWill_Smart",
    },
  ];

  const [tommorowGoalsArray, setTommorowGoalsArray] = useState<any[] | string>(
    tommorowGoals
  );
  const todayGoalsArray = [
    { name: "goalOneProgress" },
    { name: "goalThreeProgress" },
    { name: "goalTwoProgress" },
    { name: "health" },
    { name: "emotions" },
    { name: "intellect" },
  ];
  const [todayGoals, setTodayGoals] = useState<any[]>(todayGoalsArray);

  useEffect(() => {
    // const goalsAndEngineDataObj = localStorage.getItem("goalsAndEngineDataObj");
    // if (goalsAndEngineDataObj)
    //   return setGoalsAndEngineDataObj(JSON.parse(goalsAndEngineDataObj));
    // const projectsGoals = localStorage.getItem("Tommorow Project & Goals");
    // if (projectsGoals) return setProjectsGoals(JSON.parse(projectsGoals));
    // const habitsArray = localStorage.getItem("Habits array");
    // if (habitsArray) return setHabits(JSON.parse(habitsArray));
    // const gratefulnessArray = localStorage.getItem("gratefulness array");
    // if (gratefulnessArray)
    //   return setGratefulnessArray(JSON.parse(gratefulnessArray));
  }, []);
  // console.log(goalsAndEngineDataObj);
  // console.log(gratefulnessArray);
  // console.log(projectsGoals);
  // console.log(habits);

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Today</Tab>
          <Tab>Gratefulness</Tab>
          <Tab>VoteCast</Tab>
          <Tab>Tommorow</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant="simple" h={"100%"}>
                <Tbody>
                  {ToDayGoals?.map((goal, index) => (
                    <Tr key={index} fontSize={17}>
                      <Td ps={0} pb={2} pt={2} textAlign={"left"}>
                        {goal}
                      </Td>
                      <Td pb={2} pt={2} pe={0} textAlign={"right"}>
                        {getTodayData[todayGoals[index].name]}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant="simple" h={"100%"}>
                <Tbody>
                  {getGrateData?.map((grateElement, index) => (
                    <Tr key={index} fontSize={17}>
                      <Td ps={0} pb={2} pt={2} textAlign={"left"}>
                        {grateElement?.gratefulForDoday}
                      </Td>
                      <Td pb={2} pt={2} pe={0} textAlign={"right"}>
                        {grateElement?.grateCategories}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table>
                <Tbody>
                  {getHabitsData.map((habit, index) => (
                    <Tr key={index} fontSize={17}>
                      <Td ps={0} pb={2} pt={2} textAlign={"left"}>
                        {habit?.category}
                      </Td>
                      <Td pb={2} pt={2} pe={0} textAlign={"right"}>
                        {`${habit?.habitImprovement}(${habit?.habitImprovementDetails})`}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant="simple" h={"100%"}>
                <Tbody>
                  {tommorowGoals.map((goal, index) => (
                    <Tr key={index} fontSize={17}>
                      <Td ps={0} pb={2} pt={2} textAlign={"left"}>
                        AT {getTommorowData[goal.at]}
                      </Td>
                      <Td pb={2} pt={2} pe={0} textAlign={"right"}>
                        I WILL
                      </Td>
                      <Td pb={2} pt={2} pe={0} textAlign={"left"}>
                        {getTommorowData[goal.iWill]}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex mb={3} gap={3}>
        <Text
          w={650}
          fontSize={24}
          align={"center"}
          textTransform={"uppercase"}
          // justifyContent={"center"}
          // alignItems={"center"}
          flex={"nowrap"}
        >
          NOTE BAD TIME
        </Text>
        <Input type={"time"} w={80}></Input>
        <SectionButton
          onClick={() => console.log("totalSubmit")}
          buttonName="& SUBMIT"
        />
      </Flex>
    </>
  );
};

export default NoteBadTimeAndSubmitAll;
