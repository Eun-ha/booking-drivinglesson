"use client";

import { useTranslation } from "react-i18next";
import CarIcon from "./icons/CarIcon";
import CryingIcon from "./icons/CryingIcon";

export type Props = {
  type: "main" | "list";
};

export default function Info(props: Props) {
  const { t } = useTranslation();

  return (
    <div className="my-10 text-center">
      <p className="pb-5">
        {props.type === "main" ? `${t("home-title")}` : `${t("list-no-data")}`}
      </p>
      {props.type === "main" ? <CarIcon /> : <CryingIcon />}
    </div>
  );
}
