"use client";
import Link from "next/link";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useAppSelector } from "@/app/store/store";
import { decrease, increase } from "./store/counterSlice";

export default function Home() {
  return (
    <div>
      <h1>운전연수 예약 페이지 메인입니다.</h1>
      <div>
        <Button />
        <Link href="/list">Booking List</Link>
      </div>
    </div>
  );
}
