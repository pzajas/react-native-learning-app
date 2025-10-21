import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { CategoryItem } from './components/CategoryItem';
import { categoryCards } from './data/cards';

export function CategoriesScreen() {
  const router = useRouter();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const handleToggle = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };
  const handlePressSub = (catKey: string, subKey: string) => {
    router.push({
      pathname: '/(content)/builder',
      params: { category: catKey, sub: subKey },
    } as any);
  };
  return (
    <ScrollView
      className="flex-1 bg-surfaceSecondary dark:bg-surfaceSecondary-dark"
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 100 }}
    >
      <View className="gap-3 mt-2">
        {categoryCards.map((c) => (
          <CategoryItem
            key={c.key}
            card={c}
            expanded={expandedKey === c.key}
            onToggle={() => handleToggle(c.key)}
            onPressSubcategory={handlePressSub}
          />
        ))}
      </View>
    </ScrollView>
  );
}
