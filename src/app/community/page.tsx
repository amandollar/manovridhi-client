import ChatInterface from '@/components/ChatInterface';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600">Connect with others on their mental health journey</p>
        </div>
        
        <ChatInterface />
      </div>
    </div>
  );
}
