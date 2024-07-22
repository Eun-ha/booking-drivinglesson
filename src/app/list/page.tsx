"use client";
import Button from "../components/Button";
import Counter from "../components/Counter";
import Table from "../components/Table";
import { useAppSelector } from "../store/store";
import { decrease2, increase2 } from "../store/ageSlice";
import Link from "next/link";
export default function List() {
  return (
    <div>
      <h1>리스트 페이지 입니다.</h1>
      <Button />
      <Link href="/new">새 예약 생성하기</Link>
      <Table />
    </div>
  );
}
