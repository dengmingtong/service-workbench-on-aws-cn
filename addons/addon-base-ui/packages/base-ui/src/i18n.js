import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "description": "Test description"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;