import { useTranslation, withTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gradient-to-t dark:from-blush/50 from-blush/70 to-branding/70 sticky top-0 z-50 backdrop-blur-xl py-2 pl-2 mx-auto shadow-lg flex items-center rounded-b-xl">
      <div className="shrink-0">
        <img className="h-12 w-12 rounded-2xl" src="/logo.png" alt="RDL Logo" />
      </div>
    </div>
  );
}
