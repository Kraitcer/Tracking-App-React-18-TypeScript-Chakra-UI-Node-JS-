import {
  Text,
  Button,
  Flex,
  Input,
  VStack,
  Box,
  Checkbox,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface Props {
  goalsName: string;
}

const SmartSurvey = ({ goalsName }: Props) => {
  return (
    <>
      <Text fontSize={20} textTransform={"uppercase"}>
        "{goalsName}" MATCH THE FOLLOWING PARAMETRS ?
      </Text>
      <TableContainer marginBottom={3}>
        <Table>
          <Tbody fontSize={30} textTransform={"uppercase"}>
            <Tr>
              <Td
                width={"1px"}
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
                alignItems="center"
              >
                s
              </Td>
              <Td bg={"blue.400"} color={"white"}>
                specific
              </Td>
              <Td>
                <Checkbox size={"lg"}></Checkbox>
              </Td>
            </Tr>
            <Tr>
              <Td
                width={"1px"}
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
              >
                m
              </Td>
              <Td bg={"blue.400"} color={"white"}>
                measureble
              </Td>
              <Td>
                <Checkbox size={"lg"}></Checkbox>
              </Td>
            </Tr>
            <Tr>
              <Td
                width={"1px"}
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
              >
                a
              </Td>
              <Td bg={"blue.400"} color={"white"}>
                actionable
              </Td>
              <Td>
                <Checkbox size={"lg"}></Checkbox>
              </Td>
            </Tr>
            <Tr>
              <Td
                width={"1px"}
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
              >
                r
              </Td>
              <Td bg={"blue.400"} color={"white"}>
                reasonable
              </Td>
              <Td>
                <Checkbox size={"lg"}></Checkbox>
              </Td>
            </Tr>
            <Tr>
              <Td
                width={"1px"}
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
              >
                t
              </Td>
              <Td bg={"blue.400"} color={"white"}>
                time-bound
              </Td>
              <Td>
                <Checkbox size={"lg"}></Checkbox>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SmartSurvey;
