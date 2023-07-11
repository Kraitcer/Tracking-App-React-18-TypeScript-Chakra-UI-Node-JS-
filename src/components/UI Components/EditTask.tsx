import { Input } from "@chakra-ui/input";
import { Flex, HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FiFolderPlus } from "react-icons/fi";
import AddSubTask from "./AddSubTask";
import TaskPad from "./TaskPad";
import EditSubTask from "./EditSubTask";

interface Props {
  task: any;
  editTask: (id: number) => void;
  currentTaskId: number | undefined;
}

const EditTask = ({ task, editTask, currentTaskId }: Props) => {
  const [taskValue, setTaskValue] = useState("");
  //   const [subTasksValue, setSubTasksValue] = useState("");
  const [subTasks, setSubTasks] = useState<any[]>([]);

  const currentTask = task.filter((t: any) => t.id == currentTaskId);
  //   setValue(currentTask[0].task);
  //   console.log(value);

  const addSubTask = (subTask: any) => {
    setSubTasks([
      ...subTasks,
      { id: subTasks.length, task: subTask, isEditing: false },
    ]);
  };

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    // if (subTasks) {
    // console.log("value");
    // add todo
    //   addSubTask(value);
    // clear form after submission
    //   setSubTasksValue("");
  };

  const deleteSubTask = (id: number) => {
    const newSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(newSubTasks);
  };
  const editSubTasks = (subTaskValue: any, id: number) => {
    const newSubTasks = subTasks.map((subTask) =>
      subTask.id === id
        ? { ...subTask, task: subTaskValue, isEditing: !subTask.isEditing }
        : subTask
    );
    setSubTasks(newSubTasks);
    // localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editCurrentSubTask = (id: number) => {
    setSubTasks(
      subTasks.map((subTask) =>
        subTask.id === id
          ? { ...subTask, isEditing: !subTask.isEditing }
          : subTask
      )
    );
  };

  return (
    <>
      <Flex flexDirection={"column"} gap={1}>
        <form onSubmit={handleSubmit}>
          <Input
            value={taskValue}
            placeholder={currentTask[0].task}
            onChange={(e) => setTaskValue(e.target.value)}
            borderRadius={10}
            mb={1}
          />
        </form>
        <AddSubTask addSubTask={addSubTask} />
        {subTasks.map((subTask, index) =>
          subTask.isEditing ? (
            <EditSubTask
              key={index}
              subTasks={subTask}
              editSubTask={editSubTasks}
            />
          ) : (
            <TaskPad
              width={"100%"}
              onDelete={deleteSubTask}
              key={index}
              task={subTask}
              editTask={editCurrentSubTask}
            />
          )
        )}
      </Flex>
    </>
  );
};

export default EditTask;
