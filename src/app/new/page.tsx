"use client";

import { FormEvent } from "react";

import Select from "react-select";

import Todos from "../components/Todos";
import { useAppSelector } from "@/app/store/store";

import PickerDate from "../components/PickerDate";
import { instructor, time } from "../options/option";

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/submit", {
    method: "POST",
    body: formData,
  });

  // Handle response if necessary
  const data = await response.json();
  // ...
}

export default function NewCreate() {
  const input = useAppSelector((state) => state.todos.input);
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          예약날짜 : <PickerDate />
        </label>
        <br></br>
        <label>
          예약시간 : <Select options={time} />
        </label>
        <br></br>
        <label>
          강사명 : <Select options={instructor} />
        </label>
        <br></br>
        <label>연수시간 : 3시간</label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <Todos input={input} todos={todos} />
    </div>
  );
}
