import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import SectionButton from "./SectionButton";

interface Prop {
  addTodo: (data: string) => void;
}

const AddTask = ({ addTodo }: Prop) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      console.log("value");
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Input
          type="text"
          borderRightRadius={0}
          borderColor={"blue.400"}
          placeholder="What is the task today?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Flex>
          <SectionButton
            buttonName="ADD TASK"
            onClick={() => {
              // console.log(value);
            }}
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default AddTask;
