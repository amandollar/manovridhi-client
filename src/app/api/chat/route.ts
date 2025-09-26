import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Gemini AI with better configuration
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey || '');

// Use a more reliable model with better configuration
const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.0-flash',
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

// Test endpoint to check if API key is working
export async function GET(): Promise<NextResponse> {
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }
  
  try {
    const testResult = await model.generateContent('Hello, respond with just "API working"');
    const response = await testResult.response;
    const text = response.text();
    return NextResponse.json({ status: 'API working', response: text });
  } catch (error) {
    console.error('API test error:', error);
    return NextResponse.json({ error: 'API test failed', details: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log('Chat API POST request received');
  
  // Set timeout for the entire request
  const timeoutPromise = new Promise<NextResponse>((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), 10000); // 10 second timeout
  });

  try {
    const requestPromise = (async (): Promise<NextResponse> => {
      // Check if API key is available
      if (!apiKey) {
        console.error('GEMINI_API_KEY not found');
        return NextResponse.json({
          response: "I'm sorry, the AI service is not properly configured. Please contact support.",
          isRedirect: false
        });
      }

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
      const isMentalHealth = isMentalHealthRelated(message);
      console.log('Message:', message);
      console.log('Is mental health related:', isMentalHealth);
      
      if (!isMentalHealth) {
        console.log('Message not mental health related, returning predefined response');
        return NextResponse.json({
          response: PREDEFINED_RESPONSES.notMentalHealth,
          isRedirect: true
        });
      }

      // Build conversation context
      const conversationContext = buildConversationContext(message, conversationHistory);
      console.log('Conversation context:', conversationContext);

      // Generate response with timeout
      console.log('Calling Gemini API...');
      console.log('API Key present:', !!apiKey);
      console.log('API Key length:', apiKey ? apiKey.length : 0);
      
      try {
        const result = await model.generateContent(conversationContext);
        console.log('Gemini API result received');
        
        const response = await result.response;
        console.log('Gemini API response object received');
        
        const text = response.text();
        console.log('Gemini API response text:', text);

        // Validate response
        if (!text || text.trim().length === 0) {
          console.log('Empty response from Gemini API');
          return NextResponse.json({
            response: PREDEFINED_RESPONSES.error,
            isRedirect: false
          });
        }

        console.log('Returning successful response');
        return NextResponse.json({
          response: text.trim(),
          isRedirect: false
        });
      } catch (geminiError: unknown) {
        console.error('Gemini API error details:', geminiError);
        console.error('Error message:', geminiError instanceof Error ? geminiError.message : 'Unknown error');
        console.error('Error stack:', geminiError instanceof Error ? geminiError.stack : 'No stack trace');
        
        // Return more specific error message
        let errorMessage = PREDEFINED_RESPONSES.error;
        const errorMessageStr = geminiError instanceof Error ? geminiError.message : String(geminiError);
        if (errorMessageStr.includes('API key')) {
          errorMessage = "API key issue detected. Please check configuration.";
        } else if (errorMessageStr.includes('quota')) {
          errorMessage = "API quota exceeded. Please try again later.";
        } else if (errorMessageStr.includes('permission')) {
          errorMessage = "API permission denied. Please check access rights.";
        }
        
        return NextResponse.json({
          response: errorMessage,
          isRedirect: false
        });
      }
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
