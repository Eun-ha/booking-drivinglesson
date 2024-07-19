"use client";

import { FormEvent, useEffect, useState } from "react";
import Select from "react-select";
import Todos from "../components/Todos";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import PickerDate from "../components/PickerDate";
import { instructor, time } from "../options/option";
import { insert } from "../store/bookingSlice";

export default function NewCreate() {
  const todos = useAppSelector((state) => state.todos.todos);
  const input = useAppSelector((state) => state.todos.input);
  const booking = useAppSelector((state) => state.booking.todos);

  const [date, setDate] = useState("");
  const [add, setAdd] = useState({});
  const [id, setId] = useState(3);

  const [selectedTime, setselectedTime] = useState();
  const [selectedInstructor, setselectedInstructor] = useState();

  const handleSelectedTime = (e: any) => {
    setselectedTime(e.value);
  };

  const handleSelectedInstructor = (e: any) => {
    setselectedInstructor(e.value);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    setAdd({
      id: id,
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
      done: false,
    });
  }, [date, selectedTime, selectedInstructor]);

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
    setId(id + 1);
    setAdd({
      id: id,
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
      training: "3시간",
      done: false,
    });
    dispatch(insert(add));

    console.log(date);
    console.log(add);
    console.log("업데이트 완료");
  }

  const onSetDate = (props) => {
    setDate(props);
  };

  console.log("예약내역");
  console.log(booking);

  console.log("예약시간");
  console.log(selectedTime);

  console.log("예약강사");
  console.log(selectedInstructor);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          예약날짜 : <PickerDate handleDate={onSetDate} />
        </label>
        <br></br>
        <label>
          예약시간 : <Select options={time} onChange={handleSelectedTime} />
        </label>
        <br></br>
        <label>
          강사명 :
          <Select options={instructor} onChange={handleSelectedInstructor} />
        </label>
        <br></br>
        <label>연수시간 : 3시간</label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
