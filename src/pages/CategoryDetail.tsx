
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuotesByCategory, getCategoryById, QuoteCategory } from "../utils/quoteData";
import QuoteCard from "../components/QuoteCard";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<QuoteCategory | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    if (categoryId) {
      const foundCategory = getCategoryById(categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
      }
    }
  }, [categoryId]);

  const quotes = categoryId ? getQuotesByCategory(categoryId) : [];
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title={category?.name || "Quotes"} 
        showBackButton={true}
        onMenuClick={toggleDrawer}
      />

      <main className="container mx-auto px-4 py-6">
        {quotes.length > 0 ? (
          quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No quotes found in this category.</p>
          </div>
        )}
      </main>

      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default CategoryDetail;
