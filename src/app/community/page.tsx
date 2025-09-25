import ChatInterface from '@/components/ChatInterface';
import Navbar from '@/components/Navbar';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Community Support
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Connect with others on their mental health journey. Share experiences, 
              find support, and build meaningful connections in a safe, anonymous space.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ChatInterface />
        </div>
      </section>
    </div>
  );
}
