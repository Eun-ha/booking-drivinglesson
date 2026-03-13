"use client";

import { RadioContext } from "@/context/RadioContext";
import { ReactNode } from "react";

type Rest = {
  value: string;
  onChange: (value: string) => void;
};

//type alias
type Props = Rest & {
  label: string;
  children: ReactNode;
};

export default function RadioGroup({ label, children, ...rest }: Props) {
  return (
    <fieldset>
      <legend className="w-full p-3 border-b bg-indigo-500/15 font-bold text-sm">
        {label}
      </legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  );
}
