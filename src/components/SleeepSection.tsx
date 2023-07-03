import React from "react";
import SliderItself from "./UI Components/SliderItself";
import sleep1 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 1.svg";
import sleep2 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 2.svg";
import sleep3 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 3.svg";
import sleep4 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 4.svg";
import sleep5 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 5.svg";

const sleepArray = [
  { id: 1, image: sleep1 },
  { id: 2, image: sleep2 },
  { id: 3, image: sleep3 },
  { id: 4, image: sleep4 },
  { id: 5, image: sleep5 },
];
const SleeepSection = () => {
  return (
    <SliderItself
      setValue={(data) => {
        console.log(data);
        // intellectValue(data)
      }}
      radioSetName={"Sleep rating"}
      icons={sleepArray}
    />
  );
};

export default SleeepSection;
