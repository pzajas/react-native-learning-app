import { ThemedText } from '@/components/typography/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import type { ProgressPoint } from '../types/types';

export function ProgressChart({ points }: { points: ProgressPoint[] }) {
  const { t } = useTranslation();
  return (
    <View className="px-4 py-5 mt-5 rounded-2xl bg-surfacePrimary dark:bg-surfacePrimary-dark">
      <View className="flex-row justify-between items-center">
        <ThemedText weight="bold">{t('stats.learningProgress')}</ThemedText>
        <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
          {t('stats.last7Days')}
        </ThemedText>
      </View>
      <View className="mt-10 flex-row items-end h-[160px] gap-2">
        {points.map((point) => (
          <View key={point.labelKey} className="flex-1 gap-1 justify-end items-center">
            <View
              className={
                point.highlight
                  ? 'w-full rounded-t-lg bg-surfaceActionSecondary'
                  : 'w-full rounded-t-lg bg-surfaceAccentLight'
              }
              style={{ height: `${point.value * 100}%` }}
            />
            <ThemedText
              size="small"
              className={point.highlight ? 'text-textActionSecondary' : 'text-textSecondary'}
            >
              {t(`weekdays.${point.labelKey}`)}
            </ThemedText>
          </View>
        ))}
      </View>
      <View className="flex-row justify-between items-center pt-2">
        <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
          {t('stats.newWordsLearned')}
        </ThemedText>
        <View className="flex-row gap-1 items-center">
          <MaterialCommunityIcons name="trending-up" size={16} color="#22c55e" />
          <ThemedText size="small" className="text-[#22c55e]">
            +15%
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
