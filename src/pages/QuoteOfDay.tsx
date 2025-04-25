
import { useState, useEffect } from "react";
import { getRandomQuote } from "../utils/quoteData";
import QuoteCard from "../components/QuoteCard";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const QuoteOfDay = () => {
  const [dailyQuote, setDailyQuote] = useState(getRandomQuote());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const refreshQuote = () => {
    setDailyQuote(getRandomQuote());
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="Quote of the Day" 
        showBackButton={true}
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        <QuoteCard quote={dailyQuote} />
        
        <div className="flex justify-center mt-4">
          <Button 
            onClick={refreshQuote}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw size={16} /> 
            <span>New Quote</span>
          </Button>
        </div>
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default QuoteOfDay;
