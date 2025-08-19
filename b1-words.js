// B1 Level Words (150 needed)
const fs = require('fs');
const VocabularyManager = require('./vocabulary-utils.js');

const vm = new VocabularyManager();

const b1Words = [
    // Professional & Academic (30 words)
    { word: "career", pos: "n.", thai: "อาชีพ", definition: "professional life path", hint: "job progression", cats: ["work"], examples: [{ en: "She has a successful career.", th: "เธอมีอาชีพที่ประสบความสำเร็จ" }] },
    { word: "interview", pos: "n.", thai: "การสัมภาษณ์", definition: "formal meeting for job", hint: "job application", cats: ["work"], examples: [{ en: "I have a job interview tomorrow.", th: "พรุ่งนี้ฉันมีสัมภาษณ์งาน" }] },
    { word: "application", pos: "n.", thai: "ใบสมัคร", definition: "formal request", hint: "apply for something", cats: ["work", "school"], examples: [{ en: "Submit your application online.", th: "ส่งใบสมัครทางออนไลน์" }] },
    { word: "qualification", pos: "n.", thai: "คุณสมบัติ", definition: "skills or education needed", hint: "requirements", cats: ["work", "school"], examples: [{ en: "What qualifications do you have?", th: "คุณมีคุณสมบัติอะไรบ้าง" }] },
    { word: "certificate", pos: "n.", thai: "ใบรับรอง", definition: "official document", hint: "proof of achievement", cats: ["work", "school"], examples: [{ en: "I received a certificate.", th: "ฉันได้รับใบรับรอง" }] },
    { word: "degree", pos: "n.", thai: "ปริญญา", definition: "university qualification", hint: "university diploma", cats: ["school"], examples: [{ en: "She has a master's degree.", th: "เธอมีปริญญาโท" }] },
    { word: "experience", pos: "n.", thai: "ประสบการณ์", definition: "knowledge from doing", hint: "practical knowledge", cats: ["work"], examples: [{ en: "He has five years experience.", th: "เขามีประสบการณ์ห้าปี" }] },
    { word: "skill", pos: "n.", thai: "ทักษะ", definition: "ability to do something well", hint: "talent ability", cats: ["work"], examples: [{ en: "Communication skills are important.", th: "ทักษะการสื่อสารสำคัญ" }] },
    { word: "training", pos: "n.", thai: "การฝึกอบรม", definition: "learning new skills", hint: "skill development", cats: ["work"], examples: [{ en: "Staff need training.", th: "พนักงานต้องการการฝึกอบรม" }] },
    { word: "promotion", pos: "n.", thai: "การเลื่อนตำแหน่ง", definition: "advancement at work", hint: "job advancement", cats: ["work"], examples: [{ en: "She got a promotion.", th: "เธอได้เลื่อนตำแหน่ง" }] },
    { word: "responsibility", pos: "n.", thai: "ความรับผิดชอบ", definition: "duty or obligation", hint: "job duties", cats: ["work"], examples: [{ en: "This job has many responsibilities.", th: "งานนี้มีความรับผิดชอบมาก" }] },
    { word: "colleague", pos: "n.", thai: "เพื่อนร่วมงาน", definition: "person you work with", hint: "coworker", cats: ["work"], examples: [{ en: "My colleagues are friendly.", th: "เพื่อนร่วมงานของฉันเป็นมิตร" }] },
    { word: "department", pos: "n.", thai: "แผนก", definition: "section of organization", hint: "work division", cats: ["work"], examples: [{ en: "I work in the sales department.", th: "ฉันทำงานในแผนกขาย" }] },
    { word: "conference", pos: "n.", thai: "การประชุมใหญ่", definition: "large formal meeting", hint: "big meeting", cats: ["work"], examples: [{ en: "The conference was informative.", th: "การประชุมให้ข้อมูลดี" }] },
    { word: "presentation", pos: "n.", thai: "การนำเสนอ", definition: "showing information to group", hint: "formal showing", cats: ["work", "school"], examples: [{ en: "Give a presentation tomorrow.", th: "นำเสนอพรุ่งนี้" }] },
    { word: "deadline", pos: "n.", thai: "กำหนดเวลา", definition: "time limit for completion", hint: "time limit", cats: ["work", "school"], examples: [{ en: "The deadline is next Friday.", th: "กำหนดเวลาคือวันศุกร์หน้า" }] },
    { word: "project", pos: "n.", thai: "โครงการ", definition: "planned work activity", hint: "work plan", cats: ["work", "school"], examples: [{ en: "Our project is almost finished.", th: "โครงการของเราเกือบเสร็จ" }] },
    { word: "contract", pos: "n.", thai: "สัญญา", definition: "legal agreement", hint: "work agreement", cats: ["work"], examples: [{ en: "Sign the contract carefully.", th: "เซ็นสัญญาอย่างระมัดระวัง" }] },
    { word: "client", pos: "n.", thai: "ลูกค้า", definition: "person who buys services", hint: "customer", cats: ["work"], examples: [{ en: "The client is satisfied.", th: "ลูกค้าพอใจ" }] },
    { word: "schedule", pos: "n.", thai: "ตารางเวลา", definition: "plan of activities", hint: "time plan", cats: ["work", "time"], examples: [{ en: "Check your schedule.", th: "ตรวจสอบตารางเวลาของคุณ" }] },
    { word: "appointment", pos: "n.", thai: "การนัดหมาย", definition: "arranged meeting", hint: "planned meeting", cats: ["work", "health"], examples: [{ en: "I have an appointment at 3 PM.", th: "ฉันมีนัดหมายตอน 3 โมงเย็น" }] },
    { word: "opportunity", pos: "n.", thai: "โอกาส", definition: "chance for advancement", hint: "good chance", cats: ["work"], examples: [{ en: "This is a great opportunity.", th: "นี่เป็นโอกาสที่ดี" }] },
    { word: "achievement", pos: "n.", thai: "ความสำเร็จ", definition: "successful completion", hint: "success", cats: ["work", "school"], examples: [{ en: "Celebrate your achievements.", th: "เฉลิมฉลองความสำเร็จของคุณ" }] },
    { word: "challenge", pos: "n.", thai: "ความท้าทาย", definition: "difficult task", hint: "hard problem", cats: ["work"], examples: [{ en: "This job is a challenge.", th: "งานนี้เป็นความท้าทาย" }] },
    { word: "solution", pos: "n.", thai: "วิธีแก้ปัญหา", definition: "answer to problem", hint: "problem answer", cats: ["work"], examples: [{ en: "We found a solution.", th: "เราหาวิธีแก้ปัญหาได้" }] },
    { word: "strategy", pos: "n.", thai: "กลยุทธ์", definition: "plan to achieve goal", hint: "master plan", cats: ["work"], examples: [{ en: "Our strategy is working.", th: "กลยุทธ์ของเราได้ผล" }] },
    { word: "objective", pos: "n.", thai: "วัตถุประสงค์", definition: "goal or aim", hint: "target goal", cats: ["work"], examples: [{ en: "What's your objective?", th: "วัตถุประสงค์ของคุณคืออะไร" }] },
    { word: "performance", pos: "n.", thai: "ผลงาน", definition: "how well you do", hint: "work quality", cats: ["work"], examples: [{ en: "Your performance is excellent.", th: "ผลงานของคุณยอดเยี่ยม" }] },
    { word: "evaluation", pos: "n.", thai: "การประเมิน", definition: "assessment of quality", hint: "judging quality", cats: ["work", "school"], examples: [{ en: "Annual performance evaluation.", th: "การประเมินผลงานประจำปี" }] },
    { word: "feedback", pos: "n.", thai: "ข้อเสนอแนะ", definition: "comments about performance", hint: "response comments", cats: ["work"], examples: [{ en: "Give me feedback on my work.", th: "ให้ข้อเสนอแนะเกี่ยวกับงานของฉัน" }] },

    // Travel & Tourism (25 words)
    { word: "vacation", pos: "n.", thai: "วันหยุดพักผ่อน", definition: "time off for rest", hint: "holiday trip", cats: ["travel"], examples: [{ en: "We're going on vacation.", th: "เราจะไปพักผ่อน" }] },
    { word: "tourist", pos: "n.", thai: "นักท่องเที่ยว", definition: "person who travels for pleasure", hint: "visitor", cats: ["travel"], examples: [{ en: "Many tourists visit Thailand.", th: "นักท่องเที่ยวมากมายมาเที่ยวไทย" }] },
    { word: "passport", pos: "n.", thai: "หนังสือเดินทาง", definition: "travel document", hint: "international travel", cats: ["travel"], examples: [{ en: "Don't forget your passport.", th: "อย่าลืมหนังสือเดินทาง" }] },
    { word: "luggage", pos: "n.", thai: "กระเป๋าเดินทาง", definition: "bags for travel", hint: "suitcase", cats: ["travel"], examples: [{ en: "Pack your luggage carefully.", th: "เก็บกระเป๋าเดินทางอย่างระมัดระวัง" }] },
    { word: "destination", pos: "n.", thai: "จุดหมายปลายทาง", definition: "place you're going to", hint: "travel goal", cats: ["travel"], examples: [{ en: "What's your destination?", th: "จุดหมายปลายทางของคุณคือไหน" }] },
    { word: "accommodation", pos: "n.", thai: "ที่พัก", definition: "place to stay", hint: "hotel lodging", cats: ["travel"], examples: [{ en: "Book accommodation in advance.", th: "จองที่พักล่วงหน้า" }] },
    { word: "reservation", pos: "n.", thai: "การจอง", definition: "booking in advance", hint: "advance booking", cats: ["travel"], examples: [{ en: "Make a hotel reservation.", th: "จองโรงแรม" }] },
    { word: "itinerary", pos: "n.", thai: "แผนการเดินทาง", definition: "travel plan", hint: "trip schedule", cats: ["travel"], examples: [{ en: "Check your travel itinerary.", th: "ตรวจสอบแผนการเดินทางของคุณ" }] },
    { word: "customs", pos: "n.", thai: "ศุลกากร", definition: "border control", hint: "airport check", cats: ["travel"], examples: [{ en: "Go through customs.", th: "ผ่านศุลกากร" }] },
    { word: "visa", pos: "n.", thai: "วีซ่า", definition: "permission to enter country", hint: "entry permit", cats: ["travel"], examples: [{ en: "Apply for a tourist visa.", th: "สมัครวีซ่านักท่องเที่ยว" }] },
    { word: "currency", pos: "n.", thai: "สกุลเงิน", definition: "money system", hint: "money type", cats: ["travel", "money"], examples: [{ en: "Exchange currency at bank.", th: "แลกเปลี่ยนเงินที่ธนาคาร" }] },
    { word: "exchange", pos: "v.", thai: "แลกเปลี่ยน", definition: "trade one thing for another", hint: "swap trade", cats: ["travel", "money"], examples: [{ en: "Exchange dollars for baht.", th: "แลกดอลลาร์เป็นบาท" }] },
    { word: "souvenir", pos: "n.", thai: "ของที่ระลึก", definition: "memento from trip", hint: "travel memory", cats: ["travel"], examples: [{ en: "Buy souvenirs for family.", th: "ซื้อของที่ระลึกให้ครอบครัว" }] },
    { word: "guide", pos: "n.", thai: "ไกด์", definition: "person who shows places", hint: "tour leader", cats: ["travel"], examples: [{ en: "The tour guide was helpful.", th: "ไกด์นำเที่ยวช่วยเหลือดี" }] },
    { word: "attraction", pos: "n.", thai: "สถานที่ท่องเที่ยว", definition: "interesting place to visit", hint: "tourist spot", cats: ["travel"], examples: [{ en: "Visit famous attractions.", th: "เยี่ยมชมสถานที่ท่องเที่ยวที่มีชื่อเสียง" }] },
    { word: "monument", pos: "n.", thai: "อนุสาวรีย์", definition: "structure built to remember", hint: "memorial building", cats: ["travel"], examples: [{ en: "The monument is very old.", th: "อนุสาวรีย์นี้เก่าแก่มาก" }] },
    { word: "museum", pos: "n.", thai: "พิพิธภัณฑ์", definition: "place showing history/art", hint: "history display", cats: ["travel"], examples: [{ en: "Visit the national museum.", th: "เยี่ยมชมพิพิธภัณฑ์แห่งชาติ" }] },
    { word: "gallery", pos: "n.", thai: "หอศิลป์", definition: "place showing art", hint: "art display", cats: ["travel"], examples: [{ en: "The art gallery is beautiful.", th: "หอศิลป์สวยงาม" }] },
    { word: "temple", pos: "n.", thai: "วัด", definition: "religious building", hint: "worship place", cats: ["travel"], examples: [{ en: "Visit the ancient temple.", th: "เยี่ยมชมวัดโบราณ" }] },
    { word: "palace", pos: "n.", thai: "พระราชวัง", definition: "royal residence", hint: "king's house", cats: ["travel"], examples: [{ en: "The palace is magnificent.", th: "พระราชวังงดงาม" }] },
    { word: "castle", pos: "n.", thai: "ปราสาท", definition: "fortified building", hint: "old fortress", cats: ["travel"], examples: [{ en: "The castle has thick walls.", th: "ปราสาทมีกำแพงหนา" }] },
    { word: "beach", pos: "n.", thai: "ชายหาด", definition: "sandy shore", hint: "ocean sand", cats: ["travel", "nature"], examples: [{ en: "Relax on the beach.", th: "พักผ่อนที่ชายหาด" }] },
    { word: "mountain", pos: "n.", thai: "ภูเขา", definition: "high land formation", hint: "high peak", cats: ["travel", "nature"], examples: [{ en: "Climb the mountain.", th: "ปีนภูเขา" }] },
    { word: "valley", pos: "n.", thai: "หุบเขา", definition: "low area between hills", hint: "between mountains", cats: ["travel", "nature"], examples: [{ en: "The valley is green.", th: "หุบเขาเขียวขจี" }] },
    { word: "adventure", pos: "n.", thai: "การผจญภัย", definition: "exciting experience", hint: "thrilling journey", cats: ["travel"], examples: [{ en: "Travel is an adventure.", th: "การเดินทางเป็นการผจญภัย" }] },

    // Environment & Nature (25 words)
    { word: "environment", pos: "n.", thai: "สิ่งแวดล้อม", definition: "natural world around us", hint: "nature around", cats: ["nature"], examples: [{ en: "Protect the environment.", th: "ปกป้องสิ่งแวดล้อม" }] },
    { word: "pollution", pos: "n.", thai: "มลพิษ", definition: "harmful substances in environment", hint: "dirty environment", cats: ["nature"], examples: [{ en: "Air pollution is dangerous.", th: "มลพิษทางอากาศอันตราย" }] },
    { word: "recycling", pos: "n.", thai: "การรีไซเคิล", definition: "reusing materials", hint: "use again", cats: ["nature"], examples: [{ en: "Recycling helps the planet.", th: "การรีไซเคิลช่วยโลก" }] },
    { word: "wildlife", pos: "n.", thai: "สัตว์ป่า", definition: "animals in nature", hint: "wild animals", cats: ["nature"], examples: [{ en: "Wildlife needs protection.", th: "สัตว์ป่าต้องการการปกป้อง" }] },
    { word: "climate", pos: "n.", thai: "ภูมิอากาศ", definition: "weather patterns", hint: "long-term weather", cats: ["nature", "weather"], examples: [{ en: "Climate change affects everyone.", th: "การเปลี่ยนแปลงภูมิอากาศส่งผลต่อทุกคน" }] },
    { word: "forest", pos: "n.", thai: "ป่าไม้", definition: "large area of trees", hint: "many trees", cats: ["nature"], examples: [{ en: "The forest is peaceful.", th: "ป่าไม้เงียบสงบ" }] },
    { word: "ocean", pos: "n.", thai: "มหาสมุทร", definition: "large body of salt water", hint: "big sea", cats: ["nature"], examples: [{ en: "The ocean is vast.", th: "มหาสมุทรกว้างใหญ่" }] },
    { word: "river", pos: "n.", thai: "แม่น้ำ", definition: "flowing water", hint: "water flow", cats: ["nature"], examples: [{ en: "The river flows to sea.", th: "แม่น้ำไหลสู่ทะเล" }] },
    { word: "lake", pos: "n.", thai: "ทะเลสาบ", definition: "large body of fresh water", hint: "big pond", cats: ["nature"], examples: [{ en: "The lake is calm.", th: "ทะเลสาบสงบ" }] },
    { word: "desert", pos: "n.", thai: "ทะเลทราย", definition: "dry sandy area", hint: "very dry land", cats: ["nature"], examples: [{ en: "The desert is hot.", th: "ทะเลทรายร้อน" }] },
    { word: "island", pos: "n.", thai: "เกาะ", definition: "land surrounded by water", hint: "water around", cats: ["nature", "travel"], examples: [{ en: "The island is beautiful.", th: "เกาะสวยงาม" }] },
    { word: "plant", pos: "n.", thai: "พืช", definition: "living green organism", hint: "green life", cats: ["nature"], examples: [{ en: "Water the plants daily.", th: "รดน้ำต้นไม้ทุกวัน" }] },
    { word: "flower", pos: "n.", thai: "ดอกไม้", definition: "colorful part of plant", hint: "plant bloom", cats: ["nature"], examples: [{ en: "Flowers smell nice.", th: "ดอกไม้หอม" }] },
    { word: "tree", pos: "n.", thai: "ต้นไม้", definition: "tall plant with trunk", hint: "big plant", cats: ["nature"], examples: [{ en: "The tree gives shade.", th: "ต้นไม้ให้ร่มเงา" }] },
    { word: "grass", pos: "n.", thai: "หญ้า", definition: "small green plants", hint: "lawn plants", cats: ["nature"], examples: [{ en: "Cut the grass weekly.", th: "ตัดหญ้าทุกสัปดาห์" }] },
    { word: "soil", pos: "n.", thai: "ดิน", definition: "earth for growing plants", hint: "plant ground", cats: ["nature"], examples: [{ en: "Rich soil grows good crops.", th: "ดินอุดมสมบูรณ์ปลูกพืชได้ดี" }] },
    { word: "seed", pos: "n.", thai: "เมล็ด", definition: "plant beginning", hint: "plant start", cats: ["nature"], examples: [{ en: "Plant seeds in spring.", th: "ปลูกเมล็ดในฤดูใบไม้ผลิ" }] },
    { word: "harvest", pos: "n.", thai: "การเก็บเกี่ยว", definition: "gathering crops", hint: "crop collection", cats: ["nature"], examples: [{ en: "Harvest time is busy.", th: "ช่วงเก็บเกี่ยวยุ่ง" }] },
    { word: "agriculture", pos: "n.", thai: "เกษตรกรรม", definition: "farming activity", hint: "crop growing", cats: ["nature", "work"], examples: [{ en: "Agriculture feeds people.", th: "เกษตรกรรมเลี้ยงคน" }] },
    { word: "farmer", pos: "n.", thai: "เกษตรกร", definition: "person who grows crops", hint: "crop grower", cats: ["work"], examples: [{ en: "The farmer works hard.", th: "เกษตรกรทำงานหนัก" }] },
    { word: "crop", pos: "n.", thai: "พืชผล", definition: "plants grown for food", hint: "farm produce", cats: ["nature", "food"], examples: [{ en: "Rice is an important crop.", th: "ข้าวเป็นพืชผลสำคัญ" }] },
    { word: "organic", pos: "adj.", thai: "ออร์แกนิก", definition: "natural without chemicals", hint: "chemical-free", cats: ["nature", "food"], examples: [{ en: "Buy organic vegetables.", th: "ซื้อผักออร์แกนิก" }] },
    { word: "natural", pos: "adj.", thai: "ธรรมชาติ", definition: "from nature", hint: "not artificial", cats: ["nature"], examples: [{ en: "Natural products are better.", th: "ผลิตภัณฑ์ธรรมชาติดีกว่า" }] },
    { word: "conservation", pos: "n.", thai: "การอนุรักษ์", definition: "protecting nature", hint: "nature protection", cats: ["nature"], examples: [{ en: "Wildlife conservation is important.", th: "การอนุรักษ์สัตว์ป่าสำคัญ" }] },
    { word: "renewable", pos: "adj.", thai: "หมุนเวียนได้", definition: "can be used again", hint: "reusable", cats: ["nature"], examples: [{ en: "Solar is renewable energy.", th: "พลังงานแสงอาทิตย์หมุนเวียนได้" }] },

    // Technology & Media (25 words)
    { word: "website", pos: "n.", thai: "เว็บไซต์", definition: "pages on internet", hint: "online pages", cats: ["technology"], examples: [{ en: "Visit our website for more info.", th: "เยี่ยมชมเว็บไซต์ของเราสำหรับข้อมูลเพิ่มเติม" }] },
    { word: "software", pos: "n.", thai: "ซอฟต์แวร์", definition: "computer programs", hint: "computer apps", cats: ["technology"], examples: [{ en: "This software is useful.", th: "ซอฟต์แวร์นี้มีประโยชน์" }] },
    { word: "download", pos: "v.", thai: "ดาวน์โหลด", definition: "get files from internet", hint: "get from web", cats: ["technology"], examples: [{ en: "Download the app now.", th: "ดาวน์โหลดแอปเดี๋ยวนี้" }] },
    { word: "upload", pos: "v.", thai: "อัปโหลด", definition: "put files on internet", hint: "send to web", cats: ["technology"], examples: [{ en: "Upload your photos.", th: "อัปโหลดรูปภาพของคุณ" }] },
    { word: "password", pos: "n.", thai: "รหัสผ่าน", definition: "secret code for access", hint: "login code", cats: ["technology"], examples: [{ en: "Enter your password.", th: "ใส่รหัสผ่านของคุณ" }] },
    { word: "database", pos: "n.", thai: "ฐานข้อมูล", definition: "organized information storage", hint: "data storage", cats: ["technology"], examples: [{ en: "The database contains records.", th: "ฐานข้อมูลมีบันทึก" }] },
    { word: "network", pos: "n.", thai: "เครือข่าย", definition: "connected computers", hint: "computer connection", cats: ["technology"], examples: [{ en: "The network is down.", th: "เครือข่ายขัดข้อง" }] },
    { word: "connection", pos: "n.", thai: "การเชื่อมต่อ", definition: "link between things", hint: "joining link", cats: ["technology"], examples: [{ en: "Check your internet connection.", th: "ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต" }] },
    { word: "application", pos: "n.", thai: "แอปพลิเคชัน", definition: "computer program", hint: "software program", cats: ["technology"], examples: [{ en: "Install the application.", th: "ติดตั้งแอปพลิเคชัน" }] },
    { word: "system", pos: "n.", thai: "ระบบ", definition: "organized set of parts", hint: "organized whole", cats: ["technology"], examples: [{ en: "The system works well.", th: "ระบบทำงานได้ดี" }] },
    { word: "device", pos: "n.", thai: "อุปกรณ์", definition: "tool or machine", hint: "equipment", cats: ["technology"], examples: [{ en: "This device is portable.", th: "อุปกรณ์นี้พกพาได้" }] },
    { word: "digital", pos: "adj.", thai: "ดิจิทัล", definition: "using computer technology", hint: "computer-based", cats: ["technology"], examples: [{ en: "Digital photos are clear.", th: "รูปภาพดิจิทัลชัด" }] },
    { word: "online", pos: "adj.", thai: "ออนไลน์", definition: "connected to internet", hint: "on internet", cats: ["technology"], examples: [{ en: "Shop online for convenience.", th: "ซื้อของออนไลน์เพื่อความสะดวก" }] },
    { word: "offline", pos: "adj.", thai: "ออฟไลน์", definition: "not connected to internet", hint: "no internet", cats: ["technology"], examples: [{ en: "Work offline when traveling.", th: "ทำงานออฟไลน์เมื่อเดินทาง" }] },
    { word: "backup", pos: "n.", thai: "การสำรองข้อมูล", definition: "copy of data for safety", hint: "data copy", cats: ["technology"], examples: [{ en: "Make a backup of files.", th: "สำรองข้อมูลไฟล์" }] },
    { word: "update", pos: "v.", thai: "อัปเดต", definition: "make current", hint: "make new", cats: ["technology"], examples: [{ en: "Update your software.", th: "อัปเดตซอฟต์แวร์ของคุณ" }] },
    { word: "version", pos: "n.", thai: "เวอร์ชัน", definition: "particular form of something", hint: "edition", cats: ["technology"], examples: [{ en: "Download the latest version.", th: "ดาวน์โหลดเวอร์ชันล่าสุด" }] },
    { word: "browser", pos: "n.", thai: "เบราว์เซอร์", definition: "program for viewing websites", hint: "web viewer", cats: ["technology"], examples: [{ en: "Open your web browser.", th: "เปิดเว็บเบราว์เซอร์" }] },
    { word: "search", pos: "v.", thai: "ค้นหา", definition: "look for information", hint: "find info", cats: ["technology"], examples: [{ en: "Search for information online.", th: "ค้นหาข้อมูลออนไลน์" }] },
    { word: "result", pos: "n.", thai: "ผลลัพธ์", definition: "outcome of search", hint: "search outcome", cats: ["technology"], examples: [{ en: "The search results are helpful.", th: "ผลการค้นหามีประโยชน์" }] },
    { word: "link", pos: "n.", thai: "ลิงก์", definition: "connection to another page", hint: "web connection", cats: ["technology"], examples: [{ en: "Click the link to continue.", th: "คลิกลิงก์เพื่อดำเนินการต่อ" }] },
    { word: "email", pos: "n.", thai: "อีเมล", definition: "electronic message", hint: "electronic mail", cats: ["technology"], examples: [{ en: "Send me an email.", th: "ส่งอีเมลมาให้ฉัน" }] },
    { word: "message", pos: "n.", thai: "ข้อความ", definition: "communication sent", hint: "sent communication", cats: ["technology"], examples: [{ en: "I received your message.", th: "ฉันได้รับข้อความของคุณ" }] },
    { word: "social", pos: "adj.", thai: "สังคม", definition: "relating to society", hint: "community-related", cats: ["technology", "social"], examples: [{ en: "Social media is popular.", th: "สื่อสังคมออนไลน์ได้รับความนิยม" }] },
    { word: "media", pos: "n.", thai: "สื่อ", definition: "means of communication", hint: "communication tools", cats: ["technology"], examples: [{ en: "Media influences opinions.", th: "สื่อมีอิทธิพลต่อความคิดเห็น" }] },

    // Health & Lifestyle (25 words)
    { word: "diet", pos: "n.", thai: "อาหารการกิน", definition: "food you regularly eat", hint: "eating habits", cats: ["health", "food"], examples: [{ en: "A healthy diet is important.", th: "อาหารการกินที่ดีต่อสุขภาพสำคัญ" }] },
    { word: "fitness", pos: "n.", thai: "ความแข็งแรง", definition: "physical health condition", hint: "body strength", cats: ["health"], examples: [{ en: "Regular fitness improves health.", th: "การออกกำลังกายสม่ำเสมอช่วยเพิ่มสุขภาพ" }] },
    { word: "nutrition", pos: "n.", thai: "โภชนาการ", definition: "food value for health", hint: "food nutrients", cats: ["health", "food"], examples: [{ en: "Good nutrition prevents disease.", th: "โภชนาการที่ดีป้องกันโรค" }] },
    { word: "vitamin", pos: "n.", thai: "วิตามิน", definition: "nutrients body needs", hint: "health supplements", cats: ["health"], examples: [{ en: "Take vitamin C daily.", th: "กินวิตามินซีทุกวัน" }] },
    { word: "stress", pos: "n.", thai: "ความเครียด", definition: "mental pressure", hint: "worry pressure", cats: ["health"], examples: [{ en: "Work causes stress.", th: "งานทำให้เครียด" }] },
    { word: "exercise", pos: "n.", thai: "การออกกำลังกาย", definition: "physical activity for health", hint: "body workout", cats: ["health"], examples: [{ en: "Exercise keeps you healthy.", th: "การออกกำลังกายทำให้แข็งแรง" }] },
    { word: "muscle", pos: "n.", thai: "กล้ามเนื้อ", definition: "body tissue for movement", hint: "body strength", cats: ["health"], examples: [{ en: "Build muscle with exercise.", th: "สร้างกล้ามเนื้อด้วยการออกกำลังกาย" }] },
    { word: "energy", pos: "n.", thai: "พลังงาน", definition: "power for activity", hint: "body power", cats: ["health"], examples: [{ en: "Food gives you energy.", th: "อาหารให้พลังงาน" }] },
    { word: "sleep", pos: "n.", thai: "การนอนหลับ", definition: "rest period", hint: "night rest", cats: ["health"], examples: [{ en: "Good sleep is essential.", th: "การนอนหลับที่ดีจำเป็น" }] },
    { word: "rest", pos: "n.", thai: "การพักผ่อน", definition: "relaxation time", hint: "break time", cats: ["health"], examples: [{ en: "Take rest when tired.", th: "พักผ่อนเมื่อเหนื่อย" }] },
    { word: "medicine", pos: "n.", thai: "ยา", definition: "substance for treating illness", hint: "health treatment", cats: ["health"], examples: [{ en: "Take medicine as prescribed.", th: "กินยาตามที่สั่ง" }] },
    { word: "treatment", pos: "n.", thai: "การรักษา", definition: "medical care", hint: "medical help", cats: ["health"], examples: [{ en: "The treatment was successful.", th: "การรักษาสำเร็จ" }] },
    { word: "symptom", pos: "n.", thai: "อาการ", definition: "sign of illness", hint: "illness sign", cats: ["health"], examples: [{ en: "Fever is a common symptom.", th: "ไข้เป็นอาการที่พบบ่อย" }] },
    { word: "prevention", pos: "n.", thai: "การป้องกัน", definition: "stopping illness before it starts", hint: "illness prevention", cats: ["health"], examples: [{ en: "Prevention is better than cure.", th: "การป้องกันดีกว่าการรักษา" }] },
    { word: "checkup", pos: "n.", thai: "การตรวจสุขภาพ", definition: "medical examination", hint: "health check", cats: ["health"], examples: [{ en: "Have a regular checkup.", th: "ตรวจสุขภาพเป็นประจำ" }] },
    { word: "injury", pos: "n.", thai: "การบาดเจ็บ", definition: "physical harm", hint: "body damage", cats: ["health"], examples: [{ en: "Sports can cause injury.", th: "กีฬาอาจทำให้บาดเจ็บ" }] },
    { word: "recovery", pos: "n.", thai: "การฟื้นตัว", definition: "getting better after illness", hint: "healing process", cats: ["health"], examples: [{ en: "Recovery takes time.", th: "การฟื้นตัวใช้เวลา" }] },
    { word: "therapy", pos: "n.", thai: "การบำบัด", definition: "treatment for health problems", hint: "healing treatment", cats: ["health"], examples: [{ en: "Physical therapy helps recovery.", th: "กายภาพบำบัดช่วยฟื้นตัว" }] },
    { word: "mental", pos: "adj.", thai: "จิตใจ", definition: "relating to mind", hint: "mind-related", cats: ["health"], examples: [{ en: "Mental health is important.", th: "สุขภาพจิตสำคัญ" }] },
    { word: "physical", pos: "adj.", thai: "ร่างกาย", definition: "relating to body", hint: "body-related", cats: ["health"], examples: [{ en: "Physical activity is good.", th: "กิจกรรมทางกายดี" }] },
    { word: "healthy", pos: "adj.", thai: "แข็งแรง", definition: "in good health", hint: "good health", cats: ["health"], examples: [{ en: "Eat healthy food.", th: "กินอาหารที่ดีต่อสุขภาพ" }] },
    { word: "lifestyle", pos: "n.", thai: "วิถีชีวิต", definition: "way of living", hint: "life style", cats: ["health"], examples: [{ en: "Change your lifestyle.", th: "เปลี่ยนวิถีชีวิตของคุณ" }] },
    { word: "habit", pos: "n.", thai: "นิสัย", definition: "regular behavior", hint: "regular action", cats: ["health"], examples: [{ en: "Good habits improve health.", th: "นิสัยดีช่วยเพิ่มสุขภาพ" }] },
    { word: "balance", pos: "n.", thai: "ความสมดุล", definition: "equal state", hint: "equal condition", cats: ["health"], examples: [{ en: "Work-life balance is important.", th: "ความสมดุลระหว่างงานและชีวิตสำคัญ" }] },
    { word: "wellness", pos: "n.", thai: "ความเป็นอยู่ที่ดี", definition: "state of being healthy", hint: "good health state", cats: ["health"], examples: [{ en: "Focus on wellness.", th: "มุ่งเน้นความเป็นอยู่ที่ดี" }] },

    // Relationships & Social (20 words)
    { word: "relationship", pos: "n.", thai: "ความสัมพันธ์", definition: "connection between people", hint: "human connection", cats: ["social"], examples: [{ en: "They have a good relationship.", th: "พวกเขามีความสัมพันธ์ที่ดี" }] },
    { word: "friendship", pos: "n.", thai: "มิตรภาพ", definition: "bond between friends", hint: "friend connection", cats: ["social"], examples: [{ en: "Their friendship lasted years.", th: "มิตรภาพของพวกเขาคงอยู่หลายปี" }] },
    { word: "marriage", pos: "n.", thai: "การแต่งงาน", definition: "union between spouses", hint: "husband wife", cats: ["social"], examples: [{ en: "Marriage requires commitment.", th: "การแต่งงานต้องใช้ความมุ่งมั่น" }] },
    { word: "divorce", pos: "n.", thai: "การหย่าร้าง", definition: "end of marriage", hint: "marriage ends", cats: ["social"], examples: [{ en: "Divorce can be difficult.", th: "การหย่าร้างอาจยาก" }] },
    { word: "community", pos: "n.", thai: "ชุมชน", definition: "group of people living together", hint: "neighborhood", cats: ["social"], examples: [{ en: "Our community is friendly.", th: "ชุมชนของเราเป็นมิตร" }] },
    { word: "society", pos: "n.", thai: "สังคม", definition: "organized group of people", hint: "human group", cats: ["social"], examples: [{ en: "Society changes over time.", th: "สังคมเปลี่ยนแปลงตามเวลา" }] },
    { word: "neighbor", pos: "n.", thai: "เพื่อนบ้าน", definition: "person living nearby", hint: "nearby resident", cats: ["social"], examples: [{ en: "My neighbor is helpful.", th: "เพื่อนบ้านของฉันช่วยเหลือดี" }] },
    { word: "trust", pos: "n.", thai: "ความไว้วางใจ", definition: "belief in someone's honesty", hint: "faith in person", cats: ["social"], examples: [{ en: "Trust is important in relationships.", th: "ความไว้วางใจสำคัญในความสัมพันธ์" }] },
    { word: "respect", pos: "n.", thai: "ความเคารพ", definition: "admiration for someone", hint: "honor someone", cats: ["social"], examples: [{ en: "Show respect to elders.", th: "แสดงความเคารพต่อผู้ใหญ่" }] },
    { word: "support", pos: "n.", thai: "การสนับสนุน", definition: "help or encouragement", hint: "help assistance", cats: ["social"], examples: [{ en: "Family support is valuable.", th: "การสนับสนุนจากครอบครัวมีค่า" }] },
    { word: "cooperation", pos: "n.", thai: "ความร่วมมือ", definition: "working together", hint: "team work", cats: ["social"], examples: [{ en: "Cooperation leads to success.", th: "ความร่วมมือนำไปสู่ความสำเร็จ" }] },
    { word: "communication", pos: "n.", thai: "การสื่อสาร", definition: "sharing information", hint: "information sharing", cats: ["social"], examples: [{ en: "Good communication prevents problems.", th: "การสื่อสารที่ดีป้องกันปัญหา" }] },
    { word: "understanding", pos: "n.", thai: "ความเข้าใจ", definition: "comprehension of others", hint: "knowing others", cats: ["social"], examples: [{ en: "Understanding builds relationships.", th: "ความเข้าใจสร้างความสัมพันธ์" }] },
    { word: "conflict", pos: "n.", thai: "ความขัดแย้ง", definition: "disagreement or fight", hint: "disagreement", cats: ["social"], examples: [{ en: "Resolve conflicts peacefully.", th: "แก้ไขความขัดแย้งอย่างสันติ" }] },
    { word: "agreement", pos: "n.", thai: "ข้อตกลง", definition: "shared decision", hint: "mutual decision", cats: ["social"], examples: [{ en: "We reached an agreement.", th: "เราตกลงกันได้" }] },
    { word: "compromise", pos: "n.", thai: "การประนีประนอม", definition: "mutual concession", hint: "give and take", cats: ["social"], examples: [{ en: "Marriage needs compromise.", th: "การแต่งงานต้องประนีประนอม" }] },
    { word: "loyalty", pos: "n.", thai: "ความจงรักภักดี", definition: "faithful support", hint: "faithful devotion", cats: ["social"], examples: [{ en: "Loyalty strengthens friendship.", th: "ความจงรักภักดีเสริมมิตรภาพ" }] },
    { word: "honesty", pos: "n.", thai: "ความซื่อสัตย์", definition: "truthfulness", hint: "being truthful", cats: ["social"], examples: [{ en: "Honesty builds trust.", th: "ความซื่อสัตย์สร้างความไว้วางใจ" }] },
    { word: "kindness", pos: "n.", thai: "ความเมตตา", definition: "being caring and helpful", hint: "caring nature", cats: ["social"], examples: [{ en: "Kindness makes people happy.", th: "ความเมตตาทำให้คนมีความสุข" }] },
    { word: "generosity", pos: "n.", thai: "ความเอื้อเฟื้อ", definition: "willingness to give", hint: "giving nature", cats: ["social"], examples: [{ en: "His generosity is well-known.", th: "ความเอื้อเฟื้อของเขาเป็นที่รู้จัก" }] }
];

console.log(`B1 words prepared: ${b1Words.length}/150`);

// Add words to vocabulary
async function addB1Words() {
    console.log('Adding B1 level words...');
    for (const word of b1Words) {
        await vm.addWord(word.word, word.pos, word.thai, word.definition, word.hint, word.cats, word.examples, 'B1');
    }
    console.log(`Added ${b1Words.length} B1 words successfully!`);
}

// Run if called directly
if (require.main === module) {
    addB1Words().catch(console.error);
}

module.exports = { b1Words, addB1Words };