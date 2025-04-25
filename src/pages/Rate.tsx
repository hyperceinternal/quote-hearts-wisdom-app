
import { useState } from "react";
import { Star } from "lucide-react";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Rate = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const handleRatingClick = (value: number) => {
    setRating(value);
  };
  
  const handleRatingHover = (value: number) => {
    setHoveredRating(value);
  };
  
  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }
    
    toast.success(`Thank you for rating us ${rating} stars!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="Rate Us" 
        showBackButton={true}
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Enjoying Life Lessons Quotes?</h2>
          <p className="text-gray-600 mb-8">
            Your feedback helps us improve! If you're enjoying our app, please consider rating us.
          </p>
          
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRatingClick(value)}
                onMouseEnter={() => handleRatingHover(value)}
                onMouseLeave={() => setHoveredRating(0)}
                className="px-2"
              >
                <Star
                  size={48}
                  className={`${
                    value <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
          
          <div className="mb-8">
            <p className="text-xl font-medium">
              {rating === 0
                ? "Tap to rate"
                : rating === 5
                ? "Excellent!"
                : rating === 4
                ? "Very Good!"
                : rating === 3
                ? "Good"
                : rating === 2
                ? "Fair"
                : "Poor"}
            </p>
          </div>
          
          <Button onClick={handleSubmit} className="w-full md:w-auto px-8">
            Submit Rating
          </Button>
          
          <p className="mt-8 text-gray-600">
            You can also rate us on the App Store or Google Play
          </p>
        </div>
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Rate;
