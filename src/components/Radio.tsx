"use client";

import RadioBtn from "@/components/RadioBtn";
import RadioGroup from "@/components/RadioGroup";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  type: "time" | "instructor";
  handleData: Dispatch<SetStateAction<{}>>;
};

export default function Radio(props: Props) {
  const { type, handleData } = props;
  const [time, setTime] = useState("All");
  const [instructor, setInstructor] = useState("All");

  const timeArray = ["All", "9", "12", "3", "6"];
  const instructorArray = ["All", "홍길동", "고영희", "김철수"];

  let data = type === "time" ? timeArray : instructorArray;

  useEffect(() => {
    type === "time" ? handleData(time) : handleData(instructor);
  }, [time, instructor]);

  return (
    <div>
      <RadioGroup
        label={type === "time" ? "연수시간" : "연수강사"}
        value={type === "time" ? time : instructor}
        onChange={type === "time" ? setTime : setInstructor}
      >
        {data.map((data, index) => (
          <RadioBtn key={index} value={data}>
            {data}
          </RadioBtn>
        ))}
      </RadioGroup>
    </div>
  );
}
