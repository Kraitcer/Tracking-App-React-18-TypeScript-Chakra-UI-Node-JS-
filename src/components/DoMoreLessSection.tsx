import {
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Select,
  useToast,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
  Text,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionButton from "./UI Components/SectionButton";
import { grateCategories } from "./grateCategories";
import { useEffect, useState } from "react";

interface Props {
  setData: (data: any[]) => void;
  getData: any[];
}

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

const DoMoreLessSection = ({ getData, setData }: Props) => {
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

  // const [grateDataArrey, setGrateDataArrey] = useState<any[]>([]);

  useEffect(() => {
    if (getData.length === 3)
      localStorage.setItem("gratefulness array", JSON.stringify(getData));
    JSON.stringify(getData);
    // console.log(getData);
  }, [getData]);

  const onSubmit = (data: FieldValues) => {
    setData([...getData, data]);
    setCount(count === 0 ? 1 : count === 1 ? 2 : count === 2 ? 3 : NaN);
    if (count === 0 || count === 1)
      toast({
        title: "Gratefulness",
        description: "Well done!!! Try next one",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

    if (count === 2)
      toast({
        title: "Well done with Gratefulness",
        description: "Try to vote for your self",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    reset();

    if (count === 3) {
      setDisplay("none");
    }
  };

  const grateCategories = [
    "eliminating actions",
    "automating actions",
    "deligating actions",
  ] as const;
  function nexGratefulness() {
    if (count === 2) setDisplay("none");
    if (errors.gratefulForDoday || errors.grateCategories)
      toast({
        title: `${errors.gratefulForDoday?.message}`,
        description:
          "be gratefull for your self and choose why. But that why shoold be at least 3 charakters",
        status: "warning",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
  }

  const toDay = ["Firstly", "Secondary", "Thirdly", "Taday"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={1} flexDirection={"column"}>
        <FormControl id="gratefulness">
          <FormLabel marginBottom={1} fontSize={"xl"}>
            {toDay[count]}, i will do more:
          </FormLabel>
          <Textarea
            display={display}
            {...register("gratefulForDoday", { required: true })}
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            // placeholder="Write down thing you have been grateful for today. Choose it type and submit"
            h={"5.5rem"}
            resize={"none"}
            _hover={{
              bg: "blue.400",
              // placeholder: "",
            }}
          />
        </FormControl>
        <FormControl id="gratefulness">
          <FormLabel marginBottom={1} fontSize={"xl"}>
            & less:
          </FormLabel>
          <Input
            display={display}
            // {...register("gratefulForDoday", { required: true })}
            variant="brandPrimary"
            bg={"blue.100"}
            color={"white"}
            // placeholder="Write down thing you have been grateful for today. Choose it type and submit"
            // h="5.9rem"
            resize={"none"}
            _hover={{
              bg: "blue.400",
              // placeholder: "",
            }}
          />
        </FormControl>
        <FormControl id="grateCategories" display={display}>
          <Flex gap={2} mt={1}>
            <Select
              {...register("grateCategories")}
              placeholder="Choose action"
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
              onClick={() => nexGratefulness()}
            />
          </Flex>
        </FormControl>
        <TableContainer display={display === "none" ? "" : "none"}>
          <Table variant="simple" h={"100%"}>
            <Tbody>
              {getData.length === 3 &&
                getData.map((grateElement, index) => (
                  <Tr key={index} fontSize={17}>
                    <Td ps={0} pb={2} pt={4} textAlign={"left"}>
                      <Text
                        w={"150px"}
                        m={0}
                        textOverflow={"ellipsis"}
                        whiteSpace={"nowrap"}
                        overflow={"hidden"}
                      >
                        {grateElement.gratefulForDoday}
                      </Text>
                    </Td>
                    <Td pb={2} pt={2} pe={0} textAlign={"right"}>
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

export default DoMoreLessSection;
