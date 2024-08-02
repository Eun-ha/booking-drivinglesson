import Button from "../components/LoginoutBtn";
import Table from "../components/Table";
import Link from "next/link";
import { useAppSelector } from "../store/store";

export default function List() {
  return (
    <div>
      <h1>리스트 페이지 입니다.</h1>
      <Table />
    </div>
  );
}
