// Add final 2 A1 words to reach exactly 200
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

const vm = new VocabularyManager();

const finalWords = [
    { 
        word: "here", 
        pos: "adv.", 
        thai: "ที่นี่", 
        definition: "in this place", 
        hint: "this place", 
        level: "A1",
        cats: ["daily"], 
        examples: [{ en: "Come here please.", th: "มาที่นี่" }] 
    },
    { 
        word: "there", 
        pos: "adv.", 
        thai: "ที่นั่น", 
        definition: "in that place", 
        hint: "that place", 
        level: "A1",
        cats: ["daily"], 
        examples: [{ en: "Go there now.", th: "ไปที่นั่นเดี๋ยวนี้" }] 
    }
];

// Read current vocabulary file
let vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');

// Create new word entries
const newWordEntries = [];
let addedCount = 0;

finalWords.forEach(wordData => {
    try {
        const word = vm.createWordObject(wordData);
        
        const wordEntry = `    {
        id: ${word.id},
        word: "${word.word}",
        pos: "${word.pos}",
        thai: "${word.thai}",
        definition: "${word.definition}",
        hint: "${word.hint}",
        level: "${word.level}",
        cats: [
            ${word.cats.map(cat => `"${cat}"`).join(', ')}
        ],
        examples: [
            ${word.examples.map(ex => `{
                en: "${ex.en}",
                th: "${ex.th}"
            }`).join(',\n            ')}
        ]
    }`;
        
        newWordEntries.push(wordEntry);
        addedCount++;
        console.log(`✓ Prepared: ${word.word} (ID: ${word.id})`);
        
    } catch (error) {
        console.error(`✗ Error with word "${wordData.word}": ${error.message}`);
    }
});

// Insert new words
const insertionPoint = vocabularyContent.lastIndexOf('    }');
const nextBracePoint = vocabularyContent.indexOf('\n];', insertionPoint);

const beforeInsertion = vocabularyContent.substring(0, nextBracePoint);
const afterInsertion = vocabularyContent.substring(nextBracePoint);

const newVocabularyContent = beforeInsertion + ',\n' + newWordEntries.join(',\n') + afterInsertion;

// Write the updated file
fs.writeFileSync('flashcard-app/src/data/vocabulary.ts', newVocabularyContent);

console.log(`\n✅ Successfully added ${addedCount} final A1 words!`);

// Verify
const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const updatedMatches = updatedContent.match(/level:\s*"A1"/g);
console.log(`A1 level now has ${updatedMatches ? updatedMatches.length : 0} words total.`);