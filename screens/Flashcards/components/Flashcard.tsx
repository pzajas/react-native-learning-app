import { ButtonIcon } from '@/components/buttons/ButtonIcon';
import { ThemedText } from '@/components/typography/ThemedText';
import { Pressable, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import type { FlashcardProps } from '../types/types';

export const Flashcard = ({
  frontLanguageLabel,
  frontText,
  backLanguageLabel,
  backText,
}: FlashcardProps) => {
  const progress = useSharedValue(0);

  const flip = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 300 });
  };

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(progress.value, [0, 1], [0, 180]);
    const opacity = interpolate(progress.value, [0, 0.5, 1], [1, 0, 0]);
    return { transform: [{ perspective: 1000 }, { rotateY: `${rotateY}deg` }], opacity } as const;
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(progress.value, [0, 1], [180, 360]);
    const opacity = interpolate(progress.value, [0, 0.5, 1], [0, 0, 1]);
    return { transform: [{ perspective: 1000 }, { rotateY: `${rotateY}deg` }], opacity } as const;
  });

  return (
    <Pressable onPress={flip} className="w-full">
      <View className="w-full h-[260px]">
        <Animated.View
          className="absolute inset-0 justify-center items-center px-6 py-6 rounded-3xl bg-surfacePrimary dark:bg-surfacePrimary-dark shadow-shadowM"
          style={[frontStyle]}
        >
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {frontLanguageLabel}
          </ThemedText>
          <ThemedText weight="bold" className="mt-2 text-[32px]">
            {frontText}
          </ThemedText>
          <View className="mt-3">
            <ButtonIcon icon="microphone-outline" diameter={52} variant="neutral" />
          </View>
          <ThemedText
            size="medium"
            weight="medium"
            className="mt-3 text-iconInfo dark:text-iconInfo-dark"
          >
            Tap to see translation
          </ThemedText>
        </Animated.View>

        <Animated.View
          className="absolute inset-0 justify-center items-center px-6 py-6 rounded-3xl bg-surfacePrimary dark:bg-surfacePrimary-dark shadow-shadowM"
          style={[backStyle]}
        >
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {backLanguageLabel}
          </ThemedText>
          <ThemedText weight="bold" className="mt-2 text-[32px]">
            {backText}
          </ThemedText>
          <ThemedText
            size="medium"
            weight="medium"
            className="mt-3 text-iconInfo dark:text-iconInfo-dark"
          >
            Tap to see original
          </ThemedText>
        </Animated.View>
      </View>
    </Pressable>
  );
};
