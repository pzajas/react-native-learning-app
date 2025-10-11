import { ThemedText } from '@/components/typography/ThemedText';
import { AppHeaderProps } from '@/types/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AppHeader = ({
  title,
  showBackButton,
  onPressBack,
  onPressRight,
  onPressRightSecondary,
}: AppHeaderProps) => {
  return (
    <SafeAreaView edges={['top']} className="bg-surfacePrimary dark:bg-surfacePrimary-dark">
      <View className="h-[56px] flex-row items-center">
        <View className="w-[88px] h-[44px] justify-center">
          {showBackButton ? (
            <Pressable
              onPress={onPressBack}
              className="w-[44px] h-[44px] items-center justify-center"
            >
              <MaterialCommunityIcons name="chevron-left" size={26} color="#767676" />
            </Pressable>
          ) : null}
        </View>
        <ThemedText weight="bold" className="flex-1 text-[20px] text-center px-2" numberOfLines={1}>
          {title}
        </ThemedText>
        <View className="w-[88px] flex-row items-center justify-end">
          {onPressRightSecondary ? (
            <Pressable
              onPress={onPressRightSecondary}
              className="w-[44px] h-[44px] items-center justify-center"
            >
              <MaterialCommunityIcons name="account-plus-outline" size={22} color="#767676" />
            </Pressable>
          ) : null}
          {onPressRight ? (
            <Pressable
              onPress={onPressRight}
              className="w-[44px] h-[44px] items-center justify-center"
            >
              <MaterialCommunityIcons name="cog-outline" size={22} color="#767676" />
            </Pressable>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
