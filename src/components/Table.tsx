"use client";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Radio from "@/components/Radio";
import { useAppSelector } from "@/store/store";
import { useMemo, useState } from "react";
import { InfoType } from "@/app/types/type";

export default function Table() {
  const booking: InfoType[] = useAppSelector((state) => state.booking.todos);
  const [selectedTime, setSelectedTime] = useState("All");
  const [selectedInstructor, setSelectedInstructor] = useState("All");

  const filteredData = useMemo(() => {
    const byTime =
      selectedTime === "All"
        ? booking
        : booking.filter((data) => data.time === Number(selectedTime));

    return selectedInstructor === "All"
      ? byTime
      : byTime.filter((data) => data.instructor === selectedInstructor);
  }, [booking, selectedInstructor, selectedTime]);

  return (
    <div className="lg:flex lg:items-start">
      <div className="mb-[15px] lg:mb-0 lg:mr-[10px] border border-indigo-500/15">
        <Radio type="time" value={selectedTime} onChange={setSelectedTime} />
        <Radio
          type="instructor"
          value={selectedInstructor}
          onChange={setSelectedInstructor}
        />
      </div>
      <table className="w-full text-center border border-indigo-500/15 ">
        <caption className="hidden">driving lesson list table</caption>
        <colgroup>
          <col width="20%" />
          <col width="auto" />
          <col width="20%" />
          <col width="20%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <Thead />
        <Tbody bookingdata={filteredData} />
      </table>
    </div>
  );
}
