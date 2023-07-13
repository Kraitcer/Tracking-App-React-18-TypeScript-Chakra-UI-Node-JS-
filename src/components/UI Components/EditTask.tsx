import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import AddSubTask from "./AddSubTask";
import TaskPad from "./TaskPad";
import EditSubTask from "./EditSubTask";
import SectionButton from "./SectionButton";

interface Props {
  task: any;
  editTask: (id: number) => void;
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
    setSubTasks([
      ...subTasks,
      {
        id: subTasks.length,
        perentTask: currentTask[0].task,
        task: subTask,
        isEditing: false,
      },
    ]);
  };

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    subTasksValue(subTasks);
    console.log("editTasks", subTasks);
    // add todo
    onClose();
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
              width={"100%"}
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
              //   disabled={false}
              buttonName="fuck"
              onClick={() => {}}
            />
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default EditTask;
