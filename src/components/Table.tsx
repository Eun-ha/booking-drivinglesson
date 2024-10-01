"use client";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Radio from "@/components/Radio";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { InfoType } from "@/app/types/type";

export default function Table() {
  const booking = useAppSelector((state) => state.booking.todos);
  const [filterdata, setFilterData] = useState(booking);
  const [target, setTarget] = useState("All");

  const handleFilterData = (props: any) => {
    //console.log(typeof props);
    //setTarget(props);
  };

  useEffect(() => {
    setFilterData(booking);
  }, [booking]);

  /*
  useEffect(() => {
    const value = filterdata.filter((data) => data.time === target);
    setFilterData(value);
  }, [target]);

  console.log("========target value");
  console.log(target);

  console.log("========sorteddata value");
  console.log(filterdata);
  */

  return (
    <div>
      <Radio handleData={handleFilterData} />
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
