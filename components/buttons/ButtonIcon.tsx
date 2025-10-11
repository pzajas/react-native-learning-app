import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'light' | 'neutral';

interface Props {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
  diameter?: number;
  variant?: Variant;
}

export function ButtonIcon({ icon, onPress, diameter = 64, variant = 'primary' }: Props) {
  const [pressed, setPressed] = useState(false);

  const base = 'items-center justify-center rounded-full shadow-dropShadow';
  const bg =
    variant === 'primary'
      ? 'bg-surfaceActionSecondary'
      : variant === 'light'
        ? 'bg-surfaceActionSecondaryLight dark:bg-surfaceActionSecondaryLight-dark'
        : 'bg-surfacePrimary dark:bg-surfacePrimary-dark';

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{ width: diameter, height: diameter }}
      className={twMerge(base, bg, pressed ? 'opacity-90' : '')}
    >
      <View>
        <MaterialCommunityIcons
          name={icon}
          size={Math.round(diameter * 0.4)}
          color={variant === 'neutral' ? '#0d59f2' : '#fff'}
        />
      </View>
    </Pressable>
  );
}
