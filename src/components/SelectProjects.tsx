import { FormControl } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import React from "react";
import { projectsArray } from "./Projects";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./TodayGoalsSection";

interface Prop {
  register: UseFormRegister<FormData>;
  disabled: boolean;
}

const SelectProjects = ({ register, disabled }: Prop) => {
  return (
    <FormControl>
      <Select
        {...register("projects")}
        name="projects"
        disabled={disabled}
        placeholder="Select project"
        defaultValue={"Select project"}
        w={266}
        // mb={2}
      >
        {projectsArray.map((project) => (
          <option key={project} value={project}>
            {project}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectProjects;
