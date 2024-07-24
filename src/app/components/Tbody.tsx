"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { Info } from "../types/type";

export default function Tbody() {
  const [list, setList] = useState<Info[]>([]);

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
  };

  return (
    <tbody>
      {list.map((list, index) => (
        <tr key={index}>
          <td>{list.date}</td>
          <td>{list.time}</td>
          <td>{list.instructor}</td>
          <td>3시간</td>
        </tr>
      ))}
    </tbody>
  );
}
