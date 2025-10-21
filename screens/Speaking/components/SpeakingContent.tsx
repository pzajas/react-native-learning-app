import { ThemedText } from '@/components/typography/ThemedText';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export function SpeakingContent() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 justify-center items-center">
      <ThemedText size="medium" className="text-textSecondary dark:text-textSecondary-dark">
        {t('speaking.howDoYouSay')}
      </ThemedText>
      <ThemedText weight="bold" className="mt-2 text-[40px]">
        Hola
      </ThemedText>
      <ThemedText size="medium" className="mt-2 text-textSecondary dark:text-textSecondary-dark">
        {t('speaking.tapMic')}
      </ThemedText>
    </View>
  );
}
