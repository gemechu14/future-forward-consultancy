'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  solutions: string[];
  delay?: number;
  onClick?: () => void;
}

/**
 * IndustryCard Component
 * Card component for displaying industry-specific solutions
 */
export default function IndustryCard({
  name,
  description,
  icon,
  solutions,
  delay = 0,
  onClick,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-md"
        >
          <div className="text-white">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Solutions Count */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {solutions.length} Solutions
          </span>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center space-x-1 text-primary font-medium"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors"
        whileHover={{ scale: 1.02 }}
      />
    </motion.div>
  );
}


