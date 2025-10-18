import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'light' | 'neutral' | 'danger';

interface Props {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
  diameter?: number;
  variant?: Variant;
  stopPropagation?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export function ButtonIcon({
  icon,
  onPress,
  diameter = 64,
  variant = 'primary',
  stopPropagation = false,
  accessibilityLabel,
  accessibilityHint,
}: Props) {
  const [pressed, setPressed] = useState(false);

  const base = 'items-center justify-center rounded-full shadow-dropShadow';
  const bg =
    variant === 'primary'
      ? 'bg-surfaceActionSecondary'
      : variant === 'light'
        ? 'bg-surfaceActionSecondaryLight dark:bg-surfaceActionSecondaryLight-dark'
        : variant === 'danger'
          ? 'bg-[#ef4444]'
          : 'bg-surfacePrimary dark:bg-surfacePrimary-dark';

  return (
    <Pressable
      onPress={(e) => {
        if (stopPropagation) e.stopPropagation();
        onPress?.();
      }}
      onPressIn={(e) => {
        if (stopPropagation) e.stopPropagation();
        setPressed(true);
      }}
      onPressOut={(e) => {
        if (stopPropagation) e.stopPropagation();
        setPressed(false);
      }}
      style={{ width: diameter, height: diameter }}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
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
