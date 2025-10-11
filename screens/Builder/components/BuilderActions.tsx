import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { View } from 'react-native';

export function BuilderActions() {
  return (
    <View className="mt-auto">
      <ButtonPrimary title="Check" variant="secondaryBlue" className="rounded-full" />
    </View>
  );
}
