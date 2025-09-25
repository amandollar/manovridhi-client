import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Blog data - in a real app, this would come from a database or CMS
const blogs = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety disorders, their symptoms, and evidence-based strategies for managing anxiety in your daily life.",
    content: `# Understanding Anxiety: A Comprehensive Guide

Anxiety is one of the most common mental health conditions, affecting millions of people worldwide. In this comprehensive guide, we'll explore the different types of anxiety disorders, their symptoms, and evidence-based strategies for managing anxiety in your daily life.

## What is Anxiety?

Anxiety is a natural human response to stress or perceived threats. It's our body's way of preparing for potential danger. However, when anxiety becomes excessive, persistent, and interferes with daily activities, it may indicate an anxiety disorder.

## Types of Anxiety Disorders

### 1. Generalized Anxiety Disorder (GAD)
GAD is characterized by excessive worry about various aspects of life, even when there's no apparent reason for concern. People with GAD often feel restless, fatigued, and have difficulty concentrating.

### 2. Panic Disorder
Panic disorder involves sudden, intense episodes of fear that peak within minutes. These panic attacks can include physical symptoms like heart palpitations, sweating, and shortness of breath.

### 3. Social Anxiety Disorder
Social anxiety disorder involves intense fear of social situations and being judged by others. This can significantly impact work, school, and personal relationships.

### 4. Specific Phobias
Specific phobias are intense fears of particular objects or situations, such as heights, spiders, or flying.

## Common Symptoms

- Excessive worry or fear
- Restlessness or feeling on edge
- Fatigue
- Difficulty concentrating
- Irritability
- Muscle tension
- Sleep disturbances
- Panic attacks

## Evidence-Based Management Strategies

### 1. Cognitive Behavioral Therapy (CBT)
CBT is one of the most effective treatments for anxiety. It helps you identify and change negative thought patterns and behaviors.

### 2. Mindfulness and Meditation
Regular mindfulness practice can help you stay present and reduce anxious thoughts about the future.

### 3. Regular Exercise
Physical activity releases endorphins and can significantly reduce anxiety symptoms.

### 4. Deep Breathing Techniques
Simple breathing exercises can help calm your nervous system during anxious moments.

### 5. Professional Help
Don't hesitate to seek help from mental health professionals. Therapy and, when appropriate, medication can be highly effective.

## When to Seek Help

If anxiety is interfering with your daily life, relationships, or work, it's important to seek professional help. Early intervention can lead to better outcomes and improved quality of life.

Remember, you're not alone in this journey. With the right support and strategies, anxiety can be effectively managed, and you can lead a fulfilling life.`,
    author: "Dr. Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Anxiety",
    image: "/heroImage.png",
    featured: true
  },
  {
    id: 2,
    title: "The Science of Mindfulness and Mental Health",
    excerpt: "Discover how mindfulness practices can rewire your brain and improve your mental wellbeing through scientific research and practical techniques.",
    content: `# The Science of Mindfulness and Mental Health

Mindfulness has gained significant attention in recent years as a powerful tool for improving mental health. But what does science actually tell us about how mindfulness affects our brains and wellbeing?

## What is Mindfulness?

Mindfulness is the practice of being fully present and engaged in the current moment, without judgment. It involves paying attention to your thoughts, feelings, and sensations as they arise, without trying to change or suppress them.

## The Neuroscience of Mindfulness

### Brain Changes
Research using neuroimaging has shown that regular mindfulness practice can lead to structural changes in the brain:

- **Increased gray matter** in areas associated with learning, memory, and emotional regulation
- **Thickened prefrontal cortex**, which is responsible for executive functions
- **Reduced amygdala activity**, the brain's fear center
- **Enhanced connectivity** between different brain regions

### Neuroplasticity
The brain's ability to change and adapt (neuroplasticity) means that mindfulness practice can literally rewire your brain over time, leading to lasting improvements in mental health.

## Mental Health Benefits

### 1. Reduced Anxiety and Depression
Studies have consistently shown that mindfulness-based interventions can significantly reduce symptoms of anxiety and depression.

### 2. Improved Emotional Regulation
Mindfulness helps you become more aware of your emotions and develop healthier ways of responding to them.

### 3. Enhanced Focus and Attention
Regular practice can improve your ability to concentrate and maintain attention on tasks.

### 4. Better Stress Management
Mindfulness activates the parasympathetic nervous system, helping your body relax and recover from stress.

## Practical Mindfulness Techniques

### 1. Mindful Breathing
Focus your attention on your breath, noticing each inhale and exhale without trying to change it.

### 2. Body Scan
Slowly scan through your body from head to toe, noticing any sensations without judgment.

### 3. Mindful Walking
Pay attention to the sensations of walking - the feeling of your feet touching the ground, the movement of your legs.

### 4. Mindful Eating
Eat slowly and deliberately, paying attention to the taste, texture, and smell of your food.

## Getting Started

Start with just 5-10 minutes of mindfulness practice daily. Consistency is more important than duration. There are many apps and guided meditations available to help you begin your practice.

Remember, mindfulness is a skill that develops over time. Be patient with yourself and approach it with curiosity rather than expectation.`,
    author: "Dr. Michael Chen",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Mindfulness",
    image: "/brainImage.webp",
    featured: false
  }
];

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
