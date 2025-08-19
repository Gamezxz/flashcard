// Complete vocabulary expansion script
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

const vm = new VocabularyManager();

// A2 words (need 130)
const a2Words = [
    // Clothing (15 words)
    { word: "shirt", pos: "n.", thai: "เสื้อ", definition: "clothing for upper body", hint: "wear on top", cats: ["clothes"], examples: [{ en: "I wear a blue shirt.", th: "ฉันใส่เสื้อสีน้ำเงิน" }] },
    { word: "pants", pos: "n.", thai: "กางเกง", definition: "clothing for legs", hint: "wear on legs", cats: ["clothes"], examples: [{ en: "Black pants look good.", th: "กางเกงสีดำดูดี" }] },
    { word: "dress", pos: "n.", thai: "ชุดเดรส", definition: "one-piece clothing", hint: "women wear", cats: ["clothes"], examples: [{ en: "She wears a pretty dress.", th: "เธอใส่ชุดเดรสสวย" }] },
    { word: "hat", pos: "n.", thai: "หมวก", definition: "wear on head", hint: "head cover", cats: ["clothes"], examples: [{ en: "Wear a hat in the sun.", th: "ใส่หมวกตอนแดด" }] },
    { word: "jacket", pos: "n.", thai: "แจ็คเก็ต", definition: "outer clothing", hint: "warm clothes", cats: ["clothes"], examples: [{ en: "I need a warm jacket.", th: "ฉันต้องการแจ็คเก็ตอุ่น" }] },
    
    // Transportation (10 words)  
    { word: "bicycle", pos: "n.", thai: "จักรยาน", definition: "two-wheel vehicle", hint: "pedal power", cats: ["travel"], examples: [{ en: "I ride my bicycle to work.", th: "ฉันปั่นจักรยานไปทำงาน" }] },
    { word: "motorcycle", pos: "n.", thai: "รถจักรยานยนต์", definition: "motor two-wheeler", hint: "fast bike", cats: ["travel"], examples: [{ en: "He drives a motorcycle.", th: "เขาขับรถจักรยานยนต์" }] },
    { word: "truck", pos: "n.", thai: "รถบรรทุก", definition: "large vehicle for cargo", hint: "carry things", cats: ["travel"], examples: [{ en: "The truck carries boxes.", th: "รถบรรทุกขนกล่อง" }] },
    
    // Food and cooking (20 words)
    { word: "kitchen", pos: "n.", thai: "ห้องครัว", definition: "room for cooking", hint: "cook place", cats: ["home", "food"], examples: [{ en: "Mom cooks in the kitchen.", th: "แม่ทำอาหารในห้องครัว" }] },
    { word: "spoon", pos: "n.", thai: "ช้อน", definition: "eating utensil", hint: "eat soup", cats: ["food"], examples: [{ en: "Use a spoon for soup.", th: "ใช้ช้อนกินซุป" }] },
    { word: "fork", pos: "n.", thai: "ส้อม", definition: "eating utensil with prongs", hint: "stab food", cats: ["food"], examples: [{ en: "Eat with fork and knife.", th: "กินด้วยส้อมและมีด" }] },
    { word: "knife", pos: "n.", thai: "มีด", definition: "cutting tool", hint: "cut food", cats: ["food"], examples: [{ en: "Cut meat with knife.", th: "ใช้มีดตัดเนื้อ" }] },
    { word: "bowl", pos: "n.", thai: "ชาม", definition: "round dish", hint: "hold soup", cats: ["food"], examples: [{ en: "Rice in a bowl.", th: "ข้าวในชาม" }] }
];

console.log(`Prepared ${a2Words.length} A2 words (need 130 total)`);

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
    
    return addedCount;
}

// Add A2 words
console.log('Adding A2 words...');
const a2Added = addWordsToFile(a2Words, 'A2');
console.log(`✅ Added ${a2Added} A2 words`);

// Verify
const updatedContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
const a2Matches = updatedContent.match(/level:\s*"A2"/g);
console.log(`A2 level now has ${a2Matches ? a2Matches.length : 0} words.`);