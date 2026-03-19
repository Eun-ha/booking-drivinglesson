"use client";
import { FormEvent, useReducer, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { insertAsync } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import uuid from "react-uuid";
import { CommonSelect } from "./CommonSelect";
import SubmitBtn from "./SubmitBtn";
import { useTranslation } from "react-i18next";

type FormState = {
  date?: string;
  time?: number | string;
  instructor?: number | string;
};

type FormAction =
  | { type: "setDate"; payload?: string }
  | { type: "setTime"; payload?: number | string }
  | { type: "setInstructor"; payload?: number | string }
  | { type: "resetSelections" };

const initialState: FormState = {
  date: undefined,
  time: undefined,
  instructor: undefined,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "setDate":
      return { ...state, date: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    case "setInstructor":
      return { ...state, instructor: action.payload };
    case "resetSelections":
      return { ...state, time: undefined, instructor: undefined };
    default:
      return state;
  }
}

export function Form() {
  const [formState, formDispatch] = useReducer(formReducer, initialState);

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const dispatch = useAppDispatch();
  const bookingStatus = useAppSelector((state) => state.booking.status);

  const { t } = useTranslation();

  const onSetDate = (props: Date | null | undefined) => {
    const pickerDate = props;
    const year = pickerDate?.getFullYear();
    const day = pickerDate?.getDate();
    let month;

    if (pickerDate) {
      month = pickerDate?.getMonth() + 1;
      const newDate = `${year}-${month}-${day}`;
      formDispatch({ type: "setDate", payload: newDate });
    } else {
      console.log("no date on datepicker of form");
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
      id: uuid(),
      date: formState.date,
      time: formState.time,
      instructor: formState.instructor,
    };

    if (formState.time === undefined) {
      toast.error(`${t("toast-text3")}`, { duration: 2000 });
      return;
    }
    if (formState.instructor === undefined) {
      toast.error(`${t("toast-text4")}`, { duration: 2000 });
      return;
    }

    try {
      await dispatch(insertAsync(payload)).unwrap();
      toast.success(`${t("toast-text5")}`, { duration: 2000 });
    } catch (error) {
      const errorMessage = typeof error === "string" ? error : "예약 저장에 실패했습니다.";
      toast.error(errorMessage, { duration: 2000 });
      return;
    }

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }

    const closeIcon: HTMLElement | null = document.querySelector(
      ".react-datepicker__close-icon"
    );

    if (closeIcon) {
      closeIcon.click();
    }

    formDispatch({ type: "resetSelections" });
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        {t("form-title1")} : <PickerDate handleDate={onSetDate} />
      </label>
      <br></br>
      <label>
        {t("form-title2")} :
        <CommonSelect
          type="time"
          mySelectRef={firstSelect}
          handleTime={handleSelectedValue}
        />
      </label>
      <br></br>
      <label>
        {t("form-title3")} :
        <CommonSelect
          type="instructor"
          mySelectRef={secondSelect}
          handleTime={handleSelectedValue}
        />
      </label>
      <SubmitBtn type="save" disabled={bookingStatus === "loading"} />
    </form>
  );
}
