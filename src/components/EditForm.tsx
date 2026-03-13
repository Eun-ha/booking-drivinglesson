"use client";
import { FormEvent, useReducer, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { edit } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import { CommonSelect } from "./CommonSelect";
import SubmitBtn from "./SubmitBtn";
import { useTranslation } from "react-i18next";

type Props = {
  currentId: string;
};

type EditFormState = {
  date?: string;
  time?: number | string;
  instructor?: number | string;
};

type EditFormAction =
  | { type: "setDate"; payload?: string }
  | { type: "setTime"; payload?: number | string }
  | { type: "setInstructor"; payload?: number | string }
  | { type: "resetAfterSubmit"; payload: { date?: string } };

function editFormReducer(
  state: EditFormState,
  action: EditFormAction
): EditFormState {
  switch (action.type) {
    case "setDate":
      return { ...state, date: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    case "setInstructor":
      return { ...state, instructor: action.payload };
    case "resetAfterSubmit":
      return {
        ...state,
        date: action.payload.date,
        time: undefined,
        instructor: undefined,
      };
    default:
      return state;
  }
}

export default function EditForm(props: Props) {
  const booking = useAppSelector((state) => state.booking.todos);
  const current = booking.find(({ id }) => id === props.currentId);

  const { id, date, time, instructor } = current!;

  const [formState, formDispatch] = useReducer(editFormReducer, {
    date,
    time,
    instructor,
  });

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const onSetDate = (props: Date | null | undefined) => {
    const pickerDate = props;
    let month;
    const year = pickerDate?.getFullYear();
    const day = pickerDate?.getDate();

    if (pickerDate) {
      month = pickerDate?.getMonth() + 1;
      const newDate = `${year}-${month}-${day}`;
      formDispatch({ type: "setDate", payload: newDate });
    } else {
      console.log("no date on datepicker of editform");
      formDispatch({ type: "setDate", payload: "" });
    }
  };

  const handleSelectedValue = (props: number | string | undefined) => {
    const selectedValue = props;

    typeof selectedValue === "number"
      ? formDispatch({ type: "setTime", payload: selectedValue })
      : formDispatch({ type: "setInstructor", payload: selectedValue });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      id,
      date: formState.date,
      time: formState.time,
      instructor: formState.instructor,
    };

    dispatch(edit(payload));

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }

    formDispatch({
      type: "resetAfterSubmit",
      payload: { date: date === formState.date ? "" : formState.date },
    });

    const modalCloseBtn: HTMLElement | null =
      document.querySelector(".modalCloseBtn");
    if (modalCloseBtn) {
      modalCloseBtn.click(); //datepicker delete button click trigger to reset datepicker input
    }
    toast.success(`${t("toast-text2")}`, { duration: 2000 });
  }

  console.log("==EditForm 최종 수정 저장===");
  console.log(booking);

  return (
    <div className="bg-white mx-5 my-[48px] px-5 py-[30px] rounded">
      <form onSubmit={onSubmit}>
        <label>
          {t("form-title1")} : {formState.date}
          <PickerDate handleDate={onSetDate} />
        </label>
        <br></br>
        <label>
          {t("form-title2")} : {formState.time}
          <CommonSelect
            type="time"
            mySelectRef={firstSelect}
            handleTime={handleSelectedValue}
          />
        </label>
        <br></br>
        <label>
          {t("form-title3")} : {formState.instructor}
          <CommonSelect
            type="instructor"
            mySelectRef={secondSelect}
            handleTime={handleSelectedValue}
          />
        </label>
        <SubmitBtn type="fix" />
      </form>
    </div>
  );
}
