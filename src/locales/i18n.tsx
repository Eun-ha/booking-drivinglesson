"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "@/locales/ko.json";
import en from "@/locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "ko",
  debug: true,
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: true,
  returnNull: true,
});

export default i18n;
