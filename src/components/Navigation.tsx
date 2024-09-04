"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BookingIcon from "@/components/icons/BookingIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { useTranslation } from "react-i18next";

export type dataType = {
  link: string;
  icon: JSX.Element;
  title: string;
};

export default function Navigation() {
  const pathName = usePathname();

  const { t } = useTranslation();

  const naviData: dataType[] = [
    {
      link: "/",
      icon: <HomeIcon />,
      title: `${t("nav-title1")}`,
    },
    {
      link: "/new",
      icon: <BookingIcon />,
      title: `${t("nav-title2")}`,
    },
    {
      link: "/list",
      icon: <SearchIcon />,
      title: `${t("nav-title3")}`,
    },
  ];

  return (
    <div className="flex justify-evenly bg-indigo-500">
      {naviData.map((data, index) => (
        <Link
          href={data.link}
          key={index}
          className={`flex items-center py-3 ${
            pathName === data.link ? "text-indigo-200" : "text-indigo-900"
          }`}
        >
          <div>{data.icon}</div>
          <span className="ml-1">{data.title}</span>
        </Link>
      ))}
    </div>
  );
}
