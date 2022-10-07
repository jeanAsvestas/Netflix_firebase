import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './en/en.json';
import german from './de/de.json';
import arabic from './arabic/ar.json';

export const resources = {
  en: {
    translation: english,
  },
  de: {
    translation: german,
  },
  ar: {
    translation: arabic,
  },
} as const;

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).use(LanguageDetector).init({
  // debug: true,
  fallbackLng: 'en',
  resources,
});

export default i18next;

// i18n
//   // detect user language
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     resources: {
//       en: {
//         translation: {
//           // here we will place our translations...
//         },
//       },
//     },
//   });
