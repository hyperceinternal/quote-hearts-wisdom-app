
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Star, ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showFavoritesButton?: boolean;
  onMenuClick?: () => void;
}

const Header = ({ 
  title, 
  showBackButton = false,
  showFavoritesButton = true,
  onMenuClick 
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="px-4 py-3 flex items-center justify-between border-b">
      <div className="flex items-center">
        {showBackButton ? (
          <button 
            onClick={() => navigate(-1)} 
            className="mr-3"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
        ) : (
          <button 
            onClick={onMenuClick} 
            className="mr-3"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        )}
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      
      {showFavoritesButton && (
        <Link to="/favorites" aria-label="View favorites">
          <Star size={24} className="text-amber-400" />
        </Link>
      )}
    </header>
  );
};

export default Header;
