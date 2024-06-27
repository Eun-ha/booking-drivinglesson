"use client";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import fireStore from "./firebase/firestore";

export default function Home() {
  const onClick = async () => {
    const query = await getDoc(doc(fireStore, "사용자", "2345"));
    console.log(query.data());
  };
  return (
    <div>
      <h1>운전연수 예약 페이지 메인입니다.</h1>
      <div>
        <Link href="/new" onClick={onClick}>
          Login{" "}
        </Link>
        <Link href="/list">Booking List</Link>
      </div>
    </div>
  );
}
