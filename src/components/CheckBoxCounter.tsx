import React, { useState } from "react";

interface CheckboxData {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
}
interface Props {
  onSubmit: () => void;
}
const CheckboxComponent = ({ onSubmit }: Props) => {
  const [checkboxData, setCheckboxData] = useState<CheckboxData>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (checkboxName: keyof CheckboxData) => {
    setCheckboxData((prevData) => ({
      ...prevData,
      [checkboxName]: !prevData[checkboxName] as boolean,
    }));
  };

  const handleSubmit = () => {
    const { checkbox1, checkbox2, checkbox3 } = checkboxData;
    if (checkbox1 && checkbox2 && checkbox3) {
      // All checkboxes are checked, perform your desired action here
      console.log("Submitting data:", checkboxData);
    } else {
      console.log("Please check all checkboxes");
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxData.checkbox1}
          onChange={() => handleCheckboxChange("checkbox1")}
        />
        Checkbox 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={checkboxData.checkbox2}
          onChange={() => handleCheckboxChange("checkbox2")}
        />
        Checkbox 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={checkboxData.checkbox3}
          onChange={() => handleCheckboxChange("checkbox3")}
        />
        Checkbox 3
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CheckboxComponent;
