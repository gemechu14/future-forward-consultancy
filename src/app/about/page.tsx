'use client';

import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import MissionVision from '@/sections/About/MissionVision';
import TeamSection from '@/sections/About/TeamSection';
import Timeline from '@/sections/About/Timeline';

/**
 * About Page
 * Comprehensive about page with mission, vision, team, and timeline
 */
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Future Forward Consultancy</title>
        <meta name="description" content="Learn about Future Forward Consultancy - our mission, vision, team, and journey to becoming a leading business consulting firm." />
        <meta property="og:title" content="About Us - Future Forward Consultancy" />
        <meta property="og:description" content="Expert team dedicated to transforming businesses worldwide" />
      </Head>
      <HeroSection
        title="About Future Forward Consultancy"
        subtitle="Who We Are"
        description="A team of passionate experts dedicated to driving business transformation and delivering exceptional results for our clients worldwide."
        ctaText="Join Our Team"
        ctaLink="/contact"
        showParticles={false}
      />

      
      <MissionVision />
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link
            href="/"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
      {/* <TeamSection />
      <Timeline /> */}
    </>
  );
}

