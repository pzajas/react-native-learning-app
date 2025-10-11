import { ThemedText } from '@/components/typography/ThemedText';
import { View } from 'react-native';
import type { SummaryStat } from '../types/types';

export function SummaryCards({ stats }: { stats: SummaryStat[] }) {
  return (
    <View className="flex-row gap-3 mt-2">
      {stats.map((stat) => (
        <View
          key={stat.label}
          className="flex-1 justify-center items-center px-3 py-4 rounded-2xl bg-surfacePrimary dark:bg-surfacePrimary-dark"
        >
          <ThemedText weight="bold" className="text-[28px]">
            {stat.value}
          </ThemedText>
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {stat.label}
          </ThemedText>
        </View>
      ))}
    </View>
  );
}
