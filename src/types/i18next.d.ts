import en from 'localization/locales/en.json';
import ru from 'localization/locales/ru.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      ru: typeof ru;
    };
  }
}
