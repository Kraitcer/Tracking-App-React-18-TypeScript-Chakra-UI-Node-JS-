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
  habitImprovement: z.string().min(3).max(12),
  habitImprovementDetails: z.string().min(3).max(12),
  category: z.enum(habitCategories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const VotesCastHabits = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [currentIcon, setCurrentIcon] = useState(0);
  const [selectedHabit, setSelectedHabit] = useState<string>();
  const voteIcons = [vateOne, vateTwo, vateThree, vateFour, vateFive, vateSix];

  function nextHabit() {
    const iconExpressoin = currentIcon < 5 ? currentIcon + 1 : 0;
    setCurrentIcon(iconExpressoin);
    setSelectedHabit("");
  }

  const onSubmit = (data: FieldValues) => console.log(data);

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
              <option value={""}>Chose habit</option>
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
