export interface ReadingQuestion {
  q: string;
  choices: string[];
  answerIndex: number;
  explain?: string;
}

export interface ReadingItem {
  id: string;
  title: string;
  level: string;
  paragraphs: string[];
  translationTh?: string;
  questions: ReadingQuestion[];
}

export const READINGS: ReadingItem[] = [
  {
    id: "market-morning",
    title: "A Morning at the Market",
    level: "A2",
    paragraphs: [
      "Every Saturday, Lina wakes up early and walks to the open-air market near her house. The sun is just rising, and the streets are quiet. As she gets closer, she hears vendors calling out prices and greetings to customers.",
      "Lina likes to buy fresh vegetables, sweet mangoes, and sometimes a small bunch of flowers. She always brings a reusable bag and compares prices before choosing. Today, she finds a good deal on tomatoes and talks with the seller about the best way to store them.",
      "Before she leaves, Lina buys a cup of hot soy milk and a warm bun. She sits on a bench, enjoys her breakfast, and watches people hurry by with their colorful bags. Then, she walks home to start cooking lunch."
    ],
    translationTh: "ทุกวันเสาร์ ลีนาตื่นเช้าและเดินไปตลาดเปิดใกล้บ้าน พระอาทิตย์กำลังขึ้น ถนนยังเงียบ เมื่อเข้าใกล้ เธอได้ยินแม่ค้าเรียกราคาและทักทายลูกค้า\n\nลีนาชอบซื้อผักสด มะม่วงหวาน และบางครั้งก็ซื้อต้นไม้ดอกเล็ก ๆ เธอมักพกถุงผ้าและเปรียบเทียบราคาก่อนเลือก วันนี้เธอได้มะเขือเทศในราคาดี และคุยกับคนขายเรื่องวิธีเก็บรักษา\n\nก่อนกลับ ลีนาซื้อเต้าหู้รูป (นมถั่วเหลืองร้อน) กับขนมปังอุ่น ๆ นั่งกินบนม้านั่งและดูผู้คนที่รีบเดินผ่าน พร้อมถุงหลากสี แล้วจึงเดินกลับบ้านไปเริ่มทำอาหารกลางวัน",
    questions: [
      {
        q: "When does Lina go to the market?",
        choices: ["Every Saturday", "Every evening", "Only on holidays", "Once a month"],
        answerIndex: 0,
        explain: "The first sentence states she goes every Saturday."
      },
      {
        q: "What does Lina usually bring to the market?",
        choices: ["Umbrella", "Reusable bag", "Shopping cart", "Nothing"],
        answerIndex: 1,
      },
      {
        q: "Which fruit does Lina like to buy?",
        choices: ["Bananas", "Mangoes", "Apples", "Grapes"],
        answerIndex: 1,
      },
      {
        q: "What did Lina find a good deal on today?",
        choices: ["Flowers", "Tomatoes", "Soy milk", "Buns"],
        answerIndex: 1,
      },
      {
        q: "What does Lina do before leaving the market?",
        choices: ["Buys breakfast and watches people", "Calls her friend", "Takes a taxi home", "Sends a package"],
        answerIndex: 0,
      },
      {
        q: "What will Lina do after returning home?",
        choices: ["Take a nap", "Start cooking lunch", "Clean the house", "Go to work"],
        answerIndex: 1,
      }
    ]
  },
  {
    id: "city-park",
    title: "An Afternoon in the City Park",
    level: "A2",
    paragraphs: [
      "On Sunday afternoon, Mark meets his friend Anna at the city park. The weather is warm, and many families are having picnics on the grass. Children are flying kites while dogs run after balls.",
      "Mark and Anna rent two bicycles and ride slowly around the lake. They stop to take photos of the water and a family of ducks swimming near the shore. Later, they buy ice cream from a small kiosk and sit under a big tree.",
      "As the sun begins to set, the air feels cooler. They return the bicycles and promise to come back next weekend. The day ends with smiles and a few great photos to share."
    ],
    translationTh: "บ่ายวันอาทิตย์ มาร์กนัดเจอแอนนาที่สวนสาธารณะ อากาศอบอุ่น หลายครอบครัวมาปูเสื่อปิกนิก เด็ก ๆ ชักว่าว ส่วนสุนัขก็วิ่งไล่ลูกบอล\n\nมาร์กกับแอนนาเช่าจักรยานสองคัน ปั่นช้า ๆ รอบทะเลสาบ แวะถ่ายรูปน้ำและฝูงเป็ดที่ว่ายใกล้ฝั่ง หลังจากนั้นซื้อไอศกรีมจากร้านเล็ก ๆ แล้วนั่งใต้ต้นไม้ใหญ่\n\nพอพระอาทิตย์ใกล้ตก อากาศเริ่มเย็นลง พวกเขาคืนจักรยานและสัญญาว่าจะกลับมาใหม่สุดสัปดาห์หน้า วันนั้นจบลงด้วยรอยยิ้มและรูปสวย ๆ ให้แบ่งปัน",
    questions: [
      {
        q: "Where do Mark and Anna meet?",
        choices: ["At a cafe", "At the city park", "At the train station", "At the library"],
        answerIndex: 1,
      },
      {
        q: "What do they rent at the park?",
        choices: ["Boats", "Bicycles", "Kites", "Cameras"],
        answerIndex: 1,
      },
      {
        q: "What animals do they see in the lake?",
        choices: ["Cats", "Ducks", "Horses", "Turtles"],
        answerIndex: 1,
      },
      {
        q: "What do they buy from the kiosk?",
        choices: ["Juice", "Sandwiches", "Ice cream", "Coffee"],
        answerIndex: 2,
      },
      {
        q: "When do they plan to come back?",
        choices: ["Tomorrow", "Next weekend", "Next month", "They don't plan to return"],
        answerIndex: 1,
      }
    ]
  },
  {
    id: "a1-bus-to-school",
    title: "Taking the Bus to School",
    level: "A1",
    paragraphs: [
      "Tom wakes up at 6:30 every weekday. He washes his face, eats bread with jam, and puts on his school uniform. He checks his backpack for books and a water bottle.",
      "At 7:10, Tom walks to the bus stop near his house. The bus arrives at 7:20. He sits by the window and listens to music. After fifteen minutes, he gets off and walks to his classroom.",
      "Tom likes the bus because it is cheap and safe. Sometimes he meets his friend May on the bus, and they talk about their homework."
    ],
    translationTh: "ทอมตื่นหกโมงครึ่งทุกวันธรรมดา ล้างหน้า กินขนมปังทาแยม ใส่เครื่องแบบนักเรียน และเช็คกระเป๋าว่ามีหนังสือกับขวดน้ำ\n\nเวลาเจ็ดโมงสิบ ทอมเดินไปป้ายรถเมล์ใกล้บ้าน รถมาถึงเจ็ดโมงยี่สิบ เขานั่งริมหน้าต่างและฟังเพลง ประมาณสิบห้านาที เขาลงจากรถและเดินไปห้องเรียน\n\nทอมชอบนั่งรถเมล์เพราะถูกและปลอดภัย บางครั้งเขาเจอเพื่อนชื่อเมย์บนรถ และคุยกันเรื่องการบ้าน",
    questions: [
      { q: "What time does Tom wake up?", choices: ["6:30", "7:10", "7:20", "8:00"], answerIndex: 0 },
      { q: "Where does he sit on the bus?", choices: ["Next to the driver", "By the window", "In the back", "On the stairs"], answerIndex: 1 },
      { q: "How long is the bus ride?", choices: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"], answerIndex: 2 },
      { q: "Why does Tom like the bus?", choices: ["It is fast and noisy", "It is cheap and safe", "It is big and empty", "It is colorful"], answerIndex: 1 },
      { q: "Who does Tom sometimes meet on the bus?", choices: ["His teacher", "His sister", "His friend May", "A taxi driver"], answerIndex: 2 },
    ]
  },
  {
    id: "a1-my-kitchen",
    title: "My Small Kitchen",
    level: "A1",
    paragraphs: [
      "I live in a small apartment with my sister. Our kitchen is small but bright. There is a stove, a fridge, and a round table near the window.",
      "Every evening, we cook simple meals like rice with eggs or noodles with vegetables. While one of us cooks, the other washes the dishes and cleans the table.",
      "On Fridays, we make something special, like soup or pancakes. We open the window, listen to music, and enjoy dinner together."
    ],
    translationTh: "ฉันอยู่แฟลตเล็ก ๆ กับพี่สาว ห้องครัวของเราเล็กแต่สว่าง มีเตา ตู้เย็น และโต๊ะกลมใกล้หน้าต่าง\n\nทุกเย็นเราทำอาหารง่าย ๆ เช่น ข้าวกับไข่ หรือน้ำก๋วยเตี๋ยวผัก ระหว่างที่คนหนึ่งทำอาหาร อีกคนล้างจานและเช็ดโต๊ะ\n\nคืนวันศุกร์เราจะทำเมนูพิเศษ เช่น ซุปหรือแพนเค้ก เปิดหน้าต่าง เปิดเพลง และกินข้าวด้วยกันอย่างมีความสุข",
    questions: [
      { q: "Where is the table in the kitchen?", choices: ["By the door", "Near the window", "Next to the fridge", "Under the lamp"], answerIndex: 1 },
      { q: "What do they cook on most evenings?", choices: ["Soup and pancakes", "Pizza", "Simple meals like rice with eggs", "Steak"], answerIndex: 2 },
      { q: "Who cleans the table?", choices: ["Always the sister", "Always the writer", "The person who is free", "The other person"], answerIndex: 3 },
      { q: "When do they make something special?", choices: ["Mondays", "Fridays", "Sundays", "Holidays"], answerIndex: 1 },
      { q: "How do they feel at dinner on Fridays?", choices: ["Busy", "Noisy", "Sad", "Happy"], answerIndex: 3 },
    ]
  },
  {
    id: "a1-visit-grandma",
    title: "Visiting Grandma",
    level: "A1",
    paragraphs: [
      "Mina visits her grandma every Sunday afternoon. She brings fruit and helps water the plants on the balcony.",
      "Grandma tells short stories from her childhood. Mina listens and laughs. They drink tea and eat cookies together.",
      "Before leaving, Mina cleans the table and checks the time for the bus. She hugs Grandma and promises to come again next week."
    ],
    translationTh: "มีน่าไปเยี่ยมคุณยายทุกบ่ายวันอาทิตย์ เธอเอาผลไม้ไปให้และช่วยรดน้ำต้นไม้ที่ระเบียง\n\nคุณยายเล่าเรื่องสั้น ๆ สมัยเด็ก มีน่าก็ฟังและหัวเราะ พวกเขาดื่มชาและกินคุกกี้ด้วยกัน\n\nก่อนกลับ มีน่าทำความสะอาดโต๊ะและดูเวลารถเมล์ โอบกอดคุณยายและสัญญาว่าจะมาใหม่สัปดาห์หน้า",
    questions: [
      { q: "When does Mina visit her grandma?", choices: ["Every morning", "Every Sunday afternoon", "Once a month", "On Saturdays"], answerIndex: 1 },
      { q: "What does she bring?", choices: ["Books", "Flowers", "Fruit", "Soup"], answerIndex: 2 },
      { q: "Where are the plants?", choices: ["In the living room", "On the balcony", "In the kitchen", "In the garden"], answerIndex: 1 },
      { q: "What do they drink?", choices: ["Coffee", "Juice", "Tea", "Milk"], answerIndex: 2 },
      { q: "What does Mina do before leaving?", choices: ["Takes a nap", "Cleans the table", "Watches TV", "Calls a taxi"], answerIndex: 1 },
    ]
  },

  {
    id: "b1-remote-work-day",
    title: "A Day of Remote Work",
    level: "B1",
    paragraphs: [
      "Jin works as a customer support representative for a software company. Three days a week, he works from home.",
      "He starts his day by checking the support inbox and prioritizing issues. Urgent cases, like account access problems, go first. During the afternoon, he hosts a short video call where the team reviews tricky cases and shares solutions.",
      "Working remotely saves him two hours of commuting time. Jin uses that time to exercise and prepare healthier meals, which has improved his energy at work."
    ],
    translationTh: "จินทำงานซัพพอร์ตลูกค้าบริษัทซอฟต์แวร์ สัปดาห์ละสามวันทำงานจากบ้าน\n\nเขาเริ่มวันด้วยการเช็คกล่องอีเมลซัพพอร์ตและจัดลำดับปัญหา เคสเร่งด่วน เช่น เข้าใช้งานไม่ได้ จะทำก่อน ตอนบ่ายมีวิดีโอคอนเฟอเรนซ์สั้น ๆ เพื่อทบทวนเคสยากและแชร์วิธีแก้\n\nการทำงานจากบ้านช่วยประหยัดเวลาเดินทางสองชั่วโมง จินใช้เวลานั้นออกกำลังกายและทำอาหารสุขภาพ ทำให้มีพลังงานมากขึ้น",
    questions: [
      { q: "How often does Jin work from home?", choices: ["Every day", "Three days a week", "Only Fridays", "Once a month"], answerIndex: 1 },
      { q: "Which cases are handled first?", choices: ["Billing questions", "Feature requests", "Account access problems", "Feedback"], answerIndex: 2 },
      { q: "What happens in the afternoon?", choices: ["A long training", "A short team call", "Nothing", "Customer interviews"], answerIndex: 1 },
      { q: "What does remote work save for Jin?", choices: ["Money", "Two hours of commuting", "Electricity", "Vacation days"], answerIndex: 1 },
      { q: "How has his energy changed?", choices: ["Worse", "No change", "Improved", "Unclear"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-recycling-program",
    title: "Apartment Recycling Program",
    level: "B1",
    paragraphs: [
      "The apartment manager introduced a new recycling program last month. Each floor now has labeled bins for paper, plastic, glass, and general waste.",
      "On Saturdays, volunteers weigh the collected materials and record the numbers on a shared board. The building plans to use the data to request a discount on waste collection fees.",
      "Residents have noticed cleaner hallways and fewer bad smells. Some people have also started a swap shelf in the lobby for books and kitchen items."
    ],
    translationTh: "ผู้จัดการอพาร์ตเมนต์เริ่มโปรแกรมรีไซเคิลใหม่เมื่อเดือนที่แล้ว แต่ละชั้นมีถังแยกสำหรับกระดาษ พลาสติก แก้ว และขยะทั่วไป\n\nทุกวันเสาร์ อาสาสมัครจะชั่งน้ำหนักสิ่งที่เก็บได้แล้วบันทึกลงกระดานร่วม อาคารจะใช้ข้อมูลนี้ขอลดค่าจัดเก็บขยะ\n\nผู้อยู่อาศัยสังเกตว่าทางเดินสะอาดขึ้น กลิ่นเหม็นน้อยลง และบางคนเริ่มทำชั้นวางแลกเปลี่ยนหนังสือ/ของใช้ครัวที่ล็อบบี้",
    questions: [
      { q: "What did the manager introduce?", choices: ["A gym", "A recycling program", "New elevators", "A garden"], answerIndex: 1 },
      { q: "When do volunteers weigh materials?", choices: ["Mondays", "Fridays", "Saturdays", "Sundays"], answerIndex: 2 },
      { q: "Why collect data?", choices: ["To sell it", "To request a fee discount", "For decoration", "For a contest"], answerIndex: 1 },
      { q: "What changed in the hallways?", choices: ["More noise", "Cleaner and fewer smells", "More posters", "Darker lights"], answerIndex: 1 },
      { q: "What did residents add in the lobby?", choices: ["Coffee shop", "Swap shelf", "Vending machine", "Notice board"], answerIndex: 1 },
    ]
  },
  {
    id: "b1-hiking-weekend",
    title: "Planning a Weekend Hike",
    level: "B1",
    paragraphs: [
      "Sara and two friends want to hike a popular trail this weekend. The weather forecast shows light rain on Saturday but clear skies on Sunday.",
      "They decide to go on Sunday, start early, and bring enough water. Sara makes a checklist: map, first-aid kit, snacks, rain jackets, and a portable charger.",
      "To avoid crowds, they plan to meet at the trailhead at 6:30 a.m. After the hike, they will have lunch in a nearby town."
    ],
    translationTh: "ซาร่ากับเพื่อนอีกสองคนอยากไปเดินป่าช่วงสุดสัปดาห์ พยากรณ์อากาศบอกว่าฝนตกเบา ๆ วันเสาร์ แต่ท้องฟ้าโปร่งวันอาทิตย์\n\nพวกเขาเลยเลือกไปวันอาทิตย์ ออกแต่เช้า และพกน้ำให้พอ ซาร่าจดรายการ: แผนที่ ชุดปฐมพยาบาล ของกิน เสื้อกันฝน และที่ชาร์จพกพา\n\nเพื่อหลีกเลี่ยงคนเยอะ นัดเจอกันที่ทางขึ้นเส้นทางตอนหกโมงครึ่ง เสร็จแล้วจะแวะกินข้าวเที่ยงในเมืองใกล้ ๆ",
    questions: [
      { q: "Which day will they hike?", choices: ["Friday", "Saturday", "Sunday", "Any day"], answerIndex: 2 },
      { q: "Why bring a portable charger?", choices: ["For photos and safety", "To power a stove", "To heat water", "To light a fire"], answerIndex: 0 },
      { q: "What time will they meet?", choices: ["6:30 a.m.", "8:00 a.m.", "Noon", "6:30 p.m."], answerIndex: 0 },
      { q: "Where will they eat after the hike?", choices: ["At home", "At the trailhead", "In a nearby town", "On the bus"], answerIndex: 2 },
      { q: "What is the weather on Saturday?", choices: ["Snow", "Strong wind", "Light rain", "Clear"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-community-library",
    title: "Joining the Community Library",
    level: "B1",
    paragraphs: [
      "A new community library opened near Mei's apartment. Membership is free for residents and includes access to e-books and weekly workshops.",
      "Mei signs up with her ID card and receives a digital card on her phone. She borrows two novels and registers for a beginner photography class next Thursday.",
      "The library also has a quiet study room and a small cafe. Mei plans to spend Saturday mornings there to read and practice photography."
    ],
    translationTh: "ห้องสมุดชุมชนแห่งใหม่เปิดใกล้อพาร์ตเมนต์ของเหมย สมัครสมาชิกฟรีสำหรับผู้อยู่อาศัย และมีอีบุ๊กกับเวิร์กช็อปรายสัปดาห์\n\nเหมยสมัครด้วยบัตรประชาชนและได้รับบัตรดิจิทัลในมือถือ เธอยืมนวนิยายสองเล่มและลงทะเบียนคอร์สถ่ายภาพสำหรับผู้เริ่มต้นในวันพฤหัสหน้า\n\nห้องสมุดยังมีห้องอ่านหนังสือเงียบและคาเฟ่เล็ก ๆ เหมยวางแผนใช้เช้าวันเสาร์อ่านหนังสือและฝึกถ่ายภาพ",
    questions: [
      { q: "How much is the membership?", choices: ["Free", "$10", "$20", "Not available"], answerIndex: 0 },
      { q: "What class does Mei register for?", choices: ["Cooking", "Photography", "Writing", "Coding"], answerIndex: 1 },
      { q: "What does she borrow?", choices: ["Magazines", "Two novels", "A camera", "A tablet"], answerIndex: 1 },
      { q: "Where will Mei spend Saturday mornings?", choices: ["At home", "At the gym", "At the library", "At a park"], answerIndex: 2 },
      { q: "What special room does the library have?", choices: ["Gaming room", "Quiet study room", "Music studio", "Movie theater"], answerIndex: 1 },
    ]
  },

  {
    id: "b2-startup-pivot",
    title: "A Startup's Product Pivot",
    level: "B2",
    paragraphs: [
      "After six months of slow sales, the team analyzed user interviews and discovered most customers used the app for scheduling, not for full project management as intended.",
      "They decided to pivot: simplify the interface, focus on calendar sharing, and integrate with email providers. A small beta group reported higher satisfaction and faster onboarding.",
      "The company will sunset complex features next quarter and launch a freemium plan to grow adoption while keeping support costs predictable."
    ],
    translationTh: "หลังยอดขายชะลอตัวหกเดือน ทีมงานวิเคราะห์สัมภาษณ์ผู้ใช้และพบว่าคนส่วนใหญ่ใช้แอปเพื่อ ‘จัดตารางเวลา’ ไม่ใช่การจัดการโปรเจกต์เต็มรูปแบบ\n\nพวกเขาจึงปรับทิศทาง ตัด UI ให้เรียบ โฟกัสการแชร์ปฏิทิน และเชื่อมกับผู้ให้บริการอีเมล กลุ่มเบต้าให้คะแนนพึงพอใจสูงขึ้นและเริ่มใช้งานเร็วขึ้น\n\nบริษัทจะยุติฟีเจอร์ซับซ้อนในไตรมาสหน้า และออกแพ็กเกจฟรีเมียมเพื่อเพิ่มการใช้งานโดยควบคุมต้นทุนซัพพอร์ต",
    questions: [
      { q: "What did the analysis reveal?", choices: ["Users love advanced features", "Most used it mainly for scheduling", "Sales were growing", "Email integration was broken"], answerIndex: 1 },
      { q: "Which direction did the team choose?", choices: ["Add more features", "Raise prices", "Simplify and focus on calendar sharing", "Switch to hardware"], answerIndex: 2 },
      { q: "What happened in the beta group?", choices: ["Lower satisfaction", "Higher satisfaction", "No change", "They quit"], answerIndex: 1 },
      { q: "What will be sunset?", choices: ["Complex features", "Calendar", "Email", "Support"], answerIndex: 0 },
      { q: "Why freemium?", choices: ["To reduce revenue", "To grow adoption with predictable costs", "To remove support", "To hire fewer people"], answerIndex: 1 },
    ]
  },
  {
    id: "b2-transit-redesign",
    title: "Redesigning City Transit Maps",
    level: "B2",
    paragraphs: [
      "A design team was hired to redraw the city's transit map. The old version had inconsistent colors and dense labels, which confused tourists and residents alike.",
      "The new system uses strong color contrast, simpler line geometry, and consistent icons. Stations with multiple exits are numbered, and major landmarks are added for orientation.",
      "Early tests show fewer wrong transfers and shorter planning time. The transit authority aims to roll out the new design across stations and mobile apps by the end of the year."
    ],
    translationTh: "ทีมงานออกแบบได้รับจ้างปรับแผนที่ระบบขนส่งของเมือง ฉบับเก่ามีสีไม่สม่ำเสมอและตัวอักษรหนาแน่น ทำให้ทั้งนักท่องเที่ยวและคนท้องถิ่นสับสน\n\nฉบับใหม่ใช้สีตัดกันชัด เส้นเรียบง่าย และไอคอนรูปแบบเดียวกัน สถานีที่มีหลายทางออกมีหมายเลขกำกับ และเพิ่มจุดสังเกตสำคัญช่วยการหาทิศทาง\n\nผลทดสอบเบื้องต้นพบว่ามีการเปลี่ยนสายผิดน้อยลง และใช้เวลาวางแผนสั้นลง หน่วยงานขนส่งตั้งใจเผยแพร่ทั้งในสถานีและแอปมือถือภายในสิ้นปี",
    questions: [
      { q: "What was the problem with the old map?", choices: ["Too colorful", "Inconsistent colors and dense labels", "No mobile app", "Too simple"], answerIndex: 1 },
      { q: "What improvement helps at stations with many exits?", choices: ["Bigger logos", "Numbered exits", "More ads", "Hidden icons"], answerIndex: 1 },
      { q: "What do early tests show?", choices: ["More wrong transfers", "No difference", "Fewer wrong transfers", "Lower ridership"], answerIndex: 2 },
      { q: "Where will the design roll out?", choices: ["Only downtown", "Stations and mobile apps", "Only buses", "Only trains"], answerIndex: 1 },
      { q: "When is the target?", choices: ["Next month", "End of the year", "Tomorrow", "In five years"], answerIndex: 1 },
    ]
  },
  {
    id: "b2-mindful-deepwork",
    title: "Mindfulness and Deep Work",
    level: "B2",
    paragraphs: [
      "To reduce context switching, Lila schedules two blocks of deep work daily. Before each block, she spends three minutes on mindful breathing to settle her attention.",
      "She disables notifications, closes unused tabs, and keeps a short written goal in front of her. After forty-five minutes, she takes a short break to stretch and drink water.",
      "Over several weeks, Lila notices clearer thinking and less stress. She also completes complex tasks faster because she revisits them less often."
    ],
    translationTh: "เพื่อหลีกเลี่ยงการเปลี่ยนบริบทบ่อย ลีลากำหนดเวลาทำงานลึกวันละสองช่วง ก่อนเริ่มเธอหายใจมีสติสามนาทีเพื่อรวบรวมสมาธิ\n\nเธอปิดแจ้งเตือน ปิดแท็บที่ไม่ใช้ และวางเป้าหมายสั้น ๆ ไว้ตรงหน้า ทำงานสี่สิบห้านาทีแล้วพักยืดเส้นและดื่มน้ำ\n\nไม่กี่สัปดาห์ต่อมา ลีลาคิดได้ชัดขึ้น เครียดน้อยลง และทำงานยากได้เร็วขึ้นเพราะไม่ต้องกลับไปเริ่มใหม่บ่อย ๆ",
    questions: [
      { q: "What does Lila do before deep work?", choices: ["Checks messages", "Mindful breathing", "Reads news", "Cleans the desk"], answerIndex: 1 },
      { q: "How long is each work block?", choices: ["15 minutes", "30 minutes", "45 minutes", "2 hours"], answerIndex: 2 },
      { q: "Why does she finish tasks faster?", choices: ["More meetings", "Fewer revisits", "More apps", "Longer breaks"], answerIndex: 1 },
      { q: "What does she do during breaks?", choices: ["Gaming", "Stretching and water", "Emails", "Shopping"], answerIndex: 1 },
      { q: "What is reduced by her routine?", choices: ["Context switching", "Coffee intake", "Team size", "Computer speed"], answerIndex: 0 },
    ]
  }
];
