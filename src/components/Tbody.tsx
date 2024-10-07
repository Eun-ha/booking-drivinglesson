"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { useAppSelector } from "../store/store";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import EditIcon from "./icons/EditIcon";

import Info from "@/components/Info";
import { InfoType } from "@/app/types/type";
import { useTranslation } from "react-i18next";
import Portal from "./portal/Portal";

type Props = {
  bookingdata: InfoType[];
};

export default function Tbody(bookingdata: Props) {
  //console.log(booking);
  //const booking = useAppSelector((state) => state.booking.todos);

  //const [list, setList] = useState<InfoType[]>([]);

  /*

  useEffect(() => {
    loadDb();
  }, []);

  const loadDb = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "Lists"));
    const arr: InfoType[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      arr.push(doc.data());
    });

    setList(arr);
  };*/

  //const booking = useAppSelector((state) => state.booking.todos);

  //console.log("=========tbody");
  //console.log(booking);

  const { t } = useTranslation();

  return (
    <tbody className="text-sm">
      {bookingdata.bookingdata.length === 0 ? (
        <tr>
          <td colSpan={6}>
            <Info type="list" />
          </td>
        </tr>
      ) : (
        bookingdata.bookingdata.map((list, index) => (
          <tr
            key={index}
            className="border-t border-indigo-500/15 common-hover-style"
          >
            <td>{list.date}</td>
            <td>{list.time}</td>
            <td>{list.instructor}</td>
            <td>3{t("form-title7")}</td>
            <td>
              <DeleteBtn id={list.id} />
            </td>
            <td>
              <Portal item={list} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
