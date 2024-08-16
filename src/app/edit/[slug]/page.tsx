import React from "react";
import { Metadata } from "next";
import EditForm from "@/components/EditForm";

type Props = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Edit",
  description: "예약 수정 페이지 입니다.",
};

export default function Edit({ params }: Props) {
  return (
    <div>
      <h1>예약 수정 페이지 입니다.</h1>
      <EditForm params={params} />
    </div>
  );
}
