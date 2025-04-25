
import { useState } from "react";
import { categories } from "../utils/quoteData";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
