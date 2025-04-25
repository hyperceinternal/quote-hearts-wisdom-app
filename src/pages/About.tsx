
import { useState } from "react";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import Logo from "../components/Logo";

const About = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="About the App" 
        showBackButton={true}
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center mb-8">
          <Logo size="md" showText={false} />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-center mb-6">Life Lessons Quotes</h2>
          
          <p className="mb-4">
            Life Lessons Quotes is a collection of inspiring and thought-provoking quotes that can help guide your journey through life's challenges and triumphs.
          </p>
          
          <p className="mb-4">
            Our carefully curated selection spans multiple categories including love, business, confidence, and more - offering wisdom for every aspect of your life.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Features</h3>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">Browse quotes by category</li>
            <li className="mb-2">Save your favorite quotes</li>
            <li className="mb-2">Share quotes with friends</li>
            <li className="mb-2">Daily inspiration with Quote of the Day</li>
            <li className="mb-2">Save quotes as images</li>
          </ul>
          
          <p className="mt-6 text-center text-gray-600">
            Version 1.0.0
          </p>
        </div>
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default About;
