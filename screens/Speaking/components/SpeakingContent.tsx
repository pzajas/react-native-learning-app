import { ThemedText } from '@/components/typography/ThemedText';
import { View } from 'react-native';

export function SpeakingContent() {
  return (
    <View className="flex-1 justify-center items-center">
      <ThemedText size="medium" className="text-textSecondary dark:text-textSecondary-dark">
        How do you say...
      </ThemedText>
      <ThemedText weight="bold" className="mt-2 text-[40px]">
        Hola
      </ThemedText>
      <ThemedText size="medium" className="mt-2 text-textSecondary dark:text-textSecondary-dark">
        Tap the microphone and say the word
      </ThemedText>
    </View>
  );
}
