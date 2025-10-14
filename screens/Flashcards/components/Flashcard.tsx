import { ButtonIcon } from '@/components/buttons/ButtonIcon';
import { ThemedText } from '@/components/typography/ThemedText';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
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
  examples,
  cloze,
}: FlashcardProps) => {
  const progress = useSharedValue(0);
  const [isFront, setIsFront] = useState(true);
  const [exampleIndex, setExampleIndex] = useState(0);
  const swipeX = useSharedValue(0);

  const flip = () => {
    progress.value = withTiming(isFront ? 1 : 0, { duration: 300 });
    setIsFront(!isFront);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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

  const exampleSlideStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: swipeX.value }] } as const;
  });

  const speakFront = () => {
    Speech.stop();
    Speech.speak(frontText, { language: 'es-ES' });
  };

  const speakBack = () => {
    Speech.stop();
    const sentence = examples?.[exampleIndex]?.sentence ?? backText;
    Speech.speak(sentence, { language: 'es-ES' });
  };

  const sentence = examples?.[exampleIndex]?.sentence;

  const highlightedSentence = useMemo(() => {
    if (!sentence) return null;
    const escaped = frontText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escaped})`, 'ig');
    const parts = sentence.split(re);
    return parts.map((part, i) => {
      const match = part.toLowerCase() === frontText.toLowerCase();
      return (
        <ThemedText
          key={i}
          className={match ? 'font-montserratBold text-iconInfo dark:text-iconInfo-dark' : ''}
        >
          {match ? `«${part}»` : part}
        </ThemedText>
      );
    });
  }, [sentence, frontText]);

  const onSwipeEnd = (dx: number) => {
    if (!examples || examples.length <= 1) return;
    const THRESH = 40;
    if (dx <= -THRESH) {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    } else if (dx >= THRESH) {
      setExampleIndex((prev) => (prev - 1 + examples.length) % examples.length);
    }
  };

  const swipeGesture = Gesture.Pan()
    .onUpdate((e) => {
      swipeX.value = e.translationX * 0.3;
    })
    .onEnd((e) => {
      const dx = e.translationX;
      runOnJS(onSwipeEnd)(dx);
      swipeX.value = withTiming(0, { duration: 150 });
    });

  return (
    <Pressable onPress={flip} className="w-full">
      <View className="w-full h-[260px]">
        <Animated.View
          className="absolute inset-0 justify-center items-center px-6 py-6 rounded-3xl bg-surfacePrimary dark:bg-surfacePrimary-dark shadow-shadowM"
          style={[frontStyle]}
          pointerEvents={isFront ? 'auto' : 'none'}
        >
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {frontLanguageLabel}
          </ThemedText>
          <ThemedText weight="bold" className="mt-2 text-[32px]">
            {frontText}
          </ThemedText>
          <View className="mt-3">
            <ButtonIcon
              icon="volume-high"
              diameter={52}
              variant="neutral"
              stopPropagation
              onPress={speakFront}
            />
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
          pointerEvents={isFront ? 'none' : 'auto'}
        >
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {backLanguageLabel}
          </ThemedText>
          {examples?.length ? (
            <>
              <GestureDetector gesture={swipeGesture}>
                <Animated.View style={exampleSlideStyle}>
                  <ThemedText weight="bold" className="mt-2 text-[24px] text-center">
                    {cloze
                      ? (examples[exampleIndex]?.sentence ?? '').replace(
                          new RegExp(
                            `\\b${frontText.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`,
                            'i',
                          ),
                          '____',
                        )
                      : null}
                    {!cloze && highlightedSentence}
                  </ThemedText>
                  <ThemedText size="medium" className="mt-2 text-center opacity-80">
                    {examples[exampleIndex]?.translation ?? backText}
                  </ThemedText>
                </Animated.View>
              </GestureDetector>
              {examples.length > 1 ? (
                <View className="mt-3 items-center">
                  <View className="flex-row gap-2">
                    {examples.map((_, i) => (
                      <View
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === exampleIndex ? 'bg-surfaceActionSecondary' : 'bg-surfaceTertiary dark:bg-surfaceTertiary-dark'}`}
                      />
                    ))}
                  </View>
                  <ThemedText
                    size="medium"
                    weight="medium"
                    className="mt-2 text-iconInfo dark:text-iconInfo-dark"
                  >
                    Swipe to see next example
                  </ThemedText>
                </View>
              ) : null}
            </>
          ) : (
            <ThemedText weight="bold" className="mt-2 text-[32px]">
              {backText}
            </ThemedText>
          )}
          <View className="mt-3">
            <ButtonIcon
              icon="volume-high"
              diameter={52}
              variant="neutral"
              stopPropagation
              onPress={speakBack}
            />
          </View>
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
