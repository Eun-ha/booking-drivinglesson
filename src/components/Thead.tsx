"use client";

import { useTranslation } from "react-i18next";

export default function Thead() {
  const { t } = useTranslation();

  const theadtext: string[] = [
    `${t("form-title1")}`,
    `${t("form-title2")}`,
    `${t("form-title3")}`,
    `${t("form-title4")}`,
    `${t("form-title5")}`,
    `${t("form-title6")}`,
  ];

  return (
    <thead className="bg-indigo-500/15 border-b border-indigo-500/15">
      <tr>
        {theadtext.map((text, index) => (
          <th key={index} scope="col" className="py-3">
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
}
