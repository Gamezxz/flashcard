# Thai-English Flashcard App 🇹🇭🇬🇧

Interactive flashcard application for Thai speakers learning English vocabulary with mobile-optimized design.

## Features 📱

- **Mobile-First Design**: Optimized for smartphone usage
- **Interactive Learning**: Multiple choice questions with instant feedback
- **Speech Features**: 
  - Text-to-Speech for pronunciation practice
  - Speech Recognition for speaking practice with similarity scoring
- **Progress Tracking**: LocalStorage-based progress management
- **Smart Filtering**: Filter by CEFR levels (A1-C2) and categories
- **Dark/Light Theme**: User preference with persistent storage
- **Vocabulary Database**: 400+ words with Thai translations and examples

## Tech Stack 🚀

- **Next.js 15** - React framework with Turbopack
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Web Speech API** - Text-to-Speech and Speech Recognition
- **LocalStorage** - Progress and preferences persistence

## Quick Start 🏃‍♂️

```bash
cd flashcard-app
npm install
npm run dev    # Development server (port 3003)
npm run build  # Production build  
npm run start  # Production server (port 3002)
```

## Production Deployment 🚀

```bash
npm run build
npm run start
```

Or with PM2:
```bash
pm2 start ecosystem.config.js
```

## Vocabulary Management 📚

The project includes Node.js utilities for expanding the vocabulary database:

```bash
node vocabulary-utils.js     # Test vocabulary management system
node vocabulary-analysis.js  # Analyze existing vocabulary
node a1-expansion.js        # Add A1 level words
```

## Architecture 🏗️

- `/flashcard-app/src/app/page.tsx` - Main flashcard component
- `/flashcard-app/src/data/vocabulary.ts` - TypeScript vocabulary database
- Root level `.js` files - Vocabulary management utilities
- `CLAUDE.md` - Development documentation for AI assistants

## Categories & Levels 📊

**CEFR Levels**: A1, A2, B1, B2, C1, C2

**Categories**: daily, food, home, work, school, social, shopping, money, time, grammar, technology, travel, health, weather, city

## Browser Support 🌐

- Modern browsers with Web Speech API support
- Progressive enhancement for speech features
- Responsive design for mobile and desktop

## Development 👨‍💻

See `CLAUDE.md` for detailed development guidance and architecture overview.