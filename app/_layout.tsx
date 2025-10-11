import { AppHeader } from '@/components/headers/AppHeader';
import { Colors } from '@/constants/color';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerTitleAlign: 'left',
            headerShadowVisible: false,
            headerTintColor: Colors[colorScheme ?? 'light'].text,
            headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: '700',
              color: Colors[colorScheme ?? 'light'].text,
            },
            header: ({ options, navigation }) => (
              <AppHeader
                title={(options?.title as string) || ''}
                showBackButton={navigation.canGoBack()}
                onPressBack={() => navigation.goBack()}
              />
            ),
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(content)/builder/index"
            options={{
              title: 'Sentence Builder',
            }}
          />

          <Stack.Screen
            name="(content)/config/index"
            options={{
              title: 'Settings',
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
