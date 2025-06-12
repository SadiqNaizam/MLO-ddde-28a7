import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from 'lucide-react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  role: string;
  lightVariantHex?: string;
  darkVariantHex?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  hex,
  role,
  lightVariantHex,
  darkVariantHex,
}) => {
  const { toast } = useToast();
  console.log(`ColorSwatch loaded for: ${name}`);

  const copyToClipboard = async (text: string, colorName: string) => {
    if (!navigator.clipboard) {
      toast({
        title: "Copy not supported",
        description: "Clipboard API not available in this browser.",
        variant: "destructive",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: `${colorName} HEX code (${text}) copied.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy text to clipboard.",
        variant: "destructive",
      });
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card className="w-full group transition-all duration-300 ease-in-out hover:shadow-xl border-gray-200 dark:border-gray-700">
      <CardContent className="p-4 space-y-3">
        <div
          className="h-36 sm:h-40 md:h-48 rounded-lg border border-gray-300 dark:border-gray-600 shadow-inner"
          style={{ backgroundColor: hex }}
          title={`Color: ${name} - ${hex}`}
        />

        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
          
          <div
            className="flex items-center justify-center sm:justify-start text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            onClick={() => copyToClipboard(hex, name)}
            title={`Click to copy HEX: ${hex}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && copyToClipboard(hex, name)}
          >
            <span className="font-mono">{hex.toUpperCase()}</span>
            <Copy className="ml-2 h-4 w-4" />
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-500">
            <span className="font-medium">Role:</span> {role}
          </p>
        </div>

        {(lightVariantHex || darkVariantHex) && (
          <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 text-center sm:text-left">VARIANTS</h4>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              {lightVariantHex && (
                <div className="flex-1">
                  <div
                    className="h-12 rounded border border-gray-300 dark:border-gray-600 shadow-sm"
                    style={{ backgroundColor: lightVariantHex }}
                    title={`Light Variant: ${lightVariantHex}`}
                  />
                  <div
                    className="text-xs mt-1 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center sm:justify-start"
                    onClick={() => copyToClipboard(lightVariantHex, `${name} (Light)`)}
                    title={`Click to copy HEX: ${lightVariantHex}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && copyToClipboard(lightVariantHex, `${name} (Light)`)}
                  >
                    <span className="font-mono">{lightVariantHex.toUpperCase()}</span>
                    <Copy className="ml-1 h-3 w-3" />
                  </div>
                </div>
              )}
              {darkVariantHex && (
                <div className="flex-1">
                  <div
                    className="h-12 rounded border border-gray-300 dark:border-gray-600 shadow-sm"
                    style={{ backgroundColor: darkVariantHex }}
                    title={`Dark Variant: ${darkVariantHex}`}
                  />
                  <div
                    className="text-xs mt-1 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center sm:justify-start"
                    onClick={() => copyToClipboard(darkVariantHex, `${name} (Dark)`)}
                    title={`Click to copy HEX: ${darkVariantHex}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && copyToClipboard(darkVariantHex, `${name} (Dark)`)}
                  >
                    <span className="font-mono">{darkVariantHex.toUpperCase()}</span>
                    <Copy className="ml-1 h-3 w-3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ColorSwatch;