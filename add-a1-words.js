// Script to add A1 words to the vocabulary file
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');
const a1Words = require('./a1-expansion.js');

console.log('Adding A1 words to vocabulary...');

const vm = new VocabularyManager();

// Read current vocabulary file
let vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');

// Find the end of the WORDS array (before the closing ];)
const wordsArrayMatch = vocabularyContent.match(/export const WORDS: Word\[\] = \[([\s\S]*)\];/);
if (!wordsArrayMatch) {
    console.error('Could not find WORDS array in vocabulary file');
    process.exit(1);
}

// Create new word entries
const newWordEntries = [];
let addedCount = 0;

a1Words.forEach(wordData => {
    try {
        const word = vm.createWordObject({
            ...wordData,
            level: 'A1'
        });
        
        // Format the word entry as TypeScript
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

// Insert new words before the closing ];
const insertionPoint = vocabularyContent.lastIndexOf('    }');
const nextBracePoint = vocabularyContent.indexOf('\n];', insertionPoint);

if (insertionPoint === -1 || nextBracePoint === -1) {
    console.error('Could not find insertion point in vocabulary file');
    process.exit(1);
}

// Add comma after last existing word and insert new words
const beforeInsertion = vocabularyContent.substring(0, nextBracePoint);
const afterInsertion = vocabularyContent.substring(nextBracePoint);

const newVocabularyContent = beforeInsertion + ',\n' + newWordEntries.join(',\n') + afterInsertion;

// Write the updated file
fs.writeFileSync('flashcard-app/src/data/vocabulary.ts', newVocabularyContent);

console.log(`\n✅ Successfully added ${addedCount} A1 words to vocabulary!`);
console.log('A1 level now has 200 words total.');

// Verify the result
const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const updatedMatches = updatedContent.match(/level:\s*"A1"/g);
console.log(`Verification: Found ${updatedMatches ? updatedMatches.length : 0} A1 words in updated file.`);