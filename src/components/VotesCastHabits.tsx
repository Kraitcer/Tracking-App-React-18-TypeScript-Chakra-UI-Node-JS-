import { HStack, Input, Image, Flex, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SectionButton from "./SectionButton";
import vateOne from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-1.svg";
import vateTwo from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-2-2.svg";
import vateThree from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-3-3.svg";
import vateFour from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-4.svg";
import vateFive from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-5.svg";
import vateSix from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-6.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { habitCategories } from "./habitCategories";

const schema = z.object({
  habitImprovement: z
    .string()
    .min(3, {
      message: "improvement required and must be at least 3 characters",
    })
    .max(12),
  habitImprovementDetails: z
    .string()
    .min(3, {
      message: "improvement details required and must be at least 3 characters",
    })
    .max(12),
  category: z.enum(habitCategories, {
    errorMap: () => ({ message: "choose habit is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const VotesCastHabits = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [currentIcon, setCurrentIcon] = useState(0);
  const voteIcons = [vateOne, vateTwo, vateThree, vateFour, vateFive, vateSix];

  function nextHabit() {
    if (errors.category)
      toast({
        title: "Vote Cast: Chose habis",
        description: `${errors.category.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitImprovement)
      toast({
        title: "Vote Cast: improvement",
        description: `${errors.habitImprovement.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    if (errors.habitImprovementDetails)
      toast({
        title: "Vote Cast: improvement details",
        description: `${errors.habitImprovementDetails.message}`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
  }

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    const iconExpressoin = currentIcon < 5 ? currentIcon + 1 : 0;
    setCurrentIcon(iconExpressoin);
    toast({
      title: `Well done with ${data.category}`,
      description: "Try Next one",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <HStack marginTop={2} marginBottom={2}>
      <form name="voteCast" onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={2} flexDirection={"column"} w={"17.5rem"}>
          <HStack alignItems={"center"}>
            <Image boxSize="50px" src={voteIcons[currentIcon]} />
            <select
              {...register("category")}
              id="category"
              className="form-select form-select-lg w-100"
              aria-label=".form-select-lg example"
              placeholder="Chose habit"
            >
              <option value={""}>Chose a habit...</option>
              {habitCategories.map((habit) => (
                <option key={habit} value={habit}>
                  {habit}
                </option>
              ))}
            </select>
          </HStack>
          <Input
            {...register("habitImprovement")}
            id="habitImprovement"
            border={"none"}
            variant="filled"
            type="text"
            placeholder="improvement"
          />
          <Input
            {...register("habitImprovementDetails")}
            id="habitImprovementDetails"
            border={"none"}
            variant="filled"
            type="text"
            placeholder="details"
          />
          <SectionButton
            buttonName={"Next Habit"}
            onClick={() => nextHabit()}
          />
        </Flex>
      </form>
    </HStack>
  );
};

export default VotesCastHabits;
