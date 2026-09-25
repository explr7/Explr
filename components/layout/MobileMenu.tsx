'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Top bar */}
      <div className="mobile-menu-top">
        <Link href="/" className="mobile-menu-logo" onClick={onClose}>
            <Image
              src="/logo.jpeg"
              alt="explr logo"
              width={100}
              height={34}
              className="nav-logo-img-dark"
            />
          </Link>
        <button
          ref={closeRef}
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Links */}
      <nav className="mobile-menu-nav" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mobile-menu-footer">
        <a href="/contact" className="mobile-menu-btn" onClick={onClose}>
          Start a project
        </a>
        <p className="mobile-menu-hint">explr7060@gmail.com · London & Remote</p>
      </div>
    </div>
  );
}
