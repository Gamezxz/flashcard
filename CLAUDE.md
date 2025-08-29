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
npm run dev                # Development server with Turbopack (port 3002)
npm run build              # Production build
npm run start              # Start production server (port 3002)
npm run lint               # ESLint checking
pm2 start ecosystem.config.js  # PM2 production deployment
```

### Vocabulary Management (add_words_function/ directory)
```bash
cd add_words_function
node vocabulary-analysis.js          # Analyze existing vocabulary statistics and distribution
node check-duplicates.js            # Check for duplicate words and IDs in database
node fix-vocabulary-ids.js           # Fix ID sequencing issues
python3 fix_ids.py                   # Alternative ID fixing script
```

## Architecture Overview

### Flashcard Application Structure
- **src/app/page.tsx** - Main flashcard component with complete learning interface (client-side)
- **src/data/vocabulary.ts** - TypeScript vocabulary database with structured Word objects
- **src/app/layout.tsx** - Root layout with Thai-English app metadata
- **ecosystem.config.js** - PM2 configuration for production deployment
- Uses React 19, Next.js 15, TypeScript, Tailwind CSS v4, and ESLint

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
The vocabulary management utilities in `add_words_function/` provide:
- **vocabulary-analysis.js**: Complete vocabulary statistics including word distribution by CEFR level, category usage analysis, duplicate detection, and ID range tracking
- **check-duplicates.js**: Dedicated duplicate detection for both words and IDs with detailed reporting
- **fix-vocabulary-ids.js**: ID sequencing repair and validation
- All scripts parse the existing `vocabulary.ts` file to maintain data integrity

## Data Organization

### Levels and Categories
- **Levels**: A1, A2, B1, B2, C1, C2 (CEFR framework)
- **Categories**: daily, food, home, work, school, social, shopping, money, time, grammar, technology, travel, health, weather, city

### Current Vocabulary Status
The database contains approximately 400+ words across all levels. Use `node add_words_function/vocabulary-analysis.js` to get current statistics and distribution analysis.

## Working with Vocabulary

### Adding New Words
1. Check for duplicates first using `node add_words_function/check-duplicates.js`
2. Follow the Word interface structure exactly
3. Ensure examples array has both English (`en`) and Thai (`th`) fields
4. Assign appropriate CEFR level and categories
5. Use highest ID + 1 for new entries (check with vocabulary-analysis.js)
6. Validate changes using the analysis scripts before committing

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
- Client-side rendering (`"use client"`) for interactive features

### Styling & Configuration
- Tailwind CSS v4 with PostCSS configuration
- Responsive design with mobile-first approach
- Dark mode support with CSS custom properties
- TypeScript with strict mode and Next.js path aliases (`@/*`)
- ESLint with Next.js and TypeScript rules