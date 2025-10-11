import { View } from 'react-native';
import { SpeakingContent } from './components/SpeakingContent';
import { SpeakingMic } from './components/SpeakingMic';
import { SpeakingProgressSection } from './components/SpeakingProgressSection';

export function SpeakingScreen() {
  return (
    <View className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <SpeakingProgressSection progress={{ current: 2, total: 10 }} />
      <SpeakingContent />
      <SpeakingMic />
    </View>
  );
}
