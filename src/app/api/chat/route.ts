import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Gemini AI with better configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Use a more reliable model with better configuration
const model = genAI.getGenerativeModel({ 
  model: 'gemini-1.5-flash',
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 150, // Limit response length for faster responses
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
});

// Optimized system prompt - shorter and more focused
const SYSTEM_PROMPT = `You are Vriddhi AI, a mental health assistant. 

RULES:
- Keep responses under 2 sentences
- Be warm, supportive, and brief
- Focus on mental health topics only
- Suggest professional help for serious concerns
- End with encouragement

Stay concise and helpful.`;

// Cached mental health keywords for faster processing
const MENTAL_HEALTH_KEYWORDS = new Set([
  'anxiety', 'depression', 'stress', 'mental health', 'therapy', 'counseling',
  'mindfulness', 'meditation', 'self-care', 'wellness', 'emotions', 'feelings',
  'panic', 'worry', 'sad', 'angry', 'frustrated', 'overwhelmed', 'burnout',
  'trauma', 'ptsd', 'bipolar', 'ocd', 'adhd', 'autism', 'eating disorder',
  'addiction', 'substance', 'alcohol', 'drugs', 'suicide', 'self-harm',
  'crisis', 'emergency', 'help', 'support', 'coping', 'recovery', 'healing',
  'psychologist', 'psychiatrist', 'medication', 'treatment', 'diagnosis',
  'symptoms', 'mental illness', 'disorder', 'condition', 'mood', 'behavior',
  'thoughts', 'cognitive', 'behavioral', 'cbt', 'dbt', 'breathing', 'relaxation',
  'sleep', 'insomnia', 'nightmares', 'dreams', 'relationships', 'family', 'friends',
  'social', 'isolation', 'loneliness', 'work', 'job', 'career', 'school', 'college',
  'exam', 'test', 'performance', 'pressure', 'expectations', 'goals', 'motivation',
  'energy', 'fatigue', 'tired', 'exhausted', 'rest', 'exercise', 'fitness', 'diet',
  'confidence', 'self-esteem', 'self-worth', 'identity', 'purpose', 'meaning'
]);

// Pre-defined responses for common scenarios
const PREDEFINED_RESPONSES = {
  notMentalHealth: "I'm Vriddhi AI, your mental health companion. I'm here to help with mental health topics like anxiety, depression, stress management, mindfulness, and emotional wellness. How can I support your mental health journey today?",
  error: "I'm having trouble responding right now. Please try again in a moment. If you're in crisis, contact emergency services immediately.",
  timeout: "I'm taking longer than usual to respond. Please try again with a shorter message."
};

// Function to check if message is mental health related (optimized)
function isMentalHealthRelated(message: string): boolean {
  const messageLower = message.toLowerCase();
  const words = messageLower.split(/\s+/);
  
  // Check for exact keyword matches first (faster)
  for (const word of words) {
    if (MENTAL_HEALTH_KEYWORDS.has(word)) {
      return true;
    }
  }
  
  // Check for partial matches only if no exact matches found
  for (const keyword of MENTAL_HEALTH_KEYWORDS) {
    if (messageLower.includes(keyword)) {
      return true;
    }
  }
  
  return false;
}

// Interface for conversation history messages
interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Function to build conversation context (optimized)
function buildConversationContext(message: string, conversationHistory: ConversationMessage[]): string {
  // Limit conversation history to last 6 messages to prevent context overflow
  const recentHistory = conversationHistory.slice(-6);
  
  let context = SYSTEM_PROMPT;
  
  if (recentHistory.length > 0) {
    context += "\n\nRecent conversation:\n";
    recentHistory.forEach((msg: ConversationMessage) => {
      context += `${msg.role}: ${msg.content}\n`;
    });
  }
  
  context += `\nUser: ${message}\nVriddhi AI:`;
  
  return context;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Set timeout for the entire request
  const timeoutPromise = new Promise<NextResponse>((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), 10000); // 10 second timeout
  });

  try {
    const requestPromise = (async (): Promise<NextResponse> => {
      const { message, conversationHistory = [] } = await request.json();

      // Validate input
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return NextResponse.json(
          { error: 'Message is required and cannot be empty' },
          { status: 400 }
        );
      }

      // Limit message length to prevent abuse
      if (message.length > 1000) {
        return NextResponse.json(
          { error: 'Message is too long. Please keep it under 1000 characters.' },
          { status: 400 }
        );
      }

      // Check if the message is mental health related
      if (!isMentalHealthRelated(message)) {
        return NextResponse.json({
          response: PREDEFINED_RESPONSES.notMentalHealth,
          isRedirect: true
        });
      }

      // Build conversation context
      const conversationContext = buildConversationContext(message, conversationHistory);

      // Generate response with timeout
      const result = await model.generateContent(conversationContext);
      const response = await result.response;
      const text = response.text();

      // Validate response
      if (!text || text.trim().length === 0) {
        return NextResponse.json({
          response: PREDEFINED_RESPONSES.error,
          isRedirect: false
        });
      }

      return NextResponse.json({
        response: text.trim(),
        isRedirect: false
      });
    })();

    // Race between the request and timeout
    return await Promise.race([requestPromise, timeoutPromise]);

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message === 'Request timeout') {
        return NextResponse.json(
          { 
            error: PREDEFINED_RESPONSES.timeout,
            isRedirect: false
          },
          { status: 408 }
        );
      }
      
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { 
            error: 'Service temporarily unavailable. Please try again later.',
            isRedirect: false
          },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { 
        error: PREDEFINED_RESPONSES.error,
        isRedirect: false
      },
      { status: 500 }
    );
  }
}
