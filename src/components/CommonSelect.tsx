"use client";

import React from "react";
import Select, { GroupBase, OptionsOrGroups, SingleValue } from "react-select";
import { selectOptionInstructor, selectOptiontime } from "../options/option";

type TimeType = { label: string; value: number | string };

type SelectProps = {
  type: "time" | "instructor";
  mySelectRef: any;
  handleTime: (props: number | string | undefined) => void;
};

export function CommonSelect(props: SelectProps) {
  const { type, mySelectRef, handleTime } = props;
  let option: OptionsOrGroups<TimeType, GroupBase<TimeType>> = type === "time"
    ? selectOptiontime
    : selectOptionInstructor;

  const handleSelectedValue = (e: SingleValue<TimeType>) => {
    const selectedValue = e;
    handleTime(selectedValue?.value);
  };

  return (
    <Select options={option} onChange={handleSelectedValue} ref={mySelectRef} />
  );
}
