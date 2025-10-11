export interface CategoryCard {
  label: string;
  count: string;
  bg: string;
  icon: string;
  iconColor: string;
}

export interface CategoryItemProps {
  card: CategoryCard;
  onPress: () => void;
}
