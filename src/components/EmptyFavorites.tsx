
import { Heart } from "lucide-react";

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <Heart size={64} className="text-red-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-black border-2 border-orange-500 rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-white text-lg font-bold">0</span>
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold">No Favorites</h3>
      <p className="mt-2 text-gray-600 text-center">
        No Favorite Quotes Found!<br />
        Please Add Some Quotes.
      </p>
    </div>
  );
};

export default EmptyFavorites;
