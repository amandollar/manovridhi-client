import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect with Professionals
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Access licensed therapists, counselors, and mental health professionals 
              for personalized support and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Professional Mental Health Support
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Connect with qualified mental health professionals who can provide personalized 
            support, therapy, and treatment options tailored to your needs.
          </p>
          
          <div className="bg-gray-100 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-gray-600 mb-8">
              We&apos;re working on connecting you with the best mental health professionals. 
              This feature will be available soon.
            </p>
            <Link 
              href="/community"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Join Community for Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
