import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import AddSubTask from "./AddSubTask";
import TaskPad from "./TaskPad";
import EditSubTask from "./EditSubTask";
import SectionButton from "./SectionButton";
import { v4 as uuidv4 } from "uuid";

interface Props {
  task: any;
  editTask: (id: string, currentTaskName: string) => void;
  currentTask: any[];
  onClose: () => void;
  subTasksValue: (v: any[]) => void;
}

const EditTask = ({
  task,
  editTask,
  currentTask,
  onClose,
  subTasksValue,
}: Props) => {
  // const [editedTask, setEditedTask] = useState<any[]>([]);

  const [taskValue, setTaskValue] = useState("");

  const [subTasks, setSubTasks] = useState<any[]>([]);

  // const currentTask = task.filter((t: any) => t.id == currentTaskId);

  // const otherTasks = task.filter((t: any) => t.id !== currentTaskId);

  // const editedTaskArray = currentTask.map((task: any) =>
  //   !taskValue ? task : (task.task = taskValue)
  // );

  const addSubTask = (subTask: any) => {
    // console.log("addSubTask in editTask", currentTask[0].id, taskValue);
    setSubTasks([
      ...subTasks,
      {
        id: uuidv4(),
        perentTask: currentTask[0].task,
        task: subTask,
        isEditing: false,
      },
    ]);
  };

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    // if (taskValue) editTask(taskValue.);
    // console.log("editTasks", subTasks);
    // add todo
    if (taskValue) editTask(currentTask[0].id, taskValue);
    if (subTasks) subTasksValue(subTasks);
    onClose();
  };

  const deleteSubTask = (id: string) => {
    const newSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(newSubTasks);
  };
  const editSubTasks = (subTaskValue: any, id: string) => {
    const newSubTasks = subTasks.map((subTask) =>
      subTask.id === id
        ? { ...subTask, task: subTaskValue, isEditing: !subTask.isEditing }
        : subTask
    );
    setSubTasks(newSubTasks);
    // localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editCurrentSubTask = (id: string) => {
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
            placeholder={!taskValue ? currentTask[0].task : taskValue}
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
              children={0}
              width={"25rem"}
              onDelete={deleteSubTask}
              key={index}
              task={subTask}
              editTask={editCurrentSubTask}
            />
          )
        )}
        <form onSubmit={handleSubmit}>
          <Flex mb={1}>
            <SectionButton
              buttonName="fuck"
              onClick={() => {
                handleSubmit;
              }}
            />
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default EditTask;
