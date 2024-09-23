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
  currentId: string;
};

export default function EditForm(props: Props) {
  const booking = useAppSelector((state) => state.booking.todos);
  const current = booking.find(({ id }) => id === props.currentId);

  const { id, date, time, instructor } = current!;

  const [add, setAdd] = useState({});
  const [originDate, setOriginDate] = useState<string | undefined>();
  const [currentDate, setCurrentDate] = useState<string | undefined>();
  const [currentTime, setCurrentTime] = useState<number | string | undefined>();
  const [currentInstructor, setCurrentInstructor] = useState<
    number | string | undefined
  >();

  const firstSelect = useRef<any>(null);
  const secondSelect = useRef<any>(null);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    setOriginDate(date);
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
    const pickerDate = props;
    let month;
    const year = pickerDate?.getFullYear();
    const day = pickerDate?.getDate();

    if (pickerDate) {
      month = pickerDate?.getMonth() + 1;
      const newDate = `${year}-${month}-${day}`;
      setCurrentDate(newDate);
    } else {
      console.log("no date on datepicker of editform");
      setCurrentDate("");
    }
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

    if (firstSelect.current || secondSelect.current) {
      firstSelect.current.clearValue();
      secondSelect.current.clearValue();
    }

    setCurrentTime(undefined);
    setCurrentInstructor(undefined);

    if (originDate === currentDate) {
      setCurrentDate("");
    }

    const closeIcon: HTMLElement | null = document.querySelector(
      ".react-datepicker__close-icon"
    );
    if (closeIcon) {
      closeIcon.click(); //datepicker delete button click trigger to reset datepicker input
    }
    toast.success(`${t("toast-text2")}`, { duration: 2000 });
  }

  //console.log("==EditForm 최종 수정 저장===");
  //console.log(booking);

  return (
    <div className="bg-white mx-5 my-[48px] px-5 py-[30px] rounded">
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
