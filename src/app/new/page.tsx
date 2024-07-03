"use client";

import { useEffect, useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import dynamic from "next/dynamic";
import Select from "react-select";

const DatePicker = dynamic(() => import("react-date-picker"), { ssr: false });

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const options2 = [
  { value: "홍길동", label: "홍길동" },
  { value: "고영희", label: "고영희" },
  { value: "김철수", label: "김철수" },
];

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/submit", {
    method: "POST",
    body: formData,
  });

  // Handle response if necessary
  const data = await response.json();
  // ...
}

export default function NewCreate() {
  const [value, onChange] = useState<Value>(new Date());
  useEffect(() => {
    onChange(null);
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <label>
        예약날짜 : <DatePicker onChange={onChange} value={value} />
      </label>
      <br></br>
      <label>
        예약시간 : <Select options={options} />
      </label>
      <br></br>
      <label>
        강사명 : <Select options={options2} />
      </label>
      <br></br>
      <label>연수시간 : 3시간</label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
