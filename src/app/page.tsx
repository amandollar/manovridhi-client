import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Manovridhi</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/community" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Manovridhi
                </h1>
                <div className="relative">
                  <p className="text-3xl lg:text-4xl text-emerald-600 font-semibold mb-2 leading-relaxed">
                    &ldquo;स्वागत है! यहाँ आपका मन खुलकर बोल सकेगा ❤️&rdquo;
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Your mental health companion for a better tomorrow. Join thousands who are already on their journey to wellness and healing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/community"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Join Community</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
                <Link 
                  href="#features"
                  className="group border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 text-center hover:border-emerald-700 hover:text-emerald-700"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/heroImage.png"
                  alt="Mental Health Support"
                  width={450}
                  height={450}
                  className="relative rounded-full shadow-2xl object-cover border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Our Services
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive mental health support designed to help you thrive and find peace in your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/brainImage.webp"
                    alt="Brain Health"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Wellness</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive tools and resources designed to support your mental health journey with evidence-based approaches</p>
                <Link href="/community" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300">
                  Explore Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/deep-breathing.jpg"
                    alt="Breathing Exercise"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Breathing Exercises</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Guided breathing techniques and meditation practices for immediate stress relief and long-term relaxation</p>
                <Link href="/community" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300">
                  Try Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image
                    src="/journaling.jpg"
                    alt="Journaling"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Journaling</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Personalized journaling tools to track your thoughts, emotions, and progress on your mental health journey</p>
                <Link href="/community" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:translate-x-2 transition-all duration-300">
                  Start Today
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
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
              <div className="text-emerald-100 text-lg font-medium">Community Members</div>
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
              Join our supportive community and take the first step towards better mental health. 
              It&apos;s completely free, anonymous, and designed with your wellbeing in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/community"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Join Community</span>
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
                <Link href="/community" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Community</Link>
                <Link href="#features" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Features</Link>
                <Link href="#about" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">About</Link>
                <Link href="/blog" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <div className="space-y-4">
                <Link href="#contact" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Contact</Link>
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
