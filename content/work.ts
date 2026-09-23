export interface CaseStudy {
  slug: string;
  title: string;
  url: string;
  hook: string;
  paragraph: string;
  tags: string[];
  year: string;
  category: string;
  color: string; // card accent color
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'youreshop',
    title: 'YoureShop',
    url: 'https://www.youreshop.in/',
    hook: 'A modern, full-stack e-commerce destination built for speed, seamless discovery, and high conversion.',
    paragraph:
      'YoureShop required a high-performance digital storefront capable of handling dynamic product catalogs, instant search, and frictionless checkout across India. We engineered a bespoke web application with Next.js and optimized UI components, delivering sub-second page loads, real-time cart synchronization, and an intuitive mobile shopping experience.',
    tags: ['E-Commerce', 'Next.js', 'Web Development', 'UI/UX Design', 'Full-Stack'],
    year: '2025',
    category: 'E-Commerce & Retail',
    color: '#EA580C',
    metrics: [
      { label: 'Lighthouse Score', value: '98+' },
      { label: 'Avg Page Load', value: '< 800ms' },
      { label: 'Conversion Lift', value: '↑ 2.8×' },
    ],
  },
  {
    slug: 'seeyourweather',
    title: 'SeeYour Weather',
    url: 'https://seeyourweather.vercel.app/',
    hook: 'Real-time weather intelligence and air quality forecasting for every city and town in India.',
    paragraph:
      'SeeYour Weather delivers live meteorological insights with zero latency. Built with Next.js and integrated with open-source weather APIs, the application features GPS automatic location detection, smart city search with autocomplete, interactive 7-day temperature forecasts, and real-time AQI pollutant breakdowns in a sleek, responsive interface.',
    tags: ['Web Application', 'Next.js', 'API Integration', 'Responsive Design', 'Real-Time Data'],
    year: '2025',
    category: 'Web Application',
    color: '#4F46E5',
    metrics: [
      { label: 'Cities Covered', value: '4,000+' },
      { label: 'API Response', value: '< 200ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
];
