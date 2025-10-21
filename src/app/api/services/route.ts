import { NextResponse } from 'next/server';

/**
 * GET /api/services
 * Returns list of all services offered
 */
export async function GET() {
  // Mock data - In production, this would fetch from a database
  const services = [
    {
      id: 1,
      title: 'Strategy Consulting',
      description: 'Develop winning business strategies aligned with your vision and market opportunities.',
      icon: 'target',
      features: [
        'Business Model Innovation',
        'Growth Strategy Development',
        'Market Entry Planning',
        'Competitive Analysis',
      ],
      price: 'Custom',
    },
    {
      id: 2,
      title: 'Market Research',
      description: 'Data-driven insights to understand your market, customers, and competitive landscape.',
      icon: 'chart',
      features: [
        'Customer Segmentation',
        'Market Sizing & Forecasting',
        'Competitor Intelligence',
        'Consumer Behavior Analysis',
      ],
      // price: 'Starting at $5,000',
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Transform your business operations with cutting-edge digital solutions.',
      icon: 'zap',
      features: [
        'Process Automation',
        'Technology Integration',
        'Change Management',
        'Digital Strategy',
      ],
      price: 'Custom',
    },
    {
      id: 4,
      title: 'Financial Analysis',
      description: 'Comprehensive financial modeling and analysis to drive profitability.',
      icon: 'dollar',
      features: [
        'Financial Modeling',
        'Valuation Services',
        'Cost Optimization',
        'Investment Analysis',
      ],
      // price: 'Starting at $3,000',
    },
    {
      id: 5,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate business risks for sustainable growth.',
      icon: 'shield',
      features: [
        'Risk Assessment',
        'Compliance Audit',
        'Business Continuity Planning',
        'Crisis Management',
      ],
      // price: 'Starting at $4,000',
    },
    {
      id: 6,
      title: 'Operations Excellence',
      description: 'Optimize operations for efficiency, quality, and scalability.',
      icon: 'cog',
      features: [
        'Process Optimization',
        'Supply Chain Management',
        'Quality Assurance',
        'Performance Metrics',
      ],
      price: 'Custom',
    },
  ];

  return NextResponse.json(services, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}


