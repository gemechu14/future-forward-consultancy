'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  Mail,
  TrendingUp,
  Settings,
  Plus,
  Edit,
  Trash2,
} from 'lucide-react';
import { useGetServicesQuery, useGetIndustriesQuery } from '@/redux/servicesApi';
import SectionHeader from '@/components/SectionHeader';

/**
 * Admin Dashboard Page (Mocked)
 * Simple dashboard for managing services and industries
 * Note: This is a mock implementation. In production, add proper authentication and authorization.
 */
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'industries' | 'contacts'>('overview');
  const { data: services } = useGetServicesQuery();
  const { data: industries } = useGetIndustriesQuery();

  // Mock stats
  const stats = [
    { label: 'Total Clients', value: '250', icon: <Users className="w-6 h-6" />, change: '+12%' },
    { label: 'Active Projects', value: '42', icon: <Briefcase className="w-6 h-6" />, change: '+8%' },
    { label: 'Services', value: services?.length || 0, icon: <Settings className="w-6 h-6" />, change: '0%' },
    { label: 'Industries', value: industries?.length || 0, icon: <Building2 className="w-6 h-6" />, change: '0%' },
  ];

  // Mock recent contacts
  const recentContacts = [
    { id: 1, name: 'John Smith', email: 'john@example.com', subject: 'Strategy Consulting Inquiry', date: '2024-10-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', subject: 'Digital Transformation', date: '2024-10-14' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', subject: 'Market Research', date: '2024-10-13' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Admin Dashboard
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your business consultancy platform
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg">
            {[
              { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
              { id: 'services', label: 'Services', icon: <Settings className="w-5 h-5" /> },
              { id: 'industries', label: 'Industries', icon: <Building2 className="w-5 h-5" /> },
              { id: 'contacts', label: 'Contacts', icon: <Mail className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                    <span className={`text-sm font-semibold ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Recent Contact Inquiries
              </h2>
              <div className="space-y-4">
                {recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.subject}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{contact.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.date}</p>
                      <button className="text-primary text-sm font-medium hover:underline mt-1">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Manage Services
              </h2>
              <button className="btn-primary inline-flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Service</span>
              </button>
            </div>

            <div className="space-y-4">
              {services?.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {service.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {service.features.length} features
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Industries Tab */}
        {activeTab === 'industries' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Manage Industries
              </h2>
              <button className="btn-primary inline-flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Industry</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries?.map((industry) => (
                <div
                  key={industry.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {industry.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <button className="p-1.5 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {industry.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {industry.solutions.length} solutions
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Inquiries
            </h2>
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.email}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">{contact.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Subject:</strong> {contact.subject}
                  </p>
                  <button className="text-primary text-sm font-medium hover:underline">
                    View Full Message →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}


