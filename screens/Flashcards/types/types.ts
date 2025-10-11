export interface FlashcardProps {
  frontLanguageLabel: string;
  frontText: string;
  backLanguageLabel: string;
  backText: string;
}

export interface FlashcardButtonsProps {
  onUnknown?: () => void;
  onKnown?: () => void;
}
