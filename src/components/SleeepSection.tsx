import SliderItself from "./UI Components/SliderItself";
import sleep1 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 1.svg";
import sleep2 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 2.svg";
import sleep3 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 3.svg";
import sleep4 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 4.svg";
import sleep5 from "../assets/Image/MorningPage_SleepSection_icons/SVG/SVG/sleep 5.svg";
import { Flex, VStack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/react";
import {
  UseFormRegister,
  useController,
  Control,
  Controller,
} from "react-hook-form";
import { FormData } from "./MorningMain";

const sleepArray = [
  { id: 1, image: sleep1 },
  { id: 2, image: sleep2 },
  { id: 3, image: sleep3 },
  { id: 4, image: sleep4 },
  { id: 5, image: sleep5 },
];

interface Props {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  sleeprRating: (data: number) => void;
}

const SleeepSection = ({ register, sleeprRating, control }: Props) => {
  const wokeUpEnergizedField = useController({
    name: "wokeUpEnergized",
    control,
    // defaultValue: undefined,
  });
  return (
    <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
      <VStack align={"left"} gap={0}>
        <Flex pt={0} pb={0}>
          <Input
            {...register("wakeUpTime")}
            type={"time"}
            w={"82px"}
            p={1}
            h={"30px"}
          />
          <Text pl={2} pt={1} mb={0}>
            Note Wake-Up Time
          </Text>
        </Flex>
        <Flex pl={8} pt={0}>
          <Controller
            name="wokeUpEnergized"
            control={control}
            render={({ field }) => (
              <Checkbox
                size={"lg"}
                mt={2}
                {...field}
                isChecked={field.value} // Provide the 'isChecked' prop to set the checked state
                value={field.value ? "true" : "false"} // Convert boolean value to string
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
          {/* <Checkbox {...wokeUpEnergizedField.field} size={"lg"} mt={2} /> */}

          <Text pl={9} pt={1} mb={0}>
            Woke Up energized
          </Text>
        </Flex>
        <Flex pl={8}>
          <Controller
            name="hungryForActions"
            control={control}
            render={({ field }) => (
              <Checkbox
                size={"lg"}
                mt={2}
                {...field}
                isChecked={field.value} // Provide the 'isChecked' prop to set the checked state
                value={field.value ? "true" : "false"} // Convert boolean value to string
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
          {/* <Checkbox size={"lg"} mt={2} /> */}
          <Text pl={9} pt={1} mb={0}>
            Hungry for action
          </Text>
        </Flex>
      </VStack>
      <SliderItself
        setValue={(data) => {
          sleeprRating(data);
          // intellectValue(data)
        }}
        radioSetName={"Sleep rating"}
        icons={sleepArray}
      />
    </Flex>
  );
};

export default SleeepSection;
