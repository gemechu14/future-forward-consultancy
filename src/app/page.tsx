'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/sections/Home/ServicesPreview';
import IndustriesPreview from '@/sections/Home/IndustriesPreview';
import AboutPreview from '@/sections/Home/AboutPreview';
import ContactForm from '@/sections/Home/ContactForm';
import MapSection from '@/components/MapSection';


/**
 * Home Page
 * Main landing page with hero, services preview, and achievements
 */
export default function HomePage() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Run on mount
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <>
      <HeroSection
        title="Transforming Businesses Shaping Futures"
        subtitle="Welcome to Future Forward Research and Business Consulting"
        description="Expert consulting services that drive growth, innovation, and sustainable success for businesses worldwide."
        ctaText="Start Your Journey"
        ctaLink="#contact-form"
      />
      <ServicesPreview />
      <IndustriesPreview />
      <AboutPreview />
      <ContactForm />
      <MapSection />
    </>
  );
}

