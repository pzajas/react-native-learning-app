import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { View } from 'react-native';
import type { FlashcardButtonsProps } from '../types/types';

export function FlashcardButtons({ onUnknown, onKnown }: FlashcardButtonsProps) {
  return (
    <View className="flex-row gap-3 mt-6 w-full">
      <View className="flex-1">
        <ButtonPrimary
          title="Unknown"
          onPress={onUnknown}
          variant="secondary"
          className="h-12 rounded-full"
        />
      </View>
      <View className="flex-1">
        <ButtonPrimary
          title="Known"
          onPress={onKnown}
          variant="secondaryBlue"
          className="h-12 rounded-full"
        />
      </View>
    </View>
  );
}
