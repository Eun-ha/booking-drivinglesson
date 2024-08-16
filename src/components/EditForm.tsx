"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { edit } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import { CommonSelect } from "./CommonSelect";

type Props = {
  params: {
    slug: string;
  };
};

export default function EditForm({ params }: Props) {
  const booking = useAppSelector((state) => state.booking.todos);
  const current = booking.find(({ id }) => id === params.slug);

  const { id, date, time, instructor } = current!;

  const [add, setAdd] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState<number | string | undefined>();
  const [currentInstructor, setCurrentInstructor] = useState<
    number | string | undefined
  >();

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentDate(date);
    setCurrentTime(time);
    setCurrentInstructor(instructor);
  }, []);

  useEffect(() => {
    setAdd({
      id,
      date: currentDate,
      time: currentTime,
      instructor: currentInstructor,
    });
  }, [currentDate, currentTime, currentInstructor]);

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
    setCurrentDate(newDate);
  };

  //Commonselect
  const handleSelectedValue = (props: number | string | undefined) => {
    const selectedValue = props;

    typeof selectedValue === "number"
      ? setCurrentTime(selectedValue)
      : setCurrentInstructor(selectedValue);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAdd({
      id,
      date: currentDate,
      time: currentTime,
      instructor: currentInstructor,
    });

    dispatch(edit(add));
    toast.success("수정이 완료되었습니다.", { duration: 2000 });

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }
  }

  console.log(booking);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          예약날짜 : {currentDate}
          <PickerDate handleDate={onSetDate} />
        </label>
        <br></br>
        <label>
          예약시간 : {currentTime}
          <CommonSelect
            type="time"
            mySelectRef={firstSelect}
            handleTime={handleSelectedValue}
          />
        </label>
        <br></br>
        <label>
          강사명 :{currentInstructor}
          <CommonSelect
            type="instructor"
            mySelectRef={secondSelect}
            handleTime={handleSelectedValue}
          />
        </label>
        <br></br>
        <label>연수시간 : 3시간</label>
        <br></br>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
