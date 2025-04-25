
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Heart, Quote, Mail, FileText, Flag, Star } from "lucide-react";
import Logo from "./Logo";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationDrawer = ({ isOpen, onClose }: NavigationDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { icon: <Heart size={24} />, label: "Favorites", path: "/favorites" },
    { icon: <Quote size={24} />, label: "Quote of the Day", path: "/quote-of-day" },
    { icon: <Mail size={24} />, label: "Contact Us", path: "/contact" },
    { icon: <FileText size={24} />, label: "About the App", path: "/about" },
    { icon: <Flag size={24} />, label: "Privacy Policy", path: "/privacy" },
    { icon: <Star size={24} />, label: "Rate Us", path: "/rate" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        ref={drawerRef}
        className={`w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-purple-700 p-6 flex flex-col items-center">
          <Logo size="sm" />
        </div>

        <nav className="p-4">
          <ul className="space-y-6 mt-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center gap-4 px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={onClose}
                >
                  {item.icon}
                  <span className="text-lg">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationDrawer;
