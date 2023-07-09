import React, { useState } from "react";
import AddTask from "./UI Components/AddTasks";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import TaskPad from "./UI Components/TaskPad";

const ToDoListSection = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = (todo: any) => {
    setTodos([...todos, { task: todo, completed: false, isEditing: false }]);
  };
  return (
    <>
      <VStack>
        <AddTask addTodo={addTodo} />
        <Flex w={"560px"} h={"168px"} flexDirection={"row"} mb={0}>
          <Flex
            overflowY={"auto"}
            bg={"blue.100"}
            w={"100%"}
            borderTopRadius={20}
            gap={2}
            pl={3}
            pt={3}
            pb={2}
            wrap={"wrap"}
          >
            {todos.map((todo, index) => (
              <TaskPad key={index} task={todo} />
            ))}
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default ToDoListSection;
