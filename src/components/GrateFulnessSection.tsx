import {
  Text,
  Textarea,
  Flex,
  useRadioGroup,
  HStack,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./SectionButton";
import { grateCategories } from "./grateCategories";
import { useState } from "react";

const schema = z.object({
  gratefulForDoday: z
    .string()
    .min(3, {
      message: "improvement required and must be at least 3 characters",
    })
    .max(120),
  grateCategories: z.enum(grateCategories, {
    errorMap: () => ({ message: "Type of Gratefulness is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const GrateFulnessSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const toast = useToast();

  const [count, setCount] = useState(0);

  const onSubmit = (data: FieldValues) => {
    setCount(count === 0 ? 1 : 2);
    console.log(data);
    reset();
  };
  function nexGratefulness() {
    if (errors.gratefulForDoday)
      toast({
        title: "Vote Cast: Chose habis",
        description: `${errors.gratefulForDoday.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.grateCategories)
      toast({
        title: "Vote Cast: Chose habis",
        description: `${errors.grateCategories.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
  }
  const toDay = ["Firstly", "Secondary", "Thirdly"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={1} flexDirection={"column"}>
        <FormControl id="gratefulness">
          <FormLabel marginBottom={1} fontSize={"xl"}>
            {toDay[count]}, i'm grateful for:
          </FormLabel>
          <Textarea
            {...register("gratefulForDoday", { required: true })}
            variant="brandPrimary"
            // onChange={}
            bg={"blue.100"}
            color={"white"}
            placeholder="Write down thing you have been grateful for today. Choose it type and submit"
            h="6.2rem"
            resize={"none"}
          />
        </FormControl>
        <FormControl id="grateCategories">
          <Flex gap={2} mt={1}>
            <Select
              {...register("grateCategories")}
              placeholder="Choose type"
              w={"200%"}
            >
              {grateCategories.map((grateType, index) => (
                <option key={index} value={grateType}>
                  {grateType}
                </option>
              ))}
            </Select>
            <SectionButton
              buttonName={"Submit"}
              // onClick={() => console.log("fuck")}
              onClick={() => nexGratefulness()}
            />
          </Flex>
        </FormControl>
      </Flex>
    </form>
  );
};

export default GrateFulnessSection;
