import { NextResponse } from 'next/server';

/**
 * GET /api/industries
 * Returns list of industries served
 */
export async function GET() {
  // Mock data - In production, this would fetch from a database
  const industries = [
    {
      id: 1,
      name: 'Technology & Software',
      description: 'Helping tech companies scale, innovate, and navigate rapid market changes.',
      icon: 'laptop',
      solutions: [
        'Product Development Strategy',
        'Go-to-Market Planning',
        'Tech Stack Optimization',
        'Agile Transformation',
      ],
      caseStudies: [
        'Helped SaaS startup achieve 300% revenue growth in 18 months',
        'Guided enterprise software migration to cloud infrastructure',
      ],
    },
    {
      id: 2,
      name: 'Healthcare & Life Sciences',
      description: 'Strategic guidance for healthcare providers, pharma, and biotech companies.',
      icon: 'heart',
      solutions: [
        'Healthcare IT Strategy',
        'Clinical Operations Optimization',
        'Regulatory Compliance',
        'Patient Experience Enhancement',
      ],
      caseStudies: [
        'Reduced hospital operational costs by 25%',
        'Streamlined clinical trial management processes',
      ],
    },
    {
      id: 3,
      name: 'Financial Services',
      description: 'Empowering banks, fintech, and insurance companies with strategic insights.',
      icon: 'bank',
      solutions: [
        'Digital Banking Transformation',
        'Risk & Compliance Management',
        'Fintech Integration',
        'Customer Experience Strategy',
      ],
      caseStudies: [
        'Launched digital banking platform for regional bank',
        'Implemented AI-driven fraud detection system',
      ],
    },
    {
      id: 4,
      name: 'Retail & E-commerce',
      description: 'Driving omnichannel success for retailers in the digital age.',
      icon: 'shopping',
      solutions: [
        'Omnichannel Strategy',
        'Customer Analytics',
        'Supply Chain Optimization',
        'E-commerce Platform Selection',
      ],
      caseStudies: [
        'Increased online conversion rate by 40%',
        'Reduced inventory costs by 30% through optimization',
      ],
    },
    {
      id: 5,
      name: 'Manufacturing',
      description: 'Enhancing operational efficiency and innovation in manufacturing.',
      icon: 'factory',
      solutions: [
        'Industry 4.0 Implementation',
        'Lean Manufacturing',
        'Quality Management Systems',
        'Supply Chain Resilience',
      ],
      caseStudies: [
        'Implemented IoT-based predictive maintenance',
        'Reduced production costs by 20%',
      ],
    },
    {
      id: 6,
      name: 'Energy & Utilities',
      description: 'Navigating the transition to sustainable energy solutions.',
      icon: 'energy',
      solutions: [
        'Renewable Energy Strategy',
        'Grid Modernization',
        'ESG Compliance',
        'Asset Management',
      ],
      caseStudies: [
        'Developed renewable energy transition roadmap',
        'Optimized utility asset lifecycle management',
      ],
    },
  ];

  return NextResponse.json(industries, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}


