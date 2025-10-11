import { AppHeader } from '@/components/headers/AppHeader';
import { Colors } from '@/constants/color';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import { Tabs, useRouter } from 'expo-router';
import { Platform, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: colorScheme === 'dark' ? '#0A47C2' : '#0d59f2',
        tabBarLabelPosition: 'below-icon',
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
          overflow: 'visible',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          lineHeight: 13,
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
          alignItems: 'center',
        },
        headerShown: true,
        headerLeft: (props) =>
          navigation.canGoBack() ? (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ) : undefined,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: '700',
          color: Colors[colorScheme ?? 'light'].text,
        },
        header: ({ options }) => {
          const state = navigation.getState?.();
          const currentRouteName = state?.routes?.[state.index]?.name;
          const isHome = currentRouteName === 'index';
          const isSpeaking = currentRouteName === 'speaking';
          const showBack = navigation.canGoBack() || isSpeaking;
          return (
            <AppHeader
              title={isHome ? '¡Hola!' : (options?.title as string) || ''}
              showBackButton={showBack}
              onPressBack={() =>
                navigation.canGoBack() ? navigation.goBack() : router.push('/(tabs)')
              }
              onPressRightSecondary={undefined}
              onPressRight={isHome ? () => router.push('/(content)/config') : undefined}
            />
          );
        },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="square-rounded-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="flashcards"
        options={{
          title: 'FlashCards',
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="cards-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="builder"
        options={{
          title: 'Choose a category',
          tabBarLabel: 'Builder',
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="view-dashboard-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="speaking"
        options={{
          title: 'Speaking',
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="microphone-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Statistics',
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="chart-box-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
