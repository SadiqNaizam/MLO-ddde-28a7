import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PrincipleCardProps {
  title: string;
  description: string;
  animationDelay?: number;
  className?: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  title,
  description,
  animationDelay = 0,
  className = '',
}) => {
  console.log('PrincipleCard loaded for:', title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
      className={`h-full ${className}`}
    >
      <Card className="h-full rounded-xl shadow-lg bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 overflow-hidden flex flex-col">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PrincipleCard;