"use client";

import { useTranslation } from "react-i18next";
import CarIcon from "./icons/CarIcon";
import CryingIcon from "./icons/CryingIcon";
import Transition from "./Transition";

export type Props = {
  type: "main" | "list";
};

export default function Info(props: Props) {
  const { t } = useTranslation();
  const { type } = props;

  return (
    <div className="my-10 text-center">
      <p className="pb-3">
        {type === "main" ? (
          <Transition type="base">{t("home-title")}</Transition>
        ) : (
          `${t("list-no-data")}`
        )}
      </p>

      {type === "main" ? (
        <Transition type="bounce">
          <CarIcon />
        </Transition>
      ) : (
        <CryingIcon />
      )}
    </div>
  );
}
