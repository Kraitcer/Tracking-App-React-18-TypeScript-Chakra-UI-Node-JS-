import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import InnerButton from "./InnerButton";

interface Props {
  task: any;
}

export const TaskPad = ({ task }: Props) => {
  return (
    <HStack gap={0} mr={0} mb={1}>
      <Box
        bg={"blue.400"}
        color={"white"}
        w={"170px"}
        h={10}
        p={1.5}
        pl={4}
        pr={2}
        borderLeftRadius={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          m={0}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
        >
          {task.task}
        </Text>
      </Box>
      <Flex>
        <InnerButton disabled={false} buttonName="DELETE" onClick={() => {}} />
      </Flex>
    </HStack>
  );
};

export default TaskPad;
