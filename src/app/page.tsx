'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import LandingNavbar from '@/components/LandingNavbar';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  Trusted by 10,000+ individuals worldwide
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                    Mental Wellness
                  </span>
                </h1>
                
                <div className="relative">
                  <p className="text-2xl lg:text-3xl text-slate-300 font-light mb-6 leading-relaxed">
                    &ldquo;स्वागत है! यहाँ आपका मन खुलकर बोल सकेगा ❤️&rdquo;
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full"></div>
                </div>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                  A comprehensive mental health ecosystem combining cutting-edge AI technology, 
                  professional expertise, and compassionate community support for your wellness journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/home"
                  className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-500 text-center shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center space-x-3">
                    <span>Begin Your Journey</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
                <a 
                  href="#features"
                  className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-2xl text-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-500 text-center backdrop-blur-sm hover:bg-emerald-500/5"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Explore Services</span>
                    <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
                  </span>
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sm text-slate-400 font-medium">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-slate-400 font-medium">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-slate-400 font-medium">Confidential</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full blur-3xl scale-110"></div>
                <div className="relative">
                  <Image
                    src="/heroImage.png"
                    alt="Mental Health Support"
                    width={600}
                    height={600}
                    className="rounded-full shadow-2xl object-cover border-4 border-emerald-500/20 backdrop-blur-sm"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -bottom-8 -right-8 bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-slate-700/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-semibold text-white">24/7 Support</div>
                        <div className="text-xs text-slate-400">Always available</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <span className="text-emerald-400 text-lg">🤖</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">AI Assistant</div>
                        <div className="text-xs text-slate-400">Ready to help</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              Comprehensive Services
            </div>
            <h2 className="text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Complete Mental Health
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              A sophisticated suite of mental health services combining cutting-edge technology, 
              professional expertise, and compassionate community support for your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Vriddhi Chatbot */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-emerald-300/50 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/chatbot.jpg"
                    alt="Vriddhi Chatbot"
                    width={320}
                    height={200}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <span className="text-emerald-600 text-lg">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">AI Assistant</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">Engage in supportive conversations with our intelligent AI chatbot, available 24/7 for immediate mental health assistance and personalized insights.</p>
                  <div className="inline-flex items-center text-emerald-600 font-semibold text-base">
                    AI Chatbot Available
                  </div>
                </div>
              </div>
            </div>

            {/* Mental Health Guides */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-emerald-300/50 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/guides.jpg"
                    alt="Mental Health Guides"
                    width={320}
                    height={200}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 text-lg">📚</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Expert Guides</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">Access a comprehensive library of expert-curated guides offering evidence-based strategies for managing mental health challenges.</p>
                  <Link href="/home" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300 text-base">
                    Explore Resources
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>


            {/* Tests and Results */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-emerald-300/50 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/test-results.jpg"
                    alt="Tests and Results"
                    width={320}
                    height={200}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <span className="text-orange-600 text-lg">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Assessments</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">Take comprehensive mental health assessments and track your progress with detailed insights and personalized recommendations.</p>
                  <Link 
                    href={isAuthenticated ? "/test" : "/login"} 
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300 text-base"
                  >
                    Take Assessment
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Connect with Professionals */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-emerald-300/50 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-8 relative overflow-hidden rounded-2xl">
                  <Image
                    src="/connect-with.jpg"
                    alt="Connect with Professionals"
                    width={320}
                    height={200}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <span className="text-indigo-600 text-lg">👨‍⚕️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Professionals</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">Connect with licensed therapists, counselors, and mental health professionals for personalized support and treatment.</p>
                  <Link href="/connect" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300 text-base">
                    Find Professional
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-red-200/50 hover:border-red-300/50 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-8 relative overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-8xl">🚨</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <span className="text-red-600 text-lg">🚨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Crisis Support</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">24/7 crisis support and emergency resources when you need immediate help and professional intervention.</p>
                  <div className="inline-flex items-center text-red-600 font-semibold text-base">
                    Crisis Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                About Manovridhi
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Mental Health Journey Starts Here
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manovridhi is more than just a platform - it&apos;s your companion in mental wellness. 
                We believe that everyone deserves access to quality mental health support, and we&apos;re 
                here to make that journey accessible, safe, and effective.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">100% Anonymous and Secure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Evidence-Based Approaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Available 24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Professional and Peer Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To break down barriers to mental health care and create a supportive community 
                    where everyone can thrive and find the help they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-emerald-100 text-lg font-medium">Active Users</div>
              <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-emerald-100 text-lg font-medium">Support Available</div>
              <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-emerald-100 text-lg font-medium">Anonymous & Safe</div>
              <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards better mental health with our comprehensive platform. 
              It&apos;s completely free, anonymous, and designed with your wellbeing in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/login"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Get Started</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link 
                href="#features"
                className="group border-2 border-white/30 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Get in Touch
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We&apos;re Here to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions or need support? Our team is ready to assist you on your mental health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">Get help via email</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">support@manovridhi.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Chat with our team</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Available 24/7</p>
                <p className="text-sm text-gray-500">Instant support when you need it</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Emergency Hotline</h3>
                    <p className="text-gray-600">Crisis support</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">+1-800-MANOVRIDHI</p>
                <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us more about how we can help you..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Manovridhi</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your mental health companion for a better tomorrow. We&apos;re here to support you every step of the way.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">💬</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-4">
                <a href="#features" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300 cursor-pointer">Features</a>
                <a href="#about" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300 cursor-pointer">About</a>
                <Link href="/home" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <div className="space-y-4">
                <a href="#contact" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300 cursor-pointer">Contact</a>
                <Link href="/help" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Help Center</Link>
                <Link href="/resources" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Resources</Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Get Started</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Join thousands of people on their mental health journey. Start your healing process today.
              </p>
              <Link 
                href="/community"
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Join Now</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">&copy; 2024 Manovridhi. All rights reserved.</p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
