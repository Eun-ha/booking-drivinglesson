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

export default function NewCreate() {
  const [value, onChange] = useState<Value>(new Date());
  useEffect(() => {
    onChange(null);
  }, []);
  return (
    <div>
      <p>새 예약 페이지 입니다.</p>
      <DatePicker onChange={onChange} value={value} />
      <Select options={options} />
      <Select options={options2} />
    </div>
  );
}
