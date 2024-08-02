"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { Info } from "../types/type";
import { useAppDispatch, useAppSelector } from "../store/store";
import { remove } from "../store/bookingSlice";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";

export default function Tbody() {
  //const [list, setList] = useState<Info[]>([]);

  /*

  useEffect(() => {
    loadDb();
  }, []);

  const loadDb = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "Lists"));
    const arr: Info[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      arr.push(doc.data());
    });

    setList(arr);
  };*/

  const booking = useAppSelector((state) => state.booking.todos);

  return (
    <tbody>
      {booking.map((list: Info, index) => (
        <tr key={index}>
          <td>{list.date}</td>
          <td>{list.time}</td>
          <td>{list.instructor}</td>
          <td>3시간</td>
          <td>
            <DeleteBtn id={list.id} />
          </td>
          <td>
            <Link href={`/edit/${list.id}`}>수정하기</Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
