# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**GitHub Repository**: https://github.com/Gamezxz/flashcard

## Project Overview

This is a Thai-English flashcard application project with two main components:
1. **Next.js Web Application** (`flashcard-app/`) - Interactive flashcard trainer for learning English vocabulary with Thai translations
2. **Vocabulary Management Scripts** (root level JS files) - Node.js utilities for expanding and managing the vocabulary database

The flashcard app helps Thai speakers learn English through multiple-choice questions, pronunciation practice, and spaced repetition tracking.

## Development Commands

### Next.js Application (flashcard-app/)
```bash
cd flashcard-app
npm run dev --turbopack     # Development server (uses Turbopack for faster builds)
npm run build              # Production build
npm run start              # Start production server
npm run lint               # ESLint checking
```

### Vocabulary Management (root directory)
```bash
node vocabulary-utils.js              # Test vocabulary management system
node a1-expansion.js                 # Add A1 level words to database
node vocabulary-analysis.js          # Analyze existing vocabulary
node filter-and-add-levels.js       # Process and add words by level
```

## Architecture Overview

### Flashcard Application Structure
- **src/app/page.tsx** - Main flashcard component with complete learning interface
- **src/data/vocabulary.ts** - TypeScript vocabulary database with structured Word objects
- **src/app/layout.tsx** - Root layout with Thai-English app metadata
- Uses React 19, Next.js 15, TypeScript, and Tailwind CSS v4

### Vocabulary Data Model
```typescript
interface Word {
    id: number;
    word: string;           // English word
    pos: string;           // Part of speech (v., n., adj., etc.)
    thai: string;          // Thai translation
    definition: string;    // English definition
    examples: Example[];   // Usage examples in both languages
    hint: string;          // Learning hint
    level: string;         // CEFR level (A1-C2)
    cats: string[];        // Categories (daily, food, work, etc.)
}
```

### Key Features
- **Multiple Choice Practice**: 6-option multiple choice with Thai translations
- **Speech Recognition**: Browser-based pronunciation practice with similarity scoring
- **Progress Tracking**: LocalStorage-based known word tracking
- **Filtering**: By CEFR level (A1-C2) and categories
- **Text-to-Speech**: Auto-pronunciation of vocabulary and examples
- **Dark/Light Theme**: User preference with localStorage persistence

### Vocabulary Management System
The VocabularyManager class (`vocabulary-utils.js`) provides:
- Duplicate detection and validation
- ID generation and tracking
- Word object creation with validation
- Level appropriateness checking
- Batch word addition to TypeScript file

## Data Organization

### Levels and Categories
- **Levels**: A1, A2, B1, B2, C1, C2 (CEFR framework)
- **Categories**: daily, food, home, work, school, social, shopping, money, time, grammar, technology, travel, health, weather, city

### Current Vocabulary Status
The database contains approximately 400+ words across all levels. Use `vocabulary-analysis.js` to get current statistics.

## Working with Vocabulary

### Adding New Words
1. Use `VocabularyManager` class for validation and ID generation
2. Follow the Word interface structure exactly
3. Ensure examples array has both English (`en`) and Thai (`th`) fields
4. Assign appropriate CEFR level and categories
5. Test with `node vocabulary-utils.js` before adding to main database

### Word Quality Guidelines
- Include natural, commonly-used example sentences
- Ensure Thai translations are accurate and contextually appropriate
- Use concise, clear hints that aid memory
- Validate level appropriateness (A1 = basic, C2 = advanced)

## Technical Notes

### Speech Features
- Uses Web Speech API (browser support varies)
- TTS: `speechSynthesis` with English and Thai language support  
- STT: `SpeechRecognition`/`webkitSpeechRecognition` for pronunciation practice
- Includes Levenshtein distance algorithm for pronunciation scoring

### State Management
- Pure React hooks (no external state library)
- LocalStorage for persistence (progress tracking, theme, settings)
- Auto-save progress on word completion

### Styling
- Tailwind CSS v4 with custom theme variables
- Responsive design with mobile-first approach
- Dark mode support with CSS custom properties