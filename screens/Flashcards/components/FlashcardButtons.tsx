import { ThemedText } from '@/components/typography/ThemedText';
import { Pressable, View } from 'react-native';
import type { FlashcardButtonsProps } from '../types/types';

export function FlashcardButtons({ onUnknown, onKnown }: FlashcardButtonsProps) {
  return (
    <View className="flex-row gap-3 mt-6 w-full">
      <Pressable
        onPress={onUnknown}
        className="flex-1 justify-center items-center h-12 rounded-full bg-surfaceTertiary dark:bg-surfaceTertiary-dark"
      >
        <ThemedText
          size="medium"
          weight="medium"
          className="text-textSecondary dark:text-textSecondary-dark"
        >
          Unknown
        </ThemedText>
      </Pressable>
      <Pressable
        onPress={onKnown}
        className="flex-1 justify-center items-center h-12 rounded-full bg-surfaceActionSecondary"
      >
        <ThemedText size="medium" weight="medium" className="text-white">
          Known
        </ThemedText>
      </Pressable>
    </View>
  );
}
