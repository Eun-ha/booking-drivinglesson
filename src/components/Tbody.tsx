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

export default function Tbody() {
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

  const booking = useAppSelector((state) => state.booking.todos);

  const { t } = useTranslation();

  return (
    <tbody>
      {booking.length === 0 ? (
        <tr>
          <td colSpan={6}>
            <Info type="list" />
          </td>
        </tr>
      ) : (
        booking.map((list: InfoType, index) => (
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
              <Link
                href={`/edit/${list.id}`}
                className="inline-flex p-3 common-hover-style"
              >
                <EditIcon />
              </Link>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
