import { Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ProgressSlider from "./UI Components/ProgressSlider";
import { projectsArray } from "./Projects";
import fitusArrow from "../assets/Image/week in Review section Icons/SVG/FITUS Bonus 8.svg";
import { chakra } from "@chakra-ui/system";
import SectionButton from "./UI Components/SectionButton";

interface GoalsProps {
  sliderOneValue: (data: number) => void;
  sliderTwoValue: (data: number) => void;
  sliderThreeValue: (data: number) => void;
  sliderFourValue: (data: number) => void;
  sliderFiveValue: (data: number) => void;

  sliderOneName: string;
  sliderTwoName: string;
  sliderThreeName: string;
  sliderFourName: string;
  sliderFiveName: string;
  onOpen: () => void;
  // onClose: () => void;
}

const GoalsSection = ({
  sliderOneName,
  sliderTwoName,
  sliderThreeName,
  sliderFourName,
  sliderFiveName,
  sliderOneValue,
  sliderTwoValue,
  sliderThreeValue,
  sliderFourValue,
  sliderFiveValue,
  onOpen,
}: GoalsProps) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  return (
    <>
      <Stack marginBottom={2}>
        <ProgressSlider
          setValue={(data: number) => sliderOneValue(data)}
          sliderName={sliderOneName}
        />
        <Image src={fitusArrow} w={"220px"} />

        <ProgressSlider
          setValue={(data: number) => sliderTwoValue(data)}
          sliderName={sliderTwoName}
        />
        <Image src={fitusArrow} w={"220px"} />

        <ProgressSlider
          setValue={(data: number) => sliderThreeValue(data)}
          sliderName={sliderThreeName}
        />
        <Image src={fitusArrow} w={"220px"} />
        <ProgressSlider
          setValue={(data: number) => sliderFourValue(data)}
          sliderName={sliderFourName}
        />
        <Image src={fitusArrow} w={"220px"} />
        <ProgressSlider
          setValue={(data: number) => sliderFiveValue(data)}
          sliderName={sliderFiveName}
        />
        <Image src={fitusArrow} w={"220px"} />
        <SectionButton
          buttonName="FETUS-INDEX"
          onClick={() => {
            onOpen();
          }}
        />
      </Stack>
    </>
  );
};

export default GoalsSection;
