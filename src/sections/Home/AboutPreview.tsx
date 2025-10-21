'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

/**
 * AboutPreview Component
 * Preview of company mission, vision, and values on the home page
 */
export default function AboutPreview() {
  return (
    <section id="about" className="section-container">
      <SectionHeader
        subtitle="Who We Are"
        title="About Future Forward"
        description="Discover our mission, vision, and the values that drive our commitment to excellence"
        icon={<Heart className="w-4 h-4" />}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
             
          
            </div>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                At Future Forward Research and Business Consulting, we specialize in driving strategic growth and innovation across industries. With expertise in business strategy, financial analysis, and sustainability solutions, we empower our clients to navigate complex challenges and achieve sustainable success.
              </p>
              <p>
                Our commitment to excellence and forward-thinking approaches ensures that we deliver tailored solutions that meet the evolving needs of businesses in today's dynamic landscape.
              </p>
            </div>

            {/* Key Points */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 dark:bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">250+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
              </div>
              <div className="text-center p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div> */}
          </motion.div>

          {/* Visual Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl p-8 shadow-2xl">
              {/* Company Logo/Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <span className="text-white font-bold text-4xl">FFdfdfdfdf</span>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center"
              >
                {/* <Target className="w-8 h-8 text-secondary" /> */}
              </motion.div>

              {/* <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-primary" />
              </motion.div> */}

              {/* <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-6 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center"
              >
                <Eye className="w-5 h-5 text-secondary" />
              </motion.div> */}

              {/* Company Name */}
              <div className="text-center">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Future Forward
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Research & Business Consulting
                </p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Link
          href="/about"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>Learn More About Us</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
