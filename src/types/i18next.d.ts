import { resources, defaultNS } from 'localization/i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      defaultNS: typeof defaultNS;
      resources: typeof resources['en'];
    };
  }
}
