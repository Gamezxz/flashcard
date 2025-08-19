// C2 Level Words (30 words - focused set)
const c2Words = [
    { word: "epistemological", pos: "adj.", thai: "เกี่ยวกับญาณวิทยา", definition: "relating to theory of knowledge", hint: "knowledge theory", cats: ["school"], examples: [{ en: "The epistemological framework guides research.", th: "กรอบญาณวิทยาแนะนำการวิจัย" }] },
    { word: "ontological", pos: "adj.", thai: "เกี่ยวกับอภิปรัชญา", definition: "relating to nature of being", hint: "existence nature", cats: ["school"], examples: [{ en: "Ontological questions explore existence.", th: "คำถามอภิปรัชญาสำรวจการมีอยู่" }] },
    { word: "phenomenological", pos: "adj.", thai: "เกี่ยวกับปรากฏการณ์วิทยา", definition: "relating to conscious experience", hint: "experience study", cats: ["school"], examples: [{ en: "Phenomenological research examines lived experience.", th: "การวิจัยปรากฏการณ์วิทยาตรวจสอบประสบการณ์ที่มีชีวิต" }] },
    { word: "hermeneutical", pos: "adj.", thai: "เกี่ยวกับการตีความ", definition: "relating to interpretation", hint: "interpretation method", cats: ["school"], examples: [{ en: "Hermeneutical analysis reveals meaning.", th: "การวิเคราะห์การตีความเผยความหมาย" }] },
    { word: "dialectical", pos: "adj.", thai: "เกี่ยวกับการโต้แย้ง", definition: "relating to logical discussion", hint: "logical debate", cats: ["school"], examples: [{ en: "Dialectical thinking resolves contradictions.", th: "การคิดแบบโต้แย้งแก้ไขความขัดแย้ง" }] },
    { word: "paradigmatic", pos: "adj.", thai: "เกี่ยวกับกระบวนทัศน์", definition: "serving as a model", hint: "model-like", cats: ["school"], examples: [{ en: "The paradigmatic shift transformed science.", th: "การเปลี่ยนแปลงกระบวนทัศน์เปลี่ยนวิทยาศาสตร์" }] },
    { word: "synecdoche", pos: "n.", thai: "การใช้ส่วนแทนทั้งหมด", definition: "part representing whole", hint: "part for whole", cats: ["school"], examples: [{ en: "All hands on deck uses synecdoche.", th: "มือทุกคนบนเรือใช้การใช้ส่วนแทนทั้งหมด" }] },
    { word: "metonymy", pos: "n.", thai: "การใช้คำแทนคำ", definition: "substituting associated word", hint: "word substitution", cats: ["school"], examples: [{ en: "The crown represents monarchy through metonymy.", th: "มงกุฎแทนระบอบกษัตริย์ผ่านการใช้คำแทนคำ" }] },
    { word: "chiasmus", pos: "n.", thai: "การจัดคำแบบไขว้", definition: "inverted parallel structure", hint: "crossed structure", cats: ["school"], examples: [{ en: "Ask not what your country can do for you uses chiasmus.", th: "อย่าถามว่าประเทศจะทำอะไรให้คุณใช้การจัดคำแบบไขว้" }] },
    { word: "oxymoron", pos: "n.", thai: "คำขัดแย้ง", definition: "contradictory terms combined", hint: "contradictory combination", cats: ["school"], examples: [{ en: "Deafening silence is an oxymoron.", th: "ความเงียบที่หูหนวกเป็นคำขัดแย้ง" }] },
    { word: "aphorism", pos: "n.", thai: "คำพังเพย", definition: "concise statement of truth", hint: "wise saying", cats: ["school"], examples: [{ en: "Time heals all wounds is an aphorism.", th: "เวลารักษาบาดแผลทั้งหมดเป็นคำพังเพย" }] },
    { word: "corollary", pos: "n.", thai: "ผลสืบเนื่อง", definition: "natural consequence", hint: "logical result", cats: ["school"], examples: [{ en: "Increased sales is a corollary of good marketing.", th: "ยอดขายที่เพิ่มขึ้นเป็นผลสืบเนื่องของการตลาดที่ดี" }] },
    { word: "syllogism", pos: "n.", thai: "การอนุมาน", definition: "logical reasoning form", hint: "logical argument", cats: ["school"], examples: [{ en: "The syllogism proves the conclusion.", th: "การอนุมานพิสูจน์บทสรุป" }] },
    { word: "sophistry", pos: "n.", thai: "การโต้แย้งเท็จ", definition: "plausible but fallacious reasoning", hint: "false reasoning", cats: ["school"], examples: [{ en: "The argument was mere sophistry.", th: "การโต้แย้งเป็นเพียงการโต้แย้งเท็จ" }] },
    { word: "casuistry", pos: "n.", thai: "การใช้เหตุผลเท็จ", definition: "specious moral reasoning", hint: "false moral reasoning", cats: ["school"], examples: [{ en: "Casuistry justifies unethical behavior.", th: "การใช้เหตุผลเท็จให้เหตุผลพฤติกรรมที่ไม่มีจริยธรรม" }] },
    { word: "equivocation", pos: "n.", thai: "การพูดคลุมเครือ", definition: "ambiguous language", hint: "unclear speech", cats: ["school"], examples: [{ en: "Politicians often use equivocation.", th: "นักการเมืองมักใช้การพูดคลุมเครือ" }] },
    { word: "prevarication", pos: "n.", thai: "การพูดเลี่ยง", definition: "evasive or misleading speech", hint: "evasive speech", cats: ["school"], examples: [{ en: "His prevarication avoided the truth.", th: "การพูดเลี่ยงของเขาหลีกเลี่ยงความจริง" }] },
    { word: "obfuscation", pos: "n.", thai: "การทำให้งุนงง", definition: "deliberate confusion", hint: "intentional confusion", cats: ["school"], examples: [{ en: "Legal obfuscation hides the truth.", th: "การทำให้งุนงงทางกฎหมายซ่อนความจริง" }] },
    { word: "circumlocution", pos: "n.", thai: "การพูดอ้อมค้อม", definition: "indirect way of speaking", hint: "roundabout speech", cats: ["school"], examples: [{ en: "His circumlocution avoided direct answers.", th: "การพูดอ้อมค้อมของเขาหลีกเลี่ยงคำตอบตรง" }] },
    { word: "euphemism", pos: "n.", thai: "การพูดอ้อมค้อม", definition: "mild expression for harsh reality", hint: "softened expression", cats: ["school"], examples: [{ en: "Passed away is a euphemism for died.", th: "เสียชีวิตเป็นการพูดอ้อมค้อมของตาย" }] },
    { word: "hyperbole", pos: "n.", thai: "การพูดเกินจริง", definition: "deliberate exaggeration", hint: "exaggeration", cats: ["school"], examples: [{ en: "I've told you a million times uses hyperbole.", th: "ฉันบอกคุณล้านครั้งแล้วใช้การพูดเกินจริง" }] },
    { word: "litotes", pos: "n.", thai: "การพูดลดทอน", definition: "deliberate understatement", hint: "understatement", cats: ["school"], examples: [{ en: "Not bad is litotes for very good.", th: "ไม่เลวเป็นการพูดลดทอนของดีมาก" }] },
    { word: "synesthesia", pos: "n.", thai: "การรับรู้ผสม", definition: "blending of senses", hint: "mixed senses", cats: ["school"], examples: [{ en: "Synesthesia makes some people see sounds.", th: "การรับรู้ผสมทำให้บางคนเห็นเสียง" }] },
    { word: "metamorphosis", pos: "n.", thai: "การเปลี่ยนแปลงรูปร่าง", definition: "transformation", hint: "change form", cats: ["school"], examples: [{ en: "The caterpillar's metamorphosis into butterfly.", th: "การเปลี่ยนแปลงรูปร่างของหนอนเป็นผีเสื้อ" }] },
    { word: "anthropomorphism", pos: "n.", thai: "การให้รูปร่างมนุษย์", definition: "attributing human form", hint: "human form giving", cats: ["school"], examples: [{ en: "Anthropomorphism appears in mythology.", th: "การให้รูปร่างมนุษย์ปรากฏในตำนาน" }] },
    { word: "verisimilitude", pos: "n.", thai: "ความเหมือนจริง", definition: "appearance of truth", hint: "seeming real", cats: ["school"], examples: [{ en: "The novel's verisimilitude convinced readers.", th: "ความเหมือนจริงของนวนิยายโน้มน้าวผู้อ่าน" }] },
    { word: "perspicacious", pos: "adj.", thai: "เฉียบแหลม", definition: "having keen insight", hint: "sharp-minded", cats: ["school"], examples: [{ en: "Her perspicacious analysis impressed everyone.", th: "การวิเคราะห์ที่เฉียบแหลมของเธอประทับใจทุกคน" }] },
    { word: "sagacious", pos: "adj.", thai: "ฉลาดหลักแหลม", definition: "having wisdom", hint: "wise", cats: ["school"], examples: [{ en: "The sagacious leader made wise decisions.", th: "ผู้นำที่ฉลาดหลักแหลมตัดสินใจอย่างฉลาด" }] },
    { word: "fastidious", pos: "adj.", thai: "จู้จี้", definition: "very attentive to detail", hint: "picky", cats: ["school"], examples: [{ en: "His fastidious nature ensured quality.", th: "นิสัยจู้จี้ของเขาให้ความมั่นใจในคุณภาพ" }] },
    { word: "assiduous", pos: "adj.", thai: "ขยันขันแข็ง", definition: "showing great care and perseverance", hint: "diligent", cats: ["school"], examples: [{ en: "Assiduous study led to mastery.", th: "การศึกษาที่ขยันขันแข็งนำไปสู่ความเชี่ยวชาญ" }] }
];

console.log(`C2 words prepared: ${c2Words.length}/30`);

// Add words to vocabulary
async function addC2Words() {
    const VocabularyManager = require('./vocabulary-utils.js');
    const vm = new VocabularyManager();
    
    console.log('Adding C2 level words...');
    for (const word of c2Words) {
        await vm.addWord(word.word, word.pos, word.thai, word.definition, word.hint, word.cats, word.examples, 'C2');
    }
    console.log(`Added ${c2Words.length} C2 words successfully!`);
}

// Run if called directly
if (require.main === module) {
    addC2Words().catch(console.error);
}

module.exports = { c2Words, addC2Words };