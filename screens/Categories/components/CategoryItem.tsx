import { ThemedText } from '@/components/typography/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import type { CategoryCard } from '../types/types';

interface Props {
  card: CategoryCard;
  onPress: () => void;
}

export function CategoryItem({ card, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row justify-between items-center p-4 rounded-2xl bg-surfacePrimary dark:bg-surfacePrimary-dark"
    >
      <View className="flex-row gap-4 items-center">
        <View className="p-3 rounded-xl" style={{ backgroundColor: card.bg }}>
          <MaterialCommunityIcons name={card.icon as any} size={22} color={card.iconColor as any} />
        </View>
        <View>
          <ThemedText weight="bold">{card.label}</ThemedText>
          <ThemedText size="small" className="text-textSecondary dark:text-textSecondary-dark">
            {card.count}
          </ThemedText>
        </View>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#767676" />
    </Pressable>
  );
}
