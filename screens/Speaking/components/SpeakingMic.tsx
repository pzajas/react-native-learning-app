import { ButtonIcon } from '@/components/buttons/ButtonIcon';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Platform, View } from 'react-native';

export function SpeakingMic() {
  const tabBarHeight = useBottomTabBarHeight();
  const bottomInset = Platform.OS === 'ios' ? tabBarHeight : 0;
  return (
    <View className="absolute right-0 left-0 px-4 pb-6" style={{ bottom: bottomInset }}>
      <View className="items-center">
        <ButtonIcon icon="microphone-outline" diameter={96} />
      </View>
    </View>
  );
}
