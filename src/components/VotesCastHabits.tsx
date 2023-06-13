import {
  Box,
  Button,
  HStack,
  Input,
  baseTheme,
  Image,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useRef, useState } from "react";
import SectionButton from "./SectionButton";
import vateOne from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-1.svg";
import vateTwo from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-2-2.svg";
import vateThree from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-3-3.svg";
import vateFour from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-4.svg";
import vateFive from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-5.svg";
import vateSix from "../assets/Image/EveningPage_VoteCastSection_Icons/vote-cast-icon-6.svg";

const VotesCastHabits = () => {
  const habitRef = useRef<HTMLInputElement>(null);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [selectedHabit, setSelectedHabit] = useState<string | null>();
  const voteIcons = [vateOne, vateTwo, vateThree, vateFour, vateFive, vateSix];

  const habits = [
    { id: 1, name: "habit1" },
    { id: 2, name: "habit2" },
    { id: 3, name: "habit3" },
    { id: 4, name: "Sport" },
    { id: 5, name: "Maditation" },
    { id: 6, name: "Reading" },
  ];
  function nextHabit() {
    const iconExpressoin = currentIcon < 5 ? currentIcon + 1 : 0;
    setCurrentIcon(iconExpressoin), setSelectedHabit("");
  }

  return (
    <HStack marginTop={2} marginBottom={2}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (habitRef.current !== null) console.log(habitRef.current.value);
        }}
      >
        <Flex gap={2} flexDirection={"column"}>
          <HStack alignItems={"center"}>
            <Image boxSize="50px" src={voteIcons[currentIcon]} />
            <Menu>
              <MenuButton
                w={60}
                border={"none"}
                as={Button}
                rightIcon={<BsChevronDown />}
              >
                {selectedHabit || "Choose Habit"}
              </MenuButton>
              <MenuList>
                {habits.map((habit) => (
                  <MenuItem
                    key={habit.id}
                    onClick={() => setSelectedHabit(habit.name)}
                  >
                    {habit.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
          <Input
            border={"none"}
            variant="filled"
            type="text"
            placeholder="improvement"
          />
          <Input
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
