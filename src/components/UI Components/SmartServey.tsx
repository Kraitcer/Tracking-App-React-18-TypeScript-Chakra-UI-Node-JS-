import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckBox";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";

interface ChildComponentProps {
  field: {
    value: any;
    onChange: (value: any) => void;
  };
}

const smartArray = [
  { acronym: "s", meaning: "specific", checkbox: false },
  { acronym: "m", meaning: "measureble", checkbox: false },
  { acronym: "a", meaning: "actionable", checkbox: false },
  { acronym: "r", meaning: "resonable", checkbox: false },
  { acronym: "t", meaning: "time-bound", checkbox: false },
];

const SmartServey = ({ field }: ChildComponentProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.value);
  };

  return (
    <TableContainer marginBottom={3}>
      <Table>
        {smartArray.map((parametr, index) => (
          <Tbody fontSize={26} textTransform={"uppercase"}>
            <Tr key={index}>
              <Td
                bg={"white"}
                color={"blue.400"}
                border={"1px solid"}
                borderColor={"blue.400"}
                textAlign={"center"}
              >
                {parametr.acronym}
              </Td>
              <Td
                bg={"blue.400"}
                color={"white"}
                borderTop={"1px solid"}
                borderTopColor={"blue.400"}
              >
                {parametr.meaning}
              </Td>
              <Td
                border={"1px solid"}
                borderColor={"blue.400"}
                paddingTop={2}
                paddingBottom={2}
              >
                <CustomCheckbox
                  //   key={refreshKey}
                  checked={field.value}
                  //   checked={parametr.checkbox}
                  onChange={() => {
                    // handleCheckboxChange("specific");
                    handleChange;
                  }}
                />
              </Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default SmartServey;
