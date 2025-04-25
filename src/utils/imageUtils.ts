
import html2canvas from "html2canvas";
import { toast } from "sonner";

// Function to save a quote as an image
export const saveQuoteAsImage = async (quoteElementId: string): Promise<void> => {
  const element = document.getElementById(quoteElementId);
  if (!element) {
    toast.error("Could not find quote element to save");
    return;
  }

  try {
    // Use html2canvas to convert the element to a canvas
    const canvas = await html2canvas(element, {
      backgroundColor: "#000000",
      scale: 2, // Higher resolution
    });

    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Create a download link
    const link = document.createElement("a");
    link.download = `life-lesson-quote-${Date.now()}.png`;
    link.href = dataUrl;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Quote saved as image");
  } catch (error) {
    console.error("Error saving quote as image:", error);
    toast.error("Failed to save image. Please try again.");
  }
};

// Function to copy quote text to clipboard
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.success("Quote copied to clipboard");
    })
    .catch(() => {
      toast.error("Failed to copy quote");
    });
};
