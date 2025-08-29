export interface Example {
    en: string;
    th: string;
}

export interface Word {
    id: number;
    word: string;
    pos: string;
    thai: string;
    definition: string;
    examples: Example[];
    hint: string;
    level: string;
    cats: string[];
}

export const WORDS: Word[] = [
    {
        id: 1,
        word: "bring",
        pos: "v.",
        thai: "นำมา / เอามา",
        definition: "to take something or someone with you to a place",
        hint: "carry to here",
        level: "A2",
        cats: [
            "daily", "travel"
        ],
        examples: [
            {
                en: "Can you bring your laptop?",
                th: "ช่วยเอาแล็ปท็อปมาด้วยได้ไหม"
            }
        ]
    },
    {
        id: 2,
        word: "take",
        pos: "v.",
        thai: "เอาไป / พาไป / ใช้",
        definition: "to move something away; to accept or use",
        hint: "carry away",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Please take this book to your room.",
                th: "ช่วยเอาหนังสือเล่มนี้ไปไว้ในห้องของเธอ"
            }
        ]
    },
    {
        id: 3,
        word: "need",
        pos: "v.",
        thai: "ต้องการ / จำเป็น",
        definition: "to require something because it is necessary",
        hint: "necessary",
        level: "A1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "I need more time.",
                th: "ฉันต้องการเวลาเพิ่ม"
            }
        ]
    },
    {
        id: 4,
        word: "want",
        pos: "v.",
        thai: "อยาก",
        definition: "to wish to have or do something",
        hint: "wish",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I want a new phone.",
                th: "ฉันอยากได้โทรศัพท์เครื่องใหม่"
            }
        ]
    },
    {
        id: 5,
        word: "early",
        pos: "adv./adj.",
        thai: "เช้า / เร็ว (ก่อนเวลา)",
        definition: "before the usual time; near the beginning",
        hint: "before time",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "He arrived early to the meeting.",
                th: "เขามาถึงการประชุมเร็ว"
            }
        ]
    },
    {
        id: 6,
        word: "late",
        pos: "adv./adj.",
        thai: "สาย / ดึก",
        definition: "after the expected time; near the end of the day",
        hint: "after time",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Sorry I'm late.",
                th: "ขอโทษที่มาสาย"
            }
        ]
    },
    {
        id: 7,
        word: "busy",
        pos: "adj.",
        thai: "ยุ่ง",
        definition: "having a lot to do; not free",
        hint: "many tasks",
        level: "A1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "I'm busy this afternoon.",
                th: "บ่ายนี้ฉันยุ่ง"
            }
        ]
    },
    {
        id: 8,
        word: "free",
        pos: "adj.",
        thai: "ว่าง / ฟรี",
        definition: "not busy; costing nothing",
        hint: "not busy / no cost",
        level: "A1",
        cats: [
            "work", "money"
        ],
        examples: [
            {
                en: "Are you free tomorrow?",
                th: "พรุ่งนี้ว่างไหม"
            }
        ]
    },
    {
        id: 9,
        word: "hungry",
        pos: "adj.",
        thai: "หิว",
        definition: "wanting or needing food",
        hint: "need food",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "I'm hungry. Let's eat.",
                th: "ฉันหิว ไปกินข้าวกัน"
            }
        ]
    },
    {
        id: 10,
        word: "thirsty",
        pos: "adj.",
        thai: "กระหายน้ำ",
        definition: "needing or wanting a drink",
        hint: "need water",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "She is thirsty after running.",
                th: "เธอกระหายน้ำหลังจากวิ่ง"
            }
        ]
    },
    {
        id: 11,
        word: "breakfast",
        pos: "n.",
        thai: "อาหารเช้า",
        definition: "the first meal of the day",
        hint: "morning meal",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "He has rice for breakfast.",
                th: "เขากินข้าวเป็นอาหารเช้า"
            }
        ]
    },
    {
        id: 12,
        word: "lunch",
        pos: "n.",
        thai: "อาหารกลางวัน",
        definition: "a meal eaten in the middle of the day",
        hint: "noon meal",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "We ate lunch at 12.",
                th: "พวกเรากินข้าวกลางวันตอนเที่ยง"
            }
        ]
    },
    {
        id: 13,
        word: "dinner",
        pos: "n.",
        thai: "อาหารเย็น / มื้อค่ำ",
        definition: "the main meal in the evening",
        hint: "evening meal",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "What's for dinner?",
                th: "มื้อเย็นกินอะไร"
            }
        ]
    },
    {
        id: 14,
        word: "cook",
        pos: "v.",
        thai: "ทำอาหาร / ปรุงอาหาร",
        definition: "to prepare food by heating it",
        hint: "make food",
        level: "A2",
        cats: [
            "food", "home"
        ],
        examples: [
            {
                en: "I cook rice every day.",
                th: "ฉันหุงข้าวทุกวัน"
            }
        ]
    },
    {
        id: 15,
        word: "clean",
        pos: "v./adj.",
        thai: "ทำความสะอาด / สะอาด",
        definition: "to remove dirt; not dirty",
        hint: "not dirty",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Please clean the table.",
                th: "โปรดเช็ดโต๊ะให้สะอาด"
            }
        ]
    },
    {
        id: 16,
        word: "dirty",
        pos: "adj.",
        thai: "สกปรก",
        definition: "not clean",
        hint: "needs cleaning",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Your shoes are dirty.",
                th: "รองเท้าคุณสกปรก"
            }
        ]
    },
    {
        id: 17,
        word: "open",
        pos: "v./adj.",
        thai: "เปิด / ที่เปิดอยู่",
        definition: "to move something so it is not closed; not closed",
        hint: "not closed",
        level: "A1",
        cats: [
            "home", "daily"
        ],
        examples: [
            {
                en: "Open the window, please.",
                th: "กรุณาเปิดหน้าต่าง"
            }
        ]
    },
    {
        id: 18,
        word: "close",
        pos: "v./adj.",
        thai: "ปิด / ที่ปิดอยู่",
        definition: "to move something so it is not open; not open",
        hint: "shut",
        level: "A1",
        cats: [
            "home", "daily"
        ],
        examples: [
            {
                en: "Close the door quietly.",
                th: "ปิดประตูเบาๆ"
            }
        ]
    },
    {
        id: 19,
        word: "start",
        pos: "v.",
        thai: "เริ่ม",
        definition: "to begin doing something",
        hint: "begin",
        level: "A1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The class starts at 9.",
                th: "คาบเริ่มเรียนเวลา 9 โมง"
            }
        ]
    },
    {
        id: 20,
        word: "finish",
        pos: "v.",
        thai: "เสร็จ / จบ",
        definition: "to complete something",
        hint: "complete",
        level: "A1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "I finished my work.",
                th: "ฉันทำงานเสร็จแล้ว"
            }
        ]
    },
    {
        id: 21,
        word: "phone",
        pos: "n.",
        thai: "โทรศัพท์",
        definition: "a device for calling or texting",
        hint: "call",
        level: "A1",
        cats: [
            "technology", "daily"
        ],
        examples: [
            {
                en: "Where is my phone?",
                th: "โทรศัพท์ฉันอยู่ไหน"
            }
        ]
    },
    {
        id: 22,
        word: "message",
        pos: "n.",
        thai: "ข้อความ",
        definition: "a piece of written or spoken information",
        hint: "text/DM",
        level: "A2",
        cats: ["technology"],
        examples: [
            {
                en: "I sent you a message.",
                th: "ฉันส่งข้อความให้คุณแล้ว"
            }
        ]
    },
    {
        id: 23,
        word: "meet",
        pos: "v.",
        thai: "พบ / เจอ",
        definition: "to see and talk to someone",
        hint: "see each other",
        level: "A1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "Let's meet at 6 pm.",
                th: "มาเจอกันหกโมงเย็น"
            }
        ]
    },
    {
        id: 24,
        word: "wait",
        pos: "v.",
        thai: "รอ",
        definition: "to stay until something happens",
        hint: "stay for",
        level: "A1",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "Please wait here.",
                th: "กรุณารอตรงนี้"
            }
        ]
    },
    {
        id: 25,
        word: "learn",
        pos: "v.",
        thai: "เรียนรู้",
        definition: "to get knowledge or skill",
        hint: "study, practice",
        level: "A1",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "I want to learn English.",
                th: "ฉันอยากเรียนภาษาอังกฤษ"
            }
        ]
    },
    {
        id: 26,
        word: "teach",
        pos: "v.",
        thai: "สอน",
        definition: "to show someone how to do something",
        hint: "give knowledge",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "She teaches math.",
                th: "เธอสอนคณิตศาสตร์"
            }
        ]
    },
    {
        id: 27,
        word: "travel",
        pos: "v.",
        thai: "ท่องเที่ยว / เดินทาง",
        definition: "to go from one place to another",
        hint: "go to places",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "We love to travel.",
                th: "พวกเราชอบท่องเที่ยว"
            }
        ]
    },
    {
        id: 28,
        word: "ticket",
        pos: "n.",
        thai: "ตั๋ว",
        definition: "a printed or digital pass for travel or events",
        hint: "boarding pass",
        level: "A2",
        cats: [
            "travel", "shopping"
        ],
        examples: [
            {
                en: "I bought a train ticket.",
                th: "ฉันซื้อตั๋วรถไฟ"
            }
        ]
    },
    {
        id: 29,
        word: "water",
        pos: "n.",
        thai: "น้ำ",
        definition: "a clear liquid we drink",
        hint: "drink",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "Drink more water.",
                th: "ดื่มน้ำมากขึ้น"
            }
        ]
    },
    {
        id: 30,
        word: "ice",
        pos: "n.",
        thai: "น้ำแข็ง",
        definition: "frozen water",
        hint: "cold cubes",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Add ice to the glass.",
                th: "ใส่น้ำแข็งลงในแก้ว"
            }
        ]
    },
    {
        id: 31,
        word: "hot",
        pos: "adj.",
        thai: "ร้อน",
        definition: "having a high temperature",
        hint: "not cold",
        level: "A1",
        cats: [
            "weather", "food"
        ],
        examples: [
            {
                en: "The soup is hot.",
                th: "ซุปนี้ร้อน"
            }
        ]
    },
    {
        id: 32,
        word: "cold",
        pos: "adj.",
        thai: "เย็น / หนาว",
        definition: "having a low temperature",
        hint: "not hot",
        level: "A1",
        cats: [
            "weather", "food"
        ],
        examples: [
            {
                en: "It's cold today.",
                th: "วันนี้อากาศหนาว"
            }
        ]
    },
    {
        id: 33,
        word: "home",
        pos: "n.",
        thai: "บ้าน",
        definition: "the place where you live",
        hint: "house where you live",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "I work from home.",
                th: "ฉันทำงานที่บ้าน"
            }
        ]
    },
    {
        id: 34,
        word: "office",
        pos: "n.",
        thai: "ออฟฟิศ / สำนักงาน",
        definition: "a place where people work",
        hint: "workplace",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "He goes to the office at 9.",
                th: "เขาไปออฟฟิศตอนเก้าโมง"
            }
        ]
    },
    {
        id: 35,
        word: "move",
        pos: "v.",
        thai: "ขยับ / ย้าย",
        definition: "to change position or place",
        hint: "change place",
        level: "A2",
        cats: [
            "home", "daily"
        ],
        examples: [
            {
                en: "Please move the chair.",
                th: "ช่วยขยับเก้าอี้"
            }
        ]
    },
    {
        id: 36,
        word: "help",
        pos: "v./n.",
        thai: "ช่วยเหลือ / ความช่วยเหลือ",
        definition: "to make it easier for someone to do something",
        hint: "assist",
        level: "A1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "Can you help me?",
                th: "ช่วยฉันหน่อยได้ไหม"
            }
        ]
    },
    {
        id: 37,
        word: "before",
        pos: "prep./conj./adv.",
        thai: "ก่อน / ก่อนที่",
        definition: "earlier than; previous to",
        hint: "earlier than",
        level: "A1",
        cats: [
            "grammar", "time"
        ],
        examples: [
            {
                en: "Wash your hands before dinner.",
                th: "ล้างมือก่อนมื้อเย็น"
            }
        ]
    },
    {
        id: 38,
        word: "after",
        pos: "prep./conj./adv.",
        thai: "หลัง / หลังจาก",
        definition: "later than; following",
        hint: "later than",
        level: "A1",
        cats: [
            "grammar", "time"
        ],
        examples: [
            {
                en: "Call me after work.",
                th: "โทรหาฉันหลังเลิกงาน"
            }
        ]
    },
    {
        id: 39,
        word: "together",
        pos: "adv.",
        thai: "ด้วยกัน",
        definition: "with each other; in the same place",
        hint: "with others",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Let's cook together.",
                th: "มาทำอาหารด้วยกัน"
            }
        ]
    },
    {
        id: 40,
        word: "alone",
        pos: "adv./adj.",
        thai: "คนเดียว / ลำพัง",
        definition: "without other people",
        hint: "by yourself",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "He lives alone.",
                th: "เขาอยู่คนเดียว"
            }
        ]
    },
    {
        id: 41,
        word: "shop",
        pos: "n./v.",
        thai: "ร้านค้า / ซื้อของ",
        definition: "a place to buy things; to buy things",
        hint: "store, buy",
        level: "A1",
        cats: ["shopping"],
        examples: [
            {
                en: "I shop for clothes online.",
                th: "ฉันซื้อเสื้อผ้าทางออนไลน์"
            }
        ]
    },
    {
        id: 42,
        word: "restaurant",
        pos: "n.",
        thai: "ร้านอาหาร",
        definition: "a place where you can buy and eat meals",
        hint: "eat out",
        level: "A1",
        cats: [
            "food", "city"
        ],
        examples: [
            {
                en: "This restaurant is near my office.",
                th: "ร้านอาหารนี้อยู่ใกล้ออฟฟิศของฉัน"
            }
        ]
    },
    {
        id: 43,
        word: "menu",
        pos: "n.",
        thai: "เมนู",
        definition: "a list of food and drink in a restaurant",
        hint: "food list",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Can I see the menu?",
                th: "ขอดูเมนูได้ไหม"
            }
        ]
    },
    {
        id: 44,
        word: "table",
        pos: "n.",
        thai: "โต๊ะ",
        definition: "a piece of furniture with a flat top",
        hint: "furniture",
        level: "A1",
        cats: [
            "home", "food"
        ],
        examples: [
            {
                en: "Dinner is on the table.",
                th: "มื้อเย็นอยู่บนโต๊ะ"
            }
        ]
    },
    {
        id: 45,
        word: "chair",
        pos: "n.",
        thai: "เก้าอี้",
        definition: "a seat for one person",
        hint: "seat",
        level: "A1",
        cats: [
            "home", "school"
        ],
        examples: [
            {
                en: "There is a chair in the corner.",
                th: "มีเก้าอี้ตัวหนึ่งอยู่ที่มุม"
            }
        ]
    },
    {
        id: 46,
        word: "bed",
        pos: "n.",
        thai: "เตียง",
        definition: "a piece of furniture for sleeping",
        hint: "sleep",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "The baby is in the bed.",
                th: "ทารกนอนอยู่บนเตียง"
            }
        ]
    },
    {
        id: 47,
        word: "room",
        pos: "n.",
        thai: "ห้อง",
        definition: "a part of a building with walls",
        hint: "space",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "My room is small but clean.",
                th: "ห้องของฉันเล็กแต่สะอาด"
            }
        ]
    },
    {
        id: 48,
        word: "house",
        pos: "n.",
        thai: "บ้าน",
        definition: "a building where people live",
        hint: "home",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Their house has a garden.",
                th: "บ้านของพวกเขามีสวน"
            }
        ]
    },
    {
        id: 49,
        word: "door",
        pos: "n.",
        thai: "ประตู",
        definition: "a movable part of a room or building you can open and close",
        hint: "entrance",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Close the door, please.",
                th: "กรุณาปิดประตู"
            }
        ]
    },
    {
        id: 50,
        word: "window",
        pos: "n.",
        thai: "หน้าต่าง",
        definition: "an opening in a wall to let in light and air",
        hint: "glass frame",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Open the window for fresh air.",
                th: "เปิดหน้าต่างเพื่อรับอากาศสดชื่น"
            }
        ]
    },
    {
        id: 51,
        word: "kitchen",
        pos: "n.",
        thai: "ห้องครัว",
        definition: "a room where you cook food",
        hint: "cook room",
        level: "A1",
        cats: [
            "home", "food"
        ],
        examples: [
            {
                en: "The kitchen is clean.",
                th: "ห้องครัวสะอาด"
            }
        ]
    },
    {
        id: 52,
        word: "bathroom",
        pos: "n.",
        thai: "ห้องน้ำ",
        definition: "a room with a toilet and a place to wash",
        hint: "toilet",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "The bathroom is upstairs.",
                th: "ห้องน้ำอยู่ชั้นบน"
            }
        ]
    },
    {
        id: 53,
        word: "bedroom",
        pos: "n.",
        thai: "ห้องนอน",
        definition: "a room for sleeping",
        hint: "sleep room",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "My bedroom has a big window.",
                th: "ห้องนอนของฉันมีหน้าต่างใหญ่"
            }
        ]
    },
    {
        id: 54,
        word: "living room",
        pos: "n.",
        thai: "ห้องนั่งเล่น",
        definition: "a room for sitting and relaxing",
        hint: "relax room",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "We watch TV in the living room.",
                th: "พวกเราดูทีวีในห้องนั่งเล่น"
            }
        ]
    },
    {
        id: 55,
        word: "floor",
        pos: "n.",
        thai: "พื้น / ชั้น",
        definition: "the surface you walk on; a level in a building",
        hint: "level",
        level: "A1",
        cats: [
            "home", "city"
        ],
        examples: [
            {
                en: "Her office is on the third floor.",
                th: "ออฟฟิศของเธออยู่ชั้นสาม"
            }
        ]
    },
    {
        id: 56,
        word: "street",
        pos: "n.",
        thai: "ถนน (ในเมือง)",
        definition: "a road in a city or town",
        hint: "road",
        level: "A1",
        cats: [
            "city", "travel"
        ],
        examples: [
            {
                en: "The street is busy today.",
                th: "ถนนคึกคักวันนี้"
            }
        ]
    },
    {
        id: 57,
        word: "road",
        pos: "n.",
        thai: "ถนน",
        definition: "a long hard surface for vehicles to travel on",
        hint: "way",
        level: "A1",
        cats: [
            "travel", "city"
        ],
        examples: [
            {
                en: "Drive carefully on this road.",
                th: "ขับรถอย่างระมัดระวังบนถนนนี้"
            }
        ]
    },
    {
        id: 58,
        word: "city",
        pos: "n.",
        thai: "เมือง",
        definition: "a large town",
        hint: "urban",
        level: "A1",
        cats: ["city"],
        examples: [
            {
                en: "Bangkok is a big city.",
                th: "กรุงเทพฯ เป็นเมืองใหญ่"
            }
        ]
    },
    {
        id: 59,
        word: "country",
        pos: "n.",
        thai: "ประเทศ",
        definition: "a nation with its own government",
        hint: "nation",
        level: "A1",
        cats: ["city"],
        examples: [
            {
                en: "Thailand is a beautiful country.",
                th: "ประเทศไทยเป็นประเทศที่สวยงาม"
            }
        ]
    },
    {
        id: 60,
        word: "address",
        pos: "n.",
        thai: "ที่อยู่",
        definition: "details of where someone lives or works",
        hint: "location",
        level: "A1",
        cats: [
            "city", "daily"
        ],
        examples: [
            {
                en: "What is your address?",
                th: "ที่อยู่ของคุณคืออะไร"
            }
        ]
    },
    {
        id: 61,
        word: "school",
        pos: "n.",
        thai: "โรงเรียน",
        definition: "a place where children learn",
        hint: "education",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "Our school is new.",
                th: "โรงเรียนของเราใหม่"
            }
        ]
    },
    {
        id: 62,
        word: "class",
        pos: "n.",
        thai: "ชั้นเรียน / คาบเรียน",
        definition: "a lesson or group of students",
        hint: "lesson",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "The class starts at nine.",
                th: "คาบเรียนเริ่มตอนเก้าโมง"
            }
        ]
    },
    {
        id: 63,
        word: "teacher",
        pos: "n.",
        thai: "ครู / อาจารย์",
        definition: "someone who teaches students",
        hint: "instructor",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "Our teacher is kind.",
                th: "ครูของเราใจดี"
            }
        ]
    },
    {
        id: 64,
        word: "student",
        pos: "n.",
        thai: "นักเรียน / นักศึกษา",
        definition: "a person who studies at a school or college",
        hint: "learner",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "She is a university student.",
                th: "เธอเป็นนักศึกษามหาวิทยาลัย"
            }
        ]
    },
    {
        id: 65,
        word: "book",
        pos: "n.",
        thai: "หนังสือ",
        definition: "a set of printed pages bound together",
        hint: "read",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "This book is interesting.",
                th: "หนังสือเล่มนี้น่าสนใจ"
            }
        ]
    },
    {
        id: 66,
        word: "pen",
        pos: "n.",
        thai: "ปากกา",
        definition: "a tool to write with ink",
        hint: "write tool",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "Can I borrow your pen?",
                th: "ฉันขอยืมปากกาคุณได้ไหม"
            }
        ]
    },
    {
        id: 67,
        word: "pencil",
        pos: "n.",
        thai: "ดินสอ",
        definition: "a tool to write with graphite",
        hint: "write",
        level: "A1",
        cats: ["school"],
        examples: [
            {
                en: "Sharpen your pencil, please.",
                th: "กรุณาเหลาดินสอของคุณ"
            }
        ]
    },
    {
        id: 68,
        word: "paper",
        pos: "n.",
        thai: "กระดาษ",
        definition: "thin material used for writing or printing",
        hint: "sheet",
        level: "A1",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Write your name on the paper.",
                th: "เขียนชื่อของคุณบนกระดาษ"
            }
        ]
    },
    {
        id: 69,
        word: "bag",
        pos: "n.",
        thai: "กระเป๋า",
        definition: "a container for carrying things",
        hint: "carry",
        level: "A1",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "Her bag is on the chair.",
                th: "กระเป๋าของเธออยู่บนเก้าอี้"
            }
        ]
    },
    {
        id: 70,
        word: "computer",
        pos: "n.",
        thai: "คอมพิวเตอร์",
        definition: "an electronic machine for storing and processing data",
        hint: "PC",
        level: "A1",
        cats: [
            "technology", "work"
        ],
        examples: [
            {
                en: "The computer is on the desk.",
                th: "คอมพิวเตอร์อยู่บนโต๊ะทำงาน"
            }
        ]
    },
    {
        id: 71,
        word: "email",
        pos: "n.",
        thai: "อีเมล",
        definition: "a message sent electronically",
        hint: "message",
        level: "A1",
        cats: [
            "technology", "work"
        ],
        examples: [
            {
                en: "I send an email to my boss.",
                th: "ฉันส่งอีเมลถึงหัวหน้า"
            }
        ]
    },
    {
        id: 72,
        word: "internet",
        pos: "n.",
        thai: "อินเทอร์เน็ต",
        definition: "a global network for information",
        hint: "online",
        level: "A1",
        cats: ["technology"],
        examples: [
            {
                en: "The internet is slow today.",
                th: "อินเทอร์เน็ตช้าวันนี้"
            }
        ]
    },
    {
        id: 73,
        word: "photo",
        pos: "n.",
        thai: "รูปถ่าย",
        definition: "a picture taken with a camera",
        hint: "picture",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I take a photo of the view.",
                th: "ฉันถ่ายรูปวิว"
            }
        ]
    },
    {
        id: 74,
        word: "music",
        pos: "n.",
        thai: "ดนตรี",
        definition: "sounds arranged in a pleasant way",
        hint: "song",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "She listens to music every day.",
                th: "เธอฟังเพลงทุกวัน"
            }
        ]
    },
    {
        id: 75,
        word: "movie",
        pos: "n.",
        thai: "ภาพยนตร์",
        definition: "a film shown in a cinema or on TV",
        hint: "film",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "We watch a movie tonight.",
                th: "พวกเราดูหนังคืนนี้"
            }
        ]
    },
    {
        id: 76,
        word: "game",
        pos: "n.",
        thai: "เกม",
        definition: "an activity you do for fun or competition",
        hint: "play",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "This game is easy to play.",
                th: "เกมนี้เล่นง่าย"
            }
        ]
    },
    {
        id: 77,
        word: "party",
        pos: "n.",
        thai: "งานเลี้ยง / ปาร์ตี้",
        definition: "a social event with food and music",
        hint: "celebration",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Are you coming to the party?",
                th: "คุณจะมางานเลี้ยงไหม"
            }
        ]
    },
    {
        id: 78,
        word: "holiday",
        pos: "n.",
        thai: "วันหยุด",
        definition: "a day when you do not have to work or study",
        hint: "day off",
        level: "A1",
        cats: [
            "travel", "daily"
        ],
        examples: [
            {
                en: "We plan a trip for the holiday.",
                th: "เราวางแผนเที่ยวในวันหยุด"
            }
        ]
    },
    {
        id: 79,
        word: "bus",
        pos: "n.",
        thai: "รถบัส",
        definition: "a large vehicle that carries many people",
        hint: "public transport",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "I take a bus to work.",
                th: "ฉันนั่งรถบัสไปทำงาน"
            }
        ]
    },
    {
        id: 80,
        word: "train",
        pos: "n.",
        thai: "รถไฟ",
        definition: "a long vehicle that runs on rails",
        hint: "rail",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "The train arrives at ten.",
                th: "รถไฟมาถึงตอนสิบโมง"
            }
        ]
    },
    {
        id: 81,
        word: "plane",
        pos: "n.",
        thai: "เครื่องบิน",
        definition: "a vehicle that flies in the sky",
        hint: "aircraft",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "Her plane leaves at noon.",
                th: "เครื่องบินของเธอออกตอนเที่ยง"
            }
        ]
    },
    {
        id: 82,
        word: "car",
        pos: "n.",
        thai: "รถยนต์",
        definition: "a road vehicle with an engine and four wheels",
        hint: "auto",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "He drives a small car.",
                th: "เขาขับรถคันเล็ก"
            }
        ]
    },
    {
        id: 83,
        word: "taxi",
        pos: "n.",
        thai: "แท็กซี่",
        definition: "a car that you pay to ride in",
        hint: "cab",
        level: "A1",
        cats: [
            "travel", "city"
        ],
        examples: [
            {
                en: "We take a taxi to the hotel.",
                th: "เรานั่งแท็กซี่ไปโรงแรม"
            }
        ]
    },
    {
        id: 84,
        word: "station",
        pos: "n.",
        thai: "สถานี",
        definition: "a place where trains or buses stop",
        hint: "stop",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "Meet me at the station.",
                th: "เจอกันที่สถานี"
            }
        ]
    },
    {
        id: 85,
        word: "airport",
        pos: "n.",
        thai: "สนามบิน",
        definition: "a place where planes take off and land",
        hint: "planes",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "The airport is far from the city.",
                th: "สนามบินอยู่ไกลจากในเมือง"
            }
        ]
    },
    {
        id: 86,
        word: "map",
        pos: "n.",
        thai: "แผนที่",
        definition: "a drawing that shows where places are",
        hint: "guide",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "Use the map to find the cafe.",
                th: "ใช้แผนที่เพื่อหาคาเฟ่"
            }
        ]
    },
    {
        id: 87,
        word: "hotel",
        pos: "n.",
        thai: "โรงแรม",
        definition: "a place where you can stay when traveling",
        hint: "stay",
        level: "A1",
        cats: ["travel"],
        examples: [
            {
                en: "Our hotel is near the beach.",
                th: "โรงแรมของเราอยู่ใกล้ชายหาด"
            }
        ]
    },
    {
        id: 88,
        word: "food",
        pos: "n.",
        thai: "อาหาร",
        definition: "things people eat",
        hint: "eat",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Thai food is delicious.",
                th: "อาหารไทยอร่อย"
            }
        ]
    },
    {
        id: 89,
        word: "rice",
        pos: "n.",
        thai: "ข้าว",
        definition: "a small white grain that people eat",
        hint: "grain",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "We eat rice every day.",
                th: "เรากินข้าวทุกวัน"
            }
        ]
    },
    {
        id: 90,
        word: "noodles",
        pos: "n.",
        thai: "ก๋วยเตี๋ยว / บะหมี่",
        definition: "long thin strips of food made from flour",
        hint: "pasta",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "He likes noodles for lunch.",
                th: "เขาชอบบะหมี่ตอนกลางวัน"
            }
        ]
    },
    {
        id: 91,
        word: "soup",
        pos: "n.",
        thai: "ซุป",
        definition: "a hot liquid food",
        hint: "hot dish",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "The soup is hot.",
                th: "ซุปนี้ร้อน"
            }
        ]
    },
    {
        id: 92,
        word: "meat",
        pos: "n.",
        thai: "เนื้อสัตว์",
        definition: "the flesh of animals used as food",
        hint: "protein",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Do you eat meat?",
                th: "คุณกินเนื้อสัตว์ไหม"
            }
        ]
    },
    {
        id: 93,
        word: "chicken",
        pos: "n.",
        thai: "ไก่",
        definition: "a common kind of meat or bird",
        hint: "meat",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "She cooks chicken for dinner.",
                th: "เธอทำไก่เป็นมื้อเย็น"
            }
        ]
    },
    {
        id: 94,
        word: "fish",
        pos: "n.",
        thai: "ปลา",
        definition: "an animal that lives in water; a kind of meat",
        hint: "seafood",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "This fish is fresh.",
                th: "ปลานี้สด"
            }
        ]
    },
    {
        id: 95,
        word: "egg",
        pos: "n.",
        thai: "ไข่",
        definition: "a round object laid by a bird, eaten as food",
        hint: "food",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "He eats two eggs for breakfast.",
                th: "เขากินไข่สองฟองเป็นอาหารเช้า"
            }
        ]
    },
    {
        id: 96,
        word: "fruit",
        pos: "n.",
        thai: "ผลไม้",
        definition: "sweet food that grows on trees or plants",
        hint: "sweet food",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "Fruit is good for you.",
                th: "ผลไม้ดีต่อสุขภาพ"
            }
        ]
    },
    {
        id: 97,
        word: "apple",
        pos: "n.",
        thai: "แอปเปิล",
        definition: "a round fruit with red or green skin",
        hint: "fruit",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "I eat an apple every day.",
                th: "ฉันกินแอปเปิลทุกวัน"
            }
        ]
    },
    {
        id: 98,
        word: "banana",
        pos: "n.",
        thai: "กล้วย",
        definition: "a long curved yellow fruit",
        hint: "fruit",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Bananas are sweet.",
                th: "กล้วยมีรสหวาน"
            }
        ]
    },
    {
        id: 99,
        word: "orange",
        pos: "n.",
        thai: "ส้ม",
        definition: "a round orange-colored fruit",
        hint: "fruit",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "This orange is juicy.",
                th: "ส้มลูกนี้น้ำเยอะ"
            }
        ]
    },
    {
        id: 100,
        word: "vegetable",
        pos: "n.",
        thai: "ผัก",
        definition: "a plant or part of a plant used as food",
        hint: "veg",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "Eat more vegetables.",
                th: "กินผักให้มากขึ้น"
            }
        ]
    },
    {
        id: 101,
        word: "salad",
        pos: "n.",
        thai: "สลัด",
        definition: "a dish of mixed vegetables, often with dressing",
        hint: "cold dish",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "She orders a salad.",
                th: "เธอสั่งสลัด"
            }
        ]
    },
    {
        id: 102,
        word: "bread",
        pos: "n.",
        thai: "ขนมปัง",
        definition: "a common baked food made from flour",
        hint: "loaf",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "We buy fresh bread.",
                th: "เราซื้อขนมปังสดใหม่"
            }
        ]
    },
    {
        id: 103,
        word: "sandwich",
        pos: "n.",
        thai: "แซนด์วิช",
        definition: "two pieces of bread with food between them",
        hint: "bread meal",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "He eats a sandwich for lunch.",
                th: "เขากินแซนด์วิชเป็นมื้อกลางวัน"
            }
        ]
    },
    {
        id: 104,
        word: "milk",
        pos: "n.",
        thai: "นม",
        definition: "a white liquid from cows, goats, or plants",
        hint: "drink",
        level: "A1",
        cats: [
            "food", "health"
        ],
        examples: [
            {
                en: "I drink milk at breakfast.",
                th: "ฉันดื่มนมตอนอาหารเช้า"
            }
        ]
    },
    {
        id: 105,
        word: "coffee",
        pos: "n.",
        thai: "กาแฟ",
        definition: "a hot drink made from coffee beans",
        hint: "drink",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "She likes black coffee.",
                th: "เธอชอบกาแฟดำ"
            }
        ]
    },
    {
        id: 106,
        word: "tea",
        pos: "n.",
        thai: "ชา",
        definition: "a hot drink made by infusing dried leaves",
        hint: "drink",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Would you like some tea?",
                th: "ต้องการชาสักหน่อยไหม"
            }
        ]
    },
    {
        id: 107,
        word: "juice",
        pos: "n.",
        thai: "น้ำผลไม้",
        definition: "a drink made from fruit or vegetables",
        hint: "drink",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Orange juice is popular.",
                th: "น้ำส้มเป็นที่นิยม"
            }
        ]
    },
    {
        id: 108,
        word: "sugar",
        pos: "n.",
        thai: "น้ำตาล",
        definition: "a sweet substance used in food and drinks",
        hint: "sweet",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Don't add too much sugar.",
                th: "อย่าใส่น้ำตาลมากเกินไป"
            }
        ]
    },
    {
        id: 109,
        word: "salt",
        pos: "n.",
        thai: "เกลือ",
        definition: "a white substance used to add flavor",
        hint: "seasoning",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "This soup needs some salt.",
                th: "ซุปนี้ต้องเติมเกลือหน่อย"
            }
        ]
    },
    {
        id: 110,
        word: "snack",
        pos: "n.",
        thai: "ของว่าง",
        definition: "a small amount of food between meals",
        hint: "light food",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "I eat a snack at 4 pm.",
                th: "ฉันกินของว่างตอนสี่โมงเย็น"
            }
        ]
    },
    {
        id: 111,
        word: "warm",
        pos: "adj.",
        thai: "อุ่น",
        definition: "slightly hot; comfortable temperature",
        hint: "mild heat",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "The water is warm.",
                th: "น้ำนั้นอุ่น"
            }
        ]
    },
    {
        id: 112,
        word: "cool",
        pos: "adj.",
        thai: "เย็นสบาย",
        definition: "slightly cold; pleasant temperature",
        hint: "mild cold",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "The evening is cool.",
                th: "ตอนเย็นอากาศเย็นสบาย"
            }
        ]
    },
    {
        id: 113,
        word: "sunny",
        pos: "adj.",
        thai: "แดดออก",
        definition: "with a lot of bright sunlight",
        hint: "clear sky",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "It's sunny today.",
                th: "วันนี้แดดออก"
            }
        ]
    },
    {
        id: 114,
        word: "rainy",
        pos: "adj.",
        thai: "ฝนตก",
        definition: "with a lot of rain",
        hint: "rain",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "This week is rainy.",
                th: "สัปดาห์นี้ฝนตกบ่อย"
            }
        ]
    },
    {
        id: 115,
        word: "cloudy",
        pos: "adj.",
        thai: "เมฆมาก",
        definition: "with many clouds in the sky",
        hint: "overcast",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "It is cloudy now.",
                th: "ตอนนี้เมฆมาก"
            }
        ]
    },
    {
        id: 116,
        word: "windy",
        pos: "adj.",
        thai: "ลมแรง",
        definition: "with a lot of wind",
        hint: "wind",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "The beach is windy.",
                th: "ชายหาดลมแรง"
            }
        ]
    },
    {
        id: 117,
        word: "weather",
        pos: "n.",
        thai: "สภาพอากาศ",
        definition: "the condition of the air at a place and time",
        hint: "climate now",
        level: "A1",
        cats: ["weather"],
        examples: [
            {
                en: "The weather is hot and sunny.",
                th: "อากาศร้อนและแดดออก"
            }
        ]
    },
    {
        id: 118,
        word: "umbrella",
        pos: "n.",
        thai: "ร่ม",
        definition: "a thing you hold over your head when it rains",
        hint: "rain tool",
        level: "A1",
        cats: [
            "weather", "daily"
        ],
        examples: [
            {
                en: "Take an umbrella with you.",
                th: "พกร่มไปด้วย"
            }
        ]
    },
    {
        id: 119,
        word: "coat",
        pos: "n.",
        thai: "เสื้อโค้ท",
        definition: "a piece of clothing you wear over other clothes",
        hint: "outerwear",
        level: "A1",
        cats: [
            "clothes", "weather"
        ],
        examples: [
            {
                en: "Wear a coat. It's cold.",
                th: "ใส่เสื้อโค้ทนะ อากาศหนาว"
            }
        ]
    },
    {
        id: 120,
        word: "shoes",
        pos: "n.",
        thai: "รองเท้า",
        definition: "things you wear on your feet",
        hint: "footwear",
        level: "A1",
        cats: [
            "clothes", "daily"
        ],
        examples: [
            {
                en: "My shoes are new.",
                th: "รองเท้าของฉันคู่ใหม่"
            }
        ]
    },
    {
        id: 121,
        word: "river",
        pos: "n.",
        thai: "แม่น้ำ",
        definition: "a large, natural flow of water that goes across the land into a sea",
        hint: "water, flow",
        level: "A1",
        cats: [
            "nature", "geography"
        ],
        examples: [
            {
                en: "The river is very long.",
                th: "แม่น้ำนี้ยาวมาก"
            }
        ]
    },
    {
        id: 122,
        word: "mountain",
        pos: "n.",
        thai: "ภูเขา",
        definition: "a very high hill, often with rocks at the top",
        hint: "hill, high",
        level: "A1",
        cats: [
            "nature", "travel"
        ],
        examples: [
            {
                en: "We climbed a mountain last summer.",
                th: "เราไปปีนภูเขาเมื่อฤดูร้อนที่แล้ว"
            }
        ]
    },
    {
        id: 123,
        word: "lake",
        pos: "n.",
        thai: "ทะเลสาบ",
        definition: "a large area of water surrounded by land",
        hint: "water, land",
        level: "A1",
        cats: ["nature"],
        examples: [
            {
                en: "There are many fish in the lake.",
                th: "มีปลามากมายในทะเลสาบ"
            }
        ]
    },
    {
        id: 124,
        word: "sea",
        pos: "n.",
        thai: "ทะเล",
        definition: "the large area of salt water that covers much of the earth",
        hint: "ocean",
        level: "A1",
        cats: [
            "nature", "travel"
        ],
        examples: [
            {
                en: "We swam in the sea.",
                th: "เราไปว่ายน้ำในทะเล"
            }
        ]
    },
    {
        id: 125,
        word: "ocean",
        pos: "n.",
        thai: "มหาสมุทร",
        definition: "one of the five large areas of salt water on Earth",
        hint: "big sea",
        level: "A1",
        cats: [
            "nature", "geography"
        ],
        examples: [
            {
                en: "The Pacific Ocean is the largest.",
                th: "มหาสมุทรแปซิฟิกมีขนาดใหญ่ที่สุด"
            }
        ]
    },
    {
        id: 126,
        word: "island",
        pos: "n.",
        thai: "เกาะ",
        definition: "a piece of land surrounded by water",
        hint: "land, water",
        level: "A1",
        cats: [
            "nature", "travel"
        ],
        examples: [
            {
                en: "We spent our holiday on an island.",
                th: "เราไปพักผ่อนวันหยุดที่เกาะ"
            }
        ]
    },
    {
        id: 127,
        word: "forest",
        pos: "n.",
        thai: "ป่า",
        definition: "a large area with many trees",
        hint: "trees, woods",
        level: "A1",
        cats: ["nature"],
        examples: [
            {
                en: "There are wild animals in the forest.",
                th: "มีสัตว์ป่าอยู่ในป่า"
            }
        ]
    },
    {
        id: 128,
        word: "tree",
        pos: "n.",
        thai: "ต้นไม้",
        definition: "a tall plant with a trunk, branches, and leaves",
        hint: "plant",
        level: "A1",
        cats: [
            "nature", "home"
        ],
        examples: [
            {
                en: "The tree gives us shade.",
                th: "ต้นไม้ให้ร่มเงาแก่เรา"
            }
        ]
    },
    {
        id: 129,
        word: "flower",
        pos: "n.",
        thai: "ดอกไม้",
        definition: "the colorful part of a plant",
        hint: "plant, pretty",
        level: "A1",
        cats: [
            "nature", "home"
        ],
        examples: [
            {
                en: "She got a flower from the garden.",
                th: "เธอได้ดอกไม้จากสวน"
            }
        ]
    },
    {
        id: 130,
        word: "garden",
        pos: "n.",
        thai: "สวน",
        definition: "a piece of land where plants and flowers are grown",
        hint: "yard, plants",
        level: "A1",
        cats: [
            "home", "nature"
        ],
        examples: [
            {
                en: "They grow vegetables in the garden.",
                th: "พวกเขาปลูกผักในสวน"
            }
        ]
    },
    {
        id: 131,
        word: "answer",
        pos: "n./v.",
        thai: "คำตอบ / ตอบ",
        definition: "a reply to a question; to reply",
        hint: "reply",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "What is the answer to this question?",
                th: "คำตอบของคำถามนี้คืออะไร"
            }
        ]
    },
    {
        id: 132,
        word: "question",
        pos: "n.",
        thai: "คำถาม",
        definition: "something you ask to get information",
        hint: "ask",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "I have a question about homework.",
                th: "ฉันมีคำถามเกี่ยวกับการบ้าน"
            }
        ]
    },
    {
        id: 133,
        word: "problem",
        pos: "n.",
        thai: "ปัญหา",
        definition: "something difficult that needs to be solved",
        hint: "difficulty",
        level: "A2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need to solve this problem.",
                th: "เราต้องแก้ปัญหานี้"
            }
        ]
    },
    {
        id: 134,
        word: "solution",
        pos: "n.",
        thai: "วิธีแก้ปัญหา",
        definition: "a way to solve a problem",
        hint: "fix",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "She found a good solution.",
                th: "เธอหาวิธีแก้ปัญหาที่ดีได้"
            }
        ]
    },
    {
        id: 135,
        word: "idea",
        pos: "n.",
        thai: "ความคิด / ไอเดีย",
        definition: "a thought or suggestion",
        hint: "thought",
        level: "A2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "That's a great idea!",
                th: "นั่นเป็นไอเดียที่ยอดเยียม!"
            }
        ]
    },
    {
        id: 136,
        word: "plan",
        pos: "n./v.",
        thai: "แผน / วางแผน",
        definition: "something you decide to do; to decide what to do",
        hint: "organize",
        level: "A2",
        cats: [
            "work", "travel"
        ],
        examples: [
            {
                en: "What's your plan for tomorrow?",
                th: "แผนของคุณสำหรับพรุ่งนี้คืออะไร"
            }
        ]
    },
    {
        id: 137,
        word: "decide",
        pos: "v.",
        thai: "ตัดสินใจ",
        definition: "to choose what to do",
        hint: "choose",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I can't decide what to eat.",
                th: "ฉันตัดสินใจไม่ได้ว่าจะกินอะไร"
            }
        ]
    },
    {
        id: 138,
        word: "choose",
        pos: "v.",
        thai: "เลือก",
        definition: "to pick one thing from several options",
        hint: "pick",
        level: "A2",
        cats: [
            "daily", "shopping"
        ],
        examples: [
            {
                en: "Choose your favorite color.",
                th: "เลือกสีที่คุณชอบ"
            }
        ]
    },
    {
        id: 139,
        word: "change",
        pos: "v./n.",
        thai: "เปลี่ยน / การเปลี่ยนแปลง",
        definition: "to make or become different",
        hint: "different",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I want to change my job.",
                th: "ฉันอยากเปลี่ยนงาน"
            }
        ]
    },
    {
        id: 140,
        word: "improve",
        pos: "v.",
        thai: "ปรับปรุง / พัฒนา",
        definition: "to make or become better",
        hint: "better",
        level: "A2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "I want to improve my English.",
                th: "ฉันอยากพัฒนาภาษาอังกฤษของฉัน"
            }
        ]
    },
    {
        id: 141,
        word: "practice",
        pos: "v./n.",
        thai: "ฝึกฝน / การฝึกฝน",
        definition: "to do something repeatedly to get better",
        hint: "repeat",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Practice makes perfect.",
                th: "การฝึกฝนทำให้สมบูรณ์แบบ"
            }
        ]
    },
    {
        id: 142,
        word: "remember",
        pos: "v.",
        thai: "จำได้",
        definition: "to keep something in your mind",
        hint: "not forget",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I remember your name.",
                th: "ฉันจำชื่อคุณได้"
            }
        ]
    },
    {
        id: 143,
        word: "forget",
        pos: "v.",
        thai: "ลืม",
        definition: "to not remember something",
        hint: "not remember",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Don't forget to call me.",
                th: "อย่าลืมโทรหาฉัน"
            }
        ]
    },
    {
        id: 144,
        word: "understand",
        pos: "v.",
        thai: "เข้าใจ",
        definition: "to know the meaning of something",
        hint: "comprehend",
        level: "A2",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "Do you understand the lesson?",
                th: "คุณเข้าใจบทเรียนไหม"
            }
        ]
    },
    {
        id: 145,
        word: "explain",
        pos: "v.",
        thai: "อธิบาย",
        definition: "to make something clear by describing it",
        hint: "describe",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Can you explain this to me?",
                th: "คุณช่วยอธิบายเรื่องนี้ให้ฉันฟังได้ไหม"
            }
        ]
    },
    {
        id: 146,
        word: "describe",
        pos: "v.",
        thai: "บรรยาย / อธิบาย",
        definition: "to say what something is like",
        hint: "tell about",
        level: "A2",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "Describe your hometown.",
                th: "บรรยายเกี่ยวกับบ้านเกิดของคุณ"
            }
        ]
    },
    {
        id: 147,
        word: "compare",
        pos: "v.",
        thai: "เปรียบเทียบ",
        definition: "to look at differences and similarities",
        hint: "differences",
        level: "A2",
        cats: [
            "school", "shopping"
        ],
        examples: [
            {
                en: "Compare these two phones.",
                th: "เปรียบเทียบโทรศัพท์สองเครื่องนี้"
            }
        ]
    },
    {
        id: 148,
        word: "different",
        pos: "adj.",
        thai: "แตกต่าง",
        definition: "not the same",
        hint: "not same",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "These two books are different.",
                th: "หนังสือสองเล่มนี้แตกต่างกัน"
            }
        ]
    },
    {
        id: 149,
        word: "same",
        pos: "adj.",
        thai: "เหมือนกัน",
        definition: "exactly alike; not different",
        hint: "identical",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "We have the same car.",
                th: "เรามีรถคันเดียวกัน"
            }
        ]
    },
    {
        id: 150,
        word: "similar",
        pos: "adj.",
        thai: "คล้ายกัน",
        definition: "almost the same but not exactly",
        hint: "alike",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Our opinions are similar.",
                th: "ความคิดเห็นของเราคล้ายกัน"
            }
        ]
    },
    {
        id: 151,
        word: "important",
        pos: "adj.",
        thai: "สำคัญ",
        definition: "having great value or meaning",
        hint: "significant",
        level: "A2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "This meeting is very important.",
                th: "การประชุมนี้สำคัญมาก"
            }
        ]
    },
    {
        id: 152,
        word: "interesting",
        pos: "adj.",
        thai: "น่าสนใจ",
        definition: "making you want to know more",
        hint: "engaging",
        level: "A2",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "The movie was very interesting.",
                th: "หนังเรื่องนี้น่าสนใจมาก"
            }
        ]
    },
    {
        id: 153,
        word: "boring",
        pos: "adj.",
        thai: "น่าเบื่อ",
        definition: "not interesting or exciting",
        hint: "dull",
        level: "A2",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "The lecture was boring.",
                th: "การบรรยายน่าเบื่อ"
            }
        ]
    },
    {
        id: 154,
        word: "exciting",
        pos: "adj.",
        thai: "น่าตื่นเต้น",
        definition: "making you feel very happy and enthusiastic",
        hint: "thrilling",
        level: "A2",
        cats: [
            "daily", "travel"
        ],
        examples: [
            {
                en: "The trip was exciting.",
                th: "การเดินทางน่าตื่นเต้น"
            }
        ]
    },
    {
        id: 155,
        word: "surprised",
        pos: "adj.",
        thai: "แปลกใจ",
        definition: "feeling wonder because something unexpected happened",
        hint: "unexpected",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I was surprised by the news.",
                th: "ฉันแปลกใจกับข่าวนั้น"
            }
        ]
    },
    {
        id: 156,
        word: "worried",
        pos: "adj.",
        thai: "กังวล",
        definition: "feeling anxious about something",
        hint: "anxious",
        level: "A2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "She looks worried about the test.",
                th: "เธอดูกังวลเกี่ยวกับการสอบ"
            }
        ]
    },
    {
        id: 157,
        word: "happy",
        pos: "adj.",
        thai: "มีความสุข",
        definition: "feeling pleased and content",
        hint: "joyful",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I'm happy to see you.",
                th: "ฉันมีความสุขที่ได้เจอคุณ"
            }
        ]
    },
    {
        id: 158,
        word: "sad",
        pos: "adj.",
        thai: "เศร้า",
        definition: "feeling unhappy",
        hint: "unhappy",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "He feels sad about leaving.",
                th: "เขารู้สึกเศร้าที่ต้องจากไป"
            }
        ]
    },
    {
        id: 159,
        word: "angry",
        pos: "adj.",
        thai: "โกรธ",
        definition: "feeling very annoyed",
        hint: "mad",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Don't be angry with me.",
                th: "อย่าโกรธฉันนะ"
            }
        ]
    },
    {
        id: 160,
        word: "tired",
        pos: "adj.",
        thai: "เหนื่อย",
        definition: "needing rest or sleep",
        hint: "exhausted",
        level: "A2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "I'm tired after work.",
                th: "ฉันเหนื่อยหลังจากทำงาน"
            }
        ]
    },
    {
        id: 161,
        word: "comfortable",
        pos: "adj.",
        thai: "สบาย",
        definition: "feeling relaxed and at ease",
        hint: "relaxed",
        level: "A2",
        cats: [
            "home", "daily"
        ],
        examples: [
            {
                en: "This chair is comfortable.",
                th: "เก้าอี้ตัวนี้นั่งสบาย"
            }
        ]
    },
    {
        id: 162,
        word: "difficult",
        pos: "adj.",
        thai: "ยาก",
        definition: "hard to do or understand",
        hint: "hard",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "This math problem is difficult.",
                th: "โจทย์คณิตศาสตร์นี้ยาก"
            }
        ]
    },
    {
        id: 163,
        word: "easy",
        pos: "adj.",
        thai: "ง่าย",
        definition: "not hard to do or understand",
        hint: "simple",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "The test was easy.",
                th: "การสอบง่าย"
            }
        ]
    },
    {
        id: 164,
        word: "possible",
        pos: "adj.",
        thai: "เป็นไปได้",
        definition: "able to happen or be done",
        hint: "can happen",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Is it possible to finish today?",
                th: "เป็นไปได้ไหมที่จะเสร็จวันนี้"
            }
        ]
    },
    {
        id: 165,
        word: "impossible",
        pos: "adj.",
        thai: "เป็นไปไม่ได้",
        definition: "not able to happen or be done",
        hint: "cannot happen",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "It's impossible to fly without a plane.",
                th: "เป็นไปไม่ได้ที่จะบินโดยไม่มีเครื่องบิน"
            }
        ]
    },
    {
        id: 166,
        word: "ready",
        pos: "adj.",
        thai: "พร้อม",
        definition: "prepared for something",
        hint: "prepared",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Are you ready to go?",
                th: "คุณพร้อมที่จะไปแล้วไหม"
            }
        ]
    },
    {
        id: 167,
        word: "careful",
        pos: "adj.",
        thai: "ระมัดระวัง",
        definition: "paying attention to avoid danger or mistakes",
        hint: "cautious",
        level: "A2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Be careful when you cross the street.",
                th: "ระมัดระวังเวลาข้ามถนน"
            }
        ]
    },
    {
        id: 168,
        word: "dangerous",
        pos: "adj.",
        thai: "อันตราย",
        definition: "likely to cause harm or injury",
        hint: "unsafe",
        level: "A2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Swimming here is dangerous.",
                th: "ว่ายน้ำที่นี่อันตราย"
            }
        ]
    },
    {
        id: 169,
        word: "safe",
        pos: "adj.",
        thai: "ปลอดภัย",
        definition: "not in danger; protected from harm",
        hint: "secure",
        level: "A2",
        cats: [
            "daily", "travel"
        ],
        examples: [
            {
                en: "This area is safe at night.",
                th: "พื้นที่นี้ปลอดภัยในตอนกลางคืน"
            }
        ]
    },
    {
        id: 170,
        word: "healthy",
        pos: "adj.",
        thai: "แข็งแรง / ดีต่อสุขภาพ",
        definition: "in good physical condition",
        hint: "fit",
        level: "A2",
        cats: [
            "health", "food"
        ],
        examples: [
            {
                en: "Eating vegetables is healthy.",
                th: "การกินผักดีต่อสุขภาพ"
            }
        ]
    },
    {
        id: 171,
        word: "sick",
        pos: "adj.",
        thai: "ป่วย",
        definition: "not feeling well; ill",
        hint: "ill",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "I can't come to work. I'm sick.",
                th: "ฉันไปทำงานไม่ได้ ฉันป่วย"
            }
        ]
    },
    {
        id: 172,
        word: "medicine",
        pos: "n.",
        thai: "ยา",
        definition: "something you take to feel better when sick",
        hint: "drug",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Take this medicine twice a day.",
                th: "กินยานี้วันละสองครั้ง"
            }
        ]
    },
    {
        id: 173,
        word: "doctor",
        pos: "n.",
        thai: "หมอ / แพทย์",
        definition: "a person who treats sick people",
        hint: "medical",
        level: "A2",
        cats: [
            "health", "work"
        ],
        examples: [
            {
                en: "I need to see a doctor.",
                th: "ฉันต้องไปหาหมอ"
            }
        ]
    },
    {
        id: 174,
        word: "hospital",
        pos: "n.",
        thai: "โรงพยาบาล",
        definition: "a place where sick people are treated",
        hint: "medical center",
        level: "A2",
        cats: [
            "health", "city"
        ],
        examples: [
            {
                en: "She works at the hospital.",
                th: "เธอทำงานที่โรงพยาบาล"
            }
        ]
    },
    {
        id: 175,
        word: "exercise",
        pos: "n./v.",
        thai: "การออกกำลังกาย / ออกกำลังกาย",
        definition: "physical activity to stay healthy",
        hint: "workout",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "I exercise every morning.",
                th: "ฉันออกกำลังกายทุกเช้า"
            }
        ]
    },
    {
        id: 176,
        word: "sport",
        pos: "n.",
        thai: "กีฬา",
        definition: "a physical activity or game with rules",
        hint: "game",
        level: "A2",
        cats: [
            "health", "social"
        ],
        examples: [
            {
                en: "Football is a popular sport.",
                th: "ฟุตบอลเป็นกีฬาที่นิยม"
            }
        ]
    },
    {
        id: 177,
        word: "team",
        pos: "n.",
        thai: "ทีม",
        definition: "a group of people working or playing together",
        hint: "group",
        level: "A2",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "Our team won the game.",
                th: "ทีมของเราชนะเกม"
            }
        ]
    },
    {
        id: 178,
        word: "win",
        pos: "v.",
        thai: "ชนะ",
        definition: "to be successful in a competition",
        hint: "victory",
        level: "A2",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "I hope we win the match.",
                th: "ฉันหวังว่าเราจะชนะการแข่งขัน"
            }
        ]
    },
    {
        id: 179,
        word: "lose",
        pos: "v.",
        thai: "แพ้ / หาย",
        definition: "to not win; to not be able to find something",
        hint: "defeat",
        level: "A2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "Don't lose your keys.",
                th: "อย่าทำกุญแจหาย"
            }
        ]
    },
    {
        id: 180,
        word: "find",
        pos: "v.",
        thai: "หา / พบ",
        definition: "to discover or locate something",
        hint: "discover",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I can't find my phone.",
                th: "ฉันหาโทรศัพท์ไม่เจอ"
            }
        ]
    },
    {
        id: 181,
        word: "look for",
        pos: "v.",
        thai: "มองหา",
        definition: "to try to find something",
        hint: "search",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I'm looking for my glasses.",
                th: "ฉันกำลังมองหาแว่นตา"
            }
        ]
    },
    {
        id: 182,
        word: "search",
        pos: "v./n.",
        thai: "ค้นหา / การค้นหา",
        definition: "to look carefully for something",
        hint: "hunt",
        level: "A2",
        cats: [
            "daily", "technology"
        ],
        examples: [
            {
                en: "Search for information online.",
                th: "ค้นหาข้อมูลทางออนไลน์"
            }
        ]
    },
    {
        id: 183,
        word: "discover",
        pos: "v.",
        thai: "ค้นพบ",
        definition: "to find something for the first time",
        hint: "find new",
        level: "A2",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "Scientists discover new things.",
                th: "นักวิทยาศาสตร์ค้นพบสิ่งใหม่ๆ"
            }
        ]
    },
    {
        id: 184,
        word: "create",
        pos: "v.",
        thai: "สร้าง",
        definition: "to make something new",
        hint: "make",
        level: "A2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Artists create beautiful paintings.",
                th: "ศิลปินสร้างภาพวาดที่สวยงาม"
            }
        ]
    },
    {
        id: 185,
        word: "build",
        pos: "v.",
        thai: "สร้าง / ก่อสร้าง",
        definition: "to make something by putting parts together",
        hint: "construct",
        level: "A2",
        cats: [
            "work", "home"
        ],
        examples: [
            {
                en: "They build houses.",
                th: "พวกเขาสร้างบ้าน"
            }
        ]
    },
    {
        id: 186,
        word: "repair",
        pos: "v.",
        thai: "ซ่อม",
        definition: "to fix something that is broken",
        hint: "fix",
        level: "A2",
        cats: [
            "work", "home"
        ],
        examples: [
            {
                en: "Can you repair my bike?",
                th: "คุณช่วยซ่อมจักรยานของฉันได้ไหม"
            }
        ]
    },
    {
        id: 187,
        word: "break",
        pos: "v.",
        thai: "หัก / แตก / พัง",
        definition: "to damage something so it doesn't work",
        hint: "damage",
        level: "A2",
        cats: [
            "daily", "home"
        ],
        examples: [
            {
                en: "Be careful not to break the glass.",
                th: "ระวังอย่าให้แก้วแตก"
            }
        ]
    },
    {
        id: 188,
        word: "fix",
        pos: "v.",
        thai: "แก้ไข / ซ่อม",
        definition: "to repair something that is broken",
        hint: "repair",
        level: "A2",
        cats: [
            "work", "home"
        ],
        examples: [
            {
                en: "I need to fix my computer.",
                th: "ฉันต้องซ่อมคอมพิวเตอร์"
            }
        ]
    },
    {
        id: 189,
        word: "save",
        pos: "v.",
        thai: "ช่วย / ประหยัด / เก็บ",
        definition: "to keep someone safe; to keep money; to store",
        hint: "rescue/keep",
        level: "A2",
        cats: [
            "daily", "money"
        ],
        examples: [
            {
                en: "Save your work on the computer.",
                th: "เซฟงานของคุณในคอมพิวเตอร์"
            }
        ]
    },
    {
        id: 190,
        word: "spend",
        pos: "v.",
        thai: "ใช้จ่าย / ใช้เวลา",
        definition: "to use money; to use time",
        hint: "use money/time",
        level: "A2",
        cats: [
            "money", "time"
        ],
        examples: [
            {
                en: "Don't spend too much money.",
                th: "อย่าใช้เงินมากเกินไป"
            }
        ]
    },
    {
        id: 191,
        word: "achieve",
        pos: "v.",
        thai: "บรรลุ / ประสบความสำเร็จ",
        definition: "to successfully complete or reach a goal",
        hint: "accomplish",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She achieved her dream of becoming a doctor.",
                th: "เธอบรรลุความฝันที่จะเป็นหมอ"
            }
        ]
    },
    {
        id: 192,
        word: "accomplish",
        pos: "v.",
        thai: "ทำสำเร็จ / บรรลุ",
        definition: "to finish something successfully",
        hint: "complete",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We accomplished our mission.",
                th: "เราทำภารกิจสำเร็จ"
            }
        ]
    },
    {
        id: 193,
        word: "succeed",
        pos: "v.",
        thai: "ประสบความสำเร็จ",
        definition: "to achieve what you want to achieve",
        hint: "be successful",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "If you work hard, you will succeed.",
                th: "ถ้าคุณทำงานหนัก คุณจะประสบความสำเร็จ"
            }
        ]
    },
    {
        id: 194,
        word: "fail",
        pos: "v.",
        thai: "ล้มเหลว / สอบตก",
        definition: "to not succeed in doing something",
        hint: "not succeed",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Don't be afraid to fail and try again.",
                th: "อย่ากลัวที่จะล้มเหลวและลองใหม่"
            }
        ]
    },
    {
        id: 195,
        word: "attempt",
        pos: "v./n.",
        thai: "พยายาม / ความพยายาม",
        definition: "to try to do something",
        hint: "try",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She attempted to climb the mountain.",
                th: "เธอพยายามปีนภูเขา"
            }
        ]
    },
    {
        id: 196,
        word: "effort",
        pos: "n.",
        thai: "ความพยายาม",
        definition: "physical or mental energy used to do something",
        hint: "hard work",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Success requires effort and patience.",
                th: "ความสำเร็จต้องใช้ความพยายามและความอดทน"
            }
        ]
    },
    {
        id: 197,
        word: "challenge",
        pos: "n./v.",
        thai: "ความท้าทาย / ท้าทาย",
        definition: "something difficult that tests your ability",
        hint: "difficult task",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Learning a new language is a challenge.",
                th: "การเรียนภาษาใหม่เป็นความท้าทาย"
            }
        ]
    },
    {
        id: 198,
        word: "opportunity",
        pos: "n.",
        thai: "โอกาส",
        definition: "a chance to do something good",
        hint: "chance",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "This job is a great opportunity.",
                th: "งานนี้เป็นโอกาสที่ดี"
            }
        ]
    },
    {
        id: 199,
        word: "experience",
        pos: "n./v.",
        thai: "ประสบการณ์ / ประสบ",
        definition: "knowledge gained from doing something",
        hint: "knowledge",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She has five years of work experience.",
                th: "เธอมีประสบการณ์ทำงานห้าปี"
            }
        ]
    },
    {
        id: 200,
        word: "skill",
        pos: "n.",
        thai: "ทักษะ",
        definition: "the ability to do something well",
        hint: "ability",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Communication skills are important.",
                th: "ทักษะการสื่อสารมีความสำคัญ"
            }
        ]
    },
    {
        id: 201,
        word: "knowledge",
        pos: "n.",
        thai: "ความรู้",
        definition: "information and understanding about a subject",
        hint: "information",
        level: "B1",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Knowledge is power.",
                th: "ความรู้คือพลัง"
            }
        ]
    },
    {
        id: 202,
        word: "ability",
        pos: "n.",
        thai: "ความสามารถ",
        definition: "the power to do something",
        hint: "capability",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She has the ability to solve problems.",
                th: "เธอมีความสามารถในการแก้ปัญหา"
            }
        ]
    },
    {
        id: 203,
        word: "talent",
        pos: "n.",
        thai: "พรสวรรค์",
        definition: "natural ability to do something well",
        hint: "natural skill",
        level: "B1",
        cats: [
            "school", "social"
        ],
        examples: [
            {
                en: "He has a talent for music.",
                th: "เขามีพรสวรรค์ด้านดนตรี"
            }
        ]
    },
    {
        id: 204,
        word: "creative",
        pos: "adj.",
        thai: "สร้างสรรค์",
        definition: "having the ability to create new ideas",
        hint: "imaginative",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She is very creative with her designs.",
                th: "เธอสร้างสรรค์มากในการออกแบบ"
            }
        ]
    },
    {
        id: 205,
        word: "imagine",
        pos: "v.",
        thai: "จินตนาการ",
        definition: "to form a picture in your mind",
        hint: "picture in mind",
        level: "B1",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "Imagine you could fly anywhere.",
                th: "ลองจินตนาการว่าคุณบินไปไหนก็ได้"
            }
        ]
    },
    {
        id: 206,
        word: "consider",
        pos: "v.",
        thai: "พิจารณา",
        definition: "to think about something carefully",
        hint: "think about",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Please consider my proposal.",
                th: "กรุณาพิจารณาข้อเสนอของฉัน"
            }
        ]
    },
    {
        id: 207,
        word: "suggest",
        pos: "v.",
        thai: "แนะนำ / เสนอแนะ",
        definition: "to mention an idea for someone to think about",
        hint: "recommend",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "I suggest we meet tomorrow.",
                th: "ฉันแนะนำให้เราพบกันพรุ่งนี้"
            }
        ]
    },
    {
        id: 208,
        word: "recommend",
        pos: "v.",
        thai: "แนะนำ",
        definition: "to say that something is good and worth trying",
        hint: "advise",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "I recommend this restaurant.",
                th: "ฉันแนะนำร้านอาหารนี้"
            }
        ]
    },
    {
        id: 209,
        word: "advice",
        pos: "n.",
        thai: "คำแนะนำ",
        definition: "suggestions about what someone should do",
        hint: "guidance",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Can you give me some advice?",
                th: "คุณให้คำแนะนำฉันได้ไหม"
            }
        ]
    },
    {
        id: 210,
        word: "opinion",
        pos: "n.",
        thai: "ความคิดเห็น",
        definition: "what you think about something",
        hint: "view",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "What's your opinion about this movie?",
                th: "คุณคิดอย่างไรเกี่ยวกับหนังเรื่องนี้"
            }
        ]
    },
    {
        id: 211,
        word: "discuss",
        pos: "v.",
        thai: "อภิปราย / หารือ",
        definition: "to talk about something with other people",
        hint: "talk about",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Let's discuss the project details.",
                th: "มาหารือรายละเอียดโครงการกัน"
            }
        ]
    },
    {
        id: 212,
        word: "argue",
        pos: "v.",
        thai: "โต้เถียง",
        definition: "to disagree with someone in an angry way",
        hint: "fight with words",
        level: "B1",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "They always argue about money.",
                th: "พวกเขาโต้เถียงเรื่องเงินเสมอ"
            }
        ]
    },
    {
        id: 213,
        word: "agree",
        pos: "v.",
        thai: "เห็นด้วย",
        definition: "to have the same opinion as someone",
        hint: "same opinion",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "I agree with your decision.",
                th: "ฉันเห็นด้วยกับการตัดสินใจของคุณ"
            }
        ]
    },
    {
        id: 214,
        word: "disagree",
        pos: "v.",
        thai: "ไม่เห็นด้วย",
        definition: "to have a different opinion from someone",
        hint: "different opinion",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "I disagree with that statement.",
                th: "ฉันไม่เห็นด้วยกับข้อความนั้น"
            }
        ]
    },
    {
        id: 215,
        word: "accept",
        pos: "v.",
        thai: "ยอมรับ",
        definition: "to agree to take something that is offered",
        hint: "take willingly",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "I accept your invitation.",
                th: "ฉันยอมรับคำเชิญของคุณ"
            }
        ]
    },
    {
        id: 216,
        word: "refuse",
        pos: "v.",
        thai: "ปฏิเสธ",
        definition: "to say no to something",
        hint: "say no",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "She refused to help us.",
                th: "เธอปฏิเสธที่จะช่วยเรา"
            }
        ]
    },
    {
        id: 217,
        word: "allow",
        pos: "v.",
        thai: "อนุญาต",
        definition: "to let someone do something",
        hint: "permit",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "My parents allow me to stay out late.",
                th: "พ่อแม่อนุญาตให้ฉันอยู่ข้างนอกดึก"
            }
        ]
    },
    {
        id: 218,
        word: "prevent",
        pos: "v.",
        thai: "ป้องกัน",
        definition: "to stop something from happening",
        hint: "stop",
        level: "B1",
        cats: [
            "health", "daily"
        ],
        examples: [
            {
                en: "Exercise can prevent many diseases.",
                th: "การออกกำลังกายสามารถป้องกันโรคหลายชนิด"
            }
        ]
    },
    {
        id: 219,
        word: "protect",
        pos: "v.",
        thai: "ปกป้อง",
        definition: "to keep someone or something safe",
        hint: "keep safe",
        level: "B1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Sunscreen protects your skin.",
                th: "ครีมกันแดดปกป้องผิวของคุณ"
            }
        ]
    },
    {
        id: 220,
        word: "support",
        pos: "v./n.",
        thai: "สนับสนุน / การสนับสนุน",
        definition: "to help or encourage someone",
        hint: "help",
        level: "B1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "My family supports my decision.",
                th: "ครอบครัวของฉันสนับสนุนการตัดสินใจของฉัน"
            }
        ]
    },
    {
        id: 221,
        word: "encourage",
        pos: "v.",
        thai: "ให้กำลังใจ",
        definition: "to give someone confidence to do something",
        hint: "motivate",
        level: "B1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "Teachers should encourage students.",
                th: "ครูควรให้กำลังใจนักเรียน"
            }
        ]
    },
    {
        id: 222,
        word: "motivate",
        pos: "v.",
        thai: "จูงใจ / กระตุ้น",
        definition: "to make someone want to do something",
        hint: "inspire",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Good teachers motivate their students.",
                th: "ครูที่ดีจูงใจนักเรียนของพวกเขา"
            }
        ]
    },
    {
        id: 223,
        word: "inspire",
        pos: "v.",
        thai: "สร้างแรงบันดาลใจ",
        definition: "to make someone feel enthusiastic about doing something",
        hint: "encourage creativity",
        level: "B1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "Her story inspired me to work harder.",
                th: "เรื่องราวของเธอสร้างแรงบันดาลใจให้ฉันทำงานหนักขึ้น"
            }
        ]
    },
    {
        id: 224,
        word: "influence",
        pos: "v./n.",
        thai: "มีอิทธิพล / อิทธิพล",
        definition: "to affect someone's behavior or decisions",
        hint: "affect",
        level: "B1",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "Friends can influence your choices.",
                th: "เพื่อนสามารถมีอิทธิพลต่อการเลือกของคุณ"
            }
        ]
    },
    {
        id: 225,
        word: "depend",
        pos: "v.",
        thai: "ขึ้นอยู่กับ",
        definition: "to need someone or something for help",
        hint: "rely on",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Success depends on hard work.",
                th: "ความสำเร็จขึ้นอยู่กับการทำงานหนัก"
            }
        ]
    },
    {
        id: 226,
        word: "independent",
        pos: "adj.",
        thai: "เป็นอิสระ",
        definition: "not needing help from other people",
        hint: "self-reliant",
        level: "B1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "She is very independent.",
                th: "เธอเป็นอิสระมาก"
            }
        ]
    },
    {
        id: 227,
        word: "responsible",
        pos: "adj.",
        thai: "มีความรับผิดชอบ",
        definition: "having the duty to take care of something",
        hint: "accountable",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Parents are responsible for their children.",
                th: "พ่อแม่มีความรับผิดชอบต่อลูก"
            }
        ]
    },
    {
        id: 228,
        word: "organize",
        pos: "v.",
        thai: "จัดระเบียบ / จัดการ",
        definition: "to arrange things in a neat, ordered way",
        hint: "arrange",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Please organize your desk.",
                th: "กรุณาจัดระเบียบโต๊ะทำงานของคุณ"
            }
        ]
    },
    {
        id: 229,
        word: "manage",
        pos: "v.",
        thai: "จัดการ",
        definition: "to control or be in charge of something",
        hint: "control",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She manages a team of ten people.",
                th: "เธอจัดการทีมสิบคน"
            }
        ]
    },
    {
        id: 230,
        word: "control",
        pos: "v./n.",
        thai: "ควบคุม / การควบคุม",
        definition: "to have power over something",
        hint: "command",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "You need to control your emotions.",
                th: "คุณต้องควบคุมอารมณ์ของคุณ"
            }
        ]
    },
    {
        id: 231,
        word: "develop",
        pos: "v.",
        thai: "พัฒนา",
        definition: "to grow or make something grow",
        hint: "grow",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We need to develop new skills.",
                th: "เราต้องพัฒนาทักษะใหม่"
            }
        ]
    },
    {
        id: 232,
        word: "progress",
        pos: "n./v.",
        thai: "ความก้าวหน้า / ก้าวหน้า",
        definition: "improvement or forward movement",
        hint: "advancement",
        level: "B1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She is making good progress in English.",
                th: "เธอมีความก้าวหน้าที่ดีในภาษาอังกฤษ"
            }
        ]
    },
    {
        id: 233,
        word: "increase",
        pos: "v./n.",
        thai: "เพิ่มขึ้น / การเพิ่มขึ้น",
        definition: "to become or make larger in amount",
        hint: "grow bigger",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The price of food increased.",
                th: "ราคาอาหารเพิ่มขึ้น"
            }
        ]
    },
    {
        id: 234,
        word: "decrease",
        pos: "v./n.",
        thai: "ลดลง / การลดลง",
        definition: "to become or make smaller in amount",
        hint: "get smaller",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Sales decreased last month.",
                th: "ยอดขายลดลงเดือนที่แล้ว"
            }
        ]
    },
    {
        id: 235,
        word: "reduce",
        pos: "v.",
        thai: "ลด",
        definition: "to make something smaller or less",
        hint: "make less",
        level: "B1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "We should reduce plastic use.",
                th: "เราควรลดการใช้พลาสติก"
            }
        ]
    },
    {
        id: 236,
        word: "expand",
        pos: "v.",
        thai: "ขยาย",
        definition: "to become or make larger",
        hint: "make bigger",
        level: "B1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The company plans to expand overseas.",
                th: "บริษัทวางแผนขยายไปต่างประเทศ"
            }
        ]
    },
    {
        id: 237,
        word: "connect",
        pos: "v.",
        thai: "เชื่อมต่อ",
        definition: "to join two or more things together",
        hint: "link",
        level: "B1",
        cats: [
            "technology", "daily"
        ],
        examples: [
            {
                en: "Connect your phone to the WiFi.",
                th: "เชื่อมต่อโทรศัพท์ของคุณกับ WiFi"
            }
        ]
    },
    {
        id: 238,
        word: "communicate",
        pos: "v.",
        thai: "สื่อสาร",
        definition: "to share information with others",
        hint: "share info",
        level: "B1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "Good managers communicate clearly.",
                th: "ผู้จัดการที่ดีสื่อสารอย่างชัดเจน"
            }
        ]
    },
    {
        id: 239,
        word: "express",
        pos: "v.",
        thai: "แสดงออก",
        definition: "to show your thoughts or feelings",
        hint: "show feelings",
        level: "B1",
        cats: [
            "daily", "social"
        ],
        examples: [
            {
                en: "She expressed her gratitude.",
                th: "เธอแสดงความขอบคุณ"
            }
        ]
    },
    {
        id: 240,
        word: "realize",
        pos: "v.",
        thai: "ตระหนัก / รู้ตัว",
        definition: "to understand or become aware of something",
        hint: "become aware",
        level: "B1",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "I realized I made a mistake.",
                th: "ฉันตระหนักว่าฉันทำผิด"
            }
        ]
    },
    {
        id: 241,
        word: "analyze",
        pos: "v.",
        thai: "วิเคราะห์",
        definition: "to examine something carefully to understand it",
        hint: "examine closely",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We need to analyze the data carefully.",
                th: "เราต้องวิเคราะห์ข้อมูลอย่างระมัดระวัง"
            }
        ]
    },
    {
        id: 242,
        word: "evaluate",
        pos: "v.",
        thai: "ประเมิน",
        definition: "to judge the value or quality of something",
        hint: "assess",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Teachers evaluate students' performance.",
                th: "ครูประเมินผลการเรียนของนักเรียน"
            }
        ]
    },
    {
        id: 243,
        word: "assess",
        pos: "v.",
        thai: "ประเมิน / ตีราคา",
        definition: "to make a judgment about the nature or quality of something",
        hint: "judge",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The doctor will assess your condition.",
                th: "หมอจะประเมินอาการของคุณ"
            }
        ]
    },
    {
        id: 244,
        word: "interpret",
        pos: "v.",
        thai: "ตีความ / แปล",
        definition: "to explain the meaning of something",
        hint: "explain meaning",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "How do you interpret this poem?",
                th: "คุณตีความบทกวีนี้อย่างไร"
            }
        ]
    },
    {
        id: 245,
        word: "conclude",
        pos: "v.",
        thai: "สรุป / ลงความเห็น",
        definition: "to decide that something is true after considering the facts",
        hint: "decide from facts",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The research concluded that exercise is beneficial.",
                th: "การวิจัยสรุปว่าการออกกำลังกายมีประโยชน์"
            }
        ]
    },
    {
        id: 246,
        word: "assumption",
        pos: "n.",
        thai: "สมมติฐาน",
        definition: "something you believe to be true without proof",
        hint: "belief without proof",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Don't make assumptions without evidence.",
                th: "อย่าตั้งสมมติฐานโดยไม่มีหลักฐาน"
            }
        ]
    },
    {
        id: 247,
        word: "hypothesis",
        pos: "n.",
        thai: "สมมติฐาน (ทางวิทยาศาสตร์)",
        definition: "an idea that is suggested as an explanation for something",
        hint: "scientific theory",
        level: "B2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Scientists test their hypothesis through experiments.",
                th: "นักวิทยาศาสตร์ทดสอบสมมติฐานผ่านการทดลอง"
            }
        ]
    },
    {
        id: 248,
        word: "evidence",
        pos: "n.",
        thai: "หลักฐาน",
        definition: "facts or information that prove something is true",
        hint: "proof",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "There is strong evidence to support this theory.",
                th: "มีหลักฐานที่แข็งแกร่งสนับสนุนทฤษฎีนี้"
            }
        ]
    },
    {
        id: 249,
        word: "criteria",
        pos: "n.",
        thai: "เกณฑ์",
        definition: "standards used to judge or decide something",
        hint: "standards",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "What are the criteria for this job?",
                th: "เกณฑ์สำหรับงานนี้คืออะไร"
            }
        ]
    },
    {
        id: 250,
        word: "objective",
        pos: "adj./n.",
        thai: "เป็นกลาง / วัตถุประสงค์",
        definition: "not influenced by personal feelings; a goal",
        hint: "neutral/goal",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Try to be objective in your analysis.",
                th: "พยายามเป็นกลางในการวิเคราะห์ของคุณ"
            }
        ]
    },
    {
        id: 251,
        word: "subjective",
        pos: "adj.",
        thai: "เชิงอัตวิสัย",
        definition: "based on personal opinions or feelings",
        hint: "personal opinion",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Art appreciation is subjective.",
                th: "การชื่นชมศิลปะเป็นเรื่องเชิงอัตวิสัย"
            }
        ]
    },
    {
        id: 252,
        word: "perspective",
        pos: "n.",
        thai: "มุมมอง",
        definition: "a particular way of thinking about something",
        hint: "viewpoint",
        level: "B2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "From my perspective, this is the best solution.",
                th: "จากมุมมองของฉัน นี่คือวิธีแก้ปัญหาที่ดีที่สุด"
            }
        ]
    },
    {
        id: 253,
        word: "approach",
        pos: "n./v.",
        thai: "วิธีการ / เข้าหา",
        definition: "a way of dealing with something; to come near",
        hint: "method/come near",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need a new approach to this problem.",
                th: "เราต้องการวิธีการใหม่สำหรับปัญหานี้"
            }
        ]
    },
    {
        id: 254,
        word: "strategy",
        pos: "n.",
        thai: "กลยุทธ์",
        definition: "a plan designed to achieve a particular goal",
        hint: "plan",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Our marketing strategy is working well.",
                th: "กลยุทธ์การตลาดของเราได้ผลดี"
            }
        ]
    },
    {
        id: 255,
        word: "implement",
        pos: "v.",
        thai: "นำไปปฏิบัติ",
        definition: "to put a plan or decision into effect",
        hint: "put into action",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We will implement the new policy next month.",
                th: "เราจะนำนโยบายใหม่ไปปฏิบัติเดือนหน้า"
            }
        ]
    },
    {
        id: 256,
        word: "establish",
        pos: "v.",
        thai: "ก่อตั้ง / สร้าง",
        definition: "to create or set up something",
        hint: "create/set up",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "They established the company in 1995.",
                th: "พวกเขาก่อตั้งบริษัทในปี 1995"
            }
        ]
    },
    {
        id: 257,
        word: "maintain",
        pos: "v.",
        thai: "รักษา / บำรุง",
        definition: "to keep something in good condition",
        hint: "keep in good condition",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "It's important to maintain good relationships.",
                th: "การรักษาความสัมพันธ์ที่ดีเป็นสิ่งสำคัญ"
            }
        ]
    },
    {
        id: 258,
        word: "sustain",
        pos: "v.",
        thai: "ค้ำจุน / ยั่งยืน",
        definition: "to keep something going over time",
        hint: "keep going",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need to sustain economic growth.",
                th: "เราต้องค้ำจุนการเติบโตทางเศรษฐกิจ"
            }
        ]
    },
    {
        id: 259,
        word: "enhance",
        pos: "v.",
        thai: "เสริม / ปรับปรุง",
        definition: "to improve the quality or value of something",
        hint: "improve quality",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "This software will enhance productivity.",
                th: "ซอฟต์แวร์นี้จะเสริมประสิทธิภาพการทำงาน"
            }
        ]
    },
    {
        id: 260,
        word: "optimize",
        pos: "v.",
        thai: "ปรับให้เหมาะสม",
        definition: "to make something as good or effective as possible",
        hint: "make best",
        level: "B2",
        cats: [
            "work", "technology"
        ],
        examples: [
            {
                en: "We need to optimize our website for mobile users.",
                th: "เราต้องปรับเว็บไซต์ให้เหมาะสมสำหรับผู้ใช้มือถือ"
            }
        ]
    },
    {
        id: 261,
        word: "efficient",
        pos: "adj.",
        thai: "มีประสิทธิภาพ",
        definition: "working well without wasting time or energy",
        hint: "effective",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "This is a very efficient way to work.",
                th: "นี่เป็นวิธีการทำงานที่มีประสิทธิภาพมาก"
            }
        ]
    },
    {
        id: 262,
        word: "effective",
        pos: "adj.",
        thai: "มีประสิทธิผล",
        definition: "producing the intended result",
        hint: "successful",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The new medicine is very effective.",
                th: "ยาใหม่นี้มีประสิทธิผลมาก"
            }
        ]
    },
    {
        id: 263,
        word: "significant",
        pos: "adj.",
        thai: "สำคัญ / มีนัยสำคัญ",
        definition: "large or important enough to have an effect",
        hint: "important/large",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "There was a significant improvement in sales.",
                th: "มีการปรับปรุงที่สำคัญในยอดขาย"
            }
        ]
    },
    {
        id: 264,
        word: "substantial",
        pos: "adj.",
        thai: "มาก / เป็นจำนวนมาก",
        definition: "large in amount, size, or importance",
        hint: "large amount",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "They made a substantial profit this year.",
                th: "พวกเขาทำกำไรได้เป็นจำนวนมากในปีนี้"
            }
        ]
    },
    {
        id: 265,
        word: "comprehensive",
        pos: "adj.",
        thai: "ครอบคลุม / ละเอียดครบถ้วน",
        definition: "including everything that is necessary; complete",
        hint: "complete/thorough",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We need a comprehensive plan.",
                th: "เราต้องการแผนที่ครอบคลุม"
            }
        ]
    },
    {
        id: 266,
        word: "extensive",
        pos: "adj.",
        thai: "กว้างขวาง / มากมาย",
        definition: "covering a large area; having great range",
        hint: "wide/large",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She has extensive experience in marketing.",
                th: "เธอมีประสบการณ์กว้างขวางในด้านการตลาด"
            }
        ]
    },
    {
        id: 267,
        word: "intensive",
        pos: "adj.",
        thai: "เข้มข้น",
        definition: "involving a lot of activity in a short period",
        hint: "concentrated",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "He took an intensive English course.",
                th: "เขาเรียนคอร์สภาษาอังกฤษแบบเข้มข้น"
            }
        ]
    },
    {
        id: 268,
        word: "precise",
        pos: "adj.",
        thai: "แม่นยำ / ชัดเจน",
        definition: "exact and accurate",
        hint: "exact",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Please give me precise instructions.",
                th: "กรุณาให้คำแนะนำที่แม่นยำ"
            }
        ]
    },
    {
        id: 269,
        word: "accurate",
        pos: "adj.",
        thai: "ถูกต้อง / แม่นยำ",
        definition: "correct and without mistakes",
        hint: "correct",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The report contains accurate information.",
                th: "รายงานมีข้อมูลที่ถูกต้อง"
            }
        ]
    },
    {
        id: 270,
        word: "reliable",
        pos: "adj.",
        thai: "เชื่อถือได้",
        definition: "able to be trusted or depended on",
        hint: "trustworthy",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "He is a reliable employee.",
                th: "เขาเป็นพนักงานที่เชื่อถือได้"
            }
        ]
    },
    {
        id: 271,
        word: "consistent",
        pos: "adj.",
        thai: "สม่ำเสมอ / คงเส้นคงวา",
        definition: "always behaving in the same way",
        hint: "steady/same",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She delivers consistent quality work.",
                th: "เธอส่งมอบงานที่มีคุณภาพสม่ำเสมอ"
            }
        ]
    },
    {
        id: 272,
        word: "flexible",
        pos: "adj.",
        thai: "ยืดหยุ่น",
        definition: "able to change or adapt easily",
        hint: "adaptable",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need flexible working hours.",
                th: "เราต้องการเวลาทำงานที่ยืดหยุ่น"
            }
        ]
    },
    {
        id: 273,
        word: "adapt",
        pos: "v.",
        thai: "ปรับตัว",
        definition: "to change to suit new conditions",
        hint: "adjust",
        level: "B2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Animals adapt to their environment.",
                th: "สัตว์ปรับตัวเข้ากับสิ่งแวดล้อม"
            }
        ]
    },
    {
        id: 274,
        word: "adjust",
        pos: "v.",
        thai: "ปรับ / ปรับแต่ง",
        definition: "to change something slightly to make it better",
        hint: "modify slightly",
        level: "B2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Please adjust the temperature.",
                th: "กรุณาปรับอุณหภูมิ"
            }
        ]
    },
    {
        id: 275,
        word: "modify",
        pos: "v.",
        thai: "ดัดแปลง / แก้ไข",
        definition: "to change something in order to improve it",
        hint: "change/improve",
        level: "B2",
        cats: [
            "work", "technology"
        ],
        examples: [
            {
                en: "We need to modify our approach.",
                th: "เราต้องดัดแปลงวิธีการของเรา"
            }
        ]
    },
    {
        id: 276,
        word: "transform",
        pos: "v.",
        thai: "เปลี่ยนแปลง / แปลงร่าง",
        definition: "to change completely",
        hint: "change completely",
        level: "B2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Technology has transformed our lives.",
                th: "เทคโนโลยีได้เปลี่ยนแปลงชีวิตของเรา"
            }
        ]
    },
    {
        id: 277,
        word: "innovation",
        pos: "n.",
        thai: "นวัตกรรม",
        definition: "a new idea, method, or invention",
        hint: "new invention",
        level: "B2",
        cats: [
            "work", "technology"
        ],
        examples: [
            {
                en: "This company is known for innovation.",
                th: "บริษัทนี้เป็นที่รู้จักในด้านนวัตกรรม"
            }
        ]
    },
    {
        id: 278,
        word: "revolutionary",
        pos: "adj.",
        thai: "ปฏิวัติ / เปลี่ยนแปลงครั้งใหญ่",
        definition: "involving a complete change",
        hint: "completely new",
        level: "B2",
        cats: [
            "work", "technology"
        ],
        examples: [
            {
                en: "This is a revolutionary new product.",
                th: "นี่คือผลิตภัณฑ์ใหม่ที่ปฏิวัติ"
            }
        ]
    },
    {
        id: 279,
        word: "sophisticated",
        pos: "adj.",
        thai: "ซับซ้อน / ล้ำสมัย",
        definition: "advanced and complex",
        hint: "advanced/complex",
        level: "B2",
        cats: [
            "work", "technology"
        ],
        examples: [
            {
                en: "This is sophisticated software.",
                th: "นี่คือซอฟต์แวร์ที่ซับซ้อน"
            }
        ]
    },
    {
        id: 280,
        word: "fundamental",
        pos: "adj.",
        thai: "พื้นฐาน / ขั้นพื้นฐาน",
        definition: "forming the base or core of something",
        hint: "basic/essential",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Reading is a fundamental skill.",
                th: "การอ่านเป็นทักษะพื้นฐาน"
            }
        ]
    },
    {
        id: 281,
        word: "essential",
        pos: "adj.",
        thai: "จำเป็น / สำคัญ",
        definition: "absolutely necessary; very important",
        hint: "necessary",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Water is essential for life.",
                th: "น้ำเป็นสิ่งจำเป็นสำหรับชีวิต"
            }
        ]
    },
    {
        id: 282,
        word: "crucial",
        pos: "adj.",
        thai: "สำคัญยิ่ง / ตัดสินชะตา",
        definition: "extremely important",
        hint: "extremely important",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Timing is crucial in this project.",
                th: "เวลาเป็นสิ่งสำคัญยิ่งในโครงการนี้"
            }
        ]
    },
    {
        id: 283,
        word: "vital",
        pos: "adj.",
        thai: "สำคัญต่อชีวิต / จำเป็นอย่างยิ่ง",
        definition: "absolutely necessary for life or success",
        hint: "life-important",
        level: "B2",
        cats: [
            "health", "work"
        ],
        examples: [
            {
                en: "Exercise is vital for good health.",
                th: "การออกกำลังกายสำคัญต่อสุขภาพที่ดี"
            }
        ]
    },
    {
        id: 284,
        word: "priority",
        pos: "n.",
        thai: "ความสำคัญ / สิ่งที่ต้องทำก่อน",
        definition: "something that is more important than other things",
        hint: "most important",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Health should be your top priority.",
                th: "สุขภาพควรเป็นสิ่งสำคัญอันดับแรกของคุณ"
            }
        ]
    },
    {
        id: 285,
        word: "consequence",
        pos: "n.",
        thai: "ผลที่ตามมา",
        definition: "a result of a particular action or situation",
        hint: "result",
        level: "B2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Every action has consequences.",
                th: "การกระทำทุกอย่างมีผลที่ตามมา"
            }
        ]
    },
    {
        id: 286,
        word: "implication",
        pos: "n.",
        thai: "นัยยะ / ผลกระทบ",
        definition: "a possible result or effect of an action",
        hint: "possible effect",
        level: "B2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "What are the implications of this decision?",
                th: "นัยยะของการตัดสินใจนี้คืออะไร"
            }
        ]
    },
    {
        id: 287,
        word: "phenomenon",
        pos: "n.",
        thai: "ปรากฏการณ์",
        definition: "something that happens or exists, especially something unusual",
        hint: "unusual event",
        level: "B2",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "Climate change is a global phenomenon.",
                th: "การเปลี่ยนแปลงสภาพภูมิอากาศเป็นปรากฏการณ์ระดับโลก"
            }
        ]
    },
    {
        id: 288,
        word: "concept",
        pos: "n.",
        thai: "แนวคิด / ความคิด",
        definition: "an idea or principle",
        hint: "idea/principle",
        level: "B2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "The concept of time is complex.",
                th: "แนวคิดเรื่องเวลาซับซ้อน"
            }
        ]
    },
    {
        id: 289,
        word: "principle",
        pos: "n.",
        thai: "หลักการ / หลักธรรม",
        definition: "a basic rule or belief about what is right",
        hint: "basic rule",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Honesty is an important principle.",
                th: "ความซื่อสัตย์เป็นหลักการที่สำคัญ"
            }
        ]
    },
    {
        id: 290,
        word: "integrity",
        pos: "n.",
        thai: "ความซื่อสัตย์ / ความเที่ยงธรรม",
        definition: "the quality of being honest and having strong moral principles",
        hint: "honesty/morals",
        level: "B2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She is known for her integrity.",
                th: "เธอเป็นที่รู้จักในเรื่องความซื่อสัตย์"
            }
        ]
    },
    {
        id: 291,
        word: "articulate",
        pos: "v./adj.",
        thai: "แสดงออกอย่างชัดเจน / คล่องแคล่ว",
        definition: "to express thoughts clearly; able to speak fluently",
        hint: "express clearly",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She can articulate complex ideas very well.",
                th: "เธอสามารถแสดงความคิดที่ซับซ้อนได้อย่างชัดเจน"
            }
        ]
    },
    {
        id: 292,
        word: "eloquent",
        pos: "adj.",
        thai: "คล่องแคล่วในการพูด",
        definition: "fluent and persuasive in speaking or writing",
        hint: "persuasive speech",
        level: "C1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "The politician gave an eloquent speech.",
                th: "นักการเมืองกล่าวสุนทรพจน์อย่างคล่องแคล่ว"
            }
        ]
    },
    {
        id: 293,
        word: "coherent",
        pos: "adj.",
        thai: "สอดคล้องกัน / เป็นระบบ",
        definition: "logical and consistent",
        hint: "logical/consistent",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Please present a coherent argument.",
                th: "กรุณานำเสนอข้อโต้แย้งที่สอดคล้องกัน"
            }
        ]
    },
    {
        id: 294,
        word: "ambiguous",
        pos: "adj.",
        thai: "คลุมเครือ / กำกวม",
        definition: "having more than one possible meaning",
        hint: "unclear meaning",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The contract terms are ambiguous.",
                th: "เงื่อนไขสัญญาคลุมเครือ"
            }
        ]
    },
    {
        id: 295,
        word: "explicit",
        pos: "adj.",
        thai: "ชัดเจน / เปิดเผย",
        definition: "stated clearly and in detail",
        hint: "clearly stated",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The instructions were explicit.",
                th: "คำแนะนำชัดเจน"
            }
        ]
    },
    {
        id: 296,
        word: "implicit",
        pos: "adj.",
        thai: "โดยนัย / ไม่ได้ระบุชัดเจน",
        definition: "suggested without being directly expressed",
        hint: "implied/suggested",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "There was an implicit threat in his words.",
                th: "มีการขู่โดยนัยในคำพูดของเขา"
            }
        ]
    },
    {
        id: 297,
        word: "subtle",
        pos: "adj.",
        thai: "ละเอียดอ่อน / แยบยล",
        definition: "not obvious; requiring careful observation",
        hint: "not obvious",
        level: "C1",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "There was a subtle change in her behavior.",
                th: "มีการเปลี่ยนแปลงที่ละเอียดอ่อนในพฤติกรรมของเธอ"
            }
        ]
    },
    {
        id: 298,
        word: "nuance",
        pos: "n.",
        thai: "ความแตกต่างเล็กน้อย / นัยยะ",
        definition: "a subtle difference in meaning or expression",
        hint: "subtle difference",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She understands the nuances of the language.",
                th: "เธอเข้าใจนัยยะของภาษา"
            }
        ]
    },
    {
        id: 299,
        word: "profound",
        pos: "adj.",
        thai: "ลึกซึ้ง / ยิ่งใหญ่",
        definition: "very deep or intense",
        hint: "very deep",
        level: "C1",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "The book had a profound impact on me.",
                th: "หนังสือเล่มนี้มีผลกระทบลึกซึ้งต่อฉัน"
            }
        ]
    },
    {
        id: 300,
        word: "intricate",
        pos: "adj.",
        thai: "ซับซ้อน / ประณีต",
        definition: "very complicated or detailed",
        hint: "very complex",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The design has intricate patterns.",
                th: "การออกแบบมีลวดลายที่ประณีต"
            }
        ]
    },
    {
        id: 301,
        word: "elaborate",
        pos: "v./adj.",
        thai: "อธิบายรายละเอียด / ซับซ้อน",
        definition: "to explain in more detail; complex and detailed",
        hint: "detailed/complex",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Could you elaborate on that point?",
                th: "คุณช่วยอธิบายประเด็นนั้นรายละเอียดได้ไหม"
            }
        ]
    },
    {
        id: 302,
        word: "scrutinize",
        pos: "v.",
        thai: "ตรวจสอบอย่างละเอียด",
        definition: "to examine something very carefully",
        hint: "examine carefully",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The committee will scrutinize the proposal.",
                th: "คณะกรรมการจะตรวจสอบข้อเสนออย่างละเอียด"
            }
        ]
    },
    {
        id: 303,
        word: "contemplate",
        pos: "v.",
        thai: "ไตร่ตรอง / พิจารณา",
        definition: "to think about something deeply",
        hint: "think deeply",
        level: "C1",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "He contemplated his future career.",
                th: "เขาไตร่ตรองเกี่ยวกับอาชีพในอนาคต"
            }
        ]
    },
    {
        id: 304,
        word: "deliberate",
        pos: "v./adj.",
        thai: "ปรึกษาหารือ / จงใจ",
        definition: "to think carefully; done intentionally",
        hint: "intentional/careful",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The jury will deliberate on the verdict.",
                th: "คณะลูกขุนจะปรึกษาหารือเกี่ยวกับคำตัดสิน"
            }
        ]
    },
    {
        id: 305,
        word: "speculate",
        pos: "v.",
        thai: "คาดเดา / เก็งกำไร",
        definition: "to form theories without firm evidence",
        hint: "guess/theorize",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Experts speculate about the cause.",
                th: "ผู้เชี่ยวชาญคาดเดาเกี่ยวกับสาเหตุ"
            }
        ]
    },
    {
        id: 306,
        word: "anticipate",
        pos: "v.",
        thai: "คาดหวัง / คาดการณ์",
        definition: "to expect or predict something",
        hint: "expect/predict",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We anticipate good results.",
                th: "เราคาดหวังผลลัพธ์ที่ดี"
            }
        ]
    },
    {
        id: 307,
        word: "perceive",
        pos: "v.",
        thai: "รับรู้ / มองเห็น",
        definition: "to become aware of through the senses",
        hint: "become aware",
        level: "C1",
        cats: [
            "daily", "school"
        ],
        examples: [
            {
                en: "How do you perceive this situation?",
                th: "คุณรับรู้สถานการณ์นี้อย่างไร"
            }
        ]
    },
    {
        id: 308,
        word: "conceive",
        pos: "v.",
        thai: "คิดขึ้น / ตั้งครรภ์",
        definition: "to form an idea; to become pregnant",
        hint: "form idea",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She conceived a brilliant plan.",
                th: "เธอคิดแผนที่ยอดเยียมขึ้นมา"
            }
        ]
    },
    {
        id: 309,
        word: "comprehend",
        pos: "v.",
        thai: "เข้าใจ / รู้เท่าทัน",
        definition: "to understand something completely",
        hint: "understand fully",
        level: "C1",
        cats: [
            "school", "daily"
        ],
        examples: [
            {
                en: "It's difficult to comprehend the scale of the problem.",
                th: "เป็นการยากที่จะเข้าใจขนาดของปัญหา"
            }
        ]
    },
    {
        id: 310,
        word: "discern",
        pos: "v.",
        thai: "แยกแยะ / มองเห็น",
        definition: "to recognize or identify something",
        hint: "recognize/identify",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "I can discern a pattern in the data.",
                th: "ฉันสามารถแยกแยะรูปแบบในข้อมูลได้"
            }
        ]
    },
    {
        id: 311,
        word: "distinguish",
        pos: "v.",
        thai: "แยกแยะ / ทำให้โดดเด่น",
        definition: "to recognize differences between things",
        hint: "tell apart",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Can you distinguish between these two sounds?",
                th: "คุณแยกแยะเสียงสองเสียงนี้ได้ไหม"
            }
        ]
    },
    {
        id: 312,
        word: "differentiate",
        pos: "v.",
        thai: "แยกความแตกต่าง",
        definition: "to identify differences between things",
        hint: "identify differences",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We need to differentiate our products.",
                th: "เราต้องแยกความแตกต่างของผลิตภัณฑ์"
            }
        ]
    },
    {
        id: 313,
        word: "synthesize",
        pos: "v.",
        thai: "สังเคราะห์ / รวมเข้าด้วยกัน",
        definition: "to combine different ideas or elements",
        hint: "combine elements",
        level: "C1",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "The researcher synthesized various theories.",
                th: "นักวิจัยสังเคราะห์ทฤษฎีต่างๆ"
            }
        ]
    },
    {
        id: 314,
        word: "consolidate",
        pos: "v.",
        thai: "รวมเข้าด้วยกัน / เสริมกำลัง",
        definition: "to combine things to make them stronger",
        hint: "combine/strengthen",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The company consolidated its operations.",
                th: "บริษัทรวมการดำเนินงานเข้าด้วยกัน"
            }
        ]
    },
    {
        id: 315,
        word: "integrate",
        pos: "v.",
        thai: "รวมเข้าด้วยกัน / บูรณาการ",
        definition: "to combine things so they work together",
        hint: "combine together",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "We need to integrate new technology.",
                th: "เราต้องบูรณาการเทคโนโลยีใหม่"
            }
        ]
    },
    {
        id: 316,
        word: "assimilate",
        pos: "v.",
        thai: "ดูดซึม / รวมเข้าด้วยกัน",
        definition: "to absorb and integrate information or people",
        hint: "absorb/integrate",
        level: "C1",
        cats: [
            "school", "social"
        ],
        examples: [
            {
                en: "It takes time to assimilate new information.",
                th: "ต้องใช้เวลาในการดูดซึมข้อมูลใหม่"
            }
        ]
    },
    {
        id: 317,
        word: "manipulate",
        pos: "v.",
        thai: "จัดการ / บิดเบือน",
        definition: "to control or influence skillfully",
        hint: "control/influence",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Don't let others manipulate you.",
                th: "อย่าให้คนอื่นมาจัดการคุณ"
            }
        ]
    },
    {
        id: 318,
        word: "exploit",
        pos: "v./n.",
        thai: "ใช้ประโยชน์ / เอาเปรียบ",
        definition: "to use something for advantage; a brave act",
        hint: "use for advantage",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Companies exploit natural resources.",
                th: "บริษัทใช้ประโยชน์จากทรัพยากรธรรมชาติ"
            }
        ]
    },
    {
        id: 319,
        word: "undermine",
        pos: "v.",
        thai: "บ่อนทำลาย / ทำลายรากฐาน",
        definition: "to weaken or damage something gradually",
        hint: "weaken gradually",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "His actions undermined team morale.",
                th: "การกระทำของเขาบ่อนทำลายขวัญกำลังใจของทีม"
            }
        ]
    },
    {
        id: 320,
        word: "deteriorate",
        pos: "v.",
        thai: "เสื่อมสภาพ / แย่ลง",
        definition: "to become worse in quality or condition",
        hint: "become worse",
        level: "C1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "His health began to deteriorate.",
                th: "สุขภาพของเขาเริ่มเสื่อมสภาพ"
            }
        ]
    },
    {
        id: 321,
        word: "fluctuate",
        pos: "v.",
        thai: "ผันผวน / เปลี่ยนแปลง",
        definition: "to change irregularly in amount or level",
        hint: "change irregularly",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Prices fluctuate with market demand.",
                th: "ราคาผันผวนตามความต้องการของตลาด"
            }
        ]
    },
    {
        id: 322,
        word: "accelerate",
        pos: "v.",
        thai: "เร่ง / เพิ่มความเร็ว",
        definition: "to increase speed or rate of progress",
        hint: "speed up",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need to accelerate the project.",
                th: "เราต้องเร่งโครงการ"
            }
        ]
    },
    {
        id: 323,
        word: "inhibit",
        pos: "v.",
        thai: "ยับยั้ง / ขัดขวาง",
        definition: "to prevent or slow down a process",
        hint: "prevent/slow",
        level: "C1",
        cats: [
            "work", "health"
        ],
        examples: [
            {
                en: "Fear can inhibit creativity.",
                th: "ความกลัวสามารถยับยั้งความคิดสร้างสรรค์"
            }
        ]
    },
    {
        id: 324,
        word: "stimulate",
        pos: "v.",
        thai: "กระตุ้น / ส่งเสริม",
        definition: "to encourage activity or growth",
        hint: "encourage activity",
        level: "C1",
        cats: [
            "work", "health"
        ],
        examples: [
            {
                en: "Exercise stimulates blood circulation.",
                th: "การออกกำลังกายกระตุ้นการไหลเวียนของเลือด"
            }
        ]
    },
    {
        id: 325,
        word: "facilitate",
        pos: "v.",
        thai: "อำนวยความสะดวก / ช่วยให้ง่าย",
        definition: "to make something easier or help bring about",
        hint: "make easier",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Technology facilitates communication.",
                th: "เทคโนโลยีอำนวยความสะดวกในการสื่อสาร"
            }
        ]
    },
    {
        id: 326,
        word: "advocate",
        pos: "v./n.",
        thai: "สนับสนุน / ผู้สนับสนุน",
        definition: "to support or recommend; a supporter",
        hint: "support/recommend",
        level: "C1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "She advocates for environmental protection.",
                th: "เธอสนับสนุนการปกป้องสิ่งแวดล้อม"
            }
        ]
    },
    {
        id: 327,
        word: "endorse",
        pos: "v.",
        thai: "สนับสนุน / รับรอง",
        definition: "to publicly support or approve of something",
        hint: "publicly support",
        level: "C1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "The celebrity endorsed the product.",
                th: "ดาราคนนั้นรับรองผลิตภัณฑ์"
            }
        ]
    },
    {
        id: 328,
        word: "denounce",
        pos: "v.",
        thai: "ประณาม / กล่าวโทษ",
        definition: "to publicly criticize or condemn",
        hint: "publicly criticize",
        level: "C1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "The government denounced the terrorist attack.",
                th: "รัฐบาลประณามการโจมตีของผู้ก่อการร้าย"
            }
        ]
    },
    {
        id: 329,
        word: "refute",
        pos: "v.",
        thai: "หักล้าง / โต้แย้ง",
        definition: "to prove that something is wrong",
        hint: "prove wrong",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The scientist refuted the theory.",
                th: "นักวิทยาศาสตร์หักล้างทฤษฎี"
            }
        ]
    },
    {
        id: 330,
        word: "substantiate",
        pos: "v.",
        thai: "ยืนยัน / สนับสนุนด้วยหลักฐาน",
        definition: "to provide evidence to support a claim",
        hint: "provide evidence",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Can you substantiate your claims?",
                th: "คุณสามารถยืนยันข้อกล่าวอ้างของคุณได้ไหม"
            }
        ]
    },
    {
        id: 331,
        word: "corroborate",
        pos: "v.",
        thai: "ยืนยัน / สนับสนุน",
        definition: "to confirm or support with evidence",
        hint: "confirm with evidence",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "The witness corroborated his story.",
                th: "พยานยืนยันเรื่องราวของเขา"
            }
        ]
    },
    {
        id: 332,
        word: "vindicate",
        pos: "v.",
        thai: "พิสูจน์ความบริสุทธิ์ / แก้ต่าง",
        definition: "to clear someone of blame or suspicion",
        hint: "clear of blame",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The evidence vindicated her claims.",
                th: "หลักฐานพิสูจน์ความบริสุทธิ์ของข้อกล่าวอ้างของเธอ"
            }
        ]
    },
    {
        id: 333,
        word: "perpetuate",
        pos: "v.",
        thai: "ทำให้คงอยู่ / ขยายต่อไป",
        definition: "to make something continue indefinitely",
        hint: "make continue",
        level: "C1",
        cats: [
            "work", "social"
        ],
        examples: [
            {
                en: "This system perpetuates inequality.",
                th: "ระบบนี้ทำให้ความไม่เท่าเทียมคงอยู่"
            }
        ]
    },
    {
        id: 334,
        word: "alleviate",
        pos: "v.",
        thai: "บรรเทา / ลดความรุนแรง",
        definition: "to make something less severe",
        hint: "make less severe",
        level: "C1",
        cats: [
            "health", "daily"
        ],
        examples: [
            {
                en: "This medicine will alleviate the pain.",
                th: "ยานี้จะบรรเทาความเจ็บปวด"
            }
        ]
    },
    {
        id: 335,
        word: "mitigate",
        pos: "v.",
        thai: "บรรเทา / ลดความรุนแรง",
        definition: "to make something less harmful or severe",
        hint: "reduce severity",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need to mitigate the risks.",
                th: "เราต้องบรรเทาความเสี่ยง"
            }
        ]
    },
    {
        id: 336,
        word: "exacerbate",
        pos: "v.",
        thai: "ทำให้แย่ลง / รุนแรงขึ้น",
        definition: "to make a problem worse",
        hint: "make worse",
        level: "C1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Stress can exacerbate health problems.",
                th: "ความเครียดสามารถทำให้ปัญหาสุขภาพแย่ลง"
            }
        ]
    },
    {
        id: 337,
        word: "unprecedented",
        pos: "adj.",
        thai: "ไม่เคยมีมาก่อน",
        definition: "never done or known before",
        hint: "never before",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "This is an unprecedented situation.",
                th: "นี่เป็นสถานการณ์ที่ไม่เคยมีมาก่อน"
            }
        ]
    },
    {
        id: 338,
        word: "ubiquitous",
        pos: "adj.",
        thai: "แพร่หลายทุกหนทุกแห่ง",
        definition: "present everywhere at the same time",
        hint: "everywhere",
        level: "C1",
        cats: [
            "technology", "daily"
        ],
        examples: [
            {
                en: "Smartphones are ubiquitous in modern society.",
                th: "สมาร์ทโฟนแพร่หลายในสังคมสมัยใหม่"
            }
        ]
    },
    {
        id: 339,
        word: "inherent",
        pos: "adj.",
        thai: "โดยธรรมชาติ / แท้จริง",
        definition: "existing as a natural or basic part of something",
        hint: "natural part",
        level: "C1",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "There are inherent risks in this business.",
                th: "มีความเสี่ยงโดยธรรมชาติในธุรกิจนี้"
            }
        ]
    },
    {
        id: 340,
        word: "tangible",
        pos: "adj.",
        thai: "จับต้องได้ / เป็นรูปธรรม",
        definition: "clear and definite; able to be touched",
        hint: "touchable/clear",
        level: "C1",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "We need tangible results.",
                th: "เราต้องการผลลัพธ์ที่เป็นรูปธรรม"
            }
        ]
    },
    {
        id: 341,
        word: "erudite",
        pos: "adj.",
        thai: "มีความรู้กว้างขวาง / นักปราชญ์",
        definition: "having or showing great knowledge gained from reading",
        hint: "very learned",
        level: "C2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "The professor's erudite lecture impressed everyone.",
                th: "การบรรยายที่แสดงความรู้กว้างขวางของศาสตราจารย์ทำให้ทุกคนประทับใจ"
            }
        ]
    },
    {
        id: 342,
        word: "perspicacious",
        pos: "adj.",
        thai: "เฉียบแหลม / มีความเข้าใจลึกซึ้ง",
        definition: "having keen insight and understanding",
        hint: "sharp insight",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Her perspicacious analysis revealed the problem.",
                th: "การวิเคราะห์ที่เฉียบแหลมของเธอเผยให้เห็นปัญหา"
            }
        ]
    },
    {
        id: 343,
        word: "sagacious",
        pos: "adj.",
        thai: "ฉลาดหลักแหลม / มีปัญญา",
        definition: "having or showing keen mental discernment and good judgment",
        hint: "wise judgment",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The sagacious leader made the right decision.",
                th: "ผู้นำที่ฉลาดหลักแหลมตัดสินใจถูกต้อง"
            }
        ]
    },
    {
        id: 344,
        word: "astute",
        pos: "adj.",
        thai: "เฉียบแหลม / ชาญฉลาด",
        definition: "having or showing an ability to accurately assess situations",
        hint: "shrewd/clever",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "His astute business sense led to success.",
                th: "ความเฉียบแหลมทางธุรกิจของเขานำไปสู่ความสำเร็จ"
            }
        ]
    },
    {
        id: 345,
        word: "acumen",
        pos: "n.",
        thai: "ความเฉียบแหลม / ไหวพริบ",
        definition: "the ability to make good judgments and quick decisions",
        hint: "sharp judgment",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She showed remarkable business acumen.",
                th: "เธอแสดงความเฉียบแหลมทางธุรกิจที่น่าทึ่ง"
            }
        ]
    },
    {
        id: 346,
        word: "discernment",
        pos: "n.",
        thai: "การแยกแยะ / ความเข้าใจลึกซึ้ง",
        definition: "the ability to judge well",
        hint: "good judgment",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "His discernment in art is widely respected.",
                th: "การแยกแยะศิลปะของเขาได้รับการเคารพอย่างกว้างขวาง"
            }
        ]
    },
    {
        id: 347,
        word: "perspicacity",
        pos: "n.",
        thai: "ความเฉียบแหลม / ความเข้าใจลึกซึ้ง",
        definition: "acuteness of perception, discernment, or understanding",
        hint: "sharp understanding",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Her perspicacity in solving problems is remarkable.",
                th: "ความเฉียบแหลมในการแก้ปัญหาของเธอน่าทึ่ง"
            }
        ]
    },
    {
        id: 348,
        word: "sagacity",
        pos: "n.",
        thai: "ปัญญา / ความฉลาดหลักแหลม",
        definition: "the quality of being sagacious; wisdom",
        hint: "wisdom",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "The elder's sagacity guided the community.",
                th: "ปัญญาของผู้อาวุโสนำทางชุมชน"
            }
        ]
    },
    {
        id: 349,
        word: "circumspect",
        pos: "adj.",
        thai: "ระมัดระวัง / รอบคอบ",
        definition: "wary and unwilling to take risks",
        hint: "very careful",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "He was circumspect about making promises.",
                th: "เขาระมัดระวังในการให้คำมั่นสัญญา"
            }
        ]
    },
    {
        id: 350,
        word: "judicious",
        pos: "adj.",
        thai: "รอบคอบ / มีวิจารณญาณ",
        definition: "having, showing, or done with good judgment",
        hint: "wise/sensible",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She made a judicious use of her resources.",
                th: "เธอใช้ทรัพยากรอย่างรอบคอบ"
            }
        ]
    },
    {
        id: 351,
        word: "prudent",
        pos: "adj.",
        thai: "รอบคอบ / ระมัดระวัง",
        definition: "acting with or showing care and thought for the future",
        hint: "careful/wise",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "It would be prudent to save money.",
                th: "การออมเงินจะเป็นสิ่งที่รอบคอบ"
            }
        ]
    },
    {
        id: 352,
        word: "meticulous",
        pos: "adj.",
        thai: "พิถีพิถัน / ละเอียดถี่ถ้วน",
        definition: "showing great attention to detail; very careful",
        hint: "very detailed",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She is meticulous in her research.",
                th: "เธอพิถีพิถันในการวิจัย"
            }
        ]
    },
    {
        id: 353,
        word: "fastidious",
        pos: "adj.",
        thai: "จู้จี้ / เลือกมาก",
        definition: "very attentive to accuracy and detail",
        hint: "very picky",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "He is fastidious about his appearance.",
                th: "เขาจู้จี้เรื่องรูปลักษณ์ของตัวเอง"
            }
        ]
    },
    {
        id: 354,
        word: "scrupulous",
        pos: "adj.",
        thai: "พิถีพิถัน / มีมโนธรรม",
        definition: "diligent, thorough, and extremely attentive to details",
        hint: "very thorough",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "She was scrupulous in following the rules.",
                th: "เธอพิถีพิถันในการปฏิบัติตามกฎ"
            }
        ]
    },
    {
        id: 355,
        word: "assiduous",
        pos: "adj.",
        thai: "ขยันขันแข็ง / อุตสาหะ",
        definition: "showing great care and perseverance",
        hint: "very diligent",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "His assiduous efforts paid off.",
                th: "ความพยายามอย่างขยันขันแข็งของเขาได้ผล"
            }
        ]
    },
    {
        id: 356,
        word: "diligent",
        pos: "adj.",
        thai: "ขยันขันแข็ง / อุตสาหะ",
        definition: "having or showing care and conscientiousness",
        hint: "hardworking",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "She is a diligent student.",
                th: "เธอเป็นนักเรียนที่ขยันขันแข็ง"
            }
        ]
    },
    {
        id: 357,
        word: "tenacious",
        pos: "adj.",
        thai: "ยืนหยัด / ไม่ยอมแพ้",
        definition: "tending to keep a firm hold; persistent",
        hint: "persistent",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "Her tenacious spirit helped her succeed.",
                th: "จิตใจที่ยืนหยัดช่วยให้เธอประสบความสำเร็จ"
            }
        ]
    },
    {
        id: 358,
        word: "perseverance",
        pos: "n.",
        thai: "ความอดทน / ความพากเพียร",
        definition: "persistence in doing something despite difficulty",
        hint: "persistence",
        level: "C2",
        cats: [
            "work", "school"
        ],
        examples: [
            {
                en: "Success requires perseverance.",
                th: "ความสำเร็จต้องใช้ความพากเพียร"
            }
        ]
    },
    {
        id: 359,
        word: "fortitude",
        pos: "n.",
        thai: "ความกล้าหาญ / ความอดทน",
        definition: "courage in pain or adversity",
        hint: "courage/strength",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "She faced the challenge with fortitude.",
                th: "เธอเผชิญความท้าทายด้วยความกล้าหาญ"
            }
        ]
    },
    {
        id: 360,
        word: "resilience",
        pos: "n.",
        thai: "ความยืดหยุ่น / ความสามารถในการฟื้นตัว",
        definition: "the ability to recover quickly from difficulties",
        hint: "bounce back",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Human resilience is remarkable.",
                th: "ความสามารถในการฟื้นตัวของมนุษย์น่าทึ่ง"
            }
        ]
    },
    {
        id: 361,
        word: "indomitable",
        pos: "adj.",
        thai: "ไม่ยอมแพ้ / ไม่ย่อท้อ",
        definition: "impossible to subdue or defeat",
        hint: "unbeatable spirit",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "Her indomitable will inspired others.",
                th: "ความตั้งใจที่ไม่ยอมแพ้ของเธอเป็นแรงบันดาลใจให้คนอื่น"
            }
        ]
    },
    {
        id: 362,
        word: "intrepid",
        pos: "adj.",
        thai: "กล้าหาญ / ไม่เกรงกลัว",
        definition: "fearless; adventurous",
        hint: "fearless",
        level: "C2",
        cats: [
            "daily", "travel"
        ],
        examples: [
            {
                en: "The intrepid explorer ventured into unknown territory.",
                th: "นักสำรวจที่กล้าหาญเดินทางเข้าไปในดินแดนที่ไม่รู้จัก"
            }
        ]
    },
    {
        id: 363,
        word: "audacious",
        pos: "adj.",
        thai: "กล้าหาญ / หาญกล้า",
        definition: "showing a willingness to take surprisingly bold risks",
        hint: "boldly daring",
        level: "C2",
        cats: [
            "work", "daily"
        ],
        examples: [
            {
                en: "His audacious plan surprised everyone.",
                th: "แผนที่กล้าหาญของเขาทำให้ทุกคนประหลาดใจ"
            }
        ]
    },
    {
        id: 364,
        word: "magnanimous",
        pos: "adj.",
        thai: "ใจกว้าง / มีน้ำใจ",
        definition: "generous or forgiving, especially toward a rival",
        hint: "generous/forgiving",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "He was magnanimous in victory.",
                th: "เขาใจกว้างในชัยชนะ"
            }
        ]
    },
    {
        id: 365,
        word: "benevolent",
        pos: "adj.",
        thai: "เมตตา / มีจิตใจดี",
        definition: "well meaning and kindly",
        hint: "kind/caring",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "The benevolent king cared for his people.",
                th: "กษัตริย์ที่เมตตาดูแลประชาชนของพระองค์"
            }
        ]
    },
    {
        id: 366,
        word: "altruistic",
        pos: "adj.",
        thai: "เสียสละ / ไม่เห็นแก่ตัว",
        definition: "showing unselfish concern for others",
        hint: "selfless",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "Her altruistic nature led her to volunteer.",
                th: "นิสัยที่เสียสละของเธอทำให้เธอเป็นอาสาสมัคร"
            }
        ]
    },
    {
        id: 367,
        word: "philanthropic",
        pos: "adj.",
        thai: "เพื่อการกุศล / มีจิตใจเสียสละ",
        definition: "seeking to promote the welfare of others",
        hint: "charitable",
        level: "C2",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "The philanthropic foundation helps many people.",
                th: "มูลนิธิเพื่อการกุศลช่วยเหลือคนมากมาย"
            }
        ]
    },
    {
        id: 368,
        word: "magnanimity",
        pos: "n.",
        thai: "ความใจกว้าง / ความมีน้ำใจ",
        definition: "generosity in forgiving an insult or injury",
        hint: "generous spirit",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "His magnanimity impressed his opponents.",
                th: "ความใจกว้างของเขาทำให้ฝ่ายตรงข้ามประทับใจ"
            }
        ]
    },
    {
        id: 369,
        word: "equanimity",
        pos: "n.",
        thai: "ความสงบใจ / ความใจเย็น",
        definition: "mental calmness and composure",
        hint: "calmness",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "She faced the crisis with equanimity.",
                th: "เธอเผชิญวิกฤตด้วยความสงบใจ"
            }
        ]
    },
    {
        id: 370,
        word: "serenity",
        pos: "n.",
        thai: "ความสงบ / ความเงียบสงบ",
        definition: "the state of being calm, peaceful, and untroubled",
        hint: "peaceful calm",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "The garden provided a sense of serenity.",
                th: "สวนให้ความรู้สึกสงบ"
            }
        ]
    },
    {
        id: 371,
        word: "tranquility",
        pos: "n.",
        thai: "ความเงียบสงบ / ความสุขุม",
        definition: "the quality or state of being tranquil; calm",
        hint: "peaceful quiet",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "The lake's tranquility was soothing.",
                th: "ความเงียบสงบของทะเลสาบทำให้รู้สึกผ่อนคลาย"
            }
        ]
    },
    {
        id: 372,
        word: "placid",
        pos: "adj.",
        thai: "สงบ / เงียบสงบ",
        definition: "not easily upset or excited; calm",
        hint: "calm/peaceful",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "The placid lake reflected the sky.",
                th: "ทะเลสาบที่สงบสะท้อนท้องฟ้า"
            }
        ]
    },
    {
        id: 373,
        word: "serene",
        pos: "adj.",
        thai: "สงบ / เงียบสงบ",
        definition: "calm, peaceful, and untroubled",
        hint: "peaceful",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Her serene expression calmed everyone.",
                th: "สีหน้าที่สงบของเธอทำให้ทุกคนสงบลง"
            }
        ]
    },
    {
        id: 374,
        word: "imperturbable",
        pos: "adj.",
        thai: "ไม่หวั่นไหว / สงบเสมอ",
        definition: "unable to be upset or excited; calm",
        hint: "always calm",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "His imperturbable manner impressed the clients.",
                th: "ท่าทีที่ไม่หวั่นไหวของเขาทำให้ลูกค้าประทับใจ"
            }
        ]
    },
    {
        id: 375,
        word: "stoic",
        pos: "adj./n.",
        thai: "อดทน / ไม่แสดงอารมณ์",
        definition: "enduring pain without showing feelings",
        hint: "emotionally strong",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "He remained stoic despite the bad news.",
                th: "เขายังคงอดทนแม้จะได้ข่าวร้าย"
            }
        ]
    },
    {
        id: 376,
        word: "phlegmatic",
        pos: "adj.",
        thai: "เฉยเมย / ไม่ค่อยแสดงอารมณ์",
        definition: "having an unemotional and stolidly calm disposition",
        hint: "unemotional",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "His phlegmatic response surprised everyone.",
                th: "การตอบสนองที่เฉยเมยของเขาทำให้ทุกคนประหลาดใจ"
            }
        ]
    },
    {
        id: 377,
        word: "sanguine",
        pos: "adj.",
        thai: "มองโลกในแง่ดี / ร่าเริง",
        definition: "optimistic or positive, especially in difficult situations",
        hint: "optimistic",
        level: "C2",
        cats: [
            "daily", "work"
        ],
        examples: [
            {
                en: "She remained sanguine about the future.",
                th: "เธอยังคงมองโลกในแง่ดีเกี่ยวกับอนาคต"
            }
        ]
    },
    {
        id: 378,
        word: "melancholic",
        pos: "adj.",
        thai: "เศร้าโศก / เหงา",
        definition: "feeling or expressing pensive sadness",
        hint: "sadly thoughtful",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "The melancholic music touched her heart.",
                th: "เพลงที่เศร้าโศกสัมผัสหัวใจเธอ"
            }
        ]
    },
    {
        id: 379,
        word: "choleric",
        pos: "adj.",
        thai: "โกรธง่าย / ฉุนเฉียว",
        definition: "bad-tempered or irritable",
        hint: "easily angered",
        level: "C2",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "His choleric temperament made him difficult to work with.",
                th: "อารมณ์ที่โกรธง่ายของเขาทำให้ทำงานด้วยยาก"
            }
        ]
    },
    {
        id: 380,
        word: "vivacious",
        pos: "adj.",
        thai: "มีชีวิตชีวา / ร่าเริง",
        definition: "attractively lively and animated",
        hint: "lively/energetic",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "Her vivacious personality lit up the room.",
                th: "บุคลิกที่มีชีวิตชีวาของเธอทำให้ห้องสว่างขึ้น"
            }
        ]
    },
    {
        id: 381,
        word: "ebullient",
        pos: "adj.",
        thai: "กระตือรือร้น / เต็มไปด้วยพลัง",
        definition: "cheerful and full of energy",
        hint: "enthusiastic",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "His ebullient spirit was contagious.",
                th: "จิตวิญญาณที่กระตือรือร้นของเขาติดต่อได้"
            }
        ]
    },
    {
        id: 382,
        word: "exuberant",
        pos: "adj.",
        thai: "เต็มไปด้วยพลัง / มีชีวิตชีวา",
        definition: "filled with or characterized by lively energy",
        hint: "full of energy",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "The children's exuberant laughter filled the playground.",
                th: "เสียงหัวเราะที่เต็มไปด้วยพลังของเด็กๆ เต็มไปหมดสนามเด็กเล่น"
            }
        ]
    },
    {
        id: 383,
        word: "effervescent",
        pos: "adj.",
        thai: "มีชีวิตชีวา / ร่าเริง",
        definition: "vivacious and enthusiastic",
        hint: "bubbly personality",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "Her effervescent personality made her popular.",
                th: "บุคลิกที่มีชีวิตชีวาของเธอทำให้เธอเป็นที่นิยม"
            }
        ]
    },
    {
        id: 384,
        word: "gregarious",
        pos: "adj.",
        thai: "ชอบเข้าสังคม / ชอบอยู่กับคนอื่น",
        definition: "fond of the company of others; sociable",
        hint: "sociable",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "His gregarious nature made him many friends.",
                th: "นิสัยที่ชอบเข้าสังคมของเขาทำให้เขามีเพื่อนมาก"
            }
        ]
    },
    {
        id: 385,
        word: "convivial",
        pos: "adj.",
        thai: "เป็นมิตร / สนุกสนาน",
        definition: "friendly, lively, and enjoyable",
        hint: "friendly/festive",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "The convivial atmosphere made everyone comfortable.",
                th: "บรรยากาศที่เป็นมิตรทำให้ทุกคนรู้สึกสบายใจ"
            }
        ]
    },
    {
        id: 386,
        word: "affable",
        pos: "adj.",
        thai: "เป็นมิตร / ใจดี",
        definition: "friendly, good-natured, or easy to talk to",
        hint: "friendly/approachable",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "The affable host welcomed everyone warmly.",
                th: "เจ้าภาพที่เป็นมิตรต้อนรับทุกคนอย่างอบอุ่น"
            }
        ]
    },
    {
        id: 387,
        word: "amiable",
        pos: "adj.",
        thai: "น่ารัก / เป็นมิตร",
        definition: "having or displaying a friendly and pleasant manner",
        hint: "pleasant/friendly",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "She has an amiable disposition.",
                th: "เธอมีนิสัยที่น่ารัก"
            }
        ]
    },
    {
        id: 388,
        word: "genial",
        pos: "adj.",
        thai: "เป็นมิตร / อบอุ่น",
        definition: "friendly and cheerful",
        hint: "warm/friendly",
        level: "C2",
        cats: [
            "social", "daily"
        ],
        examples: [
            {
                en: "His genial smile put everyone at ease.",
                th: "รอยยิ้มที่เป็นมิตรของเขาทำให้ทุกคนรู้สึกสบายใจ"
            }
        ]
    },
    {
        id: 389,
        word: "cordial",
        pos: "adj.",
        thai: "เป็นมิตร / อบอุ่น",
        definition: "warm and friendly",
        hint: "warm/sincere",
        level: "C2",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "They maintained cordial relations.",
                th: "พวกเขารักษาความสัมพันธ์ที่เป็นมิตร"
            }
        ]
    },
    {
        id: 390,
        word: "congenial",
        pos: "adj.",
        thai: "ถูกคอ / เข้ากันได้",
        definition: "pleasant because of a personality or interests similar to one's own",
        hint: "compatible",
        level: "C2",
        cats: [
            "social", "work"
        ],
        examples: [
            {
                en: "She found congenial colleagues at her new job.",
                th: "เธอพบเพื่อนร่วมงานที่ถูกคอในงานใหม่"
            }
        ]
    },
    {
        id: 391,
        word: "zero",
        pos: "num.",
        thai: "ศูนย์",
        definition: "the number 0",
        hint: "nothing",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I have zero money.",
                th: "ฉันมีเงินศูนย์บาท"
            }
        ]
    },
    {
        id: 392,
        word: "one",
        pos: "num.",
        thai: "หนึ่ง",
        definition: "the number 1",
        hint: "first",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I have one apple.",
                th: "ฉันมีแอปเปิลหนึ่งลูก"
            }
        ]
    },
    {
        id: 393,
        word: "two",
        pos: "num.",
        thai: "สอง",
        definition: "the number 2",
        hint: "pair",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Two cats are playing.",
                th: "แมวสองตัวกำลังเล่น"
            }
        ]
    },
    {
        id: 394,
        word: "three",
        pos: "num.",
        thai: "สาม",
        definition: "the number 3",
        hint: "trio",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I see three birds.",
                th: "ฉันเห็นนกสามตัว"
            }
        ]
    },
    {
        id: 395,
        word: "four",
        pos: "num.",
        thai: "สี่",
        definition: "the number 4",
        hint: "quad",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Four people are here.",
                th: "มีคนสี่คนอยู่ที่นี่"
            }
        ]
    },
    {
        id: 396,
        word: "five",
        pos: "num.",
        thai: "ห้า",
        definition: "the number 5",
        hint: "hand",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Five fingers on hand.",
                th: "มือมีห้านิ้ว"
            }
        ]
    },
    {
        id: 397,
        word: "six",
        pos: "num.",
        thai: "หก",
        definition: "the number 6",
        hint: "half dozen",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Six eggs in the box.",
                th: "มีไข่หกฟองในกล่อง"
            }
        ]
    },
    {
        id: 398,
        word: "seven",
        pos: "num.",
        thai: "เจ็ด",
        definition: "the number 7",
        hint: "week days",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Seven days a week.",
                th: "หนึ่งสัปดาห์มีเจ็ดวัน"
            }
        ]
    },
    {
        id: 399,
        word: "eight",
        pos: "num.",
        thai: "แปด",
        definition: "the number 8",
        hint: "spider legs",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Eight o'clock.",
                th: "เวลาแปดโมง"
            }
        ]
    },
    {
        id: 400,
        word: "nine",
        pos: "num.",
        thai: "เก้า",
        definition: "the number 9",
        hint: "before ten",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Nine students in class.",
                th: "มีนักเรียนเก้าคนในชั้น"
            }
        ]
    },
    {
        id: 401,
        word: "red",
        pos: "adj.",
        thai: "แดง",
        definition: "color of blood",
        hint: "stop sign",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The apple is red.",
                th: "แอปเปิลเป็นสีแดง"
            }
        ]
    },
    {
        id: 402,
        word: "blue",
        pos: "adj.",
        thai: "น้ำเงิน",
        definition: "color of sky",
        hint: "ocean",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The sky is blue.",
                th: "ท้องฟ้าเป็นสีน้ำเงิน"
            }
        ]
    },
    {
        id: 403,
        word: "green",
        pos: "adj.",
        thai: "เขียว",
        definition: "color of grass",
        hint: "nature",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Green leaves on tree.",
                th: "ใบไม้สีเขียวบนต้นไม้"
            }
        ]
    },
    {
        id: 404,
        word: "yellow",
        pos: "adj.",
        thai: "เหลือง",
        definition: "color of sun",
        hint: "banana",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Yellow banana.",
                th: "กล้วยสีเหลือง"
            }
        ]
    },
    {
        id: 405,
        word: "black",
        pos: "adj.",
        thai: "ดำ",
        definition: "darkest color",
        hint: "night",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Black cat.",
                th: "แมวสีดำ"
            }
        ]
    },
    {
        id: 406,
        word: "white",
        pos: "adj.",
        thai: "ขาว",
        definition: "lightest color",
        hint: "snow",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "White shirt.",
                th: "เสื้อสีขาว"
            }
        ]
    },
    {
        id: 407,
        word: "brown",
        pos: "adj.",
        thai: "น้ำตาล",
        definition: "color of wood",
        hint: "chocolate",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Brown dog.",
                th: "สุนัขสีน้ำตาล"
            }
        ]
    },
    {
        id: 408,
        word: "pink",
        pos: "adj.",
        thai: "ชมพู",
        definition: "light red color",
        hint: "flowers",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Pink flowers.",
                th: "ดอกไม้สีชมพู"
            }
        ]
    },
    {
        id: 409,
        word: "mother",
        pos: "n.",
        thai: "แม่",
        definition: "female parent",
        hint: "mom",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "My mother is kind.",
                th: "แม่ของฉันใจดี"
            }
        ]
    },
    {
        id: 410,
        word: "father",
        pos: "n.",
        thai: "พ่อ",
        definition: "male parent",
        hint: "dad",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "My father works hard.",
                th: "พ่อของฉันทำงานหนัก"
            }
        ]
    },
    {
        id: 411,
        word: "sister",
        pos: "n.",
        thai: "พี่สาว/น้องสาว",
        definition: "female sibling",
        hint: "girl sibling",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "My sister is tall.",
                th: "พี่สาวของฉันสูง"
            }
        ]
    },
    {
        id: 412,
        word: "brother",
        pos: "n.",
        thai: "พี่ชาย/น้องชาย",
        definition: "male sibling",
        hint: "boy sibling",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "My brother plays football.",
                th: "พี่ชายของฉันเล่นฟุตบอล"
            }
        ]
    },
    {
        id: 413,
        word: "child",
        pos: "n.",
        thai: "เด็ก",
        definition: "young person",
        hint: "kid",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "The child is happy.",
                th: "เด็กคนนั้นมีความสุข"
            }
        ]
    },
    {
        id: 414,
        word: "baby",
        pos: "n.",
        thai: "ทารก",
        definition: "very young child",
        hint: "infant",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "The baby is sleeping.",
                th: "ทารกกำลังนอน"
            }
        ]
    },
    {
        id: 415,
        word: "family",
        pos: "n.",
        thai: "ครอบครัว",
        definition: "parents and children",
        hint: "relatives",
        level: "A1",
        cats: ["family"],
        examples: [
            {
                en: "I love my family.",
                th: "ฉันรักครอบครัว"
            }
        ]
    },
    {
        id: 416,
        word: "friend",
        pos: "n.",
        thai: "เพื่อน",
        definition: "person you like",
        hint: "buddy",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "She is my friend.",
                th: "เธอเป็นเพื่อนฉัน"
            }
        ]
    },
    {
        id: 417,
        word: "head",
        pos: "n.",
        thai: "หัว",
        definition: "top part of body",
        hint: "brain",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "My head hurts.",
                th: "หัวฉันปวด"
            }
        ]
    },
    {
        id: 418,
        word: "eye",
        pos: "n.",
        thai: "ตา",
        definition: "organ for seeing",
        hint: "vision",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Blue eyes.",
                th: "ตาสีน้ำเงิน"
            }
        ]
    },
    {
        id: 419,
        word: "nose",
        pos: "n.",
        thai: "จมูก",
        definition: "organ for smelling",
        hint: "smell",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Big nose.",
                th: "จมูกใหญ่"
            }
        ]
    },
    {
        id: 420,
        word: "mouth",
        pos: "n.",
        thai: "ปาก",
        definition: "organ for eating",
        hint: "talk",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Open your mouth.",
                th: "อ้าปาก"
            }
        ]
    },
    {
        id: 421,
        word: "hand",
        pos: "n.",
        thai: "มือ",
        definition: "part with fingers",
        hint: "grab",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Wash your hands.",
                th: "ล้างมือ"
            }
        ]
    },
    {
        id: 422,
        word: "foot",
        pos: "n.",
        thai: "เท้า",
        definition: "part for walking",
        hint: "walk",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "My foot is big.",
                th: "เท้าฉันใหญ่"
            }
        ]
    },
    {
        id: 423,
        word: "hair",
        pos: "n.",
        thai: "ผม",
        definition: "grows on head",
        hint: "on head",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Long black hair.",
                th: "ผมยาวสีดำ"
            }
        ]
    },
    {
        id: 424,
        word: "face",
        pos: "n.",
        thai: "หน้า",
        definition: "front of head",
        hint: "eyes nose mouth",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Pretty face.",
                th: "หน้าสวย"
            }
        ]
    },
    {
        id: 425,
        word: "go",
        pos: "v.",
        thai: "ไป",
        definition: "move to place",
        hint: "leave",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I go to school.",
                th: "ฉันไปโรงเรียน"
            }
        ]
    },
    {
        id: 426,
        word: "come",
        pos: "v.",
        thai: "มา",
        definition: "move to here",
        hint: "arrive",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Come here please.",
                th: "มาที่นี่"
            }
        ]
    },
    {
        id: 427,
        word: "see",
        pos: "v.",
        thai: "เห็น",
        definition: "look with eyes",
        hint: "vision",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I see a cat.",
                th: "ฉันเห็นแมว"
            }
        ]
    },
    {
        id: 428,
        word: "hear",
        pos: "v.",
        thai: "ได้ยิน",
        definition: "listen with ears",
        hint: "sound",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I hear music.",
                th: "ฉันได้ยินเพลง"
            }
        ]
    },
    {
        id: 429,
        word: "eat",
        pos: "v.",
        thai: "กิน",
        definition: "put food in mouth",
        hint: "food",
        level: "A1",
        cats: [
            "daily", "food"
        ],
        examples: [
            {
                en: "I eat rice.",
                th: "ฉันกินข้าว"
            }
        ]
    },
    {
        id: 430,
        word: "drink",
        pos: "v.",
        thai: "ดื่ม",
        definition: "take liquid",
        hint: "water",
        level: "A1",
        cats: [
            "daily", "food"
        ],
        examples: [
            {
                en: "Drink water.",
                th: "ดื่มน้ำ"
            }
        ]
    },
    {
        id: 431,
        word: "sleep",
        pos: "v.",
        thai: "นอน",
        definition: "rest with closed eyes",
        hint: "bed",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "I sleep at night.",
                th: "ฉันนอนตอนกลางคืน"
            }
        ]
    },
    {
        id: 432,
        word: "walk",
        pos: "v.",
        thai: "เดิน",
        definition: "move on foot",
        hint: "steps",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Walk slowly.",
                th: "เดินช้าๆ"
            }
        ]
    },
    {
        id: 433,
        word: "run",
        pos: "v.",
        thai: "วิ่ง",
        definition: "move fast on foot",
        hint: "fast walk",
        level: "A1",
        cats: [
            "daily", "health"
        ],
        examples: [
            {
                en: "Run fast.",
                th: "วิ่งเร็ว"
            }
        ]
    },
    {
        id: 434,
        word: "sit",
        pos: "v.",
        thai: "นั่ง",
        definition: "rest on chair",
        hint: "chair",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Sit down please.",
                th: "นั่งลง"
            }
        ]
    },
    {
        id: 435,
        word: "stand",
        pos: "v.",
        thai: "ยืน",
        definition: "be upright",
        hint: "not sit",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Stand up.",
                th: "ยืนขึ้น"
            }
        ]
    },
    {
        id: 436,
        word: "like",
        pos: "v.",
        thai: "ชอบ",
        definition: "enjoy something",
        hint: "enjoy",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I like pizza.",
                th: "ฉันชอบพิซซ่า"
            }
        ]
    },
    {
        id: 437,
        word: "big",
        pos: "adj.",
        thai: "ใหญ่",
        definition: "large size",
        hint: "not small",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Big house.",
                th: "บ้านใหญ่"
            }
        ]
    },
    {
        id: 438,
        word: "small",
        pos: "adj.",
        thai: "เล็ก",
        definition: "little size",
        hint: "not big",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Small cat.",
                th: "แมวเล็ก"
            }
        ]
    },
    {
        id: 439,
        word: "good",
        pos: "adj.",
        thai: "ดี",
        definition: "high quality",
        hint: "not bad",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Good food.",
                th: "อาหารดี"
            }
        ]
    },
    {
        id: 440,
        word: "bad",
        pos: "adj.",
        thai: "แย่",
        definition: "poor quality",
        hint: "not good",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Bad weather.",
                th: "อากาศแย่"
            }
        ]
    },
    {
        id: 441,
        word: "new",
        pos: "adj.",
        thai: "ใหม่",
        definition: "recently made",
        hint: "not old",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "New car.",
                th: "รถใหม่"
            }
        ]
    },
    {
        id: 442,
        word: "old",
        pos: "adj.",
        thai: "เก่า",
        definition: "not new",
        hint: "aged",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Old book.",
                th: "หนังสือเก่า"
            }
        ]
    },
    {
        id: 443,
        word: "long",
        pos: "adj.",
        thai: "ยาว",
        definition: "great length",
        hint: "not short",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Long hair.",
                th: "ผมยาว"
            }
        ]
    },
    {
        id: 444,
        word: "short",
        pos: "adj.",
        thai: "สั้น",
        definition: "small length",
        hint: "not long",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Short dress.",
                th: "กระโปรงสั้น"
            }
        ]
    },
    {
        id: 445,
        word: "today",
        pos: "n.",
        thai: "วันนี้",
        definition: "this day",
        hint: "now",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Today is Monday.",
                th: "วันนี้วันจันทร์"
            }
        ]
    },
    {
        id: 446,
        word: "tomorrow",
        pos: "n.",
        thai: "พรุ่งนี้",
        definition: "next day",
        hint: "future",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "See you tomorrow.",
                th: "เจอกันพรุ่งนี้"
            }
        ]
    },
    {
        id: 447,
        word: "yesterday",
        pos: "n.",
        thai: "เมื่อวาน",
        definition: "past day",
        hint: "before",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Yesterday was fun.",
                th: "เมื่อวานสนุก"
            }
        ]
    },
    {
        id: 448,
        word: "morning",
        pos: "n.",
        thai: "เช้า",
        definition: "early day",
        hint: "sunrise",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Good morning.",
                th: "สวัสดีตอนเช้า"
            }
        ]
    },
    {
        id: 449,
        word: "hello",
        pos: "int.",
        thai: "สวัสดี",
        definition: "greeting",
        hint: "hi",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Hello, how are you?",
                th: "สวัสดี เป็นอย่างไร"
            }
        ]
    },
    {
        id: 450,
        word: "goodbye",
        pos: "int.",
        thai: "ลาก่อน",
        definition: "farewell",
        hint: "bye",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Goodbye, see you.",
                th: "ลาก่อน เจอกันใหม่"
            }
        ]
    },
    {
        id: 451,
        word: "please",
        pos: "adv.",
        thai: "กรุณา",
        definition: "polite request",
        hint: "polite",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Please help me.",
                th: "กรุณาช่วยฉัน"
            }
        ]
    },
    {
        id: 452,
        word: "thank you",
        pos: "int.",
        thai: "ขอบคุณ",
        definition: "gratitude",
        hint: "thanks",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Thank you very much.",
                th: "ขอบคุณมาก"
            }
        ]
    },
    {
        id: 453,
        word: "sorry",
        pos: "int.",
        thai: "ขอโทษ",
        definition: "apology",
        hint: "apologize",
        level: "A1",
        cats: ["social"],
        examples: [
            {
                en: "Sorry I'm late.",
                th: "ขอโทษที่มาสาย"
            }
        ]
    },
    {
        id: 454,
        word: "yes",
        pos: "adv.",
        thai: "ใช่",
        definition: "agreement",
        hint: "not no",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Yes, I agree.",
                th: "ใช่ ฉันเห็นด้วย"
            }
        ]
    },
    {
        id: 455,
        word: "no",
        pos: "adv.",
        thai: "ไม่",
        definition: "disagreement",
        hint: "not yes",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "No, I don't want.",
                th: "ไม่ ฉันไม่ต้องการ"
            }
        ]
    },
    {
        id: 456,
        word: "name",
        pos: "n.",
        thai: "ชื่อ",
        definition: "what you are called",
        hint: "identity",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "My name is John.",
                th: "ฉันชื่อจอห์น"
            }
        ]
    },
    {
        id: 457,
        word: "ten",
        pos: "num.",
        thai: "สิบ",
        definition: "the number 10",
        hint: "fingers",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Ten fingers.",
                th: "สิบนิ้ว"
            }
        ]
    },
    {
        id: 458,
        word: "love",
        pos: "v.",
        thai: "รัก",
        definition: "care deeply",
        hint: "strong like",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I love you.",
                th: "ฉันรักเธอ"
            }
        ]
    },
    {
        id: 459,
        word: "give",
        pos: "v.",
        thai: "ให้",
        definition: "hand to someone",
        hint: "present",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Give me water.",
                th: "ให้น้ำฉัน"
            }
        ]
    },
    {
        id: 460,
        word: "get",
        pos: "v.",
        thai: "ได้",
        definition: "receive",
        hint: "obtain",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I get a gift.",
                th: "ฉันได้ของขวัญ"
            }
        ]
    },
    {
        id: 461,
        word: "put",
        pos: "v.",
        thai: "วาง",
        definition: "place somewhere",
        hint: "place",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Put it here.",
                th: "วางไว้ที่นี่"
            }
        ]
    },
    {
        id: 462,
        word: "money",
        pos: "n.",
        thai: "เงิน",
        definition: "coins and bills",
        hint: "cash",
        level: "A1",
        cats: ["money"],
        examples: [
            {
                en: "I need money.",
                th: "ฉันต้องการเงิน"
            }
        ]
    },
    {
        id: 463,
        word: "time",
        pos: "n.",
        thai: "เวลา",
        definition: "hours and minutes",
        hint: "clock",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "What time is it?",
                th: "กี่โมงแล้ว"
            }
        ]
    },
    {
        id: 464,
        word: "day",
        pos: "n.",
        thai: "วัน",
        definition: "24 hours",
        hint: "today",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Have a good day.",
                th: "ขอให้เป็นวันที่ดี"
            }
        ]
    },
    {
        id: 465,
        word: "year",
        pos: "n.",
        thai: "ปี",
        definition: "12 months",
        hint: "365 days",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "This year is 2024.",
                th: "ปีนี้คือ 2024"
            }
        ]
    },
    {
        id: 466,
        word: "work",
        pos: "v./n.",
        thai: "ทำงาน / งาน",
        definition: "do job",
        hint: "job",
        level: "A1",
        cats: ["work"],
        examples: [
            {
                en: "I work every day.",
                th: "ฉันทำงานทุกวัน"
            }
        ]
    },
    {
        id: 467,
        word: "here",
        pos: "adv.",
        thai: "ที่นี่",
        definition: "in this place",
        hint: "this place",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Come here please.",
                th: "มาที่นี่"
            }
        ]
    },
    {
        id: 468,
        word: "there",
        pos: "adv.",
        thai: "ที่นั่น",
        definition: "in that place",
        hint: "that place",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Go there now.",
                th: "ไปที่นั่นเดี๋ยวนี้"
            }
        ]
    },
    {
        id: 469,
        word: "shirt",
        pos: "n.",
        thai: "เสื้อ",
        definition: "clothing for upper body",
        hint: "wear on top",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "I wear a blue shirt.",
                th: "ฉันใส่เสื้อสีน้ำเงิน"
            }
        ]
    },
    {
        id: 470,
        word: "pants",
        pos: "n.",
        thai: "กางเกง",
        definition: "clothing for legs",
        hint: "wear on legs",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "Black pants look good.",
                th: "กางเกงสีดำดูดี"
            }
        ]
    },
    {
        id: 471,
        word: "dress",
        pos: "n.",
        thai: "ชุดเดรส",
        definition: "one-piece clothing for women",
        hint: "women wear",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "She wears a pretty dress.",
                th: "เธอใส่ชุดเดรสสวย"
            }
        ]
    },
    {
        id: 472,
        word: "hat",
        pos: "n.",
        thai: "หมวก",
        definition: "wear on head",
        hint: "head cover",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "Wear a hat in the sun.",
                th: "ใส่หมวกตอนแดด"
            }
        ]
    },
    {
        id: 473,
        word: "jacket",
        pos: "n.",
        thai: "แจ็คเก็ต",
        definition: "outer clothing",
        hint: "warm clothes",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "I need a warm jacket.",
                th: "ฉันต้องการแจ็คเก็ตอุ่น"
            }
        ]
    },
    {
        id: 474,
        word: "skirt",
        pos: "n.",
        thai: "กระโปรง",
        definition: "clothing that hangs from waist",
        hint: "women wear",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "A long skirt.",
                th: "กระโปรงยาว"
            }
        ]
    },
    {
        id: 475,
        word: "socks",
        pos: "n.",
        thai: "ถุงเท้า",
        definition: "wear on feet inside shoes",
        hint: "foot cover",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "Clean white socks.",
                th: "ถุงเท้าสีขาวสะอาด"
            }
        ]
    },
    {
        id: 476,
        word: "glasses",
        pos: "n.",
        thai: "แว่นตา",
        definition: "wear to see better",
        hint: "help vision",
        level: "A2",
        cats: [
            "clothes", "health"
        ],
        examples: [
            {
                en: "I need glasses to read.",
                th: "ฉันต้องใส่แว่นตาอ่านหนังสือ"
            }
        ]
    },
    {
        id: 477,
        word: "watch",
        pos: "n.",
        thai: "นาฬิกาข้อมือ",
        definition: "wear to see time",
        hint: "time on wrist",
        level: "A2",
        cats: [
            "clothes", "time"
        ],
        examples: [
            {
                en: "My watch shows 3 PM.",
                th: "นาฬิกาของฉันแสดง 3 โมงเย็น"
            }
        ]
    },
    {
        id: 478,
        word: "ring",
        pos: "n.",
        thai: "แหวน",
        definition: "jewelry for finger",
        hint: "finger jewelry",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "A gold ring.",
                th: "แหวนทอง"
            }
        ]
    },
    {
        id: 479,
        word: "belt",
        pos: "n.",
        thai: "เข็มขัด",
        definition: "wear around waist",
        hint: "hold pants",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "A leather belt.",
                th: "เข็มขัดหนัง"
            }
        ]
    },
    {
        id: 480,
        word: "tie",
        pos: "n.",
        thai: "เนคไท",
        definition: "formal wear around neck",
        hint: "business wear",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "He wears a red tie.",
                th: "เขาใส่เนคไทสีแดง"
            }
        ]
    },
    {
        id: 481,
        word: "uniform",
        pos: "n.",
        thai: "ชุดยูนิฟอร์ม",
        definition: "special clothes for work/school",
        hint: "same clothes",
        level: "A2",
        cats: [
            "clothes", "work"
        ],
        examples: [
            {
                en: "School uniform is blue.",
                th: "ชุดนักเรียนสีน้ำเงิน"
            }
        ]
    },
    {
        id: 482,
        word: "size",
        pos: "n.",
        thai: "ขนาด",
        definition: "how big something is",
        hint: "big or small",
        level: "A2",
        cats: ["shopping"],
        examples: [
            {
                en: "What size do you wear?",
                th: "คุณใส่ไซส์อะไร"
            }
        ]
    },
    {
        id: 483,
        word: "color",
        pos: "n.",
        thai: "สี",
        definition: "red, blue, green, etc.",
        hint: "rainbow",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "What color do you like?",
                th: "คุณชอบสีอะไร"
            }
        ]
    },
    {
        id: 484,
        word: "style",
        pos: "n.",
        thai: "สไตล์",
        definition: "way something looks",
        hint: "fashion",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "I like this style.",
                th: "ฉันชอบสไตล์นี้"
            }
        ]
    },
    {
        id: 485,
        word: "fashion",
        pos: "n.",
        thai: "แฟชั่น",
        definition: "popular clothing style",
        hint: "trendy clothes",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "She follows fashion.",
                th: "เธอติดตามแฟชั่น"
            }
        ]
    },
    {
        id: 486,
        word: "wear",
        pos: "v.",
        thai: "ใส่",
        definition: "put clothes on body",
        hint: "put on",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "I wear jeans today.",
                th: "วันนี้ฉันใส่ยีนส์"
            }
        ]
    },
    {
        id: 487,
        word: "fit",
        pos: "v.",
        thai: "พอดี",
        definition: "right size for body",
        hint: "correct size",
        level: "A2",
        cats: ["clothes"],
        examples: [
            {
                en: "This shirt fits well.",
                th: "เสื้อตัวนี้พอดี"
            }
        ]
    },
    {
        id: 488,
        word: "try on",
        pos: "v.",
        thai: "ลองใส่",
        definition: "wear to test size",
        hint: "test clothes",
        level: "A2",
        cats: [
            "clothes", "shopping"
        ],
        examples: [
            {
                en: "Can I try on this dress?",
                th: "ฉันลองใส่ชุดนี้ได้ไหม"
            }
        ]
    },
    {
        id: 489,
        word: "bicycle",
        pos: "n.",
        thai: "จักรยาน",
        definition: "two-wheel vehicle you pedal",
        hint: "pedal power",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "I ride my bicycle to work.",
                th: "ฉันปั่นจักรยานไปทำงาน"
            }
        ]
    },
    {
        id: 490,
        word: "motorcycle",
        pos: "n.",
        thai: "รถจักรยานยนต์",
        definition: "motor two-wheeler",
        hint: "fast bike",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "He drives a motorcycle.",
                th: "เขาขับรถจักรยานยนต์"
            }
        ]
    },
    {
        id: 491,
        word: "truck",
        pos: "n.",
        thai: "รถบรรทุก",
        definition: "large vehicle for cargo",
        hint: "carry things",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "The truck carries boxes.",
                th: "รถบรรทุกขนกล่อง"
            }
        ]
    },
    {
        id: 492,
        word: "ship",
        pos: "n.",
        thai: "เรือ",
        definition: "large boat for ocean",
        hint: "water transport",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "The ship sails to Japan.",
                th: "เรือแล่นไปญี่ปุ่น"
            }
        ]
    },
    {
        id: 493,
        word: "boat",
        pos: "n.",
        thai: "เรือเล็ก",
        definition: "small water vehicle",
        hint: "water travel",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "We take a boat to the island.",
                th: "เราขึ้นเรือไปเกาะ"
            }
        ]
    },
    {
        id: 494,
        word: "bridge",
        pos: "n.",
        thai: "สะพาน",
        definition: "crosses over water or road",
        hint: "cross over",
        level: "A2",
        cats: [
            "city", "travel"
        ],
        examples: [
            {
                en: "Drive over the bridge.",
                th: "ขับรถผ่านสะพาน"
            }
        ]
    },
    {
        id: 495,
        word: "traffic",
        pos: "n.",
        thai: "การจราจร",
        definition: "cars on the road",
        hint: "busy roads",
        level: "A2",
        cats: [
            "city", "travel"
        ],
        examples: [
            {
                en: "Heavy traffic today.",
                th: "วันนี้รถติดมาก"
            }
        ]
    },
    {
        id: 496,
        word: "parking",
        pos: "n.",
        thai: "ที่จอดรถ",
        definition: "place to leave car",
        hint: "car space",
        level: "A2",
        cats: [
            "city", "travel"
        ],
        examples: [
            {
                en: "Find parking near the mall.",
                th: "หาที่จอดรถใกล้ห้าง"
            }
        ]
    },
    {
        id: 497,
        word: "gas station",
        pos: "n.",
        thai: "ปั๊มน้ำมัน",
        definition: "place to buy fuel",
        hint: "fuel for car",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "Stop at the gas station.",
                th: "แวะปั๊มน้ำมัน"
            }
        ]
    },
    {
        id: 498,
        word: "license",
        pos: "n.",
        thai: "ใบขับขี่",
        definition: "permit to drive",
        hint: "driving permit",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "Show your driver's license.",
                th: "แสดงใบขับขี่"
            }
        ]
    },
    {
        id: 499,
        word: "passenger",
        pos: "n.",
        thai: "ผู้โดยสาร",
        definition: "person who rides",
        hint: "not driver",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "Five passengers on the bus.",
                th: "ผู้โดยสารห้าคนบนรถบัส"
            }
        ]
    },
    {
        id: 500,
        word: "driver",
        pos: "n.",
        thai: "คนขับ",
        definition: "person who drives",
        hint: "controls vehicle",
        level: "A2",
        cats: [
            "travel", "work"
        ],
        examples: [
            {
                en: "The bus driver is careful.",
                th: "คนขับรถบัสระวัง"
            }
        ]
    },
    {
        id: 501,
        word: "ride",
        pos: "v.",
        thai: "ขี่ / นั่ง",
        definition: "travel in vehicle",
        hint: "go by transport",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "I ride the bus to school.",
                th: "ฉันนั่งรถบัสไปโรงเรียน"
            }
        ]
    },
    {
        id: 502,
        word: "drive",
        pos: "v.",
        thai: "ขับ",
        definition: "control a vehicle",
        hint: "steer car",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "She drives to work.",
                th: "เธอขับรถไปทำงาน"
            }
        ]
    },
    {
        id: 503,
        word: "park",
        pos: "v.",
        thai: "จอดรถ",
        definition: "stop and leave vehicle",
        hint: "leave car",
        level: "A2",
        cats: ["travel"],
        examples: [
            {
                en: "Park the car here.",
                th: "จอดรถตรงนี้"
            }
        ]
    },
    {
        id: 504,
        word: "spoon",
        pos: "n.",
        thai: "ช้อน",
        definition: "eating utensil",
        hint: "eat soup",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Use a spoon for soup.",
                th: "ใช้ช้อนกินซุป"
            }
        ]
    },
    {
        id: 505,
        word: "fork",
        pos: "n.",
        thai: "ส้อม",
        definition: "eating utensil with prongs",
        hint: "stab food",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Eat with fork and knife.",
                th: "กินด้วยส้อมและมีด"
            }
        ]
    },
    {
        id: 506,
        word: "knife",
        pos: "n.",
        thai: "มีด",
        definition: "cutting tool",
        hint: "cut food",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Cut meat with knife.",
                th: "ใช้มีดตัดเนื้อ"
            }
        ]
    },
    {
        id: 507,
        word: "bowl",
        pos: "n.",
        thai: "ชาม",
        definition: "round dish",
        hint: "hold soup",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Rice in a bowl.",
                th: "ข้าวในชาม"
            }
        ]
    },
    {
        id: 508,
        word: "glass",
        pos: "n.",
        thai: "แก้ว",
        definition: "container for drinks",
        hint: "drink from",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "A glass of water.",
                th: "น้ำหนึ่งแก้ว"
            }
        ]
    },
    {
        id: 509,
        word: "bottle",
        pos: "n.",
        thai: "ขวด",
        definition: "container for liquids",
        hint: "hold drinks",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "A bottle of juice.",
                th: "น้ำผลไม้หนึ่งขวด"
            }
        ]
    },
    {
        id: 510,
        word: "recipe",
        pos: "n.",
        thai: "สูตรอาหาร",
        definition: "instructions for cooking",
        hint: "how to cook",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Follow the recipe.",
                th: "ทำตามสูตรอาหาร"
            }
        ]
    },
    {
        id: 511,
        word: "ingredient",
        pos: "n.",
        thai: "ส่วนผสม",
        definition: "items used in cooking",
        hint: "cooking parts",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Mix all ingredients.",
                th: "ผสมส่วนผสมทั้งหมด"
            }
        ]
    },
    {
        id: 512,
        word: "taste",
        pos: "v./n.",
        thai: "ลิ้มรส / รส",
        definition: "flavor of food",
        hint: "sweet sour",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "This tastes good.",
                th: "อันนี้รสชาติดี"
            }
        ]
    },
    {
        id: 513,
        word: "sweet",
        pos: "adj.",
        thai: "หวาน",
        definition: "like sugar",
        hint: "sugar taste",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Sweet cake.",
                th: "เค้กหวาน"
            }
        ]
    },
    {
        id: 514,
        word: "sour",
        pos: "adj.",
        thai: "เปรี้ยว",
        definition: "like lemon",
        hint: "lemon taste",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Sour fruit.",
                th: "ผลไม้เปรี้ยว"
            }
        ]
    },
    {
        id: 515,
        word: "spicy",
        pos: "adj.",
        thai: "เผ็ด",
        definition: "hot taste",
        hint: "chili hot",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Spicy Thai food.",
                th: "อาหารไทยเผ็ด"
            }
        ]
    },
    {
        id: 516,
        word: "bitter",
        pos: "adj.",
        thai: "ขม",
        definition: "not sweet taste",
        hint: "coffee taste",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Bitter medicine.",
                th: "ยาขม"
            }
        ]
    },
    {
        id: 517,
        word: "fresh",
        pos: "adj.",
        thai: "สด",
        definition: "not old food",
        hint: "just picked",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Fresh vegetables.",
                th: "ผักสด"
            }
        ]
    },
    {
        id: 518,
        word: "frozen",
        pos: "adj.",
        thai: "แช่แข็ง",
        definition: "very cold food",
        hint: "ice cold",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Frozen chicken.",
                th: "ไก่แช่แข็ง"
            }
        ]
    },
    {
        id: 519,
        word: "boil",
        pos: "v.",
        thai: "ต้ม",
        definition: "cook in hot water",
        hint: "hot water cook",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Boil the eggs.",
                th: "ต้มไข่"
            }
        ]
    },
    {
        id: 520,
        word: "fry",
        pos: "v.",
        thai: "ทอด",
        definition: "cook in hot oil",
        hint: "oil cook",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Fry the fish.",
                th: "ทอดปลา"
            }
        ]
    },
    {
        id: 521,
        word: "bake",
        pos: "v.",
        thai: "อบ",
        definition: "cook in oven",
        hint: "oven cook",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Bake a cake.",
                th: "อบเค้ก"
            }
        ]
    },
    {
        id: 522,
        word: "mix",
        pos: "v.",
        thai: "ผสม",
        definition: "combine ingredients",
        hint: "put together",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Mix the flour.",
                th: "ผสมแป้ง"
            }
        ]
    },
    {
        id: 523,
        word: "serve",
        pos: "v.",
        thai: "เสิร์ฟ",
        definition: "give food to people",
        hint: "give food",
        level: "A2",
        cats: ["food"],
        examples: [
            {
                en: "Serve dinner now.",
                th: "เสิร์ฟอาหารเย็นเดี๋ยวนี้"
            }
        ]
    },
    {
        id: 524,
        word: "job",
        pos: "n.",
        thai: "งาน",
        definition: "work you do for money",
        hint: "employment",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "I have a good job.",
                th: "ฉันมีงานดี"
            }
        ]
    },
    {
        id: 525,
        word: "boss",
        pos: "n.",
        thai: "หัวหน้า",
        definition: "person who leads at work",
        hint: "work leader",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "My boss is kind.",
                th: "หัวหน้าของฉันใจดี"
            }
        ]
    },
    {
        id: 526,
        word: "employee",
        pos: "n.",
        thai: "พนักงาน",
        definition: "person who works for company",
        hint: "worker",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "She is a good employee.",
                th: "เธอเป็นพนักงานที่ดี"
            }
        ]
    },
    {
        id: 527,
        word: "company",
        pos: "n.",
        thai: "บริษัท",
        definition: "business organization",
        hint: "business",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "I work for a big company.",
                th: "ฉันทำงานให้บริษัทใหญ่"
            }
        ]
    },
    {
        id: 528,
        word: "salary",
        pos: "n.",
        thai: "เงินเดือน",
        definition: "money you get for work",
        hint: "work pay",
        level: "A2",
        cats: [
            "work", "money"
        ],
        examples: [
            {
                en: "Good salary this month.",
                th: "เงินเดือนดีเดือนนี้"
            }
        ]
    },
    {
        id: 529,
        word: "meeting",
        pos: "n.",
        thai: "การประชุม",
        definition: "people talk together for work",
        hint: "work discussion",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "We have a meeting at 2 PM.",
                th: "เรามีประชุมตอนบ่ายสองโมง"
            }
        ]
    },
    {
        id: 530,
        word: "project",
        pos: "n.",
        thai: "โครงการ",
        definition: "special work task",
        hint: "work plan",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "This project is important.",
                th: "โครงการนี้สำคัญ"
            }
        ]
    },
    {
        id: 531,
        word: "report",
        pos: "n.",
        thai: "รายงาน",
        definition: "written work information",
        hint: "work document",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "Write a report.",
                th: "เขียนรายงาน"
            }
        ]
    },
    {
        id: 532,
        word: "schedule",
        pos: "n.",
        thai: "ตารางเวลา",
        definition: "plan of when to do things",
        hint: "time plan",
        level: "A2",
        cats: [
            "work", "time"
        ],
        examples: [
            {
                en: "Check your schedule.",
                th: "ดูตารางเวลาของคุณ"
            }
        ]
    },
    {
        id: 533,
        word: "deadline",
        pos: "n.",
        thai: "กำหนดส่ง",
        definition: "time when work must be finished",
        hint: "finish time",
        level: "A2",
        cats: [
            "work", "time"
        ],
        examples: [
            {
                en: "The deadline is tomorrow.",
                th: "กำหนดส่งคือพรุ่งนี้"
            }
        ]
    },
    {
        id: 534,
        word: "interview",
        pos: "n.",
        thai: "การสัมภาษณ์",
        definition: "meeting to get job",
        hint: "job meeting",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "I have a job interview.",
                th: "ฉันมีสัมภาษณ์งาน"
            }
        ]
    },
    {
        id: 535,
        word: "retire",
        pos: "v.",
        thai: "เกษียณ",
        definition: "stop working because of age",
        hint: "stop work old",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "He will retire next year.",
                th: "เขาจะเกษียณปีหน้า"
            }
        ]
    },
    {
        id: 536,
        word: "hire",
        pos: "v.",
        thai: "จ้าง",
        definition: "give someone a job",
        hint: "employ",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "We hire new people.",
                th: "เราจ้างคนใหม่"
            }
        ]
    },
    {
        id: 537,
        word: "fire",
        pos: "v.",
        thai: "ไล่ออก",
        definition: "make someone lose job",
        hint: "remove job",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "Don't be late or they'll fire you.",
                th: "อย่ามาสายไม่งั้นจะโดนไล่ออก"
            }
        ]
    },
    {
        id: 538,
        word: "apply",
        pos: "v.",
        thai: "สมัคร",
        definition: "ask for a job",
        hint: "request job",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "Apply for this job.",
                th: "สมัครงานนี้"
            }
        ]
    },
    {
        id: 539,
        word: "week",
        pos: "n.",
        thai: "สัปดาห์",
        definition: "seven days",
        hint: "7 days",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "See you next week.",
                th: "เจอกันสัปดาห์หน้า"
            }
        ]
    },
    {
        id: 540,
        word: "month",
        pos: "n.",
        thai: "เดือน",
        definition: "about 30 days",
        hint: "30 days",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "This month is busy.",
                th: "เดือนนี้ยุ่ง"
            }
        ]
    },
    {
        id: 541,
        word: "season",
        pos: "n.",
        thai: "ฤดู",
        definition: "time of year",
        hint: "summer winter",
        level: "A2",
        cats: [
            "time", "weather"
        ],
        examples: [
            {
                en: "I like summer season.",
                th: "ฉันชอบฤดูร้อน"
            }
        ]
    },
    {
        id: 542,
        word: "weekend",
        pos: "n.",
        thai: "วันหยุดสุดสัปดาห์",
        definition: "Saturday and Sunday",
        hint: "no work days",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "Happy weekend!",
                th: "สุขสันต์วันหยุด!"
            }
        ]
    },
    {
        id: 543,
        word: "birthday",
        pos: "n.",
        thai: "วันเกิด",
        definition: "day you were born",
        hint: "birth day",
        level: "A2",
        cats: [
            "time", "social"
        ],
        examples: [
            {
                en: "Today is my birthday.",
                th: "วันนี้วันเกิดฉัน"
            }
        ]
    },
    {
        id: 544,
        word: "appointment",
        pos: "n.",
        thai: "นัดหมาย",
        definition: "planned meeting time",
        hint: "meeting plan",
        level: "A2",
        cats: [
            "time", "work"
        ],
        examples: [
            {
                en: "I have an appointment at 3.",
                th: "ฉันมีนัดตอนสามโมง"
            }
        ]
    },
    {
        id: 545,
        word: "hour",
        pos: "n.",
        thai: "ชั่วโมง",
        definition: "60 minutes",
        hint: "60 minutes",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "Wait one hour.",
                th: "รอหนึ่งชั่วโมง"
            }
        ]
    },
    {
        id: 546,
        word: "minute",
        pos: "n.",
        thai: "นาที",
        definition: "60 seconds",
        hint: "60 seconds",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "Five minutes left.",
                th: "เหลืออีกห้านาที"
            }
        ]
    },
    {
        id: 547,
        word: "second",
        pos: "n.",
        thai: "วินาที",
        definition: "very short time",
        hint: "quick time",
        level: "A2",
        cats: ["time"],
        examples: [
            {
                en: "Wait a second.",
                th: "รอสักวินาที"
            }
        ]
    },
    {
        id: 548,
        word: "hobby",
        pos: "n.",
        thai: "งานอดิเรก",
        definition: "activity you enjoy",
        hint: "fun activity",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Reading is my hobby.",
                th: "การอ่านเป็นงานอดิเรกของฉัน"
            }
        ]
    },
    {
        id: 549,
        word: "swim",
        pos: "v.",
        thai: "ว่ายน้ำ",
        definition: "move through water",
        hint: "water sport",
        level: "A2",
        cats: [
            "health", "social"
        ],
        examples: [
            {
                en: "I swim in the pool.",
                th: "ฉันว่ายน้ำในสระ"
            }
        ]
    },
    {
        id: 550,
        word: "dance",
        pos: "v./n.",
        thai: "เต้นรำ",
        definition: "move body to music",
        hint: "music movement",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "She loves to dance.",
                th: "เธอชอบเต้นรำ"
            }
        ]
    },
    {
        id: 551,
        word: "sing",
        pos: "v.",
        thai: "ร้องเพลง",
        definition: "make music with voice",
        hint: "voice music",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Sing a song.",
                th: "ร้องเพลง"
            }
        ]
    },
    {
        id: 552,
        word: "draw",
        pos: "v.",
        thai: "วาดรูป",
        definition: "make pictures with pen",
        hint: "make pictures",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Draw a picture.",
                th: "วาดรูป"
            }
        ]
    },
    {
        id: 553,
        word: "paint",
        pos: "v.",
        thai: "ระบายสี",
        definition: "make art with colors",
        hint: "color art",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Paint the wall.",
                th: "ทาสีผนัง"
            }
        ]
    },
    {
        id: 554,
        word: "read",
        pos: "v.",
        thai: "อ่าน",
        definition: "look at words and understand",
        hint: "book activity",
        level: "A2",
        cats: [
            "school", "social"
        ],
        examples: [
            {
                en: "Read this book.",
                th: "อ่านหนังสือเล่มนี้"
            }
        ]
    },
    {
        id: 555,
        word: "write",
        pos: "v.",
        thai: "เขียน",
        definition: "make words on paper",
        hint: "pen activity",
        level: "A2",
        cats: [
            "school", "work"
        ],
        examples: [
            {
                en: "Write your name.",
                th: "เขียนชื่อของคุณ"
            }
        ]
    },
    {
        id: 556,
        word: "play",
        pos: "v.",
        thai: "เล่น",
        definition: "do fun activities",
        hint: "fun activity",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Children play games.",
                th: "เด็กๆ เล่นเกม"
            }
        ]
    },
    {
        id: 557,
        word: "listen",
        pos: "v.",
        thai: "ฟัง",
        definition: "hear sounds carefully",
        hint: "hear music",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Listen to music.",
                th: "ฟังเพลง"
            }
        ]
    },
    {
        id: 558,
        word: "collect",
        pos: "v.",
        thai: "สะสม",
        definition: "gather things as hobby",
        hint: "gather items",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Collect stamps.",
                th: "สะสมแสตมป์"
            }
        ]
    },
    {
        id: 559,
        word: "visit",
        pos: "v.",
        thai: "เยี่ยม",
        definition: "go to see someone",
        hint: "go see",
        level: "A2",
        cats: [
            "social", "travel"
        ],
        examples: [
            {
                en: "Visit my grandmother.",
                th: "ไปเยี่ยมยาย"
            }
        ]
    },
    {
        id: 560,
        word: "rain",
        pos: "n./v.",
        thai: "ฝน / ฝนตก",
        definition: "water falling from sky",
        hint: "water from clouds",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "It will rain tomorrow.",
                th: "พรุ่งนี้จะฝนตก"
            }
        ]
    },
    {
        id: 561,
        word: "snow",
        pos: "n./v.",
        thai: "หิมะ / หิมะตก",
        definition: "white ice from sky",
        hint: "white cold",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "Snow is white and cold.",
                th: "หิมะสีขาวและเย็น"
            }
        ]
    },
    {
        id: 562,
        word: "wind",
        pos: "n.",
        thai: "ลม",
        definition: "moving air",
        hint: "air movement",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "Strong wind today.",
                th: "วันนี้ลมแรง"
            }
        ]
    },
    {
        id: 563,
        word: "storm",
        pos: "n.",
        thai: "พายุ",
        definition: "bad weather with wind and rain",
        hint: "bad weather",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "The storm is coming.",
                th: "พายุกำลังมา"
            }
        ]
    },
    {
        id: 564,
        word: "sun",
        pos: "n.",
        thai: "ดวงอาทิตย์",
        definition: "bright star in sky",
        hint: "bright sky",
        level: "A2",
        cats: [
            "weather", "nature"
        ],
        examples: [
            {
                en: "The sun is bright.",
                th: "ดวงอาทิตย์สว่าง"
            }
        ]
    },
    {
        id: 565,
        word: "moon",
        pos: "n.",
        thai: "ดวงจันทร์",
        definition: "bright circle in night sky",
        hint: "night light",
        level: "A2",
        cats: ["nature"],
        examples: [
            {
                en: "Full moon tonight.",
                th: "คืนนี้พระจันทร์เต็มดวง"
            }
        ]
    },
    {
        id: 566,
        word: "star",
        pos: "n.",
        thai: "ดาว",
        definition: "bright points in night sky",
        hint: "night lights",
        level: "A2",
        cats: ["nature"],
        examples: [
            {
                en: "Many stars in the sky.",
                th: "ดาวมากมายบนฟ้า"
            }
        ]
    },
    {
        id: 567,
        word: "cloud",
        pos: "n.",
        thai: "เมฆ",
        definition: "white things in sky",
        hint: "sky white",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "Dark clouds mean rain.",
                th: "เมฆดำหมายถึงฝน"
            }
        ]
    },
    {
        id: 568,
        word: "sky",
        pos: "n.",
        thai: "ท้องฟ้า",
        definition: "space above earth",
        hint: "above us",
        level: "A2",
        cats: ["nature"],
        examples: [
            {
                en: "Blue sky today.",
                th: "วันนี้ท้องฟ้าสีน้ำเงิน"
            }
        ]
    },
    {
        id: 569,
        word: "temperature",
        pos: "n.",
        thai: "อุณหภูมิ",
        definition: "how hot or cold",
        hint: "hot cold measure",
        level: "A2",
        cats: ["weather"],
        examples: [
            {
                en: "High temperature today.",
                th: "วันนี้อุณหภูมิสูง"
            }
        ]
    },
    {
        id: 570,
        word: "health",
        pos: "n.",
        thai: "สุขภาพ",
        definition: "condition of body",
        hint: "body condition",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Good health is important.",
                th: "สุขภาพดีสำคัญ"
            }
        ]
    },
    {
        id: 571,
        word: "pain",
        pos: "n.",
        thai: "ความเจ็บปวด",
        definition: "hurt feeling in body",
        hint: "body hurt",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "I have pain in my back.",
                th: "ฉันปวดหลัง"
            }
        ]
    },
    {
        id: 572,
        word: "fever",
        pos: "n.",
        thai: "ไข้",
        definition: "high body temperature when sick",
        hint: "hot sick",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "He has a fever.",
                th: "เขาเป็นไข้"
            }
        ]
    },
    {
        id: 573,
        word: "cough",
        pos: "n./v.",
        thai: "ไอ",
        definition: "sound from throat when sick",
        hint: "throat sound",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Bad cough today.",
                th: "วันนี้ไอหนัก"
            }
        ]
    },
    {
        id: 574,
        word: "headache",
        pos: "n.",
        thai: "ปวดหัว",
        definition: "pain in head",
        hint: "head pain",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "I have a headache.",
                th: "ฉันปวดหัว"
            }
        ]
    },
    {
        id: 575,
        word: "stomach",
        pos: "n.",
        thai: "ท้อง",
        definition: "body part that holds food",
        hint: "food holder",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "My stomach hurts.",
                th: "ท้องฉันเจ็บ"
            }
        ]
    },
    {
        id: 576,
        word: "heart",
        pos: "n.",
        thai: "หัวใจ",
        definition: "body part that pumps blood",
        hint: "blood pump",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "My heart beats fast.",
                th: "หัวใจฉันเต้นเร็ว"
            }
        ]
    },
    {
        id: 577,
        word: "blood",
        pos: "n.",
        thai: "เลือด",
        definition: "red liquid in body",
        hint: "red body liquid",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Red blood.",
                th: "เลือดสีแดง"
            }
        ]
    },
    {
        id: 578,
        word: "bone",
        pos: "n.",
        thai: "กระดูก",
        definition: "hard parts inside body",
        hint: "body frame",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Strong bones.",
                th: "กระดูกแข็งแรง"
            }
        ]
    },
    {
        id: 579,
        word: "muscle",
        pos: "n.",
        thai: "กล้ามเนื้อ",
        definition: "body parts that move",
        hint: "body movers",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Exercise builds muscle.",
                th: "การออกกำลังกายสร้างกล้ามเนื้อ"
            }
        ]
    },
    {
        id: 580,
        word: "skin",
        pos: "n.",
        thai: "ผิวหนัง",
        definition: "outside of body",
        hint: "body cover",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Soft skin.",
                th: "ผิวหนังนุ่ม"
            }
        ]
    },
    {
        id: 581,
        word: "tooth",
        pos: "n.",
        thai: "ฟัน",
        definition: "white things in mouth for eating",
        hint: "mouth white",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Brush your teeth.",
                th: "แปรงฟัน"
            }
        ]
    },
    {
        id: 582,
        word: "finger",
        pos: "n.",
        thai: "นิ้วมือ",
        definition: "parts of hand",
        hint: "hand parts",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Five fingers on hand.",
                th: "มือมีห้านิ้ว"
            }
        ]
    },
    {
        id: 583,
        word: "toe",
        pos: "n.",
        thai: "นิ้วเท้า",
        definition: "parts of foot",
        hint: "foot parts",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "Ten toes total.",
                th: "นิ้วเท้ารวมสิบนิ้ว"
            }
        ]
    },
    {
        id: 584,
        word: "smile",
        pos: "v./n.",
        thai: "ยิ้ม",
        definition: "happy face expression",
        hint: "happy face",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "She has a beautiful smile.",
                th: "เธอมีรอยยิ้มสวย"
            }
        ]
    },
    {
        id: 585,
        word: "laugh",
        pos: "v.",
        thai: "หัวเราะ",
        definition: "make sound when happy",
        hint: "happy sound",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Children laugh and play.",
                th: "เด็กๆ หัวเราะและเล่น"
            }
        ]
    },
    {
        id: 586,
        word: "cry",
        pos: "v.",
        thai: "ร้องไห้",
        definition: "make tears when sad",
        hint: "sad tears",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Don't cry, it's okay.",
                th: "อย่าร้องไห้ ไม่เป็นไร"
            }
        ]
    },
    {
        id: 587,
        word: "excited",
        pos: "adj.",
        thai: "ตื่นเต้น",
        definition: "feeling very happy about something",
        hint: "very happy",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I'm excited about the trip.",
                th: "ฉันตื่นเต้นกับการเดินทาง"
            }
        ]
    },
    {
        id: 588,
        word: "nervous",
        pos: "adj.",
        thai: "กังวล",
        definition: "feeling worried",
        hint: "worried feeling",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "She feels nervous before the test.",
                th: "เธอรู้สึกกังวลก่อนสอบ"
            }
        ]
    },
    {
        id: 589,
        word: "proud",
        pos: "adj.",
        thai: "ภูมิใจ",
        definition: "feeling good about achievement",
        hint: "achievement feeling",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I'm proud of my son.",
                th: "ฉันภูมิใจในลูกชาย"
            }
        ]
    },
    {
        id: 590,
        word: "jealous",
        pos: "adj.",
        thai: "อิจฉา",
        definition: "wanting what others have",
        hint: "want others' things",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Don't be jealous of others.",
                th: "อย่าอิจฉาคนอื่น"
            }
        ]
    },
    {
        id: 591,
        word: "lonely",
        pos: "adj.",
        thai: "เหงา",
        definition: "feeling alone",
        hint: "alone feeling",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I feel lonely without friends.",
                th: "ฉันรู้สึกเหงาโดยไม่มีเพื่อน"
            }
        ]
    },
    {
        id: 592,
        word: "calm",
        pos: "adj.",
        thai: "สงบ",
        definition: "feeling peaceful",
        hint: "peaceful feeling",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Stay calm in difficult times.",
                th: "จงใจเย็นในยามยาก"
            }
        ]
    },
    {
        id: 593,
        word: "surprise",
        pos: "n./v.",
        thai: "ความประหลาดใจ / ทำให้ประหลาดใจ",
        definition: "unexpected thing",
        hint: "unexpected",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "What a nice surprise!",
                th: "ช่างเป็นเซอร์ไพรส์ที่ดี!"
            }
        ]
    },
    {
        id: 594,
        word: "gift",
        pos: "n.",
        thai: "ของขวัญ",
        definition: "present for someone",
        hint: "present",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "I bought a gift for mom.",
                th: "ฉันซื้อของขวัญให้แม่"
            }
        ]
    },
    {
        id: 595,
        word: "celebrate",
        pos: "v.",
        thai: "ฉลอง",
        definition: "have party for special day",
        hint: "party for",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Celebrate New Year.",
                th: "ฉลองปีใหม่"
            }
        ]
    },
    {
        id: 596,
        word: "invite",
        pos: "v.",
        thai: "เชิญ",
        definition: "ask someone to come",
        hint: "ask to come",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "Invite friends to dinner.",
                th: "เชิญเพื่อนมากินข้าว"
            }
        ]
    },
    {
        id: 597,
        word: "guest",
        pos: "n.",
        thai: "แขก",
        definition: "person who visits",
        hint: "visitor",
        level: "A2",
        cats: ["social"],
        examples: [
            {
                en: "We have guests tonight.",
                th: "คืนนี้เรามีแขก"
            }
        ]
    },
    {
        id: 598,
        word: "special",
        pos: "adj.",
        thai: "พิเศษ",
        definition: "different from normal",
        hint: "not ordinary",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Today is a special day.",
                th: "วันนี้เป็นวันพิเศษ"
            }
        ]
    },
    {
        id: 599,
        word: "career",
        pos: "n.",
        thai: "อาชีพ",
        definition: "professional life path",
        examples: [
            {
                en: "She has a successful career.",
                th: "เธอมีอาชีพที่ประสบความสำเร็จ"
            }
        ],
        hint: "job progression",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 600,
        word: "application",
        pos: "n.",
        thai: "ใบสมัคร",
        definition: "formal request",
        examples: [
            {
                en: "Submit your application online.",
                th: "ส่งใบสมัครทางออนไลน์"
            }
        ],
        hint: "apply for something",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 601,
        word: "qualification",
        pos: "n.",
        thai: "คุณสมบัติ",
        definition: "skills or education needed",
        examples: [
            {
                en: "What qualifications do you have?",
                th: "คุณมีคุณสมบัติอะไรบ้าง"
            }
        ],
        hint: "requirements",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 602,
        word: "certificate",
        pos: "n.",
        thai: "ใบรับรอง",
        definition: "official document",
        examples: [
            {
                en: "I received a certificate.",
                th: "ฉันได้รับใบรับรอง"
            }
        ],
        hint: "proof of achievement",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 603,
        word: "degree",
        pos: "n.",
        thai: "ปริญญา",
        definition: "university qualification",
        examples: [
            {
                en: "She has a master's degree.",
                th: "เธอมีปริญญาโท"
            }
        ],
        hint: "university diploma",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 604,
        word: "training",
        pos: "n.",
        thai: "การฝึกอบรม",
        definition: "learning new skills",
        examples: [
            {
                en: "Staff need training.",
                th: "พนักงานต้องการการฝึกอบรม"
            }
        ],
        hint: "skill development",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 605,
        word: "promotion",
        pos: "n.",
        thai: "การเลื่อนตำแหน่ง",
        definition: "advancement at work",
        examples: [
            {
                en: "She got a promotion.",
                th: "เธอได้เลื่อนตำแหน่ง"
            }
        ],
        hint: "job advancement",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 606,
        word: "responsibility",
        pos: "n.",
        thai: "ความรับผิดชอบ",
        definition: "duty or obligation",
        examples: [
            {
                en: "This job has many responsibilities.",
                th: "งานนี้มีความรับผิดชอบมาก"
            }
        ],
        hint: "job duties",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 607,
        word: "colleague",
        pos: "n.",
        thai: "เพื่อนร่วมงาน",
        definition: "person you work with",
        examples: [
            {
                en: "My colleagues are friendly.",
                th: "เพื่อนร่วมงานของฉันเป็นมิตร"
            }
        ],
        hint: "coworker",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 608,
        word: "department",
        pos: "n.",
        thai: "แผนก",
        definition: "section of organization",
        examples: [
            {
                en: "I work in the sales department.",
                th: "ฉันทำงานในแผนกขาย"
            }
        ],
        hint: "work division",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 609,
        word: "conference",
        pos: "n.",
        thai: "การประชุมใหญ่",
        definition: "large formal meeting",
        examples: [
            {
                en: "The conference was informative.",
                th: "การประชุมให้ข้อมูลดี"
            }
        ],
        hint: "big meeting",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 610,
        word: "presentation",
        pos: "n.",
        thai: "การนำเสนอ",
        definition: "showing information to group",
        examples: [
            {
                en: "Give a presentation tomorrow.",
                th: "นำเสนอพรุ่งนี้"
            }
        ],
        hint: "formal showing",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 611,
        word: "contract",
        pos: "n.",
        thai: "สัญญา",
        definition: "legal agreement",
        examples: [
            {
                en: "Sign the contract carefully.",
                th: "เซ็นสัญญาอย่างระมัดระวัง"
            }
        ],
        hint: "work agreement",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 612,
        word: "client",
        pos: "n.",
        thai: "ลูกค้า",
        definition: "person who buys services",
        examples: [
            {
                en: "The client is satisfied.",
                th: "ลูกค้าพอใจ"
            }
        ],
        hint: "customer",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 613,
        word: "achievement",
        pos: "n.",
        thai: "ความสำเร็จ",
        definition: "successful completion",
        examples: [
            {
                en: "Celebrate your achievements.",
                th: "เฉลิมฉลองความสำเร็จของคุณ"
            }
        ],
        hint: "success",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 614,
        word: "performance",
        pos: "n.",
        thai: "ผลงาน",
        definition: "how well you do",
        examples: [
            {
                en: "Your performance is excellent.",
                th: "ผลงานของคุณยอดเยี่ยม"
            }
        ],
        hint: "work quality",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 615,
        word: "evaluation",
        pos: "n.",
        thai: "การประเมิน",
        definition: "assessment of quality",
        examples: [
            {
                en: "Annual performance evaluation.",
                th: "การประเมินผลงานประจำปี"
            }
        ],
        hint: "judging quality",
        level: "B1",
        cats: ["work", "school"]
    },
    {
        id: 616,
        word: "feedback",
        pos: "n.",
        thai: "ข้อเสนอแนะ",
        definition: "comments about performance",
        examples: [
            {
                en: "Give me feedback on my work.",
                th: "ให้ข้อเสนอแนะเกี่ยวกับงานของฉัน"
            }
        ],
        hint: "response comments",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 617,
        word: "vacation",
        pos: "n.",
        thai: "วันหยุดพักผ่อน",
        definition: "time off for rest",
        examples: [
            {
                en: "We're going on vacation.",
                th: "เราจะไปพักผ่อน"
            }
        ],
        hint: "holiday trip",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 618,
        word: "tourist",
        pos: "n.",
        thai: "นักท่องเที่ยว",
        definition: "person who travels for pleasure",
        examples: [
            {
                en: "Many tourists visit Thailand.",
                th: "นักท่องเที่ยวมากมายมาเที่ยวไทย"
            }
        ],
        hint: "visitor",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 619,
        word: "passport",
        pos: "n.",
        thai: "หนังสือเดินทาง",
        definition: "travel document",
        examples: [
            {
                en: "Don't forget your passport.",
                th: "อย่าลืมหนังสือเดินทาง"
            }
        ],
        hint: "international travel",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 620,
        word: "luggage",
        pos: "n.",
        thai: "กระเป๋าเดินทาง",
        definition: "bags for travel",
        examples: [
            {
                en: "Pack your luggage carefully.",
                th: "เก็บกระเป๋าเดินทางอย่างระมัดระวัง"
            }
        ],
        hint: "suitcase",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 621,
        word: "destination",
        pos: "n.",
        thai: "จุดหมายปลายทาง",
        definition: "place you're going to",
        examples: [
            {
                en: "What's your destination?",
                th: "จุดหมายปลายทางของคุณคือไหน"
            }
        ],
        hint: "travel goal",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 622,
        word: "accommodation",
        pos: "n.",
        thai: "ที่พัก",
        definition: "place to stay",
        examples: [
            {
                en: "Book accommodation in advance.",
                th: "จองที่พักล่วงหน้า"
            }
        ],
        hint: "hotel lodging",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 623,
        word: "reservation",
        pos: "n.",
        thai: "การจอง",
        definition: "booking in advance",
        examples: [
            {
                en: "Make a hotel reservation.",
                th: "จองโรงแรม"
            }
        ],
        hint: "advance booking",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 624,
        word: "itinerary",
        pos: "n.",
        thai: "แผนการเดินทาง",
        definition: "travel plan",
        examples: [
            {
                en: "Check your travel itinerary.",
                th: "ตรวจสอบแผนการเดินทางของคุณ"
            }
        ],
        hint: "trip schedule",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 625,
        word: "customs",
        pos: "n.",
        thai: "ศุลกากร",
        definition: "border control",
        examples: [
            {
                en: "Go through customs.",
                th: "ผ่านศุลกากร"
            }
        ],
        hint: "airport check",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 626,
        word: "visa",
        pos: "n.",
        thai: "วีซ่า",
        definition: "permission to enter country",
        examples: [
            {
                en: "Apply for a tourist visa.",
                th: "สมัครวีซ่านักท่องเที่ยว"
            }
        ],
        hint: "entry permit",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 627,
        word: "currency",
        pos: "n.",
        thai: "สกุลเงิน",
        definition: "money system",
        examples: [
            {
                en: "Exchange currency at bank.",
                th: "แลกเปลี่ยนเงินที่ธนาคาร"
            }
        ],
        hint: "money type",
        level: "B1",
        cats: ["travel", "money"]
    },
    {
        id: 628,
        word: "exchange",
        pos: "v.",
        thai: "แลกเปลี่ยน",
        definition: "trade one thing for another",
        examples: [
            {
                en: "Exchange dollars for baht.",
                th: "แลกดอลลาร์เป็นบาท"
            }
        ],
        hint: "swap trade",
        level: "B1",
        cats: ["travel", "money"]
    },
    {
        id: 629,
        word: "souvenir",
        pos: "n.",
        thai: "ของที่ระลึก",
        definition: "memento from trip",
        examples: [
            {
                en: "Buy souvenirs for family.",
                th: "ซื้อของที่ระลึกให้ครอบครัว"
            }
        ],
        hint: "travel memory",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 630,
        word: "guide",
        pos: "n.",
        thai: "ไกด์",
        definition: "person who shows places",
        examples: [
            {
                en: "The tour guide was helpful.",
                th: "ไกด์นำเที่ยวช่วยเหลือดี"
            }
        ],
        hint: "tour leader",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 631,
        word: "attraction",
        pos: "n.",
        thai: "สถานที่ท่องเที่ยว",
        definition: "interesting place to visit",
        examples: [
            {
                en: "Visit famous attractions.",
                th: "เยี่ยมชมสถานที่ท่องเที่ยวที่มีชื่อเสียง"
            }
        ],
        hint: "tourist spot",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 632,
        word: "monument",
        pos: "n.",
        thai: "อนุสาวรีย์",
        definition: "structure built to remember",
        examples: [
            {
                en: "The monument is very old.",
                th: "อนุสาวรีย์นี้เก่าแก่มาก"
            }
        ],
        hint: "memorial building",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 633,
        word: "museum",
        pos: "n.",
        thai: "พิพิธภัณฑ์",
        definition: "place showing history/art",
        examples: [
            {
                en: "Visit the national museum.",
                th: "เยี่ยมชมพิพิธภัณฑ์แห่งชาติ"
            }
        ],
        hint: "history display",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 634,
        word: "gallery",
        pos: "n.",
        thai: "หอศิลป์",
        definition: "place showing art",
        examples: [
            {
                en: "The art gallery is beautiful.",
                th: "หอศิลป์สวยงาม"
            }
        ],
        hint: "art display",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 635,
        word: "temple",
        pos: "n.",
        thai: "วัด",
        definition: "religious building",
        examples: [
            {
                en: "Visit the ancient temple.",
                th: "เยี่ยมชมวัดโบราณ"
            }
        ],
        hint: "worship place",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 636,
        word: "palace",
        pos: "n.",
        thai: "พระราชวัง",
        definition: "royal residence",
        examples: [
            {
                en: "The palace is magnificent.",
                th: "พระราชวังงดงาม"
            }
        ],
        hint: "king's house",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 637,
        word: "castle",
        pos: "n.",
        thai: "ปราสาท",
        definition: "fortified building",
        examples: [
            {
                en: "The castle has thick walls.",
                th: "ปราสาทมีกำแพงหนา"
            }
        ],
        hint: "old fortress",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 638,
        word: "beach",
        pos: "n.",
        thai: "ชายหาด",
        definition: "sandy shore",
        examples: [
            {
                en: "Relax on the beach.",
                th: "พักผ่อนที่ชายหาด"
            }
        ],
        hint: "ocean sand",
        level: "B1",
        cats: ["travel", "nature"]
    },
    {
        id: 639,
        word: "valley",
        pos: "n.",
        thai: "หุบเขา",
        definition: "low area between hills",
        examples: [
            {
                en: "The valley is green.",
                th: "หุบเขาเขียวขจี"
            }
        ],
        hint: "between mountains",
        level: "B1",
        cats: ["travel", "nature"]
    },
    {
        id: 640,
        word: "adventure",
        pos: "n.",
        thai: "การผจญภัย",
        definition: "exciting experience",
        examples: [
            {
                en: "Travel is an adventure.",
                th: "การเดินทางเป็นการผจญภัย"
            }
        ],
        hint: "thrilling journey",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 641,
        word: "environment",
        pos: "n.",
        thai: "สิ่งแวดล้อม",
        definition: "natural world around us",
        examples: [
            {
                en: "Protect the environment.",
                th: "ปกป้องสิ่งแวดล้อม"
            }
        ],
        hint: "nature around",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 642,
        word: "pollution",
        pos: "n.",
        thai: "มลพิษ",
        definition: "harmful substances in environment",
        examples: [
            {
                en: "Air pollution is dangerous.",
                th: "มลพิษทางอากาศอันตราย"
            }
        ],
        hint: "dirty environment",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 643,
        word: "recycling",
        pos: "n.",
        thai: "การรีไซเคิล",
        definition: "reusing materials",
        examples: [
            {
                en: "Recycling helps the planet.",
                th: "การรีไซเคิลช่วยโลก"
            }
        ],
        hint: "use again",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 644,
        word: "wildlife",
        pos: "n.",
        thai: "สัตว์ป่า",
        definition: "animals in nature",
        examples: [
            {
                en: "Wildlife needs protection.",
                th: "สัตว์ป่าต้องการการปกป้อง"
            }
        ],
        hint: "wild animals",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 645,
        word: "climate",
        pos: "n.",
        thai: "ภูมิอากาศ",
        definition: "weather patterns",
        examples: [
            {
                en: "Climate change affects everyone.",
                th: "การเปลี่ยนแปลงภูมิอากาศส่งผลต่อทุกคน"
            }
        ],
        hint: "long-term weather",
        level: "B1",
        cats: ["nature", "weather"]
    },
    {
        id: 646,
        word: "desert",
        pos: "n.",
        thai: "ทะเลทราย",
        definition: "dry sandy area",
        examples: [
            {
                en: "The desert is hot.",
                th: "ทะเลทรายร้อน"
            }
        ],
        hint: "very dry land",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 647,
        word: "plant",
        pos: "n.",
        thai: "พืช",
        definition: "living green organism",
        examples: [
            {
                en: "Water the plants daily.",
                th: "รดน้ำต้นไม้ทุกวัน"
            }
        ],
        hint: "green life",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 648,
        word: "grass",
        pos: "n.",
        thai: "หญ้า",
        definition: "small green plants",
        examples: [
            {
                en: "Cut the grass weekly.",
                th: "ตัดหญ้าทุกสัปดาห์"
            }
        ],
        hint: "lawn plants",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 649,
        word: "soil",
        pos: "n.",
        thai: "ดิน",
        definition: "earth for growing plants",
        examples: [
            {
                en: "Rich soil grows good crops.",
                th: "ดินอุดมสมบูรณ์ปลูกพืชได้ดี"
            }
        ],
        hint: "plant ground",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 650,
        word: "seed",
        pos: "n.",
        thai: "เมล็ด",
        definition: "plant beginning",
        examples: [
            {
                en: "Plant seeds in spring.",
                th: "ปลูกเมล็ดในฤดูใบไม้ผลิ"
            }
        ],
        hint: "plant start",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 651,
        word: "harvest",
        pos: "n.",
        thai: "การเก็บเกี่ยว",
        definition: "gathering crops",
        examples: [
            {
                en: "Harvest time is busy.",
                th: "ช่วงเก็บเกี่ยวยุ่ง"
            }
        ],
        hint: "crop collection",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 652,
        word: "agriculture",
        pos: "n.",
        thai: "เกษตรกรรม",
        definition: "farming activity",
        examples: [
            {
                en: "Agriculture feeds people.",
                th: "เกษตรกรรมเลี้ยงคน"
            }
        ],
        hint: "crop growing",
        level: "B1",
        cats: ["nature", "work"]
    },
    {
        id: 653,
        word: "farmer",
        pos: "n.",
        thai: "เกษตรกร",
        definition: "person who grows crops",
        examples: [
            {
                en: "The farmer works hard.",
                th: "เกษตรกรทำงานหนัก"
            }
        ],
        hint: "crop grower",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 654,
        word: "crop",
        pos: "n.",
        thai: "พืชผล",
        definition: "plants grown for food",
        examples: [
            {
                en: "Rice is an important crop.",
                th: "ข้าวเป็นพืชผลสำคัญ"
            }
        ],
        hint: "farm produce",
        level: "B1",
        cats: ["nature", "food"]
    },
    {
        id: 655,
        word: "organic",
        pos: "adj.",
        thai: "ออร์แกนิก",
        definition: "natural without chemicals",
        examples: [
            {
                en: "Buy organic vegetables.",
                th: "ซื้อผักออร์แกนิก"
            }
        ],
        hint: "chemical-free",
        level: "B1",
        cats: ["nature", "food"]
    },
    {
        id: 656,
        word: "natural",
        pos: "adj.",
        thai: "ธรรมชาติ",
        definition: "from nature",
        examples: [
            {
                en: "Natural products are better.",
                th: "ผลิตภัณฑ์ธรรมชาติดีกว่า"
            }
        ],
        hint: "not artificial",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 657,
        word: "conservation",
        pos: "n.",
        thai: "การอนุรักษ์",
        definition: "protecting nature",
        examples: [
            {
                en: "Wildlife conservation is important.",
                th: "การอนุรักษ์สัตว์ป่าสำคัญ"
            }
        ],
        hint: "nature protection",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 658,
        word: "renewable",
        pos: "adj.",
        thai: "หมุนเวียนได้",
        definition: "can be used again",
        examples: [
            {
                en: "Solar is renewable energy.",
                th: "พลังงานแสงอาทิตย์หมุนเวียนได้"
            }
        ],
        hint: "reusable",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 659,
        word: "website",
        pos: "n.",
        thai: "เว็บไซต์",
        definition: "pages on internet",
        examples: [
            {
                en: "Visit our website for more info.",
                th: "เยี่ยมชมเว็บไซต์ของเราสำหรับข้อมูลเพิ่มเติม"
            }
        ],
        hint: "online pages",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 660,
        word: "software",
        pos: "n.",
        thai: "ซอฟต์แวร์",
        definition: "computer programs",
        examples: [
            {
                en: "This software is useful.",
                th: "ซอฟต์แวร์นี้มีประโยชน์"
            }
        ],
        hint: "computer apps",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 661,
        word: "download",
        pos: "v.",
        thai: "ดาวน์โหลด",
        definition: "get files from internet",
        examples: [
            {
                en: "Download the app now.",
                th: "ดาวน์โหลดแอปเดี๋ยวนี้"
            }
        ],
        hint: "get from web",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 662,
        word: "upload",
        pos: "v.",
        thai: "อัปโหลด",
        definition: "put files on internet",
        examples: [
            {
                en: "Upload your photos.",
                th: "อัปโหลดรูปภาพของคุณ"
            }
        ],
        hint: "send to web",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 663,
        word: "password",
        pos: "n.",
        thai: "รหัสผ่าน",
        definition: "secret code for access",
        examples: [
            {
                en: "Enter your password.",
                th: "ใส่รหัสผ่านของคุณ"
            }
        ],
        hint: "login code",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 664,
        word: "database",
        pos: "n.",
        thai: "ฐานข้อมูล",
        definition: "organized information storage",
        examples: [
            {
                en: "The database contains records.",
                th: "ฐานข้อมูลมีบันทึก"
            }
        ],
        hint: "data storage",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 665,
        word: "network",
        pos: "n.",
        thai: "เครือข่าย",
        definition: "connected computers",
        examples: [
            {
                en: "The network is down.",
                th: "เครือข่ายขัดข้อง"
            }
        ],
        hint: "computer connection",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 666,
        word: "connection",
        pos: "n.",
        thai: "การเชื่อมต่อ",
        definition: "link between things",
        examples: [
            {
                en: "Check your internet connection.",
                th: "ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต"
            }
        ],
        hint: "joining link",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 667,
        word: "system",
        pos: "n.",
        thai: "ระบบ",
        definition: "organized set of parts",
        examples: [
            {
                en: "The system works well.",
                th: "ระบบทำงานได้ดี"
            }
        ],
        hint: "organized whole",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 668,
        word: "device",
        pos: "n.",
        thai: "อุปกรณ์",
        definition: "tool or machine",
        examples: [
            {
                en: "This device is portable.",
                th: "อุปกรณ์นี้พกพาได้"
            }
        ],
        hint: "equipment",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 669,
        word: "digital",
        pos: "adj.",
        thai: "ดิจิทัล",
        definition: "using computer technology",
        examples: [
            {
                en: "Digital photos are clear.",
                th: "รูปภาพดิจิทัลชัด"
            }
        ],
        hint: "computer-based",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 670,
        word: "online",
        pos: "adj.",
        thai: "ออนไลน์",
        definition: "connected to internet",
        examples: [
            {
                en: "Shop online for convenience.",
                th: "ซื้อของออนไลน์เพื่อความสะดวก"
            }
        ],
        hint: "on internet",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 671,
        word: "offline",
        pos: "adj.",
        thai: "ออฟไลน์",
        definition: "not connected to internet",
        examples: [
            {
                en: "Work offline when traveling.",
                th: "ทำงานออฟไลน์เมื่อเดินทาง"
            }
        ],
        hint: "no internet",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 672,
        word: "backup",
        pos: "n.",
        thai: "การสำรองข้อมูล",
        definition: "copy of data for safety",
        examples: [
            {
                en: "Make a backup of files.",
                th: "สำรองข้อมูลไฟล์"
            }
        ],
        hint: "data copy",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 673,
        word: "update",
        pos: "v.",
        thai: "อัปเดต",
        definition: "make current",
        examples: [
            {
                en: "Update your software.",
                th: "อัปเดตซอฟต์แวร์ของคุณ"
            }
        ],
        hint: "make new",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 674,
        word: "version",
        pos: "n.",
        thai: "เวอร์ชัน",
        definition: "particular form of something",
        examples: [
            {
                en: "Download the latest version.",
                th: "ดาวน์โหลดเวอร์ชันล่าสุด"
            }
        ],
        hint: "edition",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 675,
        word: "browser",
        pos: "n.",
        thai: "เบราว์เซอร์",
        definition: "program for viewing websites",
        examples: [
            {
                en: "Open your web browser.",
                th: "เปิดเว็บเบราว์เซอร์"
            }
        ],
        hint: "web viewer",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 676,
        word: "result",
        pos: "n.",
        thai: "ผลลัพธ์",
        definition: "outcome of search",
        examples: [
            {
                en: "The search results are helpful.",
                th: "ผลการค้นหามีประโยชน์"
            }
        ],
        hint: "search outcome",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 677,
        word: "link",
        pos: "n.",
        thai: "ลิงก์",
        definition: "connection to another page",
        examples: [
            {
                en: "Click the link to continue.",
                th: "คลิกลิงก์เพื่อดำเนินการต่อ"
            }
        ],
        hint: "web connection",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 678,
        word: "social",
        pos: "adj.",
        thai: "สังคม",
        definition: "relating to society",
        examples: [
            {
                en: "Social media is popular.",
                th: "สื่อสังคมออนไลน์ได้รับความนิยม"
            }
        ],
        hint: "community-related",
        level: "B1",
        cats: ["technology", "social"]
    },
    {
        id: 679,
        word: "media",
        pos: "n.",
        thai: "สื่อ",
        definition: "means of communication",
        examples: [
            {
                en: "Media influences opinions.",
                th: "สื่อมีอิทธิพลต่อความคิดเห็น"
            }
        ],
        hint: "communication tools",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 680,
        word: "diet",
        pos: "n.",
        thai: "อาหารการกิน",
        definition: "food you regularly eat",
        examples: [
            {
                en: "A healthy diet is important.",
                th: "อาหารการกินที่ดีต่อสุขภาพสำคัญ"
            }
        ],
        hint: "eating habits",
        level: "B1",
        cats: ["health", "food"]
    },
    {
        id: 681,
        word: "fitness",
        pos: "n.",
        thai: "ความแข็งแรง",
        definition: "physical health condition",
        examples: [
            {
                en: "Regular fitness improves health.",
                th: "การออกกำลังกายสม่ำเสมอช่วยเพิ่มสุขภาพ"
            }
        ],
        hint: "body strength",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 682,
        word: "nutrition",
        pos: "n.",
        thai: "โภชนาการ",
        definition: "food value for health",
        examples: [
            {
                en: "Good nutrition prevents disease.",
                th: "โภชนาการที่ดีป้องกันโรค"
            }
        ],
        hint: "food nutrients",
        level: "B1",
        cats: ["health", "food"]
    },
    {
        id: 683,
        word: "vitamin",
        pos: "n.",
        thai: "วิตามิน",
        definition: "nutrients body needs",
        examples: [
            {
                en: "Take vitamin C daily.",
                th: "กินวิตามินซีทุกวัน"
            }
        ],
        hint: "health supplements",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 684,
        word: "stress",
        pos: "n.",
        thai: "ความเครียด",
        definition: "mental pressure",
        examples: [
            {
                en: "Work causes stress.",
                th: "งานทำให้เครียด"
            }
        ],
        hint: "worry pressure",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 685,
        word: "energy",
        pos: "n.",
        thai: "พลังงาน",
        definition: "power for activity",
        examples: [
            {
                en: "Food gives you energy.",
                th: "อาหารให้พลังงาน"
            }
        ],
        hint: "body power",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 686,
        word: "rest",
        pos: "n.",
        thai: "การพักผ่อน",
        definition: "relaxation time",
        examples: [
            {
                en: "Take rest when tired.",
                th: "พักผ่อนเมื่อเหนื่อย"
            }
        ],
        hint: "break time",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 687,
        word: "treatment",
        pos: "n.",
        thai: "การรักษา",
        definition: "medical care",
        examples: [
            {
                en: "The treatment was successful.",
                th: "การรักษาสำเร็จ"
            }
        ],
        hint: "medical help",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 688,
        word: "symptom",
        pos: "n.",
        thai: "อาการ",
        definition: "sign of illness",
        examples: [
            {
                en: "Fever is a common symptom.",
                th: "ไข้เป็นอาการที่พบบ่อย"
            }
        ],
        hint: "illness sign",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 689,
        word: "prevention",
        pos: "n.",
        thai: "การป้องกัน",
        definition: "stopping illness before it starts",
        examples: [
            {
                en: "Prevention is better than cure.",
                th: "การป้องกันดีกว่าการรักษา"
            }
        ],
        hint: "illness prevention",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 690,
        word: "checkup",
        pos: "n.",
        thai: "การตรวจสุขภาพ",
        definition: "medical examination",
        examples: [
            {
                en: "Have a regular checkup.",
                th: "ตรวจสุขภาพเป็นประจำ"
            }
        ],
        hint: "health check",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 691,
        word: "injury",
        pos: "n.",
        thai: "การบาดเจ็บ",
        definition: "physical harm",
        examples: [
            {
                en: "Sports can cause injury.",
                th: "กีฬาอาจทำให้บาดเจ็บ"
            }
        ],
        hint: "body damage",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 692,
        word: "recovery",
        pos: "n.",
        thai: "การฟื้นตัว",
        definition: "getting better after illness",
        examples: [
            {
                en: "Recovery takes time.",
                th: "การฟื้นตัวใช้เวลา"
            }
        ],
        hint: "healing process",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 693,
        word: "therapy",
        pos: "n.",
        thai: "การบำบัด",
        definition: "treatment for health problems",
        examples: [
            {
                en: "Physical therapy helps recovery.",
                th: "กายภาพบำบัดช่วยฟื้นตัว"
            }
        ],
        hint: "healing treatment",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 694,
        word: "mental",
        pos: "adj.",
        thai: "จิตใจ",
        definition: "relating to mind",
        examples: [
            {
                en: "Mental health is important.",
                th: "สุขภาพจิตสำคัญ"
            }
        ],
        hint: "mind-related",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 695,
        word: "physical",
        pos: "adj.",
        thai: "ร่างกาย",
        definition: "relating to body",
        examples: [
            {
                en: "Physical activity is good.",
                th: "กิจกรรมทางกายดี"
            }
        ],
        hint: "body-related",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 696,
        word: "lifestyle",
        pos: "n.",
        thai: "วิถีชีวิต",
        definition: "way of living",
        examples: [
            {
                en: "Change your lifestyle.",
                th: "เปลี่ยนวิถีชีวิตของคุณ"
            }
        ],
        hint: "life style",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 697,
        word: "habit",
        pos: "n.",
        thai: "นิสัย",
        definition: "regular behavior",
        examples: [
            {
                en: "Good habits improve health.",
                th: "นิสัยดีช่วยเพิ่มสุขภาพ"
            }
        ],
        hint: "regular action",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 698,
        word: "balance",
        pos: "n.",
        thai: "ความสมดุล",
        definition: "equal state",
        examples: [
            {
                en: "Work-life balance is important.",
                th: "ความสมดุลระหว่างงานและชีวิตสำคัญ"
            }
        ],
        hint: "equal condition",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 699,
        word: "wellness",
        pos: "n.",
        thai: "ความเป็นอยู่ที่ดี",
        definition: "state of being healthy",
        examples: [
            {
                en: "Focus on wellness.",
                th: "มุ่งเน้นความเป็นอยู่ที่ดี"
            }
        ],
        hint: "good health state",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 700,
        word: "relationship",
        pos: "n.",
        thai: "ความสัมพันธ์",
        definition: "connection between people",
        examples: [
            {
                en: "They have a good relationship.",
                th: "พวกเขามีความสัมพันธ์ที่ดี"
            }
        ],
        hint: "human connection",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 701,
        word: "friendship",
        pos: "n.",
        thai: "มิตรภาพ",
        definition: "bond between friends",
        examples: [
            {
                en: "Their friendship lasted years.",
                th: "มิตรภาพของพวกเขาคงอยู่หลายปี"
            }
        ],
        hint: "friend connection",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 702,
        word: "marriage",
        pos: "n.",
        thai: "การแต่งงาน",
        definition: "union between spouses",
        examples: [
            {
                en: "Marriage requires commitment.",
                th: "การแต่งงานต้องใช้ความมุ่งมั่น"
            }
        ],
        hint: "husband wife",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 703,
        word: "divorce",
        pos: "n.",
        thai: "การหย่าร้าง",
        definition: "end of marriage",
        examples: [
            {
                en: "Divorce can be difficult.",
                th: "การหย่าร้างอาจยาก"
            }
        ],
        hint: "marriage ends",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 704,
        word: "community",
        pos: "n.",
        thai: "ชุมชน",
        definition: "group of people living together",
        examples: [
            {
                en: "Our community is friendly.",
                th: "ชุมชนของเราเป็นมิตร"
            }
        ],
        hint: "neighborhood",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 705,
        word: "society",
        pos: "n.",
        thai: "สังคม",
        definition: "organized group of people",
        examples: [
            {
                en: "Society changes over time.",
                th: "สังคมเปลี่ยนแปลงตามเวลา"
            }
        ],
        hint: "human group",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 706,
        word: "neighbor",
        pos: "n.",
        thai: "เพื่อนบ้าน",
        definition: "person living nearby",
        examples: [
            {
                en: "My neighbor is helpful.",
                th: "เพื่อนบ้านของฉันช่วยเหลือดี"
            }
        ],
        hint: "nearby resident",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 707,
        word: "trust",
        pos: "n.",
        thai: "ความไว้วางใจ",
        definition: "belief in someone's honesty",
        examples: [
            {
                en: "Trust is important in relationships.",
                th: "ความไว้วางใจสำคัญในความสัมพันธ์"
            }
        ],
        hint: "faith in person",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 708,
        word: "respect",
        pos: "n.",
        thai: "ความเคารพ",
        definition: "admiration for someone",
        examples: [
            {
                en: "Show respect to elders.",
                th: "แสดงความเคารพต่อผู้ใหญ่"
            }
        ],
        hint: "honor someone",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 709,
        word: "cooperation",
        pos: "n.",
        thai: "ความร่วมมือ",
        definition: "working together",
        examples: [
            {
                en: "Cooperation leads to success.",
                th: "ความร่วมมือนำไปสู่ความสำเร็จ"
            }
        ],
        hint: "team work",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 710,
        word: "communication",
        pos: "n.",
        thai: "การสื่อสาร",
        definition: "sharing information",
        examples: [
            {
                en: "Good communication prevents problems.",
                th: "การสื่อสารที่ดีป้องกันปัญหา"
            }
        ],
        hint: "information sharing",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 711,
        word: "understanding",
        pos: "n.",
        thai: "ความเข้าใจ",
        definition: "comprehension of others",
        examples: [
            {
                en: "Understanding builds relationships.",
                th: "ความเข้าใจสร้างความสัมพันธ์"
            }
        ],
        hint: "knowing others",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 712,
        word: "conflict",
        pos: "n.",
        thai: "ความขัดแย้ง",
        definition: "disagreement or fight",
        examples: [
            {
                en: "Resolve conflicts peacefully.",
                th: "แก้ไขความขัดแย้งอย่างสันติ"
            }
        ],
        hint: "disagreement",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 713,
        word: "agreement",
        pos: "n.",
        thai: "ข้อตกลง",
        definition: "shared decision",
        examples: [
            {
                en: "We reached an agreement.",
                th: "เราตกลงกันได้"
            }
        ],
        hint: "mutual decision",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 714,
        word: "compromise",
        pos: "n.",
        thai: "การประนีประนอม",
        definition: "mutual concession",
        examples: [
            {
                en: "Marriage needs compromise.",
                th: "การแต่งงานต้องประนีประนอม"
            }
        ],
        hint: "give and take",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 715,
        word: "loyalty",
        pos: "n.",
        thai: "ความจงรักภักดี",
        definition: "faithful support",
        examples: [
            {
                en: "Loyalty strengthens friendship.",
                th: "ความจงรักภักดีเสริมมิตรภาพ"
            }
        ],
        hint: "faithful devotion",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 716,
        word: "honesty",
        pos: "n.",
        thai: "ความซื่อสัตย์",
        definition: "truthfulness",
        examples: [
            {
                en: "Honesty builds trust.",
                th: "ความซื่อสัตย์สร้างความไว้วางใจ"
            }
        ],
        hint: "being truthful",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 717,
        word: "kindness",
        pos: "n.",
        thai: "ความเมตตา",
        definition: "being caring and helpful",
        examples: [
            {
                en: "Kindness makes people happy.",
                th: "ความเมตตาทำให้คนมีความสุข"
            }
        ],
        hint: "caring nature",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 718,
        word: "generosity",
        pos: "n.",
        thai: "ความเอื้อเฟื้อ",
        definition: "willingness to give",
        examples: [
            {
                en: "His generosity is well-known.",
                th: "ความเอื้อเฟื้อของเขาเป็นที่รู้จัก"
            }
        ],
        hint: "giving nature",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 719,
        word: "economy",
        pos: "n.",
        thai: "เศรษฐกิจ",
        definition: "system of money and trade",
        examples: [
            {
                en: "The economy is growing.",
                th: "เศรษฐกิจกำลังเติบโต"
            }
        ],
        hint: "financial system",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 720,
        word: "investment",
        pos: "n.",
        thai: "การลงทุน",
        definition: "money put into business",
        examples: [
            {
                en: "Investment requires research.",
                th: "การลงทุนต้องใช้การวิจัย"
            }
        ],
        hint: "business funding",
        level: "B2",
        cats: ["work", "money"]
    },
    {
        id: 721,
        word: "profit",
        pos: "n.",
        thai: "กำไร",
        definition: "money gained from business",
        examples: [
            {
                en: "The company made profit.",
                th: "บริษัททำกำไรได้"
            }
        ],
        hint: "business earnings",
        level: "B2",
        cats: ["work", "money"]
    },
    {
        id: 722,
        word: "budget",
        pos: "n.",
        thai: "งบประมาณ",
        definition: "plan for spending money",
        examples: [
            {
                en: "We need to plan our budget.",
                th: "เราต้องวางแผนงบประมาณ"
            }
        ],
        hint: "money plan",
        level: "B2",
        cats: ["work", "money"]
    },
    {
        id: 723,
        word: "marketing",
        pos: "n.",
        thai: "การตลาด",
        definition: "promoting products",
        examples: [
            {
                en: "Marketing increases sales.",
                th: "การตลาดเพิ่มยอดขาย"
            }
        ],
        hint: "selling strategy",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 724,
        word: "revenue",
        pos: "n.",
        thai: "รายได้",
        definition: "income from business",
        examples: [
            {
                en: "Revenue increased this quarter.",
                th: "รายได้เพิ่มขึ้นในไตรมาสนี้"
            }
        ],
        hint: "business income",
        level: "B2",
        cats: ["work", "money"]
    },
    {
        id: 725,
        word: "expense",
        pos: "n.",
        thai: "ค่าใช้จ่าย",
        definition: "money spent",
        examples: [
            {
                en: "Control business expenses.",
                th: "ควบคุมค่าใช้จ่ายธุรกิจ"
            }
        ],
        hint: "spending cost",
        level: "B2",
        cats: ["work", "money"]
    },
    {
        id: 726,
        word: "competition",
        pos: "n.",
        thai: "การแข่งขัน",
        definition: "rivalry in business",
        examples: [
            {
                en: "Competition drives innovation.",
                th: "การแข่งขันขับเคลื่อนนวัตกรรม"
            }
        ],
        hint: "business rivalry",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 727,
        word: "market",
        pos: "n.",
        thai: "ตลาด",
        definition: "place for buying and selling",
        examples: [
            {
                en: "The market is competitive.",
                th: "ตลาดมีการแข่งขัน"
            }
        ],
        hint: "trade place",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 728,
        word: "customer",
        pos: "n.",
        thai: "ลูกค้า",
        definition: "person who buys",
        examples: [
            {
                en: "Customer satisfaction is key.",
                th: "ความพึงพอใจของลูกค้าเป็นกุญแจ"
            }
        ],
        hint: "buyer",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 729,
        word: "supplier",
        pos: "n.",
        thai: "ผู้จัดหา",
        definition: "person who provides goods",
        examples: [
            {
                en: "Find reliable suppliers.",
                th: "หาผู้จัดหาที่เชื่อถือได้"
            }
        ],
        hint: "goods provider",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 730,
        word: "partnership",
        pos: "n.",
        thai: "ความเป็นหุ้นส่วน",
        definition: "business cooperation",
        examples: [
            {
                en: "Partnership benefits both companies.",
                th: "ความเป็นหุ้นส่วนเป็นประโยชน์ต่อทั้งสองบริษัท"
            }
        ],
        hint: "business alliance",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 731,
        word: "negotiation",
        pos: "n.",
        thai: "การเจรจา",
        definition: "discussion to reach agreement",
        examples: [
            {
                en: "Negotiation skills are valuable.",
                th: "ทักษะการเจรจามีค่า"
            }
        ],
        hint: "deal discussion",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 732,
        word: "proposal",
        pos: "n.",
        thai: "ข้อเสนอ",
        definition: "suggested plan",
        examples: [
            {
                en: "Submit your proposal by Friday.",
                th: "ส่งข้อเสนอภายในวันศุกร์"
            }
        ],
        hint: "suggested idea",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 733,
        word: "analysis",
        pos: "n.",
        thai: "การวิเคราะห์",
        definition: "detailed examination",
        examples: [
            {
                en: "Market analysis shows trends.",
                th: "การวิเคราะห์ตลาดแสดงแนวโน้ม"
            }
        ],
        hint: "detailed study",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 734,
        word: "efficiency",
        pos: "n.",
        thai: "ประสิทธิภาพ",
        definition: "doing things well",
        examples: [
            {
                en: "Improve work efficiency.",
                th: "เพิ่มประสิทธิภาพการทำงาน"
            }
        ],
        hint: "good performance",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 735,
        word: "productivity",
        pos: "n.",
        thai: "ผลผลิต",
        definition: "rate of output",
        examples: [
            {
                en: "Technology increases productivity.",
                th: "เทคโนโลยีเพิ่มผลผลิต"
            }
        ],
        hint: "work output",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 736,
        word: "entrepreneur",
        pos: "n.",
        thai: "ผู้ประกอบการ",
        definition: "person who starts business",
        examples: [
            {
                en: "Entrepreneurs take risks.",
                th: "ผู้ประกอบการเสี่ยงภัย"
            }
        ],
        hint: "business starter",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 737,
        word: "corporation",
        pos: "n.",
        thai: "บริษัทมหาชน",
        definition: "large business company",
        examples: [
            {
                en: "The corporation has many employees.",
                th: "บริษัทมหาชนมีพนักงานมาก"
            }
        ],
        hint: "big company",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 738,
        word: "industry",
        pos: "n.",
        thai: "อุตสาหกรรม",
        definition: "business sector",
        examples: [
            {
                en: "The tech industry is growing.",
                th: "อุตสาหกรรมเทคโนโลยีกำลังเติบโต"
            }
        ],
        hint: "business field",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 739,
        word: "manufacturing",
        pos: "n.",
        thai: "การผลิต",
        definition: "making products",
        examples: [
            {
                en: "Manufacturing requires machinery.",
                th: "การผลิตต้องใช้เครื่องจักร"
            }
        ],
        hint: "product making",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 740,
        word: "distribution",
        pos: "n.",
        thai: "การจัดจำหน่าย",
        definition: "delivering products",
        examples: [
            {
                en: "Distribution network is important.",
                th: "เครือข่ายการจัดจำหน่ายสำคัญ"
            }
        ],
        hint: "product delivery",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 741,
        word: "retail",
        pos: "n.",
        thai: "การค้าปลีก",
        definition: "selling to consumers",
        examples: [
            {
                en: "Retail stores serve customers.",
                th: "ร้านค้าปลีกให้บริการลูกค้า"
            }
        ],
        hint: "direct selling",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 742,
        word: "wholesale",
        pos: "n.",
        thai: "การค้าส่ง",
        definition: "selling in large quantities",
        examples: [
            {
                en: "Wholesale prices are lower.",
                th: "ราคาค้าส่งต่ำกว่า"
            }
        ],
        hint: "bulk selling",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 743,
        word: "franchise",
        pos: "n.",
        thai: "แฟรนไชส์",
        definition: "business licensing system",
        examples: [
            {
                en: "Buy a restaurant franchise.",
                th: "ซื้อแฟรนไชส์ร้านอาหาร"
            }
        ],
        hint: "business license",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 744,
        word: "merger",
        pos: "n.",
        thai: "การควบรวม",
        definition: "combining companies",
        examples: [
            {
                en: "The merger created a giant company.",
                th: "การควบรวมสร้างบริษัทยักษ์"
            }
        ],
        hint: "company joining",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 745,
        word: "acquisition",
        pos: "n.",
        thai: "การซื้อกิจการ",
        definition: "buying another company",
        examples: [
            {
                en: "The acquisition was successful.",
                th: "การซื้อกิจการสำเร็จ"
            }
        ],
        hint: "company purchase",
        level: "B2",
        cats: ["work"]
    },
    {
        id: 746,
        word: "research",
        pos: "n.",
        thai: "การวิจัย",
        definition: "systematic investigation",
        examples: [
            {
                en: "Research takes time.",
                th: "การวิจัยใช้เวลา"
            }
        ],
        hint: "scientific study",
        level: "B2",
        cats: ["school", "work"]
    },
    {
        id: 747,
        word: "experiment",
        pos: "n.",
        thai: "การทดลอง",
        definition: "scientific test",
        examples: [
            {
                en: "The experiment was successful.",
                th: "การทดลองสำเร็จ"
            }
        ],
        hint: "lab test",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 748,
        word: "theory",
        pos: "n.",
        thai: "ทฤษฎี",
        definition: "explanation of phenomena",
        examples: [
            {
                en: "Einstein's theory is famous.",
                th: "ทฤษฎีของไอน์สไตน์มีชื่อเสียง"
            }
        ],
        hint: "scientific idea",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 749,
        word: "discovery",
        pos: "n.",
        thai: "การค้นพบ",
        definition: "finding something new",
        examples: [
            {
                en: "The discovery changed science.",
                th: "การค้นพบเปลี่ยนวิทยาศาสตร์"
            }
        ],
        hint: "new finding",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 750,
        word: "invention",
        pos: "n.",
        thai: "การประดิษฐ์",
        definition: "creating something new",
        examples: [
            {
                en: "The invention helps people.",
                th: "การประดิษฐ์ช่วยเหลือผู้คน"
            }
        ],
        hint: "new creation",
        level: "B2",
        cats: ["school", "technology"]
    },
    {
        id: 751,
        word: "laboratory",
        pos: "n.",
        thai: "ห้องปฏิบัติการ",
        definition: "place for scientific work",
        examples: [
            {
                en: "Work in the laboratory.",
                th: "ทำงานในห้องปฏิบัติการ"
            }
        ],
        hint: "science room",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 752,
        word: "conclusion",
        pos: "n.",
        thai: "บทสรุป",
        definition: "final result",
        examples: [
            {
                en: "Draw a conclusion from data.",
                th: "สรุปผลจากข้อมูล"
            }
        ],
        hint: "final answer",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 753,
        word: "methodology",
        pos: "n.",
        thai: "วิธีการ",
        definition: "system of methods",
        examples: [
            {
                en: "Use proper methodology.",
                th: "ใช้วิธีการที่เหมาะสม"
            }
        ],
        hint: "way of doing",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 754,
        word: "data",
        pos: "n.",
        thai: "ข้อมูล",
        definition: "facts and statistics",
        examples: [
            {
                en: "Analyze the data carefully.",
                th: "วิเคราะห์ข้อมูลอย่างระมัดระวัง"
            }
        ],
        hint: "information facts",
        level: "B2",
        cats: ["school", "technology"]
    },
    {
        id: 755,
        word: "statistics",
        pos: "n.",
        thai: "สถิติ",
        definition: "numerical data",
        examples: [
            {
                en: "Statistics show the trend.",
                th: "สถิติแสดงแนวโน้ม"
            }
        ],
        hint: "number facts",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 756,
        word: "variable",
        pos: "n.",
        thai: "ตัวแปร",
        definition: "changeable factor",
        examples: [
            {
                en: "Control the variables.",
                th: "ควบคุมตัวแปร"
            }
        ],
        hint: "changing element",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 757,
        word: "formula",
        pos: "n.",
        thai: "สูตร",
        definition: "mathematical expression",
        examples: [
            {
                en: "Use the correct formula.",
                th: "ใช้สูตรที่ถูกต้อง"
            }
        ],
        hint: "math rule",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 758,
        word: "equation",
        pos: "n.",
        thai: "สมการ",
        definition: "mathematical statement",
        examples: [
            {
                en: "Solve the equation.",
                th: "แก้สมการ"
            }
        ],
        hint: "math equality",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 759,
        word: "algorithm",
        pos: "n.",
        thai: "อัลกอริทึม",
        definition: "step-by-step procedure",
        examples: [
            {
                en: "The algorithm is efficient.",
                th: "อัลกอริทึมมีประสิทธิภาพ"
            }
        ],
        hint: "step process",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 760,
        word: "artificial",
        pos: "adj.",
        thai: "เทียม",
        definition: "made by humans",
        examples: [
            {
                en: "Artificial intelligence is advancing.",
                th: "ปัญญาเทียมกำลังก้าวหน้า"
            }
        ],
        hint: "not natural",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 761,
        word: "intelligence",
        pos: "n.",
        thai: "ปัญญา",
        definition: "ability to learn and understand",
        examples: [
            {
                en: "Human intelligence is complex.",
                th: "ปัญญาของมนุษย์ซับซ้อน"
            }
        ],
        hint: "smart thinking",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 762,
        word: "automation",
        pos: "n.",
        thai: "ระบบอัตโนมัติ",
        definition: "automatic operation",
        examples: [
            {
                en: "Automation improves efficiency.",
                th: "ระบบอัตโนมัติเพิ่มประสิทธิภาพ"
            }
        ],
        hint: "self-operating",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 763,
        word: "robotics",
        pos: "n.",
        thai: "หุ่นยนต์",
        definition: "robot technology",
        examples: [
            {
                en: "Robotics is the future.",
                th: "หุ่นยนต์คืออนาคต"
            }
        ],
        hint: "robot science",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 764,
        word: "biotechnology",
        pos: "n.",
        thai: "เทคโนโลยีชีวภาพ",
        definition: "technology using living organisms",
        examples: [
            {
                en: "Biotechnology helps medicine.",
                th: "เทคโนโลยีชีวภาพช่วยการแพทย์"
            }
        ],
        hint: "bio-tech",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 765,
        word: "nanotechnology",
        pos: "n.",
        thai: "นาโนเทคโนโลยี",
        definition: "technology at molecular level",
        examples: [
            {
                en: "Nanotechnology has many applications.",
                th: "นาโนเทคโนโลยีมีการใช้งานมาก"
            }
        ],
        hint: "tiny tech",
        level: "B2",
        cats: ["technology"]
    },
    {
        id: 766,
        word: "genetics",
        pos: "n.",
        thai: "พันธุศาสตร์",
        definition: "study of heredity",
        examples: [
            {
                en: "Genetics explains inheritance.",
                th: "พันธุศาสตร์อธิบายการถ่ายทอด"
            }
        ],
        hint: "gene study",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 767,
        word: "evolution",
        pos: "n.",
        thai: "วิวัฒนาการ",
        definition: "gradual development",
        examples: [
            {
                en: "Evolution takes millions of years.",
                th: "วิวัฒนาการใช้เวลาหลายล้านปี"
            }
        ],
        hint: "gradual change",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 768,
        word: "ecosystem",
        pos: "n.",
        thai: "ระบบนิเวศ",
        definition: "biological community",
        examples: [
            {
                en: "Protect the ecosystem.",
                th: "ปกป้องระบบนิเวศ"
            }
        ],
        hint: "nature system",
        level: "B2",
        cats: ["nature"]
    },
    {
        id: 769,
        word: "biodiversity",
        pos: "n.",
        thai: "ความหลากหลายทางชีวภาพ",
        definition: "variety of life",
        examples: [
            {
                en: "Biodiversity is decreasing.",
                th: "ความหลากหลายทางชีวภาพลดลง"
            }
        ],
        hint: "life variety",
        level: "B2",
        cats: ["nature"]
    },
    {
        id: 770,
        word: "sustainability",
        pos: "n.",
        thai: "ความยั่งยืน",
        definition: "ability to maintain",
        examples: [
            {
                en: "Focus on sustainability.",
                th: "มุ่งเน้นความยั่งยืน"
            }
        ],
        hint: "long-term maintenance",
        level: "B2",
        cats: ["nature"]
    },
    {
        id: 771,
        word: "fossil",
        pos: "n.",
        thai: "ฟอสซิล",
        definition: "remains of ancient life",
        examples: [
            {
                en: "Fossil fuels cause pollution.",
                th: "เชื้อเพลิงฟอสซิลทำให้เกิดมลพิษ"
            }
        ],
        hint: "ancient remains",
        level: "B2",
        cats: ["nature"]
    },
    {
        id: 772,
        word: "carbon",
        pos: "n.",
        thai: "คาร์บอน",
        definition: "chemical element",
        examples: [
            {
                en: "Reduce carbon emissions.",
                th: "ลดการปล่อยคาร์บอน"
            }
        ],
        hint: "chemical element",
        level: "B2",
        cats: ["nature"]
    },
    {
        id: 773,
        word: "culture",
        pos: "n.",
        thai: "วัฒนธรรม",
        definition: "way of life of people",
        examples: [
            {
                en: "Thai culture is rich.",
                th: "วัฒนธรรมไทยมีความหลากหลาย"
            }
        ],
        hint: "traditions customs",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 774,
        word: "tradition",
        pos: "n.",
        thai: "ประเพณี",
        definition: "customs passed down",
        examples: [
            {
                en: "We follow family traditions.",
                th: "เราปฏิบัติตามประเพณีครอบครัว"
            }
        ],
        hint: "old customs",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 775,
        word: "ceremony",
        pos: "n.",
        thai: "พิธีการ",
        definition: "formal religious or public occasion",
        examples: [
            {
                en: "The wedding ceremony was beautiful.",
                th: "พิธีแต่งงานสวยงาม"
            }
        ],
        hint: "formal event",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 776,
        word: "festival",
        pos: "n.",
        thai: "เทศกาล",
        definition: "celebration event",
        examples: [
            {
                en: "The music festival was amazing.",
                th: "เทศกาลดนตรีน่าทึ่ง"
            }
        ],
        hint: "celebration time",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 777,
        word: "heritage",
        pos: "n.",
        thai: "มรดก",
        definition: "things inherited from past",
        examples: [
            {
                en: "Preserve cultural heritage.",
                th: "อนุรักษ์มรดกทางวัฒนธรรม"
            }
        ],
        hint: "cultural legacy",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 778,
        word: "diversity",
        pos: "n.",
        thai: "ความหลากหลาย",
        definition: "variety of different things",
        examples: [
            {
                en: "Celebrate cultural diversity.",
                th: "เฉลิมฉลองความหลากหลายทางวัฒนธรรม"
            }
        ],
        hint: "variety",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 779,
        word: "identity",
        pos: "n.",
        thai: "เอกลักษณ์",
        definition: "characteristics that define",
        examples: [
            {
                en: "National identity is important.",
                th: "เอกลักษณ์ชาติสำคัญ"
            }
        ],
        hint: "defining features",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 780,
        word: "ethnicity",
        pos: "n.",
        thai: "เชื้อชาติ",
        definition: "cultural group identity",
        examples: [
            {
                en: "Respect all ethnicities.",
                th: "เคารพทุกเชื้อชาติ"
            }
        ],
        hint: "cultural group",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 781,
        word: "minority",
        pos: "n.",
        thai: "ชนกลุ่มน้อย",
        definition: "smaller group in population",
        examples: [
            {
                en: "Protect minority rights.",
                th: "ปกป้องสิทธิชนกลุ่มน้อย"
            }
        ],
        hint: "smaller group",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 782,
        word: "majority",
        pos: "n.",
        thai: "ชนกลุ่มใหญ่",
        definition: "larger group in population",
        examples: [
            {
                en: "The majority voted yes.",
                th: "ชนกลุ่มใหญ่โหวตเห็นด้วย"
            }
        ],
        hint: "larger group",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 783,
        word: "integration",
        pos: "n.",
        thai: "การรวมเข้าด้วยกัน",
        definition: "combining into whole",
        examples: [
            {
                en: "Social integration takes time.",
                th: "การรวมเข้าสังคมใช้เวลา"
            }
        ],
        hint: "joining together",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 784,
        word: "assimilation",
        pos: "n.",
        thai: "การกลมกลืน",
        definition: "becoming part of group",
        examples: [
            {
                en: "Cultural assimilation is complex.",
                th: "การกลมกลืนทางวัฒนธรรมซับซ้อน"
            }
        ],
        hint: "blending in",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 785,
        word: "discrimination",
        pos: "n.",
        thai: "การเลือกปฏิบัติ",
        definition: "unfair treatment",
        examples: [
            {
                en: "Fight against discrimination.",
                th: "ต่อสู้กับการเลือกปฏิบัติ"
            }
        ],
        hint: "unfair treatment",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 786,
        word: "prejudice",
        pos: "n.",
        thai: "อคติ",
        definition: "unfair opinion",
        examples: [
            {
                en: "Overcome prejudice with education.",
                th: "เอาชนะอคติด้วยการศึกษา"
            }
        ],
        hint: "biased opinion",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 787,
        word: "stereotype",
        pos: "n.",
        thai: "แบบแผนตายตัว",
        definition: "oversimplified image",
        examples: [
            {
                en: "Don't believe stereotypes.",
                th: "อย่าเชื่อแบบแผนตายตัว"
            }
        ],
        hint: "fixed image",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 788,
        word: "tolerance",
        pos: "n.",
        thai: "ความอดทน",
        definition: "accepting differences",
        examples: [
            {
                en: "Practice religious tolerance.",
                th: "ปฏิบัติความอดทนทางศาสนา"
            }
        ],
        hint: "accepting others",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 789,
        word: "acceptance",
        pos: "n.",
        thai: "การยอมรับ",
        definition: "willingness to accept",
        examples: [
            {
                en: "Social acceptance is important.",
                th: "การยอมรับทางสังคมสำคัญ"
            }
        ],
        hint: "willing to accept",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 790,
        word: "inclusion",
        pos: "n.",
        thai: "การรวมเข้าด้วยกัน",
        definition: "including everyone",
        examples: [
            {
                en: "Promote social inclusion.",
                th: "ส่งเสริมการรวมเข้าสังคม"
            }
        ],
        hint: "including all",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 791,
        word: "exclusion",
        pos: "n.",
        thai: "การแยกออก",
        definition: "keeping someone out",
        examples: [
            {
                en: "Social exclusion causes problems.",
                th: "การแยกออกจากสังคมสร้างปัญหา"
            }
        ],
        hint: "leaving out",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 792,
        word: "equality",
        pos: "n.",
        thai: "ความเท่าเทียม",
        definition: "being equal",
        examples: [
            {
                en: "Fight for gender equality.",
                th: "ต่อสู้เพื่อความเท่าเทียมทางเพศ"
            }
        ],
        hint: "same treatment",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 793,
        word: "inequality",
        pos: "n.",
        thai: "ความไม่เท่าเทียม",
        definition: "unfair differences",
        examples: [
            {
                en: "Income inequality is growing.",
                th: "ความไม่เท่าเทียมรายได้เพิ่มขึ้น"
            }
        ],
        hint: "unfair differences",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 794,
        word: "justice",
        pos: "n.",
        thai: "ความยุติธรรม",
        definition: "fair treatment",
        examples: [
            {
                en: "Seek justice for all.",
                th: "แสวงหาความยุติธรรมสำหรับทุกคน"
            }
        ],
        hint: "fairness",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 795,
        word: "injustice",
        pos: "n.",
        thai: "ความไม่ยุติธรรม",
        definition: "unfair treatment",
        examples: [
            {
                en: "Fight against injustice.",
                th: "ต่อสู้กับความไม่ยุติธรรม"
            }
        ],
        hint: "unfairness",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 796,
        word: "oppression",
        pos: "n.",
        thai: "การกดขี่",
        definition: "harsh treatment",
        examples: [
            {
                en: "End oppression of minorities.",
                th: "ยุติการกดขี่ชนกลุ่มน้อย"
            }
        ],
        hint: "harsh control",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 797,
        word: "liberation",
        pos: "n.",
        thai: "การปลดปล่อย",
        definition: "freedom from oppression",
        examples: [
            {
                en: "Liberation requires struggle.",
                th: "การปลดปล่อยต้องใช้การต่อสู้"
            }
        ],
        hint: "gaining freedom",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 798,
        word: "empowerment",
        pos: "n.",
        thai: "การเสริมสร้างพลัง",
        definition: "giving power to",
        examples: [
            {
                en: "Women's empowerment is crucial.",
                th: "การเสริมสร้างพลังสตรีสำคัญ"
            }
        ],
        hint: "giving strength",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 799,
        word: "activism",
        pos: "n.",
        thai: "การเคลื่อนไหวเพื่อสังคม",
        definition: "working for social change",
        examples: [
            {
                en: "Environmental activism grows.",
                th: "การเคลื่อนไหวด้านสิ่งแวดล้อมเติบโต"
            }
        ],
        hint: "social action",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 800,
        word: "advocacy",
        pos: "n.",
        thai: "การสนับสนุน",
        definition: "supporting a cause",
        examples: [
            {
                en: "Human rights advocacy is important.",
                th: "การสนับสนุนสิทธิมนุษยชนสำคัญ"
            }
        ],
        hint: "supporting cause",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 801,
        word: "reform",
        pos: "n.",
        thai: "การปฏิรูป",
        definition: "improvement of system",
        examples: [
            {
                en: "Education reform is needed.",
                th: "การปฏิรูปการศึกษาจำเป็น"
            }
        ],
        hint: "system improvement",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 802,
        word: "revolution",
        pos: "n.",
        thai: "การปฏิวัติ",
        definition: "complete change",
        examples: [
            {
                en: "The industrial revolution changed society.",
                th: "การปฏิวัติอุตสาหกรรมเปลี่ยนสังคม"
            }
        ],
        hint: "total change",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 803,
        word: "government",
        pos: "n.",
        thai: "รัฐบาล",
        definition: "system that rules country",
        examples: [
            {
                en: "The government makes laws.",
                th: "รัฐบาลสร้างกฎหมาย"
            }
        ],
        hint: "political system",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 804,
        word: "democracy",
        pos: "n.",
        thai: "ประชาธิปไตย",
        definition: "government by the people",
        examples: [
            {
                en: "Democracy gives people voice.",
                th: "ประชาธิปไตยให้เสียงประชาชน"
            }
        ],
        hint: "people power",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 805,
        word: "election",
        pos: "n.",
        thai: "การเลือกตั้ง",
        definition: "choosing leaders by voting",
        examples: [
            {
                en: "Elections are held every four years.",
                th: "การเลือกตั้งจัดทุกสี่ปี"
            }
        ],
        hint: "voting process",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 806,
        word: "candidate",
        pos: "n.",
        thai: "ผู้สมัคร",
        definition: "person running for office",
        examples: [
            {
                en: "The candidate gave a speech.",
                th: "ผู้สมัครกล่าวสุนทรพจน์"
            }
        ],
        hint: "election runner",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 807,
        word: "campaign",
        pos: "n.",
        thai: "การหาเสียง",
        definition: "activities to win election",
        examples: [
            {
                en: "The campaign was successful.",
                th: "การหาเสียงสำเร็จ"
            }
        ],
        hint: "election activities",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 808,
        word: "vote",
        pos: "v.",
        thai: "ลงคะแนน",
        definition: "choose by ballot",
        examples: [
            {
                en: "Citizens vote for leaders.",
                th: "ประชาชนลงคะแนนเลือกผู้นำ"
            }
        ],
        hint: "choose candidate",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 809,
        word: "ballot",
        pos: "n.",
        thai: "บัตรลงคะแนน",
        definition: "paper for voting",
        examples: [
            {
                en: "Mark your ballot carefully.",
                th: "ทำเครื่องหมายบัตรลงคะแนนอย่างระมัดระวัง"
            }
        ],
        hint: "voting paper",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 810,
        word: "parliament",
        pos: "n.",
        thai: "รัฐสภา",
        definition: "legislative body",
        examples: [
            {
                en: "Parliament passed the law.",
                th: "รัฐสภาผ่านกฎหมาย"
            }
        ],
        hint: "law-making body",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 811,
        word: "congress",
        pos: "n.",
        thai: "สภาคองเกรส",
        definition: "legislative assembly",
        examples: [
            {
                en: "Congress debates new laws.",
                th: "สภาคองเกรสอภิปรายกฎหมายใหม่"
            }
        ],
        hint: "law assembly",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 812,
        word: "senate",
        pos: "n.",
        thai: "วุฒิสภา",
        definition: "upper house of legislature",
        examples: [
            {
                en: "The senate approved the bill.",
                th: "วุฒิสภาอนุมัติร่างกฎหมาย"
            }
        ],
        hint: "upper house",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 813,
        word: "legislation",
        pos: "n.",
        thai: "การออกกฎหมาย",
        definition: "making laws",
        examples: [
            {
                en: "New legislation protects workers.",
                th: "กฎหมายใหม่ปกป้องคนงาน"
            }
        ],
        hint: "law making",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 814,
        word: "policy",
        pos: "n.",
        thai: "นโยบาย",
        definition: "course of action",
        examples: [
            {
                en: "The policy helps families.",
                th: "นโยบายช่วยครอบครัว"
            }
        ],
        hint: "action plan",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 815,
        word: "constitution",
        pos: "n.",
        thai: "รัฐธรรมนูญ",
        definition: "fundamental law",
        examples: [
            {
                en: "The constitution protects rights.",
                th: "รัฐธรรมนูญปกป้องสิทธิ"
            }
        ],
        hint: "basic law",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 816,
        word: "amendment",
        pos: "n.",
        thai: "การแก้ไขเพิ่มเติม",
        definition: "change to constitution",
        examples: [
            {
                en: "The amendment was ratified.",
                th: "การแก้ไขเพิ่มเติมได้รับการอนุมัติ"
            }
        ],
        hint: "law change",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 817,
        word: "republic",
        pos: "n.",
        thai: "สาธารณรัฐ",
        definition: "state with elected leaders",
        examples: [
            {
                en: "France is a republic.",
                th: "ฝรั่งเศสเป็นสาธารณรัฐ"
            }
        ],
        hint: "elected government",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 818,
        word: "monarchy",
        pos: "n.",
        thai: "ระบอบกษัตริย์",
        definition: "rule by king or queen",
        examples: [
            {
                en: "Thailand is a constitutional monarchy.",
                th: "ไทยเป็นระบอบกษัตริย์ภายใต้รัฐธรรมนูญ"
            }
        ],
        hint: "royal rule",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 819,
        word: "dictatorship",
        pos: "n.",
        thai: "เผด็จการ",
        definition: "rule by one person",
        examples: [
            {
                en: "Dictatorship limits freedom.",
                th: "เผด็จการจำกัดเสรีภาพ"
            }
        ],
        hint: "one-person rule",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 820,
        word: "authority",
        pos: "n.",
        thai: "อำนาจ",
        definition: "power to control",
        examples: [
            {
                en: "Government has authority.",
                th: "รัฐบาลมีอำนาจ"
            }
        ],
        hint: "control power",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 821,
        word: "sovereignty",
        pos: "n.",
        thai: "อำนาจอธิปไตย",
        definition: "supreme power",
        examples: [
            {
                en: "National sovereignty is important.",
                th: "อำนาจอธิปไตยของชาติสำคัญ"
            }
        ],
        hint: "highest power",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 822,
        word: "citizenship",
        pos: "n.",
        thai: "สัญชาติ",
        definition: "membership in country",
        examples: [
            {
                en: "Citizenship brings rights and duties.",
                th: "สัญชาติให้สิทธิและหน้าที่"
            }
        ],
        hint: "country membership",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 823,
        word: "patriotism",
        pos: "n.",
        thai: "ความรักชาติ",
        definition: "love for one's country",
        examples: [
            {
                en: "Patriotism inspires service.",
                th: "ความรักชาติสร้างแรงบันดาลใจในการรับใช้"
            }
        ],
        hint: "country love",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 824,
        word: "nationalism",
        pos: "n.",
        thai: "ลัทธิชาตินิยม",
        definition: "strong national identity",
        examples: [
            {
                en: "Nationalism can unite or divide.",
                th: "ลัทธิชาตินิยมสามารถรวมหรือแบ่งแยก"
            }
        ],
        hint: "strong national pride",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 825,
        word: "ideology",
        pos: "n.",
        thai: "อุดมการณ์",
        definition: "system of ideas",
        examples: [
            {
                en: "Political ideology shapes policy.",
                th: "อุดมการณ์ทางการเมืองกำหนดนโยบาย"
            }
        ],
        hint: "belief system",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 826,
        word: "propaganda",
        pos: "n.",
        thai: "การโฆษณาชวนเชื่อ",
        definition: "biased information",
        examples: [
            {
                en: "Propaganda influences opinions.",
                th: "การโฆษณาชวนเชื่อมีอิทธิพลต่อความคิดเห็น"
            }
        ],
        hint: "biased promotion",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 827,
        word: "corruption",
        pos: "n.",
        thai: "การทุจริต",
        definition: "dishonest conduct",
        examples: [
            {
                en: "Fight against corruption.",
                th: "ต่อสู้กับการทุจริต"
            }
        ],
        hint: "dishonest behavior",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 828,
        word: "transparency",
        pos: "n.",
        thai: "ความโปร่งใส",
        definition: "openness in government",
        examples: [
            {
                en: "Transparency builds trust.",
                th: "ความโปร่งใสสร้างความไว้วางใจ"
            }
        ],
        hint: "open government",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 829,
        word: "accountability",
        pos: "n.",
        thai: "ความรับผิดชอบ",
        definition: "being responsible",
        examples: [
            {
                en: "Leaders need accountability.",
                th: "ผู้นำต้องมีความรับผิดชอบ"
            }
        ],
        hint: "taking responsibility",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 830,
        word: "bureaucracy",
        pos: "n.",
        thai: "ระบบราชการ",
        definition: "government administration",
        examples: [
            {
                en: "Bureaucracy can be slow.",
                th: "ระบบราชการอาจช้า"
            }
        ],
        hint: "government system",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 831,
        word: "diplomacy",
        pos: "n.",
        thai: "การทูต",
        definition: "international relations",
        examples: [
            {
                en: "Diplomacy prevents war.",
                th: "การทูตป้องกันสงคราม"
            }
        ],
        hint: "country relations",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 832,
        word: "treaty",
        pos: "n.",
        thai: "สนธิสัญญา",
        definition: "agreement between countries",
        examples: [
            {
                en: "The treaty promotes peace.",
                th: "สนธิสัญญาส่งเสริมสันติภาพ"
            }
        ],
        hint: "country agreement",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 833,
        word: "psychology",
        pos: "n.",
        thai: "จิตวิทยา",
        definition: "study of mind and behavior",
        examples: [
            {
                en: "Psychology explains behavior.",
                th: "จิตวิทยาอธิบายพฤติกรรม"
            }
        ],
        hint: "mind study",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 834,
        word: "behavior",
        pos: "n.",
        thai: "พฤติกรรม",
        definition: "way of acting",
        examples: [
            {
                en: "Good behavior is important.",
                th: "พฤติกรรมดีสำคัญ"
            }
        ],
        hint: "actions",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 835,
        word: "personality",
        pos: "n.",
        thai: "บุคลิกภาพ",
        definition: "individual character",
        examples: [
            {
                en: "She has a friendly personality.",
                th: "เธอมีบุคลิกภาพเป็นมิตร"
            }
        ],
        hint: "character traits",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 836,
        word: "emotion",
        pos: "n.",
        thai: "อารมณ์",
        definition: "feeling state",
        examples: [
            {
                en: "Control your emotions.",
                th: "ควบคุมอารมณ์ของคุณ"
            }
        ],
        hint: "feelings",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 837,
        word: "motivation",
        pos: "n.",
        thai: "แรงจูงใจ",
        definition: "reason for action",
        examples: [
            {
                en: "Find your motivation.",
                th: "หาแรงจูงใจของคุณ"
            }
        ],
        hint: "driving force",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 838,
        word: "attitude",
        pos: "n.",
        thai: "ทัศนคติ",
        definition: "way of thinking",
        examples: [
            {
                en: "Positive attitude helps success.",
                th: "ทัศนคติเชิงบวกช่วยความสำเร็จ"
            }
        ],
        hint: "mindset",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 839,
        word: "perception",
        pos: "n.",
        thai: "การรับรู้",
        definition: "way of understanding",
        examples: [
            {
                en: "Perception affects judgment.",
                th: "การรับรู้ส่งผลต่อการตัดสิน"
            }
        ],
        hint: "understanding",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 840,
        word: "consciousness",
        pos: "n.",
        thai: "สติสัมปชัญญะ",
        definition: "awareness of surroundings",
        examples: [
            {
                en: "Consciousness is complex.",
                th: "สติสัมปชัญญะซับซ้อน"
            }
        ],
        hint: "awareness",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 841,
        word: "subconscious",
        pos: "adj.",
        thai: "จิตใต้สำนึก",
        definition: "below conscious awareness",
        examples: [
            {
                en: "Subconscious influences behavior.",
                th: "จิตใต้สำนึกมีอิทธิพลต่อพฤติกรรม"
            }
        ],
        hint: "hidden mind",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 842,
        word: "instinct",
        pos: "n.",
        thai: "สัญชาตญาณ",
        definition: "natural behavior",
        examples: [
            {
                en: "Trust your instinct.",
                th: "เชื่อสัญชาตญาณของคุณ"
            }
        ],
        hint: "natural response",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 843,
        word: "intuition",
        pos: "n.",
        thai: "ลางสังหรณ์",
        definition: "immediate understanding",
        examples: [
            {
                en: "Her intuition was correct.",
                th: "ลางสังหรณ์ของเธอถูกต้อง"
            }
        ],
        hint: "gut feeling",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 844,
        word: "creativity",
        pos: "n.",
        thai: "ความคิดสร้างสรรค์",
        definition: "ability to create",
        examples: [
            {
                en: "Creativity solves problems.",
                th: "ความคิดสร้างสรรค์แก้ปัญหา"
            }
        ],
        hint: "creative ability",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 845,
        word: "memory",
        pos: "n.",
        thai: "ความจำ",
        definition: "ability to remember",
        examples: [
            {
                en: "Memory fades with age.",
                th: "ความจำลดลงตามอายุ"
            }
        ],
        hint: "remembering",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 846,
        word: "learning",
        pos: "n.",
        thai: "การเรียนรู้",
        definition: "acquiring knowledge",
        examples: [
            {
                en: "Learning never stops.",
                th: "การเรียนรู้ไม่มีวันหยุด"
            }
        ],
        hint: "gaining knowledge",
        level: "B2",
        cats: ["school"]
    },
    {
        id: 847,
        word: "adaptation",
        pos: "n.",
        thai: "การปรับตัว",
        definition: "adjusting to change",
        examples: [
            {
                en: "Adaptation is survival.",
                th: "การปรับตัวคือการอยู่รอด"
            }
        ],
        hint: "adjusting",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 848,
        word: "anxiety",
        pos: "n.",
        thai: "ความวิตกกังวล",
        definition: "feeling of worry",
        examples: [
            {
                en: "Anxiety affects performance.",
                th: "ความวิตกกังวลส่งผลต่อผลงาน"
            }
        ],
        hint: "worry feeling",
        level: "B2",
        cats: ["health"]
    },
    {
        id: 849,
        word: "depression",
        pos: "n.",
        thai: "ภาวะซึมเศร้า",
        definition: "persistent sadness",
        examples: [
            {
                en: "Depression needs treatment.",
                th: "ภาวะซึมเศร้าต้องรักษา"
            }
        ],
        hint: "deep sadness",
        level: "B2",
        cats: ["health"]
    },
    {
        id: 850,
        word: "confidence",
        pos: "n.",
        thai: "ความมั่นใจ",
        definition: "belief in oneself",
        examples: [
            {
                en: "Confidence improves performance.",
                th: "ความมั่นใจเพิ่มผลงาน"
            }
        ],
        hint: "self-belief",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 851,
        word: "self-esteem",
        pos: "n.",
        thai: "การเห็นคุณค่าในตนเอง",
        definition: "respect for oneself",
        examples: [
            {
                en: "Build healthy self-esteem.",
                th: "สร้างการเห็นคุณค่าในตนเองที่ดี"
            }
        ],
        hint: "self-respect",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 852,
        word: "empathy",
        pos: "n.",
        thai: "ความเห็นอกเห็นใจ",
        definition: "understanding others' feelings",
        examples: [
            {
                en: "Empathy builds relationships.",
                th: "ความเห็นอกเห็นใจสร้างความสัมพันธ์"
            }
        ],
        hint: "feeling for others",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 853,
        word: "sympathy",
        pos: "n.",
        thai: "ความเห็นใจ",
        definition: "feeling sorry for others",
        examples: [
            {
                en: "Show sympathy to those in need.",
                th: "แสดงความเห็นใจต่อผู้ที่ต้องการ"
            }
        ],
        hint: "feeling sorry",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 854,
        word: "compassion",
        pos: "n.",
        thai: "ความเมตตา",
        definition: "caring concern for others",
        examples: [
            {
                en: "Compassion heals wounds.",
                th: "ความเมตตารักษาบาดแผล"
            }
        ],
        hint: "caring for others",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 855,
        word: "bias",
        pos: "n.",
        thai: "ความลำเอียง",
        definition: "unfair preference",
        examples: [
            {
                en: "Recognize your own bias.",
                th: "รู้จักความลำเอียงของตนเอง"
            }
        ],
        hint: "unfair leaning",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 856,
        word: "manipulation",
        pos: "n.",
        thai: "การจัดการ",
        definition: "controlling others unfairly",
        examples: [
            {
                en: "Avoid manipulation tactics.",
                th: "หลีกเลี่ยงกลยุทธ์การจัดการ"
            }
        ],
        hint: "unfair control",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 857,
        word: "persuasion",
        pos: "n.",
        thai: "การชักจูง",
        definition: "convincing others",
        examples: [
            {
                en: "Persuasion requires skill.",
                th: "การชักจูงต้องใช้ทักษะ"
            }
        ],
        hint: "convincing",
        level: "B2",
        cats: ["social"]
    },
    {
        id: 858,
        word: "paradigm",
        pos: "n.",
        thai: "กระบวนทัศน์",
        definition: "conceptual framework",
        examples: [
            {
                en: "The paradigm shift changed everything.",
                th: "การเปลี่ยนกระบวนทัศน์เปลี่ยนทุกอย่าง"
            }
        ],
        hint: "way of thinking",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 859,
        word: "empirical",
        pos: "adj.",
        thai: "เชิงประจักษ์",
        definition: "based on observation",
        examples: [
            {
                en: "Empirical evidence supports the theory.",
                th: "หลักฐานเชิงประจักษ์สนับสนุนทฤษฎี"
            }
        ],
        hint: "observation-based",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 860,
        word: "correlation",
        pos: "n.",
        thai: "ความสัมพันธ์",
        definition: "mutual relationship",
        examples: [
            {
                en: "There's a correlation between variables.",
                th: "มีความสัมพันธ์ระหว่างตัวแปร"
            }
        ],
        hint: "connection",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 861,
        word: "causation",
        pos: "n.",
        thai: "เหตุและผล",
        definition: "cause and effect relationship",
        examples: [
            {
                en: "Correlation doesn't imply causation.",
                th: "ความสัมพันธ์ไม่ได้หมายถึงเหตุและผล"
            }
        ],
        hint: "cause-effect",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 862,
        word: "synthesis",
        pos: "n.",
        thai: "การสังเคราะห์",
        definition: "combining elements",
        examples: [
            {
                en: "Synthesis of ideas creates innovation.",
                th: "การสังเคราะห์ความคิดสร้างนวัตกรรม"
            }
        ],
        hint: "combining",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 863,
        word: "critique",
        pos: "n.",
        thai: "การวิจารณ์",
        definition: "detailed evaluation",
        examples: [
            {
                en: "The critique was constructive.",
                th: "การวิจารณ์เป็นสร้างสรรค์"
            }
        ],
        hint: "critical review",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 864,
        word: "discourse",
        pos: "n.",
        thai: "วาทกรรม",
        definition: "formal discussion",
        examples: [
            {
                en: "Academic discourse requires precision.",
                th: "วาทกรรมทางวิชาการต้องการความแม่นยำ"
            }
        ],
        hint: "formal talk",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 865,
        word: "rhetoric",
        pos: "n.",
        thai: "วาทศิลป์",
        definition: "art of persuasive speaking",
        examples: [
            {
                en: "Political rhetoric influences voters.",
                th: "วาทศิลป์ทางการเมืองมีอิทธิพลต่อผู้ลงคะแนน"
            }
        ],
        hint: "persuasive speech",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 866,
        word: "dialectic",
        pos: "n.",
        thai: "การโต้แย้ง",
        definition: "logical discussion",
        examples: [
            {
                en: "Dialectic reveals contradictions.",
                th: "การโต้แย้งเผยความขัดแย้ง"
            }
        ],
        hint: "logical debate",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 867,
        word: "epistemology",
        pos: "n.",
        thai: "ญาณวิทยา",
        definition: "study of knowledge",
        examples: [
            {
                en: "Epistemology questions how we know.",
                th: "ญาณวิทยาตั้งคำถามว่าเรารู้ได้อย่างไร"
            }
        ],
        hint: "knowledge study",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 868,
        word: "ontology",
        pos: "n.",
        thai: "อภิปรัชญา",
        definition: "study of existence",
        examples: [
            {
                en: "Ontology explores what exists.",
                th: "อภิปรัชญาสำรวจสิ่งที่มีอยู่"
            }
        ],
        hint: "existence study",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 869,
        word: "phenomenology",
        pos: "n.",
        thai: "ปรากฏการณ์วิทยา",
        definition: "study of experience",
        examples: [
            {
                en: "Phenomenology examines consciousness.",
                th: "ปรากฏการณ์วิทยาตรวจสอบจิตสำนึก"
            }
        ],
        hint: "experience study",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 870,
        word: "hermeneutics",
        pos: "n.",
        thai: "ศาสตร์แห่งการตีความ",
        definition: "theory of interpretation",
        examples: [
            {
                en: "Hermeneutics guides text interpretation.",
                th: "ศาสตร์แห่งการตีความแนะนำการตีความข้อความ"
            }
        ],
        hint: "interpretation theory",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 871,
        word: "heuristic",
        pos: "adj.",
        thai: "แนวทางการค้นพบ",
        definition: "enabling discovery",
        examples: [
            {
                en: "Heuristic methods solve problems.",
                th: "แนวทางการค้นพบแก้ปัญหา"
            }
        ],
        hint: "discovery method",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 872,
        word: "optimization",
        pos: "n.",
        thai: "การเพิ่มประสิทธิภาพ",
        definition: "making most effective",
        examples: [
            {
                en: "Optimization reduces costs.",
                th: "การเพิ่มประสิทธิภาพลดต้นทุน"
            }
        ],
        hint: "making best",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 873,
        word: "implementation",
        pos: "n.",
        thai: "การนำไปปฏิบัติ",
        definition: "putting into effect",
        examples: [
            {
                en: "Implementation requires planning.",
                th: "การนำไปปฏิบัติต้องการการวางแผน"
            }
        ],
        hint: "putting into action",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 874,
        word: "infrastructure",
        pos: "n.",
        thai: "โครงสร้างพื้นฐาน",
        definition: "basic facilities",
        examples: [
            {
                en: "Infrastructure supports development.",
                th: "โครงสร้างพื้นฐานสนับสนุนการพัฒนา"
            }
        ],
        hint: "basic structure",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 875,
        word: "framework",
        pos: "n.",
        thai: "กรอบงาน",
        definition: "basic structure",
        examples: [
            {
                en: "The framework guides decisions.",
                th: "กรอบงานแนะนำการตัดสินใจ"
            }
        ],
        hint: "basic outline",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 876,
        word: "protocol",
        pos: "n.",
        thai: "ระเบียบปฏิบัติ",
        definition: "formal procedure",
        examples: [
            {
                en: "Follow safety protocols.",
                th: "ปฏิบัติตามระเบียบความปลอดภัย"
            }
        ],
        hint: "formal rules",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 877,
        word: "criterion",
        pos: "n.",
        thai: "เกณฑ์",
        definition: "standard for judgment",
        examples: [
            {
                en: "Set clear criteria for success.",
                th: "กำหนดเกณฑ์ความสำเร็จที่ชัดเจน"
            }
        ],
        hint: "judgment standard",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 878,
        word: "benchmark",
        pos: "n.",
        thai: "มาตรฐานอ้างอิง",
        definition: "standard of comparison",
        examples: [
            {
                en: "Use industry benchmarks.",
                th: "ใช้มาตรฐานอ้างอิงของอุตสาหกรรม"
            }
        ],
        hint: "comparison standard",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 879,
        word: "metrics",
        pos: "n.",
        thai: "ตัวชี้วัด",
        definition: "measurement standards",
        examples: [
            {
                en: "Track performance metrics.",
                th: "ติดตามตัวชี้วัดผลงาน"
            }
        ],
        hint: "measurement tools",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 880,
        word: "assessment",
        pos: "n.",
        thai: "การประเมิน",
        definition: "evaluation process",
        examples: [
            {
                en: "Conduct risk assessment.",
                th: "ดำเนินการประเมินความเสี่ยง"
            }
        ],
        hint: "evaluation",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 881,
        word: "validation",
        pos: "n.",
        thai: "การตรวจสอบความถูกต้อง",
        definition: "confirmation of accuracy",
        examples: [
            {
                en: "Data validation prevents errors.",
                th: "การตรวจสอบข้อมูลป้องกันข้อผิดพลาด"
            }
        ],
        hint: "accuracy check",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 882,
        word: "verification",
        pos: "n.",
        thai: "การยืนยัน",
        definition: "confirmation of truth",
        examples: [
            {
                en: "Identity verification is required.",
                th: "การยืนยันตัวตนจำเป็น"
            }
        ],
        hint: "truth confirmation",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 883,
        word: "authentication",
        pos: "n.",
        thai: "การพิสูจน์ตัวตน",
        definition: "proving identity",
        examples: [
            {
                en: "Two-factor authentication improves security.",
                th: "การพิสูจน์ตัวตนสองขั้นตอนเพิ่มความปลอดภัย"
            }
        ],
        hint: "identity proof",
        level: "C1",
        cats: ["technology"]
    },
    {
        id: 884,
        word: "authorization",
        pos: "n.",
        thai: "การให้อำนาจ",
        definition: "granting permission",
        examples: [
            {
                en: "Authorization is required for access.",
                th: "การให้อำนาจจำเป็นสำหรับการเข้าถึง"
            }
        ],
        hint: "giving permission",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 885,
        word: "jurisdiction",
        pos: "n.",
        thai: "เขตอำนาจ",
        definition: "area of authority",
        examples: [
            {
                en: "This falls under federal jurisdiction.",
                th: "สิ่งนี้อยู่ในเขตอำนาจของรัฐบาลกลาง"
            }
        ],
        hint: "authority area",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 886,
        word: "compliance",
        pos: "n.",
        thai: "การปฏิบัติตาม",
        definition: "conforming to rules",
        examples: [
            {
                en: "Ensure regulatory compliance.",
                th: "ให้แน่ใจว่าปฏิบัติตามกฎระเบียบ"
            }
        ],
        hint: "following rules",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 887,
        word: "governance",
        pos: "n.",
        thai: "การกำกับดูแล",
        definition: "system of control",
        examples: [
            {
                en: "Corporate governance ensures accountability.",
                th: "การกำกับดูแลองค์กรให้ความรับผิดชอบ"
            }
        ],
        hint: "control system",
        level: "C1",
        cats: ["work"]
    },
    {
        id: 888,
        word: "ethics",
        pos: "n.",
        thai: "จริยธรรม",
        definition: "moral principles",
        examples: [
            {
                en: "Business ethics guide conduct.",
                th: "จริยธรรมธุรกิจแนะนำการประพฤติ"
            }
        ],
        hint: "moral rules",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 889,
        word: "morality",
        pos: "n.",
        thai: "ศีลธรรม",
        definition: "principles of right and wrong",
        examples: [
            {
                en: "Morality shapes society.",
                th: "ศีลธรรมกำหนดสังคม"
            }
        ],
        hint: "right-wrong principles",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 890,
        word: "hegemony",
        pos: "n.",
        thai: "การครอบงำ",
        definition: "dominance of one group",
        examples: [
            {
                en: "Cultural hegemony shapes beliefs.",
                th: "การครอบงำทางวัฒนธรรมกำหนดความเชื่อ"
            }
        ],
        hint: "group dominance",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 891,
        word: "zeitgeist",
        pos: "n.",
        thai: "จิตวิญญาณของยุค",
        definition: "spirit of the times",
        examples: [
            {
                en: "The zeitgeist favors innovation.",
                th: "จิตวิญญาณของยุคสนับสนุนนวัตกรรม"
            }
        ],
        hint: "era's spirit",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 892,
        word: "ethos",
        pos: "n.",
        thai: "จริยธรรมของกลุ่ม",
        definition: "characteristic spirit",
        examples: [
            {
                en: "The company ethos values teamwork.",
                th: "จริยธรรมของบริษัทให้ค่ากับการทำงานเป็นทีม"
            }
        ],
        hint: "group spirit",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 893,
        word: "pathos",
        pos: "n.",
        thai: "การเร้าอารมณ์",
        definition: "emotional appeal",
        examples: [
            {
                en: "The speech used pathos effectively.",
                th: "การกล่าวสุนทรพจน์ใช้การเร้าอารมณ์อย่างมีประสิทธิภาพ"
            }
        ],
        hint: "emotional persuasion",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 894,
        word: "logos",
        pos: "n.",
        thai: "เหตุผล",
        definition: "logical appeal",
        examples: [
            {
                en: "The argument relied on logos.",
                th: "การโต้แย้งอาศัยเหตุผล"
            }
        ],
        hint: "logical persuasion",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 895,
        word: "dichotomy",
        pos: "n.",
        thai: "การแบ่งแยกเป็นสองส่วน",
        definition: "division into two parts",
        examples: [
            {
                en: "The dichotomy between rich and poor.",
                th: "การแบ่งแยกระหว่างคนรวยและคนจน"
            }
        ],
        hint: "two-part division",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 896,
        word: "paradox",
        pos: "n.",
        thai: "ความขัดแย้งในตัวเอง",
        definition: "seemingly contradictory statement",
        examples: [
            {
                en: "The paradox of choice overwhelms consumers.",
                th: "ความขัดแย้งของการเลือกทำให้ผู้บริโภคงุนงง"
            }
        ],
        hint: "contradiction",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 897,
        word: "irony",
        pos: "n.",
        thai: "ความขัดแย้งที่น่าขัน",
        definition: "contrast between expectation and reality",
        examples: [
            {
                en: "The irony of the situation was obvious.",
                th: "ความขัดแย้งที่น่าขันของสถานการณ์เห็นได้ชัด"
            }
        ],
        hint: "unexpected contrast",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 898,
        word: "satire",
        pos: "n.",
        thai: "การเสียดสี",
        definition: "criticism through humor",
        examples: [
            {
                en: "Political satire exposes hypocrisy.",
                th: "การเสียดสีทางการเมืองเปิดเผยความหน้าซื่อใจคด"
            }
        ],
        hint: "humorous criticism",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 899,
        word: "allegory",
        pos: "n.",
        thai: "นิทาน",
        definition: "symbolic narrative",
        examples: [
            {
                en: "The novel is an allegory for society.",
                th: "นวนิยายเป็นนิทานเปรียบเทียบสังคม"
            }
        ],
        hint: "symbolic story",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 900,
        word: "metaphor",
        pos: "n.",
        thai: "อุปมาอุปไมย",
        definition: "implicit comparison",
        examples: [
            {
                en: "Life is a journey is a metaphor.",
                th: "ชีวิตคือการเดินทางเป็นอุปมาอุปไมย"
            }
        ],
        hint: "indirect comparison",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 901,
        word: "analogy",
        pos: "n.",
        thai: "การเปรียบเทียب",
        definition: "comparison between things",
        examples: [
            {
                en: "The analogy clarified the concept.",
                th: "การเปรียบเทียบทำให้แนวคิดชัดเจน"
            }
        ],
        hint: "comparison",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 902,
        word: "symbolism",
        pos: "n.",
        thai: "สัญลักษณ์นิยม",
        definition: "use of symbols",
        examples: [
            {
                en: "The flag's symbolism unites people.",
                th: "สัญลักษณ์นิยมของธงรวมคนเข้าด้วยกัน"
            }
        ],
        hint: "symbolic meaning",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 903,
        word: "archetype",
        pos: "n.",
        thai: "แบบแผนดั้งเดิม",
        definition: "original model",
        examples: [
            {
                en: "The hero archetype appears in many stories.",
                th: "แบบแผนดั้งเดิมของฮีโร่ปรากฏในเรื่องราวมากมาย"
            }
        ],
        hint: "original pattern",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 904,
        word: "prototype",
        pos: "n.",
        thai: "ต้นแบบ",
        definition: "original example",
        examples: [
            {
                en: "The prototype influenced later designs.",
                th: "ต้นแบบมีอิทธิพลต่อการออกแบบในภายหลัง"
            }
        ],
        hint: "first example",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 905,
        word: "manifestation",
        pos: "n.",
        thai: "การแสดงออก",
        definition: "visible display",
        examples: [
            {
                en: "Art is a manifestation of culture.",
                th: "ศิลปะเป็นการแสดงออกของวัฒนธรรม"
            }
        ],
        hint: "visible showing",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 906,
        word: "embodiment",
        pos: "n.",
        thai: "การรวบรวม",
        definition: "physical representation",
        examples: [
            {
                en: "She is the embodiment of grace.",
                th: "เธอเป็นการรวบรวมของความสง่างาม"
            }
        ],
        hint: "physical form",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 907,
        word: "incarnation",
        pos: "n.",
        thai: "การแปลงร่าง",
        definition: "physical form of idea",
        examples: [
            {
                en: "The building is an incarnation of modern design.",
                th: "อาคารเป็นการแปลงร่างของการออกแบบสมัยใหม่"
            }
        ],
        hint: "idea in form",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 908,
        word: "personification",
        pos: "n.",
        thai: "การให้ลักษณะมนุษย์",
        definition: "giving human qualities",
        examples: [
            {
                en: "The personification of justice is blindfolded.",
                th: "การให้ลักษณะมนุษย์ของความยุติธรรมคือการปิดตา"
            }
        ],
        hint: "humanizing",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 909,
        word: "anthropomorphism",
        pos: "n.",
        thai: "การให้รูปร่างมนุษย์",
        definition: "attributing human form",
        examples: [
            {
                en: "Anthropomorphism appears in mythology.",
                th: "การให้รูปร่างมนุษย์ปรากฏในตำนาน"
            }
        ],
        hint: "human form giving",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 910,
        word: "deification",
        pos: "n.",
        thai: "การยกย่องเป็นเทพ",
        definition: "treating as divine",
        examples: [
            {
                en: "The deification of leaders is dangerous.",
                th: "การยกย่องผู้นำเป็นเทพอันตราย"
            }
        ],
        hint: "making godlike",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 911,
        word: "idolatry",
        pos: "n.",
        thai: "การบูชารูปเคารพ",
        definition: "excessive devotion",
        examples: [
            {
                en: "Celebrity idolatry affects youth.",
                th: "การบูชารูปเคารพดาราส่งผลต่อเยาวชน"
            }
        ],
        hint: "extreme worship",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 912,
        word: "iconoclasm",
        pos: "n.",
        thai: "การทำลายรูปเคารพ",
        definition: "attacking established beliefs",
        examples: [
            {
                en: "Iconoclasm challenges tradition.",
                th: "การทำลายรูปเคารพท้าทายประเพณี"
            }
        ],
        hint: "belief attacking",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 913,
        word: "orthodoxy",
        pos: "n.",
        thai: "ความเชื่อดั้งเดิม",
        definition: "conventional belief",
        examples: [
            {
                en: "Religious orthodoxy resists change.",
                th: "ความเชื่อดั้งเดิมทางศาสนาต่อต้านการเปลี่ยนแปลง"
            }
        ],
        hint: "traditional belief",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 914,
        word: "heterodoxy",
        pos: "n.",
        thai: "ความเชื่อที่แตกต่าง",
        definition: "unconventional belief",
        examples: [
            {
                en: "Heterodoxy challenges established norms.",
                th: "ความเชื่อที่แตกต่างท้าทายบรรทัดฐานที่ตั้งไว้"
            }
        ],
        hint: "different belief",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 915,
        word: "dogma",
        pos: "n.",
        thai: "หลักคำสอน",
        definition: "established belief",
        examples: [
            {
                en: "Question religious dogma carefully.",
                th: "ตั้งคำถามหลักคำสอนทางศาสนาอย่างระมัดระวัง"
            }
        ],
        hint: "fixed teaching",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 916,
        word: "doctrine",
        pos: "n.",
        thai: "หลักคำสอน",
        definition: "set of beliefs",
        examples: [
            {
                en: "Political doctrine shapes policy.",
                th: "หลักคำสอนทางการเมืองกำหนดนโยบาย"
            }
        ],
        hint: "belief system",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 917,
        word: "creed",
        pos: "n.",
        thai: "ความเชื่อ",
        definition: "statement of beliefs",
        examples: [
            {
                en: "The organization's creed guides actions.",
                th: "ความเชื่อขององค์กรแนะนำการกระทำ"
            }
        ],
        hint: "belief statement",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 918,
        word: "tenet",
        pos: "n.",
        thai: "หลักการ",
        definition: "fundamental principle",
        examples: [
            {
                en: "Free speech is a democratic tenet.",
                th: "การพูดเสรีเป็นหลักการประชาธิปไตย"
            }
        ],
        hint: "basic principle",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 919,
        word: "axiom",
        pos: "n.",
        thai: "สัจพจน์",
        definition: "self-evident truth",
        examples: [
            {
                en: "Mathematical axioms need no proof.",
                th: "สัจพจน์ทางคณิตศาสตร์ไม่ต้องการการพิสูจน์"
            }
        ],
        hint: "obvious truth",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 920,
        word: "postulate",
        pos: "n.",
        thai: "ข้อตั้ง",
        definition: "assumed principle",
        examples: [
            {
                en: "The theory rests on several postulates.",
                th: "ทฤษฎีอาศัยข้อตั้งหลายประการ"
            }
        ],
        hint: "assumed truth",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 921,
        word: "premise",
        pos: "n.",
        thai: "หลักฐานเบื้องต้น",
        definition: "basis for reasoning",
        examples: [
            {
                en: "The argument's premise is flawed.",
                th: "หลักฐานเบื้องต้นของการโต้แย้งมีข้อบกพร่อง"
            }
        ],
        hint: "reasoning base",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 922,
        word: "proposition",
        pos: "n.",
        thai: "ข้อเสนอ",
        definition: "statement for consideration",
        examples: [
            {
                en: "The proposition requires careful thought.",
                th: "ข้อเสนอต้องการการคิดอย่างรอบคอบ"
            }
        ],
        hint: "suggested idea",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 923,
        word: "conjecture",
        pos: "n.",
        thai: "การคาดเดา",
        definition: "opinion based on incomplete information",
        examples: [
            {
                en: "The theory remains conjecture.",
                th: "ทฤษฎียังคงเป็นการคาดเดา"
            }
        ],
        hint: "educated guess",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 924,
        word: "quantum",
        pos: "adj.",
        thai: "ควอนตัม",
        definition: "relating to quantum mechanics",
        examples: [
            {
                en: "Quantum physics defies intuition.",
                th: "ฟิสิกส์ควอนตัมท้าทายสัญชาตญาณ"
            }
        ],
        hint: "particle physics",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 925,
        word: "relativity",
        pos: "n.",
        thai: "ทฤษฎีสัมพัทธภาพ",
        definition: "Einstein's theory",
        examples: [
            {
                en: "Relativity changed our understanding of space.",
                th: "ทฤษฎีสัมพัทธภาพเปลี่ยนความเข้าใจของเราเกี่ยวกับอวกาศ"
            }
        ],
        hint: "space-time theory",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 926,
        word: "entropy",
        pos: "n.",
        thai: "เอนโทรปี",
        definition: "measure of disorder",
        examples: [
            {
                en: "Entropy always increases in isolated systems.",
                th: "เอนโทรปีเพิ่มขึ้นเสมอในระบบที่แยกตัว"
            }
        ],
        hint: "disorder measure",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 927,
        word: "catalyst",
        pos: "n.",
        thai: "ตัวเร่งปฏิกิริยา",
        definition: "substance that speeds reaction",
        examples: [
            {
                en: "The catalyst accelerated the reaction.",
                th: "ตัวเร่งปฏิกิริยาเร่งปฏิกิริยา"
            }
        ],
        hint: "reaction speeder",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 928,
        word: "metabolism",
        pos: "n.",
        thai: "การเผาผลาญ",
        definition: "chemical processes in organisms",
        examples: [
            {
                en: "Exercise increases metabolism.",
                th: "การออกกำลังกายเพิ่มการเผาผลาญ"
            }
        ],
        hint: "body chemistry",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 929,
        word: "photosynthesis",
        pos: "n.",
        thai: "การสังเคราะห์แสง",
        definition: "plant energy production",
        examples: [
            {
                en: "Photosynthesis converts sunlight to energy.",
                th: "การสังเคราะห์แสงเปลี่ยนแสงแดดเป็นพลังงาน"
            }
        ],
        hint: "plant energy making",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 930,
        word: "mitosis",
        pos: "n.",
        thai: "การแบ่งเซลล์",
        definition: "cell division process",
        examples: [
            {
                en: "Mitosis creates identical cells.",
                th: "การแบ่งเซลล์สร้างเซลล์ที่เหมือนกัน"
            }
        ],
        hint: "cell splitting",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 931,
        word: "meiosis",
        pos: "n.",
        thai: "การแบ่งเซลล์สืบพันธุ์",
        definition: "reproductive cell division",
        examples: [
            {
                en: "Meiosis produces gametes.",
                th: "การแบ่งเซลล์สืบพันธุ์ผลิตเซลล์สืบพันธุ์"
            }
        ],
        hint: "sex cell division",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 932,
        word: "chromosome",
        pos: "n.",
        thai: "โครโมโซม",
        definition: "DNA-containing structure",
        examples: [
            {
                en: "Humans have 46 chromosomes.",
                th: "มนุษย์มี 46 โครโมโซม"
            }
        ],
        hint: "DNA carrier",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 933,
        word: "genome",
        pos: "n.",
        thai: "จีโนม",
        definition: "complete genetic material",
        examples: [
            {
                en: "The human genome was mapped.",
                th: "จีโนมของมนุษย์ถูกทำแผนที่"
            }
        ],
        hint: "all genes",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 934,
        word: "mutation",
        pos: "n.",
        thai: "การกลายพันธุ์",
        definition: "genetic change",
        examples: [
            {
                en: "Mutations drive evolution.",
                th: "การกลายพันธุ์ขับเคลื่อนวิวัฒนาการ"
            }
        ],
        hint: "gene change",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 935,
        word: "symbiosis",
        pos: "n.",
        thai: "การอยู่ร่วมกัน",
        definition: "mutually beneficial relationship",
        examples: [
            {
                en: "Symbiosis benefits both organisms.",
                th: "การอยู่ร่วมกันเป็นประโยชน์ต่อทั้งสองสิ่งมีชีวิต"
            }
        ],
        hint: "mutual benefit",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 936,
        word: "molecule",
        pos: "n.",
        thai: "โมเลกุล",
        definition: "group of atoms",
        examples: [
            {
                en: "Water molecules contain hydrogen and oxygen.",
                th: "โมเลกุลน้ำประกอบด้วยไฮโดรเจนและออกซิเจน"
            }
        ],
        hint: "atom group",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 937,
        word: "atom",
        pos: "n.",
        thai: "อะตอม",
        definition: "basic unit of matter",
        examples: [
            {
                en: "Atoms are incredibly small.",
                th: "อะตอมเล็กอย่างไม่น่าเชื่อ"
            }
        ],
        hint: "matter unit",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 938,
        word: "electron",
        pos: "n.",
        thai: "อิเล็กตรอน",
        definition: "negatively charged particle",
        examples: [
            {
                en: "Electrons orbit the nucleus.",
                th: "อิเล็กตรอนโคจรรอบนิวเคลียส"
            }
        ],
        hint: "negative particle",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 939,
        word: "proton",
        pos: "n.",
        thai: "โปรตอน",
        definition: "positively charged particle",
        examples: [
            {
                en: "Protons are in the nucleus.",
                th: "โปรตอนอยู่ในนิวเคลียส"
            }
        ],
        hint: "positive particle",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 940,
        word: "neutron",
        pos: "n.",
        thai: "นิวตรอน",
        definition: "neutral particle",
        examples: [
            {
                en: "Neutrons have no charge.",
                th: "นิวตรอนไม่มีประจุ"
            }
        ],
        hint: "neutral particle",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 941,
        word: "isotope",
        pos: "n.",
        thai: "ไอโซโทป",
        definition: "atom variant",
        examples: [
            {
                en: "Carbon has several isotopes.",
                th: "คาร์บอนมีไอโซโทปหลายตัว"
            }
        ],
        hint: "atom version",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 942,
        word: "radiation",
        pos: "n.",
        thai: "รังสี",
        definition: "energy emission",
        examples: [
            {
                en: "Radiation can be dangerous.",
                th: "รังสีอาจเป็นอันตราย"
            }
        ],
        hint: "energy waves",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 943,
        word: "electromagnetic",
        pos: "adj.",
        thai: "แม่เหล็กไฟฟ้า",
        definition: "relating to electric and magnetic fields",
        examples: [
            {
                en: "Light is electromagnetic radiation.",
                th: "แสงเป็นรังสีแม่เหล็กไฟฟ้า"
            }
        ],
        hint: "electric-magnetic",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 944,
        word: "frequency",
        pos: "n.",
        thai: "ความถี่",
        definition: "rate of occurrence",
        examples: [
            {
                en: "Radio waves have different frequencies.",
                th: "คลื่นวิทยุมีความถี่ต่างกัน"
            }
        ],
        hint: "occurrence rate",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 945,
        word: "wavelength",
        pos: "n.",
        thai: "ความยาวคลื่น",
        definition: "distance between wave peaks",
        examples: [
            {
                en: "Blue light has shorter wavelength.",
                th: "แสงสีน้ำเงินมีความยาวคลื่นสั้นกว่า"
            }
        ],
        hint: "wave distance",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 946,
        word: "amplitude",
        pos: "n.",
        thai: "แอมพลิจูด",
        definition: "wave height",
        examples: [
            {
                en: "Amplitude determines sound volume.",
                th: "แอมพลิจูดกำหนดความดังของเสียง"
            }
        ],
        hint: "wave strength",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 947,
        word: "resonance",
        pos: "n.",
        thai: "การสั่นพ้อง",
        definition: "vibration amplification",
        examples: [
            {
                en: "Resonance can break bridges.",
                th: "การสั่นพ้องสามารถทำลายสะพาน"
            }
        ],
        hint: "vibration boost",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 948,
        word: "interference",
        pos: "n.",
        thai: "การรบกวน",
        definition: "wave interaction",
        examples: [
            {
                en: "Wave interference creates patterns.",
                th: "การรบกวนของคลื่นสร้างรูปแบบ"
            }
        ],
        hint: "wave mixing",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 949,
        word: "diffraction",
        pos: "n.",
        thai: "การเลี้ยวเบน",
        definition: "wave bending",
        examples: [
            {
                en: "Light shows diffraction through slits.",
                th: "แสงแสดงการเลี้ยวเบนผ่านช่องแคบ"
            }
        ],
        hint: "wave bending",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 950,
        word: "refraction",
        pos: "n.",
        thai: "การหักเห",
        definition: "wave direction change",
        examples: [
            {
                en: "Refraction makes objects look bent in water.",
                th: "การหักเหทำให้วัตถุดูงอในน้ำ"
            }
        ],
        hint: "wave bending",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 951,
        word: "existentialism",
        pos: "n.",
        thai: "ปรัชญาอัตถิภาวนิยม",
        definition: "philosophy of existence",
        examples: [
            {
                en: "Existentialism emphasizes individual choice.",
                th: "ปรัชญาอัตถิภาวนิยมเน้นการเลือกของบุคคล"
            }
        ],
        hint: "existence philosophy",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 952,
        word: "nihilism",
        pos: "n.",
        thai: "ปรัชญาความว่างเปล่า",
        definition: "belief in meaninglessness",
        examples: [
            {
                en: "Nihilism rejects all values.",
                th: "ปรัชญาความว่างเปล่าปฏิเสธค่านิยมทั้งหมด"
            }
        ],
        hint: "meaningless belief",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 953,
        word: "determinism",
        pos: "n.",
        thai: "ลัทธิกำหนดนิยม",
        definition: "belief in predetermined outcomes",
        examples: [
            {
                en: "Determinism denies free will.",
                th: "ลัทธิกำหนดนิยมปฏิเสธเจตจำนงเสรี"
            }
        ],
        hint: "predetermined belief",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 954,
        word: "fatalism",
        pos: "n.",
        thai: "ลัทธิโชคชะตา",
        definition: "belief in inevitable fate",
        examples: [
            {
                en: "Fatalism accepts unchangeable destiny.",
                th: "ลัทธิโชคชะตายอมรับโชคชะตาที่เปลี่ยนไม่ได้"
            }
        ],
        hint: "fate belief",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 955,
        word: "stoicism",
        pos: "n.",
        thai: "ปรัชญาสโตอิก",
        definition: "philosophy of emotional control",
        examples: [
            {
                en: "Stoicism teaches acceptance of fate.",
                th: "ปรัชญาสโตอิกสอนการยอมรับโชคชะตา"
            }
        ],
        hint: "emotion control philosophy",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 956,
        word: "hedonism",
        pos: "n.",
        thai: "ลัทธิความสุขนิยม",
        definition: "pursuit of pleasure",
        examples: [
            {
                en: "Hedonism prioritizes immediate gratification.",
                th: "ลัทธิความสุขนิยมให้ความสำคัญกับความพึงพอใจทันที"
            }
        ],
        hint: "pleasure seeking",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 957,
        word: "asceticism",
        pos: "n.",
        thai: "ลัทธิพรหมจรรย์",
        definition: "practice of self-denial",
        examples: [
            {
                en: "Asceticism rejects material pleasures.",
                th: "ลัทธิพรหมจรรย์ปฏิเสธความสุขทางวัตถุ"
            }
        ],
        hint: "self-denial practice",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 958,
        word: "materialism",
        pos: "n.",
        thai: "ลัทธิวัตถุนิยม",
        definition: "focus on material things",
        examples: [
            {
                en: "Materialism values possessions over relationships.",
                th: "ลัทธิวัตถุนิยมให้ค่ากับทรัพย์สินมากกว่าความสัมพันธ์"
            }
        ],
        hint: "material focus",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 959,
        word: "idealism",
        pos: "n.",
        thai: "ลัทธิอุดมคตินิยม",
        definition: "pursuit of perfection",
        examples: [
            {
                en: "Idealism strives for perfect society.",
                th: "ลัทธิอุดมคตินิยมมุ่งสู่สังคมที่สมบูรณ์แบบ"
            }
        ],
        hint: "perfection seeking",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 960,
        word: "pragmatism",
        pos: "n.",
        thai: "ลัทธิปฏิบัตินิยม",
        definition: "practical approach",
        examples: [
            {
                en: "Pragmatism focuses on what works.",
                th: "ลัทธิปฏิบัตินิยมมุ่งเน้นสิ่งที่ได้ผล"
            }
        ],
        hint: "practical thinking",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 961,
        word: "empiricism",
        pos: "n.",
        thai: "ลัทธิประจักษ์นิยม",
        definition: "knowledge from experience",
        examples: [
            {
                en: "Empiricism relies on observation.",
                th: "ลัทธิประจักษ์นิยมอาศัยการสังเกต"
            }
        ],
        hint: "experience-based knowledge",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 962,
        word: "rationalism",
        pos: "n.",
        thai: "ลัทธิเหตุผลนิยม",
        definition: "knowledge from reason",
        examples: [
            {
                en: "Rationalism trusts logical thinking.",
                th: "ลัทธิเหตุผลนิยมเชื่อมั่นในการคิดเชิงตรรกะ"
            }
        ],
        hint: "reason-based knowledge",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 963,
        word: "skepticism",
        pos: "n.",
        thai: "ลัทธิสงสัยนิยม",
        definition: "questioning attitude",
        examples: [
            {
                en: "Skepticism questions all claims.",
                th: "ลัทธิสงสัยนิยมตั้งคำถามกับข้อเรียกร้องทั้งหมด"
            }
        ],
        hint: "doubting approach",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 964,
        word: "relativism",
        pos: "n.",
        thai: "ลัทธิสัมพัทธนิยม",
        definition: "truth depends on context",
        examples: [
            {
                en: "Relativism denies absolute truth.",
                th: "ลัทธิสัมพัทธนิยมปฏิเสธความจริงสัมบูรณ์"
            }
        ],
        hint: "context-dependent truth",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 965,
        word: "absolutism",
        pos: "n.",
        thai: "ลัทธิสัมบูรณ์นิยม",
        definition: "belief in absolute truth",
        examples: [
            {
                en: "Absolutism claims universal truths.",
                th: "ลัทธิสัมบูรณ์นิยมอ้างความจริงสากล"
            }
        ],
        hint: "absolute truth belief",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 966,
        word: "dualism",
        pos: "n.",
        thai: "ลัทธิทวิภาวะ",
        definition: "two opposing principles",
        examples: [
            {
                en: "Mind-body dualism separates mental and physical.",
                th: "ลัทธิทวิภาวะจิต-กายแยกจิตใจและร่างกาย"
            }
        ],
        hint: "two-part reality",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 967,
        word: "monism",
        pos: "n.",
        thai: "ลัทธิเอกภาวะ",
        definition: "single underlying reality",
        examples: [
            {
                en: "Monism sees everything as one substance.",
                th: "ลัทธิเอกภาวะมองทุกสิ่งเป็นสสารเดียว"
            }
        ],
        hint: "one reality",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 968,
        word: "pluralism",
        pos: "n.",
        thai: "ลัทธิพหุนิยม",
        definition: "multiple valid perspectives",
        examples: [
            {
                en: "Pluralism accepts diverse viewpoints.",
                th: "ลัทธิพหุนิยมยอมรับมุมมองที่หลากหลาย"
            }
        ],
        hint: "many valid views",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 969,
        word: "solipsism",
        pos: "n.",
        thai: "ลัทธิตัวตนเดียว",
        definition: "only self exists",
        examples: [
            {
                en: "Solipsism doubts others' existence.",
                th: "ลัทธิตัวตนเดียวสงสัยการมีอยู่ของผู้อื่น"
            }
        ],
        hint: "self-only existence",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 970,
        word: "altruism",
        pos: "n.",
        thai: "ลัทธิเห็นแก่ผู้อื่น",
        definition: "concern for others",
        examples: [
            {
                en: "Altruism motivates charitable giving.",
                th: "ลัทธิเห็นแก่ผู้อื่นจูงใจการให้ทาน"
            }
        ],
        hint: "caring for others",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 971,
        word: "egoism",
        pos: "n.",
        thai: "ลัทธิเห็นแก่ตัว",
        definition: "self-interest priority",
        examples: [
            {
                en: "Egoism prioritizes personal benefit.",
                th: "ลัทธิเห็นแก่ตัวให้ความสำคัญกับผลประโยชน์ส่วนตัว"
            }
        ],
        hint: "self-first thinking",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 972,
        word: "utilitarianism",
        pos: "n.",
        thai: "ลัทธิประโยชน์นิยม",
        definition: "greatest good for greatest number",
        examples: [
            {
                en: "Utilitarianism seeks maximum happiness.",
                th: "ลัทธิประโยชน์นิยมแสวงหาความสุขสูงสุด"
            }
        ],
        hint: "maximum benefit",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 973,
        word: "deontology",
        pos: "n.",
        thai: "จริยธรรมหน้าที่",
        definition: "duty-based ethics",
        examples: [
            {
                en: "Deontology emphasizes moral duties.",
                th: "จริยธรรมหน้าที่เน้นหน้าที่ทางศีลธรรม"
            }
        ],
        hint: "duty ethics",
        level: "C1",
        cats: ["school"]
    },
    {
        id: 974,
        word: "virtue",
        pos: "n.",
        thai: "คุณธรรม",
        definition: "moral excellence",
        examples: [
            {
                en: "Virtue ethics focuses on character.",
                th: "จริยธรรมคุณธรรมมุ่งเน้นลักษณะนิสัย"
            }
        ],
        hint: "moral goodness",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 975,
        word: "vice",
        pos: "n.",
        thai: "อบายมุข",
        definition: "moral failing",
        examples: [
            {
                en: "Vice corrupts character.",
                th: "อบายมุขทำลายลักษณะนิสัย"
            }
        ],
        hint: "moral weakness",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 976,
        word: "temperance",
        pos: "n.",
        thai: "ความพอประมาณ",
        definition: "moderation in behavior",
        examples: [
            {
                en: "Temperance prevents excess.",
                th: "ความพอประมาณป้องกันความเกินพอดี"
            }
        ],
        hint: "self-control",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 977,
        word: "prudence",
        pos: "n.",
        thai: "ความรอบคอบ",
        definition: "careful judgment",
        examples: [
            {
                en: "Prudence guides wise decisions.",
                th: "ความรอบคอบแนะนำการตัดสินใจที่ฉลาด"
            }
        ],
        hint: "careful thinking",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 978,
        word: "equity",
        pos: "n.",
        thai: "ความเป็นธรรม",
        definition: "fairness in treatment",
        examples: [
            {
                en: "Equity ensures equal opportunities.",
                th: "ความเป็นธรรมให้โอกาสที่เท่าเทียม"
            }
        ],
        hint: "fair treatment",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 979,
        word: "liberty",
        pos: "n.",
        thai: "เสรีภาพ",
        definition: "freedom from oppression",
        examples: [
            {
                en: "Liberty requires responsibility.",
                th: "เสรีภาพต้องการความรับผิดชอบ"
            }
        ],
        hint: "freedom",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 980,
        word: "autonomy",
        pos: "n.",
        thai: "ความเป็นอิสระ",
        definition: "self-governance",
        examples: [
            {
                en: "Personal autonomy is fundamental.",
                th: "ความเป็นอิสระส่วนบุคคลเป็นพื้นฐาน"
            }
        ],
        hint: "self-rule",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 981,
        word: "legitimacy",
        pos: "n.",
        thai: "ความชอบธรรม",
        definition: "rightful authority",
        examples: [
            {
                en: "Government legitimacy comes from consent.",
                th: "ความชอบธรรมของรัฐบาลมาจากความยินยอม"
            }
        ],
        hint: "rightful power",
        level: "C1",
        cats: ["social"]
    },
    {
        id: 982,
        word: "epistemological",
        pos: "adj.",
        thai: "เกี่ยวกับญาณวิทยา",
        definition: "relating to theory of knowledge",
        examples: [
            {
                en: "The epistemological framework guides research.",
                th: "กรอบญาณวิทยาแนะนำการวิจัย"
            }
        ],
        hint: "knowledge theory",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 983,
        word: "ontological",
        pos: "adj.",
        thai: "เกี่ยวกับอภิปรัชญา",
        definition: "relating to nature of being",
        examples: [
            {
                en: "Ontological questions explore existence.",
                th: "คำถามอภิปรัชญาสำรวจการมีอยู่"
            }
        ],
        hint: "existence nature",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 984,
        word: "phenomenological",
        pos: "adj.",
        thai: "เกี่ยวกับปรากฏการณ์วิทยา",
        definition: "relating to conscious experience",
        examples: [
            {
                en: "Phenomenological research examines lived experience.",
                th: "การวิจัยปรากฏการณ์วิทยาตรวจสอบประสบการณ์ที่มีชีวิต"
            }
        ],
        hint: "experience study",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 985,
        word: "hermeneutical",
        pos: "adj.",
        thai: "เกี่ยวกับการตีความ",
        definition: "relating to interpretation",
        examples: [
            {
                en: "Hermeneutical analysis reveals meaning.",
                th: "การวิเคราะห์การตีความเผยความหมาย"
            }
        ],
        hint: "interpretation method",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 986,
        word: "dialectical",
        pos: "adj.",
        thai: "เกี่ยวกับการโต้แย้ง",
        definition: "relating to logical discussion",
        examples: [
            {
                en: "Dialectical thinking resolves contradictions.",
                th: "การคิดแบบโต้แย้งแก้ไขความขัดแย้ง"
            }
        ],
        hint: "logical debate",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 987,
        word: "paradigmatic",
        pos: "adj.",
        thai: "เกี่ยวกับกระบวนทัศน์",
        definition: "serving as a model",
        examples: [
            {
                en: "The paradigmatic shift transformed science.",
                th: "การเปลี่ยนแปลงกระบวนทัศน์เปลี่ยนวิทยาศาสตร์"
            }
        ],
        hint: "model-like",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 988,
        word: "synecdoche",
        pos: "n.",
        thai: "การใช้ส่วนแทนทั้งหมด",
        definition: "part representing whole",
        examples: [
            {
                en: "All hands on deck uses synecdoche.",
                th: "มือทุกคนบนเรือใช้การใช้ส่วนแทนทั้งหมด"
            }
        ],
        hint: "part for whole",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 989,
        word: "metonymy",
        pos: "n.",
        thai: "การใช้คำแทนคำ",
        definition: "substituting associated word",
        examples: [
            {
                en: "The crown represents monarchy through metonymy.",
                th: "มงกุฎแทนระบอบกษัตริย์ผ่านการใช้คำแทนคำ"
            }
        ],
        hint: "word substitution",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 990,
        word: "chiasmus",
        pos: "n.",
        thai: "การจัดคำแบบไขว้",
        definition: "inverted parallel structure",
        examples: [
            {
                en: "Ask not what your country can do for you uses chiasmus.",
                th: "อย่าถามว่าประเทศจะทำอะไรให้คุณใช้การจัดคำแบบไขว้"
            }
        ],
        hint: "crossed structure",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 991,
        word: "oxymoron",
        pos: "n.",
        thai: "คำขัดแย้ง",
        definition: "contradictory terms combined",
        examples: [
            {
                en: "Deafening silence is an oxymoron.",
                th: "ความเงียบที่หูหนวกเป็นคำขัดแย้ง"
            }
        ],
        hint: "contradictory combination",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 992,
        word: "aphorism",
        pos: "n.",
        thai: "คำพังเพย",
        definition: "concise statement of truth",
        examples: [
            {
                en: "Time heals all wounds is an aphorism.",
                th: "เวลารักษาบาดแผลทั้งหมดเป็นคำพังเพย"
            }
        ],
        hint: "wise saying",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 993,
        word: "corollary",
        pos: "n.",
        thai: "ผลสืบเนื่อง",
        definition: "natural consequence",
        examples: [
            {
                en: "Increased sales is a corollary of good marketing.",
                th: "ยอดขายที่เพิ่มขึ้นเป็นผลสืบเนื่องของการตลาดที่ดี"
            }
        ],
        hint: "logical result",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 994,
        word: "syllogism",
        pos: "n.",
        thai: "การอนุมาน",
        definition: "logical reasoning form",
        examples: [
            {
                en: "The syllogism proves the conclusion.",
                th: "การอนุมานพิสูจน์บทสรุป"
            }
        ],
        hint: "logical argument",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 995,
        word: "sophistry",
        pos: "n.",
        thai: "การโต้แย้งเท็จ",
        definition: "plausible but fallacious reasoning",
        examples: [
            {
                en: "The argument was mere sophistry.",
                th: "การโต้แย้งเป็นเพียงการโต้แย้งเท็จ"
            }
        ],
        hint: "false reasoning",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 996,
        word: "casuistry",
        pos: "n.",
        thai: "การใช้เหตุผลเท็จ",
        definition: "specious moral reasoning",
        examples: [
            {
                en: "Casuistry justifies unethical behavior.",
                th: "การใช้เหตุผลเท็จให้เหตุผลพฤติกรรมที่ไม่มีจริยธรรม"
            }
        ],
        hint: "false moral reasoning",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 997,
        word: "equivocation",
        pos: "n.",
        thai: "การพูดคลุมเครือ",
        definition: "ambiguous language",
        examples: [
            {
                en: "Politicians often use equivocation.",
                th: "นักการเมืองมักใช้การพูดคลุมเครือ"
            }
        ],
        hint: "unclear speech",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 998,
        word: "prevarication",
        pos: "n.",
        thai: "การพูดเลี่ยง",
        definition: "evasive or misleading speech",
        examples: [
            {
                en: "His prevarication avoided the truth.",
                th: "การพูดเลี่ยงของเขาหลีกเลี่ยงความจริง"
            }
        ],
        hint: "evasive speech",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 999,
        word: "obfuscation",
        pos: "n.",
        thai: "การทำให้งุนงง",
        definition: "deliberate confusion",
        examples: [
            {
                en: "Legal obfuscation hides the truth.",
                th: "การทำให้งุนงงทางกฎหมายซ่อนความจริง"
            }
        ],
        hint: "intentional confusion",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1000,
        word: "circumlocution",
        pos: "n.",
        thai: "การพูดอ้อมค้อม",
        definition: "indirect way of speaking",
        examples: [
            {
                en: "His circumlocution avoided direct answers.",
                th: "การพูดอ้อมค้อมของเขาหลีกเลี่ยงคำตอบตรง"
            }
        ],
        hint: "roundabout speech",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1001,
        word: "euphemism",
        pos: "n.",
        thai: "การพูดอ้อมค้อม",
        definition: "mild expression for harsh reality",
        examples: [
            {
                en: "Passed away is a euphemism for died.",
                th: "เสียชีวิตเป็นการพูดอ้อมค้อมของตาย"
            }
        ],
        hint: "softened expression",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1002,
        word: "hyperbole",
        pos: "n.",
        thai: "การพูดเกินจริง",
        definition: "deliberate exaggeration",
        examples: [
            {
                en: "I've told you a million times uses hyperbole.",
                th: "ฉันบอกคุณล้านครั้งแล้วใช้การพูดเกินจริง"
            }
        ],
        hint: "exaggeration",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1003,
        word: "litotes",
        pos: "n.",
        thai: "การพูดลดทอน",
        definition: "deliberate understatement",
        examples: [
            {
                en: "Not bad is litotes for very good.",
                th: "ไม่เลวเป็นการพูดลดทอนของดีมาก"
            }
        ],
        hint: "understatement",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1004,
        word: "synesthesia",
        pos: "n.",
        thai: "การรับรู้ผสม",
        definition: "blending of senses",
        examples: [
            {
                en: "Synesthesia makes some people see sounds.",
                th: "การรับรู้ผสมทำให้บางคนเห็นเสียง"
            }
        ],
        hint: "mixed senses",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1005,
        word: "metamorphosis",
        pos: "n.",
        thai: "การเปลี่ยนแปลงรูปร่าง",
        definition: "transformation",
        examples: [
            {
                en: "The caterpillar's metamorphosis into butterfly.",
                th: "การเปลี่ยนแปลงรูปร่างของหนอนเป็นผีเสื้อ"
            }
        ],
        hint: "change form",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1006,
        word: "verisimilitude",
        pos: "n.",
        thai: "ความเหมือนจริง",
        definition: "appearance of truth",
        examples: [
            {
                en: "The novel's verisimilitude convinced readers.",
                th: "ความเหมือนจริงของนวนิยายโน้มน้าวผู้อ่าน"
            }
        ],
        hint: "seeming real",
        level: "C2",
        cats: ["school"]
    },
    {
        id: 1007,
        word: "neck",
        pos: "n.",
        thai: "คอ",
        definition: "the part connecting the head to the body",
        examples: [
            {
                en: "My neck is stiff.",
                th: "คอของฉันแข็ง"
            }
        ],
        hint: "connects head to body",
        level: "A1",
        cats: ["daily", "health"]
    },
    {
        id: 1008,
        word: "eleven",
        pos: "num.",
        thai: "สิบเอ็ด",
        definition: "the number 11",
        examples: [
            {
                en: "I have eleven books.",
                th: "ฉันมีหนังสือสิบเอ็ดเล่ม"
            }
        ],
        hint: "after ten",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1009,
        word: "twelve",
        pos: "num.",
        thai: "สิบสอง",
        definition: "the number 12",
        examples: [
            {
                en: "It's twelve o'clock.",
                th: "เวลาสิบสองโมง"
            }
        ],
        hint: "one dozen",
        level: "A1",
        cats: ["daily", "time"]
    },
    {
        id: 1010,
        word: "fifteen",
        pos: "num.",
        thai: "สิบห้า",
        definition: "the number 15",
        examples: [
            {
                en: "The class starts at fifteen minutes past two.",
                th: "เรียนเริ่มเวลาสองโมงสิบห้านาที"
            }
        ],
        hint: "ten plus five",
        level: "A1",
        cats: ["daily", "time"]
    },
    {
        id: 1011,
        word: "jump",
        pos: "v.",
        thai: "กระโดด",
        definition: "to move quickly up and down or forward",
        examples: [
            {
                en: "The cat can jump high.",
                th: "แมวกระโดดได้สูง"
            }
        ],
        hint: "feet leave ground",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1012,
        word: "wake",
        pos: "v.",
        thai: "ตื่น",
        definition: "to stop sleeping",
        examples: [
            {
                en: "I wake up at seven.",
                th: "ฉันตื่นเวลาเจ็ดโมง"
            }
        ],
        hint: "stop sleeping",
        level: "A1",
        cats: ["daily", "time"]
    },
    {
        id: 1013,
        word: "box",
        pos: "n.",
        thai: "กล่อง",
        definition: "a container with straight sides",
        examples: [
            {
                en: "Put it in the box.",
                th: "ใส่ไว้ในกล่อง"
            }
        ],
        hint: "square container",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1014,
        word: "ball",
        pos: "n.",
        thai: "บอล",
        definition: "a round object used in games",
        examples: [
            {
                en: "The ball is red.",
                th: "บอลสีแดง"
            }
        ],
        hint: "round toy",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1015,
        word: "gray",
        pos: "adj.",
        thai: "สีเทา",
        definition: "a color between black and white",
        examples: [
            {
                en: "The sky is gray.",
                th: "ท้องฟ้าสีเทา"
            }
        ],
        hint: "between black and white",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1016,
        word: "cheese",
        pos: "n.",
        thai: "เนยแข็ง",
        definition: "food made from milk",
        examples: [
            {
                en: "This cheese is delicious.",
                th: "เนยแข็งนี้อร่อย"
            }
        ],
        hint: "milk product",
        level: "A1",
        cats: ["food"]
    },
    {
        id: 1017,
        word: "afternoon",
        pos: "n.",
        thai: "บ่าย",
        definition: "time between noon and evening",
        examples: [
            {
                en: "See you this afternoon.",
                th: "เจอกันบ่ายนี้"
            }
        ],
        hint: "after noon",
        level: "A1",
        cats: ["time"]
    },
    {
        id: 1018,
        word: "evening",
        pos: "n.",
        thai: "เย็น",
        definition: "time at the end of the day",
        examples: [
            {
                en: "I watch TV in the evening.",
                th: "ฉันดูทีวีตอนเย็น"
            }
        ],
        hint: "end of day",
        level: "A1",
        cats: ["time"]
    },
    {
        id: 1019,
        word: "night",
        pos: "n.",
        thai: "กลางคืน",
        definition: "time when it is dark",
        examples: [
            {
                en: "Good night!",
                th: "ราตรีสวัสดิ์!"
            }
        ],
        hint: "dark time",
        level: "A1",
        cats: ["time"]
    },
    {
        id: 1020,
        word: "bank",
        pos: "n.",
        thai: "ธนาคาร",
        definition: "place where you keep money",
        examples: [
            {
                en: "I go to the bank.",
                th: "ฉันไปธนาคาร"
            }
        ],
        hint: "keep money",
        level: "A1",
        cats: ["money", "city"]
    },
    {
        id: 1021,
        word: "library",
        pos: "n.",
        thai: "ห้องสมุด",
        definition: "place with many books",
        examples: [
            {
                en: "I study at the library.",
                th: "ฉันเรียนที่ห้องสมุด"
            }
        ],
        hint: "place with books",
        level: "A1",
        cats: ["school", "city"]
    },
    {
        id: 1022,
        word: "shoe",
        pos: "n.",
        thai: "รองเท้า",
        definition: "covering for the foot",
        examples: [
            {
                en: "My shoes are dirty.",
                th: "รองเท้าของฉันสกปรก"
            }
        ],
        hint: "foot covering",
        level: "A1",
        cats: ["clothes"]
    },
    {
        id: 1023,
        word: "key",
        pos: "n.",
        thai: "กุญแจ",
        definition: "object used to open locks",
        examples: [
            {
                en: "I lost my keys.",
                th: "ฉันทำกุญแจหาย"
            }
        ],
        hint: "opens locks",
        level: "A1",
        cats: ["daily", "home"]
    },
    {
        id: 1024,
        word: "camera",
        pos: "n.",
        thai: "กล้อง",
        definition: "device for taking pictures",
        examples: [
            {
                en: "Take a photo with the camera.",
                th: "ถ่ายรูปด้วยกล้อง"
            }
        ],
        hint: "takes pictures",
        level: "A1",
        cats: ["technology"]
    },
    {
        id: 1025,
        word: "arm",
        pos: "n.",
        thai: "แขน",
        definition: "the part of the body between shoulder and hand",
        examples: [
            {
                en: "My arm is strong.",
                th: "แขนของฉันแข็งแรง"
            }
        ],
        hint: "between shoulder and hand",
        level: "A1",
        cats: ["daily", "health"]
    },
    {
        id: 1026,
        word: "leg",
        pos: "n.",
        thai: "ขา",
        definition: "the part of the body used for walking",
        examples: [
            {
                en: "My leg hurts.",
                th: "ขาของฉันเจ็บ"
            }
        ],
        hint: "used for walking",
        level: "A1",
        cats: ["daily", "health"]
    },
    {
        id: 1027,
        word: "sixteen",
        pos: "num.",
        thai: "สิบหก",
        definition: "the number 16",
        examples: [
            {
                en: "I am sixteen years old.",
                th: "ฉันอายุสิบหกปี"
            }
        ],
        hint: "ten plus six",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1028,
        word: "seventeen",
        pos: "num.",
        thai: "สิบเจ็ด",
        definition: "the number 17",
        examples: [
            {
                en: "Class ends at seventeen minutes past three.",
                th: "เลิกเรียนเวลาสามโมงสิบเจ็ดนาที"
            }
        ],
        hint: "ten plus seven",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1029,
        word: "eighteen",
        pos: "num.",
        thai: "สิบแปด",
        definition: "the number 18",
        examples: [
            {
                en: "The shop closes at eighteen o'clock.",
                th: "ร้านปิดเวลาหกโมงเย็น"
            }
        ],
        hint: "ten plus eight",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1030,
        word: "nineteen",
        pos: "num.",
        thai: "สิบเก้า",
        definition: "the number 19",
        examples: [
            {
                en: "There are nineteen students.",
                th: "มีนักเรียนสิบเก้าคน"
            }
        ],
        hint: "ten plus nine",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1031,
        word: "twenty",
        pos: "num.",
        thai: "ยี่สิบ",
        definition: "the number 20",
        examples: [
            {
                en: "I have twenty books.",
                th: "ฉันมีหนังสือยี่สิบเล่ม"
            }
        ],
        hint: "two tens",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1032,
        word: "push",
        pos: "v.",
        thai: "ผลัก",
        definition: "to move something away from you",
        examples: [
            {
                en: "Push the door open.",
                th: "ผลักประตูให้เปิด"
            }
        ],
        hint: "move away from you",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1033,
        word: "pull",
        pos: "v.",
        thai: "ดึง",
        definition: "to move something toward you",
        examples: [
            {
                en: "Pull the rope.",
                th: "ดึงเชือก"
            }
        ],
        hint: "move toward you",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1034,
        word: "throw",
        pos: "v.",
        thai: "โยน",
        definition: "to make something fly through the air",
        examples: [
            {
                en: "Throw the ball to me.",
                th: "โยนบอลมาให้ฉัน"
            }
        ],
        hint: "make fly through air",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1035,
        word: "catch",
        pos: "v.",
        thai: "จับ",
        definition: "to grab something flying toward you",
        examples: [
            {
                en: "Catch the ball!",
                th: "จับบอล!"
            }
        ],
        hint: "grab flying object",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1036,
        word: "carry",
        pos: "v.",
        thai: "ถือ",
        definition: "to hold and move something",
        examples: [
            {
                en: "Carry this bag for me.",
                th: "ถือกระเป๋านี้ให้ฉันหน่อย"
            }
        ],
        hint: "hold and move",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1037,
        word: "turn",
        pos: "v.",
        thai: "หัน",
        definition: "to move in a different direction",
        examples: [
            {
                en: "Turn left here.",
                th: "เลี้ยวซ้ายตรงนี้"
            }
        ],
        hint: "change direction",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1038,
        word: "stop",
        pos: "v.",
        thai: "หยุด",
        definition: "to not move anymore",
        examples: [
            {
                en: "Stop the car.",
                th: "หยุดรถ"
            }
        ],
        hint: "not move anymore",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1039,
        word: "try",
        pos: "v.",
        thai: "พยายาม",
        definition: "to attempt to do something",
        examples: [
            {
                en: "Try to understand.",
                th: "พยายามที่จะเข้าใจ"
            }
        ],
        hint: "attempt to do",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1040,
        word: "lamp",
        pos: "n.",
        thai: "โคมไฟ",
        definition: "object that gives light",
        examples: [
            {
                en: "Turn on the lamp.",
                th: "เปิดโคมไฟ"
            }
        ],
        hint: "gives light",
        level: "A1",
        cats: ["home"]
    },
    {
        id: 1041,
        word: "mirror",
        pos: "n.",
        thai: "กระจก",
        definition: "glass that shows your reflection",
        examples: [
            {
                en: "Look in the mirror.",
                th: "มองในกระจก"
            }
        ],
        hint: "shows reflection",
        level: "A1",
        cats: ["home"]
    },
    {
        id: 1042,
        word: "plate",
        pos: "n.",
        thai: "จาน",
        definition: "flat dish for food",
        examples: [
            {
                en: "Put food on the plate.",
                th: "ใส่อาหารในจาน"
            }
        ],
        hint: "flat food dish",
        level: "A1",
        cats: ["home", "food"]
    },
    {
        id: 1043,
        word: "cup",
        pos: "n.",
        thai: "ถ้วย",
        definition: "small container for drinking",
        examples: [
            {
                en: "Drink from this cup.",
                th: "ดื่มจากถ้วยนี้"
            }
        ],
        hint: "drink container",
        level: "A1",
        cats: ["home", "food"]
    },
    {
        id: 1044,
        word: "wet",
        pos: "adj.",
        thai: "เปียก",
        definition: "covered with water",
        examples: [
            {
                en: "My hair is wet.",
                th: "ผมของฉันเปียก"
            }
        ],
        hint: "covered with water",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1045,
        word: "dry",
        pos: "adj.",
        thai: "แห้ง",
        definition: "not wet",
        examples: [
            {
                en: "The clothes are dry.",
                th: "เสื้อผ้าแห้งแล้ว"
            }
        ],
        hint: "not wet",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1046,
        word: "loud",
        pos: "adj.",
        thai: "ดัง",
        definition: "making much noise",
        examples: [
            {
                en: "The music is loud.",
                th: "เพลงดัง"
            }
        ],
        hint: "much noise",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1047,
        word: "quiet",
        pos: "adj.",
        thai: "เงียบ",
        definition: "making little noise",
        examples: [
            {
                en: "Please be quiet.",
                th: "เงียบหน่อย"
            }
        ],
        hint: "little noise",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1048,
        word: "empty",
        pos: "adj.",
        thai: "ว่าง",
        definition: "having nothing inside",
        examples: [
            {
                en: "The box is empty.",
                th: "กล่องว่าง"
            }
        ],
        hint: "nothing inside",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1049,
        word: "full",
        pos: "adj.",
        thai: "เต็ม",
        definition: "completely filled",
        examples: [
            {
                en: "The bag is full.",
                th: "กระเป๋าเต็ม"
            }
        ],
        hint: "completely filled",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1050,
        word: "bike",
        pos: "n.",
        thai: "จักรยาน",
        definition: "vehicle with two wheels",
        examples: [
            {
                en: "Ride your bike to school.",
                th: "ขี่จักรยานไปโรงเรียน"
            }
        ],
        hint: "two wheels",
        level: "A1",
        cats: ["travel"]
    },
    {
        id: 1051,
        word: "dog",
        pos: "n.",
        thai: "หมา",
        definition: "animal that people keep as pets",
        examples: [
            {
                en: "The dog is friendly.",
                th: "หมาเป็นมิตร"
            }
        ],
        hint: "common pet animal",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1052,
        word: "cat",
        pos: "n.",
        thai: "แมว",
        definition: "small animal that catches mice",
        examples: [
            {
                en: "The cat sleeps all day.",
                th: "แมวนอนทั้งวัน"
            }
        ],
        hint: "catches mice",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1053,
        word: "bird",
        pos: "n.",
        thai: "นก",
        definition: "animal that can fly",
        examples: [
            {
                en: "Birds sing in the morning.",
                th: "นกร้องเพลงตอนเช้า"
            }
        ],
        hint: "flying animal",
        level: "A1",
        cats: ["nature"]
    },
    {
        id: 1054,
        word: "parent",
        pos: "n.",
        thai: "พ่อแม่",
        definition: "mother or father",
        examples: [
            {
                en: "Ask your parents first.",
                th: "ถามพ่อแม่ก่อน"
            }
        ],
        hint: "mother or father",
        level: "A1",
        cats: ["daily", "social"]
    },
    {
        id: 1055,
        word: "rock",
        pos: "n.",
        thai: "หิน",
        definition: "hard natural object",
        examples: [
            {
                en: "Sit on the rock.",
                th: "นั่งบนหิน"
            }
        ],
        hint: "hard natural object",
        level: "A1",
        cats: ["nature"]
    },
    {
        id: 1056,
        word: "sock",
        pos: "n.",
        thai: "ถุงเท้า",
        definition: "clothing for feet inside shoes",
        examples: [
            {
                en: "Put on your socks.",
                th: "ใส่ถุงเท้า"
            }
        ],
        hint: "foot clothing",
        level: "A1",
        cats: ["clothes"]
    },
    {
        id: 1057,
        word: "pay",
        pos: "v.",
        thai: "จ่าย",
        definition: "to give money for something",
        examples: [
            {
                en: "Pay for the food.",
                th: "จ่ายเงินค่าอาหาร"
            }
        ],
        hint: "give money",
        level: "A1",
        cats: ["money", "shopping"]
    },
    {
        id: 1058,
        word: "study",
        pos: "v.",
        thai: "เรียน",
        definition: "to learn about something",
        examples: [
            {
                en: "Study hard for the test.",
                th: "เรียนหนักเพื่อสอบ"
            }
        ],
        hint: "learn about",
        level: "A1",
        cats: ["school"]
    },
    {
        id: 1059,
        word: "left",
        pos: "adv.",
        thai: "ซ้าย",
        definition: "the opposite of right",
        examples: [
            {
                en: "Turn left at the corner.",
                th: "เลี้ยวซ้ายที่หัวมุม"
            }
        ],
        hint: "opposite of right",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1060,
        word: "right",
        pos: "adv.",
        thai: "ขวา",
        definition: "the opposite of left",
        examples: [
            {
                en: "Turn right here.",
                th: "เลี้ยวขวาตรงนี้"
            }
        ],
        hint: "opposite of left",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1061,
        word: "up",
        pos: "adv.",
        thai: "ขึ้น",
        definition: "toward a higher place",
        examples: [
            {
                en: "Look up at the sky.",
                th: "มองขึ้นไปบนฟ้า"
            }
        ],
        hint: "toward higher place",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1062,
        word: "down",
        pos: "adv.",
        thai: "ลง",
        definition: "toward a lower place",
        examples: [
            {
                en: "Come down from there.",
                th: "ลงมาจากที่นั่น"
            }
        ],
        hint: "toward lower place",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1063,
        word: "inside",
        pos: "prep.",
        thai: "ข้างใน",
        definition: "in the middle of something",
        examples: [
            {
                en: "The book is inside the bag.",
                th: "หนังสืออยู่ในกระเป๋า"
            }
        ],
        hint: "in the middle",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1064,
        word: "outside",
        pos: "prep.",
        thai: "ข้างนอก",
        definition: "not inside",
        examples: [
            {
                en: "Wait outside the room.",
                th: "รอข้างนอกห้อง"
            }
        ],
        hint: "not inside",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1065,
        word: "why",
        pos: "adv.",
        thai: "ทำไม",
        definition: "for what reason",
        examples: [
            {
                en: "Why are you late?",
                th: "ทำไมคุณมาสาย?"
            }
        ],
        hint: "for what reason",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1066,
        word: "how",
        pos: "adv.",
        thai: "อย่างไร",
        definition: "in what way",
        examples: [
            {
                en: "How do you cook this?",
                th: "คุณทำอาหารนี้อย่างไร?"
            }
        ],
        hint: "in what way",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1067,
        word: "wash",
        pos: "v.",
        thai: "ล้าง",
        definition: "to clean with water",
        examples: [
            {
                en: "Wash your hands.",
                th: "ล้างมือ"
            }
        ],
        hint: "clean with water",
        level: "A1",
        cats: ["daily", "health"]
    },
    {
        id: 1068,
        word: "brush",
        pos: "v.",
        thai: "แปรง",
        definition: "to clean with a brush",
        examples: [
            {
                en: "Brush your teeth.",
                th: "แปรงฟัน"
            }
        ],
        hint: "clean with brush",
        level: "A1",
        cats: ["daily", "health"]
    },
    {
        id: 1069,
        word: "cut",
        pos: "v.",
        thai: "ตัด",
        definition: "to divide with a sharp tool",
        examples: [
            {
                en: "Cut the paper.",
                th: "ตัดกระดาษ"
            }
        ],
        hint: "divide with sharp tool",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1070,
        word: "fold",
        pos: "v.",
        thai: "พับ",
        definition: "to bend something over itself",
        examples: [
            {
                en: "Fold the paper.",
                th: "พับกระดาษ"
            }
        ],
        hint: "bend over itself",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1071,
        word: "shake",
        pos: "v.",
        thai: "เขย่า",
        definition: "to move quickly back and forth",
        examples: [
            {
                en: "Shake the bottle.",
                th: "เขย่าขวด"
            }
        ],
        hint: "move back and forth",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1072,
        word: "towel",
        pos: "n.",
        thai: "ผ้าเช็ดตัว",
        definition: "cloth for drying",
        examples: [
            {
                en: "Use a clean towel.",
                th: "ใช้ผ้าเช็ดตัวสะอาด"
            }
        ],
        hint: "cloth for drying",
        level: "A1",
        cats: ["home"]
    },
    {
        id: 1073,
        word: "soap",
        pos: "n.",
        thai: "สบู่",
        definition: "used for washing",
        examples: [
            {
                en: "Wash with soap.",
                th: "ล้างด้วยสบู่"
            }
        ],
        hint: "used for washing",
        level: "A1",
        cats: ["home", "health"]
    },
    {
        id: 1074,
        word: "cloth",
        pos: "n.",
        thai: "ผ้า",
        definition: "material made from threads",
        examples: [
            {
                en: "Clean with a cloth.",
                th: "เช็ดด้วยผ้า"
            }
        ],
        hint: "material from threads",
        level: "A1",
        cats: ["home"]
    },
    {
        id: 1075,
        word: "rope",
        pos: "n.",
        thai: "เชือก",
        definition: "thick string for tying",
        examples: [
            {
                en: "Tie with rope.",
                th: "ผูกด้วยเชือก"
            }
        ],
        hint: "thick tying string",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1076,
        word: "stick",
        pos: "n.",
        thai: "ไม้เท้า",
        definition: "long thin piece of wood",
        examples: [
            {
                en: "Pick up the stick.",
                th: "หยิบไม้เท้าขึ้นมา"
            }
        ],
        hint: "thin wood piece",
        level: "A1",
        cats: ["nature"]
    },
    {
        id: 1077,
        word: "stone",
        pos: "n.",
        thai: "ก้อนหิน",
        definition: "small piece of rock",
        examples: [
            {
                en: "Throw a stone.",
                th: "โยนก้อนหิน"
            }
        ],
        hint: "small rock piece",
        level: "A1",
        cats: ["nature"]
    },
    {
        id: 1078,
        word: "sand",
        pos: "n.",
        thai: "ทราย",
        definition: "tiny pieces of rock",
        examples: [
            {
                en: "Walk on the sand.",
                th: "เดินบนทราย"
            }
        ],
        hint: "tiny rock pieces",
        level: "A1",
        cats: ["nature"]
    },
    {
        id: 1079,
        word: "smooth",
        pos: "adj.",
        thai: "เรียบ",
        definition: "having an even surface",
        examples: [
            {
                en: "The table is smooth.",
                th: "โต๊ะเรียบ"
            }
        ],
        hint: "even surface",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1080,
        word: "rough",
        pos: "adj.",
        thai: "ขรุขระ",
        definition: "having an uneven surface",
        examples: [
            {
                en: "The wall is rough.",
                th: "ผนังขรุขระ"
            }
        ],
        hint: "uneven surface",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1081,
        word: "soft",
        pos: "adj.",
        thai: "นุ่ม",
        definition: "not hard to touch",
        examples: [
            {
                en: "The pillow is soft.",
                th: "หมอนนุ่ม"
            }
        ],
        hint: "not hard",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1082,
        word: "hard",
        pos: "adj.",
        thai: "แข็ง",
        definition: "not soft to touch",
        examples: [
            {
                en: "The rock is hard.",
                th: "หินแข็ง"
            }
        ],
        hint: "not soft",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1083,
        word: "sharp",
        pos: "adj.",
        thai: "คม",
        definition: "having a pointed edge",
        examples: [
            {
                en: "The knife is sharp.",
                th: "มีดคม"
            }
        ],
        hint: "pointed edge",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1084,
        word: "round",
        pos: "adj.",
        thai: "กลม",
        definition: "shaped like a circle",
        examples: [
            {
                en: "The ball is round.",
                th: "บอลกลม"
            }
        ],
        hint: "circle shape",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1085,
        word: "flat",
        pos: "adj.",
        thai: "แบน",
        definition: "having a level surface",
        examples: [
            {
                en: "The table is flat.",
                th: "โต๊ะแบน"
            }
        ],
        hint: "level surface",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1086,
        word: "sound",
        pos: "n.",
        thai: "เสียง",
        definition: "something you hear",
        examples: [
            {
                en: "I hear a sound.",
                th: "ฉันได้ยินเสียง"
            }
        ],
        hint: "something you hear",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1087,
        word: "smell",
        pos: "n.",
        thai: "กลิ่น",
        definition: "something you notice with your nose",
        examples: [
            {
                en: "A good smell.",
                th: "กลิ่นดี"
            }
        ],
        hint: "notice with nose",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1088,
        word: "touch",
        pos: "v.",
        thai: "สัมผัส",
        definition: "to feel with your hands",
        examples: [
            {
                en: "Don't touch that.",
                th: "อย่าสัมผัสนั่น"
            }
        ],
        hint: "feel with hands",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1089,
        word: "hole",
        pos: "n.",
        thai: "รู",
        definition: "empty space in something",
        examples: [
            {
                en: "There's a hole in my sock.",
                th: "ถุงเท้าของฉันมีรู"
            }
        ],
        hint: "empty space",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1090,
        word: "line",
        pos: "n.",
        thai: "เส้น",
        definition: "long thin mark",
        examples: [
            {
                en: "Draw a straight line.",
                th: "วาดเส้นตรง"
            }
        ],
        hint: "long thin mark",
        level: "A1",
        cats: ["daily", "school"]
    },
    {
        id: 1091,
        word: "circle",
        pos: "n.",
        thai: "วงกลม",
        definition: "round shape",
        examples: [
            {
                en: "Draw a circle.",
                th: "วาดวงกลม"
            }
        ],
        hint: "round shape",
        level: "A1",
        cats: ["daily", "school"]
    },
    {
        id: 1092,
        word: "square",
        pos: "n.",
        thai: "สี่เหลี่ยม",
        definition: "shape with four equal sides",
        examples: [
            {
                en: "The box is square.",
                th: "กล่องเป็นสี่เหลี่ยม"
            }
        ],
        hint: "four equal sides",
        level: "A1",
        cats: ["daily", "school"]
    },
    {
        id: 1093,
        word: "corner",
        pos: "n.",
        thai: "มุม",
        definition: "place where two lines meet",
        examples: [
            {
                en: "Stand in the corner.",
                th: "ยืนในมุม"
            }
        ],
        hint: "where lines meet",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1094,
        word: "edge",
        pos: "n.",
        thai: "ขอบ",
        definition: "outer boundary of something",
        examples: [
            {
                en: "Be careful of the sharp edge.",
                th: "ระวังขอบที่คม"
            }
        ],
        hint: "outer boundary",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1095,
        word: "middle",
        pos: "n.",
        thai: "กลาง",
        definition: "center part",
        examples: [
            {
                en: "Sit in the middle.",
                th: "นั่งตรงกลาง"
            }
        ],
        hint: "center part",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1096,
        word: "side",
        pos: "n.",
        thai: "ข้าง",
        definition: "left or right part",
        examples: [
            {
                en: "Move to the side.",
                th: "ขยับไปข้างๆ"
            }
        ],
        hint: "left or right part",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1097,
        word: "top",
        pos: "n.",
        thai: "ด้านบน",
        definition: "highest part",
        examples: [
            {
                en: "Put it on top.",
                th: "วางไว้ด้านบน"
            }
        ],
        hint: "highest part",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1098,
        word: "bottom",
        pos: "n.",
        thai: "ด้านล่าง",
        definition: "lowest part",
        examples: [
            {
                en: "Look at the bottom.",
                th: "ดูด้านล่าง"
            }
        ],
        hint: "lowest part",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1099,
        word: "front",
        pos: "n.",
        thai: "ด้านหน้า",
        definition: "forward part",
        examples: [
            {
                en: "Stand in front.",
                th: "ยืนด้านหน้า"
            }
        ],
        hint: "forward part",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1100,
        word: "behind",
        pos: "prep.",
        thai: "ข้างหลัง",
        definition: "at the back of",
        examples: [
            {
                en: "Hide behind the tree.",
                th: "ซ่อนข้างหลังต้นไม้"
            }
        ],
        hint: "at the back",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1101,
        word: "between",
        pos: "prep.",
        thai: "ระหว่าง",
        definition: "in the space separating two things",
        examples: [
            {
                en: "Sit between us.",
                th: "นั่งระหว่างเรา"
            }
        ],
        hint: "space separating two",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1102,
        word: "near",
        pos: "prep.",
        thai: "ใกล้",
        definition: "close to",
        examples: [
            {
                en: "Sit near me.",
                th: "นั่งใกล้ฉัน"
            }
        ],
        hint: "close to",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1103,
        word: "far",
        pos: "adj.",
        thai: "ไกล",
        definition: "not close",
        examples: [
            {
                en: "The shop is far.",
                th: "ร้านค้าอยู่ไกล"
            }
        ],
        hint: "not close",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1104,
        word: "fast",
        pos: "adj.",
        thai: "เร็ว",
        definition: "moving quickly",
        examples: [
            {
                en: "The car is fast.",
                th: "รถเร็ว"
            }
        ],
        hint: "moving quickly",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1105,
        word: "slow",
        pos: "adj.",
        thai: "ช้า",
        definition: "not moving quickly",
        examples: [
            {
                en: "Walk slow.",
                th: "เดินช้าๆ"
            }
        ],
        hint: "not moving quickly",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1106,
        word: "piece",
        pos: "n.",
        thai: "ชิ้น",
        definition: "a part of something",
        examples: [
            {
                en: "Give me a piece of cake.",
                th: "ให้ฉันเค้กชิ้นหนึ่ง"
            }
        ],
        hint: "part of something",
        level: "A1",
        cats: ["daily"]
    },
    {
        id: 1107,
        word: "advise",
        pos: "v.",
        thai: "แนะนำ",
        definition: "to give suggestions about what to do",
        examples: [
            {
                en: "I advise you to study hard.",
                th: "ฉันแนะนำให้คุณเรียนหนัก"
            }
        ],
        hint: "give suggestions",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1108,
        word: "appear",
        pos: "v.",
        thai: "ปรากฏ",
        definition: "to become visible",
        examples: [
            {
                en: "The sun appears at dawn.",
                th: "ดวงอาทิตย์ปรากฏตอนรุ่งสาง"
            }
        ],
        hint: "become visible",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1109,
        word: "avoid",
        pos: "v.",
        thai: "หลีกเลี่ยง",
        definition: "to stay away from something",
        examples: [
            {
                en: "Avoid eating too much sugar.",
                th: "หลีกเลี่ยงการกินน้ำตาลมากเกินไป"
            }
        ],
        hint: "stay away from",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1110,
        word: "belong",
        pos: "v.",
        thai: "เป็นของ",
        definition: "to be owned by someone",
        examples: [
            {
                en: "This book belongs to me.",
                th: "หนังสือเล่มนี้เป็นของฉัน"
            }
        ],
        hint: "be owned by",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1111,
        word: "borrow",
        pos: "v.",
        thai: "ยืม",
        definition: "to take something temporarily",
        examples: [
            {
                en: "Can I borrow your pen?",
                th: "ฉันขอยืมปากกาได้ไหม?"
            }
        ],
        hint: "take temporarily",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1112,
        word: "deliver",
        pos: "v.",
        thai: "ส่ง",
        definition: "to take something to someone",
        examples: [
            {
                en: "The mailman delivers letters.",
                th: "บุรุษไปรษณีย์ส่งจดหมาย"
            }
        ],
        hint: "take to someone",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1113,
        word: "absent",
        pos: "adj.",
        thai: "ขาด",
        definition: "not present",
        examples: [
            {
                en: "Three students are absent today.",
                th: "วันนี้นักเรียนขาดสามคน"
            }
        ],
        hint: "not present",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1114,
        word: "active",
        pos: "adj.",
        thai: "กระฉับกระเฉง",
        definition: "doing many things",
        examples: [
            {
                en: "She is very active in sports.",
                th: "เธอกระฉับกระเฉงในกีฬา"
            }
        ],
        hint: "doing many things",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1115,
        word: "afraid",
        pos: "adj.",
        thai: "กลัว",
        definition: "feeling fear",
        examples: [
            {
                en: "I'm afraid of spiders.",
                th: "ฉันกลัวแมงมุม"
            }
        ],
        hint: "feeling fear",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1116,
        word: "alive",
        pos: "adj.",
        thai: "มีชีวิต",
        definition: "not dead",
        examples: [
            {
                en: "The plant is still alive.",
                th: "ต้นไม้ยังมีชีวิตอยู่"
            }
        ],
        hint: "not dead",
        level: "A2",
        cats: ["nature"]
    },
    {
        id: 1117,
        word: "ancient",
        pos: "adj.",
        thai: "โบราณ",
        definition: "very old",
        examples: [
            {
                en: "This is an ancient temple.",
                th: "นี่คือวัดโบราณ"
            }
        ],
        hint: "very old",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1118,
        word: "average",
        pos: "adj.",
        thai: "เฉลี่ย",
        definition: "normal or typical",
        examples: [
            {
                en: "He has average height.",
                th: "เขามีส่วนสูงเฉลี่ย"
            }
        ],
        hint: "normal or typical",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1119,
        word: "complete",
        pos: "adj.",
        thai: "สมบูรณ์",
        definition: "having all parts",
        examples: [
            {
                en: "The set is complete.",
                th: "ชุดนี้สมบูรณ์"
            }
        ],
        hint: "having all parts",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1120,
        word: "correct",
        pos: "adj.",
        thai: "ถูกต้อง",
        definition: "without mistakes",
        examples: [
            {
                en: "Your answer is correct.",
                th: "คำตอบของคุณถูกต้อง"
            }
        ],
        hint: "without mistakes",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1121,
        word: "business",
        pos: "n.",
        thai: "ธุรกิจ",
        definition: "commercial activity",
        examples: [
            {
                en: "She owns a small business.",
                th: "เธอมีธุรกิจเล็กๆ"
            }
        ],
        hint: "commercial activity",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1122,
        word: "manager",
        pos: "n.",
        thai: "ผู้จัดการ",
        definition: "person who controls a business",
        examples: [
            {
                en: "The manager is in a meeting.",
                th: "ผู้จัดการอยู่ในการประชุม"
            }
        ],
        hint: "controls business",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1123,
        word: "attention",
        pos: "n.",
        thai: "ความสนใจ",
        definition: "focus on something",
        examples: [
            {
                en: "Pay attention in class.",
                th: "ตั้งใจเรียนในห้องเรียน"
            }
        ],
        hint: "focus on something",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1124,
        word: "course",
        pos: "n.",
        thai: "หลักสูตร",
        definition: "series of lessons",
        examples: [
            {
                en: "I'm taking an English course.",
                th: "ฉันเรียนหลักสูตรภาษาอังกฤษ"
            }
        ],
        hint: "series of lessons",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1125,
        word: "exam",
        pos: "n.",
        thai: "การสอบ",
        definition: "test of knowledge",
        examples: [
            {
                en: "The exam is next week.",
                th: "การสอบอาทิตย์หน้า"
            }
        ],
        hint: "test of knowledge",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1126,
        word: "grade",
        pos: "n.",
        thai: "เกรด",
        definition: "mark given for work",
        examples: [
            {
                en: "I got a good grade.",
                th: "ฉันได้เกรดดี"
            }
        ],
        hint: "mark for work",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1127,
        word: "homework",
        pos: "n.",
        thai: "การบ้าน",
        definition: "school work done at home",
        examples: [
            {
                en: "I finished my homework.",
                th: "ฉันทำการบ้านเสร็จแล้ว"
            }
        ],
        hint: "school work at home",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1128,
        word: "lesson",
        pos: "n.",
        thai: "บทเรียน",
        definition: "teaching session",
        examples: [
            {
                en: "Today's lesson is about grammar.",
                th: "บทเรียนวันนี้เกี่ยวกับไวยากรณ์"
            }
        ],
        hint: "teaching session",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1129,
        word: "mistake",
        pos: "n.",
        thai: "ข้อผิดพลาด",
        definition: "error or wrong action",
        examples: [
            {
                en: "Everyone makes mistakes.",
                th: "ทุกคนทำผิดพลาดได้"
            }
        ],
        hint: "error or wrong action",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1130,
        word: "subject",
        pos: "n.",
        thai: "วิชา",
        definition: "area of study",
        examples: [
            {
                en: "Math is my favorite subject.",
                th: "คณิตเป็นวิชาโปรดของฉัน"
            }
        ],
        hint: "area of study",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1131,
        word: "ache",
        pos: "n.",
        thai: "ปวด",
        definition: "continuous pain",
        examples: [
            {
                en: "I have a headache.",
                th: "ฉันปวดหัว"
            }
        ],
        hint: "continuous pain",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1132,
        word: "breath",
        pos: "n.",
        thai: "ลมหายใจ",
        definition: "air going in and out of lungs",
        examples: [
            {
                en: "Take a deep breath.",
                th: "หายใจเข้าลึกๆ"
            }
        ],
        hint: "air in and out",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1133,
        word: "disease",
        pos: "n.",
        thai: "โรค",
        definition: "illness affecting body",
        examples: [
            {
                en: "This disease is serious.",
                th: "โรคนี้ร้ายแรง"
            }
        ],
        hint: "illness affecting body",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1134,
        word: "patient",
        pos: "n.",
        thai: "คนไข้",
        definition: "person receiving medical care",
        examples: [
            {
                en: "The patient is recovering.",
                th: "คนไข้กำลังหาย"
            }
        ],
        hint: "receives medical care",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1135,
        word: "program",
        pos: "n.",
        thai: "โปรแกรม",
        definition: "computer software",
        examples: [
            {
                en: "This program is easy to use.",
                th: "โปรแกรมนี้ใช้ง่าย"
            }
        ],
        hint: "computer software",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1136,
        word: "screen",
        pos: "n.",
        thai: "หน้าจอ",
        definition: "surface showing images",
        examples: [
            {
                en: "Look at the screen.",
                th: "มองที่หน้าจอ"
            }
        ],
        hint: "shows images",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1137,
        word: "accident",
        pos: "n.",
        thai: "อุบัติเหตุ",
        definition: "unexpected harmful event",
        examples: [
            {
                en: "There was a car accident.",
                th: "มีอุบัติเหตุรถยนต์"
            }
        ],
        hint: "unexpected harmful event",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1138,
        word: "journey",
        pos: "n.",
        thai: "การเดินทาง",
        definition: "trip from one place to another",
        examples: [
            {
                en: "The journey takes three hours.",
                th: "การเดินทางใช้เวลาสามชั่วโมง"
            }
        ],
        hint: "trip between places",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1139,
        word: "trip",
        pos: "n.",
        thai: "การเดินทาง",
        definition: "journey to a place",
        examples: [
            {
                en: "We had a nice trip.",
                th: "เรามีการเดินทางที่ดี"
            }
        ],
        hint: "journey to place",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1140,
        word: "artist",
        pos: "n.",
        thai: "ศิลปิน",
        definition: "person who creates art",
        examples: [
            {
                en: "She is a famous artist.",
                th: "เธอเป็นศิลปินที่มีชื่อเสียง"
            }
        ],
        hint: "creates art",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1141,
        word: "concert",
        pos: "n.",
        thai: "คอนเสิร์ต",
        definition: "musical performance",
        examples: [
            {
                en: "The concert was amazing.",
                th: "คอนเสิร์ตน่าทึ่งมาก"
            }
        ],
        hint: "musical performance",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1142,
        word: "picture",
        pos: "n.",
        thai: "รูปภาพ",
        definition: "image or photo",
        examples: [
            {
                en: "Take a picture of us.",
                th: "ถ่ายรูปเราหน่อย"
            }
        ],
        hint: "image or photo",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1143,
        word: "theater",
        pos: "n.",
        thai: "โรงละคร",
        definition: "place for performances",
        examples: [
            {
                en: "We went to the theater.",
                th: "เราไปโรงละคร"
            }
        ],
        hint: "place for performances",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1144,
        word: "choice",
        pos: "n.",
        thai: "ทางเลือก",
        definition: "option to select from",
        examples: [
            {
                en: "You have many choices.",
                th: "คุณมีทางเลือกมาก"
            }
        ],
        hint: "option to select",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1145,
        word: "cost",
        pos: "n.",
        thai: "ค่าใช้จ่าย",
        definition: "amount of money needed",
        examples: [
            {
                en: "What's the cost of this?",
                th: "สิ่งนี้ค่าใช้จ่ายเท่าไหร่?"
            }
        ],
        hint: "money needed",
        level: "A2",
        cats: ["money", "shopping"]
    },
    {
        id: 1146,
        word: "discount",
        pos: "n.",
        thai: "ส่วนลด",
        definition: "reduction in price",
        examples: [
            {
                en: "There's a 20% discount.",
                th: "มีส่วนลด 20%"
            }
        ],
        hint: "price reduction",
        level: "A2",
        cats: ["shopping", "money"]
    },
    {
        id: 1147,
        word: "price",
        pos: "n.",
        thai: "ราคา",
        definition: "amount of money for something",
        examples: [
            {
                en: "The price is too high.",
                th: "ราคาสูงเกินไป"
            }
        ],
        hint: "money amount",
        level: "A2",
        cats: ["shopping", "money"]
    },
    {
        id: 1148,
        word: "product",
        pos: "n.",
        thai: "สินค้า",
        definition: "thing made to be sold",
        examples: [
            {
                en: "This product is popular.",
                th: "สินค้านี้เป็นที่นิยม"
            }
        ],
        hint: "made to be sold",
        level: "A2",
        cats: ["shopping"]
    },
    {
        id: 1149,
        word: "quality",
        pos: "n.",
        thai: "คุณภาพ",
        definition: "how good something is",
        examples: [
            {
                en: "The quality is excellent.",
                th: "คุณภาพยอดเยี่ยม"
            }
        ],
        hint: "how good it is",
        level: "A2",
        cats: ["shopping"]
    },
    {
        id: 1150,
        word: "receipt",
        pos: "n.",
        thai: "ใบเสร็จ",
        definition: "proof of payment",
        examples: [
            {
                en: "Keep your receipt.",
                th: "เก็บใบเสร็จไว้"
            }
        ],
        hint: "proof of payment",
        level: "A2",
        cats: ["shopping", "money"]
    },
    {
        id: 1151,
        word: "sale",
        pos: "n.",
        thai: "การขาย",
        definition: "selling at lower prices",
        examples: [
            {
                en: "There's a big sale today.",
                th: "วันนี้มีการขายใหญ่"
            }
        ],
        hint: "selling lower prices",
        level: "A2",
        cats: ["shopping"]
    },
    {
        id: 1152,
        word: "area",
        pos: "n.",
        thai: "พื้นที่",
        definition: "region or space",
        examples: [
            {
                en: "This area is very quiet.",
                th: "พื้นที่นี้เงียบมาก"
            }
        ],
        hint: "region or space",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1153,
        word: "earth",
        pos: "n.",
        thai: "โลก",
        definition: "the planet we live on",
        examples: [
            {
                en: "Earth is our home.",
                th: "โลกคือบ้านของเรา"
            }
        ],
        hint: "planet we live on",
        level: "A2",
        cats: ["nature"]
    },
    {
        id: 1154,
        word: "admit",
        pos: "v.",
        thai: "ยอมรับ",
        definition: "to say something is true",
        examples: [
            {
                en: "I admit I was wrong.",
                th: "ฉันยอมรับว่าฉันผิด"
            }
        ],
        hint: "say something is true",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1155,
        word: "arrange",
        pos: "v.",
        thai: "จัดเรียง",
        definition: "to put things in order",
        examples: [
            {
                en: "Arrange the books neatly.",
                th: "จัดหนังสือให้เป็นระเบียบ"
            }
        ],
        hint: "put in order",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1156,
        word: "compete",
        pos: "v.",
        thai: "แข่งขัน",
        definition: "to try to win against others",
        examples: [
            {
                en: "Athletes compete for medals.",
                th: "นักกีฬาแข่งขันเพื่อเหรียญ"
            }
        ],
        hint: "try to win",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1157,
        word: "contain",
        pos: "v.",
        thai: "บรรจุ",
        definition: "to have something inside",
        examples: [
            {
                en: "This box contains books.",
                th: "กล่องนี้บรรจุหนังสือ"
            }
        ],
        hint: "have inside",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1158,
        word: "expect",
        pos: "v.",
        thai: "คาดหวัง",
        definition: "to think something will happen",
        examples: [
            {
                en: "I expect rain tomorrow.",
                th: "ฉันคาดว่าพรุ่งนี้จะฝนตก"
            }
        ],
        hint: "think will happen",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1159,
        word: "beauty",
        pos: "n.",
        thai: "ความงาม",
        definition: "quality of being beautiful",
        examples: [
            {
                en: "The beauty of nature is amazing.",
                th: "ความงามของธรรมชาติน่าทึ่ง"
            }
        ],
        hint: "quality of beautiful",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1160,
        word: "dream",
        pos: "n.",
        thai: "ความฝัน",
        definition: "images in sleep or hope",
        examples: [
            {
                en: "Follow your dreams.",
                th: "ตามความฝันของคุณ"
            }
        ],
        hint: "images in sleep or hope",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1161,
        word: "freedom",
        pos: "n.",
        thai: "เสรีภาพ",
        definition: "state of being free",
        examples: [
            {
                en: "Freedom is important.",
                th: "เสรีภาพสำคัญ"
            }
        ],
        hint: "state of being free",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1162,
        word: "hope",
        pos: "n.",
        thai: "ความหวัง",
        definition: "feeling of expectation",
        examples: [
            {
                en: "Never lose hope.",
                th: "อย่าสูญเสียความหวัง"
            }
        ],
        hint: "feeling of expectation",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1163,
        word: "reason",
        pos: "n.",
        thai: "เหตุผล",
        definition: "cause or explanation",
        examples: [
            {
                en: "What's the reason for this?",
                th: "เหตุผลของสิ่งนี้คืออะไร?"
            }
        ],
        hint: "cause or explanation",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1164,
        word: "truth",
        pos: "n.",
        thai: "ความจริง",
        definition: "fact or reality",
        examples: [
            {
                en: "Tell me the truth.",
                th: "บอกความจริงกับฉัน"
            }
        ],
        hint: "fact or reality",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1165,
        word: "argument",
        pos: "n.",
        thai: "การโต้เถียง",
        definition: "disagreement with reasons",
        examples: [
            {
                en: "They had an argument.",
                th: "พวกเขาโต้เถียงกัน"
            }
        ],
        hint: "disagreement with reasons",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1166,
        word: "conversation",
        pos: "n.",
        thai: "การสนทนา",
        definition: "talk between people",
        examples: [
            {
                en: "We had a nice conversation.",
                th: "เรามีการสนทนาที่ดี"
            }
        ],
        hint: "talk between people",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1167,
        word: "discussion",
        pos: "n.",
        thai: "การอภิปราย",
        definition: "talk about a topic",
        examples: [
            {
                en: "Let's have a discussion.",
                th: "มาอภิปรายกัน"
            }
        ],
        hint: "talk about topic",
        level: "A2",
        cats: ["social", "school"]
    },
    {
        id: 1168,
        word: "explanation",
        pos: "n.",
        thai: "คำอธิบาย",
        definition: "making something clear",
        examples: [
            {
                en: "Give me an explanation.",
                th: "ให้คำอธิบายฉันหน่อย"
            }
        ],
        hint: "making clear",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1169,
        word: "permission",
        pos: "n.",
        thai: "การอนุญาต",
        definition: "being allowed to do something",
        examples: [
            {
                en: "Ask for permission first.",
                th: "ขออนุญาตก่อน"
            }
        ],
        hint: "being allowed",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1170,
        word: "reply",
        pos: "n.",
        thai: "คำตอบ",
        definition: "response to something said",
        examples: [
            {
                en: "I'm waiting for your reply.",
                th: "ฉันรอคำตอบของคุณ"
            }
        ],
        hint: "response to something",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1171,
        word: "suggestion",
        pos: "n.",
        thai: "ข้อเสนอแนะ",
        definition: "idea about what to do",
        examples: [
            {
                en: "That's a good suggestion.",
                th: "นั่นเป็นข้อเสนอแนะที่ดี"
            }
        ],
        hint: "idea about what to do",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1172,
        word: "calendar",
        pos: "n.",
        thai: "ปฏิทิน",
        definition: "shows days and months",
        examples: [
            {
                en: "Check the calendar.",
                th: "ดูปฏิทิน"
            }
        ],
        hint: "shows days and months",
        level: "A2",
        cats: ["time"]
    },
    {
        id: 1173,
        word: "period",
        pos: "n.",
        thai: "ช่วงเวลา",
        definition: "length of time",
        examples: [
            {
                en: "This period lasts two hours.",
                th: "ช่วงเวลานี้ใช้เวลาสองชั่วโมง"
            }
        ],
        hint: "length of time",
        level: "A2",
        cats: ["time"]
    },
    {
        id: 1174,
        word: "excitement",
        pos: "n.",
        thai: "ความตื่นเต้น",
        definition: "feeling of being thrilled",
        examples: [
            {
                en: "The excitement was amazing.",
                th: "ความตื่นเต้นน่าทึ่งมาก"
            }
        ],
        hint: "thrilled feeling",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1175,
        word: "jealousy",
        pos: "n.",
        thai: "ความอิจฉา",
        definition: "feeling envious of others",
        examples: [
            {
                en: "Jealousy is not healthy.",
                th: "ความอิจฉาไม่ดี"
            }
        ],
        hint: "envious feeling",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1176,
        word: "pride",
        pos: "n.",
        thai: "ความภาคภูมิใจ",
        definition: "feeling pleased with achievements",
        examples: [
            {
                en: "I take pride in my work.",
                th: "ฉันภาคภูมิใจในงานของฉัน"
            }
        ],
        hint: "pleased with achievements",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1177,
        word: "relief",
        pos: "n.",
        thai: "ความโล่งใจ",
        definition: "feeling better after worry",
        examples: [
            {
                en: "What a relief!",
                th: "โล่งใจจริงๆ!"
            }
        ],
        hint: "better after worry",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1178,
        word: "worry",
        pos: "n.",
        thai: "ความกังวล",
        definition: "anxious thoughts",
        examples: [
            {
                en: "Don't worry about it.",
                th: "อย่ากังวลเลย"
            }
        ],
        hint: "anxious thoughts",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1179,
        word: "appetite",
        pos: "n.",
        thai: "ความอยากอาหาร",
        definition: "desire to eat",
        examples: [
            {
                en: "I have no appetite.",
                th: "ฉันไม่อยากอาหาร"
            }
        ],
        hint: "desire to eat",
        level: "A2",
        cats: ["food", "health"]
    },
    {
        id: 1180,
        word: "dessert",
        pos: "n.",
        thai: "ของหวาน",
        definition: "sweet food after meal",
        examples: [
            {
                en: "What's for dessert?",
                th: "ของหวานมีอะไร?"
            }
        ],
        hint: "sweet after meal",
        level: "A2",
        cats: ["food"]
    },
    {
        id: 1181,
        word: "flavor",
        pos: "n.",
        thai: "รสชาติ",
        definition: "taste of food",
        examples: [
            {
                en: "This has a good flavor.",
                th: "อันนี้รสชาติดี"
            }
        ],
        hint: "taste of food",
        level: "A2",
        cats: ["food"]
    },
    {
        id: 1182,
        word: "furniture",
        pos: "n.",
        thai: "เฟอร์นิเจอร์",
        definition: "chairs, tables, beds in home",
        examples: [
            {
                en: "The furniture is new.",
                th: "เฟอร์นิเจอร์ใหม่"
            }
        ],
        hint: "home items like chairs",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1183,
        word: "garbage",
        pos: "n.",
        thai: "ขยะ",
        definition: "waste thrown away",
        examples: [
            {
                en: "Take out the garbage.",
                th: "เอาขยะออกไป"
            }
        ],
        hint: "waste thrown away",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1184,
        word: "household",
        pos: "n.",
        thai: "ครัวเรือน",
        definition: "people living together",
        examples: [
            {
                en: "A large household.",
                th: "ครัวเรือนใหญ่"
            }
        ],
        hint: "people living together",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1185,
        word: "neighborhood",
        pos: "n.",
        thai: "ย่าน",
        definition: "area where you live",
        examples: [
            {
                en: "It's a quiet neighborhood.",
                th: "เป็นย่านที่เงียบ"
            }
        ],
        hint: "area where you live",
        level: "A2",
        cats: ["home", "city"]
    },
    {
        id: 1186,
        word: "routine",
        pos: "n.",
        thai: "กิจวัตร",
        definition: "regular daily activities",
        examples: [
            {
                en: "My morning routine.",
                th: "กิจวัตรเช้าของฉัน"
            }
        ],
        hint: "regular daily activities",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1187,
        word: "tool",
        pos: "n.",
        thai: "เครื่องมือ",
        definition: "item used to do work",
        examples: [
            {
                en: "I need the right tool.",
                th: "ฉันต้องการเครื่องมือที่เหมาะสม"
            }
        ],
        hint: "item for work",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1188,
        word: "arrival",
        pos: "n.",
        thai: "การมาถึง",
        definition: "act of coming to a place",
        examples: [
            {
                en: "The arrival time is 3 PM.",
                th: "เวลามาถึงคือบ่ายสามโมง"
            }
        ],
        hint: "coming to place",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1189,
        word: "departure",
        pos: "n.",
        thai: "การออกเดินทาง",
        definition: "act of leaving a place",
        examples: [
            {
                en: "Departure is at 8 AM.",
                th: "ออกเดินทางเวลาแปดโมงเช้า"
            }
        ],
        hint: "leaving a place",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1190,
        word: "distance",
        pos: "n.",
        thai: "ระยะทาง",
        definition: "space between two places",
        examples: [
            {
                en: "The distance is 10 kilometers.",
                th: "ระยะทาง 10 กิโลเมตร"
            }
        ],
        hint: "space between places",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1191,
        word: "route",
        pos: "n.",
        thai: "เส้นทาง",
        definition: "way to get somewhere",
        examples: [
            {
                en: "Take this route.",
                th: "ใช้เส้นทางนี้"
            }
        ],
        hint: "way to get somewhere",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1192,
        word: "speed",
        pos: "n.",
        thai: "ความเร็ว",
        definition: "how fast something moves",
        examples: [
            {
                en: "Reduce your speed.",
                th: "ลดความเร็ว"
            }
        ],
        hint: "how fast it moves",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1193,
        word: "account",
        pos: "n.",
        thai: "บัญชี",
        definition: "money kept in bank",
        examples: [
            {
                en: "Open a bank account.",
                th: "เปิดบัญชีธนาคาร"
            }
        ],
        hint: "money in bank",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1194,
        word: "cash",
        pos: "n.",
        thai: "เงินสด",
        definition: "money in coins and notes",
        examples: [
            {
                en: "Pay in cash.",
                th: "จ่ายเป็นเงินสด"
            }
        ],
        hint: "coins and notes",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1195,
        word: "credit",
        pos: "n.",
        thai: "เครดิต",
        definition: "borrowed money to pay later",
        examples: [
            {
                en: "Use your credit card.",
                th: "ใช้บัตรเครดิต"
            }
        ],
        hint: "borrowed money",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1196,
        word: "debt",
        pos: "n.",
        thai: "หนี้",
        definition: "money owed to others",
        examples: [
            {
                en: "Pay off your debt.",
                th: "จ่ายหนี้ให้หมด"
            }
        ],
        hint: "money owed",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1197,
        word: "income",
        pos: "n.",
        thai: "รายได้",
        definition: "money received regularly",
        examples: [
            {
                en: "My income is stable.",
                th: "รายได้ของฉันมั่นคง"
            }
        ],
        hint: "money received",
        level: "A2",
        cats: ["money", "work"]
    },
    {
        id: 1198,
        word: "loan",
        pos: "n.",
        thai: "เงินกู้",
        definition: "borrowed money to repay",
        examples: [
            {
                en: "Apply for a loan.",
                th: "สมัครเงินกู้"
            }
        ],
        hint: "borrowed money",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1199,
        word: "savings",
        pos: "n.",
        thai: "เงินออม",
        definition: "money kept for future",
        examples: [
            {
                en: "Build your savings.",
                th: "สร้างเงินออม"
            }
        ],
        hint: "money for future",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1200,
        word: "tax",
        pos: "n.",
        thai: "ภาษี",
        definition: "money paid to government",
        examples: [
            {
                en: "Pay your taxes.",
                th: "จ่ายภาษี"
            }
        ],
        hint: "money to government",
        level: "A2",
        cats: ["money"]
    },
    {
        id: 1201,
        word: "fog",
        pos: "n.",
        thai: "หมอก",
        definition: "thick mist near ground",
        examples: [
            {
                en: "Heavy fog this morning.",
                th: "เช้านี้หมอกหนา"
            }
        ],
        hint: "thick mist",
        level: "A2",
        cats: ["weather"]
    },
    {
        id: 1202,
        word: "humidity",
        pos: "n.",
        thai: "ความชื้น",
        definition: "water in the air",
        examples: [
            {
                en: "High humidity today.",
                th: "วันนี้ความชื้นสูง"
            }
        ],
        hint: "water in air",
        level: "A2",
        cats: ["weather"]
    },
    {
        id: 1203,
        word: "lightning",
        pos: "n.",
        thai: "ฟ้าผ่า",
        definition: "bright flash in storm",
        examples: [
            {
                en: "Lightning struck the tree.",
                th: "ฟ้าผ่าต้นไม้"
            }
        ],
        hint: "bright flash in storm",
        level: "A2",
        cats: ["weather"]
    },
    {
        id: 1204,
        word: "sunshine",
        pos: "n.",
        thai: "แสงแดด",
        definition: "light from the sun",
        examples: [
            {
                en: "Enjoy the sunshine.",
                th: "เพลิดเพลินกับแสงแดด"
            }
        ],
        hint: "light from sun",
        level: "A2",
        cats: ["weather"]
    },
    {
        id: 1205,
        word: "thunder",
        pos: "n.",
        thai: "เสียงฟ้าร้อง",
        definition: "loud sound after lightning",
        examples: [
            {
                en: "Thunder scared the dog.",
                th: "เสียงฟ้าร้องทำให้หมากลัว"
            }
        ],
        hint: "sound after lightning",
        level: "A2",
        cats: ["weather"]
    },
    {
        id: 1206,
        word: "announce",
        pos: "v.",
        thai: "ประกาศ",
        definition: "to tell news publicly",
        examples: [
            {
                en: "Announce the winner.",
                th: "ประกาศผู้ชนะ"
            }
        ],
        hint: "tell news publicly",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1207,
        word: "appreciate",
        pos: "v.",
        thai: "ขอบคุณ",
        definition: "to be grateful for",
        examples: [
            {
                en: "I appreciate your help.",
                th: "ฉันขอบคุณความช่วยเหลือของคุณ"
            }
        ],
        hint: "be grateful for",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1208,
        word: "attach",
        pos: "v.",
        thai: "แนบ",
        definition: "to join or connect",
        examples: [
            {
                en: "Attach the file.",
                th: "แนบไฟล์"
            }
        ],
        hint: "join or connect",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1209,
        word: "attract",
        pos: "v.",
        thai: "ดึงดูด",
        definition: "to make interested",
        examples: [
            {
                en: "This attracts tourists.",
                th: "สิ่งนี้ดึงดูดนักท่องเที่ยว"
            }
        ],
        hint: "make interested",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1210,
        word: "cancel",
        pos: "v.",
        thai: "ยกเลิก",
        definition: "to stop planned event",
        examples: [
            {
                en: "Cancel the meeting.",
                th: "ยกเลิกการประชุม"
            }
        ],
        hint: "stop planned event",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1211,
        word: "escape",
        pos: "v.",
        thai: "หนี",
        definition: "to get away from danger",
        examples: [
            {
                en: "Escape from the fire.",
                th: "หนีจากไฟไหม้"
            }
        ],
        hint: "get away from danger",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1212,
        word: "examine",
        pos: "v.",
        thai: "ตรวจสอบ",
        definition: "to look at carefully",
        examples: [
            {
                en: "Examine the document.",
                th: "ตรวจสอบเอกสาร"
            }
        ],
        hint: "look at carefully",
        level: "A2",
        cats: ["work", "health"]
    },
    {
        id: 1213,
        word: "introduce",
        pos: "v.",
        thai: "แนะนำ",
        definition: "to present someone new",
        examples: [
            {
                en: "Introduce yourself.",
                th: "แนะนำตัวเอง"
            }
        ],
        hint: "present someone new",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1214,
        word: "participate",
        pos: "v.",
        thai: "เข้าร่วม",
        definition: "to take part in",
        examples: [
            {
                en: "Participate in the contest.",
                th: "เข้าร่วมการแข่งขัน"
            }
        ],
        hint: "take part in",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1215,
        word: "prefer",
        pos: "v.",
        thai: "ชอบมากกว่า",
        definition: "to like more than other",
        examples: [
            {
                en: "I prefer tea to coffee.",
                th: "ฉันชอบชามากกว่ากาแฟ"
            }
        ],
        hint: "like more than other",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1216,
        word: "prepare",
        pos: "v.",
        thai: "เตรียม",
        definition: "to get ready",
        examples: [
            {
                en: "Prepare for the exam.",
                th: "เตรียมสอบ"
            }
        ],
        hint: "get ready",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1217,
        word: "recognize",
        pos: "v.",
        thai: "จำได้",
        definition: "to know from before",
        examples: [
            {
                en: "I recognize that face.",
                th: "ฉันจำหน้านั้นได้"
            }
        ],
        hint: "know from before",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1218,
        word: "replace",
        pos: "v.",
        thai: "แทนที่",
        definition: "to put something new instead",
        examples: [
            {
                en: "Replace the old battery.",
                th: "แทนที่แบตเตอรี่เก่า"
            }
        ],
        hint: "put new instead",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1219,
        word: "represent",
        pos: "v.",
        thai: "เป็นตัวแทน",
        definition: "to act for others",
        examples: [
            {
                en: "He represents our company.",
                th: "เขาเป็นตัวแทนบริษัทเรา"
            }
        ],
        hint: "act for others",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1220,
        word: "require",
        pos: "v.",
        thai: "ต้องการ",
        definition: "to need something",
        examples: [
            {
                en: "This job requires experience.",
                th: "งานนี้ต้องการประสบการณ์"
            }
        ],
        hint: "need something",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1221,
        word: "respond",
        pos: "v.",
        thai: "ตอบสนอง",
        definition: "to reply or react",
        examples: [
            {
                en: "Respond to my email.",
                th: "ตอบอีเมลของฉัน"
            }
        ],
        hint: "reply or react",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1222,
        word: "restore",
        pos: "v.",
        thai: "คืนสภาพ",
        definition: "to bring back to original",
        examples: [
            {
                en: "Restore the old building.",
                th: "คืนสภาพอาคารเก่า"
            }
        ],
        hint: "bring back to original",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1223,
        word: "reveal",
        pos: "v.",
        thai: "เปิดเผย",
        definition: "to show what was hidden",
        examples: [
            {
                en: "Reveal the truth.",
                th: "เปิดเผยความจริง"
            }
        ],
        hint: "show hidden thing",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1224,
        word: "satisfy",
        pos: "v.",
        thai: "พอใจ",
        definition: "to make happy",
        examples: [
            {
                en: "This satisfies me.",
                th: "สิ่งนี้ทำให้ฉันพอใจ"
            }
        ],
        hint: "make happy",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1225,
        word: "separate",
        pos: "v.",
        thai: "แยก",
        definition: "to divide into parts",
        examples: [
            {
                en: "Separate the colors.",
                th: "แยกสี"
            }
        ],
        hint: "divide into parts",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1226,
        word: "solve",
        pos: "v.",
        thai: "แก้ปัญหา",
        definition: "to find answer to problem",
        examples: [
            {
                en: "Solve this math problem.",
                th: "แก้โจทย์คณิตนี้"
            }
        ],
        hint: "find answer",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1227,
        word: "survive",
        pos: "v.",
        thai: "รอดชีวิต",
        definition: "to continue living",
        examples: [
            {
                en: "Survive the storm.",
                th: "รอดชีวิตจากพายุ"
            }
        ],
        hint: "continue living",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1228,
        word: "basement",
        pos: "n.",
        thai: "ห้องใต้ดิน",
        definition: "room below ground level",
        examples: [
            {
                en: "Store boxes in the basement.",
                th: "เก็บกล่องในห้องใต้ดิน"
            }
        ],
        hint: "room below ground",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1229,
        word: "ceiling",
        pos: "n.",
        thai: "เพดาน",
        definition: "top inside surface of room",
        examples: [
            {
                en: "Paint the ceiling white.",
                th: "ทาเพดานสีขาว"
            }
        ],
        hint: "top of room",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1230,
        word: "closet",
        pos: "n.",
        thai: "ตู้เก็บของ",
        definition: "small room for storing clothes",
        examples: [
            {
                en: "Hang clothes in the closet.",
                th: "แขวนเสื้อผ้าในตู้"
            }
        ],
        hint: "stores clothes",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1231,
        word: "garage",
        pos: "n.",
        thai: "โรงรถ",
        definition: "building for keeping cars",
        examples: [
            {
                en: "Park in the garage.",
                th: "จอดรถในโรงรถ"
            }
        ],
        hint: "building for cars",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1232,
        word: "hallway",
        pos: "n.",
        thai: "ทางเดิน",
        definition: "corridor in building",
        examples: [
            {
                en: "Walk down the hallway.",
                th: "เดินไปตามทางเดิน"
            }
        ],
        hint: "corridor in building",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1233,
        word: "balcony",
        pos: "n.",
        thai: "ระเบียง",
        definition: "platform outside upper floor",
        examples: [
            {
                en: "Sit on the balcony.",
                th: "นั่งบนระเบียง"
            }
        ],
        hint: "platform outside",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1234,
        word: "chimney",
        pos: "n.",
        thai: "ปล่องไฟ",
        definition: "tube for smoke from fireplace",
        examples: [
            {
                en: "Smoke goes up the chimney.",
                th: "ควันขึ้นไปทางปล่องไฟ"
            }
        ],
        hint: "tube for smoke",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1235,
        word: "fence",
        pos: "n.",
        thai: "รั้ว",
        definition: "barrier around property",
        examples: [
            {
                en: "Build a fence around the yard.",
                th: "สร้างรั้วรอบบ้าน"
            }
        ],
        hint: "barrier around property",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1236,
        word: "sidewalk",
        pos: "n.",
        thai: "ทางเท้า",
        definition: "path for walking beside road",
        examples: [
            {
                en: "Walk on the sidewalk.",
                th: "เดินบนทางเท้า"
            }
        ],
        hint: "walking path",
        level: "A2",
        cats: ["city"]
    },
    {
        id: 1237,
        word: "playground",
        pos: "n.",
        thai: "สนามเด็กเล่น",
        definition: "area for children to play",
        examples: [
            {
                en: "Kids play at the playground.",
                th: "เด็กๆ เล่นที่สนามเด็กเล่น"
            }
        ],
        hint: "children play area",
        level: "A2",
        cats: ["city"]
    },
    {
        id: 1238,
        word: "keyboard",
        pos: "n.",
        thai: "คีย์บอร์ด",
        definition: "device for typing",
        examples: [
            {
                en: "Type on the keyboard.",
                th: "พิมพ์บนคีย์บอร์ด"
            }
        ],
        hint: "device for typing",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1239,
        word: "mouse",
        pos: "n.",
        thai: "เมาส์",
        definition: "device for clicking",
        examples: [
            {
                en: "Click with the mouse.",
                th: "คลิกด้วยเมาส์"
            }
        ],
        hint: "device for clicking",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1240,
        word: "printer",
        pos: "n.",
        thai: "เครื่องพิมพ์",
        definition: "machine that prints documents",
        examples: [
            {
                en: "Print with this printer.",
                th: "พิมพ์ด้วยเครื่องพิมพ์นี้"
            }
        ],
        hint: "prints documents",
        level: "A2",
        cats: ["technology", "work"]
    },
    {
        id: 1241,
        word: "scanner",
        pos: "n.",
        thai: "เครื่องสแกน",
        definition: "device that copies documents",
        examples: [
            {
                en: "Scan the document.",
                th: "สแกนเอกสาร"
            }
        ],
        hint: "copies documents",
        level: "A2",
        cats: ["technology", "work"]
    },
    {
        id: 1242,
        word: "speaker",
        pos: "n.",
        thai: "ลำโพง",
        definition: "device that makes sound",
        examples: [
            {
                en: "Turn up the speaker.",
                th: "เพิ่มเสียงลำโพง"
            }
        ],
        hint: "makes sound",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1243,
        word: "headphones",
        pos: "n.",
        thai: "หูฟัง",
        definition: "device worn on ears for sound",
        examples: [
            {
                en: "Use headphones for music.",
                th: "ใช้หูฟังฟังเพลง"
            }
        ],
        hint: "worn on ears",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1244,
        word: "cable",
        pos: "n.",
        thai: "สายเคเบิล",
        definition: "wire for connecting devices",
        examples: [
            {
                en: "Connect the cable.",
                th: "เชื่อมต่อสายเคเบิล"
            }
        ],
        hint: "wire for connecting",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1245,
        word: "battery",
        pos: "n.",
        thai: "แบตเตอรี่",
        definition: "device that stores electricity",
        examples: [
            {
                en: "Change the battery.",
                th: "เปลี่ยนแบตเตอรี่"
            }
        ],
        hint: "stores electricity",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1246,
        word: "charger",
        pos: "n.",
        thai: "เครื่องชาร์จ",
        definition: "device for charging batteries",
        examples: [
            {
                en: "Use the phone charger.",
                th: "ใช้เครื่องชาร์จโทรศัพท์"
            }
        ],
        hint: "charges batteries",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1247,
        word: "bakery",
        pos: "n.",
        thai: "ร้านขนมปัง",
        definition: "shop selling bread and cakes",
        examples: [
            {
                en: "Buy bread at the bakery.",
                th: "ซื้อขนมปังที่ร้านขนมปัง"
            }
        ],
        hint: "sells bread",
        level: "A2",
        cats: ["food", "shopping"]
    },
    {
        id: 1248,
        word: "cafeteria",
        pos: "n.",
        thai: "โรงอาหาร",
        definition: "self-service restaurant",
        examples: [
            {
                en: "Eat in the cafeteria.",
                th: "กินในโรงอาหาร"
            }
        ],
        hint: "self-service food",
        level: "A2",
        cats: ["food", "school"]
    },
    {
        id: 1249,
        word: "cookbook",
        pos: "n.",
        thai: "หนังสือทำอาหาร",
        definition: "book with cooking instructions",
        examples: [
            {
                en: "Read the cookbook.",
                th: "อ่านหนังสือทำอาหาร"
            }
        ],
        hint: "cooking instructions book",
        level: "A2",
        cats: ["food"]
    },
    {
        id: 1250,
        word: "freezer",
        pos: "n.",
        thai: "ตู้แช่แข็ง",
        definition: "very cold storage for food",
        examples: [
            {
                en: "Put ice cream in freezer.",
                th: "ใส่ไอศกรีมในตู้แช่แข็ง"
            }
        ],
        hint: "very cold storage",
        level: "A2",
        cats: ["home", "food"]
    },
    {
        id: 1251,
        word: "microwave",
        pos: "n.",
        thai: "ไมโครเวฟ",
        definition: "oven using radio waves",
        examples: [
            {
                en: "Heat food in microwave.",
                th: "อุ่นอาหารในไมโครเวฟ"
            }
        ],
        hint: "radio wave oven",
        level: "A2",
        cats: ["home", "food"]
    },
    {
        id: 1252,
        word: "refrigerator",
        pos: "n.",
        thai: "ตู้เย็น",
        definition: "cold storage for food",
        examples: [
            {
                en: "Keep milk in refrigerator.",
                th: "เก็บนมในตู้เย็น"
            }
        ],
        hint: "cold food storage",
        level: "A2",
        cats: ["home", "food"]
    },
    {
        id: 1253,
        word: "toaster",
        pos: "n.",
        thai: "เครื่องปิ้งขนมปัง",
        definition: "device for toasting bread",
        examples: [
            {
                en: "Use the toaster for bread.",
                th: "ใช้เครื่องปิ้งขนมปัง"
            }
        ],
        hint: "toasts bread",
        level: "A2",
        cats: ["home", "food"]
    },
    {
        id: 1254,
        word: "button",
        pos: "n.",
        thai: "กระดุม",
        definition: "small disc for fastening clothes",
        examples: [
            {
                en: "Sew on the button.",
                th: "เย็บกระดุม"
            }
        ],
        hint: "fastens clothes",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1255,
        word: "collar",
        pos: "n.",
        thai: "คอเสื้อ",
        definition: "part around neck of shirt",
        examples: [
            {
                en: "Turn up your collar.",
                th: "ยกคอเสื้อขึ้น"
            }
        ],
        hint: "around neck",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1256,
        word: "pocket",
        pos: "n.",
        thai: "กระเป๋า",
        definition: "small bag sewn into clothes",
        examples: [
            {
                en: "Put keys in your pocket.",
                th: "ใส่กุญแจในกระเป๋า"
            }
        ],
        hint: "small bag in clothes",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1257,
        word: "sleeve",
        pos: "n.",
        thai: "แขนเสื้อ",
        definition: "part covering arm",
        examples: [
            {
                en: "Roll up your sleeves.",
                th: "พับแขนเสื้อขึ้น"
            }
        ],
        hint: "covers arm",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1258,
        word: "zipper",
        pos: "n.",
        thai: "ซิป",
        definition: "fastener with interlocking teeth",
        examples: [
            {
                en: "Pull up the zipper.",
                th: "ดึงซิปขึ้น"
            }
        ],
        hint: "interlocking fastener",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1259,
        word: "sweater",
        pos: "n.",
        thai: "เสื้อสเวตเตอร์",
        definition: "warm knitted garment",
        examples: [
            {
                en: "Wear a sweater in winter.",
                th: "ใส่เสื้อสเวตเตอร์ในฤดูหนาว"
            }
        ],
        hint: "warm knitted garment",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1260,
        word: "scarf",
        pos: "n.",
        thai: "ผ้าพันคอ",
        definition: "long piece of cloth worn around neck",
        examples: [
            {
                en: "Wear a scarf to keep warm.",
                th: "พันผ้าพันคอให้อุ่น"
            }
        ],
        hint: "cloth around neck",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1261,
        word: "gloves",
        pos: "n.",
        thai: "ถุงมือ",
        definition: "coverings for hands",
        examples: [
            {
                en: "Wear gloves in cold weather.",
                th: "ใส่ถุงมือเมื่ออากาศหนาว"
            }
        ],
        hint: "hand coverings",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1262,
        word: "boots",
        pos: "n.",
        thai: "รองเท้าบูท",
        definition: "tall shoes covering ankle",
        examples: [
            {
                en: "Rain boots keep feet dry.",
                th: "รองเท้าบูทกันฝนทำให้เท้าแห้ง"
            }
        ],
        hint: "tall ankle shoes",
        level: "A2",
        cats: ["clothes"]
    },
    {
        id: 1263,
        word: "bandage",
        pos: "n.",
        thai: "ผ้าพันแผล",
        definition: "cloth for covering wounds",
        examples: [
            {
                en: "Put a bandage on the cut.",
                th: "พันผ้าพันแผลที่บาดแผล"
            }
        ],
        hint: "covers wounds",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1264,
        word: "nurse",
        pos: "n.",
        thai: "พยาบาล",
        definition: "person who cares for patients",
        examples: [
            {
                en: "The nurse is very kind.",
                th: "พยาบาลใจดีมาก"
            }
        ],
        hint: "cares for patients",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1265,
        word: "pharmacy",
        pos: "n.",
        thai: "ร้านขายยา",
        definition: "shop selling medicines",
        examples: [
            {
                en: "Buy medicine at pharmacy.",
                th: "ซื้อยาที่ร้านขายยา"
            }
        ],
        hint: "sells medicines",
        level: "A2",
        cats: ["health", "shopping"]
    },
    {
        id: 1266,
        word: "prescription",
        pos: "n.",
        thai: "ใบสั่งยา",
        definition: "doctor's order for medicine",
        examples: [
            {
                en: "Show your prescription.",
                th: "แสดงใบสั่งยา"
            }
        ],
        hint: "medicine order",
        level: "A2",
        cats: ["health"]
    },
    {
        id: 1267,
        word: "highway",
        pos: "n.",
        thai: "ทางหลวง",
        definition: "main road for fast traffic",
        examples: [
            {
                en: "Drive on the highway.",
                th: "ขับรถบนทางหลวง"
            }
        ],
        hint: "main fast road",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1268,
        word: "calculator",
        pos: "n.",
        thai: "เครื่องคิดเลข",
        definition: "device for mathematical calculations",
        examples: [
            {
                en: "Use calculator for math.",
                th: "ใช้เครื่องคิดเลขทำคณิต"
            }
        ],
        hint: "does calculations",
        level: "A2",
        cats: ["work", "school"]
    },
    {
        id: 1269,
        word: "document",
        pos: "n.",
        thai: "เอกสาร",
        definition: "written or printed paper",
        examples: [
            {
                en: "Sign the document.",
                th: "เซ็นเอกสาร"
            }
        ],
        hint: "written paper",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1270,
        word: "envelope",
        pos: "n.",
        thai: "ซอง",
        definition: "cover for letters",
        examples: [
            {
                en: "Put letter in envelope.",
                th: "ใส่จดหมายในซอง"
            }
        ],
        hint: "letter cover",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1271,
        word: "folder",
        pos: "n.",
        thai: "แฟ้ม",
        definition: "container for papers",
        examples: [
            {
                en: "Keep papers in folder.",
                th: "เก็บเอกสารในแฟ้ม"
            }
        ],
        hint: "paper container",
        level: "A2",
        cats: ["work", "school"]
    },
    {
        id: 1272,
        word: "notebook",
        pos: "n.",
        thai: "สมุดโน้ต",
        definition: "book for writing notes",
        examples: [
            {
                en: "Write in your notebook.",
                th: "เขียนในสมุดโน้ต"
            }
        ],
        hint: "book for notes",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1273,
        word: "ruler",
        pos: "n.",
        thai: "ไม้บรรทัด",
        definition: "tool for measuring length",
        examples: [
            {
                en: "Measure with a ruler.",
                th: "วัดด้วยไม้บรรทัด"
            }
        ],
        hint: "measures length",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1274,
        word: "stapler",
        pos: "n.",
        thai: "เครื่องเย็บกระดาษ",
        definition: "device for joining papers",
        examples: [
            {
                en: "Use stapler to join papers.",
                th: "ใช้เครื่องเย็บกระดาษ"
            }
        ],
        hint: "joins papers",
        level: "A2",
        cats: ["work", "school"]
    },
    {
        id: 1275,
        word: "alarm",
        pos: "n.",
        thai: "สัญญาณเตือน",
        definition: "warning sound or signal",
        examples: [
            {
                en: "The fire alarm is loud.",
                th: "สัญญาณเตือนไฟไหม้ดัง"
            }
        ],
        hint: "warning signal",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1276,
        word: "carpet",
        pos: "n.",
        thai: "พรม",
        definition: "thick floor covering",
        examples: [
            {
                en: "Clean the carpet.",
                th: "ทำความสะอาดพรม"
            }
        ],
        hint: "thick floor covering",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1277,
        word: "curtain",
        pos: "n.",
        thai: "ผ้าม่าน",
        definition: "cloth covering for windows",
        examples: [
            {
                en: "Close the curtains.",
                th: "ปิดผ้าม่าน"
            }
        ],
        hint: "window covering",
        level: "A2",
        cats: ["home"]
    },
    {
        id: 1278,
        word: "emergency",
        pos: "n.",
        thai: "เหตุฉุกเฉิน",
        definition: "sudden dangerous situation",
        examples: [
            {
                en: "Call 911 in emergency.",
                th: "โทร 911 เมื่อเหตุฉุกเฉิน"
            }
        ],
        hint: "sudden danger",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1279,
        word: "entrance",
        pos: "n.",
        thai: "ทางเข้า",
        definition: "way to enter a place",
        examples: [
            {
                en: "Use the main entrance.",
                th: "ใช้ทางเข้าหลัก"
            }
        ],
        hint: "way to enter",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1280,
        word: "exit",
        pos: "n.",
        thai: "ทางออก",
        definition: "way to leave a place",
        examples: [
            {
                en: "Find the emergency exit.",
                th: "หาทางออกฉุกเฉิน"
            }
        ],
        hint: "way to leave",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1281,
        word: "factory",
        pos: "n.",
        thai: "โรงงาน",
        definition: "building where goods are made",
        examples: [
            {
                en: "Work in a factory.",
                th: "ทำงานในโรงงาน"
            }
        ],
        hint: "makes goods",
        level: "A2",
        cats: ["work"]
    },
    {
        id: 1282,
        word: "invitation",
        pos: "n.",
        thai: "คำเชิญ",
        definition: "request to attend event",
        examples: [
            {
                en: "Send wedding invitations.",
                th: "ส่งคำเชิญงานแต่งงาน"
            }
        ],
        hint: "request to attend",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1283,
        word: "shadow",
        pos: "n.",
        thai: "เงา",
        definition: "dark area where light is blocked",
        examples: [
            {
                en: "Sit in the shadow.",
                th: "นั่งในเงา"
            }
        ],
        hint: "where light is blocked",
        level: "A2",
        cats: ["nature"]
    },
    {
        id: 1284,
        word: "volunteer",
        pos: "n.",
        thai: "อาสาสมัคร",
        definition: "person who helps without pay",
        examples: [
            {
                en: "Be a volunteer.",
                th: "เป็นอาสาสมัคร"
            }
        ],
        hint: "helps without pay",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1285,
        word: "wages",
        pos: "n.",
        thai: "ค่าจ้าง",
        definition: "money paid for work by hour or day",
        examples: [
            {
                en: "Receive weekly wages.",
                th: "รับค่าจ้างรายสัปดาห์"
            }
        ],
        hint: "money for hourly work",
        level: "A2",
        cats: ["work", "money"]
    },
    {
        id: 1286,
        word: "anniversary",
        pos: "n.",
        thai: "วันครบรอบ",
        definition: "yearly celebration of special date",
        examples: [
            {
                en: "Happy anniversary!",
                th: "สุขสันต์วันครบรอบ!"
            }
        ],
        hint: "yearly celebration",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1287,
        word: "atmosphere",
        pos: "n.",
        thai: "บรรยากาศ",
        definition: "feeling or mood of place",
        examples: [
            {
                en: "Nice atmosphere here.",
                th: "บรรยากาศดีที่นี่"
            }
        ],
        hint: "feeling of place",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1288,
        word: "character",
        pos: "n.",
        thai: "ตัวละคร",
        definition: "person in story or someone's personality",
        examples: [
            {
                en: "Main character in movie.",
                th: "ตัวละครเอกในหนัง"
            }
        ],
        hint: "person in story",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1289,
        word: "combination",
        pos: "n.",
        thai: "การรวมกัน",
        definition: "mixture of different things",
        examples: [
            {
                en: "Good combination of colors.",
                th: "การผสมผสานสีที่ดี"
            }
        ],
        hint: "mixture of things",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1290,
        word: "diamond",
        pos: "n.",
        thai: "เพชร",
        definition: "precious stone, very hard and bright",
        examples: [
            {
                en: "Diamond ring is expensive.",
                th: "แหวนเพชรแพง"
            }
        ],
        hint: "precious bright stone",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1291,
        word: "electricity",
        pos: "n.",
        thai: "ไฟฟ้า",
        definition: "form of energy for lights and machines",
        examples: [
            {
                en: "No electricity in storm.",
                th: "ไม่มีไฟฟ้าเมื่อพายุ"
            }
        ],
        hint: "energy for lights",
        level: "A2",
        cats: ["technology"]
    },
    {
        id: 1292,
        word: "generation",
        pos: "n.",
        thai: "รุ่น",
        definition: "people born around same time",
        examples: [
            {
                en: "Younger generation uses phones.",
                th: "คนรุ่นใหม่ใช้โทรศัพท์"
            }
        ],
        hint: "people born same time",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1293,
        word: "imagination",
        pos: "n.",
        thai: "จินตนาการ",
        definition: "ability to create ideas in mind",
        examples: [
            {
                en: "Use your imagination.",
                th: "ใช้จินตนาการของคุณ"
            }
        ],
        hint: "creates ideas in mind",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1294,
        word: "independence",
        pos: "n.",
        thai: "ความเป็นอิสระ",
        definition: "freedom from control by others",
        examples: [
            {
                en: "Celebrate independence day.",
                th: "ฉลองวันเอกราช"
            }
        ],
        hint: "freedom from control",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1295,
        word: "instruction",
        pos: "n.",
        thai: "คำสั่ง",
        definition: "detailed information about how to do something",
        examples: [
            {
                en: "Follow the instructions.",
                th: "ทำตามคำสั่ง"
            }
        ],
        hint: "how to do something",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1296,
        word: "population",
        pos: "n.",
        thai: "ประชากร",
        definition: "number of people living in area",
        examples: [
            {
                en: "City population is growing.",
                th: "ประชากรเมืองเพิ่มขึ้น"
            }
        ],
        hint: "people in area",
        level: "A2",
        cats: ["social"]
    },
    {
        id: 1297,
        word: "recommendation",
        pos: "n.",
        thai: "คำแนะนำ",
        definition: "suggestion about what is good",
        examples: [
            {
                en: "Doctor's recommendation is rest.",
                th: "คำแนะนำของหมอคือพักผ่อน"
            }
        ],
        hint: "suggestion about good",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1298,
        word: "transportation",
        pos: "n.",
        thai: "การขนส่ง",
        definition: "system of moving people or goods",
        examples: [
            {
                en: "Public transportation is cheap.",
                th: "การขนส่งสาธารณะถูก"
            }
        ],
        hint: "moving people or goods",
        level: "A2",
        cats: ["travel"]
    },
    {
        id: 1299,
        word: "alphabet",
        pos: "n.",
        thai: "ตัวอักษร",
        definition: "set of letters used in writing",
        examples: [
            {
                en: "Learn the English alphabet.",
                th: "เรียนตัวอักษรภาษาอังกฤษ"
            }
        ],
        hint: "set of letters",
        level: "A2",
        cats: ["school"]
    },
    {
        id: 1300,
        word: "category",
        pos: "n.",
        thai: "หมวดหมู่",
        definition: "group of similar things",
        examples: [
            {
                en: "Put books in same category.",
                th: "จัดหนังสือในหมวดหมู่เดียวกัน"
            }
        ],
        hint: "group of similar things",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1301,
        word: "definitely",
        pos: "adv.",
        thai: "อย่างแน่นอน",
        definition: "without any doubt",
        examples: [
            {
                en: "I will definitely come.",
                th: "ฉันจะมาอย่างแน่นอน"
            }
        ],
        hint: "without doubt",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1302,
        word: "especially",
        pos: "adv.",
        thai: "โดยเฉพาะ",
        definition: "more than usual",
        examples: [
            {
                en: "I like fruit, especially apples.",
                th: "ฉันชอบผลไม้ โดยเฉพาะแอปเปิล"
            }
        ],
        hint: "more than usual",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1303,
        word: "frequently",
        pos: "adv.",
        thai: "บ่อยครั้ง",
        definition: "happening often",
        examples: [
            {
                en: "He visits frequently.",
                th: "เขามาเยี่ยมบ่อยครั้ง"
            }
        ],
        hint: "happening often",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1304,
        word: "gradually",
        pos: "adv.",
        thai: "ทีละน้อย",
        definition: "slowly over time",
        examples: [
            {
                en: "Prices rise gradually.",
                th: "ราคาขึ้นทีละน้อย"
            }
        ],
        hint: "slowly over time",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1305,
        word: "immediately",
        pos: "adv.",
        thai: "ทันที",
        definition: "right now without delay",
        examples: [
            {
                en: "Come here immediately.",
                th: "มาที่นี่ทันที"
            }
        ],
        hint: "right now",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1306,
        word: "rhythm",
        pos: "n.",
        thai: "จังหวะ",
        definition: "regular pattern of sounds in music",
        examples: [
            {
                en: "Dance to the rhythm.",
                th: "เต้นรำตามจังหวะ"
            }
        ],
        hint: "pattern of sounds",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1307,
        word: "timeline",
        pos: "n.",
        thai: "เส้นเวลา",
        definition: "sequence of events in time order",
        examples: [
            {
                en: "Create a timeline of events.",
                th: "สร้างเส้นเวลาของเหตุการณ์"
            }
        ],
        hint: "events in time order",
        level: "A2",
        cats: ["daily"]
    },
    {
        id: 1308,
        word: "flexibility",
        pos: "n.",
        thai: "ความยืดหยุ่น",
        definition: "ability to change and adapt",
        examples: [
            {
                en: "The job requires flexibility in working hours.",
                th: "งานนี้ต้องการความยืดหยุ่นในเวลาทำงาน"
            }
        ],
        hint: "ability to adapt",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1309,
        word: "management",
        pos: "n.",
        thai: "การจัดการ",
        definition: "process of controlling and organizing",
        examples: [
            {
                en: "Good time management is essential.",
                th: "การจัดการเวลาที่ดีเป็นสิ่งสำคัญ"
            }
        ],
        hint: "controlling and organizing",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1310,
        word: "negotiate",
        pos: "v.",
        thai: "เจรจาต่อรอง",
        definition: "discuss to reach agreement",
        examples: [
            {
                en: "We need to negotiate the contract terms.",
                th: "เราต้องเจรจาเงื่อนไขสัญญา"
            }
        ],
        hint: "discuss for agreement",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1311,
        word: "procedure",
        pos: "n.",
        thai: "ขั้นตอน",
        definition: "series of actions done in order",
        examples: [
            {
                en: "Follow the safety procedure carefully.",
                th: "ปฏิบัติตามขั้นตอนความปลอดภัยอย่างระมัดระวัง"
            }
        ],
        hint: "series of ordered actions",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1312,
        word: "requirement",
        pos: "n.",
        thai: "ข้อกำหนด",
        definition: "something that is needed or demanded",
        examples: [
            {
                en: "Meeting deadlines is a job requirement.",
                th: "การตรงต่อเวลาเป็นข้อกำหนดของงาน"
            }
        ],
        hint: "something needed",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1313,
        word: "supervisor",
        pos: "n.",
        thai: "หัวหน้างาน",
        definition: "person who manages other workers",
        examples: [
            {
                en: "Report the problem to your supervisor.",
                th: "รายงานปัญหาให้หัวหน้างาน"
            }
        ],
        hint: "manages other workers",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1314,
        word: "teamwork",
        pos: "n.",
        thai: "การทำงานเป็นทีม",
        definition: "working together as group",
        examples: [
            {
                en: "Good teamwork leads to success.",
                th: "การทำงานเป็นทีมที่ดีนำไปสู่ความสำเร็จ"
            }
        ],
        hint: "working as group",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1315,
        word: "workplace",
        pos: "n.",
        thai: "สถานที่ทำงาน",
        definition: "place where people work",
        examples: [
            {
                en: "Keep the workplace clean and safe.",
                th: "รักษาสถานที่ทำงานให้สะอาดและปลอดภัย"
            }
        ],
        hint: "place where people work",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1316,
        word: "ambitious",
        pos: "adj.",
        thai: "มีความใฝ่ฝัน",
        definition: "having strong desire to succeed",
        examples: [
            {
                en: "She is ambitious about her career.",
                th: "เธอมีความใฝ่ฝันเกี่ยวกับอาชีพ"
            }
        ],
        hint: "desires to succeed",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1317,
        word: "committed",
        pos: "adj.",
        thai: "มุ่งมั่น",
        definition: "dedicated to doing something",
        examples: [
            {
                en: "He is committed to improving quality.",
                th: "เขามุ่งมั่นที่จะปรับปรุงคุณภาพ"
            }
        ],
        hint: "dedicated to doing",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1318,
        word: "delegate",
        pos: "v.",
        thai: "มอบหมาย",
        definition: "give responsibility to someone else",
        examples: [
            {
                en: "Manager should delegate tasks effectively.",
                th: "ผู้จัดการควรมอบหมายงานอย่างมีประสิทธิภาพ"
            }
        ],
        hint: "give responsibility to others",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1319,
        word: "initiative",
        pos: "n.",
        thai: "ความคิดริเริ่ม",
        definition: "ability to act independently",
        examples: [
            {
                en: "She showed great initiative.",
                th: "เธอแสดงความคิดริเริ่มได้ดีมาก"
            }
        ],
        hint: "acts independently",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1320,
        word: "productive",
        pos: "adj.",
        thai: "มีผลผลิต",
        definition: "achieving good results",
        examples: [
            {
                en: "We had a productive meeting.",
                th: "เรามีการประชุมที่มีผลผลิต"
            }
        ],
        hint: "achieving good results",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1321,
        word: "professional",
        pos: "adj.",
        thai: "เป็นมืออาชีพ",
        definition: "relating to skilled work",
        examples: [
            {
                en: "Maintain professional behavior at work.",
                th: "รักษาพฤติกรรมที่เป็นมืออาชีพในที่ทำงาน"
            }
        ],
        hint: "relating to skilled work",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1322,
        word: "resignation",
        pos: "n.",
        thai: "การลาออก",
        definition: "formally leaving a job",
        examples: [
            {
                en: "She submitted her resignation letter.",
                th: "เธอยื่นใบลาออก"
            }
        ],
        hint: "formally leaving job",
        level: "B1",
        cats: ["work"]
    },
    {
        id: 1323,
        word: "academic",
        pos: "adj.",
        thai: "ทางวิชาการ",
        definition: "relating to education and study",
        examples: [
            {
                en: "Her academic performance is excellent.",
                th: "ผลการเรียนทางวิชาการของเธอยอดเยี่ยม"
            }
        ],
        hint: "relating to education",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1324,
        word: "assignment",
        pos: "n.",
        thai: "งานที่ได้รับมอบหมาย",
        definition: "piece of work given to student",
        examples: [
            {
                en: "The assignment is due next Monday.",
                th: "งานที่ได้รับมอบหมายต้องส่งวันจันทร์หน้า"
            }
        ],
        hint: "work given to student",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1325,
        word: "concentration",
        pos: "n.",
        thai: "สมาธิ",
        definition: "focusing attention on something",
        examples: [
            {
                en: "Good concentration helps you study better.",
                th: "สมาธิที่ดีช่วยให้เรียนได้ดีขึ้น"
            }
        ],
        hint: "focusing attention",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1326,
        word: "curriculum",
        pos: "n.",
        thai: "หลักสูตร",
        definition: "subjects taught in school",
        examples: [
            {
                en: "The curriculum includes science and math.",
                th: "หลักสูตรรวมวิทยาศาสตร์และคณิตศาสตร์"
            }
        ],
        hint: "subjects taught",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1327,
        word: "dissertation",
        pos: "n.",
        thai: "วิทยานิพนธ์",
        definition: "long essay for degree",
        examples: [
            {
                en: "She's writing her master's dissertation.",
                th: "เธอกำลังเขียนวิทยานิพนธ์ปริญญาโท"
            }
        ],
        hint: "long essay for degree",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1328,
        word: "enrollment",
        pos: "n.",
        thai: "การลงทะเบียน",
        definition: "process of joining school",
        examples: [
            {
                en: "Enrollment for new semester starts Monday.",
                th: "การลงทะเบียนภาคเรียนใหม่เริ่มวันจันทร์"
            }
        ],
        hint: "joining school process",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1329,
        word: "faculty",
        pos: "n.",
        thai: "คณาจารย์",
        definition: "teaching staff at university",
        examples: [
            {
                en: "The faculty meeting is at 3 PM.",
                th: "ประชุมคณาจารย์เวลา 15.00 น."
            }
        ],
        hint: "university teaching staff",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1330,
        word: "graduation",
        pos: "n.",
        thai: "การสำเร็จการศึกษา",
        definition: "completion of studies",
        examples: [
            {
                en: "Graduation ceremony is in June.",
                th: "พิธีสำเร็จการศึกษาในเดือนมิถุนายน"
            }
        ],
        hint: "completion of studies",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1331,
        word: "lecture",
        pos: "n.",
        thai: "การบรรยาย",
        definition: "educational talk to students",
        examples: [
            {
                en: "Professor gives lecture on history.",
                th: "ศาสตราจารย์บรรยายเรื่องประวัติศาสตร์"
            }
        ],
        hint: "educational talk",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1332,
        word: "participant",
        pos: "n.",
        thai: "ผู้เข้าร่วม",
        definition: "person who takes part",
        examples: [
            {
                en: "All participants received certificates.",
                th: "ผู้เข้าร่วมทุกคนได้รับใบประกาศ"
            }
        ],
        hint: "person who takes part",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1333,
        word: "scholarship",
        pos: "n.",
        thai: "ทุนการศึกษา",
        definition: "money to help pay for education",
        examples: [
            {
                en: "She won a scholarship to university.",
                th: "เธอได้ทุนการศึกษาเข้ามหาวิทยาลัย"
            }
        ],
        hint: "money for education",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1334,
        word: "semester",
        pos: "n.",
        thai: "ภาคเรียน",
        definition: "half of academic year",
        examples: [
            {
                en: "Second semester starts in January.",
                th: "ภาคเรียนที่สองเริ่มเดือนมกราคม"
            }
        ],
        hint: "half of academic year",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1335,
        word: "supervision",
        pos: "n.",
        thai: "การควบคุมดูแล",
        definition: "watching and guiding work",
        examples: [
            {
                en: "Students need supervision in laboratory.",
                th: "นักเรียนต้องการการควบคุมดูแลในห้องปฏิบัติการ"
            }
        ],
        hint: "watching and guiding",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1336,
        word: "syllabus",
        pos: "n.",
        thai: "หลักสูตรรายวิชา",
        definition: "list of topics to be covered",
        examples: [
            {
                en: "Check the syllabus for exam topics.",
                th: "ตรวจสอบหลักสูตรรายวิชาสำหรับหัวข้อสอบ"
            }
        ],
        hint: "list of topics",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1337,
        word: "tutorial",
        pos: "n.",
        thai: "การสอนพิเศษ",
        definition: "individual or small group teaching",
        examples: [
            {
                en: "Math tutorial helps struggling students.",
                th: "การสอนคณิตศาสตร์พิเศษช่วยนักเรียนที่มีปัญหา"
            }
        ],
        hint: "individual teaching",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1338,
        word: "undergraduate",
        pos: "n.",
        thai: "นักศึกษาปริญญาตรี",
        definition: "student studying for first degree",
        examples: [
            {
                en: "Undergraduate programs last four years.",
                th: "หลักสูตรปริญญาตรีใช้เวลาสี่ปี"
            }
        ],
        hint: "first degree student",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1339,
        word: "workshop",
        pos: "n.",
        thai: "การประชุมเชิงปฏิบัติการ",
        definition: "practical training session",
        examples: [
            {
                en: "Writing workshop improves skills.",
                th: "การประชุมเชิงปฏิบัติการเขียนปรับปรุงทักษะ"
            }
        ],
        hint: "practical training",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1340,
        word: "bibliography",
        pos: "n.",
        thai: "บรรณานุกรม",
        definition: "list of books used in research",
        examples: [
            {
                en: "Include bibliography at essay end.",
                th: "ใส่บรรณานุกรมท้ายเรียงความ"
            }
        ],
        hint: "list of research books",
        level: "B1",
        cats: ["school"]
    },
    {
        id: 1341,
        word: "apologize",
        pos: "v.",
        thai: "ขอโทษ",
        definition: "say sorry for doing wrong",
        examples: [
            {
                en: "I apologize for being late.",
                th: "ฉันขอโทษที่มาสาย"
            }
        ],
        hint: "say sorry",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1342,
        word: "criticism",
        pos: "n.",
        thai: "การวิจารณ์",
        definition: "pointing out faults or problems",
        examples: [
            {
                en: "Constructive criticism helps improvement.",
                th: "การวิจารณ์เชิงสร้างสรรค์ช่วยปรับปรุง"
            }
        ],
        hint: "pointing out faults",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1343,
        word: "impression",
        pos: "n.",
        thai: "ความประทับใจ",
        definition: "feeling about someone or something",
        examples: [
            {
                en: "First impression is very important.",
                th: "ความประทับใจครั้งแรกสำคัญมาก"
            }
        ],
        hint: "feeling about someone",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1344,
        word: "misunderstanding",
        pos: "n.",
        thai: "ความเข้าใจผิด",
        definition: "wrong interpretation of meaning",
        examples: [
            {
                en: "There was misunderstanding about time.",
                th: "มีความเข้าใจผิดเรื่องเวลา"
            }
        ],
        hint: "wrong interpretation",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1345,
        word: "persuade",
        pos: "v.",
        thai: "ชักจูง",
        definition: "convince someone to do something",
        examples: [
            {
                en: "She persuaded him to study abroad.",
                th: "เธอชักจูงให้เขาไปเรียนต่อต่างประเทศ"
            }
        ],
        hint: "convince to do",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1346,
        word: "reputation",
        pos: "n.",
        thai: "ชื่อเสียง",
        definition: "what people think about someone",
        examples: [
            {
                en: "Company has excellent reputation.",
                th: "บริษัทมีชื่อเสียงดีเยี่ยม"
            }
        ],
        hint: "what people think",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1347,
        word: "rumor",
        pos: "n.",
        thai: "ข่าวลือ",
        definition: "story that may not be true",
        examples: [
            {
                en: "Don't believe every rumor you hear.",
                th: "อย่าเชื่อข่าวลือทุกอย่างที่ได้ยิน"
            }
        ],
        hint: "story maybe not true",
        level: "B1",
        cats: ["social"]
    },
    {
        id: 1348,
        word: "chronic",
        pos: "adj.",
        thai: "เรื้อรัง",
        definition: "lasting for long time",
        examples: [
            {
                en: "Chronic pain needs special treatment.",
                th: "อาการปวดเรื้อรังต้องการการรักษาพิเศษ"
            }
        ],
        hint: "lasting long time",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1349,
        word: "consultation",
        pos: "n.",
        thai: "การปรึกษาหารือ",
        definition: "meeting to get professional advice",
        examples: [
            {
                en: "Medical consultation revealed no problems.",
                th: "การปรึกษาหารือทางการแพทย์ไม่พบปัญหา"
            }
        ],
        hint: "meeting for advice",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1350,
        word: "diagnosis",
        pos: "n.",
        thai: "การวินิจฉัยโรค",
        definition: "identifying illness or problem",
        examples: [
            {
                en: "Early diagnosis improves treatment.",
                th: "การวินิจฉัยโรคเร็วปรับปรุงการรักษา"
            }
        ],
        hint: "identifying illness",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1351,
        word: "fatigue",
        pos: "n.",
        thai: "ความเหนื่อยล้า",
        definition: "extreme tiredness",
        examples: [
            {
                en: "Mental fatigue affects concentration.",
                th: "ความเหนื่อยล้าทางจิตใจส่งผลต่อสมาธิ"
            }
        ],
        hint: "extreme tiredness",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1352,
        word: "hygiene",
        pos: "n.",
        thai: "สุขอนามัย",
        definition: "practices for staying clean",
        examples: [
            {
                en: "Good hygiene prevents disease.",
                th: "สุขอนามัยที่ดีป้องกันโรค"
            }
        ],
        hint: "staying clean practices",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1353,
        word: "immunity",
        pos: "n.",
        thai: "ภูมิคุ้มกัน",
        definition: "body's ability to resist disease",
        examples: [
            {
                en: "Vitamins boost your immunity.",
                th: "วิตามินเสริมภูมิคุ้มกัน"
            }
        ],
        hint: "resist disease ability",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1354,
        word: "infection",
        pos: "n.",
        thai: "การติดเชื้อ",
        definition: "disease caused by germs",
        examples: [
            {
                en: "Wash hands to prevent infection.",
                th: "ล้างมือเพื่อป้องกันการติดเชื้อ"
            }
        ],
        hint: "disease from germs",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1355,
        word: "insomnia",
        pos: "n.",
        thai: "อาการนอนไม่หลับ",
        definition: "inability to sleep well",
        examples: [
            {
                en: "Stress can cause insomnia.",
                th: "ความเครียดอาจทำให้นอนไม่หลับ"
            }
        ],
        hint: "cannot sleep well",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1356,
        word: "rehabilitation",
        pos: "n.",
        thai: "การฟื้นฟู",
        definition: "treatment to restore function",
        examples: [
            {
                en: "Physical rehabilitation helps athletes.",
                th: "การฟื้นฟูร่างกายช่วยนักกีฬา"
            }
        ],
        hint: "restore function treatment",
        level: "B1",
        cats: ["health"]
    },
    {
        id: 1357,
        word: "bandwidth",
        pos: "n.",
        thai: "แบนด์วิดท์",
        definition: "amount of data that can be transmitted",
        examples: [
            {
                en: "High bandwidth enables fast internet.",
                th: "แบนด์วิดท์สูงทำให้อินเทอร์เน็ตเร็ว"
            }
        ],
        hint: "data transmission amount",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1358,
        word: "encryption",
        pos: "n.",
        thai: "การเข้ารหัส",
        definition: "protecting data by coding",
        examples: [
            {
                en: "Encryption keeps information secure.",
                th: "การเข้ารหัสทำให้ข้อมูลปลอดภัย"
            }
        ],
        hint: "protecting by coding",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1359,
        word: "firewall",
        pos: "n.",
        thai: "ไฟร์วอลล์",
        definition: "security system for networks",
        examples: [
            {
                en: "Firewall blocks malicious attacks.",
                th: "ไฟร์วอลล์ป้องกันการโจมตีที่เป็นอันตราย"
            }
        ],
        hint: "network security system",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1360,
        word: "graphics",
        pos: "n.",
        thai: "กราฟิก",
        definition: "visual images on computer",
        examples: [
            {
                en: "Game graphics are very realistic.",
                th: "กราฟิกของเกมสมจริงมาก"
            }
        ],
        hint: "computer visual images",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1361,
        word: "hardware",
        pos: "n.",
        thai: "ฮาร์ดแวร์",
        definition: "physical parts of computer",
        examples: [
            {
                en: "Computer hardware needs regular maintenance.",
                th: "ฮาร์ดแวร์คอมพิวเตอร์ต้องการการบำรุงรักษาสม่ำเสมอ"
            }
        ],
        hint: "physical computer parts",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1362,
        word: "interface",
        pos: "n.",
        thai: "ส่วนต่อประสาน",
        definition: "connection between user and system",
        examples: [
            {
                en: "User interface should be intuitive.",
                th: "ส่วนต่อประสานผู้ใช้ควรใช้งานง่าย"
            }
        ],
        hint: "user system connection",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1363,
        word: "maintenance",
        pos: "n.",
        thai: "การบำรุงรักษา",
        definition: "keeping equipment in good condition",
        examples: [
            {
                en: "Regular maintenance prevents problems.",
                th: "การบำรุงรักษาสม่ำเสมอป้องกันปัญหา"
            }
        ],
        hint: "keeping good condition",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1364,
        word: "processing",
        pos: "n.",
        thai: "การประมวลผล",
        definition: "handling data or information",
        examples: [
            {
                en: "Data processing takes several minutes.",
                th: "การประมวลผลข้อมูลใช้เวลาหลายนาที"
            }
        ],
        hint: "handling data",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1365,
        word: "storage",
        pos: "n.",
        thai: "การจัดเก็บ",
        definition: "keeping data in computer memory",
        examples: [
            {
                en: "Cloud storage saves space.",
                th: "การจัดเก็บบนคลาวด์ประหยัดพื้นที่"
            }
        ],
        hint: "keeping data memory",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1366,
        word: "upgrade",
        pos: "v.",
        thai: "อัพเกรด",
        definition: "improve to better version",
        examples: [
            {
                en: "Upgrade your phone for better features.",
                th: "อัพเกรดโทรศัพท์เพื่อฟีเจอร์ที่ดีกว่า"
            }
        ],
        hint: "improve to better",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1367,
        word: "virus",
        pos: "n.",
        thai: "ไวรัส",
        definition: "harmful computer program",
        examples: [
            {
                en: "Antivirus software protects computers.",
                th: "ซอฟต์แวร์ป้องกันไวรัสปกป้องคอมพิวเตอร์"
            }
        ],
        hint: "harmful computer program",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1368,
        word: "wireless",
        pos: "adj.",
        thai: "ไร้สาย",
        definition: "using radio signals instead of wires",
        examples: [
            {
                en: "Wireless internet is convenient.",
                th: "อินเทอร์เน็ตไร้สายสะดวก"
            }
        ],
        hint: "using radio signals",
        level: "B1",
        cats: ["technology"]
    },
    {
        id: 1369,
        word: "excursion",
        pos: "n.",
        thai: "การท่องเที่ยวระยะสั้น",
        definition: "short journey for pleasure",
        examples: [
            {
                en: "School excursion to museum.",
                th: "การท่องเที่ยวระยะสั้นของโรงเรียนไปพิพิธภัณฑ์"
            }
        ],
        hint: "short pleasure journey",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1370,
        word: "expedition",
        pos: "n.",
        thai: "การสำรวจ",
        definition: "journey for specific purpose",
        examples: [
            {
                en: "Scientific expedition to Antarctica.",
                th: "การสำรวจทางวิทยาศาสตร์ไปแอนตาร์กติกา"
            }
        ],
        hint: "purpose journey",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1371,
        word: "exploration",
        pos: "n.",
        thai: "การสำรวจ",
        definition: "investigating unknown areas",
        examples: [
            {
                en: "Space exploration fascinates scientists.",
                th: "การสำรวจอวกาศทำให้นักวิทยาศาสตร์หลงใหล"
            }
        ],
        hint: "investigating unknown",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1372,
        word: "guidebook",
        pos: "n.",
        thai: "คู่มือท่องเที่ยว",
        definition: "book with travel information",
        examples: [
            {
                en: "Guidebook helps plan itinerary.",
                th: "คู่มือท่องเที่ยวช่วยวางแผนเส้นทาง"
            }
        ],
        hint: "travel information book",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1373,
        word: "hospitality",
        pos: "n.",
        thai: "การต้อนรับ",
        definition: "friendly treatment of guests",
        examples: [
            {
                en: "Thai hospitality is world famous.",
                th: "การต้อนรับของไทยมีชื่อเสียงระดับโลก"
            }
        ],
        hint: "friendly guest treatment",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1374,
        word: "immigration",
        pos: "n.",
        thai: "การตรวจคนเข้าเมือง",
        definition: "control of people entering country",
        examples: [
            {
                en: "Immigration officer checks passports.",
                th: "เจ้าหน้าที่ตรวจคนเข้าเมืองตรวจหนังสือเดินทาง"
            }
        ],
        hint: "entering country control",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1375,
        word: "landmark",
        pos: "n.",
        thai: "สถานที่สำคัญ",
        definition: "important or recognizable location",
        examples: [
            {
                en: "Eiffel Tower is famous landmark.",
                th: "หอไอเฟลเป็นสถานที่สำคัญที่มีชื่อเสียง"
            }
        ],
        hint: "important recognizable place",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1376,
        word: "recreation",
        pos: "n.",
        thai: "การพักผ่อนหย่อนใจ",
        definition: "enjoyable activities for relaxation",
        examples: [
            {
                en: "Beach offers many recreation activities.",
                th: "ชายหาดมีกิจกรรมพักผ่อนหย่อนใจมากมาย"
            }
        ],
        hint: "relaxation activities",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1377,
        word: "tourism",
        pos: "n.",
        thai: "การท่องเที่ยว",
        definition: "business of providing services to travelers",
        examples: [
            {
                en: "Tourism supports local economy.",
                th: "การท่องเที่ยวสนับสนุนเศรษฐกิจท้องถิ่น"
            }
        ],
        hint: "traveler services business",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1378,
        word: "voyage",
        pos: "n.",
        thai: "การเดินทางทางเรือ",
        definition: "long journey by sea",
        examples: [
            {
                en: "Ocean voyage takes several days.",
                th: "การเดินทางทางเรือในมหาสมุทรใช้เวลาหลายวัน"
            }
        ],
        hint: "long sea journey",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1379,
        word: "wilderness",
        pos: "n.",
        thai: "ถิ่นทุรกันดาร",
        definition: "wild natural area",
        examples: [
            {
                en: "Camping in wilderness requires preparation.",
                th: "การตั้งแคมป์ในถิ่นทุรกันดารต้องการการเตรียมตัว"
            }
        ],
        hint: "wild natural area",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1380,
        word: "backpacking",
        pos: "n.",
        thai: "การเดินทางแบบแบ็คแพ็ค",
        definition: "traveling with everything in backpack",
        examples: [
            {
                en: "Backpacking across Europe is popular.",
                th: "การเดินทางแบบแบ็คแพ็คข้ามยุโรปเป็นที่นิยม"
            }
        ],
        hint: "traveling with backpack",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1381,
        word: "cruise",
        pos: "n.",
        thai: "การล่องเรือสำราญ",
        definition: "pleasure trip by ship",
        examples: [
            {
                en: "Mediterranean cruise includes several ports.",
                th: "การล่องเรือสำราญในเมดิเตอร์เรเนียนรวมท่าเรือหลายแห่ง"
            }
        ],
        hint: "pleasure ship trip",
        level: "B1",
        cats: ["travel"]
    },
    {
        id: 1382,
        word: "emission",
        pos: "n.",
        thai: "การปล่อยก๊าซ",
        definition: "releasing gases into air",
        examples: [
            {
                en: "Car emissions pollute atmosphere.",
                th: "การปล่อยก๊าซจากรถยนต์ทำลายบรรยากาศ"
            }
        ],
        hint: "releasing gases",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1383,
        word: "greenhouse",
        pos: "n.",
        thai: "เรือนกระจก",
        definition: "building for growing plants",
        examples: [
            {
                en: "Greenhouse extends growing season.",
                th: "เรือนกระจกขยายฤดูปลูก"
            }
        ],
        hint: "plant growing building",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1384,
        word: "habitat",
        pos: "n.",
        thai: "ถิ่นที่อยู่",
        definition: "natural home of animals",
        examples: [
            {
                en: "Destroy habitat threatens wildlife.",
                th: "การทำลายถิ่นที่อยู่คุกคามสัตว์ป่า"
            }
        ],
        hint: "animals natural home",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1385,
        word: "irrigation",
        pos: "n.",
        thai: "การชลประทาน",
        definition: "supplying water to crops",
        examples: [
            {
                en: "Irrigation system waters farmland.",
                th: "ระบบชลประทานให้น้ำแก่พื้นที่เกษตร"
            }
        ],
        hint: "supplying crop water",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1386,
        word: "landscape",
        pos: "n.",
        thai: "ภูมิทัศน์",
        definition: "visible features of area",
        examples: [
            {
                en: "Mountain landscape is breathtaking.",
                th: "ภูมิทัศน์ภูเขาสวยงามมาก"
            }
        ],
        hint: "visible area features",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1387,
        word: "mineral",
        pos: "n.",
        thai: "แร่ธาตุ",
        definition: "natural substance from earth",
        examples: [
            {
                en: "Iron is important mineral.",
                th: "เหล็กเป็นแร่ธาตุที่สำคัญ"
            }
        ],
        hint: "natural earth substance",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1388,
        word: "organism",
        pos: "n.",
        thai: "สิ่งมีชีวิต",
        definition: "individual living thing",
        examples: [
            {
                en: "Microscopic organisms live everywhere.",
                th: "สิ่งมีชีวิตกล้องจุลทรรศน์อยู่ทุกที่"
            }
        ],
        hint: "individual living thing",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1389,
        word: "preserve",
        pos: "v.",
        thai: "อนุรักษ์",
        definition: "keep in original state",
        examples: [
            {
                en: "National park preserves wildlife.",
                th: "อุทยานแห่งชาติอนุรักษ์สัตว์ป่า"
            }
        ],
        hint: "keep original state",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1390,
        word: "resource",
        pos: "n.",
        thai: "ทรัพยากร",
        definition: "useful materials from nature",
        examples: [
            {
                en: "Water is precious natural resource.",
                th: "น้ำเป็นทรัพยากรธรรมชาติที่มีค่า"
            }
        ],
        hint: "useful natural materials",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1391,
        word: "vegetation",
        pos: "n.",
        thai: "พืชพรรณ",
        definition: "plants growing in area",
        examples: [
            {
                en: "Desert vegetation adapts to drought.",
                th: "พืชพรรณในทะเลทรายปรับตัวกับภัยแล้ง"
            }
        ],
        hint: "plants in area",
        level: "B1",
        cats: ["nature"]
    },
    {
        id: 1392,
        word: "accomplishment",
        pos: "n.",
        thai: "ความสำเร็จ",
        definition: "successfully completed task",
        examples: [
            {
                en: "Graduation is major accomplishment.",
                th: "การสำเร็จการศึกษาเป็นความสำเร็จครั้งสำคัญ"
            }
        ],
        hint: "successfully completed task",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1393,
        word: "determination",
        pos: "n.",
        thai: "ความมุ่งมั่น",
        definition: "firm decision to achieve goal",
        examples: [
            {
                en: "Success requires determination.",
                th: "ความสำเร็จต้องการความมุ่งมั่น"
            }
        ],
        hint: "firm decision to achieve",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1394,
        word: "discipline",
        pos: "n.",
        thai: "วินัย",
        definition: "training to improve behavior",
        examples: [
            {
                en: "Self-discipline helps achieve goals.",
                th: "วินัยในตนเองช่วยให้บรรลุเป้าหมาย"
            }
        ],
        hint: "training to improve",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1395,
        word: "enthusiasm",
        pos: "n.",
        thai: "ความกระตือรือร้น",
        definition: "intense excitement about something",
        examples: [
            {
                en: "Teacher's enthusiasm inspires students.",
                th: "ความกระตือรือร้นของครูสร้างแรงบันดาลใจให้นักเรียน"
            }
        ],
        hint: "intense excitement",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1396,
        word: "patience",
        pos: "n.",
        thai: "ความอดทน",
        definition: "ability to wait calmly",
        examples: [
            {
                en: "Learning language requires patience.",
                th: "การเรียนภาษาต้องการความอดทน"
            }
        ],
        hint: "ability to wait calmly",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1397,
        word: "willpower",
        pos: "n.",
        thai: "พลังจิตใจ",
        definition: "strength to control behavior",
        examples: [
            {
                en: "Strong willpower helps resist temptation.",
                th: "พลังจิตใจที่แข็งแกร่งช่วยต้านทานการล่อลวง"
            }
        ],
        hint: "strength to control",
        level: "B1",
        cats: ["daily"]
    },
    {
        id: 1398,
        word: "ask",
        pos: "v.",
        thai: "ถาม",
        definition: "to say something to get information",
        hint: "request information",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Can I ask you something?",
                th: "ขอถามอะไรหน่อยได้ไหม"
            }
        ]
    },
    {
        id: 1399,
        word: "begin",
        pos: "v.",
        thai: "เริ่ม",
        definition: "to start doing something",
        hint: "start something",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Let's begin the meeting.",
                th: "มาเริ่มประชุมกันเถอะ"
            }
        ]
    },
    {
        id: 1400,
        word: "call",
        pos: "v.",
        thai: "โทร, เรียก",
        definition: "to telephone someone or say loudly",
        hint: "phone or shout",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I'll call you later.",
                th: "ฉันจะโทรหาเธอทีหลัง"
            }
        ]
    },
    {
        id: 1401,
        word: "check",
        pos: "v.",
        thai: "ตรวจสอบ",
        definition: "to look at something to make sure",
        hint: "examine carefully",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Please check your email.",
                th: "กรุณาตรวจสอบอีเมล"
            }
        ]
    },
    {
        id: 1402,
        word: "count",
        pos: "v.",
        thai: "นับ",
        definition: "to say numbers in order",
        hint: "say numbers",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Count from one to ten.",
                th: "นับจากหนึ่งถึงสิบ"
            }
        ]
    },
    {
        id: 1403,
        word: "end",
        pos: "v.",
        thai: "จบ",
        definition: "to stop or finish",
        hint: "finish or stop",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The movie will end at 9 PM.",
                th: "หนังจะจบตอนสามทุ่ม"
            }
        ]
    },
    {
        id: 1404,
        word: "enjoy",
        pos: "v.",
        thai: "สนุก",
        definition: "to like doing something",
        hint: "have fun with",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I enjoy reading books.",
                th: "ฉันสนุกกับการอ่านหนังสือ"
            }
        ]
    },
    {
        id: 1405,
        word: "feel",
        pos: "v.",
        thai: "รู้สึก",
        definition: "to have an emotion or touch something",
        hint: "emotion or touch",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I feel happy today.",
                th: "วันนี้ฉันรู้สึกมีความสุข"
            }
        ]
    },
    {
        id: 1406,
        word: "grow",
        pos: "v.",
        thai: "โต, เติบโต",
        definition: "to become bigger or older",
        hint: "become bigger",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Plants grow in the sun.",
                th: "พืชเติบโตในแสงแดด"
            }
        ]
    },
    {
        id: 1407,
        word: "happen",
        pos: "v.",
        thai: "เกิดขึ้น",
        definition: "to take place or occur",
        hint: "take place",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What happened yesterday?",
                th: "เมื่อวานเกิดอะไรขึ้น"
            }
        ]
    },
    {
        id: 1408,
        word: "keep",
        pos: "v.",
        thai: "เก็บ, รักษา",
        definition: "to have something and not give it away",
        hint: "not give away",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Keep your money safe.",
                th: "เก็บเงินให้ปลอดภัย"
            }
        ]
    },
    {
        id: 1409,
        word: "age",
        pos: "n.",
        thai: "อายุ",
        definition: "how old someone is",
        hint: "how old you are",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What's your age?",
                th: "คุณอายุเท่าไหร่"
            }
        ]
    },
    {
        id: 1410,
        word: "air",
        pos: "n.",
        thai: "อากาศ",
        definition: "what we breathe",
        hint: "what we breathe",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The air is fresh here.",
                th: "อากาศที่นี่สดชื่น"
            }
        ]
    },
    {
        id: 1411,
        word: "animal",
        pos: "n.",
        thai: "สัตว์",
        definition: "a living thing like a dog or cat",
        hint: "living creatures",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I love animals.",
                th: "ฉันรักสัตว์"
            }
        ]
    },
    {
        id: 1412,
        word: "back",
        pos: "n.",
        thai: "หลัง",
        definition: "the part behind something",
        hint: "behind part",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Sit at the back of the room.",
                th: "นั่งด้านหลังของห้อง"
            }
        ]
    },
    {
        id: 1413,
        word: "body",
        pos: "n.",
        thai: "ร่างกาย",
        definition: "the physical part of a person",
        hint: "physical self",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Take care of your body.",
                th: "ดูแลร่างกายของคุณ"
            }
        ]
    },
    {
        id: 1414,
        word: "boy",
        pos: "n.",
        thai: "เด็กผู้ชาย",
        definition: "a young male person",
        hint: "young male",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The boy is playing.",
                th: "เด็กผู้ชายกำลังเล่น"
            }
        ]
    },
    {
        id: 1415,
        word: "bus stop",
        pos: "n.",
        thai: "ป้ายรถเมล์",
        definition: "place where buses stop",
        hint: "bus waiting place",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Wait at the bus stop.",
                th: "รอที่ป้ายรถเมล์"
            }
        ]
    },
    {
        id: 1416,
        word: "cake",
        pos: "n.",
        thai: "เค้ก",
        definition: "sweet food for special occasions",
        hint: "sweet celebration food",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Birthday cake is delicious.",
                th: "เค้กวันเกิดอร่อย"
            }
        ]
    },
    {
        id: 1417,
        word: "candy",
        pos: "n.",
        thai: "ลูกอม",
        definition: "sweet food children like",
        hint: "sweet treat",
        level: "A1",
        cats: ["food"],
        examples: [
            {
                en: "Don't eat too much candy.",
                th: "อย่ากินลูกอมมากเกินไป"
            }
        ]
    },
    {
        id: 1418,
        word: "card",
        pos: "n.",
        thai: "บัตร",
        definition: "small piece of paper or plastic",
        hint: "small paper/plastic",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Show your ID card.",
                th: "แสดงบัตรประชาชน"
            }
        ]
    },
    {
        id: 1419,
        word: "clothes",
        pos: "n.",
        thai: "เสื้อผ้า",
        definition: "things you wear on your body",
        hint: "things you wear",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Wash your clothes.",
                th: "ซักเสื้อผ้า"
            }
        ]
    },
    {
        id: 1420,
        word: "couple",
        pos: "n.",
        thai: "คู่",
        definition: "two people together",
        hint: "two people",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "A young couple walked by.",
                th: "คู่รักหนุ่มสาวเดินผ่านไป"
            }
        ]
    },
    {
        id: 1421,
        word: "date",
        pos: "n.",
        thai: "วันที่",
        definition: "day, month, and year",
        hint: "day/month/year",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "What's today's date?",
                th: "วันนี้วันที่เท่าไหร่"
            }
        ]
    },
    {
        id: 1422,
        word: "desk",
        pos: "n.",
        thai: "โต๊ะทำงาน",
        definition: "table for working",
        hint: "work table",
        level: "A1",
        cats: ["home"],
        examples: [
            {
                en: "Clean your desk.",
                th: "ทำความสะอาดโต๊ะทำงาน"
            }
        ]
    },
    {
        id: 1423,
        word: "difference",
        pos: "n.",
        thai: "ความแตกต่าง",
        definition: "how things are not the same",
        hint: "not the same",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "There's a big difference.",
                th: "มีความแตกต่างมาก"
            }
        ]
    },
    {
        id: 1424,
        word: "ear",
        pos: "n.",
        thai: "หู",
        definition: "body part for hearing",
        hint: "hearing body part",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I can't hear with this ear.",
                th: "ฉันได้ยินข้างนี้ไม่ได้"
            }
        ]
    },
    {
        id: 1425,
        word: "event",
        pos: "n.",
        thai: "เหตุการณ์",
        definition: "something that happens",
        hint: "something happening",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The wedding was a big event.",
                th: "งานแต่งงานเป็นเหตุการณ์ใหญ่"
            }
        ]
    },
    {
        id: 1426,
        word: "example",
        pos: "n.",
        thai: "ตัวอย่าง",
        definition: "something that shows how",
        hint: "shows how",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Give me an example.",
                th: "ยกตัวอย่างให้ฟัง"
            }
        ]
    },
    {
        id: 1427,
        word: "fact",
        pos: "n.",
        thai: "ข้อเท็จจริง",
        definition: "something that is true",
        hint: "something true",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That's a fact.",
                th: "นั่นคือข้อเท็จจริง"
            }
        ]
    },
    {
        id: 1428,
        word: "able",
        pos: "adj.",
        thai: "สามารถ",
        definition: "having the power to do something",
        hint: "can do something",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Are you able to help?",
                th: "คุณช่วยได้ไหม"
            }
        ]
    },
    {
        id: 1429,
        word: "bright",
        pos: "adj.",
        thai: "สว่าง",
        definition: "giving a lot of light",
        hint: "lots of light",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The sun is bright.",
                th: "ดวงอาทิตย์สว่าง"
            }
        ]
    },
    {
        id: 1430,
        word: "cheap",
        pos: "adj.",
        thai: "ถูก",
        definition: "not costing much money",
        hint: "low price",
        level: "A1",
        cats: ["money"],
        examples: [
            {
                en: "This shirt is cheap.",
                th: "เสื้อตัวนี้ถูก"
            }
        ]
    },
    {
        id: 1431,
        word: "clear",
        pos: "adj.",
        thai: "ชัดเจน",
        definition: "easy to see or understand",
        hint: "easy to see",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The water is clear.",
                th: "น้ำใส"
            }
        ]
    },
    {
        id: 1432,
        word: "dark",
        pos: "adj.",
        thai: "มืด",
        definition: "having no light",
        hint: "no light",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "It's dark outside.",
                th: "ข้างนอกมืด"
            }
        ]
    },
    {
        id: 1433,
        word: "dead",
        pos: "adj.",
        thai: "ตาย",
        definition: "not alive anymore",
        hint: "not alive",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The plant is dead.",
                th: "ต้นไม้ตายแล้ว"
            }
        ]
    },
    {
        id: 1434,
        word: "each",
        pos: "adj.",
        thai: "แต่ละ",
        definition: "every one separately",
        hint: "every one",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Each student has a book.",
                th: "นักเรียนแต่ละคนมีหนังสือ"
            }
        ]
    },
    {
        id: 1435,
        word: "enough",
        pos: "adj.",
        thai: "พอ",
        definition: "as much as needed",
        hint: "as much as needed",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Do we have enough food?",
                th: "เรามีอาหารพอไหม"
            }
        ]
    },
    {
        id: 1436,
        word: "every",
        pos: "adj.",
        thai: "ทุก",
        definition: "all of them",
        hint: "all of them",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Every day I go to work.",
                th: "ทุกวันฉันไปทำงาน"
            }
        ]
    },
    {
        id: 1437,
        word: "excellent",
        pos: "adj.",
        thai: "ยอดเยี่ยม",
        definition: "very very good",
        hint: "very very good",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Your work is excellent.",
                th: "งานของคุณยอดเยี่ยม"
            }
        ]
    },
    {
        id: 1438,
        word: "expensive",
        pos: "adj.",
        thai: "แพง",
        definition: "costing a lot of money",
        hint: "high price",
        level: "A1",
        cats: ["money"],
        examples: [
            {
                en: "This car is expensive.",
                th: "รถคันนี้แพง"
            }
        ]
    },
    {
        id: 1439,
        word: "famous",
        pos: "adj.",
        thai: "มีชื่อเสียง",
        definition: "known by many people",
        hint: "known by many",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "She is a famous singer.",
                th: "เธอเป็นนักร้องที่มีชื่อเสียง"
            }
        ]
    },
    {
        id: 1440,
        word: "favorite",
        pos: "adj.",
        thai: "ที่ชอบที่สุด",
        definition: "liked most of all",
        hint: "liked most",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What's your favorite food?",
                th: "อาหารที่คุณชอบที่สุดคืออะไร"
            }
        ]
    },
    {
        id: 1441,
        word: "few",
        pos: "adj.",
        thai: "น้อย",
        definition: "a small number",
        hint: "small number",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I have a few friends.",
                th: "ฉันมีเพื่อนไม่กี่คน"
            }
        ]
    },
    {
        id: 1442,
        word: "final",
        pos: "adj.",
        thai: "สุดท้าย",
        definition: "coming at the end",
        hint: "at the end",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This is the final question.",
                th: "นี่คือคำถามสุดท้าย"
            }
        ]
    },
    {
        id: 1443,
        word: "fine",
        pos: "adj.",
        thai: "ดี",
        definition: "good or okay",
        hint: "good or okay",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I'm fine, thank you.",
                th: "ฉันสบายดี ขอบคุณ"
            }
        ]
    },
    {
        id: 1444,
        word: "funny",
        pos: "adj.",
        thai: "ตลก",
        definition: "making you laugh",
        hint: "makes you laugh",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That joke is funny.",
                th: "เรื่องตลกนั้นตลกดี"
            }
        ]
    },
    {
        id: 1445,
        word: "heavy",
        pos: "adj.",
        thai: "หนัก",
        definition: "weighing a lot",
        hint: "weighs a lot",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This box is heavy.",
                th: "กล่องนี้หนัก"
            }
        ]
    },
    {
        id: 1446,
        word: "huge",
        pos: "adj.",
        thai: "ใหญ่มาก",
        definition: "very very big",
        hint: "very very big",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That's a huge elephant.",
                th: "นั่นเป็นช้างตัวใหญ่มาก"
            }
        ]
    },
    {
        id: 1447,
        word: "kind",
        pos: "adj.",
        thai: "ใจดี",
        definition: "nice and helpful",
        hint: "nice and helpful",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "You are very kind.",
                th: "คุณใจดีมาก"
            }
        ]
    },
    {
        id: 1448,
        word: "light",
        pos: "adj.",
        thai: "เบา",
        definition: "not heavy",
        hint: "not heavy",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This bag is light.",
                th: "กระเป๋านี้เบา"
            }
        ]
    },
    {
        id: 1449,
        word: "ago",
        pos: "adv.",
        thai: "ที่แล้ว",
        definition: "in the past",
        hint: "in the past",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I met him two years ago.",
                th: "ฉันเจอเขาเมื่อสองปีที่แล้ว"
            }
        ]
    },
    {
        id: 1450,
        word: "already",
        pos: "adv.",
        thai: "แล้ว",
        definition: "before now",
        hint: "before now",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I already finished my work.",
                th: "ฉันทำงานเสร็จแล้ว"
            }
        ]
    },
    {
        id: 1451,
        word: "always",
        pos: "adv.",
        thai: "เสมอ",
        definition: "every time",
        hint: "every time",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I always brush my teeth.",
                th: "ฉันแปรงฟันเสมอ"
            }
        ]
    },
    {
        id: 1452,
        word: "century",
        pos: "n.",
        thai: "ศตวรรษ",
        definition: "one hundred years",
        hint: "100 years",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "We live in the 21st century.",
                th: "เราอยู่ในศตวรรษที่ 21"
            }
        ]
    },
    {
        id: 1453,
        word: "daily",
        pos: "adj.",
        thai: "ประจำวัน",
        definition: "happening every day",
        hint: "every day",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Reading is my daily habit.",
                th: "การอ่านเป็นนิสัยประจำวันของฉัน"
            }
        ]
    },
    {
        id: 1454,
        word: "future",
        pos: "n.",
        thai: "อนาคต",
        definition: "time that will come",
        hint: "time to come",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Think about your future.",
                th: "คิดเกี่ยวกับอนาคตของคุณ"
            }
        ]
    },
    {
        id: 1455,
        word: "hundred",
        pos: "num.",
        thai: "ร้อย",
        definition: "the number 100",
        hint: "number 100",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "One hundred students came.",
                th: "นักเรียนหนึ่งร้อยคนมา"
            }
        ]
    },
    {
        id: 1456,
        word: "last",
        pos: "adj.",
        thai: "ล่าสุด",
        definition: "most recent",
        hint: "most recent",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Last week was busy.",
                th: "สัปดาห์ล่าสุดยุ่ง"
            }
        ]
    },
    {
        id: 1457,
        word: "never",
        pos: "adv.",
        thai: "ไม่เคย",
        definition: "not at any time",
        hint: "not any time",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I never eat meat.",
                th: "ฉันไม่เคยกินเนื้อ"
            }
        ]
    },
    {
        id: 1458,
        word: "next",
        pos: "adj.",
        thai: "ต่อไป",
        definition: "coming after this one",
        hint: "coming after",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "See you next week.",
                th: "เจอกันสัปดาห์หน้า"
            }
        ]
    },
    {
        id: 1459,
        word: "now",
        pos: "adv.",
        thai: "ตอนนี้",
        definition: "at this time",
        hint: "at this time",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I'm busy right now.",
                th: "ตอนนี้ฉันยุ่ง"
            }
        ]
    },
    {
        id: 1460,
        word: "often",
        pos: "adv.",
        thai: "บ่อยๆ",
        definition: "many times",
        hint: "many times",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "I often go shopping.",
                th: "ฉันไปซื้อของบ่อยๆ"
            }
        ]
    },
    {
        id: 1461,
        word: "past",
        pos: "n.",
        thai: "อดีต",
        definition: "time before now",
        hint: "time before",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "That happened in the past.",
                th: "นั่นเกิดขึ้นในอดีต"
            }
        ]
    },
    {
        id: 1462,
        word: "sometimes",
        pos: "adv.",
        thai: "บางครั้ง",
        definition: "not always, but at times",
        hint: "at times",
        level: "A1",
        cats: ["time"],
        examples: [
            {
                en: "Sometimes I feel sad.",
                th: "บางครั้งฉันรู้สึกเศร้า"
            }
        ]
    },
    {
        id: 1463,
        word: "above",
        pos: "prep.",
        thai: "เหนือ",
        definition: "higher than something",
        hint: "higher than",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The picture is above the table.",
                th: "รูปอยู่เหนือโต๊ะ"
            }
        ]
    },
    {
        id: 1464,
        word: "across",
        pos: "prep.",
        thai: "ข้าม",
        definition: "from one side to the other",
        hint: "side to side",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Walk across the street.",
                th: "เดินข้ามถนน"
            }
        ]
    },
    {
        id: 1465,
        word: "against",
        pos: "prep.",
        thai: "ติดกับ",
        definition: "touching something",
        hint: "touching",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Put the chair against the wall.",
                th: "เอาเก้าอี้ไปติดกับฝาผนัง"
            }
        ]
    },
    {
        id: 1466,
        word: "along",
        pos: "prep.",
        thai: "ตาม",
        definition: "following the length of something",
        hint: "following length",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Walk along the river.",
                th: "เดินตามแม่น้ำ"
            }
        ]
    },
    {
        id: 1467,
        word: "around",
        pos: "prep.",
        thai: "รอบ",
        definition: "in a circle or nearby",
        hint: "in a circle",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Walk around the park.",
                th: "เดินรอบสวน"
            }
        ]
    },
    {
        id: 1468,
        word: "below",
        pos: "prep.",
        thai: "ใต้",
        definition: "lower than something",
        hint: "lower than",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The cat is below the table.",
                th: "แมวอยู่ใต้โต๊ะ"
            }
        ]
    },
    {
        id: 1469,
        word: "beside",
        pos: "prep.",
        thai: "ข้างๆ",
        definition: "next to something",
        hint: "next to",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Sit beside me.",
                th: "มานั่งข้างๆฉัน"
            }
        ]
    },
    {
        id: 1470,
        word: "center",
        pos: "n.",
        thai: "จุดกลาง",
        definition: "the middle point",
        hint: "middle point",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Meet at the center of town.",
                th: "มาเจอกันที่ใจกลางเมือง"
            }
        ]
    },
    {
        id: 1471,
        word: "direction",
        pos: "n.",
        thai: "ทิศทาง",
        definition: "which way to go",
        hint: "which way",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Which direction is north?",
                th: "ทิศทางไหนคือเหนือ"
            }
        ]
    },
    {
        id: 1472,
        word: "east",
        pos: "n.",
        thai: "ตะวันออก",
        definition: "direction where sun rises",
        hint: "sun rises",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The sun rises in the east.",
                th: "ดวงอาทิตย์ขึ้นทางตะวันออก"
            }
        ]
    },
    {
        id: 1473,
        word: "ground",
        pos: "n.",
        thai: "พื้นดิน",
        definition: "the earth's surface",
        hint: "earth surface",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Sit on the ground.",
                th: "นั่งบนพื้นดิน"
            }
        ]
    },
    {
        id: 1474,
        word: "high",
        pos: "adj.",
        thai: "สูง",
        definition: "far from the ground",
        hint: "far from ground",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That building is high.",
                th: "อาคารนั้นสูง"
            }
        ]
    },
    {
        id: 1475,
        word: "into",
        pos: "prep.",
        thai: "เข้าไปใน",
        definition: "to the inside of",
        hint: "to inside",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Go into the house.",
                th: "เข้าไปในบ้าน"
            }
        ]
    },
    {
        id: 1476,
        word: "location",
        pos: "n.",
        thai: "ที่ตั้ง",
        definition: "where something is",
        hint: "where something is",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What's your location?",
                th: "คุณอยู่ที่ไหน"
            }
        ]
    },
    {
        id: 1477,
        word: "low",
        pos: "adj.",
        thai: "ต่ำ",
        definition: "close to the ground",
        hint: "close to ground",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The chair is low.",
                th: "เก้าอี้ต่ำ"
            }
        ]
    },
    {
        id: 1478,
        word: "north",
        pos: "n.",
        thai: "เหนือ",
        definition: "direction opposite to south",
        hint: "opposite south",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Canada is north of USA.",
                th: "แคนาดาอยู่เหนือของสหรัฐอเมริกา"
            }
        ]
    },
    {
        id: 1479,
        word: "off",
        pos: "prep.",
        thai: "ออกจาก",
        definition: "away from something",
        hint: "away from",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Take your shoes off.",
                th: "ถอดรองเท้าออก"
            }
        ]
    },
    {
        id: 1480,
        word: "onto",
        pos: "prep.",
        thai: "ขึ้นไปบน",
        definition: "to a position on top",
        hint: "to top position",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Jump onto the bed.",
                th: "กระโดดขึ้นไปบนเตียง"
            }
        ]
    },
    {
        id: 1481,
        word: "over",
        pos: "prep.",
        thai: "เหนือ",
        definition: "above and across",
        hint: "above and across",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The bird flies over the house.",
                th: "นกบินผ่านบ้าน"
            }
        ]
    },
    {
        id: 1482,
        word: "south",
        pos: "n.",
        thai: "ใต้",
        definition: "direction opposite to north",
        hint: "opposite north",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Mexico is south of USA.",
                th: "เม็กซิโกอยู่ใต้ของสหรัฐอเมริกา"
            }
        ]
    },
    {
        id: 1483,
        word: "through",
        pos: "prep.",
        thai: "ผ่าน",
        definition: "from one end to the other",
        hint: "end to end",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Walk through the door.",
                th: "เดินผ่านประตู"
            }
        ]
    },
    {
        id: 1484,
        word: "under",
        pos: "prep.",
        thai: "ใต้",
        definition: "below something",
        hint: "below",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The cat is under the table.",
                th: "แมวอยู่ใต้โต๊ะ"
            }
        ]
    },
    {
        id: 1485,
        word: "west",
        pos: "n.",
        thai: "ตะวันตก",
        definition: "direction where sun sets",
        hint: "sun sets",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The sun sets in the west.",
                th: "ดวงอาทิตย์ตกทางตะวันตก"
            }
        ]
    },
    {
        id: 1486,
        word: "about",
        pos: "prep.",
        thai: "เกี่ยวกับ",
        definition: "concerning or regarding",
        hint: "concerning",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Tell me about your day.",
                th: "เล่าเรื่องวันนี้ของคุณให้ฟัง"
            }
        ]
    },
    {
        id: 1487,
        word: "actually",
        pos: "adv.",
        thai: "จริงๆ แล้ว",
        definition: "in fact",
        hint: "in fact",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Actually, I don't like coffee.",
                th: "จริงๆ แล้ว ฉันไม่ชอบกาแฟ"
            }
        ]
    },
    {
        id: 1488,
        word: "also",
        pos: "adv.",
        thai: "ด้วย",
        definition: "too, as well",
        hint: "too, as well",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I also like pizza.",
                th: "ฉันก็ชอบพิซซ่าด้วย"
            }
        ]
    },
    {
        id: 1489,
        word: "although",
        pos: "conj.",
        thai: "แม้ว่า",
        definition: "even though",
        hint: "even though",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Although it's raining, I'll go out.",
                th: "แม้ว่าจะฝนตก ฉันจะออกไป"
            }
        ]
    },
    {
        id: 1490,
        word: "another",
        pos: "adj.",
        thai: "อีกอัน",
        definition: "one more",
        hint: "one more",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Can I have another cup?",
                th: "ขออีกแก้วได้ไหม"
            }
        ]
    },
    {
        id: 1491,
        word: "anything",
        pos: "pron.",
        thai: "อะไรก็ได้",
        definition: "any thing at all",
        hint: "any thing",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Do you need anything?",
                th: "คุณต้องการอะไรไหม"
            }
        ]
    },
    {
        id: 1492,
        word: "anyway",
        pos: "adv.",
        thai: "ยังไงก็ตาม",
        definition: "despite what was said",
        hint: "despite what said",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "It's late, but let's go anyway.",
                th: "สายแล้ว แต่ไปกันเถอะ"
            }
        ]
    },
    {
        id: 1493,
        word: "because",
        pos: "conj.",
        thai: "เพราะ",
        definition: "for the reason that",
        hint: "for reason",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I'm tired because I worked hard.",
                th: "ฉันเหนื่อยเพราะทำงานหนัก"
            }
        ]
    },
    {
        id: 1494,
        word: "both",
        pos: "det.",
        thai: "ทั้งสอง",
        definition: "the two together",
        hint: "two together",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Both books are good.",
                th: "หนังสือทั้งสองเล่มดี"
            }
        ]
    },
    {
        id: 1495,
        word: "but",
        pos: "conj.",
        thai: "แต่",
        definition: "however",
        hint: "however",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I like tea, but not coffee.",
                th: "ฉันชอบชา แต่ไม่ชอบกาแฟ"
            }
        ]
    },
    {
        id: 1496,
        word: "during",
        pos: "prep.",
        thai: "ระหว่าง",
        definition: "while something happens",
        hint: "while happening",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Don't talk during the movie.",
                th: "อย่าพูดระหว่างดูหนัง"
            }
        ]
    },
    {
        id: 1497,
        word: "either",
        pos: "det.",
        thai: "อย่างใดอย่างหนึ่ง",
        definition: "one or the other",
        hint: "one or other",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Choose either red or blue.",
                th: "เลือกสีแดงหรือน้ำเงิน"
            }
        ]
    },
    {
        id: 1498,
        word: "else",
        pos: "adv.",
        thai: "อย่างอื่น",
        definition: "other than this",
        hint: "other than this",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What else do you want?",
                th: "คุณต้องการอะไรอีก"
            }
        ]
    },
    {
        id: 1499,
        word: "even",
        pos: "adv.",
        thai: "แม้กระทั่ง",
        definition: "including this extreme case",
        hint: "extreme case",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Even children can do this.",
                th: "แม้เด็กๆ ก็ทำได้"
            }
        ]
    },
    {
        id: 1500,
        word: "ever",
        pos: "adv.",
        thai: "เคย",
        definition: "at any time",
        hint: "at any time",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Have you ever been to Japan?",
                th: "คุณเคยไปญี่ปุ่นไหม"
            }
        ]
    },
    {
        id: 1501,
        word: "everyone",
        pos: "pron.",
        thai: "ทุกคน",
        definition: "all people",
        hint: "all people",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Everyone is welcome.",
                th: "ทุกคนยินดีต้อนรับ"
            }
        ]
    },
    {
        id: 1502,
        word: "everything",
        pos: "pron.",
        thai: "ทุกสิ่ง",
        definition: "all things",
        hint: "all things",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Everything is ready.",
                th: "ทุกอย่างพร้อมแล้ว"
            }
        ]
    },
    {
        id: 1503,
        word: "exactly",
        pos: "adv.",
        thai: "ตรงๆ",
        definition: "precisely",
        hint: "precisely",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That's exactly what I mean.",
                th: "นั่นแหละที่ฉันหมายถึง"
            }
        ]
    },
    {
        id: 1504,
        word: "except",
        pos: "prep.",
        thai: "ยกเว้น",
        definition: "not including",
        hint: "not including",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Everyone came except John.",
                th: "ทุกคนมา ยกเว้นจอห์น"
            }
        ]
    },
    {
        id: 1505,
        word: "however",
        pos: "adv.",
        thai: "อย่างไรก็ตาม",
        definition: "but, nevertheless",
        hint: "but, nevertheless",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "It's expensive. However, it's good quality.",
                th: "มันแพง อย่างไรก็ตาม มันคุณภาพดี"
            }
        ]
    },
    {
        id: 1506,
        word: "instead",
        pos: "adv.",
        thai: "แทน",
        definition: "in place of",
        hint: "in place of",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Let's walk instead of driving.",
                th: "เดินแทนการขับรถ"
            }
        ]
    },
    {
        id: 1507,
        word: "maybe",
        pos: "adv.",
        thai: "บางที",
        definition: "perhaps",
        hint: "perhaps",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Maybe it will rain tomorrow.",
                th: "บางทีพรุ่งนี้อาจจะฝนตก"
            }
        ]
    },
    {
        id: 1508,
        word: "neither",
        pos: "det.",
        thai: "ไม่ทั้งสอง",
        definition: "not one and not the other",
        hint: "not both",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Neither option is good.",
                th: "ทางเลือกไม่ทั้งสองอย่างดี"
            }
        ]
    },
    {
        id: 1509,
        word: "nobody",
        pos: "pron.",
        thai: "ไม่มีใคร",
        definition: "no person",
        hint: "no person",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Nobody came to the party.",
                th: "ไม่มีใครมางานปาร์ตี้"
            }
        ]
    },
    {
        id: 1510,
        word: "nothing",
        pos: "pron.",
        thai: "ไม่มีอะไร",
        definition: "not anything",
        hint: "not anything",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "There's nothing in the box.",
                th: "ไม่มีอะไรในกล่อง"
            }
        ]
    },
    {
        id: 1511,
        word: "once",
        pos: "adv.",
        thai: "ครั้งหนึ่ง",
        definition: "one time",
        hint: "one time",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I met him once.",
                th: "ฉันเจอเขาครั้งหนึ่ง"
            }
        ]
    },
    {
        id: 1512,
        word: "only",
        pos: "adv.",
        thai: "เพียง",
        definition: "just, no more than",
        hint: "just, no more",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I have only five dollars.",
                th: "ฉันมีเงินแค่ห้าดอลลาร์"
            }
        ]
    },
    {
        id: 1513,
        word: "other",
        pos: "adj.",
        thai: "อื่น",
        definition: "different from this",
        hint: "different",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Do you have other colors?",
                th: "คุณมีสีอื่นไหม"
            }
        ]
    },
    {
        id: 1514,
        word: "perhaps",
        pos: "adv.",
        thai: "บางที",
        definition: "maybe",
        hint: "maybe",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Perhaps we should wait.",
                th: "บางทีเราควรรอ"
            }
        ]
    },
    {
        id: 1515,
        word: "quite",
        pos: "adv.",
        thai: "ค่อนข้าง",
        definition: "rather, fairly",
        hint: "rather, fairly",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The movie was quite good.",
                th: "หนังเรื่องนั้นดีพอสมควร"
            }
        ]
    },
    {
        id: 1516,
        word: "rather",
        pos: "adv.",
        thai: "ค่อนข้าง",
        definition: "to some degree",
        hint: "to some degree",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "It's rather cold today.",
                th: "วันนี้ค่อนข้างหนาว"
            }
        ]
    },
    {
        id: 1517,
        word: "really",
        pos: "adv.",
        thai: "จริงๆ",
        definition: "truly, very much",
        hint: "truly",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I really like this song.",
                th: "ฉันชอบเพลงนี้จริงๆ"
            }
        ]
    },
    {
        id: 1518,
        word: "since",
        pos: "prep.",
        thai: "ตั้งแต่",
        definition: "from a time in the past",
        hint: "from past time",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I've lived here since 2020.",
                th: "ฉันอยู่ที่นี่ตั้งแต่ปี 2020"
            }
        ]
    },
    {
        id: 1519,
        word: "still",
        pos: "adv.",
        thai: "ยังคง",
        definition: "continuing until now",
        hint: "continuing",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Are you still working?",
                th: "คุณยังทำงานอยู่ไหม"
            }
        ]
    },
    {
        id: 1520,
        word: "than",
        pos: "conj.",
        thai: "กว่า",
        definition: "used in comparisons",
        hint: "for comparing",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "She is taller than me.",
                th: "เธอสูงกว่าฉัน"
            }
        ]
    },
    {
        id: 1521,
        word: "very",
        pos: "adv.",
        thai: "มาก",
        definition: "to a high degree",
        hint: "high degree",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The food is very good.",
                th: "อาหารอร่อยมาก"
            }
        ]
    },
    {
        id: 1522,
        word: "girl",
        pos: "n.",
        thai: "เด็กผู้หญิง",
        definition: "a young female person",
        hint: "young female",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The girl is playing.",
                th: "เด็กผู้หญิงกำลังเล่น"
            }
        ]
    },
    {
        id: 1523,
        word: "man",
        pos: "n.",
        thai: "ผู้ชาย",
        definition: "an adult male person",
        hint: "adult male",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The man is working.",
                th: "ผู้ชายกำลังทำงาน"
            }
        ]
    },
    {
        id: 1524,
        word: "woman",
        pos: "n.",
        thai: "ผู้หญิง",
        definition: "an adult female person",
        hint: "adult female",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "The woman is reading.",
                th: "ผู้หญิงกำลังอ่าน"
            }
        ]
    },
    {
        id: 1525,
        word: "people",
        pos: "n.",
        thai: "คน",
        definition: "more than one person",
        hint: "many persons",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Many people came to the party.",
                th: "คนมาเยอะที่งานปาร์ตี้"
            }
        ]
    },
    {
        id: 1526,
        word: "person",
        pos: "n.",
        thai: "บุคคล",
        definition: "a human being",
        hint: "human being",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "She is a nice person.",
                th: "เธอเป็นคนดี"
            }
        ]
    },
    {
        id: 1527,
        word: "place",
        pos: "n.",
        thai: "สถานที่",
        definition: "a particular area or spot",
        hint: "particular area",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This is a nice place.",
                th: "นี่เป็นสถานที่ดี"
            }
        ]
    },
    {
        id: 1528,
        word: "thing",
        pos: "n.",
        thai: "สิ่งของ",
        definition: "an object or item",
        hint: "object or item",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Put the thing on the table.",
                th: "เอาสิ่งของนั่นวางบนโต๊ะ"
            }
        ]
    },
    {
        id: 1529,
        word: "way",
        pos: "n.",
        thai: "วิธี",
        definition: "a method or manner of doing something",
        hint: "method or manner",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Show me the way to the station.",
                th: "บอกทางไปสถานีให้ฉันหน่อย"
            }
        ]
    },
    {
        id: 1530,
        word: "world",
        pos: "n.",
        thai: "โลก",
        definition: "the earth and all people in it",
        hint: "earth and all people",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "People around the world speak different languages.",
                th: "คนทั่วโลกพูดภาษาที่แตกต่างกัน"
            }
        ]
    },
    {
        id: 1531,
        word: "young",
        pos: "adj.",
        thai: "หนุ่ม, สาว, เด็ก",
        definition: "not old",
        hint: "not old",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "She is young and beautiful.",
                th: "เธอหนุ่มและสวย"
            }
        ]
    },
    {
        id: 1532,
        word: "number",
        pos: "n.",
        thai: "ตัวเลข",
        definition: "a word or symbol that represents an amount",
        hint: "represents amount",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "What's your phone number?",
                th: "เบอร์โทรศัพท์คุณคืออะไร"
            }
        ]
    },
    {
        id: 1533,
        word: "first",
        pos: "adj.",
        thai: "แรก",
        definition: "coming before all others",
        hint: "before all others",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This is my first day at work.",
                th: "นี่คือวันแรกของฉันที่ทำงาน"
            }
        ]
    },
    {
        id: 1534,
        word: "great",
        pos: "adj.",
        thai: "ยอดเยี่ยม",
        definition: "very good or important",
        hint: "very good",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "That's a great idea!",
                th: "นั่นเป็นความคิดที่ดีมาก!"
            }
        ]
    },
    {
        id: 1535,
        word: "little",
        pos: "adj.",
        thai: "เล็ก",
        definition: "small in size",
        hint: "small size",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I have a little dog.",
                th: "ฉันมีสุนัขตัวเล็ก"
            }
        ]
    },
    {
        id: 1536,
        word: "own",
        pos: "adj.",
        thai: "ของตัวเอง",
        definition: "belonging to yourself",
        hint: "belonging to you",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "I want my own room.",
                th: "ฉันอยากมีห้องของตัวเอง"
            }
        ]
    },
    {
        id: 1537,
        word: "public",
        pos: "adj.",
        thai: "สาธารณะ",
        definition: "open to or shared by all people",
        hint: "shared by all",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "This is a public park.",
                th: "นี่เป็นสวนสาธารณะ"
            }
        ]
    },
    {
        id: 1538,
        word: "large",
        pos: "adj.",
        thai: "ใหญ่",
        definition: "big in size",
        hint: "big size",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "She lives in a large house.",
                th: "เธออยู่ในบ้านใหญ่"
            }
        ]
    },
    {
        id: 1539,
        word: "sure",
        pos: "adj.",
        thai: "แน่ใจ",
        definition: "certain about something",
        hint: "certain about",
        level: "A1",
        cats: ["daily"],
        examples: [
            {
                en: "Are you sure about that?",
                th: "คุณแน่ใจเรื่องนั้นไหม"
            }
        ]
    },
    {
        id: 1540,
        word: "action",
        pos: "n.",
        thai: "การกระทำ",
        definition: "something that you do",
        hint: "something you do",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "We need to take action now.",
                th: "เราต้องลงมือทำตอนนี้"
            }
        ]
    },
    {
        id: 1541,
        word: "activity",
        pos: "n.",
        thai: "กิจกรรม",
        definition: "something that you do for enjoyment",
        hint: "something for enjoyment",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Swimming is a good activity.",
                th: "การว่ายน้ำเป็นกิจกรรมที่ดี"
            }
        ]
    },
    {
        id: 1542,
        word: "adult",
        pos: "n.",
        thai: "ผู้ใหญ่",
        definition: "a person who is fully grown",
        hint: "fully grown person",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Children need help from adults.",
                th: "เด็กต้องการความช่วยเหลือจากผู้ใหญ่"
            }
        ]
    },
    {
        id: 1543,
        word: "arrive",
        pos: "v.",
        thai: "มาถึง",
        definition: "to reach a place",
        hint: "reach a place",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "What time will you arrive?",
                th: "คุณจะมาถึงกี่โมง"
            }
        ]
    },
    {
        id: 1544,
        word: "article",
        pos: "n.",
        thai: "บทความ",
        definition: "a piece of writing in a newspaper or magazine",
        hint: "writing in newspaper",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I read an interesting article today.",
                th: "วันนี้ฉันอ่านบทความที่น่าสนใจ"
            }
        ]
    },
    {
        id: 1545,
        word: "attack",
        pos: "v.",
        thai: "โจมตี",
        definition: "to try to hurt someone or something",
        hint: "try to hurt",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The dog attacked the stranger.",
                th: "สุนัขโจมตีคนแปลกหน้า"
            }
        ]
    },
    {
        id: 1546,
        word: "attend",
        pos: "v.",
        thai: "เข้าร่วม",
        definition: "to go to an event or be present",
        hint: "go to event",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Will you attend the meeting?",
                th: "คุณจะเข้าร่วมประชุมไหม"
            }
        ]
    },
    {
        id: 1547,
        word: "available",
        pos: "adj.",
        thai: "ว่าง, มีอยู่",
        definition: "free to be used or obtained",
        hint: "free to use",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Is this seat available?",
                th: "ที่นั่งนี้ว่างไหม"
            }
        ]
    },
    {
        id: 1548,
        word: "basic",
        pos: "adj.",
        thai: "พื้นฐาน",
        definition: "simple and most important",
        hint: "simple and important",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "These are basic skills.",
                th: "เหล่านี้เป็นทักษะพื้นฐาน"
            }
        ]
    },
    {
        id: 1549,
        word: "battle",
        pos: "n.",
        thai: "การต่อสู้",
        definition: "a fight between armies or groups",
        hint: "fight between groups",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "They won the battle.",
                th: "พวกเขาชนะการต่อสู้"
            }
        ]
    },
    {
        id: 1550,
        word: "behave",
        pos: "v.",
        thai: "ประพฤติ",
        definition: "to act in a particular way",
        hint: "act in particular way",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Children should behave well at school.",
                th: "เด็กควรประพฤติตัวดีที่โรงเรียน"
            }
        ]
    },
    {
        id: 1551,
        word: "benefit",
        pos: "n.",
        thai: "ประโยชน์",
        definition: "something good that helps you",
        hint: "something good helping",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Exercise has many benefits.",
                th: "การออกกำลังกายมีประโยชน์มากมาย"
            }
        ]
    },
    {
        id: 1552,
        word: "brain",
        pos: "n.",
        thai: "สมอง",
        definition: "the organ inside your head that controls thinking",
        hint: "organ controlling thinking",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Use your brain to solve this puzzle.",
                th: "ใช้สมองแก้ปริศนานี้"
            }
        ]
    },
    {
        id: 1553,
        word: "breathe",
        pos: "v.",
        thai: "หายใจ",
        definition: "to take air into your lungs",
        hint: "take air in lungs",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "It's hard to breathe here.",
                th: "หายใจยากที่นี่"
            }
        ]
    },
    {
        id: 1554,
        word: "burn",
        pos: "v.",
        thai: "เผา",
        definition: "to damage or destroy with fire",
        hint: "damage with fire",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Don't burn the food.",
                th: "อย่าให้อาหารไหม้"
            }
        ]
    },
    {
        id: 1555,
        word: "central",
        pos: "adj.",
        thai: "กลาง",
        definition: "in the middle of something",
        hint: "in the middle",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The hotel is in central Bangkok.",
                th: "โรงแรมอยู่ใจกลางกรุงเทพ"
            }
        ]
    },
    {
        id: 1556,
        word: "chain",
        pos: "n.",
        thai: "โซ่",
        definition: "metal rings connected together",
        hint: "connected metal rings",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "He wore a gold chain around his neck.",
                th: "เขาใส่สายโซ่ทองคอ"
            }
        ]
    },
    {
        id: 1557,
        word: "chairman",
        pos: "n.",
        thai: "ประธาน",
        definition: "the person who leads a meeting or organization",
        hint: "person leading meeting",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "The chairman opened the meeting.",
                th: "ประธานเปิดการประชุม"
            }
        ]
    },
    {
        id: 1558,
        word: "chance",
        pos: "n.",
        thai: "โอกาส",
        definition: "a possibility or opportunity",
        hint: "possibility or opportunity",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "This is your chance to win.",
                th: "นี่เป็นโอกาสของคุณที่จะชนะ"
            }
        ]
    },
    {
        id: 1559,
        word: "charge",
        pos: "v.",
        thai: "คิดเงิน",
        definition: "to ask for money as payment",
        hint: "ask for money payment",
        level: "A2",
        cats: ["money"],
        examples: [
            {
                en: "How much do you charge for this service?",
                th: "คุณคิดเงินบริการนี้เท่าไหร่"
            }
        ]
    },
    {
        id: 1560,
        word: "claim",
        pos: "v.",
        thai: "อ้าง",
        definition: "to say something is true",
        hint: "say something true",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "He claims to be the best player.",
                th: "เขาอ้างว่าเป็นผู้เล่นที่ดีที่สุด"
            }
        ]
    },
    {
        id: 1561,
        word: "comfort",
        pos: "n.",
        thai: "ความสะดวกสบาย",
        definition: "a feeling of being relaxed and free from pain",
        hint: "feeling relaxed",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "This chair provides great comfort.",
                th: "เก้าอี้ตัวนี้ให้ความสะดวกสบาย"
            }
        ]
    },
    {
        id: 1562,
        word: "comment",
        pos: "n.",
        thai: "ความเห็น",
        definition: "something you say to give your opinion",
        hint: "say your opinion",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Do you have any comments about the movie?",
                th: "คุณมีความเห็นเกี่ยวกับหนังเรื่องนี้ไหม"
            }
        ]
    },
    {
        id: 1563,
        word: "common",
        pos: "adj.",
        thai: "ธรรมดา",
        definition: "happening often or found in many places",
        hint: "happening often",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Rice is common in Asian countries.",
                th: "ข้าวเป็นสิ่งธรรมดาในประเทศเอเชีย"
            }
        ]
    },
    {
        id: 1564,
        word: "condition",
        pos: "n.",
        thai: "สภาพ",
        definition: "the state that something is in",
        hint: "state something is in",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The car is in good condition.",
                th: "รถยนต์อยู่ในสภาพดี"
            }
        ]
    },
    {
        id: 1565,
        word: "content",
        pos: "n.",
        thai: "เนื้อหา",
        definition: "the things that are inside something",
        hint: "things inside",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The content of this book is interesting.",
                th: "เนื้อหาของหนังสือเล่มนี้น่าสนใจ"
            }
        ]
    },
    {
        id: 1566,
        word: "continue",
        pos: "v.",
        thai: "ทำต่อไป",
        definition: "to keep doing something",
        hint: "keep doing",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Please continue reading.",
                th: "กรุณาอ่านต่อไป"
            }
        ]
    },
    {
        id: 1567,
        word: "copy",
        pos: "v.",
        thai: "คัดลอก",
        definition: "to make something exactly the same",
        hint: "make exactly same",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Copy this document, please.",
                th: "กรุณาคัดลอกเอกสารนี้"
            }
        ]
    },
    {
        id: 1568,
        word: "cover",
        pos: "v.",
        thai: "ปิด, ครอบคลุม",
        definition: "to put something over or include",
        hint: "put over or include",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Cover the pot with a lid.",
                th: "ปิดหม้อด้วยฝา"
            }
        ]
    },
    {
        id: 1569,
        word: "crime",
        pos: "n.",
        thai: "อาชญากรรม",
        definition: "an illegal act",
        hint: "illegal act",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The police are investigating the crime.",
                th: "ตำรวจกำลังสืบสวนคดีอาชญากรรม"
            }
        ]
    },
    {
        id: 1570,
        word: "cross",
        pos: "v.",
        thai: "ข้าม",
        definition: "to go from one side to the other",
        hint: "go side to side",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Look both ways before you cross the street.",
                th: "มองซ้ายขวาก่อนข้ามถนน"
            }
        ]
    },
    {
        id: 1571,
        word: "damage",
        pos: "n.",
        thai: "ความเสียหาย",
        definition: "harm or injury to something",
        hint: "harm or injury",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The storm caused a lot of damage.",
                th: "พายุทำให้เกิดความเสียหายมาก"
            }
        ]
    },
    {
        id: 1572,
        word: "deal",
        pos: "n.",
        thai: "ข้อตกลง",
        definition: "an agreement or arrangement",
        hint: "agreement or arrangement",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "We made a good deal.",
                th: "เราทำข้อตกลงที่ดี"
            }
        ]
    },
    {
        id: 1573,
        word: "delivery",
        pos: "n.",
        thai: "การจัดส่ง",
        definition: "the act of taking something to someone",
        hint: "taking something to someone",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The delivery will arrive tomorrow.",
                th: "การจัดส่งจะมาถึงพรุ่งนี้"
            }
        ]
    },
    {
        id: 1574,
        word: "design",
        pos: "n.",
        thai: "การออกแบบ",
        definition: "a plan for how something should look",
        hint: "plan how look",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "I like the design of this building.",
                th: "ฉันชอบการออกแบบอาคารนี้"
            }
        ]
    },
    {
        id: 1575,
        word: "detail",
        pos: "n.",
        thai: "รายละเอียด",
        definition: "a small piece of information",
        hint: "small piece information",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Please give me more details.",
                th: "กรุณาให้รายละเอียดเพิ่มเติม"
            }
        ]
    },
    {
        id: 1576,
        word: "divide",
        pos: "v.",
        thai: "แบ่ง",
        definition: "to separate into parts",
        hint: "separate into parts",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Divide the cake into six pieces.",
                th: "แบ่งเค้กเป็นหกชิ้น"
            }
        ]
    },
    {
        id: 1577,
        word: "drug",
        pos: "n.",
        thai: "ยา",
        definition: "a medicine or illegal substance",
        hint: "medicine or illegal substance",
        level: "A2",
        cats: ["health"],
        examples: [
            {
                en: "The doctor prescribed a new drug.",
                th: "หมอสั่งยาใหม่ให้"
            }
        ]
    },
    {
        id: 1578,
        word: "editor",
        pos: "n.",
        thai: "บรรณาธิการ",
        definition: "a person who prepares text for publication",
        hint: "prepares text publication",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "The editor corrected all the mistakes.",
                th: "บรรณาธิการแก้ไขข้อผิดพลาดทั้งหมด"
            }
        ]
    },
    {
        id: 1579,
        word: "effect",
        pos: "n.",
        thai: "ผลกระทบ",
        definition: "a result or consequence",
        hint: "result or consequence",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "The medicine had a good effect.",
                th: "ยามีผลดี"
            }
        ]
    },
    {
        id: 1580,
        word: "employ",
        pos: "v.",
        thai: "จ้างงาน",
        definition: "to pay someone to work for you",
        hint: "pay someone to work",
        level: "A2",
        cats: ["work"],
        examples: [
            {
                en: "The company employs 200 people.",
                th: "บริษัทจ้างคน 200 คน"
            }
        ]
    },
    {
        id: 1581,
        word: "enable",
        pos: "v.",
        thai: "ทำให้สามารถ",
        definition: "to make it possible for someone to do something",
        hint: "make possible to do",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "This app enables you to learn faster.",
                th: "แอปนี้ทำให้คุณเรียนได้เร็วขึ้น"
            }
        ]
    },
    {
        id: 1582,
        word: "enemy",
        pos: "n.",
        thai: "ศัตรู",
        definition: "a person who hates or fights against you",
        hint: "person who fights against",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "He made many enemies at work.",
                th: "เขามีศัตรูเยอะที่ทำงาน"
            }
        ]
    },
    {
        id: 1583,
        word: "engage",
        pos: "v.",
        thai: "หมั้น, ร่วม",
        definition: "to become involved in something",
        hint: "become involved in",
        level: "A2",
        cats: ["daily"],
        examples: [
            {
                en: "Students need to engage with the lesson.",
                th: "นักเรียนต้องมีส่วนร่วมในบทเรียน"
            }
        ]
    },
    {
        id: 1584,
        word: "abandon",
        pos: "v.",
        thai: "ละทิ้ง",
        definition: "to leave someone or something completely",
        hint: "leave completely",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Don't abandon your dreams.",
                th: "อย่าละทิ้งความฝันของคุณ"
            }
        ]
    },
    {
        id: 1585,
        word: "abroad",
        pos: "adv.",
        thai: "ต่างประเทศ",
        definition: "in or to a foreign country",
        hint: "foreign country",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "She is studying abroad.",
                th: "เธอกำลังเรียนต่างประเทศ"
            }
        ]
    },
    {
        id: 1586,
        word: "absence",
        pos: "n.",
        thai: "การขาดหาย",
        definition: "the state of being away from a place",
        hint: "being away from",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "His absence was noticed by everyone.",
                th: "ทุกคนสังเกตเห็นการขาดหายไปของเขา"
            }
        ]
    },
    {
        id: 1587,
        word: "absolutely",
        pos: "adv.",
        thai: "อย่างแน่นอน",
        definition: "completely; without doubt",
        hint: "completely without doubt",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "You are absolutely right.",
                th: "คุณถูกต้องอย่างแน่นอน"
            }
        ]
    },
    {
        id: 1588,
        word: "absorb",
        pos: "v.",
        thai: "ดูดซับ",
        definition: "to take in liquid or knowledge",
        hint: "take in liquid/knowledge",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Plants absorb water through their roots.",
                th: "พืชดูดซับน้ำผ่านรากของมัน"
            }
        ]
    },
    {
        id: 1589,
        word: "abstract",
        pos: "adj.",
        thai: "เป็นนามธรรม",
        definition: "existing as an idea rather than physical thing",
        hint: "idea not physical",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Love is an abstract concept.",
                th: "ความรักเป็นแนวคิดที่เป็นนามธรรม"
            }
        ]
    },
    {
        id: 1590,
        word: "accessible",
        pos: "adj.",
        thai: "เข้าถึงได้",
        definition: "easy to reach, enter, or use",
        hint: "easy to reach",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The building is accessible to wheelchairs.",
                th: "อาคารนี้เข้าถึงได้สำหรับรถเข็น"
            }
        ]
    },
    {
        id: 1591,
        word: "accompany",
        pos: "v.",
        thai: "ไปด้วยกัน",
        definition: "to go somewhere with someone",
        hint: "go with someone",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I will accompany you to the hospital.",
                th: "ฉันจะไปโรงพยาบาลกับคุณ"
            }
        ]
    },
    {
        id: 1592,
        word: "accordance",
        pos: "n.",
        thai: "ความสอดคล้อง",
        definition: "agreement or harmony with something",
        hint: "agreement harmony with",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Act in accordance with the rules.",
                th: "ปฏิบัติให้สอดคล้องกับกฎ"
            }
        ]
    },
    {
        id: 1593,
        word: "accusation",
        pos: "n.",
        thai: "การกล่าวหา",
        definition: "a claim that someone has done wrong",
        hint: "claim someone wrong",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The accusation was completely false.",
                th: "การกล่าวหานั้นเป็นเท็จโดยสิ้นเชิง"
            }
        ]
    },
    {
        id: 1594,
        word: "acquire",
        pos: "v.",
        thai: "ได้มา",
        definition: "to get or obtain something",
        hint: "get or obtain",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "It takes time to acquire new skills.",
                th: "ใช้เวลาในการได้มาซึ่งทักษะใหม่"
            }
        ]
    },
    {
        id: 1595,
        word: "acute",
        pos: "adj.",
        thai: "รุนแรง",
        definition: "very serious or severe",
        hint: "very serious severe",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He has acute chest pain.",
                th: "เขามีอาการปวดหน้าอกรุนแรง"
            }
        ]
    },
    {
        id: 1596,
        word: "adequate",
        pos: "adj.",
        thai: "เพียงพอ",
        definition: "enough for a particular purpose",
        hint: "enough for purpose",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The salary is adequate for basic needs.",
                th: "เงินเดือนเพียงพอสำหรับความจำเป็นพื้นฐาน"
            }
        ]
    },
    {
        id: 1597,
        word: "adjacent",
        pos: "adj.",
        thai: "ติดกัน",
        definition: "next to and joined with something",
        hint: "next to joined",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The hotel is adjacent to the shopping mall.",
                th: "โรงแรมอยู่ติดกับห้างสรรพสินค้า"
            }
        ]
    },
    {
        id: 1598,
        word: "administration",
        pos: "n.",
        thai: "การบริหาร",
        definition: "the process of managing something",
        hint: "process of managing",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The administration of the company is excellent.",
                th: "การบริหารของบริษัทยอดเยี่ยม"
            }
        ]
    },
    {
        id: 1599,
        word: "admission",
        pos: "n.",
        thai: "การรับเข้า",
        definition: "permission to enter a place or organization",
        hint: "permission to enter",
        level: "B1",
        cats: ["school"],
        examples: [
            {
                en: "University admission is very competitive.",
                th: "การรับเข้ามหาวิทยาลัยมีการแข่งขันสูง"
            }
        ]
    },
    {
        id: 1600,
        word: "adopt",
        pos: "v.",
        thai: "รับเลี้ยง",
        definition: "to take someone's child and raise as your own",
        hint: "take child raise",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "They decided to adopt a baby.",
                th: "พวกเขาตัดสินใจรับเลี้ยงเด็ก"
            }
        ]
    },
    {
        id: 1601,
        word: "advance",
        pos: "v.",
        thai: "ก้าวหน้า",
        definition: "to move forward or develop",
        hint: "move forward develop",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Technology advances very quickly.",
                th: "เทคโนโลยีก้าวหน้าอย่างรวดเร็ว"
            }
        ]
    },
    {
        id: 1602,
        word: "advantage",
        pos: "n.",
        thai: "ข้อได้เปรียบ",
        definition: "something that helps you succeed",
        hint: "helps you succeed",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Speaking two languages is an advantage.",
                th: "การพูดได้สองภาษาเป็นข้อได้เปรียบ"
            }
        ]
    },
    {
        id: 1603,
        word: "adverse",
        pos: "adj.",
        thai: "ที่เป็นอันตราย",
        definition: "having a negative or harmful effect",
        hint: "negative harmful effect",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The medicine has adverse side effects.",
                th: "ยานี้มีผลข้างเคียงที่เป็นอันตราย"
            }
        ]
    },
    {
        id: 1604,
        word: "aerial",
        pos: "adj.",
        thai: "ทางอากาศ",
        definition: "happening in the air",
        hint: "happening in air",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The aerial view of the city is beautiful.",
                th: "ทิวทัศน์ของเมืองจากอากาศสวยงาม"
            }
        ]
    },
    {
        id: 1605,
        word: "aesthetic",
        pos: "adj.",
        thai: "เกี่ยวกับความงาม",
        definition: "relating to beauty and art",
        hint: "beauty and art",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The building has great aesthetic appeal.",
                th: "อาคารมีความสวยงามดึงดูดใจ"
            }
        ]
    },
    {
        id: 1606,
        word: "affection",
        pos: "n.",
        thai: "ความรัก",
        definition: "a feeling of liking someone",
        hint: "feeling of liking",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She shows great affection for her children.",
                th: "เธอแสดงความรักต่อลูกๆ มาก"
            }
        ]
    },
    {
        id: 1607,
        word: "afford",
        pos: "v.",
        thai: "ซื้อได้",
        definition: "to have enough money to buy something",
        hint: "have money to buy",
        level: "B1",
        cats: ["money"],
        examples: [
            {
                en: "I can't afford a new car.",
                th: "ฉันซื้อรถใหม่ไม่ได้"
            }
        ]
    },
    {
        id: 1608,
        word: "agenda",
        pos: "n.",
        thai: "วาระการประชุม",
        definition: "a list of things to be discussed in a meeting",
        hint: "meeting discussion list",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "Let's look at today's agenda.",
                th: "มาดูวาระการประชุมวันนี้กัน"
            }
        ]
    },
    {
        id: 1609,
        word: "agent",
        pos: "n.",
        thai: "ตัวแทน",
        definition: "a person who acts for another person or organization",
        hint: "acts for another",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "She works as a travel agent.",
                th: "เธอทำงานเป็นตัวแทนท่องเที่ยว"
            }
        ]
    },
    {
        id: 1610,
        word: "aggregate",
        pos: "n.",
        thai: "ผลรวม",
        definition: "a total amount made up of smaller amounts",
        hint: "total from smaller amounts",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The aggregate score was 150 points.",
                th: "คะแนนรวมคือ 150 คะแนน"
            }
        ]
    },
    {
        id: 1611,
        word: "aggressive",
        pos: "adj.",
        thai: "ก้าวร้าว",
        definition: "ready to attack or confront",
        hint: "ready to attack",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The dog is very aggressive.",
                th: "สุนัขตัวนี้ก้าวร้าวมาก"
            }
        ]
    },
    {
        id: 1612,
        word: "aid",
        pos: "n.",
        thai: "ความช่วยเหลือ",
        definition: "help or support",
        hint: "help or support",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The country needs international aid.",
                th: "ประเทศต้องการความช่วยเหลือระหว่างประเทศ"
            }
        ]
    },
    {
        id: 1613,
        word: "aim",
        pos: "v.",
        thai: "มุ่งเป้า",
        definition: "to point or direct toward a target",
        hint: "point toward target",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Aim for the center of the target.",
                th: "เล็งไปที่ตรงกลางเป้า"
            }
        ]
    },
    {
        id: 1614,
        word: "aircraft",
        pos: "n.",
        thai: "อากาศยาน",
        definition: "any vehicle that can fly",
        hint: "vehicle that flies",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "The aircraft landed safely.",
                th: "อากาศยานลงจอดอย่างปลอดภัย"
            }
        ]
    },
    {
        id: 1615,
        word: "album",
        pos: "n.",
        thai: "อัลบั้ม",
        definition: "a collection of photos or music",
        hint: "collection photos music",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I bought her latest music album.",
                th: "ฉันซื้ออัลบั้มเพลงล่าสุดของเธอ"
            }
        ]
    },
    {
        id: 1616,
        word: "alert",
        pos: "adj.",
        thai: "ตื่นตัว",
        definition: "quick to notice and react",
        hint: "quick to notice",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Stay alert while driving.",
                th: "ตื่นตัวขณะขับรถ"
            }
        ]
    },
    {
        id: 1617,
        word: "alien",
        pos: "n.",
        thai: "มนุษย์ต่างดาว",
        definition: "a being from another planet",
        hint: "being from planet",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Scientists search for signs of alien life.",
                th: "นักวิทยาศาสตร์ค้นหาสัญญาณของมนุษย์ต่างดาว"
            }
        ]
    },
    {
        id: 1618,
        word: "allocate",
        pos: "v.",
        thai: "จัดสรร",
        definition: "to give or assign for a particular purpose",
        hint: "give for purpose",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "We need to allocate more resources.",
                th: "เราต้องจัดสรรทรัพยากรเพิ่มเติม"
            }
        ]
    },
    {
        id: 1619,
        word: "alternate",
        pos: "v.",
        thai: "สลับกัน",
        definition: "to switch between two things repeatedly",
        hint: "switch between repeatedly",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "We alternate between coffee and tea.",
                th: "เราสลับกันระหว่างกาแฟและชา"
            }
        ]
    },
    {
        id: 1620,
        word: "amateur",
        pos: "n.",
        thai: "มือสมัครเล่น",
        definition: "someone who does something for pleasure not money",
        hint: "for pleasure not money",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He's just an amateur photographer.",
                th: "เขาเป็นแค่ช่างภาพมือสมัครเล่น"
            }
        ]
    },
    {
        id: 1621,
        word: "amid",
        pos: "prep.",
        thai: "ท่ามกลาง",
        definition: "in the middle of something",
        hint: "in middle of",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She remained calm amid the chaos.",
                th: "เธอยังคงสงบท่ามกลางความวุ่นวาย"
            }
        ]
    },
    {
        id: 1622,
        word: "amplify",
        pos: "v.",
        thai: "ขยาย",
        definition: "to make something louder or larger",
        hint: "make louder larger",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The microphone amplifies your voice.",
                th: "ไมโครโฟนขยายเสียงของคุณ"
            }
        ]
    },
    {
        id: 1623,
        word: "analyse",
        pos: "v.",
        thai: "วิเคราะห์",
        definition: "to examine something carefully",
        hint: "examine carefully",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "We need to analyse the data.",
                th: "เราต้องวิเคราะห์ข้อมูล"
            }
        ]
    },
    {
        id: 1624,
        word: "ancestor",
        pos: "n.",
        thai: "บรรพบุรุษ",
        definition: "a person from your family who lived long ago",
        hint: "family lived long ago",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "My ancestors came from China.",
                th: "บรรพบุรุษของฉันมาจากจีน"
            }
        ]
    },
    {
        id: 1625,
        word: "anchor",
        pos: "n.",
        thai: "สมอ",
        definition: "a heavy object used to keep a ship in place",
        hint: "keeps ship in place",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Drop the anchor here.",
                th: "ทิ้งสมอที่นี่"
            }
        ]
    },
    {
        id: 1626,
        word: "angle",
        pos: "n.",
        thai: "มุม",
        definition: "the space between two lines that meet",
        hint: "space between lines",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Measure this angle with a protractor.",
                th: "วัดมุมนี้ด้วยโปรแทรกเตอร์"
            }
        ]
    },
    {
        id: 1627,
        word: "anonymous",
        pos: "adj.",
        thai: "ไม่เปิดเผยชื่อ",
        definition: "without giving a name",
        hint: "without giving name",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The letter was sent anonymously.",
                th: "จดหมายถูกส่งโดยไม่เปิดเผยชื่อ"
            }
        ]
    },
    {
        id: 1628,
        word: "anxious",
        pos: "adj.",
        thai: "กังวล",
        definition: "feeling worried or nervous",
        hint: "worried or nervous",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I'm anxious about the exam.",
                th: "ฉันกังวลเกี่ยวกับการสอบ"
            }
        ]
    },
    {
        id: 1629,
        word: "apartment",
        pos: "n.",
        thai: "อพาร์ตเมนต์",
        definition: "a set of rooms for living in",
        hint: "set of rooms living",
        level: "B1",
        cats: ["home"],
        examples: [
            {
                en: "I live in a small apartment.",
                th: "ฉันอยู่ในอพาร์ตเมนต์เล็กๆ"
            }
        ]
    },
    {
        id: 1630,
        word: "apparatus",
        pos: "n.",
        thai: "เครื่องมือ",
        definition: "equipment or machinery for a specific purpose",
        hint: "equipment for purpose",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The laboratory has modern apparatus.",
                th: "ห้องปฏิบัติการมีเครื่องมือที่ทันสมัย"
            }
        ]
    },
    {
        id: 1631,
        word: "apparent",
        pos: "adj.",
        thai: "เห็นได้ชัด",
        definition: "clear and obvious",
        hint: "clear and obvious",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "It's apparent that he's tired.",
                th: "เห็นได้ชัดว่าเขาเหนื่อย"
            }
        ]
    },
    {
        id: 1632,
        word: "appeal",
        pos: "v.",
        thai: "ดึงดูดใจ",
        definition: "to be attractive or interesting",
        hint: "be attractive interesting",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "This job appeals to me.",
                th: "งานนี้ดึงดูดใจฉัน"
            }
        ]
    },
    {
        id: 1633,
        word: "applaud",
        pos: "v.",
        thai: "ปรบมือ",
        definition: "to clap hands to show approval",
        hint: "clap hands approval",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The audience applauded loudly.",
                th: "ผู้ชมปรบมือเสียงดัง"
            }
        ]
    },
    {
        id: 1634,
        word: "appliance",
        pos: "n.",
        thai: "เครื่องใช้ไฟฟ้า",
        definition: "an electrical device for the home",
        hint: "electrical device home",
        level: "B1",
        cats: ["home"],
        examples: [
            {
                en: "Kitchen appliances are expensive.",
                th: "เครื่องใช้ไฟฟ้าในครัวแพง"
            }
        ]
    },
    {
        id: 1635,
        word: "applicable",
        pos: "adj.",
        thai: "ที่สามารถใช้ได้",
        definition: "relevant or appropriate",
        hint: "relevant or appropriate",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "This rule is not applicable here.",
                th: "กฎนี้ใช้ไม่ได้ที่นี่"
            }
        ]
    },
    {
        id: 1636,
        word: "appoint",
        pos: "v.",
        thai: "แต่งตั้ง",
        definition: "to choose someone for a job",
        hint: "choose for job",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "They appointed her as manager.",
                th: "พวกเขาแต่งตั้งเธอเป็นผู้จัดการ"
            }
        ]
    },
    {
        id: 1637,
        word: "appropriate",
        pos: "adj.",
        thai: "เหมาะสม",
        definition: "suitable for a particular situation",
        hint: "suitable for situation",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Wear appropriate clothes for the interview.",
                th: "แต่งตัวให้เหมาะสมสำหรับการสัมภาษณ์"
            }
        ]
    },
    {
        id: 1638,
        word: "approval",
        pos: "n.",
        thai: "การอนุมัติ",
        definition: "official permission or agreement",
        hint: "official permission agreement",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The project needs approval first.",
                th: "โครงการต้องได้รับการอนุมัติก่อน"
            }
        ]
    },
    {
        id: 1639,
        word: "approximate",
        pos: "adj.",
        thai: "โดยประมาณ",
        definition: "close to the correct amount or number",
        hint: "close to correct",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The approximate cost is $500.",
                th: "ต้นทุนโดยประมาณคือ 500 ดอลลาร์"
            }
        ]
    },
    {
        id: 1640,
        word: "arbitrary",
        pos: "adj.",
        thai: "โดยพลการ",
        definition: "based on personal choice, not reason",
        hint: "personal choice not reason",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The decision seems arbitrary.",
                th: "การตัดสินใจดูเหมือนเป็นไปโดยพลการ"
            }
        ]
    },
    {
        id: 1641,
        word: "architect",
        pos: "n.",
        thai: "สถาปนิก",
        definition: "a person who designs buildings",
        hint: "designs buildings",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The architect drew the house plans.",
                th: "สถาปนิกวาดแปลนบ้าน"
            }
        ]
    },
    {
        id: 1642,
        word: "architecture",
        pos: "n.",
        thai: "สถาปัตยกรรม",
        definition: "the design and construction of buildings",
        hint: "design construction buildings",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Thai architecture is very beautiful.",
                th: "สถาปัตยกรรมไทยสวยงามมาก"
            }
        ]
    },
    {
        id: 1643,
        word: "archive",
        pos: "n.",
        thai: "หอจดหมายเหตุ",
        definition: "a collection of historical records",
        hint: "historical records collection",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The documents are in the archive.",
                th: "เอกสารอยู่ในหอจดหมายเหตุ"
            }
        ]
    },
    {
        id: 1644,
        word: "arena",
        pos: "n.",
        thai: "สนามกีฬา",
        definition: "a large building for sports or entertainment",
        hint: "building for sports entertainment",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The concert was held in a large arena.",
                th: "คอนเสิร์ตจัดขึ้นในสนามกีฬาใหญ่"
            }
        ]
    },
    {
        id: 1645,
        word: "arithmetic",
        pos: "n.",
        thai: "เลขคณิต",
        definition: "basic mathematics involving numbers",
        hint: "basic mathematics numbers",
        level: "B1",
        cats: ["school"],
        examples: [
            {
                en: "Children learn arithmetic in school.",
                th: "เด็กเรียนเลขคณิตที่โรงเรียน"
            }
        ]
    },
    {
        id: 1646,
        word: "armor",
        pos: "n.",
        thai: "เกราะ",
        definition: "protective covering worn in battle",
        hint: "protective covering battle",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The knight wore heavy armor.",
                th: "อัศวินสวมเกราะหนัก"
            }
        ]
    },
    {
        id: 1647,
        word: "arrest",
        pos: "v.",
        thai: "จับกุม",
        definition: "to take someone to prison",
        hint: "take to prison",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The police arrested the thief.",
                th: "ตำรวจจับกุมขโมย"
            }
        ]
    },
    {
        id: 1648,
        word: "arrogant",
        pos: "adj.",
        thai: "หยิ่งยโส",
        definition: "believing you are better than others",
        hint: "believing better than others",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He's very arrogant and rude.",
                th: "เขาหยิ่งยโสและหยาบคายมาก"
            }
        ]
    },
    {
        id: 1649,
        word: "artwork",
        pos: "n.",
        thai: "งานศิลปะ",
        definition: "paintings, drawings, or sculptures",
        hint: "paintings drawings sculptures",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The museum has beautiful artwork.",
                th: "พิพิธภัณฑ์มีงานศิลปะที่สวยงาม"
            }
        ]
    },
    {
        id: 1650,
        word: "aspect",
        pos: "n.",
        thai: "ด้าน",
        definition: "a particular part or feature",
        hint: "particular part feature",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "We need to consider every aspect.",
                th: "เราต้องพิจารณาทุกด้าน"
            }
        ]
    },
    {
        id: 1651,
        word: "assemble",
        pos: "v.",
        thai: "ประกอบ",
        definition: "to put parts together",
        hint: "put parts together",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Let's assemble the furniture.",
                th: "มาประกอบเฟอร์นิเจอร์กัน"
            }
        ]
    },
    {
        id: 1652,
        word: "assert",
        pos: "v.",
        thai: "ยืนยัน",
        definition: "to state something confidently",
        hint: "state confidently",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He asserted his innocence.",
                th: "เขายืนยันความบริสุทธิ์ของตัวเอง"
            }
        ]
    },
    {
        id: 1653,
        word: "asset",
        pos: "n.",
        thai: "สินทรัพย์",
        definition: "something valuable that you own",
        hint: "valuable you own",
        level: "B1",
        cats: ["money"],
        examples: [
            {
                en: "Property is a good asset.",
                th: "อสังหาริมทรัพย์เป็นสินทรัพย์ที่ดี"
            }
        ]
    },
    {
        id: 1654,
        word: "assign",
        pos: "v.",
        thai: "มอบหมาย",
        definition: "to give someone a task or job",
        hint: "give task or job",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The teacher assigned homework.",
                th: "ครูมอบหมายการบ้าน"
            }
        ]
    },
    {
        id: 1655,
        word: "assist",
        pos: "v.",
        thai: "ช่วยเหลือ",
        definition: "to help someone",
        hint: "help someone",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Can you assist me with this?",
                th: "คุณช่วยเหลือฉันในเรื่องนี้ได้ไหม"
            }
        ]
    },
    {
        id: 1656,
        word: "associate",
        pos: "v.",
        thai: "เชื่อมโยง",
        definition: "to connect in your mind",
        hint: "connect in mind",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I associate rain with sadness.",
                th: "ฉันเชื่อมโยงฝนกับความเศร้า"
            }
        ]
    },
    {
        id: 1657,
        word: "assume",
        pos: "v.",
        thai: "สันนิษฐาน",
        definition: "to believe something is true without proof",
        hint: "believe without proof",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I assume you're coming with us.",
                th: "ฉันสันนิษฐานว่าคุณจะมากับเรา"
            }
        ]
    },
    {
        id: 1658,
        word: "assure",
        pos: "v.",
        thai: "ให้ความมั่นใจ",
        definition: "to tell someone confidently",
        hint: "tell confidently",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I assure you it's safe.",
                th: "ฉันให้ความมั่นใจว่ามันปลอดภัย"
            }
        ]
    },
    {
        id: 1659,
        word: "astonish",
        pos: "v.",
        thai: "ทำให้ประหลาดใจ",
        definition: "to surprise someone greatly",
        hint: "surprise greatly",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The magic trick astonished everyone.",
                th: "มายากลทำให้ทุกคนประหลาดใจ"
            }
        ]
    },
    {
        id: 1660,
        word: "athlete",
        pos: "n.",
        thai: "นักกีฬา",
        definition: "a person who is good at sports",
        hint: "good at sports",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She's a professional athlete.",
                th: "เธอเป็นนักกีฬามืออาชีพ"
            }
        ]
    },
    {
        id: 1661,
        word: "attain",
        pos: "v.",
        thai: "บรรลุ",
        definition: "to succeed in achieving something",
        hint: "succeed achieving",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She attained her goal of becoming a doctor.",
                th: "เธอบรรลุเป้าหมายในการเป็นหมอ"
            }
        ]
    },
    {
        id: 1662,
        word: "attorney",
        pos: "n.",
        thai: "ทนายความ",
        definition: "a lawyer who represents clients",
        hint: "lawyer represents clients",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "I need to consult my attorney.",
                th: "ฉันต้องปรึกษาทนายความ"
            }
        ]
    },
    {
        id: 1663,
        word: "auction",
        pos: "n.",
        thai: "การประมูล",
        definition: "a sale where people bid for items",
        hint: "sale people bid",
        level: "B1",
        cats: ["money"],
        examples: [
            {
                en: "The painting was sold at auction.",
                th: "ภาพวาดถูกขายในการประมูล"
            }
        ]
    },
    {
        id: 1664,
        word: "audit",
        pos: "n.",
        thai: "การตรวจสอบ",
        definition: "an official examination of accounts",
        hint: "examination of accounts",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The company underwent a financial audit.",
                th: "บริษัทผ่านการตรวจสอบทางการเงิน"
            }
        ]
    },
    {
        id: 1665,
        word: "authentic",
        pos: "adj.",
        thai: "แท้จริง",
        definition: "real and genuine",
        hint: "real and genuine",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "This is an authentic Thai restaurant.",
                th: "นี่คือร้านอาหารไทยแท้"
            }
        ]
    },
    {
        id: 1666,
        word: "auto",
        pos: "n.",
        thai: "รถยนต์",
        definition: "short for automobile",
        hint: "short for automobile",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The auto industry is very competitive.",
                th: "อุตสาหกรรมรถยนต์มีการแข่งขันสูง"
            }
        ]
    },
    {
        id: 1667,
        word: "automatic",
        pos: "adj.",
        thai: "อัตโนมัติ",
        definition: "working by itself without human control",
        hint: "working by itself",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The doors are automatic.",
                th: "ประตูเป็นแบบอัตโนมัติ"
            }
        ]
    },
    {
        id: 1668,
        word: "automobile",
        pos: "n.",
        thai: "รถยนต์",
        definition: "a car or motor vehicle",
        hint: "car motor vehicle",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The automobile changed transportation.",
                th: "รถยนต์เปลี่ยนแปลงการขนส่ง"
            }
        ]
    },
    {
        id: 1669,
        word: "autonomous",
        pos: "adj.",
        thai: "เป็นอิสระ",
        definition: "independent and self-governing",
        hint: "independent self-governing",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The region is autonomous.",
                th: "ภูมิภาคนี้เป็นอิสระ"
            }
        ]
    },
    {
        id: 1670,
        word: "avenue",
        pos: "n.",
        thai: "ถนนใหญ่",
        definition: "a wide street, often with trees",
        hint: "wide street with trees",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The shop is on Fifth Avenue.",
                th: "ร้านอยู่บนถนนฟิฟท์อเวนิว"
            }
        ]
    },
    {
        id: 1671,
        word: "aviation",
        pos: "n.",
        thai: "การบิน",
        definition: "the activity of flying aircraft",
        hint: "activity flying aircraft",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "He works in the aviation industry.",
                th: "เขาทำงานในอุตสาหกรรมการบิน"
            }
        ]
    },
    {
        id: 1672,
        word: "awake",
        pos: "adj.",
        thai: "ตื่น",
        definition: "not sleeping",
        hint: "not sleeping",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I stayed awake all night.",
                th: "ฉันตื่นทั้งคืน"
            }
        ]
    },
    {
        id: 1673,
        word: "award",
        pos: "n.",
        thai: "รางวัล",
        definition: "a prize given for achievement",
        hint: "prize for achievement",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She won an award for her research.",
                th: "เธอได้รับรางวัลจากงานวิจัย"
            }
        ]
    },
    {
        id: 1674,
        word: "aware",
        pos: "adj.",
        thai: "ตระหนัก",
        definition: "knowing about something",
        hint: "knowing about",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "I'm aware of the problem.",
                th: "ฉันตระหนักถึงปัญหา"
            }
        ]
    },
    {
        id: 1675,
        word: "awesome",
        pos: "adj.",
        thai: "ยอดเยี่ยม",
        definition: "extremely impressive or amazing",
        hint: "extremely impressive amazing",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The concert was awesome!",
                th: "คอนเสิร์ตยอดเยี่ยมมาก!"
            }
        ]
    },
    {
        id: 1676,
        word: "awful",
        pos: "adj.",
        thai: "แย่มาก",
        definition: "extremely bad or unpleasant",
        hint: "extremely bad unpleasant",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The weather is awful today.",
                th: "สภาพอากาศวันนี้แย่มาก"
            }
        ]
    },
    {
        id: 1677,
        word: "backward",
        pos: "adv.",
        thai: "ข้างหลัง",
        definition: "toward the back or rear",
        hint: "toward back rear",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Take three steps backward.",
                th: "ถอยหลังสามก้าว"
            }
        ]
    },
    {
        id: 1678,
        word: "bacteria",
        pos: "n.",
        thai: "แบคทีเรีย",
        definition: "tiny living things that can cause disease",
        hint: "tiny things cause disease",
        level: "B1",
        cats: ["health"],
        examples: [
            {
                en: "Wash your hands to kill bacteria.",
                th: "ล้างมือเพื่อฆ่าแบคทีเรีย"
            }
        ]
    },
    {
        id: 1679,
        word: "badge",
        pos: "n.",
        thai: "เครื่องหมาย",
        definition: "a small sign worn to show rank or membership",
        hint: "sign show rank membership",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Police officers wear badges.",
                th: "เจ้าหน้าที่ตำรวจสวมเครื่องหมาย"
            }
        ]
    },
    {
        id: 1680,
        word: "balloon",
        pos: "n.",
        thai: "ลูกโป่ง",
        definition: "a rubber bag filled with air or gas",
        hint: "rubber bag filled air",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Children love colorful balloons.",
                th: "เด็กๆ ชอบลูกโป่งสีสวย"
            }
        ]
    },
    {
        id: 1681,
        word: "ban",
        pos: "v.",
        thai: "ห้าม",
        definition: "to officially forbid something",
        hint: "officially forbid",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Smoking is banned in this building.",
                th: "การสูบบุหรี่ถูกห้ามในอาคารนี้"
            }
        ]
    },
    {
        id: 1682,
        word: "banner",
        pos: "n.",
        thai: "แบนเนอร์",
        definition: "a large sign or flag",
        hint: "large sign flag",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "They hung a banner across the street.",
                th: "พวกเขาแขวนแบนเนอร์ข้ามถนน"
            }
        ]
    },
    {
        id: 1683,
        word: "bare",
        pos: "adj.",
        thai: "เปลือย",
        definition: "not covered by clothes or other things",
        hint: "not covered",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He walked on the beach with bare feet.",
                th: "เขาเดินบนชายหาดด้วยเท้าเปล่า"
            }
        ]
    },
    {
        id: 1684,
        word: "bargain",
        pos: "n.",
        thai: "ของถูก",
        definition: "something sold at a lower than usual price",
        hint: "sold lower price",
        level: "B1",
        cats: ["money"],
        examples: [
            {
                en: "This shirt is a real bargain.",
                th: "เสื้อตัวนี้ถูกจริงๆ"
            }
        ]
    },
    {
        id: 1685,
        word: "barrel",
        pos: "n.",
        thai: "ถัง",
        definition: "a large round container",
        hint: "large round container",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The wine is stored in wooden barrels.",
                th: "ไวน์เก็บในถังไม้"
            }
        ]
    },
    {
        id: 1686,
        word: "barrier",
        pos: "n.",
        thai: "สิ่งกีดขวาง",
        definition: "something that blocks or prevents movement",
        hint: "blocks prevents movement",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Language can be a barrier to communication.",
                th: "ภาษาอาจเป็นสิ่งกีดขวางการสื่อสาร"
            }
        ]
    },
    {
        id: 1687,
        word: "baseball",
        pos: "n.",
        thai: "เบสบอล",
        definition: "a sport played with a bat and ball",
        hint: "sport bat ball",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Baseball is popular in America.",
                th: "เบสบอลเป็นที่นิยมในอเมริกา"
            }
        ]
    },
    {
        id: 1688,
        word: "basin",
        pos: "n.",
        thai: "อ่าง",
        definition: "a bowl-shaped container for water",
        hint: "bowl container water",
        level: "B1",
        cats: ["home"],
        examples: [
            {
                en: "Wash your hands in the basin.",
                th: "ล้างมือในอ่าง"
            }
        ]
    },
    {
        id: 1689,
        word: "basket",
        pos: "n.",
        thai: "ตะกร้า",
        definition: "a container made of thin strips woven together",
        hint: "container woven strips",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Put the fruit in the basket.",
                th: "ใส่ผลไม้ในตะกร้า"
            }
        ]
    },
    {
        id: 1690,
        word: "basketball",
        pos: "n.",
        thai: "บาสเกตบอล",
        definition: "a sport played by throwing a ball through a hoop",
        hint: "sport ball through hoop",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He plays basketball every weekend.",
                th: "เขาเล่นบาสเกตบอลทุกสุดสัปดาห์"
            }
        ]
    },
    {
        id: 1691,
        word: "bay",
        pos: "n.",
        thai: "อ่าว",
        definition: "a curved area of coast where the sea comes inland",
        hint: "curved coast sea inland",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The boat sailed into the bay.",
                th: "เรือแล่นเข้าอ่าว"
            }
        ]
    },
    {
        id: 1692,
        word: "beam",
        pos: "n.",
        thai: "คานไม้",
        definition: "a long piece of wood or metal used in construction",
        hint: "long piece construction",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The ceiling beam is made of oak.",
                th: "คานไม้เพดานทำจากไม้โอ๊ก"
            }
        ]
    },
    {
        id: 1693,
        word: "bean",
        pos: "n.",
        thai: "ถั่ว",
        definition: "a seed that can be cooked and eaten",
        hint: "seed cooked eaten",
        level: "B1",
        cats: ["food"],
        examples: [
            {
                en: "Coffee beans are used to make coffee.",
                th: "เมล็ดกาแฟใช้ทำกาแฟ"
            }
        ]
    },
    {
        id: 1694,
        word: "bench",
        pos: "n.",
        thai: "ม้านั่ง",
        definition: "a long seat for several people",
        hint: "long seat several people",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "They sat on the bench in the park.",
                th: "พวกเขานั่งบนม้านั่งในสวน"
            }
        ]
    },
    {
        id: 1695,
        word: "bend",
        pos: "v.",
        thai: "งอ",
        definition: "to curve or make something curve",
        hint: "curve make curve",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Bend your knees when you lift heavy things.",
                th: "งอเข่าเมื่อคุณยกของหนัก"
            }
        ]
    },
    {
        id: 1696,
        word: "billion",
        pos: "num.",
        thai: "พันล้าน",
        definition: "one thousand million",
        hint: "thousand million",
        level: "B1",
        cats: ["money"],
        examples: [
            {
                en: "The company is worth two billion dollars.",
                th: "บริษัทมีมูลค่าสองพันล้านดอลลาร์"
            }
        ]
    },
    {
        id: 1697,
        word: "bind",
        pos: "v.",
        thai: "ผูก",
        definition: "to tie or fasten tightly",
        hint: "tie fasten tightly",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Bind the papers together with string.",
                th: "ผูกกระดาษเข้าด้วยกันด้วยเชือก"
            }
        ]
    },
    {
        id: 1698,
        word: "bite",
        pos: "v.",
        thai: "กัด",
        definition: "to use teeth to cut into something",
        hint: "teeth cut into",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The dog might bite if you touch it.",
                th: "สุนัขอาจกัดถ้าคุณแตะมัน"
            }
        ]
    },
    {
        id: 1699,
        word: "blame",
        pos: "v.",
        thai: "โทษ",
        definition: "to say someone is responsible for something bad",
        hint: "responsible something bad",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "Don't blame me for the mistake.",
                th: "อย่าโทษฉันเรื่องความผิดพลาด"
            }
        ]
    },
    {
        id: 1700,
        word: "blank",
        pos: "adj.",
        thai: "ว่าง",
        definition: "empty or with nothing written on it",
        hint: "empty nothing written",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Please fill in the blank spaces.",
                th: "กรุณากรอกในช่องว่าง"
            }
        ]
    },
    {
        id: 1701,
        word: "blast",
        pos: "n.",
        thai: "การระเบิด",
        definition: "a sudden loud sound or explosion",
        hint: "sudden loud explosion",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The blast could be heard from miles away.",
                th: "เสียงระเบิดได้ยินจากระยะไมลส์"
            }
        ]
    },
    {
        id: 1702,
        word: "blend",
        pos: "v.",
        thai: "ผสม",
        definition: "to mix things together smoothly",
        hint: "mix together smoothly",
        level: "B1",
        cats: ["food"],
        examples: [
            {
                en: "Blend the ingredients until smooth.",
                th: "ผสมส่วนผสมจนเนียน"
            }
        ]
    },
    {
        id: 1703,
        word: "bless",
        pos: "v.",
        thai: "อวยพร",
        definition: "to ask for divine protection or favor",
        hint: "divine protection favor",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "May God bless you.",
                th: "ขอพระเจ้าอวยพรคุณ"
            }
        ]
    },
    {
        id: 1704,
        word: "blind",
        pos: "adj.",
        thai: "ตาบอด",
        definition: "unable to see",
        hint: "unable see",
        level: "B1",
        cats: ["health"],
        examples: [
            {
                en: "The accident left him blind.",
                th: "อุบัติเหตุทำให้เขาตาบอด"
            }
        ]
    },
    {
        id: 1705,
        word: "block",
        pos: "v.",
        thai: "ปิดกั้น",
        definition: "to stop something from moving or happening",
        hint: "stop moving happening",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The fallen tree blocks the road.",
                th: "ต้นไม้ที่ล้มปิดกั้นถนน"
            }
        ]
    },
    {
        id: 1706,
        word: "bloom",
        pos: "v.",
        thai: "บาน",
        definition: "when flowers open and appear",
        hint: "flowers open appear",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The flowers bloom in spring.",
                th: "ดอกไม้บานในฤดูใบไม้ผลิ"
            }
        ]
    },
    {
        id: 1707,
        word: "blow",
        pos: "v.",
        thai: "เป่า",
        definition: "to move air from your mouth or move with air",
        hint: "move air mouth",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Blow out the candles on your cake.",
                th: "เป่าเทียนบนเค้กของคุณ"
            }
        ]
    },
    {
        id: 1708,
        word: "board",
        pos: "n.",
        thai: "กระดาน",
        definition: "a flat piece of wood or other material",
        hint: "flat piece wood",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Write your name on the board.",
                th: "เขียนชื่อของคุณบนกระดาน"
            }
        ]
    },
    {
        id: 1709,
        word: "boast",
        pos: "v.",
        thai: "โอ้อวด",
        definition: "to talk proudly about yourself",
        hint: "talk proudly yourself",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "He likes to boast about his achievements.",
                th: "เขาชอบโอ้อวดเรื่องความสำเร็จ"
            }
        ]
    },
    {
        id: 1710,
        word: "bold",
        pos: "adj.",
        thai: "กล้าหาญ",
        definition: "brave and confident",
        hint: "brave confident",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "It was a bold decision to start his own business.",
                th: "การตัดสินใจเริ่มธุรกิจเองเป็นการตัดสินใจที่กล้าหาญ"
            }
        ]
    },
    {
        id: 1711,
        word: "bomb",
        pos: "n.",
        thai: "ระเบิด",
        definition: "a weapon that explodes",
        hint: "weapon explodes",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The bomb squad safely removed the device.",
                th: "หน่วยเก็บกู้ระเบิดได้เอาอุปกรณ์ออกอย่างปลอดภัย"
            }
        ]
    },
    {
        id: 1712,
        word: "bond",
        pos: "n.",
        thai: "ความผูกพัน",
        definition: "a strong connection between people",
        hint: "strong connection people",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "They have a strong bond of friendship.",
                th: "พวกเขามีความผูกพันทางมิตรภาพที่แน่นแฟ้น"
            }
        ]
    },
    {
        id: 1713,
        word: "boost",
        pos: "v.",
        thai: "เพิ่ม",
        definition: "to increase or improve something",
        hint: "increase improve something",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "Exercise can boost your energy.",
                th: "การออกกำลังกายสามารถเพิ่มพลังงานของคุณ"
            }
        ]
    },
    {
        id: 1714,
        word: "border",
        pos: "n.",
        thai: "ชายแดน",
        definition: "the line between two countries",
        hint: "line two countries",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "We crossed the border into Mexico.",
                th: "เราข้ามชายแดนเข้าเม็กซิโก"
            }
        ]
    },
    {
        id: 1715,
        word: "bother",
        pos: "v.",
        thai: "รบกวน",
        definition: "to annoy or trouble someone",
        hint: "annoy trouble someone",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "Sorry to bother you at work.",
                th: "ขอโทษที่รบกวนคุณที่ทำงาน"
            }
        ]
    },
    {
        id: 1716,
        word: "bounce",
        pos: "v.",
        thai: "เด้ง",
        definition: "to jump back after hitting something",
        hint: "jump back hitting",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The ball bounced off the wall.",
                th: "ลูกบอลเด้งออกจากกำแพง"
            }
        ]
    },
    {
        id: 1717,
        word: "bound",
        pos: "adj.",
        thai: "แน่ใจจะเกิด",
        definition: "certain to happen",
        hint: "certain happen",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She's bound to succeed with her talent.",
                th: "เธอแน่ใจว่าจะประสบความสำเร็จด้วยความสามารถของเธอ"
            }
        ]
    },
    {
        id: 1718,
        word: "bow",
        pos: "v.",
        thai: "โค้ง",
        definition: "to bend forward as a sign of respect",
        hint: "bend forward respect",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "The actors bow at the end of the play.",
                th: "นักแสดงโค้งคำนับเมื่อจบการแสดง"
            }
        ]
    },
    {
        id: 1719,
        word: "branch",
        pos: "n.",
        thai: "กิ่ง",
        definition: "part of a tree that grows from the trunk",
        hint: "tree grows trunk",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "A bird is sitting on that branch.",
                th: "นกกำลังนั่งอยู่บนกิ่งไม้นั้น"
            }
        ]
    },
    {
        id: 1720,
        word: "brand",
        pos: "n.",
        thai: "ตราสินค้า",
        definition: "a company's name or product name",
        hint: "company product name",
        level: "B1",
        cats: ["shopping"],
        examples: [
            {
                en: "What brand of shoes do you prefer?",
                th: "คุณชอบรองเท้ายี่ห้ออะไร?"
            }
        ]
    },
    {
        id: 1721,
        word: "brave",
        pos: "adj.",
        thai: "กล้าหาญ",
        definition: "not afraid of danger",
        hint: "not afraid danger",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The brave firefighter saved the child.",
                th: "นักดับเพลิงที่กล้าหาญช่วยเด็กไว้"
            }
        ]
    },
    {
        id: 1722,
        word: "breed",
        pos: "v.",
        thai: "ผสมพันธุ์",
        definition: "to produce young animals",
        hint: "produce young animals",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Rabbits breed very quickly.",
                th: "กระต่ายผสมพันธุ์ได้รวดเร็วมาก"
            }
        ]
    },
    {
        id: 1723,
        word: "brick",
        pos: "n.",
        thai: "อิฐ",
        definition: "a hard block used for building",
        hint: "hard block building",
        level: "B1",
        cats: ["home"],
        examples: [
            {
                en: "The house is made of red brick.",
                th: "บ้านสร้างด้วยอิฐสีแดง"
            }
        ]
    },
    {
        id: 1724,
        word: "brief",
        pos: "adj.",
        thai: "สั้น",
        definition: "lasting only a short time",
        hint: "lasting short time",
        level: "B1",
        cats: ["time"],
        examples: [
            {
                en: "Please give a brief summary.",
                th: "กรุณาสรุปสั้นๆ"
            }
        ]
    },
    {
        id: 1725,
        word: "brilliant",
        pos: "adj.",
        thai: "ยอดเยี่ยม",
        definition: "extremely clever or excellent",
        hint: "extremely clever excellent",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She has a brilliant mind.",
                th: "เธอมีสมองที่ยอดเยี่ยม"
            }
        ]
    },
    {
        id: 1726,
        word: "broad",
        pos: "adj.",
        thai: "กว้าง",
        definition: "wide from side to side",
        hint: "wide side side",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The river is very broad here.",
                th: "แม่น้ำตรงนี้กว้างมาก"
            }
        ]
    },
    {
        id: 1727,
        word: "broadcast",
        pos: "v.",
        thai: "ออกอากาศ",
        definition: "to send out programs on TV or radio",
        hint: "send programs TV radio",
        level: "B1",
        cats: ["technology"],
        examples: [
            {
                en: "The news is broadcast at 6 PM.",
                th: "ข่าวออกอากาศเวลา 6 โมงเย็น"
            }
        ]
    },
    {
        id: 1728,
        word: "bubble",
        pos: "n.",
        thai: "ฟอง",
        definition: "a round ball of air in liquid",
        hint: "round ball air liquid",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The children blew soap bubbles.",
                th: "เด็กๆ เป่าฟองสบู่"
            }
        ]
    },
    {
        id: 1729,
        word: "bulk",
        pos: "n.",
        thai: "จำนวนมาก",
        definition: "large amount or quantity",
        hint: "large amount quantity",
        level: "B1",
        cats: ["shopping"],
        examples: [
            {
                en: "Buying in bulk saves money.",
                th: "การซื้อเป็นจำนวนมากช่วยประหยัดเงิน"
            }
        ]
    },
    {
        id: 1730,
        word: "bundle",
        pos: "n.",
        thai: "มัด",
        definition: "things tied or wrapped together",
        hint: "things tied wrapped together",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She carried a bundle of newspapers.",
                th: "เธอหิ้วหนังสือพิมพ์เป็นมัด"
            }
        ]
    },
    {
        id: 1731,
        word: "burden",
        pos: "n.",
        thai: "ภาระ",
        definition: "something heavy or difficult to carry",
        hint: "heavy difficult carry",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Don't be a burden to your family.",
                th: "อย่าเป็นภาระของครอบครัว"
            }
        ]
    },
    {
        id: 1732,
        word: "burst",
        pos: "v.",
        thai: "แตก",
        definition: "to break open suddenly",
        hint: "break open suddenly",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The balloon burst with a loud pop.",
                th: "ลูกโป่งแตกด้วยเสียงดัง"
            }
        ]
    },
    {
        id: 1733,
        word: "bury",
        pos: "v.",
        thai: "ฝัง",
        definition: "to put something in the ground",
        hint: "put something ground",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The dog buried its bone in the yard.",
                th: "สุนัขฝังกระดูกในสวน"
            }
        ]
    },
    {
        id: 1734,
        word: "bush",
        pos: "n.",
        thai: "พุ่มไม้",
        definition: "a plant like a small tree",
        hint: "plant small tree",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "There are roses growing on that bush.",
                th: "มีดอกกุหลาบงอกบนพุ่มไม้นั้น"
            }
        ]
    },
    {
        id: 1735,
        word: "buyer",
        pos: "n.",
        thai: "ผู้ซื้อ",
        definition: "a person who buys something",
        hint: "person buys something",
        level: "B1",
        cats: ["shopping"],
        examples: [
            {
                en: "The buyer paid cash for the house.",
                th: "ผู้ซื้อจ่ายเงินสดสำหรับบ้าน"
            }
        ]
    },
    {
        id: 1736,
        word: "cage",
        pos: "n.",
        thai: "กรง",
        definition: "a container with bars for keeping animals",
        hint: "container bars animals",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The bird is singing in its cage.",
                th: "นกกำลังร้องเพลงในกรง"
            }
        ]
    },
    {
        id: 1737,
        word: "calculate",
        pos: "v.",
        thai: "คำนวณ",
        definition: "to find an answer using math",
        hint: "find answer math",
        level: "B1",
        cats: ["school"],
        examples: [
            {
                en: "Calculate the total cost please.",
                th: "กรุณาคำนวณค่าใช้จ่ายทั้งหมด"
            }
        ]
    },
    {
        id: 1738,
        word: "campus",
        pos: "n.",
        thai: "วิทยาเขต",
        definition: "the buildings and land of a university",
        hint: "buildings land university",
        level: "B1",
        cats: ["school"],
        examples: [
            {
                en: "The campus has a beautiful library.",
                th: "วิทยาเขตมีห้องสมุดที่สวยงาม"
            }
        ]
    },
    {
        id: 1739,
        word: "capability",
        pos: "n.",
        thai: "ความสามารถ",
        definition: "the ability to do something",
        hint: "ability do something",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "She has the capability to lead the team.",
                th: "เธอมีความสามารถในการนำทีม"
            }
        ]
    },
    {
        id: 1740,
        word: "capture",
        pos: "v.",
        thai: "จับ",
        definition: "to catch or take control of",
        hint: "catch take control",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The camera can capture beautiful photos.",
                th: "กล้องสามารถจับภาพที่สวยงามได้"
            }
        ]
    },
    {
        id: 1741,
        word: "cargo",
        pos: "n.",
        thai: "สินค้า",
        definition: "goods carried by a ship, plane, or truck",
        hint: "goods carried ship plane",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "The ship carries cargo across the ocean.",
                th: "เรือขนส่งสินค้าข้ามมหาสมุทร"
            }
        ]
    },
    {
        id: 1742,
        word: "cart",
        pos: "n.",
        thai: "รถเข็น",
        definition: "a vehicle for carrying things",
        hint: "vehicle carrying things",
        level: "B1",
        cats: ["shopping"],
        examples: [
            {
                en: "Put the groceries in the shopping cart.",
                th: "ใส่ของชำในรถเข็น"
            }
        ]
    },
    {
        id: 1743,
        word: "carve",
        pos: "v.",
        thai: "แกะ",
        definition: "to cut shapes in wood or stone",
        hint: "cut shapes wood stone",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "He likes to carve animals from wood.",
                th: "เขาชอบแกะสัตว์จากไม้"
            }
        ]
    },
    {
        id: 1744,
        word: "cast",
        pos: "v.",
        thai: "โยน",
        definition: "to throw something",
        hint: "throw something",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Cast your fishing line into the water.",
                th: "โยนเบ็ดตกปลาลงไปในน้ำ"
            }
        ]
    },
    {
        id: 1745,
        word: "casual",
        pos: "adj.",
        thai: "สบายๆ",
        definition: "relaxed and informal",
        hint: "relaxed informal",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "You can wear casual clothes to the party.",
                th: "คุณสามารถใส่เสื้อผ้าสบายๆ ไปงานเลี้ยง"
            }
        ]
    },
    {
        id: 1746,
        word: "catalog",
        pos: "n.",
        thai: "แคตตาล็อก",
        definition: "a book showing things you can buy",
        hint: "book showing things buy",
        level: "B1",
        cats: ["shopping"],
        examples: [
            {
                en: "I ordered from the clothing catalog.",
                th: "ฉันสั่งจากแคตตาล็อกเสื้อผ้า"
            }
        ]
    },
    {
        id: 1747,
        word: "cattle",
        pos: "n.",
        thai: "วัว",
        definition: "cows kept on a farm",
        hint: "cows kept farm",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The farmer has 50 head of cattle.",
                th: "ชาวนามีวัว 50 ตัว"
            }
        ]
    },
    {
        id: 1748,
        word: "cause",
        pos: "v.",
        thai: "ทำให้เกิด",
        definition: "to make something happen",
        hint: "make something happen",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "Rain can cause floods.",
                th: "ฝนสามารถทำให้เกิดน้ำท่วม"
            }
        ]
    },
    {
        id: 1749,
        word: "cave",
        pos: "n.",
        thai: "ถ้ำ",
        definition: "a hollow space in rock or ground",
        hint: "hollow space rock ground",
        level: "B1",
        cats: ["travel"],
        examples: [
            {
                en: "We explored the deep cave.",
                th: "เราสำรวจถ้ำลึก"
            }
        ]
    },
    {
        id: 1750,
        word: "cell",
        pos: "n.",
        thai: "เซลล์",
        definition: "the smallest part of a living thing",
        hint: "smallest part living thing",
        level: "B1",
        cats: ["health"],
        examples: [
            {
                en: "The human body has millions of cells.",
                th: "ร่างกายมนุษย์มีเซลล์หลายล้านเซลล์"
            }
        ]
    },
    {
        id: 1751,
        word: "cement",
        pos: "n.",
        thai: "ปูนซีเมนต์",
        definition: "a gray powder used to make concrete",
        hint: "gray powder concrete",
        level: "B1",
        cats: ["home"],
        examples: [
            {
                en: "We need cement to build the wall.",
                th: "เราต้องการปูนซีเมนต์ในการสร้างกำแพง"
            }
        ]
    },
    {
        id: 1752,
        word: "chamber",
        pos: "n.",
        thai: "ห้อง",
        definition: "a room, especially a formal one",
        hint: "room especially formal",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The meeting was held in the main chamber.",
                th: "การประชุมจัดขึ้นในห้องหลัก"
            }
        ]
    },
    {
        id: 1753,
        word: "champion",
        pos: "n.",
        thai: "แชมเปี้ยน",
        definition: "the winner of a competition",
        hint: "winner competition",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "She is the tennis champion.",
                th: "เธอเป็นแชมเปี้ยนเทนนิส"
            }
        ]
    },
    {
        id: 1754,
        word: "channel",
        pos: "n.",
        thai: "ช่อง",
        definition: "a TV or radio station",
        hint: "TV radio station",
        level: "B1",
        cats: ["technology"],
        examples: [
            {
                en: "What channel is the news on?",
                th: "ข่าวอยู่ช่องอะไร?"
            }
        ]
    },
    {
        id: 1755,
        word: "chapter",
        pos: "n.",
        thai: "บท",
        definition: "a section of a book",
        hint: "section book",
        level: "B1",
        cats: ["school"],
        examples: [
            {
                en: "Read chapter three for homework.",
                th: "อ่านบทที่สามเป็นการบ้าน"
            }
        ]
    },
    {
        id: 1756,
        word: "charity",
        pos: "n.",
        thai: "การกุศล",
        definition: "giving help to people in need",
        hint: "giving help people need",
        level: "B1",
        cats: ["social"],
        examples: [
            {
                en: "She works for a children's charity.",
                th: "เธอทำงานให้กับองค์กรการกุศลเด็ก"
            }
        ]
    },
    {
        id: 1757,
        word: "chart",
        pos: "n.",
        thai: "แผนภูมิ",
        definition: "a drawing that shows information",
        hint: "drawing shows information",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The chart shows sales data.",
                th: "แผนภูมิแสดงข้อมูลการขาย"
            }
        ]
    },
    {
        id: 1758,
        word: "chase",
        pos: "v.",
        thai: "ไล่",
        definition: "to run after someone or something",
        hint: "run after someone something",
        level: "B1",
        cats: ["daily"],
        examples: [
            {
                en: "The cat likes to chase mice.",
                th: "แมวชอบไล่หนู"
            }
        ]
    },
    {
        id: 1759,
        word: "chest",
        pos: "n.",
        thai: "หน้าอก",
        definition: "the front part of your body between neck and stomach",
        hint: "front body neck stomach",
        level: "B1",
        cats: ["health"],
        examples: [
            {
                en: "He has pain in his chest.",
                th: "เขามีอาการปวดหน้าอก"
            }
        ]
    },
    {
        id: 1760,
        word: "chief",
        pos: "n.",
        thai: "หัวหน้า",
        definition: "the leader or most important person",
        hint: "leader most important person",
        level: "B1",
        cats: ["work"],
        examples: [
            {
                en: "The police chief spoke to reporters.",
                th: "หัวหน้าตำรวจพูดกับนักข่าว"
            }
        ]
    },
    {
        id: 1761,
        word: "abundant",
        pos: "adj.",
        thai: "มากมาย",
        definition: "existing in large quantities",
        hint: "large quantities",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "The forest has abundant wildlife.",
                th: "ป่านี้มีสัตว์ป่ามากมาย"
            }
        ]
    },
    {
        id: 1762,
        word: "accumulate",
        pos: "v.",
        thai: "สะสม",
        definition: "to gather or collect gradually",
        hint: "gather collect gradually",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "Dust accumulates on unused furniture.",
                th: "ฝุ่นสะสมบนเฟอร์นิเจอร์ที่ไม่ได้ใช้"
            }
        ]
    },
    {
        id: 1763,
        word: "acknowledge",
        pos: "v.",
        thai: "รับทราบ",
        definition: "to accept or admit the truth",
        hint: "accept admit truth",
        level: "B2",
        cats: ["social"],
        examples: [
            {
                en: "She acknowledged her mistake.",
                th: "เธอรับทราบความผิดพลาดของเธอ"
            }
        ]
    },
    {
        id: 1764,
        word: "alternative",
        pos: "n.",
        thai: "ทางเลือก",
        definition: "another possibility or option",
        hint: "another possibility option",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "We need an alternative plan.",
                th: "เราต้องการแผนทางเลือก"
            }
        ]
    },
    {
        id: 1765,
        word: "ambassador",
        pos: "n.",
        thai: "ทูต",
        definition: "a diplomatic representative of a country",
        hint: "diplomatic representative country",
        level: "B2",
        cats: ["work"],
        examples: [
            {
                en: "The ambassador met with officials.",
                th: "ทูตพบกับเจ้าหน้าที่"
            }
        ]
    },
    {
        id: 1766,
        word: "appealing",
        pos: "adj.",
        thai: "น่าดึงดูด",
        definition: "attractive or interesting",
        hint: "attractive interesting",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "The job offer is very appealing.",
                th: "ข้อเสนองานนี้น่าดึงดูดมาก"
            }
        ]
    },
    {
        id: 1767,
        word: "attribute",
        pos: "v.",
        thai: "ให้เครดิต",
        definition: "to say something is the result of",
        hint: "say result of",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "She attributes her success to hard work.",
                th: "เธอให้เครดิตความสำเร็จแก่การทำงานหนัก"
            }
        ]
    },
    {
        id: 1768,
        word: "audible",
        pos: "adj.",
        thai: "ได้ยินได้",
        definition: "able to be heard",
        hint: "able heard",
        level: "B2",
        cats: ["daily"],
        examples: [
            {
                en: "Her voice was barely audible.",
                th: "เสียงของเธอแทบจะไม่ได้ยิน"
            }
        ]
    },
    {
        id: 1769,
        word: "authorize",
        pos: "v.",
        thai: "อนุญาต",
        definition: "to give official permission",
        hint: "give official permission",
        level: "B2",
        cats: ["work"],
        examples: [
            {
                en: "The manager authorized the purchase.",
                th: "ผู้จัดการอนุญาตให้ซื้อ"
            }
        ]
    },
    {
        id: 1770,
        word: "awkward",
        pos: "adj.",
        thai: "อึดอัด",
        definition: "causing difficulty or embarrassment",
        hint: "causing difficulty embarrassment",
        level: "B2",
        cats: ["social"],
        examples: [
            {
                en: "There was an awkward silence.",
                th: "มีความเงียบที่อึดอัด"
            }
        ]
    },
    {
        id: 1771,
        word: "behalf",
        pos: "n.",
        thai: "ในนาม",
        definition: "in the interest of someone else",
        hint: "interest someone else",
        level: "B2",
        cats: ["social"],
        examples: [
            {
                en: "I speak on behalf of the team.",
                th: "ฉันพูดในนามของทีม"
            }
        ]
    },
    {
        id: 1772,
        word: "benchmark",
        pos: "n.",
        thai: "มาตรฐาน",
        definition: "a standard for measuring performance",
        hint: "standard measuring performance",
        level: "B2",
        cats: ["work"],
        examples: [
            {
                en: "This product sets the benchmark.",
                th: "ผลิตภัณฑ์นี้กำหนดมาตรฐาน"
            }
        ]
    },
    {
        id: 1773,
        word: "bias",
        pos: "n.",
        thai: "อคติ",
        definition: "unfair preference for one thing over another",
        hint: "unfair preference one another",
        level: "B2",
        cats: ["social"],
        examples: [
            {
                en: "The judge showed no bias.",
                th: "ผู้พิพากษาไม่แสดงอคติ"
            }
        ]
    }
];