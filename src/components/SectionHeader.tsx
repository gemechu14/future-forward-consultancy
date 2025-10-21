'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  icon?: ReactNode;
}

/**
 * SectionHeader Component
 * Reusable section header with consistent styling and animations
 */
export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  icon,
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 mb-12 ${centered ? 'text-center' : ''}`}>
      {/* Subtitle with Icon */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center space-x-2 ${centered ? 'mx-auto' : ''}`}
        >
          {icon && (
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <div className="text-white text-sm">
                {icon}
              </div>
            </div>
          )}
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        {title.split(' ').map((word, index) => {
          const middleIndex = Math.floor(title.split(' ').length / 2);
          return (
            <span key={index}>
              {index === middleIndex || index === middleIndex + 1 ? (
                <span className="gradient-text">{word} </span>
              ) : (
                <span>{word} </span>
              )}
            </span>
          );
        })}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '80px' : '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 bg-gradient-to-r from-primary to-secondary rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}


