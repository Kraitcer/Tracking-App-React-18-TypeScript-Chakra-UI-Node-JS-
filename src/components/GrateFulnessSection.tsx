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
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./SectionButton";
import { grateCategories } from "./grateCategories";
import { useEffect, useState } from "react";
import { any, string } from "prop-types";
import { T } from "@chakra-ui/toast/dist/toast.types-f226a101";

const schema = z.object({
  gratefulForDoday: z
    .string()
    .min(3, {
      message:
        "Today's gratefulness is required and must be at least 3 characters",
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

  const [display, setDisplay] = useState("");

  const countOfGratefulness = ["zero", "one", "two", "three"];

  const [gratefulnessData, setGratefulnessData] = useState<FieldValues>();

  const [grateDataArrey, setGrateDataArrey] = useState<any[]>([]);

  useEffect(() => {
    if (gratefulnessData)
      localStorage.setItem(
        `gratefulness ${countOfGratefulness[count]}`,
        JSON.stringify(gratefulnessData)
      );
    // try {
    //   const storedValue =
    //     localStorage.getItem(`gratefulness ${countOfGratefulness[count]}`) ||
    //     "";
    //   if (storedValue) {
    //     let value = JSON.parse(storedValue);
    //     // grateTable.push(JSON.parse(storedValue));
    //     console.log(value);
    //   }
    // } catch (error) {
    //   console.log("Stupid Error", error);
    // }
  }, [gratefulnessData]);

  const onSubmit = (data: FieldValues) => {
    setGrateDataArrey([...grateDataArrey, data]);
    setGratefulnessData({ ...data });
    setCount(count === 0 ? 1 : count === 1 ? 2 : count === 2 ? 3 : NaN);
    if (count === 3) setDisplay("none");
    reset();
  };

  function nexGratefulness() {
    if (count === 2) setDisplay("none");
    if (errors.gratefulForDoday)
      toast({
        title: "Gratefulness",
        description: `${errors.gratefulForDoday.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.grateCategories)
      toast({
        title: "Gratefulness: Chose type of Gratefulness",
        description: `${errors.grateCategories.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    console.log(grateDataArrey);
  }
  const toDay = ["Firstly", "Secondary", "Thirdly", "Taday"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={1} flexDirection={"column"}>
        <FormControl id="gratefulness">
          <FormLabel marginBottom={1} fontSize={"xl"}>
            {toDay[count]}, i'm grateful for:
          </FormLabel>
          <Textarea
            // display={"none"}
            display={display}
            {...register("gratefulForDoday", { required: true })}
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            placeholder="Write down thing you have been grateful for today. Choose it type and submit"
            h="6.2rem"
            resize={"none"}
          />
        </FormControl>
        <FormControl
          id="grateCategories"
          // display={"none"}
          display={display}
        >
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
        <TableContainer display={display === "none" ? "" : "none"}>
          <Table variant="simple" h={"100%"}>
            <Tbody>
              {grateDataArrey.length === 3 &&
                grateDataArrey.map((grateElement, index) => (
                  <Tr key={index} fontSize={16}>
                    <Td ps={0} pb={3.5} pt={3.5}>
                      {grateElement.gratefulForDoday}
                    </Td>
                    <Td pb={3.5} pt={3.5}>
                      {grateElement.grateCategories}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </form>
  );
};

export default GrateFulnessSection;
