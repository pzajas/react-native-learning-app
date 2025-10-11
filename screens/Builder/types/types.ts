export interface BuilderProgress {
  current: number;
  total: number;
}

export interface BuilderWordMoveHandlers {
  addWord: (word: string) => void;
  removeWord: (word: string) => void;
}
