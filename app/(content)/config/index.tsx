import { ButtonPrimary } from '@/components/buttons/ButtonPrimary';
import { ThemedText } from '@/components/typography/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ConfigScreen() {
  const [offline, setOffline] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 px-4 py-5 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <View className="gap-3">
        <View className="p-4 bg-surfacePrimary dark:bg-surfacePrimary-dark flex-row items-center justify-between">
          <View>
            <ThemedText weight="bold">Interface Language</ThemedText>
            <ThemedText
              size="small"
              className="mt-1 text-textSecondary dark:text-textSecondary-dark"
            >
              English
            </ThemedText>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#767676" />
        </View>

        <View className="p-4 bg-surfacePrimary dark:bg-surfacePrimary-dark flex-row items-center justify-between">
          <ThemedText weight="bold">Reset Data</ThemedText>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#767676" />
        </View>

        <View className="p-4 bg-surfacePrimary dark:bg-surfacePrimary-dark flex-row items-center justify-between">
          <ThemedText weight="bold">Offline Mode</ThemedText>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: offline }}
            onPress={() => setOffline((v) => !v)}
            className={
              offline
                ? 'w-14 h-8 rounded-full bg-surfaceActionSecondary flex-row items-center px-1'
                : 'w-14 h-8 rounded-full bg-surfaceTertiary dark:bg-surfaceTertiary-dark flex-row items-center px-1'
            }
          >
            <View
              className={
                offline
                  ? 'ml-auto w-6 h-6 rounded-full items-center justify-center bg-white'
                  : 'w-6 h-6 rounded-full items-center justify-center bg-white'
              }
            >
              {offline ? (
                <MaterialCommunityIcons name="check" size={16} color="#0d59f2" />
              ) : (
                <MaterialCommunityIcons name="close" size={16} color="#767676" />
              )}
            </View>
          </Pressable>
        </View>
      </View>

      <View className="absolute right-0 left-0 px-4" style={{ bottom: insets.bottom + 16 }}>
        <ButtonPrimary title="Apply" variant="secondaryBlue" className="rounded-full" />
      </View>
    </View>
  );
}
