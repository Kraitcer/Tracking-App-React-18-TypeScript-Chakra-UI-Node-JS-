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
  Checkbox,
} from "@chakra-ui/react";
import SectionButton from "./SectionButton";
import { useState } from "react";

const TrackHabitsOnMasterPlan = () => {
  const [] = useState();
  return (
    <TableContainer fontSize={30}>
      <Table variant="simple">
        <TableCaption>
          <SectionButton
            buttonName="Track"
            onClick={() => console.log("submited")}
          />
        </TableCaption>
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
            <Td>
              <Checkbox size={"lg"} />
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>meditation</Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Checkbox size={"lg"} />
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>reading</Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Checkbox size={"lg"} />
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackHabitsOnMasterPlan;
