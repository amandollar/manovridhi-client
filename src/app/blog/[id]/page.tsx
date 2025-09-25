import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { blogs } from '@/data/blogs';

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogId = parseInt(id);
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/home"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/home"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              {blog.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-emerald-100">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-600 text-lg leading-relaxed mb-8">
                  {blog.excerpt}
                </div>
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {blog.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter(b => b.id !== blogId).slice(0, 3).map((relatedBlog) => (
              <article key={relatedBlog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative">
                  <Image
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {relatedBlog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {relatedBlog.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${relatedBlog.id}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link 
            href="/home"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
