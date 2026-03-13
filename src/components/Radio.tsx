"use client";

import RadioBtn from "@/components/RadioBtn";
import RadioGroup from "@/components/RadioGroup";
import { useMemo } from "react";

type Props = {
  type: "time" | "instructor";
  value: string;
  onChange: (value: string) => void;
};

export default function Radio({ type, value, onChange }: Props) {
  const data = useMemo(
    () =>
      type === "time"
        ? ["All", "9", "12", "3", "6"]
        : ["All", "홍길동", "고영희", "김철수"],
    [type]
  );

  const label = type === "time" ? "연수시간" : "연수강사";

  return (
    <div>
      <RadioGroup label={label} value={value} onChange={onChange}>
        {data.map((item) => (
          <RadioBtn key={item} value={item}>
            {item}
          </RadioBtn>
        ))}
      </RadioGroup>
    </div>
  );
}
