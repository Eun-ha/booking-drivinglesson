import Table from "@/components/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List",
  description: "예약한 내역 페이지 입니다.",
};

export default function List() {
  return (
    <div>
      <h1>리스트 페이지 입니다.</h1>
      <Table />
    </div>
  );
}
