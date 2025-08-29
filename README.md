# Thai-English Flashcard App 🇹🇭🇬🇧

Interactive flashcard application for Thai speakers learning English vocabulary with mobile-optimized design.

## Live Demo

- Demo website: https://flashcard.coinbx.com/

## Screenshot

![App Screenshot](flashcard-app/public/screenshot.png)

## Features 📱

- **Mobile-First Design**: Optimized for smartphone usage
- **Interactive Learning**: Multiple choice questions with instant feedback
- **Speech Features**:
  - Text-to-Speech with selectable English voices (footer selector)
  - Default voice prefers “Daniel” (if available), then other EN voices
  - Speech Recognition for speaking practice with similarity scoring
- **Progress Tracking**: LocalStorage-based progress management
- **Smart Filtering**: Filter by CEFR levels (A1-C2) and categories
- **Dark/Light Theme**: User preference with persistent storage
- **Vocabulary Database**: 400+ words with Thai translations and examples
- **Reading Mode**: Short passages (2–3 paragraphs) with 5–10 comprehension questions

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
npm run dev    # Development server (port 3002)
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

Note on static export (output: export): Next.js does not apply `rewrites` or `headers` in `next.config.ts` for static exports. Configure HTTP headers at your hosting layer (e.g., Nginx, CloudFront) if needed. The Service Worker is registered with a versioned URL (`/sw.js?v=1`) to mitigate caching on static hosts.

## Vocabulary Management 📚

The project includes utilities for expanding and fixing the vocabulary database:

```bash
cd add_words_function
node vocabulary-analysis.js     # Analyze current vocabulary (levels, categories, duplicates)
node check-duplicates.js        # Check duplicate words/IDs
node fix-vocabulary-ids.js      # Fix sequential IDs (creates backup)
python3 fix_ids.py              # Alternative ID fix (Python)
```

## Architecture 🏗️

- `flashcard-app/src/app/page.tsx` — Main flashcard component
- `flashcard-app/src/app/reading/page.tsx` — Reading mode (passages + questions)
- `flashcard-app/src/data/vocabulary.ts` — Vocabulary database (TypeScript)
- `flashcard-app/src/data/readings.ts` — Reading passages and questions
- Root-level scripts in `add_words_function/` — Vocabulary management utilities
- `CLAUDE.md` — Development documentation for AI assistants

## Categories & Levels 📊

**CEFR Levels**: A1, A2, B1, B2, C1, C2

**Categories**: daily, food, home, work, school, social, shopping, money, time, grammar, technology, travel, health, weather, city

## Browser Support 🌐

- Modern browsers with Web Speech API support
- Progressive enhancement for speech features
- Responsive design for mobile and desktop

## Development 👨‍💻

See `CLAUDE.md` for detailed development guidance and architecture overview.

---

## ภาพรวมโปรเจกต์ (ภาษาไทย)

- แอปหลัก: Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 อยู่ใน `flashcard-app/`
- จุดเด่น: คำถามหลายตัวเลือก, อ่านออกเสียง (TTS), ฝึกพูดด้วย STT + similarity, เก็บความคืบหน้าใน `localStorage`, กรองตามระดับ CEFR/หมวดหมู่, ธีม light/dark, รองรับ PWA, และโหมดอ่าน (Reading) พร้อมคำถามความเข้าใจ
- ฐานคำศัพท์: เก็บเป็น TypeScript ในไฟล์เดียว `flashcard-app/src/data/vocabulary.ts`

### วิธีรัน

- `cd flashcard-app && npm install`
- `npm run dev` (พอร์ต 3002), `npm run build`, `npm run start` (พอร์ต 3002)
- หมายเหตุ: Dev server ใช้พอร์ต 3002 ตามที่กำหนดใน `flashcard-app/package.json`

### โครงสร้างไฟล์สำคัญ

- `flashcard-app/src/app/page.tsx`: หน้า UI หลักของการ์ดคำศัพท์ (ตรรกะสุ่มคำตอบ, ตรวจคำตอบ, TTS/STT, ฟิลเตอร์, ธีม)
- `flashcard-app/src/app/layout.tsx`: เมตาดาต้า + ลงทะเบียน Service Worker + ไอคอน PWA
- `flashcard-app/src/app/globals.css`: Tailwind v4 + ตัวแปรธีม
- `flashcard-app/src/data/vocabulary.ts`: โมเดล Word และรายการคำศัพท์ทั้งหมด
 - `flashcard-app/src/app/reading/page.tsx`: หน้าโหมดอ่าน (บทความ + คำถาม)
 - `flashcard-app/src/data/readings.ts`: ชุดบทความอ่านและคำถาม
- `flashcard-app/public/manifest.json`, `flashcard-app/public/sw.js`: ไฟล์ PWA
- โฟลเดอร์ `add_words_function/`: สคริปต์ Node/Python สำหรับวิเคราะห์/แก้ไขฐานคำศัพท์

### โมเดลข้อมูล

- `flashcard-app/src/data/vocabulary.ts:6`: กำหนด `interface Word` มีฟิลด์: `id`, `word`, `pos`, `thai`, `definition`, `examples`, `hint`, `level`, `cats`
- `flashcard-app/src/data/vocabulary.ts:18`: `WORDS: Word[]` คืออาเรย์คำศัพท์ที่ UI ใช้งานตรงๆ

### การทำงานหน้า Flashcard

- ยูทิลิตี้: สุ่ม/จัดชุดตัวเลือก เช่น `shuffle`, `buildChoices`
- เลือกคำถัดไป: เน้นคำที่ยังไม่รู้ก่อนด้วยการถ่วงน้ำหนัก
- บันทึกความคืบหน้า: เก็บ `known` ใน `localStorage` ด้วย safe getter/setter
- อ่านออกเสียง (TTS): ฟังก์ชัน `speak()` ใช้ Web Speech API และเสียงที่เลือกจาก dropdown ใน Footer
- ฝึกพูด (STT): ใช้ Web Speech API (SpeechRecognition) + คำนวณคะแนนความเหมือนด้วย Levenshtein
- ธีม: สลับ light/dark พร้อมจำค่าผ่าน `localStorage`

### PWA

- `flashcard-app/src/app/layout.tsx:15`: ตั้งค่า `manifest`, meta PWA, ไอคอน
- ลงทะเบียน Service Worker ใน `<head>` (inline script) ที่ `flashcard-app/src/app/layout.tsx:47`
- `flashcard-app/public/manifest.json`: ข้อมูลแอป/ไอคอน/สกรีนช็อต
- `flashcard-app/public/sw.js:1`: แคชหน้า/ไฟล์พื้นฐาน, กลไก `fetch`/cache, hook สำหรับ background sync/push

### สคริปต์จัดการคำศัพท์

### โหมดอ่าน (Reading)

- เนื้อหา: บทความสั้นภาษาอังกฤษ 2–3 ย่อหน้า พร้อมคำถามความเข้าใจ 5–10 ข้อ
- ไฟล์ข้อมูล: `flashcard-app/src/data/readings.ts`
- หน้าใช้งาน: `flashcard-app/src/app/reading/page.tsx` (ปุ่มเข้าใช้งาน “📖 โหมดอ่าน” อยู่ที่หัวหน้าหลัก)
- ฟีเจอร์: อ่านออกเสียงทั้งเรื่อง, เฉลย/ให้คะแนน, ตัวเลือกเสียงอยู่ที่ Footer ของหน้า

### เสียงอ่านออกเสียง (TTS Voices)

- เลือกเสียงอังกฤษทั้งหมดที่ระบบรายงานว่า `lang` เป็น `en*`
- ค่าตั้งต้น: ใช้เสียงที่ผู้ใช้เคยเลือกไว้ ถ้าไม่มีจะลอง “Daniel” ก่อน (ถ้ามี)
- ตัวเลือกเสียงอยู่ที่ Footer ทั้งในหน้าแฟลชการ์ดและหน้า Reading และจะถูกจำไว้ใน `localStorage` คีย์ `tts_voice_google_en_uri`
- iOS (iPhone/iPad): ใช้เสียงของระบบ Apple เท่านั้น จึงอาจไม่มีเสียง Google; สามารถไปที่ Settings > Accessibility > Spoken Content > Voices > English เพื่อดาวน์โหลดเสียงเพิ่ม (เช่น Daniel) แล้วรีโหลดหน้าเว็บอีกครั้ง

- `add_words_function/vocabulary-analysis.js:1`: วิเคราะห์จำนวนคำ/ระดับ/หมวด, ตรวจซ้ำ, สรุปสถิติ
- `add_words_function/check-duplicates.js:1`: ตรวจคำ/ID ซ้ำ
- `add_words_function/fix-vocabulary-ids.js:1` และ `add_words_function/fix_ids.py:1`: รีเซ็ต ID ให้เรียงลำดับ + สำรองไฟล์
- วิธีเรียก: `cd add_words_function && node vocabulary-analysis.js` เป็นต้น
