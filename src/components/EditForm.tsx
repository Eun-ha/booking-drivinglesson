"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import PickerDate from "@/components/PickerDate";
import { edit } from "./../store/bookingSlice";
import toast from "react-hot-toast";
import React from "react";
import { CommonSelect } from "./CommonSelect";
import SubmitBtn from "./SubmitBtn";
import { useTranslation } from "react-i18next";

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
  const [currentDate, setCurrentDate] = useState<string>();
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
    toast.success(`${t("toast-text2")}`, { duration: 2000 });

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }

    setCurrentTime(undefined);
    setCurrentInstructor(undefined);
    setCurrentDate(undefined);
  }

  console.log("==최종수정 저장===");
  console.log(booking);

  const { t } = useTranslation();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          {t("form-title1")} : {currentDate}
          <PickerDate handleDate={onSetDate} />
        </label>
        <br></br>
        <label>
          {t("form-title2")} : {currentTime}
          <CommonSelect
            type="time"
            mySelectRef={firstSelect}
            handleTime={handleSelectedValue}
          />
        </label>
        <br></br>
        <label>
          {t("form-title3")} : {currentInstructor}
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
