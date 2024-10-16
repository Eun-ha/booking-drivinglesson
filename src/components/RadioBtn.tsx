"use client";

import { RadioContext } from "@/context/RadioContext";
import { ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
  value: string;
};

export default function RadioBtn({ children, value }: Props) {
  const group = useContext(RadioContext);

  return (
    <label className="inline-block p-2">
      <input
        type="radio"
        value={value}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      <span className="pl-[2px]">{children}</span>
    </label>
  );
}
