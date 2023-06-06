import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const TrackHabitsOnMasterPlan = () => {
  return (
    <TableContainer fontSize={30}>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr bg={"blue.600"} fontSize={30}>
            <Th color={"white"} fontSize={20}>
              habits
            </Th>
            <Th color={"white"} fontSize={20}>
              1
            </Th>
            <Th color={"white"} fontSize={20}>
              2
            </Th>
            <Th color={"white"} fontSize={20}>
              3
            </Th>
            <Th color={"white"} fontSize={20}>
              4
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>sport</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>meditation</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>reading</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>habit 1</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>habit 2</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>habit 3</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>habit 4</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackHabitsOnMasterPlan;
