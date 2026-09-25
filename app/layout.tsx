import type { Metadata } from 'next';
import { Inter_Tight, Fraunces } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const displayFont = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Fraunces({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://explr.co'),
  title: {
    default: 'explr — Brand & Digital Studio',
    template: '%s · explr',
  },
  description:
    'explr is a brand and digital studio for ambitious companies. Strategy, design, and code — under one roof.',
  keywords: ['brand strategy', 'digital design', 'web development', 'content strategy', 'agency'],
  authors: [{ name: 'explr', url: 'https://explr.co' }],
  creator: 'explr',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://explr.co',
    siteName: 'explr',
    title: 'explr — Brand & Digital Studio',
    description:
      'We help ambitious brands find their footing, build their presence, and grow with intention.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'explr — Brand & Digital Studio',
    description: 'Brand strategy, digital experience, and content for ambitious companies.',
    creator: '@explr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'explr',
  url: 'https://explr.co',
  logo: 'https://explr.co/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'explr7060@gmail.com',
    contactType: 'customer service',
  },
  sameAs: ['https://twitter.com/explr', 'https://linkedin.com/company/explr'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Skip-to-content link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Nav />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
