"use client";
import "react-date-picker/dist/DatePicker.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DatePicker = dynamic(() => import("react-date-picker"), { ssr: false });

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function PickerDate() {
  const [value, onChange] = useState<Value>(new Date());
  useEffect(() => {
    onChange(null);
  }, []);

  console.log(value);

  return <DatePicker onChange={onChange} value={value} />;
}
