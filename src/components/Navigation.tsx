"use client";

import { naviData } from "@/data/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-evenly bg-indigo-500">
      {naviData.map((data, index) => (
        <Link href={data.link} key={index} className="flex items-center py-3">
          {data.icon}
          <span className="ml-1">{data.title}</span>
        </Link>
      ))}
    </div>
  );
}
