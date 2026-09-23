'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav-header${scrolled ? ' glass-nav' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="explr home">
            <Image
              src="/logo.jpeg"
              alt="explr logo"
              width={120}
              height={40}
              className="nav-logo-img"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a href="/contact" className="glass-btn">Start a project</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
