'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Manovridhi</h1>
              <p className="text-xs text-slate-500 font-medium">Mental Health Platform</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#features" 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#about" 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              About
            </Link>
            {/* Get Started Button */}
            <Link 
              href="/login"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="#features" 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                Features
              </Link>
              
              <Link 
                href="#about" 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                About
              </Link>
              
              <Link 
                href="/home" 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                Blog
              </Link>
              
              <Link 
                href="/connect" 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                Connect
              </Link>
              
              <Link 
                href="/test" 
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
              >
                Test
              </Link>
              
              {/* Mobile Get Started Button */}
              <Link 
                href="/login"
                onClick={closeMenu}
                className="block w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
