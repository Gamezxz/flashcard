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
  },
  {
    id: "a2-bread-price",
    title: "Bread Costs More This Month",
    level: "A2",
    paragraphs: [
      "Ana goes to the bakery near her office every Monday. She buys a small loaf of bread and a cup of tea.",
      "Today, the sign shows a higher price for bread. The baker explains that flour and delivery cost more now, so the price has to change.",
      "Ana compares the prices and decides to buy a smaller loaf this week. She also plans to bring snacks from home to save money."
    ],
    translationTh: "อานาไปที่ร้านขนมปังใกล้ที่ทำงานทุกวันจันทร์ เธอซื้อน้ำชาหนึ่งแก้วและขนมปังก้อนเล็ก\n\nวันนี้ป้ายหน้าร้านบอกราคาขนมปังสูงขึ้น เจ้าของร้านอธิบายว่าแป้งและค่าขนส่งแพงขึ้น จึงต้องปรับราคา\n\nอานาเปรียบเทียบราคาและเลือกซื้อก้อนที่เล็กลงสัปดาห์นี้ เธอยังวางแผนพกของกินจากบ้านเพื่อประหยัดเงิน",
    questions: [
      { q: "What does Ana buy on Mondays?", choices: ["Cake and coffee", "Bread and tea", "Juice only", "Nothing"], answerIndex: 1 },
      { q: "Why did the bread price change?", choices: ["New recipe", "Holiday", "Higher flour and delivery costs", "Sale"], answerIndex: 2 },
      { q: "What does Ana decide to buy?", choices: ["A bigger loaf", "A smaller loaf", "Two loaves", "No bread"], answerIndex: 1 },
      { q: "How else will she save money?", choices: ["Walk to work", "Bring snacks from home", "Buy more tea", "Change bakery"], answerIndex: 1 },
      { q: "Where is the price shown?", choices: ["On a website", "On a sign", "On a receipt", "On a bag"], answerIndex: 1 },
    ]
  },
  {
    id: "a2-what-is-bitcoin",
    title: "A Simple Talk About Bitcoin",
    level: "A2",
    paragraphs: [
      "Tom hears his friend say the word 'Bitcoin' at lunch. He asks, 'What is it?'",
      "His friend says, 'It is digital money on the internet. You can send it to people without a bank. But the price can go up and down fast.'",
      "Tom nods. He decides to read more at home and start with a small amount if he tries it."
    ],
    translationTh: "ทอมได้ยินเพื่อนพูดคำว่า ‘บิตคอยน์’ ตอนกินข้าวเที่ยง เขาถามว่า ‘คืออะไร’\n\nเพื่อนตอบว่า ‘เป็นเงินดิจิทัลบนอินเทอร์เน็ต ส่งหาใครก็ได้โดยไม่ต้องผ่านธนาคาร แต่ราคาขึ้นลงเร็ว’\n\nทอมพยักหน้า เขาตัดสินใจกลับไปอ่านเพิ่มเติมที่บ้าน และเริ่มจากจำนวนเล็ก ๆ หากจะลองใช้",
    questions: [
      { q: "Where does Tom hear about Bitcoin?", choices: ["In a class", "At lunch", "On a bus", "On TV"], answerIndex: 1 },
      { q: "What is Bitcoin called?", choices: ["Paper money", "Digital money", "Gift card", "Coin in a jar"], answerIndex: 1 },
      { q: "Do you need a bank to send it?", choices: ["Always", "Never", "Not necessarily", "Only on weekends"], answerIndex: 2 },
      { q: "What risk does the friend mention?", choices: ["Slow internet", "High taxes", "Fast price changes", "No wallet"], answerIndex: 2 },
      { q: "What will Tom do next?", choices: ["Buy a lot now", "Forget about it", "Read more at home", "Sell his phone"], answerIndex: 2 },
    ]
  },
  {
    id: "a2-cafe-accepts-bitcoin",
    title: "A Cafe Adds a Bitcoin Sign",
    level: "A2",
    paragraphs: [
      "Mira visits a small cafe near the station. Next to the cash register, she sees a new sign: 'We accept Bitcoin'.",
      "The barista shows how customers scan a QR code with a phone wallet. The cafe still takes cash and cards, but Bitcoin is another option.",
      "Mira pays with a card today, but she is curious and asks for a link to learn more."
    ],
    translationTh: "มีราไปร้านกาแฟเล็ก ๆ ใกล้สถานี ด้านข้างแคชเชียร์มีป้ายใหม่ว่า ‘รับบิตคอยน์’\n\nบาริสต้าสาธิตว่าลูกค้าสแกนคิวอาร์โค้ดด้วยกระเป๋าเงินในมือถือได้ ร้านยังรับเงินสดและบัตรเหมือนเดิม แต่บิตคอยน์เป็นอีกตัวเลือกหนึ่ง\n\nวันนี้มีราจ่ายด้วยบัตร แต่เธอสนใจและขอลิงก์ไปอ่านต่อ",
    questions: [
      { q: "Where is the new sign?", choices: ["On the door", "Next to the register", "In the kitchen", "On the floor"], answerIndex: 1 },
      { q: "How do customers pay with Bitcoin?", choices: ["Type a long code", "Scan a QR code", "Call the bank", "Use cash"], answerIndex: 1 },
      { q: "Does the cafe accept only Bitcoin now?", choices: ["Yes", "No, also cash and cards", "Only cash", "Only cards"], answerIndex: 1 },
      { q: "What does Mira use today?", choices: ["Coins", "Cash", "Card", "Bitcoin"], answerIndex: 2 },
      { q: "What does Mira ask for?", choices: ["A discount", "A job", "A link to learn more", "A bigger cup"], answerIndex: 2 },
    ]
  },
  {
    id: "a2-saving-phone-inflation",
    title: "Saving for a Phone During Inflation",
    level: "A2",
    paragraphs: [
      "Dan saves money to buy a new phone. He puts a little in a jar every week.",
      "At the store, he sees the price is higher than last month. His dad explains that many things cost more this year. This is called inflation.",
      "Dan decides to save for two more weeks and look for a small discount online before he buys."
    ],
    translationTh: "แดนเก็บเงินเพื่อซื้อโทรศัพท์ใหม่ เขาใส่เหรียญลงโหลทุกสัปดาห์\n\nที่ร้าน เขาเห็นว่าราคาแพงกว่าคเดือนก่อน พ่ออธิบายว่าของหลายอย่างแพงขึ้นในปีนี้ สิ่งนี้เรียกว่าเงินเฟ้อ\n\nแดนตัดสินใจเก็บเพิ่มอีกสองสัปดาห์ และมองหาส่วนลดเล็ก ๆ ทางออนไลน์ก่อนซื้อ",
    questions: [
      { q: "What is Dan saving for?", choices: ["A bicycle", "A new phone", "A trip", "A watch"], answerIndex: 1 },
      { q: "What happened to the price?", choices: ["It went down", "It stayed the same", "It went up", "It disappeared"], answerIndex: 2 },
      { q: "What is this price rise called?", choices: ["Donation", "Inflation", "Vacation", "Information"], answerIndex: 1 },
      { q: "What will Dan do next?", choices: ["Buy today", "Stop saving", "Save two more weeks", "Return the jar"], answerIndex: 2 },
      { q: "Where will he look for a deal?", choices: ["Newspaper", "TV", "Online", "At school"], answerIndex: 2 },
    ]
  },
  {
    id: "a2-remit-bitcoin-fees",
    title: "Sending Money With Lower Fees",
    level: "A2",
    paragraphs: [
      "May wants to send money to her brother in another country. The bank fee is high for small amounts.",
      "Her coworker says some people try Bitcoin for small transfers. They send a test first and check if it works.",
      "May writes down the steps and decides to practice with a very small amount before using it for real."
    ],
    translationTh: "เมย์อยากโอนเงินให้พี่ชายในต่างประเทศ ค่าธรรมเนียมธนาคารแพงสำหรับจำนวนเล็ก\n\nเพื่อนร่วมงานบอกว่าบางคนลองใช้บิตคอยน์สำหรับการโอนเล็ก ๆ โดยส่งทดสอบก่อนและดูว่าได้ไหม\n\nเมย์จดขั้นตอนและตัดสินใจฝึกด้วยจำนวนเล็กมากก่อนใช้จริง",
    questions: [
      { q: "What is May trying to do?", choices: ["Book a flight", "Send money abroad", "Buy a computer", "Open a shop"], answerIndex: 1 },
      { q: "What is the problem with the bank?", choices: ["Slow staff", "No branches", "High fee", "No internet"], answerIndex: 2 },
      { q: "What method does her coworker mention?", choices: ["Cash only", "Bitcoin", "Checks", "Gold"], answerIndex: 1 },
      { q: "What will May send first?", choices: ["A big payment", "Nothing", "A test with a small amount", "A letter"], answerIndex: 2 },
      { q: "What does May write down?", choices: ["Songs", "Steps", "Recipes", "News"], answerIndex: 1 },
    ]
  },
  {
    id: "b1-why-prices-rise",
    title: "Why Everyday Prices Rise",
    level: "B1",
    paragraphs: [
      "Inflation means the average price of goods and services goes up over time. It can come from higher demand, supply problems, or rising energy costs.",
      "When prices rise faster than salaries, families adjust. They may switch brands, buy in bulk, or delay non-essential purchases.",
      "Tracking a monthly budget helps people see changes and make small plans before bills arrive."
    ],
    translationTh: "เงินเฟ้อหมายถึงราคาเฉลี่ยของสินค้าและบริการเพิ่มขึ้นตามเวลา สาเหตุอาจมาจากอุปสงค์สูง ปัญหาอุปทาน หรือค่าพลังงานที่แพงขึ้น\n\nเมื่อราคาขึ้นเร็วกว่าค่าแรง ครอบครัวต้องปรับตัว เช่น เปลี่ยนยี่ห้อ ซื้อยกแพ็ก หรือเลื่อนการซื้อของที่ไม่จำเป็น\n\nการติดตามงบประมาณรายเดือนช่วยให้เห็นการเปลี่ยนแปลงและวางแผนเล็ก ๆ ล่วงหน้าก่อนบิลมา",
    questions: [
      { q: "What does inflation mean?", choices: ["Lower prices", "Stable prices", "Rising average prices", "Free goods"], answerIndex: 2 },
      { q: "Which is NOT a cause mentioned?", choices: ["Higher demand", "Supply problems", "Rising energy costs", "More holidays"], answerIndex: 3 },
      { q: "What might families do?", choices: ["Spend more on everything", "Switch brands or delay buys", "Ignore bills", "Stop eating"], answerIndex: 1 },
      { q: "What tool helps track changes?", choices: ["A game", "A monthly budget", "A cookbook", "A map"], answerIndex: 1 },
      { q: "When is the plan useful?", choices: ["After bills are paid", "Before bills arrive", "Only at new year", "Never"], answerIndex: 1 },
    ]
  },
  {
    id: "b1-bitcoin-fixed-supply",
    title: "Bitcoin's Fixed Supply and Halving",
    level: "B1",
    paragraphs: [
      "Bitcoin has a fixed maximum supply of 21 million coins. New coins are created as rewards for miners who secure the network.",
      "About every four years, the block reward is cut in half. This event, called the 'halving', slows the rate of new supply.",
      "Even with a fixed supply, the market price can move up or down quickly because demand and investor sentiment change."
    ],
    translationTh: "บิตคอยน์มีอุปทานสูงสุดคงที่ที่ 21 ล้านเหรียญ เหรียญใหม่เกิดจากรางวัลให้กับนักขุดที่ช่วยรักษาความปลอดภัยเครือข่าย\n\nประมาณทุกสี่ปี รางวัลต่อบล็อกจะลดลงครึ่งหนึ่ง เหตุการณ์นี้เรียกว่า ‘ฮาล์ฟวิ่ง’ ทำให้อัตราการเพิ่มของเหรียญใหม่ช้าลง\n\nแม้อุปทานคงที่ แต่ราคาตลาดยังขึ้นลงเร็วได้ เพราะอุปสงค์และความเชื่อมั่นของนักลงทุนเปลี่ยนแปลง",
    questions: [
      { q: "What is Bitcoin's maximum supply?", choices: ["Unlimited", "100 million", "21 million", "1 million"], answerIndex: 2 },
      { q: "Who gets rewards for securing the network?", choices: ["Savers", "Miners", "Banks", "Shops"], answerIndex: 1 },
      { q: "What is the halving?", choices: ["Price drop", "Reward cut in half", "New coin launch", "Tax holiday"], answerIndex: 1 },
      { q: "Does fixed supply stop volatility?", choices: ["Yes", "No", "Sometimes", "Only in winter"], answerIndex: 1 },
      { q: "What influences the market price?", choices: ["Only supply", "Only mining", "Demand and sentiment", "Only energy"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-inflation-hedges",
    title: "Hedging Against Inflation: Pros and Cons",
    level: "B1",
    paragraphs: [
      "To protect purchasing power, some people buy assets like index funds, gold, or Bitcoin. Each choice has different risks and time horizons.",
      "Stocks can grow with the economy but can also drop during recessions. Gold and Bitcoin are limited in supply but can be volatile in the short term.",
      "A clear plan, small regular contributions, and an emergency fund help reduce stress when prices and markets move."
    ],
    translationTh: "เพื่อปกป้องอำนาจซื้อ บางคนเลือกสินทรัพย์เช่นกองทุนดัชนี ทองคำ หรือบิตคอยน์ แต่ละแบบมีความเสี่ยงและช่วงเวลาการลงทุนต่างกัน\n\nหุ้นอาจเติบโตตามเศรษฐกิจแต่ก็ลดลงได้เวลาเศรษฐกิจถดถอย ทองคำและบิตคอยน์มีอุปทานจำกัดแต่ราคาผันผวนระยะสั้น\n\nแผนที่ชัด การทยอยลงทุน และกองทุนสำรองฉุกเฉิน ช่วยลดความกังวลเมื่อราคาและตลาดขยับตัว",
    questions: [
      { q: "What do people buy to hedge inflation?", choices: ["Only cash", "Index funds, gold, or Bitcoin", "Cars", "Groceries"], answerIndex: 1 },
      { q: "What can happen during recessions?", choices: ["Stocks always rise", "Stocks can drop", "Gold disappears", "Fees vanish"], answerIndex: 1 },
      { q: "What is a shared trait of gold and Bitcoin?", choices: ["Unlimited supply", "Government backed", "Limited supply", "Pays interest"], answerIndex: 2 },
      { q: "What helps reduce stress?", choices: ["Big risks", "Daily trading", "A plan and emergency fund", "Ignoring budgets"], answerIndex: 2 },
      { q: "How should contributions be made?", choices: ["All at once", "Randomly", "Small and regular", "Never"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-shop-accepts-bitcoin",
    title: "A Small Shop Tries Bitcoin Payments",
    level: "B1",
    paragraphs: [
      "A local electronics shop wants to reduce card processing fees. The owner tests a payment app that converts Bitcoin to local currency instantly.",
      "Customers can pay by scanning a QR code. The app locks the exchange rate for a short time and sends the shop owner cash the next day.",
      "After a month, the owner keeps the option because some tourists used it, and total fees were slightly lower than before."
    ],
    translationTh: "ร้านขายอิเล็กทรอนิกส์ท้องถิ่นอยากลดค่าธรรมเนียมบัตร เจ้าของร้านทดสอบแอปที่แปลงบิตคอยน์เป็นสกุลเงินท้องถิ่นทันที\n\nลูกค้าจ่ายโดยสแกนคิวอาร์โค้ด แอปล็อคอัตราแลกเปลี่ยนชั่วคราว และโอนเงินสดให้เจ้าของร้านในวันถัดไป\n\nผ่านไปหนึ่งเดือน เจ้าของยังคงตัวเลือกนี้ไว้ เพราะนักท่องเที่ยวบางคนใช้ และค่าธรรมเนียมรวมลดลงเล็กน้อยเมื่อเทียบกับก่อนหน้า",
    questions: [
      { q: "Why does the shop test Bitcoin?", choices: ["To raise rent", "To reduce card fees", "To change products", "To hire more staff"], answerIndex: 1 },
      { q: "How do customers pay?", choices: ["Swipe a card", "Scan a QR code", "Use cash only", "Write a check"], answerIndex: 1 },
      { q: "What happens to Bitcoin in the app?", choices: ["It is stored for years", "It is converted to local currency", "It is mailed", "It is burned"], answerIndex: 1 },
      { q: "When does cash arrive?", choices: ["Same minute", "Next day", "Next month", "Never"], answerIndex: 1 },
      { q: "What was the result after a month?", choices: ["Fees went up", "No one used it", "Fees were slightly lower", "Store closed"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-remittance-comparison",
    title: "Comparing Remittance Options",
    level: "B1",
    paragraphs: [
      "Luis sends money home every month. He compares bank transfers, a popular fintech app, and Bitcoin-based transfers.",
      "Banks are familiar but charge higher fees for small amounts. The fintech app is cheaper and fast within its network. Bitcoin can be low-cost but requires a wallet and careful checks of addresses.",
      "Luis decides to use the fintech app for most payments and Bitcoin for rare cases when the app is unavailable."
    ],
    translationTh: "หลุยส์โอนเงินกลับบ้านทุกเดือน เขาเปรียบเทียบการโอนผ่านธนาคาร แอปฟินเทคยอดนิยม และการโอนด้วยบิตคอยน์\n\nธนาคารคุ้นเคยแต่คิดค่าธรรมเนียมสูงสำหรับจำนวนเล็ก แอปฟินเทคราคาถูกและเร็วในเครือข่ายของมัน บิตคอยน์มีต้นทุนต่ำได้แต่ต้องมีกระเป๋าเงินและตรวจสอบที่อยู่ให้รอบคอบ\n\nหลุยส์ตัดสินใจใช้แอปฟินเทคเป็นหลัก และใช้บิตคอยน์ในกรณีที่หาแอปใช้งานไม่ได้เป็นครั้งคราว",
    questions: [
      { q: "How often does Luis send money?", choices: ["Once a year", "Every month", "Every day", "Never"], answerIndex: 1 },
      { q: "What is a downside of bank transfers?", choices: ["No receipt", "Higher fees for small amounts", "No branches", "Only cash"], answerIndex: 1 },
      { q: "What is required to use Bitcoin?", choices: ["A passport", "A wallet and address checks", "A credit card", "A postal box"], answerIndex: 1 },
      { q: "What does Luis choose for most payments?", choices: ["Bank", "Fintech app", "Cash", "Checks"], answerIndex: 1 },
      { q: "When will he use Bitcoin?", choices: ["Every time", "Never", "When the app is unavailable", "Only on weekends"], answerIndex: 2 },
    ]
  },
  {
    id: "b2-founder-pmf",
    title: "A Founder Searches for Product-Market Fit",
    level: "B2",
    paragraphs: [
      "In the second year of her startup, Narin noticed that weekly active users were flat. New signups trickled in, but most people stopped returning after the second week.",
      "She paused new feature work and scheduled twenty interviews with customers. Using a simple jobs-to-be-done map, she traced where people currently solve the problem and where they feel friction.",
      "The interviews revealed that teams mostly coordinate through chat and shared calendars. Handoffs break when information is buried in long threads, and deadlines slip because no one feels clear ownership.",
      "Narin built a lightweight prototype: a shareable link that turns any message into a trackable task with an owner and due date. There was no sign-up step, and she measured activation and one-week retention.",
      "She also experimented with pricing. A small group saw a $9 monthly plan and another saw $19. She tracked conversion, churn, and short interviews with people who canceled.",
      "After twelve weeks, retention improved, support tickets dropped, and net promoter scores rose. The team committed to a 'smallest lovable product' and delayed complex features until the core workflow felt effortless."
    ],
    translationTh: "ในปีที่สองของสตาร์ตอัป นารินสังเกตว่าผู้ใช้ประจำต่อสัปดาห์ทรงตัว ผู้ใช้ใหม่ยังมีเข้ามา แต่ส่วนใหญ่เลิกกลับมาใช้งานหลังสัปดาห์ที่สอง\n\nเธอหยุดการทำฟีเจอร์ใหม่ และนัดสัมภาษณ์ลูกค้ายี่สิบราย ใช้แผนที่ jobs-to-be-done อย่างง่ายเพื่อดูว่าคนแก้ปัญหาที่ไหน และเจอความฝืดตรงไหน\n\nการสัมภาษณ์ชี้ว่า ทีมส่วนใหญ่คุยงานกันในแชตและปฏิทินร่วมกัน การส่งต่องานสะดุดเมื่อข้อมูลจมหายอยู่ในข้อความยาว ๆ และเดดไลน์เลื่อนเพราะไม่มีเจ้าของงานชัดเจน\n\nนารินสร้างต้นแบบเบา ๆ: ลิงก์แชร์ที่เปลี่ยนข้อความใด ๆ ให้เป็นงานติดตามได้ พร้อมเจ้าของและกำหนดส่ง ไม่มีขั้นตอนสมัครสมาชิก และวัดการเปิดใช้งานกับการกลับมาใช้หนึ่งสัปดาห์\n\nเธอยังทดลองราคา กลุ่มหนึ่งเห็นแพ็กเกจเดือนละ 9 ดอลลาร์ อีกกลุ่มเห็น 19 ดอลลาร์ เธอติดตามอัตราแปลง การยกเลิก และสัมภาษณ์สั้นกับผู้ที่ยกเลิก\n\nผ่านไปสิบสองสัปดาห์ อัตราการคงอยู่ดีขึ้น ตั๋วซัพพอร์ตลดลง และคะแนนแนะนำเพิ่มขึ้น ทีมจึงยึดแนวคิด ‘ผลิตภัณฑ์เล็กแต่คนรัก’ และเลื่อนฟีเจอร์ซับซ้อนไปก่อนจนกว่ากระบวนการหลักจะไหลลื่น",
    questions: [
      { q: "What problem did Narin see?", choices: ["Faster growth", "Flat weekly active users", "Server outages", "Hiring freeze"], answerIndex: 1 },
      { q: "What method did she use?", choices: ["Random surveys", "Twenty interviews and JTBD mapping", "Paid ads", "Trade shows"], answerIndex: 1 },
      { q: "What was special about the prototype?", choices: ["Required sign-up", "Shareable link, no sign-up", "AI only", "Hardware"], answerIndex: 1 },
      { q: "What did pricing tests compare?", choices: ["$5 vs $7", "$9 vs $19", "$99 vs $199", "Free vs lifetime"], answerIndex: 1 },
      { q: "What improved after twelve weeks?", choices: ["Costs rose", "More support tickets", "Retention and NPS", "Office size"], answerIndex: 2 },
    ]
  },
  {
    id: "b2-founder-first-team",
    title: "Hiring the First Five Employees",
    level: "B2",
    paragraphs: [
      "After reaching fifty paying customers, Khaled decided to hire. He wrote clear role outcomes instead of long task lists and published salary bands and equity ranges in each job post.",
      "Applications increased because candidates saw transparent pay. The interview loop included a one-hour work sample test and a short pair session to observe collaboration and communication.",
      "For onboarding, each new teammate received a buddy, a checklist, and a 30-60-90 day plan. The first week focused on setting up tools and shipping a tiny improvement to learn the review process.",
      "Khaled also scheduled a weekly demo day where everyone showed small wins. Mistakes were discussed in blameless postmortems, and actions were documented in a changelog.",
      "Velocity increased, but so did communication overhead. To keep context accessible, the team began writing lightweight design docs before starting work and linked decisions back to goals.",
      "By the end of the quarter, support response time improved and roadmap items shipped more predictably. Hiring early with intention helped shape a culture of clarity and learning."
    ],
    translationTh: "หลังมียอดลูกค้าที่จ่ายเงินครบห้าสิบราย คาลิดตัดสินใจจ้างทีม เขาเขียนผลลัพธ์ของบทบาทงานแทนรายการงานยาว ๆ และเปิดเผยช่วงเงินเดือนกับหุ้นพนักงานในประกาศรับสมัคร\n\nผู้สมัครเพิ่มขึ้นเพราะค่าตอบแทนโปร่งใส กระบวนการสัมภาษณ์มีแบบทดสอบงานหนึ่งชั่วโมง และเซสชันจับคู่สั้น ๆ เพื่อดูการทำงานร่วมกันและการสื่อสาร\n\nช่วงออนบอร์ดแต่ละคนมีบัดดี้ เช็กลิสต์ และแผน 30-60-90 วัน สัปดาห์แรกเน้นตั้งค่าเครื่องมือและส่งการปรับปรุงเล็ก ๆ เพื่อเรียนรู้ขั้นตอนรีวิว\n\nคาลิดจัดเดโมเดย์ทุกสัปดาห์เพื่อโชว์ชัยชนะเล็ก ๆ ความผิดพลาดถูกคุยแบบไม่โทษบุคคล และบันทึกแผนแก้ไขไว้ใน changelog\n\nความเร็วเพิ่มขึ้น แต่ภาระสื่อสารก็เพิ่มตาม ทีมจึงเริ่มเขียนเอกสารออกแบบแบบเบาก่อนเริ่มงาน และลิงก์การตัดสินใจกลับไปยังเป้าหมาย\n\nสิ้นไตรมาส เวลาตอบกลับซัพพอร์ตดีขึ้น และสิ่งในโรดแมปส่งมอบได้ตรงขึ้น การจ้างทีมแรกอย่างมีเจตนาช่วยสร้างวัฒนธรรมความชัดเจนและการเรียนรู้",
    questions: [
      { q: "What triggered hiring?", choices: ["Office move", "Fifty paying customers", "A grant", "A conference"], answerIndex: 1 },
      { q: "What did job posts include?", choices: ["No pay info", "Salary bands and equity ranges", "Only perks", "Company history"], answerIndex: 1 },
      { q: "What was in the interview loop?", choices: ["Only chat", "Work sample and pair session", "A written exam only", "A group lunch"], answerIndex: 1 },
      { q: "What supported onboarding?", choices: ["Random tasks", "Buddy, checklist, 30-60-90 plan", "No plan", "Weekend training"], answerIndex: 1 },
      { q: "How did they manage communication overhead?", choices: ["More meetings", "Lightweight design docs", "Stop demos", "Add rules"], answerIndex: 1 },
    ]
  },
  {
    id: "b1-founder-social-bakery",
    title: "Starting a Social Bakery",
    level: "B1",
    paragraphs: [
      "Ploy opened a small bakery that hires single mothers and pays stable hours. The shop keeps a simple menu: bread, cookies, and two kinds of cake.",
      "New staff learn basic baking and safe food handling in a two-week training. The team practices measuring carefully and cleaning as they go.",
      "Ingredients come from nearby farms when possible. Ploy explains costs and margins so everyone understands why some items are seasonal or limited.",
      "For marketing, the bakery posts photos, shares stories of the team, and offers a free tasting in the park once a month.",
      "After three months, weekday sales cover rent and salaries. On weekends, the shop offers pre-orders and a simple delivery route in the neighborhood.",
      "Ploy plans a short morning class for kids about bread and nutrition and publishes a monthly note showing hours created and money set aside for childcare."
    ],
    translationTh: "พลอยเปิดเบเกอรีเล็ก ๆ ที่รับคุณแม่เลี้ยงเดี่ยวและให้ชั่วโมงงานคงที่ ร้านมีเมนูง่าย ๆ คือ ขนมปัง คุกกี้ และเค้กสองชนิด\n\nพนักงานใหม่เรียนการอบพื้นฐานและสุขอนามัยอาหารในคอร์สสองสัปดาห์ ทีมฝึกตวงอย่างแม่นยำและทำความสะอาดไปพร้อมกัน\n\nวัตถุดิบมาจากฟาร์มใกล้ ๆ เมื่อทำได้ พลอยอธิบายต้นทุนและมาร์จินเพื่อให้ทุกคนเข้าใจว่าทำไมบางเมนูถึงมีตามฤดูกาลหรือจำนวนจำกัด\n\nด้านการตลาด ร้านลงรูป แบ่งปันเรื่องราวของทีม และออกบูธชิมฟรีที่สวนสาธารณะเดือนละครั้ง\n\nครบสามเดือน ยอดขายวันธรรมดาครอบคลุมค่าเช่าและเงินเดือน เสาร์อาทิตย์เปิดรับพรีออเดอร์และมีเส้นทางส่งของง่าย ๆ ในละแวก\n\nพลอยวางแผนคอร์สเช้าสั้น ๆ สำหรับเด็กเกี่ยวกับขนมปังและโภชนาการ และเผยแพร่โน้ตประจำเดือนบอกชั่วโมงงานที่สร้างและเงินที่กันไว้สำหรับดูแลเด็ก",
    questions: [
      { q: "Who does the bakery hire?", choices: ["Only students", "Single mothers", "Only bakers with degrees", "Only men"], answerIndex: 1 },
      { q: "What is the menu like?", choices: ["Very long", "Simple", "No cakes", "Only drinks"], answerIndex: 1 },
      { q: "Where do ingredients come from when possible?", choices: ["Imported only", "Nearby farms", "Cans", "Leftovers"], answerIndex: 1 },
      { q: "How do they market the shop?", choices: ["TV ads", "Photos, stories, park tasting", "Billboards only", "No marketing"], answerIndex: 1 },
      { q: "What will the monthly note show?", choices: ["Weather", "Songs", "Hours and childcare fund", "New ovens"], answerIndex: 2 },
    ]
  },
  {
    id: "b1-founder-language-app",
    title: "Launching a Language Learning App",
    level: "B1",
    paragraphs: [
      "Minh built a language app with short five-minute lessons and simple quizzes. He tested early versions with two schools that had older phones and slow internet.",
      "Students liked bite-size lessons that worked offline. Minh added an auto-download option over Wi‑Fi and reduced image sizes to help low-end devices.",
      "To collect feedback, he added two buttons after each lesson: 'Confusing' and 'Clear'. He also sent a short survey to teachers every Friday.",
      "Local teachers recorded example sentences so accents matched the community. Minh paid a fair rate per hour and credited teachers in the app.",
      "He launched in two cities quietly, fixed crash bugs, and improved text contrast for accessibility.",
      "Next, Minh plans a freemium model: core lessons stay free, while a low-cost subscription unlocks review drills and offline audio packs."
    ],
    translationTh: "มินห์ทำแอปสอนภาษาที่มีบทเรียนสั้นห้านาทีและแบบทดสอบง่าย ๆ เขาทดลองเวอร์ชันแรกกับโรงเรียนสองแห่งที่มีโทรศัพท์เก่าและเน็ตช้า\n\nนักเรียนชอบบทเรียนชิ้นเล็กที่ใช้งานออฟไลน์ได้ มินห์จึงเพิ่มตัวเลือกดาวน์โหลดอัตโนมัติผ่านไวไฟ และลดขนาดรูปเพื่อช่วยเครื่องสเปกลด\n\nเพื่อเก็บฟีดแบ็ก เขาเพิ่มปุ่มสองปุ่มหลังบทเรียน: ‘สับสน’ และ ‘ชัดเจน’ และส่งแบบสอบถามสั้นถึงครูทุกวันศุกร์\n\nครูท้องถิ่นอัดประโยคตัวอย่างเพื่อให้น้ำเสียงตรงกับชุมชน มินห์จ่ายค่าจ้างที่ยุติธรรมต่อชั่วโมง และให้เครดิตในแอป\n\nเขาเปิดใช้งานเงียบ ๆ ในสองเมือง แก้บั๊กแครช และปรับคอนทราสต์ข้อความให้เข้าถึงได้ดีขึ้น\n\nขั้นต่อไป มินห์วางโมเดลฟรีเมียม: บทเรียนหลักฟรี ส่วนค่าสมาชิกเล็กน้อยปลดล็อกแบบฝึกทบทวนและแพ็กเสียงออฟไลน์",
    questions: [
      { q: "How long is each lesson?", choices: ["1 minute", "5 minutes", "30 minutes", "2 hours"], answerIndex: 1 },
      { q: "What helped low-end devices?", choices: ["Bigger images", "Reduced image sizes and offline mode", "More ads", "4K video"], answerIndex: 1 },
      { q: "How was feedback collected?", choices: ["Only email", "Buttons and weekly surveys", "Phone calls", "No feedback"], answerIndex: 1 },
      { q: "Who recorded sentences?", choices: ["Actors abroad", "Local teachers", "Robots", "Students only"], answerIndex: 1 },
      { q: "What is the next plan?", choices: ["Remove free lessons", "Freemium with optional subscription", "Raise prices only", "Stop development"], answerIndex: 1 },
    ]
  },
  {
    id: "b2-founder-hardware-pilot",
    title: "Running a Hardware Pilot in a Hospital",
    level: "B2",
    paragraphs: [
      "After years as a clinician, Dr. Amina founded a company to build low-cost sensors that record patients' vital signs automatically.",
      "Before any hospital pilot, her team completed safety tests and data protection reviews. They secured approval for a four-week trial with twenty devices on one ward.",
      "Data traveled over an encrypted network to a dashboard where nurses saw alerts for unusual heart rate or oxygen readings.",
      "In week one, two problems appeared: battery life was shorter than expected, and metal trolleys caused wireless interference. The team pushed a firmware update and added simple shielding.",
      "By week four, manual charting time dropped and missed overnight readings fell sharply. Hospital leaders signed a letter of intent to expand the trial.",
      "The biggest lesson was that shipping hardware requires logistics and support plans. Spare devices, clear instructions, and fast responses matter as much as the code."
    ],
    translationTh: "หลังทำงานเป็นแพทย์หลายปี ดร.อามินาก่อตั้งบริษัทสร้างเซ็นเซอร์ต้นทุนต่ำเพื่อลงบันทึกสัญญาณชีพของผู้ป่วยอัตโนมัติ\n\nก่อนทดสอบในโรงพยาบาล ทีมต้องผ่านการทดสอบความปลอดภัยและการคุ้มครองข้อมูล ได้อนุมัติให้ทดลองสี่สัปดาห์กับอุปกรณ์ยี่สิบชิ้นในวอร์ดหนึ่ง\n\nข้อมูลส่งผ่านเครือข่ายเข้ารหัสไปยังแดชบอร์ดที่พยาบาลเห็นการแจ้งเตือนเมื่อชีพจรหรือออกซิเจนผิดปกติ\n\nสัปดาห์แรกพบปัญหาสองอย่าง: แบตเตอรี่หมดเร็ว และรถเข็นโลหะรบกวนสัญญาณไร้สาย ทีมจึงอัปเดตเฟิร์มแวร์และเพิ่มแผ่นป้องกันอย่างง่าย\n\nพอสัปดาห์ที่สี่ เวลาจดบันทึกด้วยมือ ลดลง และการพลาดค่าช่วงกลางคืนลดฮวบ ผู้บริหารโรงพยาบาลลงนามหนังสือแสดงเจตนาเพื่อขยายการทดลอง\n\nบทเรียนสำคัญคือการส่งมอบฮาร์ดแวร์ต้องมีแผนโลจิสติกส์และซัพพอร์ต อุปกรณ์สำรอง คู่มือชัดเจน และการตอบสนองเร็ว สำคัญพอ ๆ กับโค้ด",
    questions: [
      { q: "What does the company build?", choices: ["Surgical robots", "Low-cost vital sign sensors", "Food scanners", "Beds"], answerIndex: 1 },
      { q: "How long was the pilot?", choices: ["One day", "Four weeks", "One year", "Six months"], answerIndex: 1 },
      { q: "Where did data go?", choices: ["Public website", "Encrypted network to a dashboard", "USB sticks", "Paper files"], answerIndex: 1 },
      { q: "What early problems appeared?", choices: ["Broken screens", "Short battery and interference", "Lost devices", "No Wi‑Fi"], answerIndex: 1 },
      { q: "What lesson did Amina learn?", choices: ["Marketing is everything", "Hardware needs logistics and support", "Hire fewer nurses", "Ignore feedback"], answerIndex: 1 },
    ]
  }
];
