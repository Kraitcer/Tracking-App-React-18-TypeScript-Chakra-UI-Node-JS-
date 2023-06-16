import {
  Text,
  Textarea,
  Flex,
  useRadioGroup,
  HStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./SectionButton";
import RadioCard from "./themes/customRadio";
import { grateCategories } from "./grateCategories";

const schema = z.object({
  gratefulForDoday: z
    .string()
    .min(3, {
      message: "improvement required and must be at least 3 characters",
    })
    .max(120),
  // category: z.enum(grateCategories, {
  //   errorMap: () => ({ message: "Type of Gratefulness is required" }),
  // }),
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
  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "gratefulness",
    // defaultValue: "Event",
    // onChange: console.log,
  });

  const group = getRootProps();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={1} flexDirection={"column"}>
        <FormControl id="gratefulness">
          <FormLabel marginBottom={1} fontSize={"xl"}>
            Today, i'm grateful for:
          </FormLabel>
          <Textarea
            {...register("gratefulForDoday")}
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
          <HStack {...group} gap={1} mt={1}>
            {grateCategories.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
            <SectionButton
              buttonName={"1"}
              onClick={() => console.log(value)}
            />
          </HStack>
        </FormControl>
      </Flex>
    </form>
  );
};

export default GrateFulnessSection;
