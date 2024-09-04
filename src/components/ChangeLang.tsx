import i18n from "@/locales/i18n";
import LanguageIcon from "./icons/LanguageIcon";

export default function ChangeLang() {
  const onChangeLang = () => {
    i18n.language === "ko"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko");
  };
  return (
    <div className="text-right p-5">
      <button onClick={() => onChangeLang()}>
        <LanguageIcon />
      </button>
    </div>
  );
}
