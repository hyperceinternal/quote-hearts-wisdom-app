
import { useState, useEffect } from "react";
import { categories } from "../utils/quoteData";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import { 
  initializeAdMob, 
  showBannerAd, 
  prepareInterstitialAd,
  showInterstitialAd
} from "../services/adService";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [adCounter, setAdCounter] = useState(0);
  
  useEffect(() => {
    // Initialize AdMob when the component mounts
    const setupAds = async () => {
      await initializeAdMob();
      await showBannerAd();
      await prepareInterstitialAd();
    };
    
    setupAds();
    
    return () => {
      // Clean up logic if needed
    };
  }, []);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    
    // Increment counter and show interstitial ad every 3 drawer toggles
    setAdCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      if (newCounter % 3 === 0) {
        showInterstitialAd();
      }
      return newCounter;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="Life Quotes"
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Home;
