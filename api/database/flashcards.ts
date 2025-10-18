export type ExampleSentence = {
  sentence: string; // Spanish
  translationEn: string;
  translationPl: string;
};

export type WordEntry = {
  id: string;
  word: string; // L2 Spanish
  translationEn: string; // L1 English
  translationPl: string; // L1 Polish
  examples: ExampleSentence[];
};

export const spanishFlashcards: WordEntry[] = [
  {
    id: '1',
    word: 'hola',
    translationEn: 'hello',
    translationPl: 'cześć',
    examples: [
      {
        sentence: 'Hola, ¿cómo estás?',
        translationEn: 'Hello, how are you?',
        translationPl: 'Cześć, jak się masz?',
      },
      {
        sentence: 'Hola a todos.',
        translationEn: 'Hello everyone.',
        translationPl: 'Cześć wszystkim.',
      },
      {
        sentence: 'Ella me dijo hola desde la ventana.',
        translationEn: 'She said hello to me from the window.',
        translationPl: 'Powiedziała mi cześć z okna.',
      },
    ],
  },
  {
    id: '2',
    word: 'gracias',
    translationEn: 'thank you',
    translationPl: 'dziękuję',
    examples: [
      {
        sentence: 'Muchas gracias por tu ayuda.',
        translationEn: 'Thank you very much for your help.',
        translationPl: 'Bardzo dziękuję za pomoc.',
      },
      {
        sentence: 'Gracias, eso es todo.',
        translationEn: 'Thanks, that is all.',
        translationPl: 'Dzięki, to wszystko.',
      },
      {
        sentence: 'Siempre digo gracias cuando alguien me ayuda.',
        translationEn: 'I always say thank you when someone helps me.',
        translationPl: 'Zawsze mówię dziękuję, gdy ktoś mi pomaga.',
      },
    ],
  },
  {
    id: '3',
    word: 'por favor',
    translationEn: 'please',
    translationPl: 'proszę',
    examples: [
      {
        sentence: 'Pasa, por favor.',
        translationEn: 'Come in, please.',
        translationPl: 'Wejdź, proszę.',
      },
      {
        sentence: '¿Me ayudas, por favor?',
        translationEn: 'Can you help me, please?',
        translationPl: 'Czy pomożesz mi, proszę?',
      },
      {
        sentence: 'Por favor, guarda silencio durante la película.',
        translationEn: 'Please be quiet during the movie.',
        translationPl: 'Proszę o ciszę w czasie filmu.',
      },
    ],
  },
  {
    id: '4',
    word: 'café',
    translationEn: 'coffee',
    translationPl: 'kawa',
    examples: [
      {
        sentence: 'Tomo café cada mañana.',
        translationEn: 'I drink coffee every morning.',
        translationPl: 'Piję kawę każdego ranka.',
      },
      {
        sentence: '¿Quieres un café?',
        translationEn: 'Do you want a coffee?',
        translationPl: 'Chcesz kawę?',
      },
      {
        sentence: 'Prefiero el café sin azúcar.',
        translationEn: 'I prefer coffee without sugar.',
        translationPl: 'Wolę kawę bez cukru.',
      },
    ],
  },
  {
    id: '5',
    word: 'libro',
    translationEn: 'book',
    translationPl: 'książka',
    examples: [
      {
        sentence: 'Estoy leyendo un libro interesante.',
        translationEn: 'I am reading an interesting book.',
        translationPl: 'Czytam interesującą książkę.',
      },
      {
        sentence: 'Ese libro es muy corto.',
        translationEn: 'That book is very short.',
        translationPl: 'Ta książka jest bardzo krótka.',
      },
      {
        sentence: 'Perdí el libro que me prestaste.',
        translationEn: 'I lost the book you lent me.',
        translationPl: 'Zgubiłem książkę, którą mi pożyczyłeś.',
      },
    ],
  },
  {
    id: '6',
    word: 'comer',
    translationEn: 'to eat',
    translationPl: 'jeść',
    examples: [
      {
        sentence: 'Vamos a comer a las dos.',
        translationEn: 'We are going to eat at two.',
        translationPl: 'Idziemy jeść o drugiej.',
      },
      {
        sentence: 'Me gusta comer pasta.',
        translationEn: 'I like to eat pasta.',
        translationPl: 'Lubię jeść makaron.',
      },
      {
        sentence: 'Intento comer más sano entre semana.',
        translationEn: 'I try to eat healthier during the week.',
        translationPl: 'Próbuję jeść zdrowiej w tygodniu.',
      },
    ],
  },
  {
    id: '7',
    word: 'beber',
    translationEn: 'to drink',
    translationPl: 'pić',
    examples: [
      {
        sentence: 'Prefiero beber agua.',
        translationEn: 'I prefer to drink water.',
        translationPl: 'Wolę pić wodę.',
      },
      {
        sentence: 'No debes beber tanto café.',
        translationEn: 'You should not drink so much coffee.',
        translationPl: 'Nie powinieneś pić tyle kawy.',
      },
      {
        sentence: 'Es importante beber suficiente agua cada día.',
        translationEn: 'It is important to drink enough water every day.',
        translationPl: 'Ważne jest, aby pić wystarczająco wody każdego dnia.',
      },
    ],
  },
  {
    id: '8',
    word: 'casa',
    translationEn: 'house',
    translationPl: 'dom',
    examples: [
      {
        sentence: 'Mi casa es tu casa.',
        translationEn: 'My house is your house.',
        translationPl: 'Mój dom jest twoim domem.',
      },
      {
        sentence: 'La casa es grande y luminosa.',
        translationEn: 'The house is big and bright.',
        translationPl: 'Dom jest duży i jasny.',
      },
      {
        sentence: 'Vamos a pintar la casa este fin de semana.',
        translationEn: 'We are going to paint the house this weekend.',
        translationPl: 'Będziemy malować dom w ten weekend.',
      },
    ],
  },
  {
    id: '9',
    word: 'trabajar',
    translationEn: 'to work',
    translationPl: 'pracować',
    examples: [
      {
        sentence: 'Tengo que trabajar mañana.',
        translationEn: 'I have to work tomorrow.',
        translationPl: 'Muszę jutro pracować.',
      },
      {
        sentence: 'Trabajar en equipo es importante.',
        translationEn: 'Working in a team is important.',
        translationPl: 'Praca w zespole jest ważna.',
      },
      {
        sentence: 'Quiero trabajar menos horas este mes.',
        translationEn: 'I want to work fewer hours this month.',
        translationPl: 'Chcę pracować mniej godzin w tym miesiącu.',
      },
    ],
  },
  {
    id: '10',
    word: 'feliz',
    translationEn: 'happy',
    translationPl: 'szczęśliwy',
    examples: [
      {
        sentence: 'Estoy muy feliz hoy.',
        translationEn: 'I am very happy today.',
        translationPl: 'Jestem dziś bardzo szczęśliwy.',
      },
      {
        sentence: 'Ella se siente feliz con su nuevo trabajo.',
        translationEn: 'She feels happy with her new job.',
        translationPl: 'Ona czuje się szczęśliwa w nowej pracy.',
      },
      {
        sentence: 'Nos hace feliz pasar tiempo en familia.',
        translationEn: 'Spending time with family makes us happy.',
        translationPl: 'Spędzanie czasu z rodziną nas uszczęśliwia.',
      },
    ],
  },
];

export type StudyCard = {
  id: string;
  frontLanguageLabel: string;
  frontText: string; // word (L2)
  backLanguageLabel: string; // default label; UI may override dynamically
  backTextEn: string;
  backTextPl: string;
  examples: ExampleSentence[];
};

export function mapToStudyCards(entries: WordEntry[]): StudyCard[] {
  return entries.map((e) => ({
    id: e.id,
    frontLanguageLabel: 'Spanish',
    frontText: e.word,
    backLanguageLabel: 'English',
    backTextEn: e.translationEn,
    backTextPl: e.translationPl,
    examples: e.examples,
  }));
}
