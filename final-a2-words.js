// Add final 6 A2 words to reach exactly 200
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

const vm = new VocabularyManager();

const finalA2Words = [
    { word: "surprise", pos: "n./v.", thai: "ความประหลาดใจ / ทำให้ประหลาดใจ", definition: "unexpected thing", hint: "unexpected", level: "A2", cats: ["daily"], examples: [{ en: "What a nice surprise!", th: "ช่างเป็นเซอร์ไพรส์ที่ดี!" }] },
    { word: "gift", pos: "n.", thai: "ของขวัญ", definition: "present for someone", hint: "present", level: "A2", cats: ["social"], examples: [{ en: "I bought a gift for mom.", th: "ฉันซื้อของขวัญให้แม่" }] },
    { word: "party", pos: "n.", thai: "งานปาร์ตี้", definition: "celebration with friends", hint: "celebration", level: "A2", cats: ["social"], examples: [{ en: "Birthday party tonight.", th: "งานปาร์ตี้วันเกิดคืนนี้" }] },
    { word: "celebrate", pos: "v.", thai: "ฉลอง", definition: "have party for special day", hint: "party for", level: "A2", cats: ["social"], examples: [{ en: "Celebrate New Year.", th: "ฉลองปีใหม่" }] },
    { word: "invite", pos: "v.", thai: "เชิญ", definition: "ask someone to come", hint: "ask to come", level: "A2", cats: ["social"], examples: [{ en: "Invite friends to dinner.", th: "เชิญเพื่อนมากินข้าว" }] },
    { word: "guest", pos: "n.", thai: "แขก", definition: "person who visits", hint: "visitor", level: "A2", cats: ["social"], examples: [{ en: "We have guests tonight.", th: "คืนนี้เรามีแขก" }] }
];

// Add words to file
let vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const newWordEntries = [];
let addedCount = 0;

finalA2Words.forEach(wordData => {
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

fs.writeFileSync('flashcard-app/src/data/vocabulary.ts', newVocabularyContent);

console.log(`\n✅ Successfully added ${addedCount} final A2 words!`);

// Verify
const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const updatedMatches = updatedContent.match(/level:\s*"A2"/g);
console.log(`A2 level now has ${updatedMatches ? updatedMatches.length : 0} words total.`);