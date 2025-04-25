
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "../components/SplashScreen";
import Home from "./Home";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Home />
      )}
    </Router>
  );
};

export default Index;
