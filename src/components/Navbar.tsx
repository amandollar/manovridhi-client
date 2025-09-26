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
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-emerald-600">Manovridhi</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/home" 
              className={`px-3 py-2 text-sm font-medium ${
                pathname === '/home' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/community" 
              className={`px-3 py-2 text-sm font-medium ${
                pathname === '/community' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Community
            </Link>
            
            <Link 
              href="/tests" 
              className={`px-3 py-2 text-sm font-medium ${
                pathname === '/tests' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Tests
            </Link>
            
            <Link 
              href="/connect" 
              className={`px-3 py-2 text-sm font-medium ${
                pathname === '/connect' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Connect
            </Link>

            {user?.role === 'counsellor' && (
              <Link 
                href="/counsellor-dashboard" 
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === '/counsellor-dashboard' 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Dashboard
              </Link>
            )}

            {/* User Menu */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <div className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden lg:block">{user.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700"
              >
                Sign in
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {/* User Info */}
              {isAuthenticated && user && (
                <div className="px-3 py-2 border-b border-gray-200 mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}

              <Link 
                href="/home" 
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/home' 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/community" 
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/community' 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                Community
              </Link>
              
              <Link 
                href="/tests" 
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/tests' 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                Tests
              </Link>
              
              <Link 
                href="/connect" 
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/connect' 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                Connect
              </Link>

              {user?.role === 'counsellor' && (
                <Link 
                  href="/counsellor-dashboard" 
                  onClick={closeMenu}
                  className={`block px-3 py-2 text-base font-medium ${
                    pathname === '/counsellor-dashboard' 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  Dashboard
                </Link>
              )}

              {/* Auth Actions */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  Sign out
                </button>
              ) : (
                <Link 
                  href="/login"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 mx-3 mt-2"
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
