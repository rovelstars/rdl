import { useTranslation, withTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gradient-to-t from-blush/70 to-blush/30 backdrop-blur-md p-1 mx-auto shadow-lg flex items-center rounded-b-xl">
      <div className="shrink-0">
        <img className="h-12 w-12 rounded-2xl" src="/logo.png" alt="RDL Logo" />
      </div>
      <div className="bg-center mx-auto">
        <div className="text-2xl md:text-3xl font-display font-medium justify-center text-white-text dark:text-white-text text-center">
          {t("Rovel Discord List")}
        </div>
      </div>
    </div>
  );
}
