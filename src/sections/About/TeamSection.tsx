'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '@/utils/constants';
import SectionHeader from '@/components/SectionHeader';
import { Users } from 'lucide-react';

/**
 * TeamSection Component
 * Displays team members with their roles and bios
 */
export default function TeamSection() {
  return (
    <section className="section-container bg-gray-50 dark:bg-gray-800/50">
      <SectionHeader
        subtitle="Meet Our Team"
        title="Expert Leaders Driving Success"
        description="Our diverse team of experienced professionals brings deep industry knowledge and innovative thinking"
        icon={<Users className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group text-center"
          >
            {/* Avatar */}
            <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-3">
              {member.role}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {member.bio}
            </p>

            {/* Social */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors"
              aria-label={`${member.name} LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


