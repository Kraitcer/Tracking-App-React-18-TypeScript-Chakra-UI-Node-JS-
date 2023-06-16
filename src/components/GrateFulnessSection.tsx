import {
  Text,
  Textarea,
  Flex,
  useRadioGroup,
  HStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import SectionButton from "./SectionButton";
import RadioCard from "./themes/customRadio";

const GrateFulnessSection = () => {
  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "gratefulness",
    // defaultValue: "Event",
    // onChange: console.log,
  });

  const group = getRootProps();
  const options = ["Person", "Event", "Simplicity"];
  return (
    <FormControl>
      <Flex gap={1} flexDirection={"column"}>
        <FormLabel marginBottom={0} fontSize={"xl"}>
          Today, i'm grateful for:
        </FormLabel>
        <Textarea
          variant="brandPrimary"
          // onChange={}
          bg={"blue.100"}
          color={"white"}
          placeholder="Write down thing you have been grateful for today. Choose it type and submit"
          h="6.2rem"
          resize={"none"}
        />
        <HStack {...group} gap={1} mt={1}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
          <SectionButton
            buttonName={"1"}
            onClick={() => console.log(value)}
            // onClick={() => setGratefulnes("2")}
          />
        </HStack>
      </Flex>
    </FormControl>
  );
};

export default GrateFulnessSection;
