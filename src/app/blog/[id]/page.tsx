'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { blogs } from '@/data/blogs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useState, useEffect, use } from 'react';
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen, Eye, Heart, Headphones } from 'lucide-react';
import AudioGrid from '@/components/relaxation/AudioGrid';
import { getAudioByBlogCategory } from '@/data/relaxation-audio';
import { useAuth } from '@/contexts/AuthContext';
import './blog.css';

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const blogId = parseInt(resolvedParams.id);
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8 text-lg">The blog post you're looking for doesn't exist or may have been moved.</p>
            <Link 
              href="/home"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BlogPostContent blog={blog} blogId={blogId} />
  );
}

function BlogPostContent({ blog, blogId }: { blog: any; blogId: number }) {
  const { isAuthenticated } = useAuth();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(25); // Fixed initial value to prevent hydration mismatch

  useEffect(() => {
    // Set random like count after hydration to avoid mismatch
    setLikeCount(Math.floor(Math.random() * 50) + 10);
    
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      <Navbar />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <section className="py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            href="/home"
            className="inline-flex items-center text-gray-600 hover:text-green-600 font-medium group transition-all duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Articles
          </Link>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Article Header */}
            <div className="p-8 lg:p-12 border-b border-gray-100">
              <div className="text-center mb-8">
                {/* Category Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold mb-6 border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {blog.category}
                </div>
                
                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>
                
                {/* Excerpt */}
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {blog.excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-green-600" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isLiked 
                        ? 'bg-red-100 text-red-600 border border-red-200' 
                        : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {likeCount}
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-green-50 hover:text-green-600 transition-all duration-200 border border-gray-200"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg prose-green max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0 border-b border-gray-200 pb-3">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6 first:mt-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4 first:mt-0">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4 text-base">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 ml-4">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1 ml-4">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-base leading-relaxed">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-900">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-gray-600">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg my-4">
                        <p className="text-gray-700 italic text-base">{children}</p>
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {blog.author}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mental health professional with expertise in {blog.category.toLowerCase()}. 
                  Dedicated to providing evidence-based insights and practical strategies for improving mental wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaxation Audio Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Relaxation Audio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complement your reading with specially curated relaxation audio designed to support your mental wellbeing.
            </p>
          </div>
          
          {isAuthenticated ? (
            <AudioGrid 
              audioList={getAudioByBlogCategory(blog.category)}
              showCategory={false}
            />
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unlock Relaxation Audio</h3>
                <p className="text-gray-600 mb-6">
                  Sign in to access our curated collection of relaxation audio designed to support your mental wellbeing.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Sign In to Access Audio
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 hover:bg-green-50 transition-all duration-200"
                  >
                    Create Free Account
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter(b => b.id !== blogId).slice(0, 3).map((relatedBlog) => (
              <article key={relatedBlog.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group transform hover:-translate-y-2">
                <div className="relative">
                  <Image
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {relatedBlog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedBlog.readTime}
                    </div>
                    <Link 
                      href={`/blog/${relatedBlog.id}`}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 ml-1 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link 
            href="/home"
            className="inline-flex items-center text-gray-600 hover:text-green-600 font-medium group transition-all duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
