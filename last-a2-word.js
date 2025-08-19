// Add the very last A2 word to reach exactly 200
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

const vm = new VocabularyManager();

const lastWord = {
    word: "special", 
    pos: "adj.", 
    thai: "พิเศษ", 
    definition: "different from normal", 
    hint: "not ordinary", 
    level: "A2",
    cats: ["daily"], 
    examples: [{ en: "Today is a special day.", th: "วันนี้เป็นวันพิเศษ" }]
};

try {
    const word = vm.createWordObject(lastWord);
    
    let vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
    
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
    
    const insertionPoint = vocabularyContent.lastIndexOf('    }');
    const nextBracePoint = vocabularyContent.indexOf('\n];', insertionPoint);
    
    const beforeInsertion = vocabularyContent.substring(0, nextBracePoint);
    const afterInsertion = vocabularyContent.substring(nextBracePoint);
    
    const newVocabularyContent = beforeInsertion + ',\n' + wordEntry + afterInsertion;
    
    fs.writeFileSync('flashcard-app/src/data/vocabulary.ts', newVocabularyContent);
    
    console.log(`✅ Added final A2 word: ${word.word} (ID: ${word.id})`);
    
    // Verify
    const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
    const updatedMatches = updatedContent.match(/level:\s*"A2"/g);
    console.log(`A2 level now has ${updatedMatches ? updatedMatches.length : 0} words total.`);
    
} catch (error) {
    console.error(`Error: ${error.message}`);
}