// Script to add all remaining vocabulary levels (A2-C2)
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

// Import word lists
const a2Words = require('./a2-words.js');

const vm = new VocabularyManager();

// Function to add words to vocabulary file
function addWordsToFile(words, level) {
    let vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
    const newWordEntries = [];
    let addedCount = 0;

    words.forEach(wordData => {
        try {
            const word = vm.createWordObject({
                ...wordData,
                level: level
            });
            
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
    
    fs.writeFileSync('flashcard-app/src/data/vocabulary.ts', newVocabularyContent);
    
    return addedCount;
}

console.log('Adding A2 words...');
const a2Added = addWordsToFile(a2Words, 'A2');
console.log(`✅ Added ${a2Added} A2 words`);

// Verify final count
const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const a2Matches = updatedContent.match(/level:\s*"A2"/g);
console.log(`A2 level now has ${a2Matches ? a2Matches.length : 0} words.`);

// Run analysis to see current state
console.log('\nRunning final analysis...');
require('./vocabulary-analysis.js');