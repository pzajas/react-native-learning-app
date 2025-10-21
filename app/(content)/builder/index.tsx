import { BuilderPracticeScreen } from '@/screens/Builder/BuilderPracticeScreen';
import { useLocalSearchParams } from 'expo-router';

export default function BuilderPracticeRoute() {
  const { category, sub } = useLocalSearchParams<{ category?: string; sub?: string }>();
  return <BuilderPracticeScreen categoryKey={category} subKey={sub} />;
}
