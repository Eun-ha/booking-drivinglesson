"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { insert } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import uuid from "react-uuid";
import { CommonSelect } from "./CommonSelect";
import SubmitBtn from "./SubmitBtn";
import { useTranslation } from "react-i18next";

export function Form() {
  const booking = useAppSelector((state) => state.booking.todos);

  const [add, setAdd] = useState({});

  const [id, setId] = useState("");
  const [date, setDate] = useState<string | undefined>();

  const [selectedTime, setselectedTime] = useState<number | string | undefined>(
    undefined
  );
  const [selectedInstructor, setselectedInstructor] = useState<
    number | string | undefined
  >(undefined);

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    setAdd({
      id: uuid(),
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
    });
  }, [id, date, selectedTime, selectedInstructor]);

  //PickerDate
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

  //Commonselect
  const handleSelectedValue = (props: number | string | undefined) => {
    const selectedValue = props;

    typeof selectedValue === "number"
      ? setselectedTime(selectedValue)
      : setselectedInstructor(selectedValue);
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setId(uuid());

    setAdd({
      id: id,
      date: date,
      time: selectedTime,
      instructor: selectedInstructor,
    });

    if (selectedTime === undefined) {
      toast.error(`${t("toast-text3")}`, { duration: 2000 });
      return;
    }
    if (selectedInstructor === undefined) {
      toast.error(`${t("toast-text4")}`, { duration: 2000 });
      return;
    }

    dispatch(insert(add));
    toast.success(`${t("toast-text5")}`, { duration: 2000 });

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }

    setselectedTime(undefined);
    setselectedInstructor(undefined);
  }

  //console.log("===최종저장===");
  //console.log(booking);

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
      <SubmitBtn type="save" />
    </form>
  );
}
