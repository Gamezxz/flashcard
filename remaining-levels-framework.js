// Framework for B1, B2, C1, C2 levels (150 words each)
// This demonstrates the structure and approach for completing the remaining 600 words

const VocabularyManager = require('./vocabulary-utils.js');

// B1 Level Words (Intermediate) - Sample of 20 words to demonstrate structure
const b1SampleWords = [
    // Work and career vocabulary
    { word: "career", pos: "n.", thai: "อาชีพ", definition: "job you do for long time", hint: "life work", cats: ["work"], examples: [{ en: "She has a successful career.", th: "เธอมีอาชีพที่ประสบความสำเร็จ" }] },
    { word: "profession", pos: "n.", thai: "อาชีพ", definition: "job requiring special training", hint: "skilled job", cats: ["work"], examples: [{ en: "Teaching is a noble profession.", th: "การสอนเป็นอาชีพที่สูงส่ง" }] },
    { word: "qualification", pos: "n.", thai: "คุณสมบัติ", definition: "skills needed for job", hint: "job skills", cats: ["work"], examples: [{ en: "He has the right qualifications.", th: "เขามีคุณสมบัติที่เหมาะสม" }] },
    
    // Academic vocabulary
    { word: "research", pos: "n./v.", thai: "การวิจัย / วิจัย", definition: "study to find new information", hint: "study deeply", cats: ["school"], examples: [{ en: "Research shows that exercise is good.", th: "การวิจัยแสดงว่าการออกกำลังกายดี" }] },
    { word: "experiment", pos: "n./v.", thai: "การทดลอง / ทดลอง", definition: "test to learn something", hint: "scientific test", cats: ["school"], examples: [{ en: "The experiment was successful.", th: "การทดลองสำเร็จ" }] },
    
    // Travel and culture
    { word: "culture", pos: "n.", thai: "วัฒนธรรม", definition: "way of life of people", hint: "people's way", cats: ["social"], examples: [{ en: "Thai culture is rich.", th: "วัฒนธรรมไทยมีความร่ำรวย" }] },
    { word: "tradition", pos: "n.", thai: "ประเพณี", definition: "customs passed down", hint: "old customs", cats: ["social"], examples: [{ en: "We follow family traditions.", th: "เราปฏิบัติตามประเพณีครอบครัว" }] },
    
    // Environment and nature
    { word: "environment", pos: "n.", thai: "สิ่งแวดล้อม", definition: "natural world around us", hint: "nature around", cats: ["nature"], examples: [{ en: "Protect the environment.", th: "ปกป้องสิ่งแวดล้อม" }] },
    { word: "pollution", pos: "n.", thai: "มลพิษ", definition: "harmful things in environment", hint: "dirty environment", cats: ["nature"], examples: [{ en: "Air pollution is a problem.", th: "มลพิษทางอากาศเป็นปัญหา" }] },
    
    // Technology and communication
    { word: "technology", pos: "n.", thai: "เทคโนโลยี", definition: "modern machines and methods", hint: "modern tools", cats: ["technology"], examples: [{ en: "Technology changes fast.", th: "เทคโนโลยีเปลี่ยนแปลงเร็ว" }] },
    { word: "communication", pos: "n.", thai: "การสื่อสาร", definition: "sharing information", hint: "share info", cats: ["technology"], examples: [{ en: "Good communication is important.", th: "การสื่อสารที่ดีสำคัญ" }] },
    
    // Personal development
    { word: "confidence", pos: "n.", thai: "ความมั่นใจ", definition: "belief in yourself", hint: "self belief", cats: ["daily"], examples: [{ en: "She speaks with confidence.", th: "เธอพูดด้วยความมั่นใจ" }] },
    { word: "patience", pos: "n.", thai: "ความอดทน", definition: "ability to wait calmly", hint: "wait calmly", cats: ["daily"], examples: [{ en: "Teaching requires patience.", th: "การสอนต้องใช้ความอดทน" }] },
    
    // Relationships and social
    { word: "relationship", pos: "n.", thai: "ความสัมพันธ์", definition: "connection between people", hint: "people connection", cats: ["social"], examples: [{ en: "They have a good relationship.", th: "พวกเขามีความสัมพันธ์ที่ดี" }] },
    { word: "community", pos: "n.", thai: "ชุมชน", definition: "group of people living together", hint: "people group", cats: ["social"], examples: [{ en: "Our community is friendly.", th: "ชุมชนของเราเป็นมิตร" }] },
    
    // Problem solving
    { word: "solution", pos: "n.", thai: "วิธีแก้ปัญหา", definition: "answer to a problem", hint: "problem answer", cats: ["work"], examples: [{ en: "We found a good solution.", th: "เราหาวิธีแก้ปัญหาที่ดีได้" }] },
    { word: "decision", pos: "n.", thai: "การตัดสินใจ", definition: "choice you make", hint: "choice made", cats: ["daily"], examples: [{ en: "It was a difficult decision.", th: "เป็นการตัดสินใจที่ยาก" }] },
    
    // Abstract concepts
    { word: "purpose", pos: "n.", thai: "จุดประสงค์", definition: "reason for doing something", hint: "why do", cats: ["daily"], examples: [{ en: "What is your purpose?", th: "จุดประสงค์ของคุณคืออะไร" }] },
    { word: "advantage", pos: "n.", thai: "ข้อได้เปรียบ", definition: "good point or benefit", hint: "good point", cats: ["daily"], examples: [{ en: "The advantage is clear.", th: "ข้อได้เปรียบชัดเจน" }] },
    { word: "disadvantage", pos: "n.", thai: "ข้อเสียเปรียบ", definition: "bad point or problem", hint: "bad point", cats: ["daily"], examples: [{ en: "Every plan has disadvantages.", th: "แผนทุกแผนมีข้อเสียเปรียบ" }] }
];

// B2 Level Words (Upper-Intermediate) - Sample of 15 words
const b2SampleWords = [
    { word: "analysis", pos: "n.", thai: "การวิเคราะห์", definition: "detailed examination", hint: "detailed study", cats: ["work", "school"], examples: [{ en: "The analysis shows interesting results.", th: "การวิเคราะห์แสดงผลที่น่าสนใจ" }] },
    { word: "strategy", pos: "n.", thai: "กลยุทธ์", definition: "plan to achieve goal", hint: "master plan", cats: ["work"], examples: [{ en: "Our marketing strategy works well.", th: "กลยุทธ์การตลาดของเราได้ผลดี" }] },
    { word: "efficiency", pos: "n.", thai: "ประสิทธิภาพ", definition: "doing things well without waste", hint: "work well", cats: ["work"], examples: [{ en: "Improve efficiency at work.", th: "เพิ่มประสิทธิภาพในการทำงาน" }] },
    { word: "innovation", pos: "n.", thai: "นวัตกรรม", definition: "new ideas or methods", hint: "new invention", cats: ["work", "technology"], examples: [{ en: "Innovation drives progress.", th: "นวัตกรรมขับเคลื่อนความก้าวหน้า" }] },
    { word: "sustainability", pos: "n.", thai: "ความยั่งยืน", definition: "ability to continue long term", hint: "long term", cats: ["nature"], examples: [{ en: "Environmental sustainability is crucial.", th: "ความยั่งยืนด้านสิ่งแวดล้อมสำคัญ" }] },
    { word: "diversity", pos: "n.", thai: "ความหลากหลาย", definition: "variety of different things", hint: "many different", cats: ["social"], examples: [{ en: "Cultural diversity enriches society.", th: "ความหลากหลายทางวัฒนธรรมทำให้สังคมร่ำรวย" }] },
    { word: "perspective", pos: "n.", thai: "มุมมอง", definition: "way of thinking about something", hint: "viewpoint", cats: ["daily"], examples: [{ en: "From my perspective, it's correct.", th: "จากมุมมองของฉัน มันถูกต้อง" }] },
    { word: "consequence", pos: "n.", thai: "ผลที่ตามมา", definition: "result of an action", hint: "result", cats: ["daily"], examples: [{ en: "Every action has consequences.", th: "การกระทำทุกอย่างมีผลที่ตามมา" }] },
    { word: "phenomenon", pos: "n.", thai: "ปรากฏการณ์", definition: "observable event or fact", hint: "observable event", cats: ["school"], examples: [{ en: "This is an interesting phenomenon.", th: "นี่เป็นปรากฏการณ์ที่น่าสนใจ" }] },
    { word: "hypothesis", pos: "n.", thai: "สมมติฐาน", definition: "idea to be tested", hint: "test idea", cats: ["school"], examples: [{ en: "The hypothesis needs testing.", th: "สมมติฐานต้องการการทดสอบ" }] },
    { word: "methodology", pos: "n.", thai: "วิธีการ", definition: "system of methods", hint: "method system", cats: ["work", "school"], examples: [{ en: "Our methodology is proven.", th: "วิธีการของเราได้รับการพิสูจน์แล้ว" }] },
    { word: "implementation", pos: "n.", thai: "การนำไปปฏิบัติ", definition: "putting plan into action", hint: "do the plan", cats: ["work"], examples: [{ en: "Implementation takes time.", th: "การนำไปปฏิบัติใช้เวลา" }] },
    { word: "collaboration", pos: "n.", thai: "การร่วมมือ", definition: "working together", hint: "work together", cats: ["work"], examples: [{ en: "Collaboration improves results.", th: "การร่วมมือปรับปรุงผลลัพธ์" }] },
    { word: "negotiation", pos: "n.", thai: "การเจรจา", definition: "discussion to reach agreement", hint: "discuss deal", cats: ["work"], examples: [{ en: "The negotiation was successful.", th: "การเจรจาสำเร็จ" }] },
    { word: "compromise", pos: "n./v.", thai: "การประนีประนอม / ประนีประนอม", definition: "agreement where both sides give up something", hint: "meet halfway", cats: ["social"], examples: [{ en: "We reached a compromise.", th: "เราบรรลุการประนีประนอม" }] }
];

// C1 Level Words (Advanced) - Sample of 10 words
const c1SampleWords = [
    { word: "sophisticated", pos: "adj.", thai: "ซับซ้อน / ล้ำสมัย", definition: "complex and advanced", hint: "advanced complex", cats: ["work"], examples: [{ en: "A sophisticated system.", th: "ระบบที่ซับซ้อน" }] },
    { word: "comprehensive", pos: "adj.", thai: "ครอบคลุม", definition: "including everything", hint: "complete coverage", cats: ["work"], examples: [{ en: "A comprehensive report.", th: "รายงานที่ครอบคลุม" }] },
    { word: "substantial", pos: "adj.", thai: "มาก / เป็นจำนวนมาก", definition: "large in amount", hint: "large amount", cats: ["work"], examples: [{ en: "Substantial progress made.", th: "ความก้าวหน้าอย่างมาก" }] },
    { word: "unprecedented", pos: "adj.", thai: "ไม่เคยมีมาก่อน", definition: "never happened before", hint: "never before", cats: ["daily"], examples: [{ en: "An unprecedented situation.", th: "สถานการณ์ที่ไม่เคยมีมาก่อน" }] },
    { word: "inevitable", pos: "adj.", thai: "หลีกเลี่ยงไม่ได้", definition: "certain to happen", hint: "must happen", cats: ["daily"], examples: [{ en: "Change is inevitable.", th: "การเปลี่ยนแปลงหลีกเลี่ยงไม่ได้" }] },
    { word: "paradigm", pos: "n.", thai: "กระบวนทัศน์", definition: "way of thinking about something", hint: "thinking model", cats: ["school"], examples: [{ en: "A new paradigm emerges.", th: "กระบวนทัศน์ใหม่เกิดขึ้น" }] },
    { word: "synthesis", pos: "n.", thai: "การสังเคราะห์", definition: "combination of ideas", hint: "combine ideas", cats: ["school"], examples: [{ en: "A synthesis of theories.", th: "การสังเคราะห์ทฤษฎี" }] },
    { word: "ambiguity", pos: "n.", thai: "ความคลุมเครือ", definition: "unclear meaning", hint: "unclear", cats: ["work"], examples: [{ en: "Avoid ambiguity in writing.", th: "หลีกเลี่ยงความคลุมเครือในการเขียน" }] },
    { word: "hierarchy", pos: "n.", thai: "ลำดับชั้น", definition: "system of ranks", hint: "rank system", cats: ["work"], examples: [{ en: "Company hierarchy is clear.", th: "ลำดับชั้นของบริษัทชัดเจน" }] },
    { word: "infrastructure", pos: "n.", thai: "โครงสร้างพื้นฐาน", definition: "basic systems needed", hint: "basic systems", cats: ["work"], examples: [{ en: "Good infrastructure supports growth.", th: "โครงสร้างพื้นฐานที่ดีสนับสนุนการเติบโต" }] }
];

// C2 Level Words (Proficiency) - Sample of 10 words
const c2SampleWords = [
    { word: "quintessential", pos: "adj.", thai: "เป็นแก่นแท้", definition: "most typical example", hint: "perfect example", cats: ["daily"], examples: [{ en: "The quintessential gentleman.", th: "สุภาพบุรุษแท้" }] },
    { word: "ubiquitous", pos: "adj.", thai: "แพร่หลายทุกหนทุกแห่ง", definition: "present everywhere", hint: "everywhere", cats: ["daily"], examples: [{ en: "Smartphones are ubiquitous.", th: "สมาร์ทโฟนแพร่หลายทุกหนทุกแห่ง" }] },
    { word: "meticulous", pos: "adj.", thai: "พิถีพิถัน", definition: "very careful about details", hint: "very detailed", cats: ["work"], examples: [{ en: "Meticulous attention to detail.", th: "ใส่ใจรายละเอียดอย่างพิถีพิถัน" }] },
    { word: "eloquent", pos: "adj.", thai: "คล่องแคล่วในการพูด", definition: "speaking beautifully", hint: "beautiful speech", cats: ["social"], examples: [{ en: "An eloquent speaker.", th: "นักพูดที่คล่องแคล่ว" }] },
    { word: "pragmatic", pos: "adj.", thai: "ปฏิบัติได้จริง", definition: "practical and realistic", hint: "practical", cats: ["work"], examples: [{ en: "A pragmatic approach.", th: "แนวทางที่ปฏิบัติได้จริง" }] },
    { word: "nuance", pos: "n.", thai: "ความแตกต่างเล็กน้อย", definition: "subtle difference", hint: "subtle difference", cats: ["daily"], examples: [{ en: "Understand the nuances.", th: "เข้าใจความแตกต่างเล็กน้อย" }] },
    { word: "dichotomy", pos: "n.", thai: "การแบ่งออกเป็นสองส่วน", definition: "division into two parts", hint: "two parts", cats: ["school"], examples: [{ en: "A false dichotomy.", th: "การแบ่งแยกที่ผิด" }] },
    { word: "epitome", pos: "n.", thai: "ตัวอย่างที่สมบูรณ์แบบ", definition: "perfect example", hint: "perfect example", cats: ["daily"], examples: [{ en: "The epitome of elegance.", th: "ตัวอย่างที่สมบูรณ์แบบของความสง่างาม" }] },
    { word: "juxtaposition", pos: "n.", thai: "การวางเคียงข้างกัน", definition: "placing things side by side", hint: "side by side", cats: ["school"], examples: [{ en: "An interesting juxtaposition.", th: "การวางเคียงข้างกันที่น่าสนใจ" }] },
    { word: "serendipity", pos: "n.", thai: "ความบังเอิญที่ดี", definition: "pleasant surprise", hint: "lucky accident", cats: ["daily"], examples: [{ en: "A moment of serendipity.", th: "ช่วงเวลาแห่งความบังเอิญที่ดี" }] }
];

console.log('=== REMAINING LEVELS FRAMEWORK ===');
console.log(`B1 Sample Words: ${b1SampleWords.length} (need 150 total)`);
console.log(`B2 Sample Words: ${b2SampleWords.length} (need 150 total)`);
console.log(`C1 Sample Words: ${c1SampleWords.length} (need 150 total)`);
console.log(`C2 Sample Words: ${c2SampleWords.length} (need 150 total)`);
console.log('\nFramework demonstrates the structure and quality for completing remaining 600 words.');

// Export for potential use
module.exports = {
    b1SampleWords,
    b2SampleWords,
    c1SampleWords,
    c2SampleWords
};