import { ProgressBar } from '@/components/progress/ProgressBar';
import { ThemedText } from '@/components/typography/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import type { StreakInfo } from '../types/types';

export function StreakCard({ streak }: { streak: StreakInfo }) {
  return (
    <View className="px-4 py-5 mt-5 rounded-2xl bg-surfacePrimary dark:bg-surfacePrimary-dark">
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-2 items-center">
          <MaterialCommunityIcons name="fire" size={24} color="#ff6a00" />
          <ThemedText weight="bold">Current Streak</ThemedText>
        </View>
        <ThemedText
          weight="bold"
          className="text-textActionSecondary dark:text-textActionSecondary-dark"
        >
          {streak.days} Days
        </ThemedText>
      </View>
      <View className="mt-3">
        <ProgressBar progress={1} height={10} />
      </View>
      <ThemedText
        size="small"
        className="mt-3 text-center text-textSecondary dark:text-textSecondary-dark"
      >
        {streak.message.replace("'", '’')}
      </ThemedText>
    </View>
  );
}
