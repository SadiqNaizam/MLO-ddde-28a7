import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionPresenter from '@/components/SectionPresenter';
import PrincipleCard from '@/components/PrincipleCard';
import ColorSwatch from '@/components/ColorSwatch';
import ColorTokenCard from '@/components/ColorTokenCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'; // TooltipProvider is in App.tsx
import { Info, Palette, Accessibility, Code, HeartHandshake, Users, Layers } from 'lucide-react'; // Icons for section enrichment

// Placeholder data for components
const principles = [
  { title: "Emotional Clarity", description: "Colors are chosen to evoke specific emotions, ensuring intuitive user experiences and clear communication. Eldarnwand aims for designs that feel intentional and resonate deeply.", icon: <HeartHandshake className="h-6 w-6 mb-2 text-pink-500" />, animationDelay: 0 },
  { title: "Brand Cohesion", description: "A unified color palette that reinforces brand identity across all touchpoints, promoting recognition and trust. Consistency is key to a strong brand presence.", icon: <Users className="h-6 w-6 mb-2 text-purple-500" />, animationDelay: 0.15 },
  { title: "Scalable & Systematic", description: "Designed for growth, our color system provides a flexible framework for diverse applications and future expansions. Tokens and clear guidelines ensure maintainability.", icon: <Layers className="h-6 w-6 mb-2 text-indigo-500" />, animationDelay: 0.3 },
  { title: "Accessibility First", description: "Committed to inclusivity, ensuring colors meet high contrast ratios and support users with visual impairments. We design for everyone.", icon: <Accessibility className="h-6 w-6 mb-2 text-green-500" />, animationDelay: 0.45 },
];

const coreColors = [
  { name: "Primary Pink", hex: "#E91E63", role: "Primary Actions, Highlights, Branding", lightVariantHex: "#FCE4EC", darkVariantHex: "#C2185B" },
  { name: "Secondary Purple", hex: "#9C27B0", role: "Secondary Actions, Accents, Innovation", lightVariantHex: "#F3E5F5", darkVariantHex: "#7B1FA2" },
  { name: "Tertiary Indigo", hex: "#3F51B5", role: "Tertiary Information, Borders, Technology", lightVariantHex: "#E8EAF6", darkVariantHex: "#303F9F" },
  { name: "Neutral Gray", hex: "#757575", role: "Body Text, Subtle UI, Backgrounds", lightVariantHex: "#F5F5F5", darkVariantHex: "#424242" },
];

const feedbackColors = [
  { name: "Success Green", hex: "#4CAF50", role: "Success States, Confirmation", lightVariantHex: "#E8F5E9", darkVariantHex: "#388E3C" },
  { name: "Error Red", hex: "#F44336", role: "Error States, Destructive Actions", lightVariantHex: "#FFEBEE", darkVariantHex: "#D32F2F" },
  { name: "Warning Amber", hex: "#FFC107", role: "Warning States, Cautionary Info", lightVariantHex: "#FFF8E1", darkVariantHex: "#FFA000" },
  { name: "Info Blue", hex: "#2196F3", role: "Informational Messages, Neutral Alerts", lightVariantHex: "#E3F2FD", darkVariantHex: "#1976D2" },
];

const colorTokens = [
  { tokenName: "--eds-primary-base", tokenValue: "#E91E63" },
  { tokenName: "--eds-primary-light", tokenValue: "#FCE4EC" },
  { tokenName: "--eds-primary-dark", tokenValue: "#C2185B" },
  { tokenName: "--eds-secondary-base", tokenValue: "#9C27B0" },
  { tokenName: "--eds-secondary-light", tokenValue: "#F3E5F5" },
  { tokenName: "--eds-secondary-dark", tokenValue: "#7B1FA2" },
  { tokenName: "--eds-tertiary-base", tokenValue: "#3F51B5" },
  { tokenName: "--eds-tertiary-light", tokenValue: "#E8EAF6" },
  { tokenName: "--eds-tertiary-dark", tokenValue: "#303F9F" },
  { tokenName: "--eds-background-default", tokenValue: "var(--eds-neutral-light, #FFFFFF)" }, // Example showing token composition
  { tokenName: "--eds-background-paper", tokenValue: "var(--eds-neutral-extralight, #FAFAFA)" },
  { tokenName: "--eds-text-primary", tokenValue: "var(--eds-neutral-dark, #212121)" },
  { tokenName: "--eds-text-secondary", tokenValue: "var(--eds-neutral-gray, #757575)" },
  { tokenName: "--eds-border-default", tokenValue: "var(--eds-neutral-medium, #E0E0E0)" },
  { tokenName: "--eds-feedback-success", tokenValue: "#4CAF50" },
  { tokenName: "--eds-feedback-error", tokenValue: "#F44336" },
  { tokenName: "--eds-feedback-warning", tokenValue: "#FFC107" },
  { tokenName: "--eds-feedback-info", tokenValue: "#2196F3" },
];


const LandingPage: React.FC = () => {
  console.log('LandingPage loaded');

  return (
    <div className="bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-['Inter'] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SectionPresenter
          title="Foundational Principles"
          id="principles"
          subtitle="The core beliefs that guide every aspect of the Eldarnwand Design System, ensuring consistency, usability, and beauty."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={index}
                title={principle.title}
                description={principle.description}
                animationDelay={principle.animationDelay}
                className="flex flex-col items-center text-center" // Added for icon centering
              >
                {/* Optional: Pass icon as children if PrincipleCard supports it, or adjust PrincipleCard */}
                 {/* For now, assuming PrincipleCard doesn't directly take icon prop, it's part of description or styling within PrincipleCard.
                 The provided PrincipleCard does not have an icon prop. Icon is added to the placeholder data for conceptual alignment.
                 To display icon, PrincipleCard would need modification or icon would be part of description text.
                 Let's assume the text description in PrincipleCard is sufficient for now.
                 If PrincipleCard were to be modified, it could look like:
                 <CardHeader>
                    {icon && <div className="mx-auto">{icon}</div>}
                    <CardTitle>...</CardTitle>
                 </CardHeader>
                 For now, I will not pass the icon directly.
                 */}
              </PrincipleCard>
            ))}
          </div>
        </SectionPresenter>

        <SectionPresenter
          title="Brand Color Strategy"
          id="strategy"
          subtitle="Our approach to color application, designed to create visual hierarchy and reinforce our brand identity effectively."
          className="bg-slate-100 dark:bg-slate-800/50"
        >
          <Card className="bg-white/60 dark:bg-slate-800/80 backdrop-blur-lg border border-white/30 dark:border-slate-700/50 p-6 sm:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
            <CardHeader className="text-center sm:text-left">
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-center sm:justify-start">
                <Palette className="h-7 w-7 mr-3 text-pink-500" /> The 60-30-10 Rule
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 space-y-4 text-base leading-relaxed">
              <p>The 60-30-10 rule is a classic design principle that helps create a balanced and visually appealing color scheme. It guides the proportional use of colors to establish harmony and hierarchy.</p>
              <div className="space-y-3 mt-6">
                <p><strong className="font-semibold text-pink-600 dark:text-pink-400">60% Primary Color:</strong> This is your dominant hue, setting the overall tone and theme of the design. It typically covers the largest areas, like backgrounds or main interface elements.</p>
                <p><strong className="font-semibold text-purple-600 dark:text-purple-400">30% Secondary Color:</strong> This color supports the primary, creating contrast and visual interest. It's used for secondary elements, distinguishing different sections or functionalities.</p>
                <p><strong className="font-semibold text-indigo-600 dark:text-indigo-400">10% Accent Color:</strong> Used sparingly for highlights, calls to action, and small interface details that need to stand out. This color often provides a pop of vibrancy.</p>
              </div>
              <p className="mt-4 italic">By adhering to this rule, Eldarnwand ensures that its visual language is both engaging and easy to navigate.</p>
            </CardContent>
          </Card>
        </SectionPresenter>

        <SectionPresenter
          title="Color Psychology"
          id="psychology"
          subtitle="Understanding the emotional and cultural impact of our core brand colors."
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Primary Pink", detail: "Evokes warmth, trust, and approachability. Chosen for its inviting and reliable character, fostering positive user engagement.", colorClass:"text-pink-600 dark:text-pink-400"},
              { name: "Secondary Purple", detail: "Represents innovation, creativity, and sophistication. This color signals forward-thinking and quality in our digital experiences.", colorClass: "text-purple-600 dark:text-purple-400"},
              { name: "Tertiary Indigo", detail: "Signifies precision, technology, and depth. Indigo conveys intelligence and the robust nature of our system.", colorClass: "text-indigo-600 dark:text-indigo-400"},
            ].map(color => (
              <Card key={color.name} className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold ${color.colorClass}`}>{color.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                  <p>{color.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionPresenter>

        <SectionPresenter
          title="Accessibility Commitment"
          id="accessibility"
          subtitle="Ensuring Eldarnwand is usable and enjoyable for everyone, regardless of ability."
          className="bg-slate-100 dark:bg-slate-800/50"
        >
          <Card className="bg-white/60 dark:bg-slate-800/80 backdrop-blur-lg border border-white/30 dark:border-slate-700/50 p-6 sm:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
            <CardHeader className="text-center sm:text-left">
               <CardTitle className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-center sm:justify-start">
                <Accessibility className="h-7 w-7 mr-3 text-green-500" /> Designing for All
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 space-y-4 text-base leading-relaxed">
              <p>We are dedicated to making the Eldarnwand Design System accessible to the widest possible audience. Our commitment is reflected in adherence to established guidelines and best practices:</p>
              <ul className="list-disc list-inside space-y-3 mt-6 marker:text-green-500">
                <li><strong>WCAG 2.1 AA Compliance:</strong> We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA success criteria.</li>
                <li><strong>High Contrast Ratios:</strong> All color combinations for text and essential UI elements are carefully chosen to ensure sufficient contrast, promoting legibility.</li>
                <li><strong>Color Blindness Considerations:</strong> Our palette is tested to be distinguishable for users with common forms of color vision deficiency. Information is never conveyed by color alone.</li>
                <li><strong>Keyboard Navigation & Focus States:</strong> All interactive elements are fully operable via keyboard, with clear and visible focus indicators.</li>
                <li><strong>Semantic HTML:</strong> We use meaningful HTML structure to ensure compatibility with assistive technologies.</li>
              </ul>
              <p className="mt-4 italic">Accessibility is an ongoing effort, and we continuously seek to improve the inclusivity of our design system.</p>
            </CardContent>
          </Card>
        </SectionPresenter>

        <SectionPresenter
          title="Core Color System"
          id="core-colors"
          subtitle={
            <span className="flex items-center justify-center">
              Explore our main brand and utility colors. Click HEX/variants to copy.
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="inline-block ml-2 h-4 w-4 text-gray-500 dark:text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Light/dark variants are provided for versatility across different UI themes and states.</p>
                </TooltipContent>
              </Tooltip>
            </span>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreColors.map((color, index) => (
              <ColorSwatch
                key={index}
                name={color.name}
                hex={color.hex}
                role={color.role}
                lightVariantHex={color.lightVariantHex}
                darkVariantHex={color.darkVariantHex}
              />
            ))}
          </div>
        </SectionPresenter>

        <SectionPresenter
          title="Feedback Colors"
          id="feedback-colors"
          subtitle="Dedicated colors to communicate crucial UI states like success, error, warning, and general information."
          className="bg-slate-100 dark:bg-slate-800/50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {feedbackColors.map((color, index) => (
              <ColorSwatch
                key={index}
                name={color.name}
                hex={color.hex}
                role={color.role}
                lightVariantHex={color.lightVariantHex}
                darkVariantHex={color.darkVariantHex}
              />
            ))}
          </div>
        </SectionPresenter>

        <SectionPresenter
          title="Color Tokens"
          id="color-tokens"
          subtitle={
             <span className="flex items-center justify-center">
              Design tokens for systematic and consistent color application. Click token names to copy.
              <Tooltip>
                <TooltipTrigger asChild>
                  <Code className="inline-block ml-2 h-4 w-4 text-gray-500 dark:text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tokens abstract color values, making themes and updates easier to manage.</p>
                </TooltipContent>
              </Tooltip>
            </span>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {colorTokens.map((token, index) => (
              <ColorTokenCard
                key={index}
                tokenName={token.tokenName}
                tokenValue={token.tokenValue}
              />
            ))}
          </div>
        </SectionPresenter>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;