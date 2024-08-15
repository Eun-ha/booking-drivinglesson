"use client";

import React from "react";
import { useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { selectOptiontime } from "../options/option";

type SelectProps = {
  handleTime: (props: number | undefined) => void;
  mySelectRef: any;
};

type OptionType = { label: string; value: number };

export function CommonSelect(props: SelectProps) {
  const { mySelectRef, handleTime } = props;

  useEffect(() => {
    console.log("컴포넌트");
    console.log("mySelectRef:", mySelectRef);
  }, []);

  const handleSelectedTime = (e: SingleValue<OptionType>) => {
    console.log("셀렉트 반응함");
    console.log(e?.value);

    const time = e;
    handleTime(time?.value);
  };

  return (
    <Select
      options={selectOptiontime}
      onChange={handleSelectedTime}
      ref={mySelectRef}
    />
  );
}
