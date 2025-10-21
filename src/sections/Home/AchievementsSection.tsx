'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ACHIEVEMENTS } from '@/utils/constants';
import { formatNumber } from '@/utils/helpers';
import SectionHeader from '@/components/SectionHeader';
import { TrendingUp } from 'lucide-react';

/**
 * AchievementsSection Component
 * Displays animated counters and data visualization
 */
export default function AchievementsSection() {
  const [counters, setCounters] = useState(ACHIEVEMENTS.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = ACHIEVEMENTS.map((achievement, index) => {
      let step = 0;
      return setInterval(() => {
        step++;
        const progress = step / steps;
        const value = Math.floor(achievement.value * progress);
        
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = value;
          return newCounters;
        });

        if (step >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  // Data for chart
  const chartData = ACHIEVEMENTS.map((achievement, index) => ({
    name: achievement.label,
    value: counters[index],
  }));

  return (
    <section ref={sectionRef} className="section-container bg-gray-50 dark:bg-gray-800/50">
      <SectionHeader
        subtitle="Our Impact"
        title="Achievements That Speak"
        description="Numbers that reflect our commitment to excellence and client success"
        icon={<TrendingUp className="w-4 h-4" />}
      />

      {/* Counter Cards - Only show Years Experience and Success Rate */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
        {ACHIEVEMENTS.filter((achievement, index) => index >= 2).map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card text-center"
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {formatNumber(counters[index + 2])}
              {achievement.suffix}
            </motion.div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              {achievement.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

