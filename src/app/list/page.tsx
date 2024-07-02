"use client";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Info } from "../types/type";
export default function List() {
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
    <div>
      <h1>리스트 페이지 입니다.</h1>
      {list.map((list) => (
        <p key={list.index}>{list.instructor}</p>
      ))}
    </div>
  );
}
