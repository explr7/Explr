import Link from 'next/link';
import Image from 'next/image';

const footerNav = [
  {
    heading: 'Work',
    links: [
      { label: 'All Projects',      href: '/work' },
      { label: 'YoureShop',         href: '/work/youreshop' },
      { label: 'SeeYour Weather',   href: '/work/seeyourweather' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Website Development', href: '/#services' },
      { label: 'Video Editing',       href: '/#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',          href: '/about' },
      { label: 'Insights',       href: '/insights' },
      { label: 'Contact',        href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/logo.jpeg"
                alt="explr logo"
                width={110}
                height={36}
                className="nav-logo-img-dark"
                style={{ marginBottom: '1rem' }}
              />
            </Link>
            <p className="footer-tagline">
              We help ambitious brands find their footing, build their presence, and
              grow with intention.
            </p>
            <a href="mailto:explr7060@gmail.com" className="footer-email">
              explr7060@gmail.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="footer-nav-grid">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="footer-col-head">{col.heading}</p>
                <ul className="footer-col-links">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-col-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} explr. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy</Link>
            <Link href="/terms"   className="footer-legal-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
