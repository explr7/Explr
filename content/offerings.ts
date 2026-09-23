export interface Offering {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string; // icon identifier
  items: string[];
}

export const offerings: Offering[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    summary: 'Fast, responsive, conversion-focused websites engineered for modern businesses.',
    detail:
      'We design and build bespoke web experiences that load instantly, look stunning across all devices, and turn visitors into clients. From high-converting landing pages and business portfolios to custom e-commerce builds and ongoing maintenance, we take care of the entire web lifecycle.',
    icon: 'Globe',
    items: [
      'Business websites',
      'Landing pages',
      'Portfolio websites',
      'E-commerce websites',
      'Website redesign',
      'Maintenance',
    ],
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    summary: 'High-retention video content and motion graphics that captivate and convert.',
    detail:
      'We edit scroll-stopping video content tailored to capture attention and scale your audience. From viral Instagram Reels and full-length YouTube productions to sleek promotional videos, product showcases, and dynamic motion graphics, we turn raw footage into high-performing assets.',
    icon: 'Film',
    items: [
      'Instagram Reels',
      'YouTube videos',
      'Short-form content',
      'Promotional videos',
      'Product videos',
      'Motion graphics',
    ],
  },
];
