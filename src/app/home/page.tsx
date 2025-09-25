import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function HomePage() {
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
    },
    {
      id: 3,
      title: "Building Resilience: Strategies for Tough Times",
      excerpt: "Explore proven methods to build emotional resilience and bounce back from life's challenges with strength and grace.",
      author: "Dr. Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Resilience",
      image: "/deep-breathing.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Depression: Breaking the Stigma and Finding Hope",
      excerpt: "An honest discussion about depression, its impact, and the journey toward healing with professional insights and personal stories.",
      author: "Dr. James Wilson",
      date: "December 8, 2024",
      readTime: "12 min read",
      category: "Depression",
      image: "/journaling.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Power of Journaling for Mental Health",
      excerpt: "Learn how regular journaling can improve your mental health, reduce stress, and help you process emotions effectively.",
      author: "Dr. Lisa Park",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Self-Care",
      image: "/community.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Sleep and Mental Health: The Vital Connection",
      excerpt: "Understand how sleep quality affects your mental health and discover practical tips for better sleep hygiene.",
      author: "Dr. Robert Kim",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Sleep",
      image: "/test-results.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Anxiety", "Depression", "Mindfulness", "Resilience", "Self-Care", "Sleep"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mental Health Blog
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Expert insights, practical advice, and inspiring stories to support your mental health journey. 
              Written by professionals, for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <div className="w-20 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogs[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{blogs[0].author}</span>
                  <span>•</span>
                  <span>{blogs[0].date}</span>
                  <span>•</span>
                  <span>{blogs[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogs[0].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {blogs[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${blogs[0].id}`}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group"
                >
                  Read Full Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All" 
                    ? "bg-emerald-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${blog.id}`}
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Mental Health Insights
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get the latest articles, tips, and resources delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-xl font-bold">Manovridhi</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted companion in mental health and wellness.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link href="/community" className="block text-gray-400 hover:text-white transition-colors">Community</Link>
                <Link href="/home" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2">
                <Link href="/home?category=anxiety" className="block text-gray-400 hover:text-white transition-colors">Anxiety</Link>
                <Link href="/home?category=depression" className="block text-gray-400 hover:text-white transition-colors">Depression</Link>
                <Link href="/home?category=mindfulness" className="block text-gray-400 hover:text-white transition-colors">Mindfulness</Link>
                <Link href="/home?category=self-care" className="block text-gray-400 hover:text-white transition-colors">Self-Care</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Help</h4>
              <div className="space-y-2">
                <Link href="/emergency" className="block text-gray-400 hover:text-white transition-colors">Emergency Support</Link>
                <Link href="/professionals" className="block text-gray-400 hover:text-white transition-colors">Find Professional</Link>
                <Link href="/tests" className="block text-gray-400 hover:text-white transition-colors">Take Assessment</Link>
                <Link href="/chatbot" className="block text-gray-400 hover:text-white transition-colors">AI Chatbot</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
