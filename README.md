
# 🧩 Product Requirements Document (PRD)
## Projekt: Mobilna aplikacja do nauki języka hiszpańskiego
### Technologia: React Native (Expo) + TypeScript
### Tryb działania: Offline-first

---

## 1. 🎯 Cel produktu

Aplikacja ma pomóc użytkownikom w nauce **1000 najpopularniejszych hiszpańskich słów** oraz **300 przydatnych zwrotów**, poprzez interaktywne modele nauki.  
Celem aplikacji jest umożliwienie **codziennego, krótkiego treningu językowego**, wspieranego przez motywujący system **streaków** (liczba dni nauki z rzędu).

---

## 2. 📱 Główne funkcjonalności

### 2.1. Baza danych słów i zwrotów
- **1000 najpopularniejszych słów** hiszpańskich (z tłumaczeniem PL i przykładem użycia).  
- **300 zwrotów** pogrupowanych tematycznie (np. podróże, restauracja, praca).  
- Każde słowo/zwrot zawiera:
  - 🇪🇸 hiszpańskie brzmienie (tekst + nagranie audio),
  - 🇵🇱 tłumaczenie,
  - 📂 kategorię tematyczną,
  - 🔊 wymowę (plik audio zapisany lokalnie lub generowany TTS offline).

### 2.2. Kategorie
- Kategorie dla słów i zwrotów, np.:
  - „Podstawowe”  
  - „Czasowniki”  
  - „Jedzenie”  
  - „Podróże”  
  - „Zwroty codzienne”  
- Możliwość filtrowania nauki po kategorii.

### 2.3. Tryby nauki
1. **Fiszki (Flashcards)**  
   - Użytkownik widzi słowo po hiszpańsku → zgaduje znaczenie → odkrywa tłumaczenie.  
   - Możliwość oznaczania słów jako „znam” / „nie znam”.  
   - Tryb audio (odsłuch).

2. **Tworzenie zdań (Sentence Builder)**  
   - Aplikacja pokazuje zdanie po polsku, a użytkownik układa hiszpańskie zdanie z rozsypanych słów.  
   - System sprawdza poprawność kolejności i słów.  

3. **Tryb mówienia (Speaking)**  
   - Aplikacja pokazuje słowo lub zdanie → użytkownik powtarza → rozpoznawanie mowy (Speech Recognition API).  
   - Porównanie wymowy użytkownika z oryginałem.  

4. **Powtórki (Review Mode)**  
   - Algorytm spaced repetition (np. na podstawie liczby poprawnych odpowiedzi).  
   - Proponuje słowa, które użytkownik dawno nie powtarzał.

### 2.4. System streaków i statystyk
- **Streak** – liczba dni z rzędu, w których użytkownik wykonał dowolną aktywność naukową.  
- Statystyki:
  - liczba poznanych słów,  
  - liczba dni nauki,  
  - najlepszy streak.  
- Wizualny wskaźnik streaka (np. ogień 🔥 lub pasek postępu).  

### 2.5. Tryb offline
- Cała baza słów, zwrotów i nagrań przechowywana **lokalnie** (SQLite lub AsyncStorage).  
- Synchronizacja danych użytkownika (opcjonalna, jeśli kiedyś dodasz konta).  
- Aplikacja w pełni działa bez Internetu.  

---

## 3. 🧠 UX / UI założenia

- Minimalistyczny, motywacyjny design.  
- Kolorystyka: przyjazna, np. żółty + niebieski (flaga Hiszpanii).  
- Ekrany:
  1. **Ekran powitalny** → wybór trybu nauki.  
  2. **Ekran fiszek** → swipowanie w lewo/prawo.  
  3. **Ekran budowania zdań** → drag & drop słów.  
  4. **Ekran mówienia** → przycisk nagrywania + ocena wymowy.  
  5. **Statystyki / streak / kalendarz aktywności.**  
  6. **Ustawienia** → język interfejsu (PL/EN), reset danych, wersja offline.  

---

## 4. 🧩 Struktura danych

### Słowo (`Word`)
```ts
type Word = {
  id: string;
  spanish: string;
  polish: string;
  category: string;
  example?: string;
  audio?: string; // lokalny plik audio
};
```

### Zwrot (`Phrase`)
```ts
type Phrase = {
  id: string;
  spanish: string;
  polish: string;
  category: string;
  audio?: string;
};
```

### Postęp użytkownika
```ts
type UserProgress = {
  knownWords: string[]; // lista ID słów
  knownPhrases: string[];
  lastStudyDate: string;
  streakCount: number;
};
```

---

## 5. ⚙️ Wymagania techniczne

- **Język:** TypeScript  
- **Framework:** React Native (Expo SDK 52+)  
- **Tryb:** Offline-first (SQLite lub lokalne JSON + AsyncStorage)  
- **Biblioteki:**
  - `expo-speech` (Text-to-Speech)
  - `expo-sqlite` lub `@react-native-async-storage/async-storage`
  - `expo-av` (dla odtwarzania audio)
  - `react-native-voice` (dla trybu mówienia)
  - `react-navigation` (stack navigation)
  - `expo-localization` + `i18n-js` (dla interfejsu PL/EN)

- **Kompatybilność:**
  - Android (Google Play, minSdk 24+)  
  - iOS (App Store, iOS 14+)  
  - Zgodność z wytycznymi UI/UX obu platform.

---

## 6. 🔐 Wymogi Google Play i App Store

- Brak konta użytkownika (offline = brak logowania → łatwiejsze publikacje).  
- Privacy Policy (prosty link w aplikacji: „Nie zbieramy żadnych danych osobowych”).  
- Brak danych osobowych / analiz / reklam.  
- Optymalizacja pod ekrany 5–7 cali.  
- Ikony i splash screen w rozdzielczościach wymaganych przez Expo.  

---

## 7. 🧱 Struktura projektu (propozycja folderów)

```
/src
 ├── assets/
 │    ├── audio/
 │    ├── data/words.json
 │    ├── data/phrases.json
 ├── components/
 │    ├── Flashcard.tsx
 │    ├── SentenceBuilder.tsx
 │    ├── SpeakingMode.tsx
 ├── screens/
 │    ├── HomeScreen.tsx
 │    ├── FlashcardsScreen.tsx
 │    ├── SentenceBuilderScreen.tsx
 │    ├── SpeakingScreen.tsx
 │    ├── StatsScreen.tsx
 │    ├── SettingsScreen.tsx
 ├── hooks/
 ├── utils/
 ├── store/
 ├── App.tsx
```

---

## 8. 🔮 Przyszłe rozszerzenia (opcjonalne)

- Konto użytkownika (synchronizacja w chmurze).  
- System punktów i poziomów.  
- Powiadomienia o nauce.  
- Quizy i gry językowe.  
