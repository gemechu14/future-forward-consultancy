'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NAVIGATION_LINKS, COMPANY_INFO } from '@/utils/constants';

/**
 * Navbar Component
 * Responsive navigation bar with dark mode toggle, mobile menu, and scroll effects
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effects and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only run on home page
      if (pathname === '/') {
        const sections = ['hero', 'services', 'industries', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        // Reset active section when not on home page
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Reset active section when not on home page
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    // If not on home page, show the current page as active
    if (pathname !== '/') {
      return href === pathname;
    }
    
    // On home page, show only the current section as active (not Home + section)
    if (pathname === '/') {
      // Only show Home as active if no section is active (at the top of page)
      if (href === '/' && !activeSection) return true;
      
      // Show section as active only if it matches the current section
      if (href === '/services' && activeSection === 'services') return true;
      if (href === '/industries' && activeSection === 'industries') return true;
      if (href === '/about' && activeSection === 'about') return true;
      if (href === '/contact' && activeSection === 'contact') return true;
    }
    
    return false;
  };

  // Ensure there's always an active link - if none found, default to Home
  const hasActiveLink = NAVIGATION_LINKS.some(link => isActiveLink(link.href));
  const isActiveLinkWithFallback = (href: string) => {
    if (isActiveLink(href)) return true;
    // If no link is active and this is the Home link, make it active as fallback
    if (!hasActiveLink && href === '/') return true;
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                {/* <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-transparent">
                  <Image
                    src="/assets/logo.png"
                    alt="Future Forward Logo"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div> */}

                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-transparent">
  <Image
    src="/assets/logo.png"
    alt="Future Forward Logo"
    width={50}
    height={50}
    className="w-full h-full object-contain" // Change to object-contain for no cropping
    priority
  />
</div>

                <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
                  Future Forward
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVIGATION_LINKS.map((link) => {
                const handleClick = (e: React.MouseEvent) => {
                  if (link.href === '/') {
                    // Go to home page
                    window.location.href = '/';
                  } else {
                    // Scroll to section on home page
                    e.preventDefault();
                    if (pathname !== '/') {
                      // If not on home page, go to home first with hash
                      window.location.href = `/#${link.href.substring(1)}`;
                    } else {
                      // If on home page, just scroll
                      const section = document.getElementById(link.href.substring(1));
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                };

                return (
                  <button
                    key={link.href}
                    onClick={handleClick}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActiveLinkWithFallback(link.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right Section: Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-4">
                    {NAVIGATION_LINKS.map((link, index) => {
                      const handleClick = (e: React.MouseEvent) => {
                        if (link.href === '/') {
                          // Go to home page
                          window.location.href = '/';
                        } else {
                          // Scroll to section on home page
                          e.preventDefault();
                          if (pathname !== '/') {
                            // If not on home page, go to home first with hash
                            window.location.href = `/#${link.href.substring(1)}`;
                          } else {
                            // If on home page, just scroll
                            const section = document.getElementById(link.href.substring(1));
                            if (section) {
                              section.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }
                        setIsMobileMenuOpen(false);
                      };

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            onClick={handleClick}
                            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                              isActiveLinkWithFallback(link.href)
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                          >
                            {link.label}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

