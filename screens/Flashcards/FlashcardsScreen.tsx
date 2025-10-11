import { View } from 'react-native';
import { Flashcard } from './components/Flashcard';
import { FlashcardButtons } from './components/FlashcardButtons';

export function FlashcardsScreen() {
  return (
    <View className="flex-1 px-4 py-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark">
      <View className="flex-1 justify-center items-center">
        <Flashcard
          frontLanguageLabel="Spanish"
          frontText="Hola"
          backLanguageLabel="English"
          backText="Hello"
        />
        <FlashcardButtons />
      </View>
    </View>
  );
}
