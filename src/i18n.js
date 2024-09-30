import enTranslation from './locales/en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vnTranslation from './locales/vn.json';

const resources = {
    en: {
        translation: enTranslation
    },
    vn: {
        translation: vnTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;