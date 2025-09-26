'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { blogs, categories } from '@/data/blogs';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Elegant background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.015%22%3E%3Cpath%20d%3D%22M30%2030c0-5.523-4.477-10-10-10s-10%204.477-10%2010%204.477%2010%2010%2010%2010-4.477%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Professional badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
              व्यावसायिक मानसिक स्वास्थ्य मंच
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide mb-8 drop-shadow-2xl">
              <span className="font-semibold text-shadow-lg">स्वागत है आपका</span>
              <span className="block font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 bg-clip-text text-transparent text-shadow-none mt-2">
                मनोवृद्धि में
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-4 drop-shadow-xl">
                आपके मानसिक स्वास्थ्य का साथी
              </span>
            </h1>
            
            
            {/* Professional stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">15K+</div>
                <div className="text-sm text-gray-400 font-medium">सक्रिय उपयोगकर्ता</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">98%</div>
                <div className="text-sm text-gray-400 font-medium">संतुष्टि दर</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400 font-medium">सहायता उपलब्ध</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Featured Content
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Latest
              <span className="block font-medium text-indigo-600">Expert Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Stay informed with the latest research, therapeutic approaches, and wellness strategies
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative overflow-hidden">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {blogs[0].category}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-semibold text-sm">{blogs[0].author.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{blogs[0].author}</span>
                  </div>
                  <span>•</span>
                  <span>{blogs[0].date}</span>
                  <span>•</span>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{blogs[0].readTime}</div>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                  {blogs[0].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  {blogs[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${blogs[0].id}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group w-fit"
                >
                  Read Full Article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Explore by
              <span className="font-medium text-indigo-600"> Topic</span>
            </h3>
            <p className="text-gray-600 font-light">
              Find articles tailored to your specific interests and needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg transform scale-105 border-2 border-indigo-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md border-2 border-transparent hover:border-indigo-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 right-40 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Curated Content
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Professional
              <span className="block font-medium text-indigo-600">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Evidence-based articles and insights from licensed mental health professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-indigo-600 font-semibold text-xs">{blog.author.charAt(0)}</span>
                        </div>
                        <span className="font-medium">{blog.author}</span>
                      </div>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 font-light">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                        {blog.readTime}
                      </div>
                      <Link 
                        href={`/blog/${blog.id}`}
                        className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Manovridhi</h3>
            <p className="text-gray-400 text-sm">&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
