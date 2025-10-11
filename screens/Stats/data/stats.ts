import type { ProgressPoint, StreakInfo, SummaryStat } from '../types/types';

export const summaryStats: SummaryStat[] = [
  { value: 120, label: 'Learned' },
  { value: 30, label: 'Study Days' },
  { value: 7, label: 'Day Streak' },
];

export const streakInfo: StreakInfo = {
  days: 7,
  message: "You're on a roll! Keep it up to reach your next milestone.",
};

export const progress7d: ProgressPoint[] = [
  { label: 'Mon', value: 0.6 },
  { label: 'Tue', value: 0.8 },
  { label: 'Wed', value: 0.5 },
  { label: 'Thu', value: 0.9 },
  { label: 'Fri', value: 0.7 },
  { label: 'Sat', value: 0.4 },
  { label: 'Sun', value: 1.0, highlight: true },
];
