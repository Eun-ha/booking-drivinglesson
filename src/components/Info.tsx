"use client";

import CarIcon from "./icons/CarIcon";
import CryingIcon from "./icons/CryingIcon";

type SubmitType = {
  type: "main" | "list";
};

export default function Info(props: SubmitType) {
  return (
    <div className="my-10 text-center">
      <p className="pb-5">
        {props.type === "main"
          ? "운전 연수 예약 페이지입니다!"
          : "예약 된 연수가 없습니다."}
      </p>
      {props.type === "main" ? <CarIcon /> : <CryingIcon />}
    </div>
  );
}
