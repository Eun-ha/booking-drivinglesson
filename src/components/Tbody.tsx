"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { Info } from "../app/types/type";
import { useAppSelector } from "../store/store";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import EditIcon from "./icons/EditIcon";

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
        <tr
          key={index}
          className="border-t border-indigo-500/15 common-hover-style"
        >
          <td>{list.date}</td>
          <td>{list.time}</td>
          <td>{list.instructor}</td>
          <td>3시간</td>
          <td>
            <DeleteBtn id={list.id} />
          </td>
          <td>
            <Link
              href={`/edit/${list.id}`}
              className="inline-flex p-3 common-hover-style"
            >
              <EditIcon />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
