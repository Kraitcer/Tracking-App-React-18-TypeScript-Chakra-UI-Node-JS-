import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { FaQuestion, FaExclamation } from "react-icons/fa";

interface Props {
  onChange: () => void;
  checked: boolean;
}

const CustomCheckbox = ({ checked, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    onChange();
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      isChecked={checked}
      onChange={handleCheckboxChange}
      checked={checked}
      size={"50px"}
      icon={
        isChecked ? (
          <FaExclamation size={40} color="white" />
        ) : (
          <FaQuestion size={40} color="orange" />
        )
      }
      colorScheme={isChecked ? "blue" : "orange"}
    />
  );
};

export default CustomCheckbox;
