import type { ProgressBarProps } from '@/types/types';
import { View } from 'react-native';
export function ProgressBar({
  progress,
  height = 6,
  trackClassName,
  fillClassName,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, progress));

  return (
    <View
      className={trackClassName ?? 'rounded-full bg-surfaceTertiary dark:bg-surfaceTertiary-dark'}
      style={{ height }}
    >
      <View
        className={fillClassName ?? 'rounded-full bg-surfaceActionSecondary'}
        style={{ height, width: `${clamped * 100}%` }}
      />
    </View>
  );
}
