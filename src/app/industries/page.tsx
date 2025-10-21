'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Heart, Building2, ShoppingCart, Factory, Zap, X, CheckCircle, ArrowLeft } from 'lucide-react';
import { useGetIndustriesQuery } from '@/redux/servicesApi';
import IndustryCard from '@/components/IndustryCard';
import SectionHeader from '@/components/SectionHeader';

/**
 * Industries Page
 * Displays all industries served with expandable modals and RTK Query
 */
export default function IndustriesPage() {
  const { data: industries, isLoading, error } = useGetIndustriesQuery();
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      laptop: <Laptop className="w-7 h-7" />,
      heart: <Heart className="w-7 h-7" />,
      bank: <Building2 className="w-7 h-7" />,
      shopping: <ShoppingCart className="w-7 h-7" />,
      factory: <Factory className="w-7 h-7" />,
      energy: <Zap className="w-7 h-7" />,
    };
    return icons[iconName] || <Building2 className="w-7 h-7" />;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/5 via-white to-primary/5 dark:from-secondary/10 dark:via-gray-900 dark:to-primary/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Back to Home Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Industries <span className="gradient-text">We Serve</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Deep industry expertise across diverse sectors, delivering tailored solutions that drive results
          </motion.p>
        </div>
      </section>

      {/* Back to Home Button */}
      

      {/* Industries Grid */}
      <section className="section-container">
        <SectionHeader
          subtitle="Our Expertise"
          title="Sector-Specific Solutions"
          description="Leveraging deep industry knowledge to solve your unique challenges"
          icon={<Building2 className="w-4 h-4" />}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="spinner" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">Failed to load industries. Please try again later.</p>
          </div>
        )}

        {/* Industries Grid */}
        {industries && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                name={industry.name}
                description={industry.description}
                icon={getIcon(industry.icon)}
                solutions={industry.solutions}
                delay={index * 0.1}
                onClick={() => setSelectedIndustry(industry)}
              />
            ))}
          </div>
        )}
      </section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>← Back to Home</span>
          </button>
        </motion.div>
      </div>
      {/* Industry Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="relative max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        {getIcon(selectedIndustry.icon)}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-1">{selectedIndustry.name}</h2>
                        <p className="text-white/90">{selectedIndustry.solutions.length} Solutions Available</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedIndustry(null)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Industry Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedIndustry.description}
                    </p>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Our Solutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedIndustry.solutions.map((solution: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Case Studies */}
                  {selectedIndustry.caseStudies && selectedIndustry.caseStudies.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Success Stories
                      </h3>
                      <div className="space-y-3">
                        {selectedIndustry.caseStudies.map((caseStudy: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-lg border border-primary/10"
                          >
                            <p className="text-gray-700 dark:text-gray-300">✨ {caseStudy}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <button
                      onClick={() => {
                        setSelectedIndustry(null);
                        window.location.href = '/contact';
                      }}
                      className="btn-primary w-full"
                    >
                      Discuss Your Project
                    </button>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Get a free consultation tailored to your industry needs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

