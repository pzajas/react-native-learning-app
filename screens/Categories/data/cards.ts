import type { CategoryCard } from '../types/types';

export const categoryCards: CategoryCard[] = [
  { label: 'Basic', count: '100 words', bg: '#cfe3ff', icon: 'book-outline', iconColor: '#0d59f2' },
  { label: 'Verbs', count: '150 words', bg: '#d5f5e3', icon: 'bank-outline', iconColor: '#16a34a' },
  { label: 'Food', count: '80 words', bg: '#fde7d3', icon: 'cart-outline', iconColor: '#f97316' },
  {
    label: 'Travel',
    count: '120 words',
    bg: '#efe5ff',
    icon: 'wallet-travel',
    iconColor: '#8b5cf6',
  },
  {
    label: 'Daily Phrases',
    count: '50 phrases',
    bg: '#ffe1e1',
    icon: 'clock-outline',
    iconColor: '#ef4444',
  },
];
