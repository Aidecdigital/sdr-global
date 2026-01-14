'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header ref={headerRef} className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <img src="/SDRGloballogo.png" alt="SDR Global Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('solutions')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute z-10 w-56 pt-2">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                    <Link href="/for-companies" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      For Companies
                    </Link>
                    <Link href="/engagement-models" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Engagement Models
                    </Link>
                    <Link href="/how-it-works" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      How It Works
                    </Link>
                    <Link href="/case-studies" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Case Studies
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Talent Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('talent')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('talent')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Talent
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'talent' && (
                <div className="absolute z-10 w-56 pt-2">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                    <Link href="#" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      For SDRs
                    </Link>
                    <Link href="#" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Training & Certification
                    </Link>
                    <Link href="#" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Talent Pool
                    </Link>
                    <Link href="#" onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      FAQs (SDRs)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Resources
            </Link>

            {/* About */}
            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* Contact */}
            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Hire SDR Talent
            </Link>
            <Link href="#" className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
              Become an SDR
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Mobile CTAs */}
            <div className="grid grid-cols-1 gap-3">
              <Link href="#" className="flex justify-center items-center w-full bg-blue-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-blue-700 shadow-sm transition-colors">
                Hire SDR Talent
              </Link>
              <Link href="#" className="flex justify-center items-center w-full text-gray-700 bg-white border border-gray-300 px-4 py-3 rounded-md text-base font-medium hover:bg-gray-50 transition-colors">
                Become an SDR
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-1 pt-2">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
              >
                Solutions
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeDropdown === 'solutions' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-2">
                  <Link href="/for-companies" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    For Companies
                  </Link>
                  <Link href="/engagement-models" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    Engagement Models
                  </Link>
                  <Link href="/how-it-works" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    How It Works
                  </Link>
                  <Link href="/case-studies" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    Case Studies
                  </Link>
                </div>
              )}

              <button
                onClick={() => toggleDropdown('talent')}
                className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
              >
                Talent
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeDropdown === 'talent' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {activeDropdown === 'talent' && (
                <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-2">
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    For SDRs
                  </Link>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    Training & Certification
                  </Link>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    Talent Pool
                  </Link>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                    FAQs (SDRs)
                  </Link>
                </div>
              )}

              <Link href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Resources
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
