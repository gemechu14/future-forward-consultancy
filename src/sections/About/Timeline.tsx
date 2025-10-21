'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { MILESTONES } from '@/utils/constants';
import SectionHeader from '@/components/SectionHeader';

/**
 * Timeline Component
 * Displays company milestones in a vertical timeline
 */
export default function Timeline() {
  return (
    <section className="section-container">
      <SectionHeader
        subtitle="Our Journey"
        title="Milestones & Achievements"
        description="A timeline of our growth, innovation, and commitment to excellence"
        icon={<Calendar className="w-4 h-4" />}
      />

      <div className="max-w-4xl mx-auto">
        {MILESTONES.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            {/* Timeline Line */}
            {index !== MILESTONES.length - 1 && (
              <div className="absolute left-[15px] top-[40px] bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            )}

            {/* Timeline Dot */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>

            {/* Content */}
            <motion.div
              whileHover={{ x: 5 }}
              className="card ml-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {milestone.title}
                </h3>
                <span className="text-primary font-bold text-lg px-3 py-1 bg-primary/10 rounded-full">
                  {milestone.year}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {milestone.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


