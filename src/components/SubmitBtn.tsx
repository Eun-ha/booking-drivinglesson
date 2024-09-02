"use client";
import SubmitIcon from "./icons/SubmitIcon";

type SubmitType = {
  type: "save" | "fix";
};

export default function SubmitBtn(props: SubmitType) {
  console.log(props);
  return (
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="flex items-center p-3 common-hover-style"
      >
        <SubmitIcon />
        <span className="ml-1">
          {props.type === "save" ? "저장하기" : "수정하기"}
        </span>
      </button>
    </div>
  );
}
