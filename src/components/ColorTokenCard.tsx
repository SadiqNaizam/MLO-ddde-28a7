import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from 'lucide-react';

interface ColorTokenCardProps {
  tokenName: string;  // e.g., "--primary-light"
  tokenValue: string; // e.g., "#E91E63"
}

const ColorTokenCard: React.FC<ColorTokenCardProps> = ({ tokenName, tokenValue }) => {
  const { toast } = useToast();
  console.log(`ColorTokenCard loaded for token: ${tokenName}`);

  const handleCopyTokenName = async () => {
    try {
      await navigator.clipboard.writeText(tokenName);
      toast({
        title: "Copied to clipboard!",
        description: `Token "${tokenName}" copied.`,
      });
    } catch (err) {
      console.error("Failed to copy token name: ", err);
      toast({
        title: "Copy failed",
        description: "Could not copy token name to clipboard.",
        variant: "destructive",
      });
    }
  };

  // Utility to check if a string is a valid CSS color
  const isValidColor = (colorString: string): boolean => {
    if (typeof document === 'undefined') return false; // Avoid SSR errors
    const s = new Option().style;
    s.color = colorString;
    return s.color !== '';
  };

  return (
    <Card className="w-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-4 flex items-center justify-between space-x-3 sm:space-x-4">
        <div className="flex-grow min-w-0"> {/* Added min-w-0 for proper truncation within flex */}
          <p 
            className="text-xs sm:text-sm font-mono text-muted-foreground truncate" 
            title={tokenName}
          >
            {tokenName}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p 
              className="text-base sm:text-lg font-semibold truncate" 
              title={tokenValue}
            >
              {tokenValue}
            </p>
            {isValidColor(tokenValue) && (
              <div
                className="h-4 w-4 rounded border border-gray-300 dark:border-gray-700 flex-shrink-0"
                style={{ backgroundColor: tokenValue }}
                title={`Color preview: ${tokenValue}`}
              />
            )}
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleCopyTokenName} 
          aria-label={`Copy token name ${tokenName}`}
          className="flex-shrink-0"
        >
          <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ColorTokenCard;