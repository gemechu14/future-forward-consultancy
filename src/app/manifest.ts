import { MetadataRoute } from 'next';

/**
 * Web App Manifest for PWA support
 * Enables "Add to Home Screen" functionality
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Future Forward Research and Business Consultancy',
    short_name: 'Future Forward',
    description: 'Transforming Businesses, Shaping Futures - Expert business consulting services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#004aad',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}


