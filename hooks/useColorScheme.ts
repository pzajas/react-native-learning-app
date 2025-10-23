import ThemeContext from '@/src/ThemeContext';
import { useContext } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export function useColorScheme() {
  const { scheme } = useContext(ThemeContext);
  const native = useRNColorScheme();
  return scheme ?? native;
}
