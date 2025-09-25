import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manovridhi</h1>
                <p className="text-xs text-gray-500 -mt-1">Mental Health Platform</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group cursor-pointer py-2">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group cursor-pointer py-2">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link href="/community" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group py-2">
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group cursor-pointer py-2">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/community" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
              >
                Join Now
              </Link>
              <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Trusted by 10,000+ users
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Mental Health
                  <span className="block text-emerald-600">Journey Starts Here</span>
                </h1>
                <div className="relative">
                  <p className="text-2xl lg:text-3xl text-gray-700 font-medium mb-4 leading-relaxed">
                    &ldquo;स्वागत है! यहाँ आपका मन खुलकर बोल सकेगा ❤️&rdquo;
                  </p>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Comprehensive mental health support platform offering AI-powered assistance, 
                  professional guidance, and a supportive community for your wellness journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/community"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
                <a 
                  href="#features"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 text-center cursor-pointer"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
                  </span>
                </a>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Anonymous</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur-3xl opacity-15 scale-110"></div>
                <Image
                  src="/heroImage.png"
                  alt="Mental Health Support"
                  width={500}
                  height={500}
                  className="relative rounded-full shadow-2xl object-cover border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                      <div className="text-xs text-gray-500">Always here for you</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-600 text-sm">🤖</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">AI Assistant</div>
                      <div className="text-xs text-gray-500">Ready to help</div>
                    </div>
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
              Complete Mental Health Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need for your mental health journey, from AI-powered support to professional guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vriddhi Chatbot */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6">
                  <Image
                    src="/chatbot.jpg"
                    alt="Vriddhi Chatbot"
                    width={280}
                    height={180}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Chatbot</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">Engage in supportive conversations and gain personalised insights with our intelligent AI chatbot, available 24/7 for immediate assistance.</p>
                <Link href="/chatbot" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Start Chatting
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Mental Health Guides */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6">
                  <Image
                    src="/guides.jpg"
                    alt="Mental Health Guides"
                    width={280}
                    height={180}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Guides</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">Access a rich library of expert-curated guides, offering practical advice and strategies for managing various mental health challenges.</p>
                <Link href="/guides" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Explore Guides
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Community Support */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6">
                  <Image
                    src="/community.jpg"
                    alt="Community Support"
                    width={280}
                    height={180}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">Join our empathetic community forums, share experiences, and receive peer support in a judgment-free and understanding environment.</p>
                <Link href="/community" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Join Community
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Tests and Results */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6">
                  <Image
                    src="/test-results.jpg"
                    alt="Tests and Results"
                    width={280}
                    height={180}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tests & Results</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">Take comprehensive mental health assessments and track your progress with detailed insights and personalized recommendations.</p>
                <Link href="/tests" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Take Assessment
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Connect with Professionals */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6">
                  <Image
                    src="/connect-with.jpg"
                    alt="Connect with Professionals"
                    width={280}
                    height={180}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connect with Professionals</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">Access licensed therapists, counselors, and mental health professionals for personalized support and treatment.</p>
                <Link href="/professionals" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Find Professional
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
              <div className="relative">
                <div className="mb-6 bg-gradient-to-br from-red-100 to-red-200 h-48 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🚨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Support</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">24/7 crisis support and emergency resources when you need immediate help and intervention.</p>
                <Link href="/emergency" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  Get Help Now
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
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
                <Link href="/community" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Community</Link>
                <a href="#features" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300 cursor-pointer">Features</a>
                <a href="#about" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300 cursor-pointer">About</a>
                <Link href="/blog" className="block text-gray-400 hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-300">Blog</Link>
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
