import { ThemedText } from '@/components/typography/ThemedText';
import { View } from 'react-native';

export function HomeScreenHeading() {
  return (
    <View className="items-center">
      <ThemedText className="text-[40px] pb-4">👋</ThemedText>
      <ThemedText weight="bold" className="text-fontSize5xl">
        Welcome to Your
      </ThemedText>
      <ThemedText weight="bold" className="text-fontSize5xl">
        Spanish Journey!
      </ThemedText>
      <ThemedText
        size="small"
        className="mt-3 text-center text-textSecondary dark:text-textSecondary-dark"
      >
        Choose your learning mode and start mastering
      </ThemedText>
      <ThemedText
        size="small"
        className="text-center text-textSecondary dark:text-textSecondary-dark"
      >
        Spanish today.
      </ThemedText>
    </View>
  );
}
