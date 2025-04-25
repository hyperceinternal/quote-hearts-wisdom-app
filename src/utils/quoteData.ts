
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
