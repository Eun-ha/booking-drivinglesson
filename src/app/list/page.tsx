import Table from "@/components/Table";
import { useAppSelector } from "@/store/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List",
  description: "예약한 내역 페이지 입니다.",
};

export default function List() {
  return <Table />;
}
