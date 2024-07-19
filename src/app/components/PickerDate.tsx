"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function PickerDate({ handleDate }) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    handleClick();
  }, [startDate]);

  const handleClick = () => {
    handleDate(startDate.toISOString());
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
