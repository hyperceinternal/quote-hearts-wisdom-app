
import { Link } from "react-router-dom";
import { QuoteCategory } from "../utils/quoteData";

interface CategoryCardProps {
  category: QuoteCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getBgColor = () => {
    switch (category.color) {
      case "category-blue": return "bg-category-blue";
      case "category-cyan": return "bg-category-cyan";
      case "category-purple": return "bg-category-purple";
      case "category-pink": return "bg-category-pink";
      case "category-mint": return "bg-category-mint";
      case "category-teal": return "bg-category-teal";
      case "category-coral": return "bg-category-coral";
      case "category-orange": return "bg-category-orange";
      case "category-indigo": return "bg-category-indigo";
      default: return "bg-blue-500";
    }
  };

  return (
    <Link to={`/category/${category.id}`}>
      <div className={`${getBgColor()} text-white font-medium rounded-xl px-4 py-6 mb-4 text-center shadow-md transition-transform transform hover:scale-102 w-full`}>
        <span className="text-xl">{category.name}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
