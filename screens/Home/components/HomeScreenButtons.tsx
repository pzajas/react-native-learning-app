import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export function HomeScreenButtons() {
  const router = useRouter();
  return (
    <View className="gap-4 mt-8">
      <ButtonPrimary
        title="Flashcards"
        variant="secondaryBlue"
        onPress={() => router.push('/(tabs)/flashcards')}
      />
      <ButtonPrimary
        title="Sentence Builder"
        variant="secondaryBlueLight"
        onPress={() => router.push('/(tabs)/builder')}
      />
      <ButtonPrimary
        title="Speaking Mode"
        variant="secondaryBlueLight"
        onPress={() => router.push('/(tabs)/speaking')}
      />
    </View>
  );
}
