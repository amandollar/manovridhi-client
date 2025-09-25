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
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-300 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
              <span className="hidden sm:inline">Expert Mental Health Resources</span>
              <span className="sm:hidden">Expert Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 md:mb-8">
              Mental Health
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-8 md:mb-12 px-4">
              Discover evidence-based insights, expert guidance, and practical strategies 
              to support your mental wellness journey through our comprehensive blog collection.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 text-slate-400">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">50+</div>
                <div className="text-xs md:text-sm">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">10K+</div>
                <div className="text-xs md:text-sm">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">100%</div>
                <div className="text-xs md:text-sm">Evidence-Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 md:mr-3"></div>
              Featured Article
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
              Editor&apos;s Choice
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 group hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  width={700}
                  height={500}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="bg-emerald-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                    {blogs[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-10 lg:p-16">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-500 mb-4 md:mb-6">
                  <span className="font-medium">{blogs[0].author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{blogs[0].date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-full">{blogs[0].readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                  {blogs[0].title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed font-light">
                  {blogs[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${blogs[0].id}`}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group text-base md:text-lg"
                >
                  Read Full Article
                  <span className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-lg transform scale-105" 
                    : "bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 md:mr-3"></div>
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
              Expert Insights
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredBlogs.slice(1).map((blog) => (
              <article key={blog.id} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:border-emerald-300/50 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="bg-emerald-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-500 mb-3 md:mb-4">
                      <span className="font-medium">{blog.author}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{blog.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-slate-100 px-2 py-1 rounded-full text-xs">{blog.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed line-clamp-3 font-light">
                      {blog.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300 text-sm md:text-base"
                    >
                      Read Article
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-lg">M</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold">Manovridhi</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Your trusted companion in mental health and wellness.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Home</Link>
                <Link href="/home" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Blog</Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Categories</h4>
              <div className="space-y-2">
                <Link href="/home?category=anxiety" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Anxiety</Link>
                <Link href="/home?category=depression" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Depression</Link>
                <Link href="/home?category=mindfulness" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Mindfulness</Link>
                <Link href="/home?category=self-care" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Self-Care</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Get Help</h4>
              <div className="space-y-2">
                <Link href="/emergency" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Emergency Support</Link>
                <Link href="/professionals" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Find Professional</Link>
                <Link href="/tests" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Take Assessment</Link>
                <Link href="/chatbot" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">AI Chatbot</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
