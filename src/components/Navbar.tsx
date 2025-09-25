'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Manovridhi</h1>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/home" 
              className={`font-medium transition-colors ${
                pathname === '/home' 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/community" 
              className={`font-medium transition-colors ${
                pathname === '/community' 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Community
            </Link>
            <Link 
              href="/connect" 
              className={`font-medium transition-colors ${
                pathname === '/connect' 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Connect
            </Link>
            <Link 
              href="/test" 
              className={`font-medium transition-colors ${
                pathname === '/test' 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Test
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
