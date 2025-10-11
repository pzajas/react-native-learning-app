import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { BuilderActions } from './components/BuilderActions';
import { BuilderProgressSection } from './components/BuilderProgressSection';
import { BuilderWordAreas } from './components/BuilderWordAreas';

export function BuilderPracticeScreen() {
  const initialWords = useMemo(() => ['tienda', 'voy', 'a', 'la', 'yo', 'ir'], []);
  const [poolWords, setPoolWords] = useState<string[]>(initialWords);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const addWord = (w: string) => {
    setPoolWords((prev) => prev.filter((x) => x !== w));
    setSelectedWords((prev) => [...prev, w]);
  };
  const removeWord = (w: string) => {
    setSelectedWords((prev) => prev.filter((x) => x !== w));
    setPoolWords((prev) => [...prev, w]);
  };

  return (
    <View className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <BuilderProgressSection progress={{ current: 2, total: 10 }} />

      <BuilderWordAreas
        selectedWords={selectedWords}
        poolWords={poolWords}
        addWord={addWord}
        removeWord={removeWord}
      />

      <BuilderActions />
    </View>
  );
}
