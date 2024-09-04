"use client";
import { useTranslation } from "react-i18next";
import SubmitIcon from "./icons/SubmitIcon";

type SubmitType = {
  type: "save" | "fix";
};

export default function SubmitBtn(props: SubmitType) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="flex items-center p-3 common-hover-style"
      >
        <SubmitIcon />
        <span className="ml-1">
          {props.type === "save"
            ? `${t("common-text1")}`
            : `${t("common-text2")}`}
        </span>
      </button>
    </div>
  );
}
