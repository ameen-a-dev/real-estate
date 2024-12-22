import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en/translation.json";
import ur from "./locals/ur/translation.json";
import ar from "./locals/ar/translation.json";

i18n.use(initReactI18next).init({
  fallbackLng: navigator.language,
  resources: {
    en: {
      translation: en,
    },
    ur: {
      translation: ur,
    },
    ar: {
      translation: ar,
    },
  },
});

export default i18n;
