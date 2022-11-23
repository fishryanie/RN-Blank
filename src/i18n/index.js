import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en';
import vi from './locales/vi';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
});

export default i18n;
