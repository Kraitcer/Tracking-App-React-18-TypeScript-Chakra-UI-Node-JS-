import { Flex, Input, Text } from "@chakra-ui/react";
import Smart from "./Smart";
import { useState } from "react";
import SmartSurvey from "./SmartSurvey";

interface Props {
  setHeaderName: () => void;
  specificHeaderName: string;
}

const ChooseGoals = ({ setHeaderName, specificHeaderName }: Props) => {
  const [ferstDisplay, setFerstDisplay] = useState("");
  const [secondDisplay, setSecondDisplay] = useState("none");
  const [goalsName, setGoalsName] = useState("");
  return (
    <>
      <Flex
        display={ferstDisplay}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Input placeholder="(Tommorow Project)" marginBottom={2} />
        <Smart
          onClick={() => {
            setFerstDisplay("none"), setSecondDisplay(""), setHeaderName();
          }}
          setGoalsName={(goalsName) => setGoalsName(goalsName)}
        />
        <Smart
          onClick={() => {
            setFerstDisplay("none"), setSecondDisplay(""), setHeaderName();
          }}
          setGoalsName={(goalsName) => setGoalsName(goalsName)}
        />
        <Smart
          onClick={() => {
            setFerstDisplay("none"), setSecondDisplay(""), setHeaderName();
          }}
          setGoalsName={(goalsName) => setGoalsName(goalsName)}
        />
      </Flex>
      <Flex display={secondDisplay}>
        <SmartSurvey goalsName={goalsName} />
      </Flex>
    </>
  );
};

export default ChooseGoals;
