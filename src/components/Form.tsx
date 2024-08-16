"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { insert } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import uuid from "react-uuid";
import { CommonSelect } from "./CommonSelect";

export function Form() {
  const booking = useAppSelector((state) => state.booking.todos);

  const [add, setAdd] = useState({});

  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  const [selectedTime, setselectedTime] = useState<
    number | string | undefined
  >();
  const [selectedInstructor, setselectedInstructor] = useState<
    number | string | undefined
  >();

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const handleSelectedValue = (props: number | string | undefined) => {
    const selectedValue = props;

    typeof selectedValue === "number"
      ? setselectedTime(selectedValue)
      : setselectedInstructor(selectedValue);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    setAdd({
      id: uuid(),
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
    });
  }, [id, date, selectedTime, selectedInstructor]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /*
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // 
    */
    setId(uuid());
    setAdd({
      id: id,
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
    });

    if (selectedTime === undefined) {
      toast.error("예약 시간을 선택해 주세요.", { duration: 2000 });
      return;
    }
    if (selectedInstructor === "") {
      toast.error("강사를 선택해 주세요.", { duration: 2000 });
      return;
    }

    dispatch(insert(add));
    toast.success("예약이 완료되었습니다.", { duration: 2000 });

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }
  }

  const onSetDate = (props: Date | null | undefined) => {
    const date = props;
    const year = date?.getFullYear();
    let month;

    if (date) {
      month = date?.getMonth() + 1;
    } else {
      console.log("no date");
    }

    const day = date?.getDate();
    const newDate = `${year}-${month}-${day}`;
    setDate(newDate);
  };

  console.log(booking);

  return (
    <form onSubmit={onSubmit}>
      <label>
        예약날짜 : <PickerDate handleDate={onSetDate} />
      </label>
      <br></br>
      <label>
        예약시간 :
        <CommonSelect
          type="time"
          mySelectRef={firstSelect}
          handleTime={handleSelectedValue}
        />
      </label>
      <br></br>
      <label>
        강사명 :
        <CommonSelect
          type="instructor"
          mySelectRef={secondSelect}
          handleTime={handleSelectedValue}
        />
      </label>
      <br></br>
      <label>연수시간 : 3시간</label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
