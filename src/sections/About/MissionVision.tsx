'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

/**
 * MissionVision Component
 * Displays company mission, vision, and values
 */
export default function MissionVision() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card text-center"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Target className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            To empower businesses with strategic insights and innovative solutions that drive sustainable growth and create lasting value in an ever-evolving marketplace.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card text-center"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Eye className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            To be the world's most trusted business consulting partner, recognized for excellence, innovation, and unwavering commitment to client success across all industries.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card text-center"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Integrity, excellence, innovation, collaboration, and client-centricity guide everything we do. We believe in building lasting partnerships based on trust and mutual success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


