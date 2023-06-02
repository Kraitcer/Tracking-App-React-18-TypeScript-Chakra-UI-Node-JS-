import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { FaQuestion, FaExclamation } from "react-icons/fa";

interface Props {
  onChange: () => void;
  //   refresher: boolean;
  checked: boolean;
}

const CustomCheckbox = ({ onChange, checked }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  //   setIsChecked(refresher);

  const handleCheckboxChange = () => {
    onChange();
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={handleCheckboxChange}
      checked={checked}
      size={"50px"}
      icon={
        isChecked ? (
          <FaExclamation size={40} color="blue.400" />
        ) : (
          <FaQuestion size={40} color="orange" />
        )
      }
      colorScheme={isChecked ? "blue" : "orange"}
    />
  );
};

export default CustomCheckbox;
