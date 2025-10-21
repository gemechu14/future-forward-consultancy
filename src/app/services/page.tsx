'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, LineChart, Zap, DollarSign, Shield, Settings, X, ArrowLeft } from 'lucide-react';
import { useGetServicesQuery, Service } from '@/redux/servicesApi';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';

/**
 * Services Page
 * Displays all services with RTK Query integration and modal details
 */
export default function ServicesPage() {
  const { data: services, isLoading, error } = useGetServicesQuery();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactElement> = {
      target: <Target className="w-8 h-8" />,
      chart: <LineChart className="w-8 h-8" />,
      zap: <Zap className="w-8 h-8" />,
      dollar: <DollarSign className="w-8 h-8" />,
      shield: <Shield className="w-8 h-8" />,
      cog: <Settings className="w-8 h-8" />,
    };
    return icons[iconName] || <Settings className="w-8 h-8" />;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
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
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive consulting solutions designed to accelerate your business growth and transformation
          </motion.p>
        </div>
      </section>

      {/* Back to Home Button */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </div> */}

      {/* Services Grid */}
      <section className="section-container">
        <SectionHeader
          subtitle="What We Do"
          title="Complete Service Portfolio"
          description="Expert consulting across all aspects of your business"
          icon={<Settings className="w-4 h-4" />}
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
            <p className="text-red-500 text-lg">Failed to load services. Please try again later.</p>
          </div>
        )}

        {/* Services Grid */}
        {services && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={getIcon(service.icon)}
                features={service.features}
                delay={index * 0.1}
                onClick={() => setSelectedService(service)}
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
      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="relative max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
                      {selectedService.price && (
                        <p className="text-white/90 font-medium">{selectedService.price}</p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-secondary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        window.location.href = '/contact';
                      }}
                      className="btn-primary w-full"
                    >
                      Get Started with This Service
                    </button>
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

