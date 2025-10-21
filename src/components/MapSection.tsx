'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

/**
 * MapSection Component
 * Displays company location with Google Maps iframe and contact information
 * Lazy-loaded and SEO-friendly with NAP (Name, Address, Phone) data
 */
export default function MapSection() {
  const { address, phone, email, location } = COMPANY_INFO;
  
  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5993!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40wrTQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Office
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We'd love to meet you in person. Drop by our office or schedule an appointment.
            </p>
          </div>

          {/* Company NAP - Critical for Local SEO */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Address
                </h4>
                <address className="text-gray-600 dark:text-gray-400 not-italic">
                  {address.street}<br />
                  {/* {address.city}, {address.state} {address.zip}<br /> */}
                  {address.country}
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Phone
                </h4>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: COMPANY_INFO.name,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: address.street,
                  addressLocality: address.city,
                  addressRegion: address.state,
                  postalCode: address.zip,
                  addressCountry: address.country,
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: location.lat,
                  longitude: location.lng,
                },
                telephone: phone,
                email: email,
              }),
            }}
          />
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Future Forward Office Location"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

