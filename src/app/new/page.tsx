import React from "react";
import { Metadata } from "next";
import { Form } from "@/components/Form";

export const metadata: Metadata = {
  title: "New",
  description: "새 예약 페이지 입니다.",
};

export default function NewCreate() {
  return (
    <div>
      <h1>새 예약 페이지 입니다.</h1>
      <Form />
    </div>
  );
}
