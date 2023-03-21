import { AiOutlineEdit, AiOutlineSchedule } from "react-icons/ai";
// import { MdEditCalendar } from "react-icons/md";
import { TbCalendarOff, TbClockHour4, TbGauge } from "react-icons/tb";
import { GiSportMedal } from "react-icons/gi";
import tony from "./tony.png";
import thor from "./thor.png";
import steve from "./steve.png";
import natasha from "./natasha.png";
import bruce from "./bruce.png";
import clint from "./clint.png";

const mockInfo = [
  {
    icon: <GiSportMedal />,
    title: "Tom A",
    subtitle: "Coach",
  },
  {
    icon: <TbClockHour4 />,
    title: "16:15",
    subtitle: "Start Time",
  },
  {
    icon: <TbGauge />,
    title: "3/15",
    subtitle: "Participants",
  },
];
const MockParticipants = [
  { id: 1, label: "Tony Stark", checked: false, selected: true, img: tony },
  { id: 2, label: "Thor Odinson", checked: true, selected: true, img: thor },
  {
    id: 3,
    label: "Natash Romanof",
    checked: false,
    selected: false,
    img: natasha,
  },
  {
    id: 4,
    label: "Steve Rogers",
    checked: true,
    selected: true,
    img: steve,
  },
  {
    id: 5,
    label: "Bruce Banner",
    checked: false,
    selected: false,
    img: bruce,
  },
  {
    id: 6,
    label: "Clint Barton",
    checked: false,
    selected: false,
    img: clint,
  },
];

export { mockInfo, MockParticipants };
