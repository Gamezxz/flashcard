// Vocabulary Analysis Script
// This script analyzes the current vocabulary dataset

const fs = require('fs');

// Read the vocabulary file
const vocabularyContent = fs.readFileSync('../flashcard-app/src/data/vocabulary.ts', 'utf8');

// Extract the WORDS array from the file
const wordsArrayMatch = vocabularyContent.match(/export const WORDS: Word\[\] = \[([\s\S]*)\];/);
if (!wordsArrayMatch) {
    console.error('Could not find WORDS array in vocabulary file');
    process.exit(1);
}

// Parse the words data
const wordsString = wordsArrayMatch[1];
const words = [];

// Simple parsing to extract word objects
const wordMatches = wordsString.match(/\{[^}]*id:\s*(\d+)[^}]*word:\s*"([^"]*)"[^}]*level:\s*"([^"]*)"[^}]*cats:\s*\[([^\]]*)\][^}]*\}/g);

if (wordMatches) {
    wordMatches.forEach(match => {
        const idMatch = match.match(/id:\s*(\d+)/);
        const wordMatch = match.match(/word:\s*"([^"]*)"/);
        const levelMatch = match.match(/level:\s*"([^"]*)"/);
        const catsMatch = match.match(/cats:\s*\[([^\]]*)\]/);
        
        if (idMatch && wordMatch && levelMatch && catsMatch) {
            const categories = catsMatch[1]
                .split(',')
                .map(cat => cat.trim().replace(/"/g, ''))
                .filter(cat => cat.length > 0);
                
            words.push({
                id: parseInt(idMatch[1]),
                word: wordMatch[1],
                level: levelMatch[1],
                categories: categories
            });
        }
    });
}

console.log('=== VOCABULARY ANALYSIS REPORT ===\n');

// Count words by level
const levelCounts = {};
const levelWords = {};
words.forEach(word => {
    if (!levelCounts[word.level]) {
        levelCounts[word.level] = 0;
        levelWords[word.level] = [];
    }
    levelCounts[word.level]++;
    levelWords[word.level].push(word.word);
});

console.log('CURRENT WORD DISTRIBUTION BY LEVEL:');
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
let totalWords = 0;
levels.forEach(level => {
    const count = levelCounts[level] || 0;
    const needed = 500 - count;
    totalWords += count;
    console.log(`${level}: ${count} words (need ${needed} more to reach 500)`);
});
console.log(`Total current words: ${totalWords}`);

// Check for duplicates
console.log('DUPLICATE DETECTION:');
const wordSet = new Set();
const duplicates = [];
words.forEach(word => {
    const lowerWord = word.word.toLowerCase();
    if (wordSet.has(lowerWord)) {
        duplicates.push(word.word);
    } else {
        wordSet.add(lowerWord);
    }
});

if (duplicates.length > 0) {
    console.log(`Found ${duplicates.length} duplicates:`);
    duplicates.forEach(dup => console.log(`- ${dup}`));
} else {
    console.log('No duplicates found ✓');
}
console.log();

// Category analysis
console.log('CATEGORY USAGE ANALYSIS:');
const categoryCount = {};
words.forEach(word => {
    word.categories.forEach(cat => {
        if (!categoryCount[cat]) {
            categoryCount[cat] = 0;
        }
        categoryCount[cat]++;
    });
});

const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

console.log('Top 15 most used categories:');
sortedCategories.forEach(([cat, count]) => {
    console.log(`${cat}: ${count} words`);
});
console.log();

// ID analysis
console.log('ID ANALYSIS:');
const ids = words.map(w => w.id).sort((a, b) => a - b);
const maxId = Math.max(...ids);
const nextId = maxId + 1;
console.log(`Highest current ID: ${maxId}`);
console.log(`Next available ID: ${nextId}`);
console.log();

// Level-specific word samples
console.log('SAMPLE WORDS BY LEVEL:');
levels.forEach(level => {
    if (levelWords[level] && levelWords[level].length > 0) {
        const samples = levelWords[level].slice(0, 5);
        console.log(`${level} samples: ${samples.join(', ')}`);
    }
});

console.log('\n=== END ANALYSIS ===');