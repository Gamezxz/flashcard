// A1 Level Vocabulary Expansion - Adding 78 words to reach 200 total
const VocabularyManager = require('./vocabulary-utils.js');

// Complete list of 78 A1 words to add
const a1WordsToAdd = [
    // Numbers (10 words)
    { word: "zero", pos: "num.", thai: "ศูนย์", definition: "the number 0", hint: "nothing", cats: ["daily"], examples: [{ en: "I have zero money.", th: "ฉันมีเงินศูนย์บาท" }] },
    { word: "one", pos: "num.", thai: "หนึ่ง", definition: "the number 1", hint: "first", cats: ["daily"], examples: [{ en: "I have one apple.", th: "ฉันมีแอปเปิลหนึ่งลูก" }] },
    { word: "two", pos: "num.", thai: "สอง", definition: "the number 2", hint: "pair", cats: ["daily"], examples: [{ en: "Two cats are playing.", th: "แมวสองตัวกำลังเล่น" }] },
    { word: "three", pos: "num.", thai: "สาม", definition: "the number 3", hint: "trio", cats: ["daily"], examples: [{ en: "I see three birds.", th: "ฉันเห็นนกสามตัว" }] },
    { word: "four", pos: "num.", thai: "สี่", definition: "the number 4", hint: "quad", cats: ["daily"], examples: [{ en: "Four people are here.", th: "มีคนสี่คนอยู่ที่นี่" }] },
    { word: "five", pos: "num.", thai: "ห้า", definition: "the number 5", hint: "hand", cats: ["daily"], examples: [{ en: "Five fingers on hand.", th: "มือมีห้านิ้ว" }] },
    { word: "six", pos: "num.", thai: "หก", definition: "the number 6", hint: "half dozen", cats: ["daily"], examples: [{ en: "Six eggs in the box.", th: "มีไข่หกฟองในกล่อง" }] },
    { word: "seven", pos: "num.", thai: "เจ็ด", definition: "the number 7", hint: "week days", cats: ["daily"], examples: [{ en: "Seven days a week.", th: "หนึ่งสัปดาห์มีเจ็ดวัน" }] },
    { word: "eight", pos: "num.", thai: "แปด", definition: "the number 8", hint: "spider legs", cats: ["daily"], examples: [{ en: "Eight o'clock.", th: "เวลาแปดโมง" }] },
    { word: "nine", pos: "num.", thai: "เก้า", definition: "the number 9", hint: "before ten", cats: ["daily"], examples: [{ en: "Nine students in class.", th: "มีนักเรียนเก้าคนในชั้น" }] },
    
    // Colors (8 words)
    { word: "red", pos: "adj.", thai: "แดง", definition: "color of blood", hint: "stop sign", cats: ["daily"], examples: [{ en: "The apple is red.", th: "แอปเปิลเป็นสีแดง" }] },
    { word: "blue", pos: "adj.", thai: "น้ำเงิน", definition: "color of sky", hint: "ocean", cats: ["daily"], examples: [{ en: "The sky is blue.", th: "ท้องฟ้าเป็นสีน้ำเงิน" }] },
    { word: "green", pos: "adj.", thai: "เขียว", definition: "color of grass", hint: "nature", cats: ["daily"], examples: [{ en: "Green leaves on tree.", th: "ใบไม้สีเขียวบนต้นไม้" }] },
    { word: "yellow", pos: "adj.", thai: "เหลือง", definition: "color of sun", hint: "banana", cats: ["daily"], examples: [{ en: "Yellow banana.", th: "กล้วยสีเหลือง" }] },
    { word: "black", pos: "adj.", thai: "ดำ", definition: "darkest color", hint: "night", cats: ["daily"], examples: [{ en: "Black cat.", th: "แมวสีดำ" }] },
    { word: "white", pos: "adj.", thai: "ขาว", definition: "lightest color", hint: "snow", cats: ["daily"], examples: [{ en: "White shirt.", th: "เสื้อสีขาว" }] },
    { word: "brown", pos: "adj.", thai: "น้ำตาล", definition: "color of wood", hint: "chocolate", cats: ["daily"], examples: [{ en: "Brown dog.", th: "สุนัขสีน้ำตาล" }] },
    { word: "pink", pos: "adj.", thai: "ชมพู", definition: "light red color", hint: "flowers", cats: ["daily"], examples: [{ en: "Pink flowers.", th: "ดอกไม้สีชมพู" }] },
    
    // Family (8 words)
    { word: "mother", pos: "n.", thai: "แม่", definition: "female parent", hint: "mom", cats: ["family"], examples: [{ en: "My mother is kind.", th: "แม่ของฉันใจดี" }] },
    { word: "father", pos: "n.", thai: "พ่อ", definition: "male parent", hint: "dad", cats: ["family"], examples: [{ en: "My father works hard.", th: "พ่อของฉันทำงานหนัก" }] },
    { word: "sister", pos: "n.", thai: "พี่สาว/น้องสาว", definition: "female sibling", hint: "girl sibling", cats: ["family"], examples: [{ en: "My sister is tall.", th: "พี่สาวของฉันสูง" }] },
    { word: "brother", pos: "n.", thai: "พี่ชาย/น้องชาย", definition: "male sibling", hint: "boy sibling", cats: ["family"], examples: [{ en: "My brother plays football.", th: "พี่ชายของฉันเล่นฟุตบอล" }] },
    { word: "child", pos: "n.", thai: "เด็ก", definition: "young person", hint: "kid", cats: ["family"], examples: [{ en: "The child is happy.", th: "เด็กคนนั้นมีความสุข" }] },
    { word: "baby", pos: "n.", thai: "ทารก", definition: "very young child", hint: "infant", cats: ["family"], examples: [{ en: "The baby is sleeping.", th: "ทารกกำลังนอน" }] },
    { word: "family", pos: "n.", thai: "ครอบครัว", definition: "parents and children", hint: "relatives", cats: ["family"], examples: [{ en: "I love my family.", th: "ฉันรักครอบครัว" }] },
    { word: "friend", pos: "n.", thai: "เพื่อน", definition: "person you like", hint: "buddy", cats: ["social"], examples: [{ en: "She is my friend.", th: "เธอเป็นเพื่อนฉัน" }] }
];

// Continue with more A1 words
const moreA1Words = [
    // Body parts (8 words)
    { word: "head", pos: "n.", thai: "หัว", definition: "top part of body", hint: "brain", cats: ["daily", "health"], examples: [{ en: "My head hurts.", th: "หัวฉันปวด" }] },
    { word: "eye", pos: "n.", thai: "ตา", definition: "organ for seeing", hint: "vision", cats: ["daily", "health"], examples: [{ en: "Blue eyes.", th: "ตาสีน้ำเงิน" }] },
    { word: "nose", pos: "n.", thai: "จมูก", definition: "organ for smelling", hint: "smell", cats: ["daily", "health"], examples: [{ en: "Big nose.", th: "จมูกใหญ่" }] },
    { word: "mouth", pos: "n.", thai: "ปาก", definition: "organ for eating", hint: "talk", cats: ["daily", "health"], examples: [{ en: "Open your mouth.", th: "อ้าปาก" }] },
    { word: "hand", pos: "n.", thai: "มือ", definition: "part with fingers", hint: "grab", cats: ["daily", "health"], examples: [{ en: "Wash your hands.", th: "ล้างมือ" }] },
    { word: "foot", pos: "n.", thai: "เท้า", definition: "part for walking", hint: "walk", cats: ["daily", "health"], examples: [{ en: "My foot is big.", th: "เท้าฉันใหญ่" }] },
    { word: "hair", pos: "n.", thai: "ผม", definition: "grows on head", hint: "on head", cats: ["daily", "health"], examples: [{ en: "Long black hair.", th: "ผมยาวสีดำ" }] },
    { word: "face", pos: "n.", thai: "หน้า", definition: "front of head", hint: "eyes nose mouth", cats: ["daily", "health"], examples: [{ en: "Pretty face.", th: "หน้าสวย" }] },
    
    // Basic verbs (12 words)
    { word: "go", pos: "v.", thai: "ไป", definition: "move to place", hint: "leave", cats: ["daily"], examples: [{ en: "I go to school.", th: "ฉันไปโรงเรียน" }] },
    { word: "come", pos: "v.", thai: "มา", definition: "move to here", hint: "arrive", cats: ["daily"], examples: [{ en: "Come here please.", th: "มาที่นี่" }] },
    { word: "see", pos: "v.", thai: "เห็น", definition: "look with eyes", hint: "vision", cats: ["daily"], examples: [{ en: "I see a cat.", th: "ฉันเห็นแมว" }] },
    { word: "hear", pos: "v.", thai: "ได้ยิน", definition: "listen with ears", hint: "sound", cats: ["daily"], examples: [{ en: "I hear music.", th: "ฉันได้ยินเพลง" }] },
    { word: "eat", pos: "v.", thai: "กิน", definition: "put food in mouth", hint: "food", cats: ["daily", "food"], examples: [{ en: "I eat rice.", th: "ฉันกินข้าว" }] },
    { word: "drink", pos: "v.", thai: "ดื่ม", definition: "take liquid", hint: "water", cats: ["daily", "food"], examples: [{ en: "Drink water.", th: "ดื่มน้ำ" }] },
    { word: "sleep", pos: "v.", thai: "นอน", definition: "rest with closed eyes", hint: "bed", cats: ["daily", "health"], examples: [{ en: "I sleep at night.", th: "ฉันนอนตอนกลางคืน" }] },
    { word: "walk", pos: "v.", thai: "เดิน", definition: "move on foot", hint: "steps", cats: ["daily", "health"], examples: [{ en: "Walk slowly.", th: "เดินช้าๆ" }] },
    { word: "run", pos: "v.", thai: "วิ่ง", definition: "move fast on foot", hint: "fast walk", cats: ["daily", "health"], examples: [{ en: "Run fast.", th: "วิ่งเร็ว" }] },
    { word: "sit", pos: "v.", thai: "นั่ง", definition: "rest on chair", hint: "chair", cats: ["daily"], examples: [{ en: "Sit down please.", th: "นั่งลง" }] },
    { word: "stand", pos: "v.", thai: "ยืน", definition: "be upright", hint: "not sit", cats: ["daily"], examples: [{ en: "Stand up.", th: "ยืนขึ้น" }] },
    { word: "like", pos: "v.", thai: "ชอบ", definition: "enjoy something", hint: "enjoy", cats: ["daily"], examples: [{ en: "I like pizza.", th: "ฉันชอบพิซซ่า" }] },
    
    // Basic adjectives (10 words)
    { word: "big", pos: "adj.", thai: "ใหญ่", definition: "large size", hint: "not small", cats: ["daily"], examples: [{ en: "Big house.", th: "บ้านใหญ่" }] },
    { word: "small", pos: "adj.", thai: "เล็ก", definition: "little size", hint: "not big", cats: ["daily"], examples: [{ en: "Small cat.", th: "แมวเล็ก" }] },
    { word: "good", pos: "adj.", thai: "ดี", definition: "high quality", hint: "not bad", cats: ["daily"], examples: [{ en: "Good food.", th: "อาหารดี" }] },
    { word: "bad", pos: "adj.", thai: "แย่", definition: "poor quality", hint: "not good", cats: ["daily"], examples: [{ en: "Bad weather.", th: "อากาศแย่" }] },
    { word: "new", pos: "adj.", thai: "ใหม่", definition: "recently made", hint: "not old", cats: ["daily"], examples: [{ en: "New car.", th: "รถใหม่" }] },
    { word: "old", pos: "adj.", thai: "เก่า", definition: "not new", hint: "aged", cats: ["daily"], examples: [{ en: "Old book.", th: "หนังสือเก่า" }] },
    { word: "long", pos: "adj.", thai: "ยาว", definition: "great length", hint: "not short", cats: ["daily"], examples: [{ en: "Long hair.", th: "ผมยาว" }] },
    { word: "short", pos: "adj.", thai: "สั้น", definition: "small length", hint: "not long", cats: ["daily"], examples: [{ en: "Short dress.", th: "กระโปรงสั้น" }] },
    { word: "happy", pos: "adj.", thai: "มีความสุข", definition: "feeling joy", hint: "smile", cats: ["daily"], examples: [{ en: "I am happy.", th: "ฉันมีความสุข" }] },
    { word: "sad", pos: "adj.", thai: "เศร้า", definition: "feeling unhappy", hint: "cry", cats: ["daily"], examples: [{ en: "She looks sad.", th: "เธอดูเศร้า" }] },
    
    // Time and greetings (12 words)
    { word: "today", pos: "n.", thai: "วันนี้", definition: "this day", hint: "now", cats: ["time"], examples: [{ en: "Today is Monday.", th: "วันนี้วันจันทร์" }] },
    { word: "tomorrow", pos: "n.", thai: "พรุ่งนี้", definition: "next day", hint: "future", cats: ["time"], examples: [{ en: "See you tomorrow.", th: "เจอกันพรุ่งนี้" }] },
    { word: "yesterday", pos: "n.", thai: "เมื่อวาน", definition: "past day", hint: "before", cats: ["time"], examples: [{ en: "Yesterday was fun.", th: "เมื่อวานสนุก" }] },
    { word: "morning", pos: "n.", thai: "เช้า", definition: "early day", hint: "sunrise", cats: ["time"], examples: [{ en: "Good morning.", th: "สวัสดีตอนเช้า" }] },
    { word: "hello", pos: "int.", thai: "สวัสดี", definition: "greeting", hint: "hi", cats: ["social"], examples: [{ en: "Hello, how are you?", th: "สวัสดี เป็นอย่างไร" }] },
    { word: "goodbye", pos: "int.", thai: "ลาก่อน", definition: "farewell", hint: "bye", cats: ["social"], examples: [{ en: "Goodbye, see you.", th: "ลาก่อน เจอกันใหม่" }] },
    { word: "please", pos: "adv.", thai: "กรุณา", definition: "polite request", hint: "polite", cats: ["social"], examples: [{ en: "Please help me.", th: "กรุณาช่วยฉัน" }] },
    { word: "thank you", pos: "int.", thai: "ขอบคุณ", definition: "gratitude", hint: "thanks", cats: ["social"], examples: [{ en: "Thank you very much.", th: "ขอบคุณมาก" }] },
    { word: "sorry", pos: "int.", thai: "ขอโทษ", definition: "apology", hint: "apologize", cats: ["social"], examples: [{ en: "Sorry I'm late.", th: "ขอโทษที่มาสาย" }] },
    { word: "yes", pos: "adv.", thai: "ใช่", definition: "agreement", hint: "not no", cats: ["daily"], examples: [{ en: "Yes, I agree.", th: "ใช่ ฉันเห็นด้วย" }] },
    { word: "no", pos: "adv.", thai: "ไม่", definition: "disagreement", hint: "not yes", cats: ["daily"], examples: [{ en: "No, I don't want.", th: "ไม่ ฉันไม่ต้องการ" }] },
    { word: "name", pos: "n.", thai: "ชื่อ", definition: "what you are called", hint: "identity", cats: ["daily"], examples: [{ en: "My name is John.", th: "ฉันชื่อจอห์น" }] }
];

// Combine all A1 words (should be 78 total)
const allA1Words = [...a1WordsToAdd, ...moreA1Words];

console.log(`Total A1 words to add: ${allA1Words.length}`);

// Test the words if run directly
if (require.main === module) {
    const vm = new VocabularyManager();
    
    console.log('Testing A1 word creation...');
    
    try {
        // Test creating first 3 words
        const testWords = allA1Words.slice(0, 3);
        testWords.forEach(wordData => {
            const word = vm.createWordObject({
                ...wordData,
                level: 'A1'
            });
            console.log(`✓ Created: ${word.word} (ID: ${word.id})`);
        });
        console.log('A1 words ready for addition!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = allA1Words;

// Add 10 more words to reach exactly 78
const finalA1Words = [
    { word: "ten", pos: "num.", thai: "สิบ", definition: "the number 10", hint: "fingers", cats: ["daily"], examples: [{ en: "Ten fingers.", th: "สิบนิ้ว" }] },
    { word: "love", pos: "v.", thai: "รัก", definition: "care deeply", hint: "strong like", cats: ["daily"], examples: [{ en: "I love you.", th: "ฉันรักเธอ" }] },
    { word: "give", pos: "v.", thai: "ให้", definition: "hand to someone", hint: "present", cats: ["daily"], examples: [{ en: "Give me water.", th: "ให้น้ำฉัน" }] },
    { word: "get", pos: "v.", thai: "ได้", definition: "receive", hint: "obtain", cats: ["daily"], examples: [{ en: "I get a gift.", th: "ฉันได้ของขวัญ" }] },
    { word: "put", pos: "v.", thai: "วาง", definition: "place somewhere", hint: "place", cats: ["daily"], examples: [{ en: "Put it here.", th: "วางไว้ที่นี่" }] },
    { word: "money", pos: "n.", thai: "เงิน", definition: "coins and bills", hint: "cash", cats: ["money"], examples: [{ en: "I need money.", th: "ฉันต้องการเงิน" }] },
    { word: "time", pos: "n.", thai: "เวลา", definition: "hours and minutes", hint: "clock", cats: ["time"], examples: [{ en: "What time is it?", th: "กี่โมงแล้ว" }] },
    { word: "day", pos: "n.", thai: "วัน", definition: "24 hours", hint: "today", cats: ["time"], examples: [{ en: "Have a good day.", th: "ขอให้เป็นวันที่ดี" }] },
    { word: "year", pos: "n.", thai: "ปี", definition: "12 months", hint: "365 days", cats: ["time"], examples: [{ en: "This year is 2024.", th: "ปีนี้คือ 2024" }] },
    { word: "work", pos: "v./n.", thai: "ทำงาน / งาน", definition: "do job", hint: "job", cats: ["work"], examples: [{ en: "I work every day.", th: "ฉันทำงานทุกวัน" }] }
];

// Update the complete list
const completeA1Words = [...allA1Words, ...finalA1Words];
console.log(`Final A1 word count: ${completeA1Words.length}`);

module.exports = completeA1Words;