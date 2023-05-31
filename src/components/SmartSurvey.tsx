import { Text, Button, Flex, Input } from "@chakra-ui/react";

interface Props {
  goalsName: string;
}

const SmartSurvey = ({ goalsName }: Props) => {
  return (
    <>
      <Text fontSize={20} textTransform={"uppercase"}>
        "{goalsName}" MATCH THE FOLLOWING PARAMETRS ?
      </Text>
    </>
  );
};

export default SmartSurvey;
