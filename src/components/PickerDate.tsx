"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

type Props = {
  handleDate: (props: Date | null | undefined) => void;
};

export default function PickerDate({ handleDate }: Props) {
  const [startDate, setStartDate] = useState<Date | null | undefined>();

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
        isClearable
        placeholderText="Click to select a date"
        onFocus={(e) => e.target.blur()}
      />
    </div>
  );
}
