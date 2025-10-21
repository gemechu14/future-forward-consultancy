'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';
import { useSendContactMutation } from '@/redux/servicesApi';
import { FormInput, FormTextarea } from '@/components/FormInput';
import MapSection from '@/components/MapSection';
import SectionHeader from '@/components/SectionHeader';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact Page
 * Form with validation, submission handling, and map integration
 */
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const [sendContact, { isLoading }] = useSendContactMutation();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContact(data).unwrap();
      setSubmitStatus('success');
      setStatusMessage(result.message);
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error: unknown) {
      setSubmitStatus('error');
      setStatusMessage((error as any)?.data?.message || 'Something went wrong. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Let's discuss how we can help transform your business and achieve your goals
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

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Contact Us"
            title="Send Us a Message"
            description="Fill out the form below and we'll get back to you within 24 hours"
            icon={<Mail className="w-4 h-4" />}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormInput
                id="name"
                label="Full Name"
                type="text"
                icon={<User className="w-5 h-5" />}
                placeholder="John Doe"
                error={errors.name?.message}
                required
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
              />

              {/* Email */}
              <FormInput
                id="email"
                label="Email Address"
                type="email"
                icon={<Mail className="w-5 h-5" />}
                placeholder="john@example.com"
                error={errors.email?.message}
                required
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
              />

              {/* Subject */}
              <FormInput
                id="subject"
                label="Subject"
                type="text"
                icon={<MessageSquare className="w-5 h-5" />}
                placeholder="What is this regarding?"
                error={errors.subject?.message}
                required
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: {
                    value: 5,
                    message: 'Subject must be at least 5 characters',
                  },
                })}
              />

              {/* Message */}
              <FormTextarea
                id="message"
                label="Message"
                rows={6}
                icon={<MessageSquare className="w-5 h-5" />}
                placeholder="Tell us about your project or inquiry..."
                error={errors.message?.message}
                required
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 20,
                    message: 'Message must be at least 20 characters',
                  },
                })}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className={`btn-primary w-full inline-flex items-center justify-center space-x-2 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p>{statusMessage}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
}

