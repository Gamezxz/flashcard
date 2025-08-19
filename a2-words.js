// A2 Level Vocabulary - 130 words needed
const VocabularyManager = require('./vocabulary-utils.js');

const a2Words = [
    // Clothing and appearance (20 words)
    { word: "shirt", pos: "n.", thai: "เสื้อ", definition: "clothing for upper body", hint: "wear on top", cats: ["clothes"], examples: [{ en: "I wear a blue shirt.", th: "ฉันใส่เสื้อสีน้ำเงิน" }] },
    { word: "pants", pos: "n.", thai: "กางเกง", definition: "clothing for legs", hint: "wear on legs", cats: ["clothes"], examples: [{ en: "Black pants look good.", th: "กางเกงสีดำดูดี" }] },
    { word: "dress", pos: "n.", thai: "ชุดเดรส", definition: "one-piece clothing for women", hint: "women wear", cats: ["clothes"], examples: [{ en: "She wears a pretty dress.", th: "เธอใส่ชุดเดรสสวย" }] },
    { word: "hat", pos: "n.", thai: "หมวก", definition: "wear on head", hint: "head cover", cats: ["clothes"], examples: [{ en: "Wear a hat in the sun.", th: "ใส่หมวกตอนแดด" }] },
    { word: "jacket", pos: "n.", thai: "แจ็คเก็ต", definition: "outer clothing", hint: "warm clothes", cats: ["clothes"], examples: [{ en: "I need a warm jacket.", th: "ฉันต้องการแจ็คเก็ตอุ่น" }] },
    { word: "skirt", pos: "n.", thai: "กระโปรง", definition: "clothing that hangs from waist", hint: "women wear", cats: ["clothes"], examples: [{ en: "A long skirt.", th: "กระโปรงยาว" }] },
    { word: "socks", pos: "n.", thai: "ถุงเท้า", definition: "wear on feet inside shoes", hint: "foot cover", cats: ["clothes"], examples: [{ en: "Clean white socks.", th: "ถุงเท้าสีขาวสะอาด" }] },
    { word: "glasses", pos: "n.", thai: "แว่นตา", definition: "wear to see better", hint: "help vision", cats: ["clothes", "health"], examples: [{ en: "I need glasses to read.", th: "ฉันต้องใส่แว่นตาอ่านหนังสือ" }] },
    { word: "watch", pos: "n.", thai: "นาฬิกาข้อมือ", definition: "wear to see time", hint: "time on wrist", cats: ["clothes", "time"], examples: [{ en: "My watch shows 3 PM.", th: "นาฬิกาของฉันแสดง 3 โมงเย็น" }] },
    { word: "ring", pos: "n.", thai: "แหวน", definition: "jewelry for finger", hint: "finger jewelry", cats: ["clothes"], examples: [{ en: "A gold ring.", th: "แหวนทอง" }] },
    { word: "belt", pos: "n.", thai: "เข็มขัด", definition: "wear around waist", hint: "hold pants", cats: ["clothes"], examples: [{ en: "A leather belt.", th: "เข็มขัดหนัง" }] },
    { word: "tie", pos: "n.", thai: "เนคไท", definition: "formal wear around neck", hint: "business wear", cats: ["clothes"], examples: [{ en: "He wears a red tie.", th: "เขาใส่เนคไทสีแดง" }] },
    { word: "uniform", pos: "n.", thai: "ชุดยูนิฟอร์ม", definition: "special clothes for work/school", hint: "same clothes", cats: ["clothes", "work"], examples: [{ en: "School uniform is blue.", th: "ชุดนักเรียนสีน้ำเงิน" }] },
    { word: "size", pos: "n.", thai: "ขนาด", definition: "how big something is", hint: "big or small", cats: ["shopping"], examples: [{ en: "What size do you wear?", th: "คุณใส่ไซส์อะไร" }] },
    { word: "color", pos: "n.", thai: "สี", definition: "red, blue, green, etc.", hint: "rainbow", cats: ["daily"], examples: [{ en: "What color do you like?", th: "คุณชอบสีอะไร" }] },
    { word: "style", pos: "n.", thai: "สไตล์", definition: "way something looks", hint: "fashion", cats: ["clothes"], examples: [{ en: "I like this style.", th: "ฉันชอบสไตล์นี้" }] },
    { word: "fashion", pos: "n.", thai: "แฟชั่น", definition: "popular clothing style", hint: "trendy clothes", cats: ["clothes"], examples: [{ en: "She follows fashion.", th: "เธอติดตามแฟชั่น" }] },
    { word: "wear", pos: "v.", thai: "ใส่", definition: "put clothes on body", hint: "put on", cats: ["clothes"], examples: [{ en: "I wear jeans today.", th: "วันนี้ฉันใส่ยีนส์" }] },
    { word: "fit", pos: "v.", thai: "พอดี", definition: "right size for body", hint: "correct size", cats: ["clothes"], examples: [{ en: "This shirt fits well.", th: "เสื้อตัวนี้พอดี" }] },
    { word: "try on", pos: "v.", thai: "ลองใส่", definition: "wear to test size", hint: "test clothes", cats: ["clothes", "shopping"], examples: [{ en: "Can I try on this dress?", th: "ฉันลองใส่ชุดนี้ได้ไหม" }] },

    // Transportation and travel (15 words)
    { word: "bicycle", pos: "n.", thai: "จักรยาน", definition: "two-wheel vehicle you pedal", hint: "pedal power", cats: ["travel"], examples: [{ en: "I ride my bicycle to work.", th: "ฉันปั่นจักรยานไปทำงาน" }] },
    { word: "motorcycle", pos: "n.", thai: "รถจักรยานยนต์", definition: "motor two-wheeler", hint: "fast bike", cats: ["travel"], examples: [{ en: "He drives a motorcycle.", th: "เขาขับรถจักรยานยนต์" }] },
    { word: "truck", pos: "n.", thai: "รถบรรทุก", definition: "large vehicle for cargo", hint: "carry things", cats: ["travel"], examples: [{ en: "The truck carries boxes.", th: "รถบรรทุกขนกล่อง" }] },
    { word: "ship", pos: "n.", thai: "เรือ", definition: "large boat for ocean", hint: "water transport", cats: ["travel"], examples: [{ en: "The ship sails to Japan.", th: "เรือแล่นไปญี่ปุ่น" }] },
    { word: "boat", pos: "n.", thai: "เรือเล็ก", definition: "small water vehicle", hint: "water travel", cats: ["travel"], examples: [{ en: "We take a boat to the island.", th: "เราขึ้นเรือไปเกาะ" }] },
    { word: "bridge", pos: "n.", thai: "สะพาน", definition: "crosses over water or road", hint: "cross over", cats: ["city", "travel"], examples: [{ en: "Drive over the bridge.", th: "ขับรถผ่านสะพาน" }] },
    { word: "traffic", pos: "n.", thai: "การจราจร", definition: "cars on the road", hint: "busy roads", cats: ["city", "travel"], examples: [{ en: "Heavy traffic today.", th: "วันนี้รถติดมาก" }] },
    { word: "parking", pos: "n.", thai: "ที่จอดรถ", definition: "place to leave car", hint: "car space", cats: ["city", "travel"], examples: [{ en: "Find parking near the mall.", th: "หาที่จอดรถใกล้ห้าง" }] },
    { word: "gas station", pos: "n.", thai: "ปั๊มน้ำมัน", definition: "place to buy fuel", hint: "fuel for car", cats: ["travel"], examples: [{ en: "Stop at the gas station.", th: "แวะปั๊มน้ำมัน" }] },
    { word: "license", pos: "n.", thai: "ใบขับขี่", definition: "permit to drive", hint: "driving permit", cats: ["travel"], examples: [{ en: "Show your driver's license.", th: "แสดงใบขับขี่" }] },
    { word: "passenger", pos: "n.", thai: "ผู้โดยสาร", definition: "person who rides", hint: "not driver", cats: ["travel"], examples: [{ en: "Five passengers on the bus.", th: "ผู้โดยสารห้าคนบนรถบัส" }] },
    { word: "driver", pos: "n.", thai: "คนขับ", definition: "person who drives", hint: "controls vehicle", cats: ["travel", "work"], examples: [{ en: "The bus driver is careful.", th: "คนขับรถบัสระวัง" }] },
    { word: "ride", pos: "v.", thai: "ขี่ / นั่ง", definition: "travel in vehicle", hint: "go by transport", cats: ["travel"], examples: [{ en: "I ride the bus to school.", th: "ฉันนั่งรถบัสไปโรงเรียน" }] },
    { word: "drive", pos: "v.", thai: "ขับ", definition: "control a vehicle", hint: "steer car", cats: ["travel"], examples: [{ en: "She drives to work.", th: "เธอขับรถไปทำงาน" }] },
    { word: "park", pos: "v.", thai: "จอดรถ", definition: "stop and leave vehicle", hint: "leave car", cats: ["travel"], examples: [{ en: "Park the car here.", th: "จอดรถตรงนี้" }] }
];

// Continue A2 words - Food and cooking (20 words)
const moreA2Words = [
    { word: "spoon", pos: "n.", thai: "ช้อน", definition: "eating utensil", hint: "eat soup", cats: ["food"], examples: [{ en: "Use a spoon for soup.", th: "ใช้ช้อนกินซุป" }] },
    { word: "fork", pos: "n.", thai: "ส้อม", definition: "eating utensil with prongs", hint: "stab food", cats: ["food"], examples: [{ en: "Eat with fork and knife.", th: "กินด้วยส้อมและมีด" }] },
    { word: "knife", pos: "n.", thai: "มีด", definition: "cutting tool", hint: "cut food", cats: ["food"], examples: [{ en: "Cut meat with knife.", th: "ใช้มีดตัดเนื้อ" }] },
    { word: "bowl", pos: "n.", thai: "ชาม", definition: "round dish", hint: "hold soup", cats: ["food"], examples: [{ en: "Rice in a bowl.", th: "ข้าวในชาม" }] },
    { word: "glass", pos: "n.", thai: "แก้ว", definition: "container for drinks", hint: "drink from", cats: ["food"], examples: [{ en: "A glass of water.", th: "น้ำหนึ่งแก้ว" }] },
    { word: "bottle", pos: "n.", thai: "ขวด", definition: "container for liquids", hint: "hold drinks", cats: ["food"], examples: [{ en: "A bottle of juice.", th: "น้ำผลไม้หนึ่งขวด" }] },
    { word: "recipe", pos: "n.", thai: "สูตรอาหาร", definition: "instructions for cooking", hint: "how to cook", cats: ["food"], examples: [{ en: "Follow the recipe.", th: "ทำตามสูตรอาหาร" }] },
    { word: "ingredient", pos: "n.", thai: "ส่วนผสม", definition: "items used in cooking", hint: "cooking parts", cats: ["food"], examples: [{ en: "Mix all ingredients.", th: "ผสมส่วนผสมทั้งหมด" }] },
    { word: "taste", pos: "v./n.", thai: "ลิ้มรส / รส", definition: "flavor of food", hint: "sweet sour", cats: ["food"], examples: [{ en: "This tastes good.", th: "อันนี้รสชาติดี" }] },
    { word: "sweet", pos: "adj.", thai: "หวาน", definition: "like sugar", hint: "sugar taste", cats: ["food"], examples: [{ en: "Sweet cake.", th: "เค้กหวาน" }] },
    { word: "sour", pos: "adj.", thai: "เปรี้ยว", definition: "like lemon", hint: "lemon taste", cats: ["food"], examples: [{ en: "Sour fruit.", th: "ผลไม้เปรี้ยว" }] },
    { word: "spicy", pos: "adj.", thai: "เผ็ด", definition: "hot taste", hint: "chili hot", cats: ["food"], examples: [{ en: "Spicy Thai food.", th: "อาหารไทยเผ็ด" }] },
    { word: "bitter", pos: "adj.", thai: "ขม", definition: "not sweet taste", hint: "coffee taste", cats: ["food"], examples: [{ en: "Bitter medicine.", th: "ยาขม" }] },
    { word: "fresh", pos: "adj.", thai: "สด", definition: "not old food", hint: "just picked", cats: ["food"], examples: [{ en: "Fresh vegetables.", th: "ผักสด" }] },
    { word: "frozen", pos: "adj.", thai: "แช่แข็ง", definition: "very cold food", hint: "ice cold", cats: ["food"], examples: [{ en: "Frozen chicken.", th: "ไก่แช่แข็ง" }] },
    { word: "boil", pos: "v.", thai: "ต้ม", definition: "cook in hot water", hint: "hot water cook", cats: ["food"], examples: [{ en: "Boil the eggs.", th: "ต้มไข่" }] },
    { word: "fry", pos: "v.", thai: "ทอด", definition: "cook in hot oil", hint: "oil cook", cats: ["food"], examples: [{ en: "Fry the fish.", th: "ทอดปลา" }] },
    { word: "bake", pos: "v.", thai: "อบ", definition: "cook in oven", hint: "oven cook", cats: ["food"], examples: [{ en: "Bake a cake.", th: "อบเค้ก" }] },
    { word: "mix", pos: "v.", thai: "ผสม", definition: "combine ingredients", hint: "put together", cats: ["food"], examples: [{ en: "Mix the flour.", th: "ผสมแป้ง" }] },
    { word: "serve", pos: "v.", thai: "เสิร์ฟ", definition: "give food to people", hint: "give food", cats: ["food"], examples: [{ en: "Serve dinner now.", th: "เสิร์ฟอาหารเย็นเดี๋ยวนี้" }] },

    // Work and jobs (15 words)
    { word: "job", pos: "n.", thai: "งาน", definition: "work you do for money", hint: "employment", cats: ["work"], examples: [{ en: "I have a good job.", th: "ฉันมีงานดี" }] },
    { word: "boss", pos: "n.", thai: "หัวหน้า", definition: "person who leads at work", hint: "work leader", cats: ["work"], examples: [{ en: "My boss is kind.", th: "หัวหน้าของฉันใจดี" }] },
    { word: "employee", pos: "n.", thai: "พนักงาน", definition: "person who works for company", hint: "worker", cats: ["work"], examples: [{ en: "She is a good employee.", th: "เธอเป็นพนักงานที่ดี" }] },
    { word: "company", pos: "n.", thai: "บริษัท", definition: "business organization", hint: "business", cats: ["work"], examples: [{ en: "I work for a big company.", th: "ฉันทำงานให้บริษัทใหญ่" }] },
    { word: "salary", pos: "n.", thai: "เงินเดือน", definition: "money you get for work", hint: "work pay", cats: ["work", "money"], examples: [{ en: "Good salary this month.", th: "เงินเดือนดีเดือนนี้" }] },
    { word: "meeting", pos: "n.", thai: "การประชุม", definition: "people talk together for work", hint: "work discussion", cats: ["work"], examples: [{ en: "We have a meeting at 2 PM.", th: "เรามีประชุมตอนบ่ายสองโมง" }] },
    { word: "project", pos: "n.", thai: "โครงการ", definition: "special work task", hint: "work plan", cats: ["work"], examples: [{ en: "This project is important.", th: "โครงการนี้สำคัญ" }] },
    { word: "report", pos: "n.", thai: "รายงาน", definition: "written work information", hint: "work document", cats: ["work"], examples: [{ en: "Write a report.", th: "เขียนรายงาน" }] },
    { word: "schedule", pos: "n.", thai: "ตารางเวลา", definition: "plan of when to do things", hint: "time plan", cats: ["work", "time"], examples: [{ en: "Check your schedule.", th: "ดูตารางเวลาของคุณ" }] },
    { word: "deadline", pos: "n.", thai: "กำหนดส่ง", definition: "time when work must be finished", hint: "finish time", cats: ["work", "time"], examples: [{ en: "The deadline is tomorrow.", th: "กำหนดส่งคือพรุ่งนี้" }] },
    { word: "interview", pos: "n.", thai: "การสัมภาษณ์", definition: "meeting to get job", hint: "job meeting", cats: ["work"], examples: [{ en: "I have a job interview.", th: "ฉันมีสัมภาษณ์งาน" }] },
    { word: "retire", pos: "v.", thai: "เกษียณ", definition: "stop working because of age", hint: "stop work old", cats: ["work"], examples: [{ en: "He will retire next year.", th: "เขาจะเกษียณปีหน้า" }] },
    { word: "hire", pos: "v.", thai: "จ้าง", definition: "give someone a job", hint: "employ", cats: ["work"], examples: [{ en: "We hire new people.", th: "เราจ้างคนใหม่" }] },
    { word: "fire", pos: "v.", thai: "ไล่ออก", definition: "make someone lose job", hint: "remove job", cats: ["work"], examples: [{ en: "Don't be late or they'll fire you.", th: "อย่ามาสายไม่งั้นจะโดนไล่ออก" }] },
    { word: "apply", pos: "v.", thai: "สมัคร", definition: "ask for a job", hint: "request job", cats: ["work"], examples: [{ en: "Apply for this job.", th: "สมัครงานนี้" }] },

    // Time and dates (10 words)
    { word: "week", pos: "n.", thai: "สัปดาห์", definition: "seven days", hint: "7 days", cats: ["time"], examples: [{ en: "See you next week.", th: "เจอกันสัปดาห์หน้า" }] },
    { word: "month", pos: "n.", thai: "เดือน", definition: "about 30 days", hint: "30 days", cats: ["time"], examples: [{ en: "This month is busy.", th: "เดือนนี้ยุ่ง" }] },
    { word: "season", pos: "n.", thai: "ฤดู", definition: "time of year", hint: "summer winter", cats: ["time", "weather"], examples: [{ en: "I like summer season.", th: "ฉันชอบฤดูร้อน" }] },
    { word: "weekend", pos: "n.", thai: "วันหยุดสุดสัปดาห์", definition: "Saturday and Sunday", hint: "no work days", cats: ["time"], examples: [{ en: "Happy weekend!", th: "สุขสันต์วันหยุด!" }] },
    { word: "birthday", pos: "n.", thai: "วันเกิด", definition: "day you were born", hint: "birth day", cats: ["time", "social"], examples: [{ en: "Today is my birthday.", th: "วันนี้วันเกิดฉัน" }] },
    { word: "holiday", pos: "n.", thai: "วันหยุด", definition: "special day no work", hint: "celebration day", cats: ["time", "social"], examples: [{ en: "Christmas is a holiday.", th: "คริสต์มาสเป็นวันหยุด" }] },
    { word: "appointment", pos: "n.", thai: "นัดหมาย", definition: "planned meeting time", hint: "meeting plan", cats: ["time", "work"], examples: [{ en: "I have an appointment at 3.", th: "ฉันมีนัดตอนสามโมง" }] },
    { word: "hour", pos: "n.", thai: "ชั่วโมง", definition: "60 minutes", hint: "60 minutes", cats: ["time"], examples: [{ en: "Wait one hour.", th: "รอหนึ่งชั่วโมง" }] },
    { word: "minute", pos: "n.", thai: "นาที", definition: "60 seconds", hint: "60 seconds", cats: ["time"], examples: [{ en: "Five minutes left.", th: "เหลืออีกห้านาที" }] },
    { word: "second", pos: "n.", thai: "วินาที", definition: "very short time", hint: "quick time", cats: ["time"], examples: [{ en: "Wait a second.", th: "รอสักวินาที" }] },

    // Hobbies and activities (15 words)
    { word: "hobby", pos: "n.", thai: "งานอดิเรก", definition: "activity you enjoy", hint: "fun activity", cats: ["social"], examples: [{ en: "Reading is my hobby.", th: "การอ่านเป็นงานอดิเรกของฉัน" }] },
    { word: "sport", pos: "n.", thai: "กีฬา", definition: "physical game activity", hint: "exercise game", cats: ["social", "health"], examples: [{ en: "Football is a popular sport.", th: "ฟุตบอลเป็นกีฬาที่นิยม" }] },
    { word: "exercise", pos: "n./v.", thai: "ออกกำลังกาย", definition: "physical activity for health", hint: "body workout", cats: ["health"], examples: [{ en: "I exercise every morning.", th: "ฉันออกกำลังกายทุกเช้า" }] },
    { word: "swim", pos: "v.", thai: "ว่ายน้ำ", definition: "move through water", hint: "water sport", cats: ["health", "social"], examples: [{ en: "I swim in the pool.", th: "ฉันว่ายน้ำในสระ" }] },
    { word: "dance", pos: "v./n.", thai: "เต้นรำ", definition: "move body to music", hint: "music movement", cats: ["social"], examples: [{ en: "She loves to dance.", th: "เธอชอบเต้นรำ" }] },
    { word: "sing", pos: "v.", thai: "ร้องเพลง", definition: "make music with voice", hint: "voice music", cats: ["social"], examples: [{ en: "Sing a song.", th: "ร้องเพลง" }] },
    { word: "draw", pos: "v.", thai: "วาดรูป", definition: "make pictures with pen", hint: "make pictures", cats: ["social"], examples: [{ en: "Draw a picture.", th: "วาดรูป" }] },
    { word: "paint", pos: "v.", thai: "ระบายสี", definition: "make art with colors", hint: "color art", cats: ["social"], examples: [{ en: "Paint the wall.", th: "ทาสีผนัง" }] },
    { word: "read", pos: "v.", thai: "อ่าน", definition: "look at words and understand", hint: "book activity", cats: ["school", "social"], examples: [{ en: "Read this book.", th: "อ่านหนังสือเล่มนี้" }] },
    { word: "write", pos: "v.", thai: "เขียน", definition: "make words on paper", hint: "pen activity", cats: ["school", "work"], examples: [{ en: "Write your name.", th: "เขียนชื่อของคุณ" }] },
    { word: "play", pos: "v.", thai: "เล่น", definition: "do fun activities", hint: "fun activity", cats: ["social"], examples: [{ en: "Children play games.", th: "เด็กๆ เล่นเกม" }] },
    { word: "watch", pos: "v.", thai: "ดู", definition: "look at something", hint: "look at", cats: ["daily"], examples: [{ en: "Watch TV tonight.", th: "ดูทีวีคืนนี้" }] },
    { word: "listen", pos: "v.", thai: "ฟัง", definition: "hear sounds carefully", hint: "hear music", cats: ["daily"], examples: [{ en: "Listen to music.", th: "ฟังเพลง" }] },
    { word: "collect", pos: "v.", thai: "สะสม", definition: "gather things as hobby", hint: "gather items", cats: ["social"], examples: [{ en: "Collect stamps.", th: "สะสมแสตมป์" }] },
    { word: "visit", pos: "v.", thai: "เยี่ยม", definition: "go to see someone", hint: "go see", cats: ["social", "travel"], examples: [{ en: "Visit my grandmother.", th: "ไปเยี่ยมยาย" }] },

    // Weather and nature (10 words)
    { word: "rain", pos: "n./v.", thai: "ฝน / ฝนตก", definition: "water falling from sky", hint: "water from clouds", cats: ["weather"], examples: [{ en: "It will rain tomorrow.", th: "พรุ่งนี้จะฝนตก" }] },
    { word: "snow", pos: "n./v.", thai: "หิมะ / หิมะตก", definition: "white ice from sky", hint: "white cold", cats: ["weather"], examples: [{ en: "Snow is white and cold.", th: "หิมะสีขาวและเย็น" }] },
    { word: "wind", pos: "n.", thai: "ลม", definition: "moving air", hint: "air movement", cats: ["weather"], examples: [{ en: "Strong wind today.", th: "วันนี้ลมแรง" }] },
    { word: "storm", pos: "n.", thai: "พายุ", definition: "bad weather with wind and rain", hint: "bad weather", cats: ["weather"], examples: [{ en: "The storm is coming.", th: "พายุกำลังมา" }] },
    { word: "sun", pos: "n.", thai: "ดวงอาทิตย์", definition: "bright star in sky", hint: "bright sky", cats: ["weather", "nature"], examples: [{ en: "The sun is bright.", th: "ดวงอาทิตย์สว่าง" }] },
    { word: "moon", pos: "n.", thai: "ดวงจันทร์", definition: "bright circle in night sky", hint: "night light", cats: ["nature"], examples: [{ en: "Full moon tonight.", th: "คืนนี้พระจันทร์เต็มดวง" }] },
    { word: "star", pos: "n.", thai: "ดาว", definition: "bright points in night sky", hint: "night lights", cats: ["nature"], examples: [{ en: "Many stars in the sky.", th: "ดาวมากมายบนฟ้า" }] },
    { word: "cloud", pos: "n.", thai: "เมฆ", definition: "white things in sky", hint: "sky white", cats: ["weather"], examples: [{ en: "Dark clouds mean rain.", th: "เมฆดำหมายถึงฝน" }] },
    { word: "sky", pos: "n.", thai: "ท้องฟ้า", definition: "space above earth", hint: "above us", cats: ["nature"], examples: [{ en: "Blue sky today.", th: "วันนี้ท้องฟ้าสีน้ำเงิน" }] },
    { word: "temperature", pos: "n.", thai: "อุณหภูมิ", definition: "how hot or cold", hint: "hot cold measure", cats: ["weather"], examples: [{ en: "High temperature today.", th: "วันนี้อุณหภูมิสูง" }] },

    // Health and body (15 words)
    { word: "health", pos: "n.", thai: "สุขภาพ", definition: "condition of body", hint: "body condition", cats: ["health"], examples: [{ en: "Good health is important.", th: "สุขภาพดีสำคัญ" }] },
    { word: "pain", pos: "n.", thai: "ความเจ็บปวด", definition: "hurt feeling in body", hint: "body hurt", cats: ["health"], examples: [{ en: "I have pain in my back.", th: "ฉันปวดหลัง" }] },
    { word: "fever", pos: "n.", thai: "ไข้", definition: "high body temperature when sick", hint: "hot sick", cats: ["health"], examples: [{ en: "He has a fever.", th: "เขาเป็นไข้" }] },
    { word: "cold", pos: "n.", thai: "หวัด", definition: "common sickness", hint: "nose sick", cats: ["health"], examples: [{ en: "I have a cold.", th: "ฉันเป็นหวัด" }] },
    { word: "cough", pos: "n./v.", thai: "ไอ", definition: "sound from throat when sick", hint: "throat sound", cats: ["health"], examples: [{ en: "Bad cough today.", th: "วันนี้ไอหนัก" }] },
    { word: "headache", pos: "n.", thai: "ปวดหัว", definition: "pain in head", hint: "head pain", cats: ["health"], examples: [{ en: "I have a headache.", th: "ฉันปวดหัว" }] },
    { word: "stomach", pos: "n.", thai: "ท้อง", definition: "body part that holds food", hint: "food holder", cats: ["health"], examples: [{ en: "My stomach hurts.", th: "ท้องฉันเจ็บ" }] },
    { word: "heart", pos: "n.", thai: "หัวใจ", definition: "body part that pumps blood", hint: "blood pump", cats: ["health"], examples: [{ en: "My heart beats fast.", th: "หัวใจฉันเต้นเร็ว" }] },
    { word: "blood", pos: "n.", thai: "เลือด", definition: "red liquid in body", hint: "red body liquid", cats: ["health"], examples: [{ en: "Red blood.", th: "เลือดสีแดง" }] },
    { word: "bone", pos: "n.", thai: "กระดูก", definition: "hard parts inside body", hint: "body frame", cats: ["health"], examples: [{ en: "Strong bones.", th: "กระดูกแข็งแรง" }] },
    { word: "muscle", pos: "n.", thai: "กล้ามเนื้อ", definition: "body parts that move", hint: "body movers", cats: ["health"], examples: [{ en: "Exercise builds muscle.", th: "การออกกำลังกายสร้างกล้ามเนื้อ" }] },
    { word: "skin", pos: "n.", thai: "ผิวหนัง", definition: "outside of body", hint: "body cover", cats: ["health"], examples: [{ en: "Soft skin.", th: "ผิวหนังนุ่ม" }] },
    { word: "tooth", pos: "n.", thai: "ฟัน", definition: "white things in mouth for eating", hint: "mouth white", cats: ["health"], examples: [{ en: "Brush your teeth.", th: "แปรงฟัน" }] },
    { word: "finger", pos: "n.", thai: "นิ้วมือ", definition: "parts of hand", hint: "hand parts", cats: ["health"], examples: [{ en: "Five fingers on hand.", th: "มือมีห้านิ้ว" }] },
    { word: "toe", pos: "n.", thai: "นิ้วเท้า", definition: "parts of foot", hint: "foot parts", cats: ["health"], examples: [{ en: "Ten toes total.", th: "นิ้วเท้ารวมสิบนิ้ว" }] }
];

// Combine all A2 words
const allA2Words = [...a2Words, ...moreA2Words];

console.log(`Total A2 words prepared: ${allA2Words.length}`);

module.exports = allA2Words;

// Add final 10 A2 words to reach 130 total
const finalA2Words = [
    { word: "smile", pos: "v./n.", thai: "ยิ้ม", definition: "happy face expression", hint: "happy face", cats: ["daily"], examples: [{ en: "She has a beautiful smile.", th: "เธอมีรอยยิ้มสวย" }] },
    { word: "laugh", pos: "v.", thai: "หัวเราะ", definition: "make sound when happy", hint: "happy sound", cats: ["daily"], examples: [{ en: "Children laugh and play.", th: "เด็กๆ หัวเราะและเล่น" }] },
    { word: "cry", pos: "v.", thai: "ร้องไห้", definition: "make tears when sad", hint: "sad tears", cats: ["daily"], examples: [{ en: "Don't cry, it's okay.", th: "อย่าร้องไห้ ไม่เป็นไร" }] },
    { word: "angry", pos: "adj.", thai: "โกรธ", definition: "feeling mad", hint: "mad feeling", cats: ["daily"], examples: [{ en: "He is angry about the news.", th: "เขาโกรธเรื่องข่าวนั้น" }] },
    { word: "excited", pos: "adj.", thai: "ตื่นเต้น", definition: "feeling very happy about something", hint: "very happy", cats: ["daily"], examples: [{ en: "I'm excited about the trip.", th: "ฉันตื่นเต้นกับการเดินทาง" }] },
    { word: "nervous", pos: "adj.", thai: "กังวล", definition: "feeling worried", hint: "worried feeling", cats: ["daily"], examples: [{ en: "She feels nervous before the test.", th: "เธอรู้สึกกังวลก่อนสอบ" }] },
    { word: "proud", pos: "adj.", thai: "ภูมิใจ", definition: "feeling good about achievement", hint: "achievement feeling", cats: ["daily"], examples: [{ en: "I'm proud of my son.", th: "ฉันภูมิใจในลูกชาย" }] },
    { word: "jealous", pos: "adj.", thai: "อิจฉา", definition: "wanting what others have", hint: "want others' things", cats: ["daily"], examples: [{ en: "Don't be jealous of others.", th: "อย่าอิจฉาคนอื่น" }] },
    { word: "lonely", pos: "adj.", thai: "เหงา", definition: "feeling alone", hint: "alone feeling", cats: ["daily"], examples: [{ en: "I feel lonely without friends.", th: "ฉันรู้สึกเหงาโดยไม่มีเพื่อน" }] },
    { word: "calm", pos: "adj.", thai: "สงบ", definition: "feeling peaceful", hint: "peaceful feeling", cats: ["daily"], examples: [{ en: "Stay calm in difficult times.", th: "จงใจเย็นในยามยาก" }] }
];

// Complete A2 word list
const completeA2Words = [...allA2Words, ...finalA2Words];
console.log(`Final A2 word count: ${completeA2Words.length}`);

module.exports = completeA2Words;