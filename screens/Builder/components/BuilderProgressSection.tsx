import { ProgressBar } from '@/components/progress/ProgressBar';
import { ThemedText } from '@/components/typography/ThemedText';
import { View } from 'react-native';
import type { BuilderProgress } from '../types/types';

export function BuilderProgressSection({ progress }: { progress: BuilderProgress }) {
  const ratio = progress.total > 0 ? progress.current / progress.total : 0;
  return (
    <View className="px-1">
      <View className="flex-row justify-between items-center mb-2">
        <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
          {progress.current}/{progress.total}
        </ThemedText>
      </View>
      <ProgressBar progress={ratio} height={6} />
    </View>
  );
}
