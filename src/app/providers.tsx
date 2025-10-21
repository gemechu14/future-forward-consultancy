'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '@/redux/store';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Providers Component
 * Wraps the app with Redux Provider and Theme Provider
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}


