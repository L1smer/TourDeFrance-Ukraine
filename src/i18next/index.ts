import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en.json';
import translationFR from './fr.json';
import translationUA from './ua.json';
import translationRU from './ru.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      ua: { translation: translationUA },
			ru: { translation: translationRU }
    },
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;