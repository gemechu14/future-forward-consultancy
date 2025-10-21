import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for SEO
 * Tells search engines which pages to crawl
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://futureforwardconsultancy.com/sitemap.xml',
  };
}


