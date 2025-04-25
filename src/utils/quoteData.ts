
export interface Quote {
  id: string;
  text: string;
  author: string | null;
  category: string;
}

export interface QuoteCategory {
  id: string;
  name: string;
  color: string;
}

// All available categories with their color assignments
export const categories: QuoteCategory[] = [
  { id: "love", name: "Love", color: "category-pink" },
  { id: "business", name: "Business", color: "category-blue" },
  { id: "confidence", name: "Confidence", color: "category-purple" },
  { id: "action", name: "Action", color: "category-cyan" },
  { id: "attitude", name: "Attitude", color: "category-pink" }, 
  { id: "being-real", name: "Being Real", color: "category-mint" },
  { id: "change", name: "Change", color: "category-coral" },
  { id: "encouraging", name: "Encouraging", color: "category-orange" },
  { id: "appreciation", name: "Appreciation", color: "category-purple" },
  { id: "accuracy", name: "Accuracy", color: "category-blue" },
  { id: "success", name: "Success", color: "category-teal" },
  { id: "wisdom", name: "Wisdom", color: "category-indigo" }
];

// Collection of quotes organized by category
export const quotes: Quote[] = [
  // Original quotes
  {
    id: "1",
    text: "Life is never worth worrying about deeds. Just doing is enough to get better.",
    author: null,
    category: "action"
  },
  {
    id: "2",
    text: "Act with a determination not to be turned aside by thoughts of the past and fears of the future.",
    author: null,
    category: "action"
  },
  {
    id: "3",
    text: "Opportunities are like sunrises. If you wait too long, you miss them.",
    author: null,
    category: "action"
  },
  {
    id: "4",
    text: "Ideas are meaningless without action. Everyone has ideas. To succeed, make your ideas real. Make them happen.",
    author: null,
    category: "action"
  },
  {
    id: "5",
    text: "If you work just for money, you'll never make it, but if you love what you're doing and you always put the customer first, success will be yours.",
    author: null,
    category: "business"
  },
  {
    id: "6",
    text: "Statistics suggest that when customers complain, business owners and managers ought to get excited about it. The complaining customer represents a huge opportunity for more business.",
    author: null,
    category: "business"
  },
  {
    id: "7",
    text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    id: "8",
    text: "Only do what you love, so that way you have no regrets. If you don't agree with something and do it anyway that sets you up for regret.",
    author: null,
    category: "love"
  },
  {
    id: "9",
    text: "When you have love and happiness together in your life you will be the most perfect person.",
    author: null,
    category: "love"
  },
  {
    id: "10",
    text: "Everything worth anything is both terrifying and beautiful, like the first time you do something you know is wrong, you know it's wrong and yet, you do it anyway.",
    author: null,
    category: "attitude"
  },
  {
    id: "11",
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "confidence"
  },
  {
    id: "12",
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "confidence"
  },
  {
    id: "13",
    text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John F. Kennedy",
    category: "change"
  },
  {
    id: "14",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "encouraging"
  },
  {
    id: "15",
    text: "At the end of the day, a loving family should find everything forgivable.",
    author: null,
    category: "love"
  },
  {
    id: "16",
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Dr. Seuss",
    category: "being-real"
  },
  {
    id: "17",
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    category: "appreciation"
  },
  {
    id: "18",
    text: "Accuracy builds credibility.",
    author: "Jim Rohn",
    category: "accuracy"
  },
  {
    id: "19",
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "wisdom"
  },
  {
    id: "20",
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
    category: "wisdom"
  },
  
  // Additional Love quotes
  {
    id: "21",
    text: "To love oneself is the beginning of a lifelong romance.",
    author: "Oscar Wilde",
    category: "love"
  },
  {
    id: "22",
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: "love"
  },
  {
    id: "23",
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo",
    category: "love"
  },
  {
    id: "24",
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: "love"
  },
  {
    id: "25",
    text: "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
    author: "Antoine de Saint-Exupéry",
    category: "love"
  },
  
  // Additional Business quotes
  {
    id: "26",
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    category: "business"
  },
  {
    id: "27",
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "business"
  },
  {
    id: "28",
    text: "Business opportunities are like buses, there's always another one coming.",
    author: "Richard Branson",
    category: "business"
  },
  {
    id: "29",
    text: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
    author: "Socrates",
    category: "business"
  },
  {
    id: "30",
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "business"
  },
  
  // Additional Confidence quotes
  {
    id: "31",
    text: "With confidence, you have won before you have started.",
    author: "Marcus Garvey",
    category: "confidence"
  },
  {
    id: "32",
    text: "Confidence comes not from always being right but from not fearing to be wrong.",
    author: "Peter T. McIntyre",
    category: "confidence"
  },
  {
    id: "33",
    text: "The most beautiful thing you can wear is confidence.",
    author: "Blake Lively",
    category: "confidence"
  },
  {
    id: "34",
    text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    author: "Helen Keller",
    category: "confidence"
  },
  {
    id: "35",
    text: "You've got to take the initiative and play your game. In a decisive set, confidence is the difference.",
    author: "Chris Evert",
    category: "confidence"
  },
  
  // Additional Action quotes
  {
    id: "36",
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
    category: "action"
  },
  {
    id: "37",
    text: "The path to success is to take massive, determined action.",
    author: "Tony Robbins",
    category: "action"
  },
  {
    id: "38",
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    category: "action"
  },
  {
    id: "39",
    text: "An ounce of action is worth a ton of theory.",
    author: "Ralph Waldo Emerson",
    category: "action"
  },
  {
    id: "40",
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
    category: "action"
  },
  
  // Additional Attitude quotes
  {
    id: "41",
    text: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar",
    category: "attitude"
  },
  {
    id: "42",
    text: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
    category: "attitude"
  },
  {
    id: "43",
    text: "Attitude is a little thing that makes a big difference.",
    author: "Winston Churchill",
    category: "attitude"
  },
  {
    id: "44",
    text: "You cannot control what happens to you, but you can control your attitude toward what happens to you.",
    author: "Brian Tracy",
    category: "attitude"
  },
  {
    id: "45",
    text: "Our attitude toward life determines life's attitude towards us.",
    author: "Earl Nightingale",
    category: "attitude"
  },
  
  // Additional Being Real quotes
  {
    id: "46",
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    category: "being-real"
  },
  {
    id: "47",
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung",
    category: "being-real"
  },
  {
    id: "48",
    text: "I would rather be hated for who I am than loved for who I am not.",
    author: "Kurt Cobain",
    category: "being-real"
  },
  {
    id: "49",
    text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
    author: "Brené Brown",
    category: "being-real"
  },
  {
    id: "50",
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "being-real"
  },
  
  // Additional Change quotes
  {
    id: "51",
    text: "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "Leo Tolstoy",
    category: "change"
  },
  {
    id: "52",
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "change"
  },
  {
    id: "53",
    text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.",
    author: "Barack Obama",
    category: "change"
  },
  {
    id: "54",
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou",
    category: "change"
  },
  {
    id: "55",
    text: "To improve is to change; to be perfect is to change often.",
    author: "Winston Churchill",
    category: "change"
  },
  
  // Additional Encouraging quotes
  {
    id: "56",
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "encouraging"
  },
  {
    id: "57",
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: "encouraging"
  },
  {
    id: "58",
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    category: "encouraging"
  },
  {
    id: "59",
    text: "The struggle you're in today is developing the strength you need tomorrow.",
    author: "Robert Tew",
    category: "encouraging"
  },
  {
    id: "60",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "encouraging"
  },
  
  // Additional Appreciation quotes
  {
    id: "61",
    text: "Gratitude turns what we have into enough.",
    author: "Anonymous",
    category: "appreciation"
  },
  {
    id: "62",
    text: "When I started counting my blessings, my whole life turned around.",
    author: "Willie Nelson",
    category: "appreciation"
  },
  {
    id: "63",
    text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
    author: "Voltaire",
    category: "appreciation"
  },
  {
    id: "64",
    text: "The roots of all goodness lie in the soil of appreciation for goodness.",
    author: "Dalai Lama",
    category: "appreciation"
  },
  {
    id: "65",
    text: "The deepest principle in human nature is the craving to be appreciated.",
    author: "William James",
    category: "appreciation"
  },
  
  // Additional Accuracy quotes
  {
    id: "66",
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
    category: "accuracy"
  },
  {
    id: "67",
    text: "Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passion, they cannot alter the state of facts and evidence.",
    author: "John Adams",
    category: "accuracy"
  },
  {
    id: "68",
    text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Stephen Hawking",
    category: "accuracy"
  },
  {
    id: "69",
    text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    author: "Richard Feynman",
    category: "accuracy"
  },
  {
    id: "70",
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
    category: "accuracy"
  },
  
  // Additional Success quotes
  {
    id: "71",
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    id: "72",
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "success"
  },
  {
    id: "73",
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
    category: "success"
  },
  {
    id: "74",
    text: "Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you.",
    author: "Zig Ziglar",
    category: "success"
  },
  {
    id: "75",
    text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
    author: "Conrad Hilton",
    category: "success"
  },
  
  // Additional Wisdom quotes
  {
    id: "76",
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom"
  },
  {
    id: "77",
    text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    author: "Confucius",
    category: "wisdom"
  },
  {
    id: "78",
    text: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    category: "wisdom"
  },
  {
    id: "79",
    text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    author: "Isaac Asimov",
    category: "wisdom"
  },
  {
    id: "80",
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: "wisdom"
  },
  
  // More Love quotes
  {
    id: "81",
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every day.",
    author: null,
    category: "love"
  },
  {
    id: "82",
    text: "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    author: "Paulo Coelho",
    category: "love"
  },
  
  // More Business quotes
  {
    id: "83",
    text: "The secret of business is to know something that nobody else knows.",
    author: "Aristotle Onassis",
    category: "business"
  },
  {
    id: "84",
    text: "A business that makes nothing but money is a poor business.",
    author: "Henry Ford",
    category: "business"
  },
  
  // More Confidence quotes
  {
    id: "85",
    text: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
    category: "confidence"
  },
  {
    id: "86",
    text: "One important key to success is self-confidence. An important key to self-confidence is preparation.",
    author: "Arthur Ashe",
    category: "confidence"
  },
  
  // Additional quotes for each category
  {
    id: "87",
    text: "The wise man doesn't give the right answers, he poses the right questions.",
    author: "Claude Levi-Strauss",
    category: "wisdom"
  },
  {
    id: "88",
    text: "The trouble with the world is that the stupid are cocksure and the intelligent are full of doubt.",
    author: "Bertrand Russell",
    category: "wisdom"
  },
  {
    id: "89",
    text: "If you want to achieve greatness, stop asking for permission.",
    author: null,
    category: "action"
  },
  {
    id: "90",
    text: "You never fail until you stop trying.",
    author: "Albert Einstein",
    category: "encouraging"
  },
  {
    id: "91",
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "attitude"
  },
  {
    id: "92",
    text: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson",
    category: "wisdom"
  },
  {
    id: "93",
    text: "You are what you believe yourself to be.",
    author: "Paulo Coelho",
    category: "being-real"
  },
  {
    id: "94",
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
    category: "change"
  },
  {
    id: "95",
    text: "A single rose can be my garden... a single friend, my world.",
    author: "Leo Buscaglia",
    category: "appreciation"
  },
  {
    id: "96",
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
    category: "success"
  },
  {
    id: "97",
    text: "Without precision, communication is no more than noise.",
    author: "Aaron Goldman",
    category: "accuracy"
  },
  {
    id: "98",
    text: "Behind every successful person lies a pack of haters.",
    author: null,
    category: "success"
  },
  {
    id: "99",
    text: "Every problem is a gift—without problems we would not grow.",
    author: "Anthony Robbins",
    category: "change"
  },
  {
    id: "100",
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "love"
  }
];

// Function to get quotes by category
export const getQuotesByCategory = (categoryId: string): Quote[] => {
  return quotes.filter(quote => quote.category === categoryId);
};

// Function to get a random quote
export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// Function to get a quote by ID
export const getQuoteById = (id: string): Quote | undefined => {
  return quotes.find(quote => quote.id === id);
};

// Function to get a category by ID
export const getCategoryById = (id: string): QuoteCategory | undefined => {
  return categories.find(category => category.id === id);
};
