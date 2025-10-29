import { ThemedText } from '@/components/typography/ThemedText';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import type { BuilderWordMoveHandlers } from '../types/types';

interface Props extends BuilderWordMoveHandlers {
  selectedWords: string[];
  poolWords: string[];
  expectedWords: string[];
  prompt: string;
}

export function BuilderWordAreas({
  selectedWords,
  poolWords,
  expectedWords,
  addWord,
  removeWord,
  prompt,
}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <View className="items-center mt-6">
        <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
          {t('builder.translate')}
        </ThemedText>
        <ThemedText weight="bold" className="mt-2 text-[24px] text-center">
          {prompt}
        </ThemedText>
      </View>

      <View className="mt-6 p-3 rounded-2xl border-2 border-dashed border-borderPrimaryDefault min-h-[100px] bg-white/20 dark:bg-white/5">
        <View className="flex-row flex-wrap gap-2">
          {selectedWords.map((word, index) => {
            const isWrongPlace = expectedWords[index] !== word;
            return (
              <Pressable
                key={`sel-${word}-${index}`}
                onPress={() => removeWord(word)}
                className={`px-4 py-2 rounded-full border ${
                  isWrongPlace
                    ? 'bg-[#fee2e2] border-[#ef4444]'
                    : 'bg-surfacePrimary dark:bg-surfacePrimary-dark border-borderPrimaryDefault'
                }`}
              >
                <ThemedText size="small" weight="medium">
                  {word}
                </ThemedText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View className="flex-row flex-wrap gap-3 justify-center mt-6">
        {poolWords.map((word) => (
          <Pressable
            key={`pool-${word}`}
            onPress={() => addWord(word)}
            className="px-5 py-2.5 rounded-full bg-surfacePrimary dark:bg-surfacePrimary-dark border border-borderPrimaryDefault shadow-xs"
          >
            <ThemedText
              size="small"
              weight="bold"
              className="text-textPrimary dark:text-textPrimary-dark"
            >
              {word}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    </>
  );
}
