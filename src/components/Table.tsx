"use client";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Radio from "@/components/Radio";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { InfoType } from "@/app/types/type";

export default function Table() {
  const booking: InfoType[] = useAppSelector((state) => state.booking.todos);
  const [filterdata, setFilterData] = useState<InfoType[]>(booking);
  const [target, setTarget] = useState<number | string | undefined>();
  const [selectedInstructor, setSelectedInstructor] = useState<
    string | undefined
  >();

  const handleFilterTime = (props: any) => {
    let value;
    props != "All" ? (value = Number(props)) : (value = "All");
    setTarget(value);
  };

  const handleFilterInstructor = (props: any) => {
    const value = props;
    setSelectedInstructor(value);
  };

  useEffect(() => {
    let temp: InfoType[] = [];
    if (target !== "All") {
      temp = booking.filter((data) => {
        return data.time === target;
      });
    } else {
      temp = booking;
    }
    if (selectedInstructor !== "All") {
      let temp2 = temp.filter((data) => data.instructor === selectedInstructor);
      setFilterData(temp2);
    } else {
      setFilterData(temp);
    }
  }, [booking, target, selectedInstructor]);

  return (
    <div className="lg:flex">
      <div className="border border-indigo-500/15">
        <Radio type="time" handleData={handleFilterTime} />
        <Radio type="instructor" handleData={handleFilterInstructor} />
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
        <Tbody bookingdata={filterdata} />
      </table>
    </div>
  );
}
