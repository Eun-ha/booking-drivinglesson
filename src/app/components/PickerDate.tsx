"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function PickerDate() {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
