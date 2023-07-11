import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { IoTrashBinSharp } from "react-icons/io5/";
import { BiEdit } from "react-icons/bi";

interface Props {
  width: string;
  task: any;
  onDelete: (id: number) => void;
  editTask: (id: number) => void;
}

export const TaskPad = ({ task, onDelete, editTask, width }: Props) => {
  return (
    <HStack gap={0} mr={0} mb={1}>
      <Box
        bg={"blue.400"}
        color={"white"}
        w={width}
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
        <Flex
          bg={"orange.300"}
          h={10}
          w={16}
          pt={3}
          pl={3}
          pr={3}
          gap={2}
          color={"white"}
          _hover={{ bg: "orange.400" }}
          borderRightRadius={10}
        >
          <BiEdit onClick={() => editTask(task.id)} />
          <IoTrashBinSharp onClick={() => onDelete(task.id)} />
        </Flex>
      </Flex>
    </HStack>
  );
};

export default TaskPad;
