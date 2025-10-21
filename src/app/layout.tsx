import type { Metadata } from 'next';
import { Inter, Poppins, Lato, Roboto } from 'next/font/google';
import '@/styles/globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Future Forward Research & Business Consultancy',
  description: 'Transforming Businesses, Shaping Futures. Expert consulting services in strategy, market research, digital transformation, and more.',
  keywords: [
    'business consulting',
    'strategy consulting',
    'market research',
    'digital transformation',
    'business strategy',
    'management consulting',
  ],
  authors: [{ name: 'Future Forward Consultancy' }],
  creator: 'Future Forward Consultancy',
  publisher: 'Future Forward Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://futureforwardconsultancy.com',
    title: 'Future Forward Research & Business Consultancy',
    description: 'Transforming Businesses, Shaping Futures',
    siteName: 'Future Forward Consultancy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Forward Research & Business Consultancy',
    description: 'Transforming Businesses, Shaping Futures',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${lato.variable} ${roboto.variable} font-sans`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

