export type ExampleSentence = {
  sentence: string;
  translation: string;
};

export type WordEntry = {
  id: string;
  word: string; // L2 Spanish
  translation: string; // L1 English
  examples: ExampleSentence[];
};

export const spanishFlashcards: WordEntry[] = [
  {
    id: '1',
    word: 'hola',
    translation: 'hello',
    examples: [
      { sentence: 'Hola, ¿cómo estás?', translation: 'Hello, how are you?' },
      { sentence: 'Hola a todos.', translation: 'Hello everyone.' },
      {
        sentence: 'Ella me dijo hola desde la ventana.',
        translation: 'She said hello to me from the window.',
      },
    ],
  },
  {
    id: '2',
    word: 'gracias',
    translation: 'thank you',
    examples: [
      {
        sentence: 'Muchas gracias por tu ayuda.',
        translation: 'Thank you very much for your help.',
      },
      { sentence: 'Gracias, eso es todo.', translation: 'Thanks, that is all.' },
      {
        sentence: 'Siempre digo gracias cuando alguien me ayuda.',
        translation: 'I always say thank you when someone helps me.',
      },
    ],
  },
  {
    id: '3',
    word: 'por favor',
    translation: 'please',
    examples: [
      { sentence: 'Pasa, por favor.', translation: 'Come in, please.' },
      { sentence: '¿Me ayudas, por favor?', translation: 'Can you help me, please?' },
      {
        sentence: 'Por favor, guarda silencio durante la película.',
        translation: 'Please be quiet during the movie.',
      },
    ],
  },
  {
    id: '4',
    word: 'café',
    translation: 'coffee',
    examples: [
      { sentence: 'Tomo café cada mañana.', translation: 'I drink coffee every morning.' },
      { sentence: '¿Quieres un café?', translation: 'Do you want a coffee?' },
      { sentence: 'Prefiero el café sin azúcar.', translation: 'I prefer coffee without sugar.' },
    ],
  },
  {
    id: '5',
    word: 'libro',
    translation: 'book',
    examples: [
      {
        sentence: 'Estoy leyendo un libro interesante.',
        translation: 'I am reading an interesting book.',
      },
      { sentence: 'Ese libro es muy corto.', translation: 'That book is very short.' },
      { sentence: 'Perdí el libro que me prestaste.', translation: 'I lost the book you lent me.' },
    ],
  },
  {
    id: '6',
    word: 'comer',
    translation: 'to eat',
    examples: [
      { sentence: 'Vamos a comer a las dos.', translation: 'We are going to eat at two.' },
      { sentence: 'Me gusta comer pasta.', translation: 'I like to eat pasta.' },
      {
        sentence: 'Intento comer más sano entre semana.',
        translation: 'I try to eat healthier during the week.',
      },
    ],
  },
  {
    id: '7',
    word: 'beber',
    translation: 'to drink',
    examples: [
      { sentence: 'Prefiero beber agua.', translation: 'I prefer to drink water.' },
      {
        sentence: 'No debes beber tanto café.',
        translation: 'You should not drink so much coffee.',
      },
      {
        sentence: 'Es importante beber suficiente agua cada día.',
        translation: 'It is important to drink enough water every day.',
      },
    ],
  },
  {
    id: '8',
    word: 'casa',
    translation: 'house',
    examples: [
      { sentence: 'Mi casa es tu casa.', translation: 'My house is your house.' },
      { sentence: 'La casa es grande y luminosa.', translation: 'The house is big and bright.' },
      {
        sentence: 'Vamos a pintar la casa este fin de semana.',
        translation: 'We are going to paint the house this weekend.',
      },
    ],
  },
  {
    id: '9',
    word: 'trabajar',
    translation: 'to work',
    examples: [
      { sentence: 'Tengo que trabajar mañana.', translation: 'I have to work tomorrow.' },
      {
        sentence: 'Trabajar en equipo es importante.',
        translation: 'Working in a team is important.',
      },
      {
        sentence: 'Quiero trabajar menos horas este mes.',
        translation: 'I want to work fewer hours this month.',
      },
    ],
  },
  {
    id: '10',
    word: 'feliz',
    translation: 'happy',
    examples: [
      { sentence: 'Estoy muy feliz hoy.', translation: 'I am very happy today.' },
      {
        sentence: 'Ella se siente feliz con su nuevo trabajo.',
        translation: 'She feels happy with her new job.',
      },
      {
        sentence: 'Nos hace feliz pasar tiempo en familia.',
        translation: 'Spending time with family makes us happy.',
      },
    ],
  },
];

export type StudyCard = {
  id: string;
  frontLanguageLabel: string;
  frontText: string; // word (L2)
  backLanguageLabel: string;
  backText: string; // translation (L1)
  examples: ExampleSentence[];
};

export function mapToStudyCards(entries: WordEntry[]): StudyCard[] {
  return entries.map((e) => ({
    id: e.id,
    frontLanguageLabel: 'Spanish',
    frontText: e.word,
    backLanguageLabel: 'English',
    backText: e.translation,
    examples: e.examples,
  }));
}
