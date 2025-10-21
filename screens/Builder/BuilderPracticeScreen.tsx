import { ThemedText } from '@/components/typography/ThemedText';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { BuilderProgressSection } from './components/BuilderProgressSection';
import { BuilderWordAreas } from './components/BuilderWordAreas';
import { getSentences } from './data/sentences';

interface Props {
  categoryKey?: string;
  subKey?: string;
}

export function BuilderPracticeScreen({ categoryKey, subKey }: Props) {
  const sentences = useMemo(
    () => (categoryKey && subKey ? getSentences(categoryKey, subKey) : []),
    [categoryKey, subKey],
  );
  const [idx, setIdx] = useState(0);
  const current = sentences[idx];
  const expectedWords = useMemo(() => (current ? current.targetEs.split(' ') : []), [current]);
  const [poolWords, setPoolWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addWord = (w: string) => {
    setPoolWords((prev) => prev.filter((x) => x !== w));
    setSelectedWords((prev) => [...prev, w]);
  };
  const removeWord = (w: string) => {
    setSelectedWords((prev) => prev.filter((x) => x !== w));
    setPoolWords((prev) => [...prev, w]);
  };

  // Reset tokens when sentence changes
  useEffect(() => {
    if (!current) return;
    const words = current.targetEs.split(' ');
    setPoolWords([...words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setError(null);
  }, [current]);

  // Auto-advance when full sequence is correct
  useEffect(() => {
    if (!current) return;
    const isComplete =
      selectedWords.length === expectedWords.length &&
      expectedWords.every((w, i) => selectedWords[i] === w);
    if (isComplete && expectedWords.length > 0) {
      const nextIdx = idx < sentences.length - 1 ? idx + 1 : 0;
      setTimeout(() => setIdx(nextIdx), 300);
    }
  }, [selectedWords, expectedWords, current, idx, sentences]);

  return (
    <View className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <BuilderProgressSection progress={{ current: 2, total: 10 }} />

      <BuilderWordAreas
        selectedWords={selectedWords}
        poolWords={poolWords}
        expectedWords={expectedWords}
        addWord={addWord}
        removeWord={removeWord}
      />
      {current && (
        <View className="items-center mt-4">
          <View className="items-center">
            <>{/* prompt text under the areas */}</>
          </View>
          {error && (
            <View className="mt-2">
              <ThemedText size="small" className="text-[#ef4444]">
                {error}
              </ThemedText>
            </View>
          )}
        </View>
      )}
      {/* No explicit Check button */}
    </View>
  );
}
