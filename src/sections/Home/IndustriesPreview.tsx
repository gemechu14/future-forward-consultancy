'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Laptop, Heart, Building2, ShoppingCart, Factory, Zap, ArrowRight } from 'lucide-react';
import { useGetIndustriesQuery } from '@/redux/servicesApi';
import IndustryCard from '@/components/IndustryCard';
import SectionHeader from '@/components/SectionHeader';

/**
 * IndustriesPreview Component
 * Preview of key industries on the home page
 */
export default function IndustriesPreview() {
  const { data: industries, isLoading, error } = useGetIndustriesQuery();

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
    <section id="industries" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <SectionHeader
        subtitle="Industries We Serve"
        title="Expert Solutions Across Sectors"
        description="Deep industry expertise delivering tailored solutions for diverse business challenges"
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
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industries.slice(0, 6).map((industry, index) => (
              <IndustryCard
                key={industry.id}
                name={industry.name}
                description={industry.description}
                icon={getIcon(industry.icon)}
                solutions={industry.solutions}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* View All Industries CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/industries"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </>
      )}
    </section>
  );
}
