
import { Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black rounded-lg p-3">
        <div className={`font-bold text-white ${sizes[size]} flex flex-col items-center`}>
          <div className="flex items-center">
            Life 
            <Heart className="mx-1 text-red-500 fill-red-500" size={size === "lg" ? 36 : size === "md" ? 24 : 16} />
          </div>
          <div>Lessons</div>
          <div>Quotes</div>
        </div>
      </div>
      {showText && <div className="mt-4 text-xl font-semibold">Life Quotes</div>}
    </div>
  );
};

export default Logo;
