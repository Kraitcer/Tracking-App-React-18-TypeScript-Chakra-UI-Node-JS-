import { Stack } from "@chakra-ui/layout";
import React from "react";
import ProgressSlider from "./UI Components/ProgressSlider";

interface GoalsProps {
  sliderOneValue: (data: number) => void;
  sliderTwoValue: (data: number) => void;
  sliderThreeValue: (data: number) => void;
  // title: string;
  children: React.ReactNode;
  sliderOneName: string;
  sliderTwoName: string;
  sliderThreeName: string;
  // onOpen: boolean;
  // onClose: () => void;
}

const GoalsSection = ({
  children,
  sliderOneName,
  sliderTwoName,
  sliderThreeName,
  sliderOneValue,
  sliderTwoValue,
  sliderThreeValue,
}: GoalsProps) => {
  return (
    <Stack marginBottom={2}>
      <ProgressSlider
        setValue={(data: number) => sliderOneValue(data)}
        sliderName={sliderOneName}
      />
      <ProgressSlider
        setValue={(data: number) => sliderTwoValue(data)}
        sliderName={sliderTwoName}
      />
      <ProgressSlider
        setValue={(data: number) => sliderThreeValue(data)}
        sliderName={sliderThreeName}
      />
      {children}
    </Stack>
  );
};

export default GoalsSection;
