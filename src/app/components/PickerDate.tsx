"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

interface PickerDateProps {
  handleDate: (props: Date | null | undefined) => void;
}
export default function PickerDate({ handleDate }: PickerDateProps) {
  const [startDate, setStartDate] = useState<Date | null | undefined>(
    new Date()
  );

  useEffect(() => {
    handleClick();
  }, [startDate]);

  const handleClick = () => {
    handleDate(startDate);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        onSelect={handleClick}
      />
    </div>
  );
}
