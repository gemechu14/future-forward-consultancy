'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';
import { useSendContactMutation } from '@/redux/servicesApi';
import { FormInput, FormTextarea } from '@/components/FormInput';
import SectionHeader from '@/components/SectionHeader';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * ContactForm Component
 * Contact form section for the home page
 */
export default function ContactForm() {
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
    <section id="contact-form" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <SectionHeader
        subtitle="Get In Touch"
        title="Send Us a Message"
        description="Ready to transform your business? Let's discuss how we can help you achieve your goals"
        icon={<Mail className="w-4 h-4" />}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

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
  );
}

