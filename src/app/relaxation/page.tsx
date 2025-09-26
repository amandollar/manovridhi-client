'use client';

import { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AudioGrid from '@/components/relaxation/AudioGrid';
import CategoryFilter from '@/components/relaxation/CategoryFilter';
import { relaxationAudio, getAudioByCategory } from '@/data/relaxation-audio';
import { useAuth } from '@/contexts/AuthContext';
import { Headphones, Music, Heart, Lock } from 'lucide-react';
import Link from 'next/link';

export default function RelaxationPage() {
  const { isAuthenticated, loading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPageLoading, setIsPageLoading] = useState(true);
  
  // Memoize audio list calculation for better performance
  const audioList = useMemo(() => {
    return getAudioByCategory(selectedCategory);
  }, [selectedCategory]);

  // Handle page loading and refresh
  useEffect(() => {
    // Simulate a brief loading state for better UX
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state while auth is being checked
  if (loading || isPageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600">Loading relaxation content...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Login Required</h1>
              <p className="text-lg text-gray-600 mb-8">
                Please sign in to access our relaxation audio library and enhance your mental wellbeing journey.
              </p>
              <div className="space-y-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all duration-200"
                >
                  Create Account
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Don't have an account? Sign up to access all our mental health resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Relaxation Audio Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a curated collection of relaxation audio designed to support your mental wellbeing. 
              From guided meditations to calming nature sounds, find the perfect audio to help you unwind and find peace.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Music className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{relaxationAudio.length}</h3>
              <p className="text-gray-600">Audio Tracks</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Headphones className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">6</h3>
              <p className="text-gray-600">Categories</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Free</h3>
              <p className="text-gray-600">Always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Category</h2>
            <p className="text-gray-600">Filter audio content by your current needs and mood</p>
          </div>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Audio Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AudioGrid 
            audioList={audioList}
            showCategory={selectedCategory === 'All'}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Support?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our relaxation audio is just one part of your mental health journey. 
            Explore our blog articles and resources for more comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/home"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Articles
            </a>
            <a
              href="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Visit Dashboard
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
