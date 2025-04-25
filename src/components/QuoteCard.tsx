
import { useEffect, useState } from "react";
import { Heart, Download, Copy } from "lucide-react";
import { Quote } from "../utils/quoteData";
import { isFavorite, toggleFavorite } from "../utils/localStorage";
import { saveQuoteAsImage, copyToClipboard } from "../utils/imageUtils";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    setLiked(isFavorite(quote.id));
  }, [quote.id]);
  
  const handleLike = () => {
    const isNowLiked = toggleFavorite(quote.id);
    setLiked(isNowLiked);
  };
  
  const handleSave = async () => {
    await saveQuoteAsImage(`quote-${quote.id}`);
  };
  
  const handleCopy = () => {
    const textToCopy = quote.author 
      ? `"${quote.text}" - ${quote.author}`
      : `"${quote.text}"`;
    
    copyToClipboard(textToCopy);
  };

  return (
    <div className="mb-6">
      <div className="bg-black text-white p-6 rounded-t-xl" id={`quote-${quote.id}`}>
        <div className="flex">
          <span className="text-4xl leading-none">"</span>
          <div className="flex-1 text-xl text-center">
            {quote.text}
          </div>
          <span className="text-4xl leading-none self-end">"</span>
        </div>
        {quote.author && (
          <p className="text-right mt-4 italic text-gray-300">- {quote.author}</p>
        )}
      </div>
      
      <div className="bg-white p-4 rounded-b-xl border border-t-0 flex justify-around">
        <button 
          className="flex items-center gap-2" 
          onClick={handleLike}
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart 
            className={`${liked ? "fill-red-500 text-red-500 animate-pulse-heart" : ""}`}
            size={20} 
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>
        
        <button 
          className="flex items-center gap-2" 
          onClick={handleSave}
          aria-label="Save as image"
        >
          <Download size={20} />
          <span>Save</span>
        </button>
        
        <button 
          className="flex items-center gap-2" 
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          <Copy size={20} />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
