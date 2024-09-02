"use client";

import { naviData } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
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
