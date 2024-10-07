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

  const handleFilterData = (props: any) => {
    let value;
    props != "All" ? (value = Number(props)) : (value = "All");
    setTarget(value);
  };

  useEffect(() => {
    setFilterData(booking);
    if (target === "All") {
      setFilterData(booking);
    } else {
      let data = booking.filter((data) => data.time === target);
      setFilterData(data);
    }
  }, [booking, target]);

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
