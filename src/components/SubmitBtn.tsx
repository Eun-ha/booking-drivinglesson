"use client";

import { useTranslation } from "react-i18next";

import SubmitIcon from "./icons/SubmitIcon";

type Props = {
  type: "save" | "fix";
  disabled?: boolean;
};

export default function SubmitBtn(props: Props) {
  const { t } = useTranslation();
  const { type, disabled = false } = props;

  return (
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        disabled={disabled}
        className="flex items-center p-3 rounded common-hover-style disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SubmitIcon />
        <span className="ml-1">
          {type === "save" ? `${t("common-text1")}` : `${t("common-text2")}`}
        </span>
      </button>
    </div>
  );
}
