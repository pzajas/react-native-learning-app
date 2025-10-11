import { ScrollView } from 'react-native';
import { ProgressChart } from './components/ProgressChart';
import { StreakCard } from './components/StreakCard';
import { SummaryCards } from './components/SummaryCards';
import { progress7d, streakInfo, summaryStats } from './data/stats';

export function StatsScreen() {
  return (
    <ScrollView className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <SummaryCards stats={summaryStats} />
      <StreakCard streak={streakInfo} />
      <ProgressChart points={progress7d} />
    </ScrollView>
  );
}
