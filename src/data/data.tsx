import { TbHome } from "react-icons/tb";
import { TbBrandBooking } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";

type dataType = {
  link: string;
  icon: JSX.Element;
  title: string;
};

export const naviData: dataType[] = [
  {
    link: "/",
    icon: <TbHome />,
    title: "Go Home",
  },
  {
    link: "/new",
    icon: <TbBrandBooking />,
    title: "New Booking",
  },
  {
    link: "/list",
    icon: <TbListSearch />,
    title: "Go to List",
  },
];
export const theadtext: string[] = [
  "연수날짜",
  "시작시간",
  "강사명",
  "연수시간",
];
