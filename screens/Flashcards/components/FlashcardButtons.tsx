import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import type { FlashcardButtonsProps } from '../types/types';

export function FlashcardButtons({ onUnknown, onKnown }: FlashcardButtonsProps) {
  const { t } = useTranslation();
  return (
    <View className="flex-row gap-3 mt-6 w-full">
      <View className="flex-1">
        <ButtonPrimary
          title={t('flashcards.unknown')}
          onPress={onUnknown}
          variant="secondary"
          className="h-12 rounded-full"
        />
      </View>
      <View className="flex-1">
        <ButtonPrimary
          title={t('flashcards.known')}
          onPress={onKnown}
          variant="secondaryBlue"
          className="h-12 rounded-full"
        />
      </View>
    </View>
  );
}
