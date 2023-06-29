import { useState } from "react";
import CustomCheckbox from "./CustomCheckBox";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
// import { RadioGroup } from "@chakra-ui/radio";
import { CheckboxGroup } from "@chakra-ui/checkbox";
import { UseFormRegister } from "react-hook-form";

interface smartArray {
  acronym: string;
  meaning: string;
  checkbox: boolean;
  id: number;
}
const smartArray = [
  { id: 0, acronym: "s", meaning: "specific", checkbox: false },
  { id: 1, acronym: "m", meaning: "measureble", checkbox: false },
  { id: 2, acronym: "a", meaning: "actionable", checkbox: false },
  { id: 3, acronym: "r", meaning: "reasonable", checkbox: false },
  { id: 4, acronym: "t", meaning: "timeBound", checkbox: false },
];

interface refrashProps {
  key: number;
}
interface Props {
  onChange: () => void;
  //   register: UseFormRegister<FormData>;
}

const SmartServey = (
  {
    onChange,
  }: //   register,
  Props,
  { key }: refrashProps
) => {
  const [smartCheckboxData, setSmartCheckboxData] = useState(smartArray);

  const handleSmartChange = (checkboxName: string) => {
    setSmartCheckboxData(
      smartCheckboxData.map((smart) =>
        smart.meaning == checkboxName
          ? { ...smart, checkbox: !smart.checkbox }
          : smart
      )
    );
    // onChange();
  };

  if (
    smartCheckboxData[0].checkbox &&
    smartCheckboxData[1].checkbox &&
    smartCheckboxData[2].checkbox &&
    smartCheckboxData[3].checkbox &&
    smartCheckboxData[4].checkbox
  ) {
    // console.log("smart cheker - OK");
    // console.log(smartCheckboxData);
    onChange();
  } else {
    // console.log("smartCheckboxData");
  }

  return (
    <TableContainer marginBottom={3}>
      <Table>
        <CheckboxGroup>
          <Tbody fontSize={26} textTransform={"uppercase"}>
            {smartArray.map((parametr, index) => (
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
                    key={key}
                    // checked={true}

                    //   checked={register}
                    checked={smartCheckboxData[parametr.id].checkbox}
                    onChange={() => {
                      handleSmartChange(parametr.meaning);
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </CheckboxGroup>
      </Table>
    </TableContainer>
  );
};

export default SmartServey;
