'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#integrations', label: 'Integrations' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/licensing', label: 'Licensing' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-cream-50/90 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/images/clas-logo.png" alt="Clas Mortgage Processing" className="h-24 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate2-800 hover:text-lavender-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/portal" className="text-sm font-semibold text-slate2-700 hover:text-lavender-600 transition-colors">
              Partner Portal
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-slate2-900"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-lavender-800/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-line">
              <div className="flex items-center gap-2.5">
                <img src="/images/clas-logo.png" alt="Clas Mortgage Processing" className="h-20 w-auto object-contain" />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-slate2-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {LINKS.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 px-3 rounded-lg text-base font-semibold text-slate2-900 hover:bg-lavender-50 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/portal"
                onClick={() => setOpen(false)}
                className="block py-3.5 px-3 rounded-lg text-base font-semibold text-slate2-900 hover:bg-lavender-50 transition-colors"
              >
                Partner Portal
              </Link>
            </div>
            <div className="p-5 border-t border-line">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
