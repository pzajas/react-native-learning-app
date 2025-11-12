import { mapToStudyCards, spanishFlashcards } from '@/api/database/flashcards';
import { ProgressBar } from '@/components/progress/ProgressBar';
import { ThemedText } from '@/components/typography/ThemedText';
import { CategoryItem } from '@/screens/Categories/components/CategoryItem';
import { categoryCards } from '@/screens/Categories/data/cards';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Flashcard } from './components/Flashcard';
import { FlashcardButtons } from './components/FlashcardButtons';

function pickRandomEntries<T>(items: T[], desiredCount: number): T[] {
  if (items.length <= desiredCount) return [...items];
  const selectedIndices = new Set<number>();
  while (selectedIndices.size < desiredCount) {
    selectedIndices.add(Math.floor(Math.random() * items.length));
  }
  const result: T[] = [];
  selectedIndices.forEach((index) => result.push(items[index]));
  return result;
}

export function FlashcardsScreen() {
  const { i18n, t } = useTranslation();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const [deck, setDeck] = useState(() => {
    const source = spanishFlashcards;
    const selection = pickRandomEntries(source, 10);
    const base = mapToStudyCards(selection);
    return [...base].sort(() => Math.random() - 0.5);
  });
  const [index, setIndex] = useState(0);
  const [incorrectQueue, setIncorrectQueue] = useState<number[]>([]);
  const [knownIds, setKnownIds] = useState<Set<string>>(new Set());

  const { height } = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 2;
  const paddingBottom = insets.bottom + 10;

  const card = deck[index];

  const goNext = () => {
    if (index < deck.length - 1) {
      setIndex(index + 1);
      return;
    }
    if (incorrectQueue.length > 0) {
      const [next, ...rest] = incorrectQueue;
      setIndex(next);
      setIncorrectQueue(rest);
    }
  };

  const handleUnknown = () => {
    if (!incorrectQueue.includes(index)) setIncorrectQueue([...incorrectQueue, index]);
    goNext();
  };

  const handleKnown = () => {
    const current = deck[index];
    if (current && !knownIds.has(current.id)) {
      const next = new Set(knownIds);
      next.add(current.id);
      setKnownIds(next);
    }
    goNext();
  };

  const progress = deck.length > 0 ? knownIds.size / deck.length : 0;
  const done = deck.length > 0 && knownIds.size === deck.length;

  const reshuffleDeck = () => {
    const source = spanishFlashcards.filter((e) =>
      selectedCategory ? e.category === selectedCategory : true,
    );
    const selection = pickRandomEntries(source, 10);
    const base = mapToStudyCards(selection);
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setIndex(0);
    setIncorrectQueue([]);
    setKnownIds(new Set());
  };

  const applyCategorySelection = (catKey: string | null, subKey: string | null) => {
    setSelectedCategory(catKey);
    setSelectedSub(subKey);
    setPickerOpen(false);
    // build new deck filtered by category (if any)
    const source = spanishFlashcards.filter((e) => (catKey ? e.category === catKey : true));
    const selection = pickRandomEntries(source, 10);
    const base = mapToStudyCards(selection);
    setDeck([...base].sort(() => Math.random() - 0.5));
    setIndex(0);
    setIncorrectQueue([]);
    setKnownIds(new Set());
  };

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      reshuffleDeck();
    }, 2500);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <View
      className="flex-1 px-4 bg-surfaceSecondary dark:bg-surfaceSecondary-dark"
      style={{ paddingTop, paddingBottom }}
    >
      <Modal visible={pickerOpen} animationType="slide" onRequestClose={() => setPickerOpen(false)}>
        <ScrollView
          className="flex-1 bg-surfaceSecondary dark:bg-surfaceSecondary-dark"
          contentContainerStyle={{ padding: 16, paddingTop, paddingBottom }}
        >
          <View className="gap-3 mt-2">
            {categoryCards.map((c) => (
              <CategoryItem
                key={c.key}
                card={c}
                expanded={expandedKey === c.key}
                onToggle={() => setExpandedKey((prev) => (prev === c.key ? null : c.key))}
                onPressSubcategory={(catKey: string, subKey: string) =>
                  applyCategorySelection(catKey, subKey)
                }
              />
            ))}
          </View>
          <View>
            <View style={{ height: 24 }} />
            <TouchableOpacity
              onPress={() => setPickerOpen(false)}
              className="w-full px-4 py-3 rounded-full bg-white dark:bg-surfaceTertiary-dark"
            >
              <ThemedText className="text-center text-black dark:text-white">
                {t('common.buttons.close') || 'Close'}
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>

      <View className="mb-4 w-full">
        <TouchableOpacity
          onPress={() => {
            setExpandedKey(null);
            setPickerOpen(true);
          }}
          className="px-3 py-2 bg-surfacePrimary dark:bg-surfacePrimary-dark rounded mb-3"
          style={{ marginTop: -height * 0.05 }}
        >
          <ThemedText>
            {selectedCategory
              ? t(`builder.categories.${selectedCategory}`)
              : t('flashcards.selectCategory') || 'Select category'}
            {selectedSub ? ` • ${t(`builder.subcategories.${selectedSub}`)}` : ''}
          </ThemedText>
        </TouchableOpacity>
        <ProgressBar progress={progress} height={8} />
      </View>
      <View className="items-center">
        <ThemedText size="small" className="opacity-70">
          {knownIds.size}/{deck.length}
        </ThemedText>
      </View>
      <View
        className="flex-1 items-center"
        style={{ justifyContent: 'flex-start', marginTop: height * 0.1 }}
      >
        {done ? (
          <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
            <ThemedText weight="bold" className="text-[24px]">
              All done!
            </ThemedText>
          </Animated.View>
        ) : card ? (
          <Animated.View
            key={card.id}
            entering={FadeInDown}
            exiting={FadeOutDown}
            className="w-full"
          >
            {(() => {
              const isPl = (i18n.language || 'en').startsWith('pl');
              const backLanguageLabel = isPl
                ? t('config.languagePolish')
                : t('config.languageEnglish');
              const backText = isPl ? card.backTextPl : card.backTextEn;
              const examples = (card.examples || []).map((e) => ({
                sentence: e.sentence,
                translation: isPl ? e.translationPl : e.translationEn,
              }));
              return (
                <Flashcard
                  frontLanguageLabel={card.frontLanguageLabel}
                  frontText={card.frontText}
                  backLanguageLabel={backLanguageLabel}
                  backText={backText}
                  examples={examples}
                />
              );
            })()}
          </Animated.View>
        ) : null}
        {!done && <FlashcardButtons onUnknown={handleUnknown} onKnown={handleKnown} />}
      </View>
    </View>
  );
}
