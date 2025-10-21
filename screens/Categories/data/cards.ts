import type { CategoryCard } from '../types/types';

export const categoryCards: CategoryCard[] = [
  {
    key: 'cuisine',
    color: '#f97316',
    icon: 'silverware-fork-knife',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'food', color: '#fb923c' },
      { key: 'drinks', color: '#fdba74' },
      { key: 'dishes', color: '#fed7aa' },
      { key: 'restaurant', color: '#ffedd5' },
    ],
  },
  {
    key: 'nature',
    color: '#22c55e',
    icon: 'leaf',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'animals', color: '#4ade80' },
      { key: 'plants', color: '#86efac' },
      { key: 'weather', color: '#bbf7d0' },
      { key: 'landscapes', color: '#dcfce7' },
    ],
  },
  {
    key: 'travel',
    color: '#8b5cf6',
    icon: 'wallet-travel',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'airport', color: '#a78bfa' },
      { key: 'hotel', color: '#c4b5fd' },
      { key: 'cityTransport', color: '#ddd6fe' },
      { key: 'sightseeing', color: '#ede9fe' },
    ],
  },
  {
    key: 'shopping',
    color: '#0ea5e9',
    icon: 'cart-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'groceries', color: '#38bdf8' },
      { key: 'clothing', color: '#7dd3fc' },
      { key: 'electronics', color: '#bae6fd' },
      { key: 'pharmacy', color: '#e0f2fe' },
    ],
  },
  {
    key: 'health',
    color: '#ef4444',
    icon: 'medical-bag',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'symptoms', color: '#f87171' },
      { key: 'doctor', color: '#fca5a5' },
      { key: 'pharmacy', color: '#fecaca' },
      { key: 'fitness', color: '#fee2e2' },
    ],
  },
  {
    key: 'home',
    color: '#f59e0b',
    icon: 'home-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'furnitureRooms', color: '#fbbf24' },
      { key: 'householdChores', color: '#fcd34d' },
      { key: 'dailyRoutine', color: '#fde68a' },
      { key: 'toolsRepairs', color: '#fef3c7' },
    ],
  },
  {
    key: 'education',
    color: '#06b6d4',
    icon: 'school-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'schoolSubjects', color: '#22d3ee' },
      { key: 'universityExams', color: '#67e8f9' },
      { key: 'materialsSupplies', color: '#a5f3fc' },
      { key: 'classesSchedule', color: '#cffafe' },
    ],
  },
  {
    key: 'work',
    color: '#3b82f6',
    icon: 'briefcase-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'recruitmentCV', color: '#60a5fa' },
      { key: 'officeMeetings', color: '#93c5fd' },
      { key: 'professions', color: '#bfdbfe' },
      { key: 'projectsDeadlines', color: '#dbeafe' },
    ],
  },
  {
    key: 'leisure',
    color: '#10b981',
    icon: 'movie-open-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'sports', color: '#34d399' },
      { key: 'music', color: '#6ee7b7' },
      { key: 'filmSeries', color: '#a7f3d0' },
      { key: 'booksHobbies', color: '#d1fae5' },
    ],
  },
  {
    key: 'communication',
    color: '#ef4444',
    icon: 'message-text-outline',
    iconColor: '#ffffff',
    subcategories: [
      { key: 'greetingsSmallTalk', color: '#f87171' },
      { key: 'requestsPoliteness', color: '#fca5a5' },
      { key: 'opinionsArguments', color: '#fecaca' },
      { key: 'complaintsReturns', color: '#fee2e2' },
    ],
  },
];
