
import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen";
import Home from "./Home";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash screen has been shown before
    const splashShown = localStorage.getItem("splashShown");
    
    if (splashShown) {
      // If splash has been shown before, skip it
      setShowSplash(false);
    } else {
      // First time app load - show splash screen
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    // Mark splash as shown in localStorage
    localStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default Index;
