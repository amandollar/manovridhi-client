'use client';

import { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

export default function ChatInterface() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePostCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Community Chat</h2>
        <p className="text-gray-600">
          Share your thoughts, experiences, and support others in their mental health journey.
        </p>
      </div>

      <PostForm onPostCreated={handlePostCreated} />
      <PostList refreshTrigger={refreshTrigger} />
    </div>
  );
}
