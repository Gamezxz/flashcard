export interface ReadingQuestion {
  q: string;
  choices: string[];
  answerIndex: number;
  explain?: string;
}

export interface ReadingItem {
  id: string;
  title: string;
  level: string; // CEFR level e.g., A2, B1
  paragraphs: string[];
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
  }
];

