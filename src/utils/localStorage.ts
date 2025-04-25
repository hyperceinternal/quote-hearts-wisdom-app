
import { Quote } from "./quoteData";

const FAVORITES_KEY = "life-lessons-quotes-favorites";

// Get all favorite quotes
export const getFavorites = (): string[] => {
  const favoritesString = localStorage.getItem(FAVORITES_KEY);
  return favoritesString ? JSON.parse(favoritesString) : [];
};

// Check if a quote is favorited
export const isFavorite = (quoteId: string): boolean => {
  const favorites = getFavorites();
  return favorites.includes(quoteId);
};

// Toggle favorite status for a quote
export const toggleFavorite = (quoteId: string): boolean => {
  const favorites = getFavorites();
  const isFavorited = favorites.includes(quoteId);
  
  let newFavorites;
  if (isFavorited) {
    // Remove from favorites
    newFavorites = favorites.filter(id => id !== quoteId);
  } else {
    // Add to favorites
    newFavorites = [...favorites, quoteId];
  }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return !isFavorited;
};

// Get all favorite quotes with full data
export const getFavoriteQuotes = (allQuotes: Quote[]): Quote[] => {
  const favoriteIds = getFavorites();
  return allQuotes.filter(quote => favoriteIds.includes(quote.id));
};
