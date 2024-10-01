"use client";

import { InfoType } from "@/app/types/type";
import RadioBtn from "@/components/RadioBtn";
import RadioGroup from "@/components/RadioGroup";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  handleData: Dispatch<SetStateAction<{}>>;
};

export default function Radio({ handleData }: Props) {
  const [value, setValue] = useState("All");

  useEffect(() => {
    handleData(value);
  }, [value]);

  return (
    <div>
      <RadioGroup
        label="필터링 할 시간을 선택하는 라디오 버튼 입니다."
        value={value}
        onChange={setValue}
      >
        <RadioBtn value="All">All</RadioBtn>
        <RadioBtn value="9">9</RadioBtn>
        <RadioBtn value="12">12</RadioBtn>
        <RadioBtn value="3">3</RadioBtn>
        <RadioBtn value="6">6</RadioBtn>
      </RadioGroup>
      <p>{value} 타임을 선택하셨습니다.</p>
    </div>
  );
}
