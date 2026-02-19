# FlashCards — English Vocabulary Learning App

Interactive English vocabulary learning app with flashcards and reading exercises. Available as a web app (PWA) and native iOS app.

## Live Demo

- Web app: https://flashcard.coinbx.com/
- iOS app: App Store (coming soon)

## Screenshot

![App Screenshot](screenshot.png)

## Features

### Flashcard Mode
- Multiple choice questions with instant feedback
- Oxford 3000–5000 words included, covering CEFR levels A1–C2
- Translations in 6 languages: Thai, Chinese, Spanish, French, Japanese, Korean
- Text-to-Speech with selectable English voices
- Speech Recognition for speaking practice with similarity scoring
- Smart filtering by CEFR level and category
- Progress tracking (prioritizes unknown words)

### Reading Mode
- Short English articles (2-3 paragraphs) with comprehension questions
- Vocabulary highlighting by CEFR level (A=green, B=orange, C=pink)
- Highlight level filter — toggle A/B/C to reduce visual clutter
- Tap any highlighted word to see translation popup
- Text-to-Speech for full article playback with word tracking

### General
- Dark/Light theme
- Multi-language support (Thai, Chinese, Spanish, French)
- Progress persistence

## Project Structure

```
flashcard-webapp/     # Next.js web app (PWA)
Flashcard-ios/        # Native SwiftUI iOS app
```

## Web App (PWA)

### Tech Stack
- Next.js 15, React 19, TypeScript, Tailwind CSS v4
- Web Speech API (TTS + STT)
- Static export (`output: "export"`)
- Service Worker for offline support

### Quick Start
```bash
cd flashcard-webapp
npm install
npm run dev    # Development server (port 3002)
npm run build  # Production build
```

### Deployment
```bash
npm run build
npm run start
```

Or with PM2:
```bash
pm2 start ecosystem.config.js
```

## Native iOS App

### Tech Stack
- SwiftUI (iOS 17+)
- AVSpeechSynthesizer for TTS
- SFSpeechRecognizer for speech recognition
- StoreKit 2 for in-app purchase
- JSON data bundles (vocabulary.json, readings.json)

### Features
- Full native experience with SwiftUI
- Freemium model: 20 free words, one-time purchase to unlock all
- Voice selection for TTS
- Vocabulary popup on tapped words in Reading mode
- Highlight level filter (A/B/C) in Reading mode
- Purchase and restore in Settings

### Build & Deploy
```bash
cd Flashcard-ios

# Build for device
xcodebuild build \
  -project FlashcardApp.xcodeproj \
  -scheme FlashcardApp \
  -destination 'id=<DEVICE_ID>' \
  CODE_SIGN_STYLE=Automatic \
  DEVELOPMENT_TEAM=<TEAM_ID>

# Archive for App Store
xcodebuild archive \
  -project FlashcardApp.xcodeproj \
  -scheme FlashcardApp \
  -archivePath build/FlashcardApp.xcarchive \
  -destination 'generic/platform=iOS'

# Export & upload to App Store Connect
xcodebuild -exportArchive \
  -archivePath build/FlashcardApp.xcarchive \
  -exportPath build/export \
  -exportOptionsPlist ExportOptions.plist
```

## Vocabulary Data

- **Oxford 3000–5000 words** across all CEFR levels (A1, A2, B1, B2, C1, C2)
- **19 categories**: academic, business, daily, food, health, travel, and more
- Each word includes: definition, hint, part of speech, IPA, synonyms, example sentences, translations (th/zh/es/fr/ja/ko)
- Web app data: `flashcard-webapp/src/data/vocabulary.ts`
- iOS app data: `Flashcard-ios/FlashcardApp/Resources/vocabulary.json`

## Architecture

### Web App
- `flashcard-webapp/src/app/page.tsx` — Flashcard UI
- `flashcard-webapp/src/app/reading/page.tsx` — Reading mode
- `flashcard-webapp/src/data/vocabulary.ts` — Vocabulary database
- `flashcard-webapp/src/data/readings.ts` — Reading articles
- `flashcard-webapp/src/components/BottomNav.tsx` — Navigation

### iOS App
- `Flashcard-ios/FlashcardApp/FlashcardApp.swift` — App entry point (TabView)
- `Flashcard-ios/FlashcardApp/Views/Flashcard/` — Flashcard views
- `Flashcard-ios/FlashcardApp/Views/Reading/` — Reading views (article, quiz, vocab popup, highlight)
- `Flashcard-ios/FlashcardApp/Views/Settings/` — Settings view with purchase
- `Flashcard-ios/FlashcardApp/ViewModels/` — FlashcardViewModel, ReadingViewModel
- `Flashcard-ios/FlashcardApp/Services/` — TTS, Speech Recognition, Store (IAP), Data, VocabLookup
- `Flashcard-ios/FlashcardApp/Resources/` — vocabulary.json, readings.json

## CEFR Levels

| Level | Description | Color (Reading) |
|-------|-------------|-----------------|
| A1 | Beginner | Green |
| A2 | Elementary | Green |
| B1 | Intermediate | Orange |
| B2 | Upper Intermediate | Orange |
| C1 | Advanced | Pink |
| C2 | Proficiency | Pink |
