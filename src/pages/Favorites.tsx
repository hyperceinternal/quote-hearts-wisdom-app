
import { useState, useEffect } from "react";
import { quotes } from "../utils/quoteData";
import { getFavoriteQuotes } from "../utils/localStorage";
import QuoteCard from "../components/QuoteCard";
import EmptyFavorites from "../components/EmptyFavorites";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

const Favorites = () => {
  const [favoriteQuotes, setFavoriteQuotes] = useState(getFavoriteQuotes(quotes));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Update favorites when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setFavoriteQuotes(getFavoriteQuotes(quotes));
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="Favorites" 
        showBackButton={true}
        showFavoritesButton={false}
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        {favoriteQuotes.length > 0 ? (
          favoriteQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))
        ) : (
          <EmptyFavorites />
        )}
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Favorites;
