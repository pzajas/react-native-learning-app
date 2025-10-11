import { ThemedText } from '@/components/typography/ThemedText';
import { Pressable, View } from 'react-native';
import type { BuilderWordMoveHandlers } from '../types/types';

interface Props extends BuilderWordMoveHandlers {
  selectedWords: string[];
  poolWords: string[];
}

export function BuilderWordAreas({ selectedWords, poolWords, addWord, removeWord }: Props) {
  return (
    <>
      <View className="items-center mt-6">
        <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
          Translate the sentence
        </ThemedText>
        <ThemedText weight="bold" className="mt-2 text-[24px]">
          I am going to the store
        </ThemedText>
      </View>

      <View className="mt-6 p-3 rounded-2xl border-2 border-dashed border-borderPrimaryDefault min-h-[100px] bg-white/20 dark:bg-white/5">
        <View className="flex-row flex-wrap gap-2">
          {selectedWords.map((word) => (
            <Pressable
              key={`sel-${word}`}
              onPress={() => removeWord(word)}
              className="px-4 py-2 rounded-full border bg-surfacePrimary dark:bg-surfacePrimary-dark border-borderPrimaryDefault"
            >
              <ThemedText size="small" weight="medium">
                {word}
              </ThemedText>
            </Pressable>
          ))}
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
