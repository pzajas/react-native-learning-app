import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { CategoryItem } from './components/CategoryItem';
import { categoryCards } from './data/cards';

export function CategoriesScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <View className="gap-3 mt-4">
        {categoryCards.map((c) => (
          <CategoryItem key={c.label} card={c} onPress={() => router.push('/builder' as any)} />
        ))}
      </View>

      <View className="mt-auto">
        <ButtonPrimary title="Start Learning" variant="secondaryBlue" className="rounded-full" />
      </View>
    </View>
  );
}
