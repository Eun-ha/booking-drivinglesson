"use client";
import { useEffect, useState } from "react";
import fireStore from "../firebase/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
export default function List() {
  const [list, setList] = useState([{}]);

  useEffect(() => {
    loadDb();
  }, []);

  const loadDb = async () => {
    /*
    const query = await getDoc(
      doc(
        fireStore,
        "Lists",
        "QGK1Y2wgncbZmh31SmC9",
        "user",
        "Ri4IIq0LpkRExqXzZVhY"
      )
    );
    console.log(query.data());
    */
    const querySnapshot = await getDocs(collection(fireStore, "Lists"));

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      let text = doc.data();
      setList([...list, text]);
      console.log("inner");
      console.log(list);
    });
  };

  console.log("test");
  console.log(list);

  return (
    <div>
      <h1>리스트 페이지 입니다.</h1>
    </div>
  );
}
