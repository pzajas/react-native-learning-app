import AsyncStorage from '@react-native-async-storage/async-storage';
import type { InitOptions, Module, Services } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import pl from './locales/pl';

const LANGUAGE_DETECTOR: Module & {
  type: 'languageDetector';
  async: true;
  detect: (callback: (lng: string) => void) => void;
  init: (services: Services, detectorOptions: object, i18nextOptions: InitOptions) => void;
  cacheUserLanguage: (lng: string) => void;
} = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem('user-language');
      callback(savedLanguage || 'en');
    } catch (error) {
      console.error('Error reading language from AsyncStorage:', error);
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (lng: string) => {
    try {
      await AsyncStorage.setItem('user-language', lng);
    } catch (error) {
      console.error('Error saving language to AsyncStorage:', error);
    }
  },
};
// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
