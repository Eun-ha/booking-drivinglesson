"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import PickerDate from "../../components/PickerDate";
import { selectOptionInstructor, selectOptiontime } from "../../options/option";
import { edit } from "../../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function Edit({ params }: Props) {
  const booking = useAppSelector((state) => state.booking.todos);
  const current = booking.find(({ id }) => id === params.slug);

  console.log("초기값");
  console.log(current);

  const { id, date, time, instructor } = current!;

  const [add, setAdd] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState();
  const [currentInstructor, setCurrentInstructor] = useState();

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

  const handleSelectedTime = (e: any) => {
    setCurrentTime(e?.value);
  };

  const handleSelectedInstructor = (e: any) => {
    setCurrentInstructor(e?.value);
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

    console.log("add value");
    console.log(add);

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
    setCurrentDate(newDate);
  };

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
          <Select
            options={selectOptiontime}
            onChange={handleSelectedTime}
            ref={firstSelect}
          />
        </label>
        <br></br>
        <label>
          강사명 :{currentInstructor}
          <Select
            options={selectOptionInstructor}
            onChange={handleSelectedInstructor}
            ref={secondSelect}
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
