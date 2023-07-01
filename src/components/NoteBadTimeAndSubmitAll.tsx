import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React, { useEffect, useState } from "react";
import { ToDayGoals } from "./ToDayGoals";

const NoteBadTimeAndSubmitAll = () => {
  const [projectsGoals, setProjectsGoals] = useState<any>();
  const [habits, setHabits] = useState<any[]>();
  const [gratefulnessArray, setGratefulnessArray] = useState<any[]>([]);
  const [goalsAndEngineDataObj, setGoalsAndEngineDataObj] = useState<any[]>([]);

  const todayGoalsArray = [
    { name: "goalOneProgress" },
    { name: "goalThreeProgress" },
    { name: "goalTwoProgress" },
  ];
  const [todayGoals, setTodayGoals] = useState<any[]>(todayGoalsArray);

  useEffect(() => {
    const goalsAndEngineDataObj = localStorage.getItem("goalsAndEngineDataObj");
    if (goalsAndEngineDataObj)
      setGoalsAndEngineDataObj(JSON.parse(goalsAndEngineDataObj));
    const projectsGoals = localStorage.getItem("Tommorow Project & Goals");
    if (projectsGoals) setProjectsGoals(JSON.parse(projectsGoals));
    const habitsArray = localStorage.getItem("Habits array");
    if (habitsArray) setHabits(JSON.parse(habitsArray));
    const gratefulnessArray = localStorage.getItem("gratefulness array");
    if (gratefulnessArray) setGratefulnessArray(JSON.parse(gratefulnessArray));
  }, []);
  console.log(goalsAndEngineDataObj);
  // console.log(gratefulnessArray);
  // console.log(projectsGoals);
  // console.log(habits);

  return (
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
                      {goalsAndEngineDataObj[todayGoals[index].name]}
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
                {gratefulnessArray?.map((grateElement, index) => (
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
                {habits?.map((habit, index) => (
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
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NoteBadTimeAndSubmitAll;
