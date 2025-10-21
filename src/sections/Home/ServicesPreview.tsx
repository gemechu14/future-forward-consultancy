'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, LineChart, Zap, DollarSign, Shield, Settings, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';

/**
 * ServicesPreview Component
 * Preview of key services on the home page
 */
export default function ServicesPreview() {
  const services = [
    {
      title: 'Strategy Consulting',
      description: 'Develop winning business strategies aligned with your vision and market opportunities.',
      icon: <Target className="w-8 h-8" />,
      features: [
        'Business Model Innovation',
        'Growth Strategy Development',
        'Market Entry Planning',
      ],
    },
    {
      title: 'Market Research',
      description: 'Data-driven insights to understand your market, customers, and competitive landscape.',
      icon: <LineChart className="w-8 h-8" />,
      features: [
        'Customer Segmentation',
        'Market Sizing & Forecasting',
        'Competitor Intelligence',
      ],
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business operations with cutting-edge digital solutions.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Process Automation',
        'Technology Integration',
        'Change Management',
      ],
    },
  ];

  return (
    <section id="services" className="section-container">
      <SectionHeader
        subtitle="What We Offer"
        title="Expert Consulting Services"
        description="Comprehensive solutions tailored to your unique business challenges and goals"
        icon={<Settings className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* View All Services CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Link
          href="/services"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>View All Services</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}

