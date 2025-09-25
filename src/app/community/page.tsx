'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';

interface Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  owner: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  text: string;
  postId: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/posts`);
      const data = await response.json();
      if (data.data) {
        setPosts(data.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };


  const addComment = async (postId: string) => {
    if (!user || !newComment.trim()) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          text: newComment.trim(),
          owner: user.email
        }),
      });

      if (response.ok) {
        setNewComment('');
        fetchPosts();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading community posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Safe Community Space
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Mental Health
              <span className="block font-medium text-emerald-600">Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
              Connect with others on similar journeys, share experiences, and find support in a safe, moderated environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Share Your Story
              </Link>
              <div className="text-sm text-gray-500">
                Join <span className="font-medium text-emerald-600">{posts.length}</span> community members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Posts Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              Community Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Shared
              <span className="font-medium text-emerald-600"> Experiences</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Real stories from real people on their mental health journeys
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts List */}
            <div className="lg:col-span-2">
              {posts.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Start the Conversation</h3>
                  <p className="text-gray-600 mb-6">Be the first to share your story and inspire others in our supportive community.</p>
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Share Your Story
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <article key={post._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="text-emerald-600 font-semibold text-lg">
                                {post.owner.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{post.owner}</h4>
                              <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4 font-medium">{post.description}</p>
                        
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
                        </div>
                      </div>

                      {/* Comments Section */}
                      <div className="border-t border-gray-100 bg-gray-50/50">
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <h4 className="font-medium text-gray-900">
                              {post.comments?.length || 0} Comments
                            </h4>
                          </div>
                          
                          {/* Comments List */}
                          <div className="space-y-4 mb-6">
                            {post.comments?.map((comment) => (
                              <div key={comment._id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                <div className="flex items-start space-x-3">
                                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-emerald-600 font-medium text-sm">
                                      {comment.owner.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h5 className="font-medium text-gray-900 text-sm">{comment.owner}</h5>
                                      <span className="text-gray-400 text-xs">•</span>
                                      <span className="text-gray-500 text-xs">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{comment.text}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Add Comment Form */}
                          <div className="flex space-x-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-emerald-600 font-medium text-sm">
                                {user?.email?.charAt(0).toUpperCase() || '?'}
                              </span>
                            </div>
                            <div className="flex-1 flex space-x-3">
                              <input
                                type="text"
                                placeholder="Share your thoughts..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-gray-900 bg-white shadow-sm"
                              />
                              <button
                                onClick={() => addComment(post._id)}
                                disabled={!newComment.trim()}
                                className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
            )}
          </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Community Guidelines */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Community Guidelines</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Be respectful and kind to others</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Share your experiences to help others</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Keep discussions supportive and constructive</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Respect privacy and confidentiality</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Report inappropriate content</span>
                  </li>
                </ul>
              </div>
            </div>
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