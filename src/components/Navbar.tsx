'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm md:text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">Manovridhi</h1>
              <p className="text-xs text-slate-500 font-medium">Mental Health Platform</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-slate-900">Manovridhi</h1>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/home" 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                pathname === '/home' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/connect" 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                pathname === '/connect' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
              }`}
            >
              Connect
            </Link>
            
            <Link 
              href="/test" 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                pathname === '/test' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
              }`}
            >
              Test
            </Link>

            {/* User Menu */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden lg:block">{user.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-sm font-medium text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                      <p className="text-xs text-emerald-600 capitalize">{user.accountType}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login"
                className="px-4 py-2 rounded-lg font-medium text-sm text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-all duration-300"
              >
                Sign in
              </Link>
            )}
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
            <div className="px-4 py-4 space-y-2">
              {/* User Info */}
              {isAuthenticated && user && (
                <div className="px-4 py-3 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                      <p className="text-xs text-emerald-600 capitalize">{user.accountType}</p>
                    </div>
                  </div>
                </div>
              )}

              <Link 
                href="/home" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                  pathname === '/home' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/connect" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                  pathname === '/connect' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
                }`}
              >
                Connect
              </Link>
              
              <Link 
                href="/test" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                  pathname === '/test' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
                }`}
              >
                Test
              </Link>

              {/* Auth Actions */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-all duration-300"
                >
                  Sign out
                </button>
              ) : (
                <Link 
                  href="/login"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg font-medium text-base text-slate-600 hover:bg-slate-100 hover:text-emerald-600 transition-all duration-300"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
