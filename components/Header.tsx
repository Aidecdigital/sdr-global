'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Hire SDRs', href: '/hire-sdrs' },
  { label: 'Work', href: '/work' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const isActiveLink = (pathname: string, href: string) => {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="shrink-0">
            <img src="/SDRGloballogo.png" alt="SDR Global Logo" className="h-10 w-auto sm:h-11 lg:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActiveLink(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-[#0055ae]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0055ae]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/hire-sdrs"
              className="rounded-md bg-[#0055ae] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Hire SDR Talent
            </Link>
            <Link
              href="/work"
              className="rounded-md border border-[#0055ae] px-4 py-2 text-sm font-medium text-[#0055ae] transition-colors hover:bg-blue-50"
            >
              Become an SDR
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0055ae] lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 md:py-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/hire-sdrs"
                className="inline-flex items-center justify-center rounded-lg bg-[#0055ae] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Hire SDR Talent
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Become an SDR
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {navItems.map((item) => {
                const active = isActiveLink(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-blue-50 text-[#0055ae]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0055ae]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
