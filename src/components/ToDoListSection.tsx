import React, { useState } from "react";
import AddTask from "./UI Components/AddTasks";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import TaskPad from "./UI Components/TaskPad";
import AllModal from "./UI Components/AllModal";
import EditTask from "./UI Components/EditTask";

const ToDoListSection = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const closeModal1 = () => setIsOpen1(false);
  const openModal1 = (id: number) => {
    setIsOpen1(true), setCurrentTodo(id);
  };

  const [todos, setTodos] = useState<any[]>([]);

  const [currentTodo, setCurrentTodo] = useState<number>();

  const editTodo = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTask = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addTodo = (todo: any) => {
    setTodos([...todos, { id: todos.length, task: todo, isEditing: false }]);
  };
  return (
    <>
      <AllModal
        title={"Edit the task"}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={
          <EditTask
            editTask={editTodo}
            task={todos}
            currentTaskId={currentTodo}
          />
        }
      />
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
              <TaskPad
                width={"190px"}
                onDelete={deleteTask}
                key={index}
                task={todo}
                editTask={openModal1}
              />
            ))}
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default ToDoListSection;
