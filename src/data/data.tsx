import BookingIcon from "@/components/icons/BookingIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import SearchIcon from "@/components/icons/SearchIcon";

type dataType = {
  link: string;
  icon: JSX.Element;
  title: string;
};

export const naviData: dataType[] = [
  {
    link: "/",
    icon: <HomeIcon />,
    title: "Go Home",
  },
  {
    link: "/new",
    icon: <BookingIcon />,
    title: "New Booking",
  },
  {
    link: "/list",
    icon: <SearchIcon />,
    title: "Go to List",
  },
];
export const theadtext: string[] = [
  "날짜",
  "시간",
  "강사명",
  "연수시간",
  "삭제",
  "수정",
];
