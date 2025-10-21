'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features?: string[];
  delay?: number;
  onClick?: () => void;
}

/**
 * ServiceCard Component
 * Interactive card with hover animations for displaying services
 */
export default function ServiceCard({
  title,
  description,
  icon,
  features = [],
  delay = 0,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className={`card group ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
      >
        <div className="text-white">
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <span className="text-secondary mt-0.5">✓</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
    </motion.div>
  );
}


